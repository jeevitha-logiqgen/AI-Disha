/**
 * AI DISHA — Curriculum & 45-Day Program Explorer Engine
 * Aligned with the official AI DISHA Program Document
 * 9 Phases (Days 1–45) | ~70 Total Learning Hours | 3–4 Live Sessions/Week
 */

(function () {
  const syllabusData = {
    1: {
      phaseNumber: 'Phase 1',
      day: 'Days 1–10',
      title: 'Python Foundation: Basics → APIs → Mini Chatbot',
      hours: '~15 Hours Live & Labs',
      overview: 'Master core programming fundamentals, data structures, asynchronous functions, API integrations, and construct your first working conversational mini-chatbot.',
      topics: [
        'Python syntax fundamentals, variables, loops & control flow',
        'Data structures: Lists, Dictionaries, Sets & Tuples',
        'Functions, modules, error handling & Asyncio event loops',
        'REST APIs, HTTP requests & JSON parsing',
        'Building a functional rule-based and API-connected Mini Chatbot'
      ],
      lab: 'Build and deploy a functional CLI & Web-based Mini Chatbot connected to OpenAI/Anthropic APIs.',
      deliverable: 'GitHub Repository: Verified Python Foundation codebase + Mini Chatbot application.'
    },
    2: {
      phaseNumber: 'Phase 2',
      day: 'Days 11–15',
      title: 'AI Fundamentals & Prompt Engineering',
      hours: '~8 Hours Live & Labs',
      overview: 'Deconstruct foundational AI concepts, machine learning vs deep learning, large language models (LLMs), tokens, embeddings, and master structured prompt engineering.',
      topics: [
        'AI, ML, Deep Learning & Generative AI conceptual taxonomy',
        'How LLMs work: Tokens, probability distributions & context windows',
        'System prompting, few-shot prompting, chain-of-thought (CoT)',
        'Directional stimulus prompting & ReAct reasoning techniques',
        'Temperature, top-p, frequency penalties & hallucination mitigation'
      ],
      lab: 'Develop a structured prompt engineering test suite with automated evaluation criteria.',
      deliverable: 'Prompt engineering benchmark repository with evaluation matrices.'
    },
    3: {
      phaseNumber: 'Phase 3',
      day: 'Days 16–22',
      title: 'AI Tools Mastery: Text, Image, Audio, Video & Code AI',
      hours: '~12 Hours Live & Labs',
      overview: 'Hands-on mastery of cutting-edge generative AI toolchains across multimodal domains: Text generation, image synthesis, audio/voice cloning, generative video, and automated coding.',
      topics: [
        'Text AI: Frontier LLMs, summarization, extraction & classification',
        'Image AI: Midjourney, Stable Diffusion, Flux & ControlNet workflows',
        'Audio AI: ElevenLabs voice cloning, Whisper speech-to-text & audio gen',
        'Video AI: Runway Gen-3, Luma Dream Machine & Kling AI pipelines',
        'Code AI: GitHub Copilot, Cursor AI, Claude Code & AI-assisted development'
      ],
      lab: 'Create an end-to-end multimodal marketing and software asset generation pipeline using 5+ AI tools.',
      deliverable: 'Multimodal campaign portfolio with text, image, audio, video, and code assets.'
    },
    4: {
      phaseNumber: 'Phase 4',
      day: 'Days 23–26',
      title: 'AI in Cybersecurity & Data Protection',
      hours: '~7 Hours Live & Labs',
      overview: 'Explore defensive and offensive cybersecurity in GenAI. Protect applications from prompt injections, jailbreaks, data leakage, and implement automated AI threat monitoring.',
      topics: [
        'AI in cybersecurity operations, threat detection & incident response',
        'Prompt injection, indirect prompt injection & jailbreak exploits',
        'Data privacy, PII masking, data protection laws & enterprise governance',
        'AI Guardrails (NeMo, Guardrails AI) & programmatic defense layers',
        'Model red-teaming and automated vulnerability auditing'
      ],
      lab: 'Audit and red-team an enterprise LLM application, implementing input/output validation guardrails.',
      deliverable: 'Cybersecurity audit report and secured AI pipeline codebase.'
    },
    5: {
      phaseNumber: 'Phase 5',
      day: 'Days 27–29',
      title: 'AI Trends, Global Landscape & Job Opportunities',
      hours: '~5 Hours Live & Labs',
      overview: 'Analyze rapid industry shifts, upcoming AI architectures (test-time compute, reasoning models, SLMs), high-growth job roles, and engineer your professional GitHub & LinkedIn portfolio.',
      topics: [
        'Frontier AI trends: Reasoning models, edge AI, small language models (SLMs)',
        'Global AI job market mapping: AI Agent Engineer, LLM Developer, AI Solutions Architect',
        'GitHub portfolio engineering, README design & open-source contributions',
        'Personal branding, LinkedIn optimization & AI tech community networking'
      ],
      lab: 'Build and deploy a live GitHub portfolio landing page showcasing your AI projects and repositories.',
      deliverable: 'Polished GitHub portfolio + verified LinkedIn presence ready for recruiter outreach.'
    },
    6: {
      phaseNumber: 'Phase 6',
      day: 'Days 30–32',
      title: 'AI in Robotics & Embodied Intelligence Basics',
      hours: '~5 Hours Live & Labs',
      overview: 'Bridge artificial intelligence with physical and simulated systems. Understand robotics fundamentals, sensor perception, computer vision, and AI-driven control architectures.',
      topics: [
        'AI + Robotics fundamentals & Embodied AI paradigms',
        'Sensory perception: LiDAR, cameras, depth sensors & computer vision',
        'Robot kinematics, simulation environments & motion planning',
        'Vision-Language-Action (VLA) models and robotic navigation concepts'
      ],
      lab: 'Program an AI vision-guided robotic obstacle detection simulator.',
      deliverable: 'Robotics simulation notebook and visual perception script.'
    },
    7: {
      phaseNumber: 'Phase 7',
      day: 'Days 33–40',
      title: 'AI Agent Development (The Core Outcome & Differentiator)',
      hours: '~14 Hours Live & Labs',
      overview: 'The defining core of AI DISHA. Construct the 4 flagship autonomous AI agents from scratch: Research Agent, Code Assistant Agent, Automation Agent, and Multi-Tool Agent.',
      topics: [
        'Agentic AI fundamentals: Autonomous loops, ReAct (Reasoning + Acting)',
        'Agent 1: Research Agent (Input: Topic → Output: Structured Report with Citations)',
        'Agent 2: Code Assistant Agent (Debugs stack traces + Generates production code)',
        'Agent 3: Automation Agent (Multi-step workflows across webhooks & APIs)',
        'Agent 4: Multi-Tool Agent (Dynamic Search + Summarization + Sandbox Execution + Output)',
        'Memory systems: Episodic, semantic, short-term and long-term storage'
      ],
      lab: 'Build, debug, and containerize all 4 flagship production AI agents.',
      deliverable: 'Complete 4-Agent suite repository with live interactive demo endpoints.'
    },
    8: {
      phaseNumber: 'Phase 8',
      day: 'Days 41–43',
      title: 'Demo-Ready Final Project & 48-Hour Hackathon',
      hours: '~10 Hours Hackathon & Mentorship',
      overview: 'Synthesize all 40 days of mastery into a comprehensive, demo-ready final product. Compete in the internal/external 24–48 hour Hackathon (teams of 3–5) with live jury evaluation.',
      topics: [
        'Capstone system architecture design & project scoping',
        'Hackathon execution: Rapid prototyping, testing & pitch prep',
        'Live prototype demos & jury evaluation (15K–20K budget pool)',
        'Conversion goal: Transforming demo projects into 70% engagement assets'
      ],
      lab: 'Ship a full-stack, demo-ready AI product with live database, agent backend, and user interface.',
      deliverable: 'Production deployment URL + verified project presentation deck.'
    },
    9: {
      phaseNumber: 'Phase 9',
      day: 'Days 44–45',
      title: 'Career Preparation, Resume, Mock Interviews & Internship Allocation',
      hours: '~4 Hours 1-on-1 Prep',
      overview: 'Final stage transition into the professional ecosystem. Resume perfection, mock technical AI interviews, and direct entry into the AI DISHA Internship & Job Placement Pipeline.',
      topics: [
        'AI engineering resume crafting & ATS keyword optimization',
        'Technical mock interviews: System design & live agent debugging',
        'Internship allocation flow: Training → Project Work → Internship Allocation',
        'Connecting with partner companies: TCS, Infosys, Amazon (aspirational) & AI startups',
        'Official AI DISHA Certification ceremony'
      ],
      lab: 'Complete 1-on-1 technical AI interview simulation and submit final verified portfolio.',
      deliverable: 'Official AI DISHA Certificate of Completion + Guaranteed Internship Pipeline match.'
    }
  };

  // Phase Tab Filter
  const phaseBtns = document.querySelectorAll('.phase-tab-btn');
  const phaseCards = document.querySelectorAll('.phase-card');

  phaseBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      phaseBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const targetPhase = btn.getAttribute('data-phase');

      phaseCards.forEach((card) => {
        if (targetPhase === 'all' || card.getAttribute('data-phase') === targetPhase) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Curriculum Accordion
  const accordionItems = document.querySelectorAll('.curriculum-item');
  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.curriculum-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        accordionItems.forEach((i) => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // Syllabus Modal Controller
  const syllabusModal = document.getElementById('syllabus-modal');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn, .modal-backdrop-close');
  const openSyllabusBtns = document.querySelectorAll('.view-syllabus-btn');

  const modalDayTitle = document.getElementById('modal-day-title');
  const modalDayTag = document.getElementById('modal-day-tag');
  const modalDayOverview = document.getElementById('modal-day-overview');
  const modalTopicsList = document.getElementById('modal-topics-list');
  const modalLabText = document.getElementById('modal-lab-text');
  const modalDeliverableText = document.getElementById('modal-deliverable-text');

  function openSyllabus(dayId) {
    const data = syllabusData[dayId] || syllabusData[1];
    if (!syllabusModal) return;

    if (modalDayTitle) modalDayTitle.textContent = data.title;
    if (modalDayTag) modalDayTag.textContent = `${data.phaseNumber} // ${data.day} (${data.hours})`;
    if (modalDayOverview) modalDayOverview.textContent = data.overview;
    if (modalLabText) modalLabText.textContent = data.lab;
    if (modalDeliverableText) modalDeliverableText.textContent = data.deliverable;

    if (modalTopicsList) {
      modalTopicsList.innerHTML = data.topics
        .map(
          (t) => `
        <li style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.88rem; color: var(--text-secondary);">
          <span style="color: var(--color-100); font-family: var(--font-mono);">▹</span>
          <span>${t}</span>
        </li>
      `
        )
        .join('');
    }

    syllabusModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  openSyllabusBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dayId = btn.getAttribute('data-day-id') || 1;
      openSyllabus(dayId);
    });
  });

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (syllabusModal) syllabusModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  if (syllabusModal) {
    syllabusModal.addEventListener('click', (e) => {
      if (e.target === syllabusModal) {
        syllabusModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
})();
