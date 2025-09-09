# SageApp – Aplicativo de Farmácia Inteligente

O **SageApp** é um sistema completo para farmácias, oferecendo recursos modernos para gestão, compras de medicamentos e integração com IA.  
Um dos principais diferenciais é o **chatbot inteligente integrado à API do Google Gemini**, capaz de responder dúvidas sobre fármacos, bulas, interações medicamentosas e orientações gerais de saúde (⚠️ sem substituir um profissional médico).

<div align=center>
<img width="363" height="364" alt="Image" src="https://github.com/user-attachments/assets/84a1e1c6-61d4-4b15-98c4-2df8d7f6e1eb" />
</div>

## ✨ Funcionalidades

- 🛒 **E-commerce de medicamentos**  
  - Catálogo completo de fármacos  
  - Carrinho de compras e checkout seguro  

- 📦 **Gestão de estoque**  
  - Controle de entrada e saída de medicamentos  
  - Alertas de validade e estoque mínimo  


- 🤖 **Chatbot inteligente (Google Gemini)**  
  - Responde dúvidas sobre medicamentos  
  - Explica bulas e efeitos colaterais  
  - Sugere cuidados gerais de saúde  

- 👤 **Área do usuário**  
  - Histórico de pedidos  
  - Notificações personalizadas  
  - Carteira de receitas digitais  

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React Native *(ajuste conforme usado)*  
- **Backend:** Node.js + Express + Expo *(ajuste conforme usado)*  
- **Autenticação:** Apache 2.0
- **Integração com IA:** [Google Gemini API](https://ai.google.dev/)  
- **Infraestrutura:** Docker

---

## 🤖 Integração com Google Gemini

O chatbot é integrado via API que consome os serviços do **Google Gemini**, possibilitando interações contextuais com os usuários.


---

🚀 Como Executar o Projeto

# Pré-requisitos:

- Node.js 
- Docker (opcional, para ambiente containerizado)
- React native
- Expo

# Passos:

## Clonar o repositório
git clone https://github.com/LucasTesche1/SageApp.git

cd SageApp

## Instalar dependências
npm install
npm install expo

## Rodar o servidor
npx expo start
