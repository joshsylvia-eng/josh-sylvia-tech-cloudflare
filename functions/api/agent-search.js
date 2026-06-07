export async function onRequestPost(context) {
  try {
    const { query } = await context.request.json();
    
    // Simplified search index for Cloudflare deployment
    const searchIndex = [
      { id: 1, title: 'Home', category: 'page', url: 'index.html', description: 'Josh Sylvia - Principal Software Engineer & Technology Innovator homepage with CISSP certification', keywords: ['josh', 'sylvia', 'principal', 'software', 'engineer', 'technology', 'innovator', 'cissp', 'certified', 'cybersecurity', 'home', 'portfolio'] },
      { id: 2, title: 'AI Chatbot', category: 'page', url: 'ai.html', description: 'AI-powered chatbot with Groq integration', keywords: ['ai', 'artificial', 'intelligence', 'chatbot', 'groq', 'machine', 'learning', 'automation'] },
      { id: 3, title: 'APIs', category: 'page', url: 'apis.html', description: 'REST API documentation and integration guides', keywords: ['api', 'rest', 'endpoint', 'service', 'web', 'integration', 'documentation'] },
      { id: 4, title: 'QA', category: 'page', url: 'qa.html', description: 'Quality assurance and testing resources', keywords: ['qa', 'quality', 'assurance', 'testing', 'questions', 'answers', 'debugging'] },
      { id: 5, title: 'Tutorials', category: 'page', url: 'tutorials.html', description: 'Video tutorials and learning resources', keywords: ['tutorial', 'guide', 'how', 'to', 'learn', 'video', 'github', 'education'] },
      { id: 6, title: 'Cybersecurity', category: 'page', url: 'cybersecurity.html', description: 'Cybersecurity expertise and CISSP certification', keywords: ['cybersecurity', 'security', 'cissp', 'certification', 'network', 'protection', 'threats'] },
      { id: 7, title: 'About', category: 'page', url: 'about.html', description: 'About Josh Sylvia - background, skills, and experience', keywords: ['about', 'background', 'experience', 'skills', 'resume', 'career'] },
      { id: 8, title: 'Contact', category: 'page', url: 'contact.html', description: 'Contact information and form', keywords: ['contact', 'email', 'reach', 'message', 'hire'] }
    ];

    const queryLower = query.toLowerCase();
    const results = searchIndex.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(queryLower);
      const descMatch = item.description.toLowerCase().includes(queryLower);
      const keywordMatch = item.keywords.some(keyword => keyword.toLowerCase().includes(queryLower));
      return titleMatch || descMatch || keywordMatch;
    });

    return new Response(JSON.stringify({ results }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
