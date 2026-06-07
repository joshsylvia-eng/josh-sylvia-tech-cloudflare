export async function onRequestGet(context) {
  const experience = [
    {
      company: 'NSA',
      role: 'Principal Software Engineer',
      description: 'Led development of critical cybersecurity systems and intelligence platforms'
    },
    {
      company: 'NASA',
      role: 'Senior Software Engineer',
      description: 'Developed mission-critical software for space exploration projects'
    },
    {
      company: 'Barracuda Networks',
      role: 'Software Engineer',
      description: 'Built enterprise security solutions and network protection systems'
    }
  ];

  return new Response(JSON.stringify({ experience }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
