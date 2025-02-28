"use client"

import { useChat } from "ai/react"
import { ChatHeader } from "../../components/chat/chat-header"
import { ChatInput } from "../../components/chat/chat-input"
import { ChatMessages } from "../../components/chat/chat-messages"
import { Card } from "../../components/ui/card"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat()
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 p-4">
      <Card className="flex w-full max-w-4xl mx-auto flex-col">
        <ChatHeader />
        <ChatMessages messages={messages} isLoading={isLoading} error={error} />
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </Card>
    </div>
  )
}

