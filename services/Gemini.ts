import { api } from "./Authentication";

export async function sendPrompt(prompt: string) {
  const response = await api.post("/gemini", { prompt });
  return response.data;
}
