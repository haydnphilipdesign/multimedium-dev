import React, { useState, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState(23)

  // Simulate activity
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(15, Math.min(35, prev + change))
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Initial welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: "Hi! I'm Haydn 👋 I see you're interested in growing your business online. What's your biggest challenge with your current website?",
          isUser: false,
          timestamp: new Date()
        }])
      }, 1000)
    }
  }, [isOpen, messages.length])

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate response
    setTimeout(() => {
      setIsTyping(false)
      const responses = [
        "That's a great question! I'd love to help you with that. Would you like to schedule a quick 15-minute call to discuss your specific needs?",
        "I've helped many PA businesses with similar challenges. Let's set up a free consultation to see how I can help you specifically.",
        "Perfect! I have some proven strategies for that. Would you prefer to chat on the phone or should I send you my availability?"
      ]
      
      const response: Message = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, response])
    }, 2000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-24 right-6 z-40">
        {/* Activity indicator */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 mb-3 animate-fade-in">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs text-white font-bold">H</span>
              </div>
              <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Haydn is online</div>
              <div className="text-gray-600 text-xs">{onlineUsers} visitors viewing this page</div>
            </div>
          </div>
        </div>

        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
            1
          </div>
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">H</span>
          </div>
          <div>
            <div className="font-semibold">Haydn Watkins</div>
            <div className="text-xs opacity-90 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Online • Responds instantly
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20 h-6 w-6 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs rounded-lg p-3 ${message.isUser 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-900'
            }`}>
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.isUser ? 'text-white/70' : 'text-gray-500'}`}>
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="bg-primary hover:bg-primary/90 p-2"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LiveChatWidget