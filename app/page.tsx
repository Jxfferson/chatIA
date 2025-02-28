import Link from "next/link"
import { Button } from "../components/ui/button"
import { Bot } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <Bot className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary">Bienvenido a Mi ChatBot</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Un asistente inteligente potenciado por IA que te ayudará con tus preguntas y tareas.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Dev Jefferson
        </p>
<Link href="/chat">
          <Button size="lg" className="mt-8">
            Comenzar Chat
          </Button>
        </Link>
      </div>
    </div>
  )
}

