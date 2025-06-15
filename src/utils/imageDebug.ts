// Image debugging utilities for troubleshooting broken images

export const checkImageExists = async (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
    
    // Timeout after 5 seconds
    setTimeout(() => resolve(false), 5000)
  })
}

export const logImageStatus = async (images: string[]) => {
  console.log('🖼️ Checking image availability...')
  
  for (const src of images) {
    const exists = await checkImageExists(src)
    const status = exists ? '✅' : '❌'
    console.log(`${status} ${src}`)
  }
}

export const getAllImages = (): string[] => {
  const images: string[] = []
  
  // Get all img elements
  document.querySelectorAll('img').forEach(img => {
    if (img.src) images.push(img.src)
  })
  
  // Get background images
  document.querySelectorAll('*').forEach(el => {
    const style = window.getComputedStyle(el)
    const bgImage = style.backgroundImage
    if (bgImage && bgImage !== 'none') {
      const matches = bgImage.match(/url\(["']?([^"')]+)["']?\)/)
      if (matches && matches[1]) images.push(matches[1])
    }
  })
  
  return [...new Set(images)] // Remove duplicates
}

// Debug function to run in browser console
export const debugAllImages = async () => {
  const images = getAllImages()
  await logImageStatus(images)
  
  // Also check expected images
  const expectedImages = [
    '/multimedium-logo.png',
    '/portfolio/pa-real-estate.webp',
    '/portfolio/blissful-existence.webp', 
    '/portfolio/falls_community.webp',
    '/profile-picture.jpg',
    '/logo.svg',
    '/logo-dark.svg'
  ]
  
  console.log('\n🎯 Checking expected images...')
  await logImageStatus(expectedImages)
}

// Add to window for easy console access
if (typeof window !== 'undefined') {
  (window as any).debugImages = debugAllImages
  console.log('🔧 Image debugging available: Run debugImages() in console')
}