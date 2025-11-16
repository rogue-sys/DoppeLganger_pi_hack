# π Dimension

π Dimension is an AI-powered alternate-universe identity generator.  
Users upload their images, choose an archetype and universe theme, and the system generates a fully immersive “pi reality” — including backstory, personality, achievements, daily routine, secrets, and more.  
It then generated and givesthe complete user's appearance and their alternate-universe profile.

This project uses:
- Gemini Flash for text-based reality generation   
- Next.js + TypeScript for the frontend  
- Cloudinary for image handling  

---

## 🚀 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
npm install

# 3. Add environment variables
# Create a `.env.local` file and include:
# GOOGLE_API_KEY=<your gemini key>
# CLOUDINARY_URL=<your cloudinary url>

# 4. Start the development server
npm run dev

# Your app will be live at:
# http://localhost:3000
