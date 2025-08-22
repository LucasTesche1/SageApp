import api from "../api";

export async function sendPrompt(prompt: string): Promise<string> {
  try {
    const response = await api.post("/gemini", { prompt });
    return response.data.resposta;
  } catch (error: any) {
    console.error("Erro ao chamar API:", error.message);
    throw new Error("Falha ao se comunicar com a API");
  }
}
