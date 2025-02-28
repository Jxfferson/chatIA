import type { Message } from "ai"
import { cn } from "../../lib/util"
import { Bot, User } from "lucide-react"
import { Alert, AlertDescription } from "../ui/alert"
interface MessageCardProps {
  message: Message
}

export function MessageCard({ message }: MessageCardProps) {
  if (message.role === "error") {
    return (
      <Alert variant="destructive">
        <AlertDescription>{message.content}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className={cn("flex items-start gap-4 pr-5", message.role === "user" ? "flex-row-reverse" : "")}>
      <div
        className={cn("rounded-full p-2", message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted")}
      >
        {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
        )}
      >
        {message.content}
      </div>
    </div>
  )
}

