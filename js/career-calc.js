/**
 * AI DISHA — Interactive Career Transformation & Compensation Calculator
 */

(function () {
  const careerPaths = {
    swe: {
      currentTitle: 'Software Engineer (Backend/Full Stack)',
      targetTitle: 'Autonomous AI Agent Architect',
      baseRange: '$85,000 – $115,000',
      targetRange: '$165,000 – $220,000+',
      inrTargetRange: '₹32 LPA – ₹55 LPA',
      uplift: '+165%',
      timeToOffer: '45 Days + 30 Day Internship',
      keySkills: ['LangGraph', 'Stateful Agent Swarms', 'Asynchronous Vector Pipelines', 'Model Quantization', 'Enterprise Red-Teaming'],
      marketDemand: 'Ultra-High (4.8x YoY Job Growth)'
    },
    data: {
      currentTitle: 'Data Analyst / BI Specialist',
      targetTitle: 'Generative AI & RAG Systems Engineer',
      baseRange: '$65,000 – $90,000',
      targetRange: '$140,000 – $185,000',
      inrTargetRange: '₹24 LPA – ₹42 LPA',
      uplift: '+145%',
      timeToOffer: '45 Days + 45 Day Internship',
      keySkills: ['Vector Embeddings', 'Qdrant & Milvus', 'PyTorch LLM Fine-Tuning', 'Multi-Tool SQL Agents', 'Hybrid Search'],
      marketDemand: 'High (3.9x YoY Job Growth)'
    },
    student: {
      currentTitle: 'Engineering / CS Student or Fresh Graduate',
      targetTitle: 'Junior AI Agent Builder & LLM Engineer',
      baseRange: '$40,000 – $65,000',
      targetRange: '$110,000 – $145,000',
      inrTargetRange: '₹18 LPA – ₹28 LPA',
      uplift: '+220%',
      timeToOffer: '45 Days + Guaranteed Internship Track',
      keySkills: ['Modern Python 3.12', 'LangChain & CrewAI', 'Docker Sandbox', 'Autonomous Web Automation', 'Hackathon Capstones'],
      marketDemand: 'Very High (Top Tier Entry-Level)'
    },
    frontend: {
      currentTitle: 'Frontend / Web Developer',
      targetTitle: 'Full-Stack AI Interface & Agent Engineer',
      baseRange: '$70,000 – $95,000',
      targetRange: '$135,000 – $175,000',
      inrTargetRange: '₹22 LPA – ₹38 LPA',
      uplift: '+135%',
      timeToOffer: '45 Days + 30 Day Internship',
      keySkills: ['Streaming Agent UIs', 'FastAPI Microservices', 'Tool Function Calling', 'LangGraph Integration', 'Multi-Modal Web Apps'],
      marketDemand: 'High (3.6x YoY Job Growth)'
    },
    pm: {
      currentTitle: 'Technical Product Manager / Solutions Architect',
      targetTitle: 'Head of AI Systems / AI Solutions Architect',
      baseRange: '$110,000 – $140,000',
      targetRange: '$190,000 – $260,000+',
      inrTargetRange: '₹40 LPA – ₹75 LPA',
      uplift: '+125%',
      timeToOffer: '45 Days Mastery',
      keySkills: ['Agentic Architecture Design', 'Cost & Token Optimization', 'AI Governance & Compliance', 'Enterprise Red-Teaming', 'Robotics Integration'],
      marketDemand: 'Elite Executive Tier'
    }
  };

  const backgroundSelect = document.getElementById('calc-background-select');
  const currencySelect = document.getElementById('calc-currency-select');
  const targetRoleEl = document.getElementById('calc-target-role');
  const salaryRangeEl = document.getElementById('calc-salary-range');
  const salaryUpliftEl = document.getElementById('calc-salary-uplift');
  const timeOfferEl = document.getElementById('calc-time-offer');
  const demandBadgeEl = document.getElementById('calc-demand-badge');
  const skillsListEl = document.getElementById('calc-skills-list');

  function updateCalculator() {
    const key = backgroundSelect ? backgroundSelect.value : 'swe';
    const currency = currencySelect ? currencySelect.value : 'usd';
    const data = careerPaths[key] || careerPaths.swe;

    if (targetRoleEl) targetRoleEl.textContent = data.targetTitle;
    if (salaryRangeEl) {
      salaryRangeEl.textContent = currency === 'usd' ? data.targetRange : data.inrTargetRange;
    }
    if (salaryUpliftEl) salaryUpliftEl.textContent = data.uplift;
    if (timeOfferEl) timeOfferEl.textContent = data.timeToOffer;
    if (demandBadgeEl) demandBadgeEl.textContent = data.marketDemand;

    if (skillsListEl) {
      skillsListEl.innerHTML = data.keySkills
        .map((s) => `<span class="tool-tag">${s}</span>`)
        .join('');
    }
  }

  if (backgroundSelect) {
    backgroundSelect.addEventListener('change', updateCalculator);
  }
  if (currencySelect) {
    currencySelect.addEventListener('change', updateCalculator);
  }

  // Initial update
  updateCalculator();
})();
