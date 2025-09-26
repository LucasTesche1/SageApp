import axios from 'axios';

//para puxar info do usuário
export interface User {
  id: number;
  name: string;
  email: string;
}

//login
export interface LoginRequest {
    email: string;
    password: string;
}

//registro
export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}
//resposta da API
export interface APIResponse {
    user: User;
    token: string;
}


export const api = axios.create({
    baseURL: "https://api-sageapp-services.onrender.com",
    headers: {"Content-Type" : "application/json"},
});

//funções

export async function login(data: LoginRequest): Promise<APIResponse> {
    try{
    const resp = await api.post<APIResponse>("/auth/login", data);
    return resp.data;

    }catch(err:any){
        throw new Error(err.response?.data?.message || "Erro ao logar, API SIDE");
    }
    
}

export async function register(data: RegisterRequest): Promise<APIResponse> {
    const resp = await api.post<APIResponse>("/auth/register", data);
    return resp.data;
    
}

