import { Button } from "../ui/button"
import { Moon, Sun, Bot } from "lucide-react"
import { useTheme } from "next-themes"

export function ChatHeader() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="border-b p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Bot className="h-6 w-6" />
        <h1 className="text-xl font-bold">Mi ChatBot</h1>
      </div>
      <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </div>
  )
}

