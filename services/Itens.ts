import axios from 'axios';

export interface Item {
  id: number;
  name: string;
  quantity: string;
  dosage: string;
}

export interface ItemRequest {
  name: string;
  quantity: string;
  dosage: string;
}

export const api = axios.create({
  baseURL: "https://api-sageapp-services.onrender.com",
  headers: { "Content-Type": "application/json" },
});

//Adicionar item
export async function addItem(data: ItemRequest): Promise<Item> {
  try {
    const resp = await api.post<Item>("/itens", data);
    return resp.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.error || "Erro ao inserir item (API)");
  }
}

//Listar todos os itens
export async function getAllItems(): Promise<Item[]> {
  try {
    const resp = await api.get<Item[]>("/itens");
    return resp.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.error || "Erro ao buscar itens (API)");
  }
}

// Buscar item por ID
export async function getItemById(id: number): Promise<Item> {
  try {
    const resp = await api.get<Item>(`/itens/${id}`);
    return resp.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.error || `Erro ao buscar item ${id} (API)`);
  }
}

// Atualizar item
export async function updateItem(id: number, data: ItemRequest): Promise<Item> {
  try {
    const resp = await api.put<Item>(`/itens/${id}`, data);
    return resp.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.error || `Erro ao atualizar item ${id} (API)`);
  }
}

// Deletar item
export async function deleteItem(id: number): Promise<void> {
  try {
    await api.delete(`/itens/${id}`);
  } catch (err: any) {
    throw new Error(err.response?.data?.error || `Erro ao deletar item ${id} (API)`);
  }
}
