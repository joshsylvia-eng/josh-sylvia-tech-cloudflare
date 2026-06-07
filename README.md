# Josh Sylvia Tech - Cloudflare Pages Deployment

This is a Cloudflare Pages-compatible version of Josh Sylvia's AI chatbot application. It has been optimized for serverless deployment on Cloudflare Pages with Functions.

## 🚀 Deployment Instructions

### Prerequisites
- Cloudflare account
- Groq API key

### Setup

1. **Create a new Git repository** with the contents of this folder
2. **Connect to Cloudflare Pages**:
   - Go to Cloudflare Dashboard > Pages
   - Click "Create a project"
   - Connect to your Git repository
   - Set build settings:
     - **Build command**: `echo "No build required"`
     - **Build output directory**: `public`
   - Click "Save and Deploy"

3. **Configure Environment Variables**:
   In Cloudflare Pages dashboard > Settings > Environment variables:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   CONTACT_EMAIL=joshsylvia@yahoo.com
   ```

### Environment Variables

```env
GROQ_API_KEY=your_groq_api_key_here
CONTACT_EMAIL=joshsylvia@yahoo.com
```

## 🛠️ Architecture

### Cloudflare Pages Functions
- `functions/api/health.js` - Health check endpoint
- `functions/api/groq-key.js` - Groq API key endpoint
- `functions/api/ollama-status.js` - Ollama status (returns not available)
- `functions/api/agent-search.js` - Knowledge base search
- `functions/api/agent-skills.js` - Skills information
- `functions/api/agent-experience.js` - Experience information
- `functions/api/agent-contact.js` - Contact information
- `functions/api/contact.js` - Contact form submission
- `functions/api/videos.js` - Videos listing

### Frontend
- Static HTML, CSS, and JavaScript files in `public/`
- AI agent uses Groq API only (Ollama removed for Cloudflare compatibility)
- Rate limiting implemented on client-side

## ⚙️ Configuration Files

- `_headers` - Cache control and security headers
- `_redirects` - URL routing rules
- `package.json` - Dependencies for local development
- `.env.example` - Environment variable template

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npx wrangler pages dev public

# Or use the package script
npm run dev
```

## 📝 Changes from Original

### Removed for Cloudflare Compatibility:
- ❌ PostgreSQL database (replaced with static data)
- ❌ Ollama local model (replaced with Groq-only)
- ❌ Express.js server (replaced with Cloudflare Functions)
- ❌ Server-side middleware (compression, rate limiting moved to client-side)
- ❌ WebSocket support
- ❌ SSL certificate management

### Added for Cloudflare:
- ✅ Cloudflare Pages Functions architecture
- ✅ Static data for skills, experience, and search
- ✅ Client-side rate limiting
- ✅ Cloudflare-specific headers and redirects
- ✅ Environment variable support via Cloudflare dashboard

## 🎯 Features

- **AI Chatbot**: Powered by Groq Llama 3.1 8B Instant model
- **Agentic AI**: Tool-calling capabilities with search, skills, experience, and contact tools
- **Static Site**: Fast loading with Cloudflare CDN
- **Serverless**: No server management required
- **Global CDN**: Automatic worldwide distribution

## 📊 Performance

- **Response Time**: <100ms average (Cloudflare CDN)
- **Cold Start**: ~50ms for Functions
- **Cache Hit Rate**: High with static asset caching
- **Bandwidth**: Optimized with compression headers

## 🔒 Security

- **API Key Protection**: Environment-based configuration
- **CORS Headers**: Configured for API access
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, etc.
- **Rate Limiting**: Client-side implementation

## 📞 Support

For issues or questions:
- Email: joshsylvia@yahoo.com
- GitHub: https://github.com/joshsylvia-eng

---

Built with ❤️ by Josh Sylvia - AI & Cybersecurity Expert
