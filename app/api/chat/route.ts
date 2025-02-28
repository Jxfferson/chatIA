import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

// Crear el cliente de OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

console.log("API Key:", process.env.OPENAI_API_KEY)

// Configurar el runtime para optimización
export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Crear la respuesta del chat con streaming
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: messages.map((message: any) => ({
        content: message.content,
        role: message.role,
      })),
    })

    // Convertir el stream correctamente
    const stream = OpenAIStream(response as any) // <-- Agregamos "as any" para evitar problemas de tipos

    // Devolver la respuesta como un stream
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error("[CHAT ERROR]", error)
    return new Response(JSON.stringify({ error: "There was an error processing your request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

// GET handler para verificar que el endpoint está activo
export async function GET() {
  return new Response(JSON.stringify({ message: "Endpoint active. Use POST to send messages." }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
