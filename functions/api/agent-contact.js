export async function onRequestGet(context) {
  const contact = {
    email: context.env.CONTACT_EMAIL || 'joshsylvia@yahoo.com',
    github: 'https://github.com/joshsylvia-eng',
    linkedin: 'https://linkedin.com/in/joshsylvia'
  };

  return new Response(JSON.stringify({ contact }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
