export async function onRequestPost(context) {
  try {
    const { name, email, subject, message } = await context.request.json();
    
    // In a real deployment, you would use a service like Resend or SendGrid
    // For Cloudflare Pages, you can use Cloudflare Email Routing or external APIs
    console.log('Contact form submission:', { name, email, subject, message });
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
