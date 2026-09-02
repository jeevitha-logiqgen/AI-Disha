# AI DISHA — Autonomous AI Agent Masterclass Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ai-disha)

An elite, futuristic AI education and agent platform engineered to train the next generation of **Autonomous AI Agent Architects**.

---

## 🎨 Color Palette & Design Tokens
- **Obsidian Dark**: `#101010`
- **Titanium Frost**: `#dfdfdf`
- **Silver Chrome**: `#b3b3b3`
- **Steel Slate**: `#878787`
- **Charcoal Border**: `#5b5b5b`

---

## 🚀 How to Deploy to Vercel

### Method 1: Instant Vercel Git Integration (Recommended)
1. Push this repository to your **GitHub / GitLab / Bitbucket**:
   ```bash
   git remote add origin https://github.com/<your-username>/ai-disha.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `ai-disha` repository.
4. Click **Deploy**. Vercel will automatically detect `index.html` and `vercel.json` and deploy it instantly to a global Edge CDN with SSL!

### Method 2: Deploy via Vercel CLI
If you have Node.js / Vercel CLI installed:
```bash
npm i -g vercel
vercel
```
Follow the prompt (press Enter to accept defaults) to get a live `.vercel.app` production link!

---

## 🧭 Project Architecture
```
ai-disha/
├── index.html               # Main application entry point
├── vercel.json              # Vercel Edge configuration & security headers
├── .gitignore               # Ignored files
├── README.md                # Documentation & deployment guide
├── css/
│   ├── design-tokens.css    # Color tokens (#101010, #dfdfdf, #b3b3b3, #878787, #5b5b5b)
│   ├── layout.css           # Responsive grids, navigation, and hero container
│   ├── components.css       # Glass cards, buttons, agent sandbox terminal, timeline
│   └── animations.css       # Pulsing glows, scanlines, and physics micro-interactions
└── js/
    ├── particles.js         # Interactive Neural Mesh canvas with mouse reactivity
    ├── agent-sandbox.js     # Live AI Agent simulation engine (4 Flagship Agents)
    ├── curriculum.js        # 45-Day interactive roadmap filter & daily syllabus modal
    ├── career-calc.js       # Dynamic AI career salary / role growth interactive calculator
    └── main.js              # Navigation spy, mobile drawer, multi-step intake modal, toast
```
