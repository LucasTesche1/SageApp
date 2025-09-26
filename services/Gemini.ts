import { api } from "./Authentication";

export interface GeminiResponse {
  prompt: string;
  resposta: string;
}

export async function sendPrompt(prompt: string): Promise<GeminiResponse> {
  const {data} = await api.post<GeminiResponse>("/gemini", { prompt });
  return data;
}
