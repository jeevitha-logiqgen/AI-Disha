/**
 * AI DISHA — Curriculum & 45-Day Program Explorer Engine
 * Handles phase filtering, day-by-day modal deep dives, and syllabus accordions.
 */

(function () {
  const syllabusData = {
    1: {
      day: 'Day 01–05',
      title: 'Python for High-Performance AI & Vector Computing',
      phase: 'Phase 1',
      overview: 'Master modern asynchronous Python 3.12+, vectorized tensor operations with NumPy/PyTorch, memory management, and typing for large-scale AI pipelines.',
      topics: [
        'Asyncio event loops & concurrent LLM API calling',
        'NumPy vectorization, tensor broadcasting & memory layouts',
        'Pydantic v2 structured schemas and runtime validation',
        'Custom decorators, context managers & profiling tools'
      ],
      lab: 'Build a high-throughput async batch token processing engine with rate-limiting and automatic retries.',
      deliverable: 'Production-ready Python benchmark pipeline repository.'
    },
    2: {
      day: 'Day 06–10',
      title: 'Neural Architectures, Transformers & LLM Internals',
      phase: 'Phase 1',
      overview: 'Deconstruct transformer mechanics, multi-head self-attention, rotary position embeddings (RoPE), KV cache optimization, and quantization (GGUF/AWQ).',
      topics: [
        'Attention mechanisms (FlashAttention-2, grouped-query attention)',
        'Transformer decoder-only mechanics step-by-step in PyTorch',
        'Context window extension techniques & tokenization nuances',
        'Model quantization: 4-bit/8-bit precision trade-offs and latency'
      ],
      lab: 'Train a mini-transformer language model from scratch on Shakespeare text and measure attention maps.',
      deliverable: 'Jupyter notebook visualizing attention heads and KV cache benchmarks.'
    },
    3: {
      day: 'Day 11–15',
      title: 'Applied AI Tooling, Vector Databases & Red-Teaming Cybersecurity',
      phase: 'Phase 1',
      overview: 'Implement enterprise Retrieval-Augmented Generation (RAG), high-dimensional vector search with HNSW, and red-team LLMs against prompt injection & data leakage.',
      topics: [
        'Vector embeddings & metric spaces (Cosine, Dot, Euclidean)',
        'Vector DB architectures: Qdrant, ChromaDB, and Milvus',
        'Prompt injection, indirect jailbreaking, and ASCII evasion attacks',
        'Guardrails AI, NeMo Guardrails & automated red-teaming harnesses'
      ],
      lab: 'Construct a self-defending enterprise RAG pipeline that intercepts and neutralizes prompt extraction attacks.',
      deliverable: 'Secured RAG system with automated penetration test suite.'
    },
    4: {
      day: 'Day 16–22',
      title: 'Autonomous Agent Frameworks (LangGraph, CrewAI, AutoGen)',
      phase: 'Phase 2',
      overview: 'Transition from linear pipelines to cyclic graph-based autonomous agents. Design stateful graphs, reflection loops, and hierarchical multi-agent teams.',
      topics: [
        'ReAct paradigm (Reasoning + Acting) with dynamic scratchpads',
        'LangGraph StateGraph, conditional edges, and checkpoint persistence',
        'CrewAI role-based task delegation & inter-agent communication',
        'Long-term and short-term memory architecture (Episodic vs Semantic)'
      ],
      lab: 'Build a multi-agent software engineering swarm (Product Manager -> Architect -> Developer -> QA Reviewer).',
      deliverable: 'Autonomous software generator CLI tool.'
    },
    5: {
      day: 'Day 23–30',
      title: 'Multi-Tool Execution, Dynamic Planning & Sandbox Environments',
      phase: 'Phase 2',
      overview: 'Equip agents with dynamic tool registries, code interpreters, SQL execution sandboxes, and web scrapers with self-correcting error recovery.',
      topics: [
        'OpenAI / Anthropic tool calling protocols and schema definitions',
        'Dockerized isolated code execution sandboxes',
        'Dynamic query generation with schema introspection for PostgreSQL',
        'Monte Carlo Tree Search (MCTS) for complex multi-step planning'
      ],
      lab: 'Create a financial quantitative analysis agent that queries live market databases, writes Python analysis scripts, and plots visual charts.',
      deliverable: 'Full-stack multi-tool financial analyst agent application.'
    },
    6: {
      day: 'Day 31–37',
      title: 'Embodied AI, Robotics Simulation & Multimodal Vision',
      phase: 'Phase 3',
      overview: 'Integrate vision-language-action (VLA) models, ROS2 communication nodes, robotic spatial simulation in Isaac Gym / Gazebo, and edge deployment.',
      topics: [
        'Vision Transformers (ViT) & Multimodal LLMs for visual reasoning',
        'ROS2 (Robot Operating System) architecture and publish/subscribe topics',
        'Vision-Language-Action (VLA) models for robotic manipulation',
        'Deploying optimized models to edge compute hardware (NVIDIA Jetson)'
      ],
      lab: 'Simulate an autonomous robotic inspection rover that navigates obstacles using multimodal visual prompts.',
      deliverable: 'ROS2 Gazebo simulation environment with VLA control script.'
    },
    7: {
      day: 'Day 38–45',
      title: 'Capstone Hackathon, Enterprise Internship & Career Launch',
      phase: 'Phase 3',
      overview: '48-hour high-stakes cohort hackathon, enterprise mentor code reviews, 1-on-1 AI system design mock interviews, and guaranteed industry internship matching.',
      topics: [
        '48-Hour Agentic Capstone Hackathon with VC and industry judges',
        'Production agent observability (Langfuse, OpenTelemetry, Tracing)',
        'Enterprise deployment: Docker, Kubernetes & serverless GPU backends',
        'AI Architect portfolio review, resume engineering & salary negotiation'
      ],
      lab: 'Deploy capstone production agent cluster with live monitoring, latency dashboards, and client demo.',
      deliverable: 'Production deployment URL, verified portfolio badge & internship placement match.'
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
          card.style.animation = 'fadeIn 0.4s ease';
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
        // Close others for clean accordion feel
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
    if (modalDayTag) modalDayTag.textContent = `${data.phase} // ${data.day}`;
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
