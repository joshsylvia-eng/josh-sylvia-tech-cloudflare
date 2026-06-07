export async function onRequestGet(context) {
  const apiKey = context.env.GROQ_API_KEY || 'your_groq_api_key_here';
  
  return new Response(JSON.stringify({ apiKey: apiKey }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
