/**
 * AI DISHA — Interactive AI Agent Sandbox & Live Simulation Engine
 * Directly reflects Document Section 10: AI AGENT FOCUS (Core Differentiator)
 * 1. Research Agent: Input → topic, Output → structured report
 * 2. Code Assistant Agent: Debug + generate code
 * 3. Automation Agent: Multi-step workflows
 * 4. Multi-tool Agent: Search + summarize + output
 */

(function () {
  const agentData = {
    research: {
      id: 'research',
      name: 'Research Agent',
      badge: 'INPUT → TOPIC  |  OUTPUT → STRUCTURED REPORT',
      desc: 'Takes any complex research topic as input, autonomously queries multiple academic & industry sources, extracts citations, and synthesizes a structured executive report.',
      capabilities: [
        'Input: Research Topic & Parameter Constraints',
        'Semantic Search across ArXiv, PapersWithCode & Web',
        'Automated Citation Extraction & Fact-Verification',
        'Output: Multi-Section Structured Intelligence Report'
      ],
      presets: [
        'Synthesize 2026 Breakthroughs in Autonomous Reasoning & Test-Time Compute',
        'Compare High-Scale Vector Stores: Milvus vs Qdrant vs Chroma',
        'Map Enterprise Cybersecurity Risks in Generative AI Systems'
      ],
      simulations: {
        'Synthesize 2026 Breakthroughs in Autonomous Reasoning & Test-Time Compute': [
          { type: 'user', content: 'TOPIC INPUT: "Synthesize 2026 Breakthroughs in Autonomous Reasoning & Test-Time Compute"' },
          { type: 'thought', content: 'Deconstructing topic into search vectors: [Test-Time Search, MCTS, Process Supervision, Verifier Models]. Initializing retrieval loop.' },
          { type: 'tool', tool: 'ARXIV_SEMANTIC_SEARCH', args: 'query="Reasoning Models + Test-Time Compute 2025-2026" max_results=10' },
          { type: 'tool', tool: 'KNOWLEDGE_GRAPH_EXTRACTOR', args: 'entities=["MCTS", "Process Reward Models", "Hierarchical Agent Swarms"]' },
          { type: 'thought', content: 'Synthesizing 10 retrieved academic publications. Cross-verifying claims and generating structured sections.' },
          { type: 'output', content: `## ✦ STRUCTURED INTELLIGENCE REPORT: FRONTIER REASONING MODELS

**1. Executive Summary**:
The frontier of AI has shifted from pre-training token volume to dynamic inference-time compute scaling. Models now leverage Monte Carlo Tree Search (MCTS) and Process Reward Models (PRMs) to evaluate intermediate reasoning steps before final output generation.

**2. Key Findings & Architectural Metrics**:
- **Verifier Accuracy**: PRMs filter out 94.2% of hallucinated intermediate steps.
- **Latency Optimization**: Speculative decoding combined with KV-cache recycling decreases latency by 58%.
- **Hierarchical Agents**: Decomposing monolithic models into sub-agent graphs (Planner, Coder, Critic) improves task completion from 68% to 92.4%.

**3. Verified Citations**:
- [1] *DeepMind Research 2025* — "Scaling Inference-Time Search in Transformer Decoders"
- [2] *OpenAI Technical Report* — "Process Supervision for Reliable Multi-Step Reasoning"
- [3] *AI DISHA Benchmark Lab* — "Empirical Evaluation of Agentic Graph Frameworks"` }
        ],
        'Compare High-Scale Vector Stores: Milvus vs Qdrant vs Chroma': [
          { type: 'user', content: 'TOPIC INPUT: "Compare High-Scale Vector Stores: Milvus vs Qdrant vs Chroma"' },
          { type: 'thought', content: 'Querying vector benchmark database: HNSW index efficiency, memory overhead, filtering speed.' },
          { type: 'tool', tool: 'BENCHMARK_ANALYZER', args: 'targets=["Qdrant", "Milvus", "ChromaDB"] dataset="Cohere-10M"' },
          { type: 'output', content: `## ✦ STRUCTURED REPORT: VECTOR DATABASE COMPARISON MATRIX

| Engine | Best Workload | p99 Search Latency | Filtering Mechanism | Setup Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **Qdrant** | Production Real-Time RAG | **4.2 ms** | Native Rust Payload Filters | Medium (Docker / Cloud) |
| **Milvus** | Billion-Scale Distributed Cloud | **8.1 ms** | Distributed Segment Shards | High (K8s Cluster) |
| **Chroma** | Rapid Prototyping & Local Dev | **18.5 ms** | SQLite / DuckDB Embedded | Ultra-Low (Python pip) |

**Recommendation**: AI DISHA fellows build local agent memory prototypes with **ChromaDB** and scale enterprise microservices with **Qdrant**.` }
        ],
        'default': [
          { type: 'user', content: 'TOPIC INPUT: "Analyze emerging trends in autonomous AI agents"' },
          { type: 'thought', content: 'Topic received. Parsing research scope and orchestrating web scraper agents.' },
          { type: 'tool', tool: 'WEB_RESEARCH_SCRAPER', args: 'depth=2 target="Autonomous AI agents"' },
          { type: 'output', content: `## ✦ STRUCTURED REPORT SUMMARY\nAutonomous agents are revolutionizing enterprise automation by replacing single-turn prompts with iterative, self-healing tool execution loops.` }
        ]
      }
    },

    code: {
      id: 'code',
      name: 'Code Assistant Agent',
      badge: 'DEBUG + GENERATE CODE',
      desc: 'Ingests bug reports, stack traces, or functional requirements to automatically debug, refactor, and generate robust, production-ready code with test coverage.',
      capabilities: [
        'Live Code Debugging & Stack Trace Diagnosis',
        'Automated AST Refactoring & Type Safety',
        'PyTest & Unit Test Suite Generation',
        'Self-Healing Code Execution in Isolated Sandbox'
      ],
      presets: [
        'Debug Asyncio Event Loop Deadlock & Generate Fixed FastAPIRouter',
        'Generate LangGraph StateMachine with Automated Retry Fallback',
        'Refactor PyTorch Inference Pipeline to use FlashAttention-2'
      ],
      simulations: {
        'Debug Asyncio Event Loop Deadlock & Generate Fixed FastAPIRouter': [
          { type: 'user', content: 'DEBUG REQUEST: "Fix RuntimeError: This event loop is already running in nested FastAPI route"' },
          { type: 'thought', content: 'Analyzing stack trace. Detected nested asyncio.run() call inside an already active async worker thread. Initiating fix.' },
          { type: 'tool', tool: 'AST_CODE_LINTER', args: 'target="router.py" issue="nested_event_loop"' },
          { type: 'tool', tool: 'SANDBOX_EXEC_TEST', args: 'command="pytest test_async_router.py"' },
          { type: 'output', content: `## ✦ DEBUG RESOLUTION & GENERATED CODE

**Root Cause Identified**: The code invoked \`asyncio.run()\` within an active async FastAPI coroutine, causing an event loop collision.

**Generated & Verified Solution**:
\`\`\`python
import asyncio
from fastapi import APIRouter, HTTPException
from typing import Dict, Any

router = APIRouter(prefix="/agent", tags=["Agents"])

async def execute_agent_task(prompt: str) -> Dict[str, Any]:
    # Non-blocking async execution using gather rather than nested loops
    await asyncio.sleep(0.05) # Simulated non-blocking agent step
    return {"status": "success", "result": f"Processed: {prompt}"}

@router.post("/run")
async def run_agent_endpoint(payload: Dict[str, str]):
    try:
        # Proper await syntax preventing event loop deadlock
        result = await execute_agent_task(payload.get("prompt", ""))
        return {"code": 200, "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
\`\`\`
✓ Sandbox test executed with 100% passing tests (0 runtime errors).` }
        ],
        'default': [
          { type: 'user', content: 'Debug and generate solution for requested feature' },
          { type: 'thought', content: 'Analyzing requirements. Synthesizing clean Python code and generating unit tests.' },
          { type: 'tool', tool: 'PYTHON_SANDBOX_EXEC', args: 'env="python3.12"' },
          { type: 'output', content: `\`\`\`python\n# Clean verified implementation\ndef process_data(data: list) -> list:\n    return [x * 2 for x in data if x is not None]\n\`\`\`\n✓ Code generation and verification successful.` }
        ]
      }
    },

    automation: {
      id: 'automation',
      name: 'Automation Agent',
      badge: 'MULTI-STEP WORKFLOWS',
      desc: 'Orchestrates complex multi-step workflows across diverse APIs, webhooks, databases, and enterprise services with autonomous retry and error recovery.',
      capabilities: [
        'Multi-Step Event-Driven Workflow Automation',
        'Webhook Ingestion & Payload Transformation',
        'Database Sync across PostgreSQL, MongoDB & Cloud APIs',
        'Autonomous Fallback & Exponential Backoff'
      ],
      presets: [
        'Execute 4-Step Incident Triage: DB Query → Slack Alert → Jira Ticket → SMS Dispatch',
        'Automate Invoice Extraction: PDF Read → Validation → SAP Accounting Entry',
        'Trigger Multi-Branch CI/CD Release Pipeline upon Passing Tests'
      ],
      simulations: {
        'Execute 4-Step Incident Triage: DB Query → Slack Alert → Jira Ticket → SMS Dispatch': [
          { type: 'user', content: 'WORKFLOW DIRECTIVE: "Execute 4-Step Incident Triage: DB Query → Slack Alert → Jira Ticket → SMS Dispatch"' },
          { type: 'thought', content: 'Initializing Multi-Step Automation Sequence [Step 1 of 4: Query Database].' },
          { type: 'tool', tool: 'POSTGRES_CONNECTOR', args: 'SELECT * FROM incident_logs WHERE status="UNRESOLVED" AND severity="P0"' },
          { type: 'thought', content: 'Step 1 Complete: 1 Critical incident found (ID #941). Initializing Step 2: Slack Alert.' },
          { type: 'tool', tool: 'SLACK_WEBHOOK_DISPATCH', args: 'channel="#war-room" message="🚨 P0 Incident Detected: Database connection pool exhausted."' },
          { type: 'thought', content: 'Step 2 Complete. Initializing Step 3: Create Jira Ticket with diagnostic telemetry.' },
          { type: 'tool', tool: 'JIRA_API_INTEGRATION', args: 'project="OPS" summary="DB Pool Exhaustion" priority="Highest" assign="OnCall_Lead"' },
          { type: 'thought', content: 'Step 3 Complete (Jira Issue: OPS-4102). Initializing Step 4: Twilio On-Call SMS.' },
          { type: 'tool', tool: 'TWILIO_SMS_DISPATCH', args: 'to="+919876543210" body="ALERT: OPS-4102 P0 assigned to you."' },
          { type: 'output', content: `## ✦ 4-STEP AUTOMATION WORKFLOW COMPLETED SUCCESSFULLY

1. **Database Query**: Retrieved 1 high-priority unresolved P0 incident.
2. **Slack War Room Alert**: Dispatched broadcast to \`#war-room\` with stack telemetry.
3. **Jira Issue Created**: Generated ticket \`OPS-4102\` and assigned to primary on-call engineer.
4. **Emergency SMS**: Paged on-call engineer via Twilio API.
*Total Workflow Duration: 340 milliseconds | 0 Human Interventions Required.*` }
        ],
        'default': [
          { type: 'user', content: 'Execute multi-step workflow' },
          { type: 'thought', content: 'Routing steps through stateful execution engine.' },
          { type: 'tool', tool: 'STEP_DISPATCHER', args: 'steps=3' },
          { type: 'output', content: `[Multi-Step Automation Complete]\nAll designated tasks executed and verified across downstream APIs.` }
        ]
      }
    },

    multitool: {
      id: 'multitool',
      name: 'Multi-Tool Agent',
      badge: 'SEARCH + SUMMARIZE + OUTPUT',
      desc: 'Dynamically chains multiple specialized tools (Web Search, Vector RAG, Python REPL Sandbox, and Database Querying) to solve end-to-end unstructured problems.',
      capabilities: [
        'Dynamic Multi-Tool Registry Discovery',
        'Web Search & Live Content Extraction',
        'Data Summarization & Statistical Computing',
        'Formatted Multi-Channel Output Generation'
      ],
      presets: [
        'Search AI News + Summarize Top 3 Breakthroughs + Output Markdown Newsletter',
        'Search Competitor Pricing + Compute Variance in Python + Output Summary Table',
        'Search GitHub Trending + Analyze Repositories in Sandbox + Output Tech Radar'
      ],
      simulations: {
        'Search AI News + Summarize Top 3 Breakthroughs + Output Markdown Newsletter': [
          { type: 'user', content: 'DIRECTIVE: "Search AI News + Summarize Top 3 Breakthroughs + Output Markdown Newsletter"' },
          { type: 'thought', content: 'Step 1: Execute live web search for last 24h AI advancements.' },
          { type: 'tool', tool: 'LIVE_WEB_SEARCH', args: 'query="Frontier AI Model Releases & Research 2026" time_range="24h"' },
          { type: 'thought', content: 'Retrieved 8 articles. Step 2: Summarize and rank top 3 breakthroughs by architectural significance.' },
          { type: 'tool', tool: 'SUMMARIZATION_ENGINE', args: 'filter="architectural_impact" top_k=3' },
          { type: 'thought', content: 'Step 3: Format final output into high-impact Markdown Newsletter.' },
          { type: 'output', content: `## ✦ AI DISHA FRONTIER NEWSLETTER // EDITION #42

**1. Reasoning Models Scale Inference-Time Search**:
New benchmarks reveal that allocating 10x more compute at test-time outperforms scaling pre-training datasets by 100x.

**2. Open-Source Multimodal Robotics Foundation Models**:
OpenVLA releases lightweight 7B parameter vision-language-action model capable of 30 FPS robot arm manipulation on consumer hardware.

**3. Enterprise Agentic Guardrails Standardized**:
Consortium of AI labs releases unified specification for preventing indirect prompt injection in autonomous multi-agent swarms.

*Generated by AI DISHA Multi-Tool Agent in 410ms.*` }
        ],
        'default': [
          { type: 'user', content: 'Search + Summarize + Output' },
          { type: 'thought', content: 'Chaining search tool, summarizer, and output formatter.' },
          { type: 'tool', tool: 'SEARCH_AND_SUMMARIZE', args: 'format="markdown"' },
          { type: 'output', content: `[Multi-Tool Task Complete]\nSuccessfully searched relevant sources, synthesized concise summary, and generated clean output.` }
        ]
      }
    }
  };

  let activeAgentKey = 'research';
  let isExecuting = false;

  // DOM Elements
  const tabBtns = document.querySelectorAll('.agent-tab-btn');
  const agentTitleEl = document.getElementById('agent-meta-title');
  const agentDescEl = document.getElementById('agent-meta-desc');
  const agentBadgeEl = document.getElementById('agent-badge-label');
  const capabilitiesListEl = document.getElementById('agent-capabilities-list');
  const presetsContainerEl = document.getElementById('prompt-presets-container');
  const terminalScrollEl = document.getElementById('terminal-scroll-area');
  const promptInputEl = document.getElementById('agent-prompt-input');
  const runBtnEl = document.getElementById('run-agent-prompt-btn');

  function renderAgentDetails(key) {
    const data = agentData[key];
    if (!data) return;

    activeAgentKey = key;

    // Update Meta
    if (agentTitleEl) agentTitleEl.textContent = data.name;
    if (agentDescEl) agentDescEl.textContent = data.desc;
    if (agentBadgeEl) agentBadgeEl.textContent = data.badge;

    // Render Capabilities
    if (capabilitiesListEl) {
      capabilitiesListEl.innerHTML = data.capabilities
        .map(
          (cap) => `
        <li class="agent-capability-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${cap}</span>
        </li>
      `
        )
        .join('');
    }

    // Render Presets
    if (presetsContainerEl) {
      presetsContainerEl.innerHTML = `
        <span class="preset-label">Example Directives:</span>
        ${data.presets
          .map(
            (p) => `
          <button class="preset-pill-btn" data-prompt="${p}">
            ${p}
          </button>
        `
          )
          .join('')}
      `;

      // Attach click handlers to presets
      presetsContainerEl.querySelectorAll('.preset-pill-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const prompt = btn.getAttribute('data-prompt');
          if (promptInputEl) promptInputEl.value = prompt;
          executePrompt(prompt);
        });
      });
    }

    // Trigger initial simulation for the active agent
    executePrompt(data.presets[0]);
  }

  function appendTerminalEntry(entry) {
    if (!terminalScrollEl) return;

    const div = document.createElement('div');
    div.className = 'terminal-entry';

    let tagClass = entry.type;
    let tagLabel = entry.type.toUpperCase();
    let contentBoxClass = `${entry.type}-box`;

    if (entry.type === 'user') {
      tagLabel = 'DIRECTIVE INPUT';
    } else if (entry.type === 'thought') {
      tagLabel = 'AGENT REASONING LOOP';
    } else if (entry.type === 'tool') {
      tagLabel = `TOOL INVOCATION: ${entry.tool}`;
    } else if (entry.type === 'output') {
      tagLabel = 'FINAL AGENT OUTPUT';
    }

    div.innerHTML = `
      <div class="terminal-tag ${tagClass}">
        <span>●</span>
        <span>${tagLabel}</span>
      </div>
      <div class="terminal-message ${contentBoxClass}">${entry.type === 'tool' ? `> ${entry.tool}(${entry.args})` : entry.content}</div>
    `;

    terminalScrollEl.appendChild(div);
    terminalScrollEl.scrollTop = terminalScrollEl.scrollHeight;
  }

  async function executePrompt(promptText) {
    if (isExecuting) return;
    isExecuting = true;

    if (terminalScrollEl) {
      terminalScrollEl.innerHTML = '';
    }

    const currentAgent = agentData[activeAgentKey];
    const simulationSteps =
      currentAgent.simulations[promptText] || currentAgent.simulations['default'];

    if (runBtnEl) {
      runBtnEl.disabled = true;
      runBtnEl.innerHTML = `<span>Synthesizing...</span>`;
    }

    for (let i = 0; i < simulationSteps.length; i++) {
      const step = simulationSteps[i];
      appendTerminalEntry(step);
      // Realistic typing / thinking delay
      await new Promise((resolve) => setTimeout(resolve, i === 0 ? 250 : 650));
    }

    if (runBtnEl) {
      runBtnEl.disabled = false;
      runBtnEl.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <span>Execute Directive</span>
      `;
    }

    isExecuting = false;
  }

  // Initialize Event Listeners
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const agentKey = btn.getAttribute('data-agent');
      renderAgentDetails(agentKey);
    });
  });

  if (runBtnEl && promptInputEl) {
    runBtnEl.addEventListener('click', () => {
      const val = promptInputEl.value.trim();
      if (val) {
        executePrompt(val);
      }
    });

    promptInputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = promptInputEl.value.trim();
        if (val) {
          executePrompt(val);
        }
      }
    });
  }

  // Bootstrap initial state
  renderAgentDetails('research');
})();
