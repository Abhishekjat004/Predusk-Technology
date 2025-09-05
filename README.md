# Predusk-Technology

# 📘 AI-Powered Document Q&A System

## 🚀 Overview
This project is a **Document Question-Answering System** built with **Flask**, **Google Gemini**, **Cohere**, and **Pinecone**.  
Users can upload **PDFs or raw text**, which are split into chunks, embedded using **Google Generative AI embeddings**, and stored in **Pinecone**.  
When a user asks a question:
1. The query is rewritten into a standalone form (via Gemini).
2. Relevant chunks are retrieved from Pinecone.
3. Cohere reranks results for accuracy.
4. Gemini generates the final context-based answer.

---

## 🏗️ Architecture
![Architecture Diagram](./architecture.png) <!-- Add your diagram -->

**Workflow:**
1. **Upload PDF/Text** → Process & Chunk → Store in Pinecone  
2. **Ask Question** → Query Rewriter (Gemini)  
3. **Retriever** (Pinecone + Gemini embeddings)  
4. **Reranker** (Cohere)  
5. **Answer Generator** (Gemini with context)  

---

## ⚙️ Configuration

### 🔑 Environment Variables
Create a `.env` file in the project root (see `.env.example`):

```env
COHERE_API_KEY=your_cohere_api_key
GEMINI_API_KEY=your_google_gemini_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX_NAME=your_pinecone_index_name
📑 Chunking Parameters
chunk_size: 1000

chunk_overlap: 150

🔍 Retriever / Reranker
Retriever: Pinecone Vector DB (Google Generative AI embeddings)

Reranker: Cohere Rerank v3.0

🌐 Providers Used
Google Generative AI (Embeddings + Gemini Model)

Cohere API (Reranking)

Pinecone (Vector Database)

Flask (Backend Framework)

⚡ Quick Start
1. Clone the repo
bash
Copy code
git clone https://github.com/yourusername/yourproject.git
cd yourproject
2. Install dependencies
bash
Copy code
pip install -r requirements.txt
3. Setup environment
bash
Copy code
cp .env.example .env
# fill in your API keys
4. Run locally
bash
Copy code
python app.py
App will run at: http://localhost:5000

🌍 Deployment
This project is deployed on Railway.
🔗 Live App: https://yourapp.railway.app

📝 Remarks
⚠️ Free tier limits on Gemini & Cohere may restrict requests.

⚠️ Pinecone free index has size & query limits.

🚀 Improvements to consider:

Add authentication & user accounts.

Store chat history in a database (not just memory).

Extend support for DOCX/TXT uploads.

Frontend improvements.

📜 License
MIT License

yaml
Copy code

---

Would you like me to also generate the **`.env.example` file** and a **requirements.txt** for your project (so setup is suexample`).

```env
API_KEY=your_api_key_here
MODEL_PROVIDER=openai
DB_URL=your_database_url

