export async function onRequestGet(context) {
  const skills = [
    {
      category: 'Cybersecurity',
      skills: ['CISSP Certification', 'Network Security', 'Threat Analysis', 'Security Architecture', 'Penetration Testing', 'Incident Response']
    },
    {
      category: 'Cloud Architecture',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Serverless', 'Microservices']
    },
    {
      category: 'AI & Machine Learning',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Natural Language Processing', 'Computer Vision', 'LLMs', 'RAG Systems']
    },
    {
      category: 'DevOps',
      skills: ['CI/CD', 'Jenkins', 'GitLab', 'Terraform', 'Ansible', 'Monitoring', 'Logging']
    },
    {
      category: 'Programming',
      skills: ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'Go', 'Java', 'SQL']
    },
    {
      category: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch', 'GraphQL']
    }
  ];

  return new Response(JSON.stringify({ skills }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
