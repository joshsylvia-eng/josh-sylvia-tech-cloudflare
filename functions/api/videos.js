export async function onRequestGet(context) {
  // Simplified video data for Cloudflare deployment
  const videos = [
    {
      id: 1,
      title: 'CISSP Certification Complete Course',
      description: 'Complete CISSP certification training course',
      thumbnail: '/videos/cissp_certification_complete_course.mp4',
      url: '/videos/cissp_certification_complete_course.mp4',
      category: 'Cybersecurity'
    },
    {
      id: 2,
      title: 'Complete Cybersecurity Course for Beginners',
      description: 'Introduction to cybersecurity fundamentals',
      thumbnail: '/videos/complete_cybersecurity_course_for_beginners.mp4',
      url: '/videos/complete_cybersecurity_course_for_beginners.mp4',
      category: 'Cybersecurity'
    },
    {
      id: 3,
      title: 'Python for Cybersecurity',
      description: 'Python programming for security professionals',
      thumbnail: '/videos/python_for_cybersecurity.mp4',
      url: '/videos/python_for_cybersecurity.mp4',
      category: 'Programming'
    },
    {
      id: 4,
      title: 'JavaScript Tutorial',
      description: 'Complete JavaScript programming guide',
      thumbnail: '/videos/javascript_tutorial.mp4',
      url: '/videos/javascript_tutorial.mp4',
      category: 'Programming'
    }
  ];

  return new Response(JSON.stringify({ videos }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
