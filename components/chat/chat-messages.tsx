"use client"

import type { Message } from "ai"
import { MessageCard } from "./message-card"
import { ScrollArea } from "../ui/scroll-area"
import { useEffect, useRef } from "react"

interface ChatMessagesProps {
  messages: Message[]
  isLoading: boolean
  error?: Error
}

export function ChatMessages({ messages, isLoading, error }: ChatMessagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [])

  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="rounded-lg bg-muted px-4 py-2 text-sm">Pensando...</div>
          </div>
        )}

        {error && (
          <MessageCard
            message={{
              id: "error",
              role: "error",
              content: error.message,
            }}
          />
        )}
      </div>
    </ScrollArea>
  )
}

