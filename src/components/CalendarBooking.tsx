import { useState } from 'react'
import { Calendar, Clock, Phone, Video, CheckCircle, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

interface CalendarDay {
  date: string
  day: string
  dayNum: number
  slots: TimeSlot[]
}

export default function CalendarBooking() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [bookingType, setBookingType] = useState<'phone' | 'video'>('video')

  // Generate next 7 available business days
  const generateAvailableDays = (): CalendarDay[] => {
    const days: CalendarDay[] = []
    const today = new Date()
    let currentDate = new Date(today)
    
    // Skip to next business day if it's weekend
    if (currentDate.getDay() === 0) currentDate.setDate(currentDate.getDate() + 1) // Sunday
    if (currentDate.getDay() === 6) currentDate.setDate(currentDate.getDate() + 2) // Saturday
    
    for (let i = 0; i < 7; i++) {
      // Skip weekends
      if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
        currentDate.setDate(currentDate.getDate() + 1)
        continue
      }

      const dateStr = currentDate.toISOString().split('T')[0]
      const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'short' })
      const dayNum = currentDate.getDate()

      // Generate time slots (9 AM - 5 PM, excluding lunch 12-1)
      const slots: TimeSlot[] = [
        { id: `${dateStr}-09`, time: '9:00 AM', available: true },
        { id: `${dateStr}-10`, time: '10:00 AM', available: Math.random() > 0.3 },
        { id: `${dateStr}-11`, time: '11:00 AM', available: true },
        { id: `${dateStr}-14`, time: '2:00 PM', available: Math.random() > 0.4 },
        { id: `${dateStr}-15`, time: '3:00 PM', available: true },
        { id: `${dateStr}-16`, time: '4:00 PM', available: Math.random() > 0.2 },
      ]

      days.push({
        date: dateStr,
        day: dayName,
        dayNum,
        slots
      })

      currentDate.setDate(currentDate.getDate() + 1)
    }

    return days
  }

  const [availableDays] = useState<CalendarDay[]>(generateAvailableDays())

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setSelectedTime('') // Reset time when date changes
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleBookCall = () => {
    if (!selectedDate || !selectedTime) return

    // In a real implementation, this would integrate with Calendly, Acuity, or your booking system
    const bookingData = {
      date: selectedDate,
      time: selectedTime,
      type: bookingType,
      redirect: 'https://calendly.com/multimedium'
    }

    // For now, redirect to Calendly with pre-filled data
    window.open(bookingData.redirect, '_blank')
  }

  const selectedDay = availableDays.find(day => day.date === selectedDate)
  const availableSlots = selectedDay?.slots.filter(slot => slot.available) || []

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Calendar className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Book Your Free Strategy Call</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Revenue Goals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            30-minute strategy call to identify how much revenue you're losing and create a plan to fix it
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Benefits */}
          <div className="space-y-6">
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-800">
                  <CheckCircle className="h-6 w-6" />
                  What You'll Get From This Call
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Revenue Opportunity Analysis</div>
                    <div className="text-sm text-gray-600">See exactly how much money your current website is costing you</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Custom Growth Strategy</div>
                    <div className="text-sm text-gray-600">Personalized plan to increase your leads and conversions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Competitive Analysis</div>
                    <div className="text-sm text-gray-600">How your website stacks up against competitors</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Next Steps Plan</div>
                    <div className="text-sm text-gray-600">Clear roadmap to transform your online presence</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Preferred Call Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <button
                    onClick={() => setBookingType('video')}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      bookingType === 'video' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Video className="h-5 w-5 text-blue-600" />
                      <div className="text-left">
                        <div className="font-semibold">Video Call (Recommended)</div>
                        <div className="text-sm text-gray-600">Screen sharing for website review</div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => setBookingType('phone')}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      bookingType === 'phone' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div className="text-left">
                        <div className="font-semibold">Phone Call</div>
                        <div className="text-sm text-gray-600">Traditional phone conversation</div>
                      </div>
                    </div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Calendar */}
          <div className="space-y-6">
            {/* Date Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Select a Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {availableDays.map((day) => (
                    <button
                      key={day.date}
                      onClick={() => handleDateSelect(day.date)}
                      className={`p-3 rounded-lg border-2 transition-all text-center ${
                        selectedDate === day.date
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-xs text-gray-600">{day.day}</div>
                      <div className="font-semibold">{day.dayNum}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time Selection */}
            {selectedDate && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Select a Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => handleTimeSelect(slot.time)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedTime === slot.time
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                  {availableSlots.length === 0 && (
                    <div className="text-center text-gray-500 py-4">
                      No available slots for this date
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Book Button */}
            {selectedDate && selectedTime && (
              <Button
                onClick={handleBookCall}
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Free Strategy Call
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>100% Free - No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>30-Minute Duration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Instant Calendar Confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
