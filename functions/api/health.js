export async function onRequestGet(context) {
  return new Response(JSON.stringify({
    success: true,
    message: 'AI Chatbot Server is running',
    timestamp: new Date().toISOString()
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
