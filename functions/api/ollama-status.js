export async function onRequestGet(context) {
  return new Response(JSON.stringify({
    status: 'not_available',
    message: 'Ollama is not available on Cloudflare Pages. Using Groq API instead.',
    model: 'groq-llama-3.1-8b-instant'
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
