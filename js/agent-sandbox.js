/**
 * AI DISHA — Interactive AI Agent Sandbox & Live Simulation Engine
 * Demonstrates Research Agent, Code Assistant, Automation Agent, and Multi-Tool Agent
 */

(function () {
  const agentData = {
    research: {
      id: 'research',
      name: 'Research Agent',
      badge: 'AUTONOMOUS SYNTHESIS',
      desc: 'Orchestrates multi-source academic paper retrieval, fact-checking, citation extraction, and structured intelligence synthesis.',
      capabilities: [
        'ArXiv & IEEE Semantic Search',
        'Cross-Source Citation Verification',
        'Knowledge Graph Entity Mapping',
        'Automated Executive Brief Generation'
      ],
      presets: [
        'Synthesize 2026 Breakthroughs in Reasoning & Multi-Agent Models',
        'Compare High-Scale Vector Stores: Milvus vs Qdrant vs Chroma',
        'Analyze Red-Teaming Attacks on Production LLM Applications'
      ],
      simulations: {
        'Synthesize 2026 Breakthroughs in Reasoning & Multi-Agent Models': [
          { type: 'user', content: 'Synthesize 2026 Breakthroughs in Reasoning & Multi-Agent Models' },
          { type: 'thought', content: 'Deconstructing query. Planning retrieval across ArXiv, HuggingFace, and DeepMind research nodes. Establishing verification graph.' },
          { type: 'tool', tool: 'ARXIV_SEMANTIC_SEARCH', args: 'query="Reasoning Models + Multi-Agent Orchestration 2025-2026" max_results=12' },
          { type: 'tool', tool: 'KNOWLEDGE_GRAPH_EXTRACTOR', args: 'entities=["MCTS", "Test-Time Compute", "Hierarchical Agent Delegation"]' },
          { type: 'thought', content: 'Synthesizing 12 retrieved papers. Identifying core convergence: Test-time compute scaling laws and self-correcting verification loops.' },
          { type: 'output', content: `## ✦ Executive Intelligence Synthesis: Frontier Reasoning & Multi-Agent Architectures

1. **Inference-Time Scaling (Test-Time Compute)**:
   - Transition from pre-training token saturation to dynamic test-time search (Monte Carlo Tree Search + PRMs).
   - Verifier models achieve 94.2% accuracy in filtering hallucinated intermediate steps.

2. **Hierarchical Agent Specialization**:
   - Modern systems avoid monolithic agents in favor of specialized sub-agents (Planner, Coder, Critic, Executor).
   - Inter-agent communication latency reduced by 64% via structured schema protocols.

3. **Production Recommendation**:
   - Deploy LangGraph / CrewAI state machines with built-in reflection loops to achieve 99.4% task completion resilience.` }
        ],
        'Compare High-Scale Vector Stores: Milvus vs Qdrant vs Chroma': [
          { type: 'user', content: 'Compare High-Scale Vector Stores: Milvus vs Qdrant vs Chroma' },
          { type: 'thought', content: 'Loading vector database benchmark data: HNSW index performance, memory overhead, filtering latency.' },
          { type: 'tool', tool: 'BENCHMARK_ANALYZER', args: 'datasets=["Cohere-10M", "OpenAI-Large-1536"]' },
          { type: 'output', content: `## ✦ Vector Database Architecture Matrix (2026 Edition)

| Engine | Ideal Workload | HNSW Latency (p99) | Payload Filtering | Deployment Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **Qdrant** | Production Real-Time RAG | **4.2 ms** | Native Rust Segment Filtering | Medium (Docker / Cloud) |
| **Milvus** | Billion-Scale Distributed Enterprise | **8.1 ms** | Distributed Proxy Partitioning | High (K8s Cluster) |
| **Chroma** | Rapid Prototyping & Local Dev | **18.5 ms** | SQLite / DuckDB backend | Ultra-Low (Embedded) |

**AI DISHA Recommendation**: We teach **Qdrant** for production microservices and **ChromaDB** for rapid agent memory prototyping.` }
        ],
        'default': [
          { type: 'user', content: 'Execute deep research on the target topic' },
          { type: 'thought', content: 'Query received. Parsing context parameters and initializing recursive search agents.' },
          { type: 'tool', tool: 'WEB_RESEARCH_SCRAPER', args: 'depth=3 target="autonomous AI trends"' },
          { type: 'thought', content: 'Filtering low-confidence claims and constructing cross-validated summary report.' },
          { type: 'output', content: `[Research Agent Complete]\nGenerated 4-pillar comprehensive overview with 18 verified academic citations. Stored in vector memory repository.` }
        ]
      }
    },

    code: {
      id: 'code',
      name: 'Code Assistant Agent',
      badge: 'SELF-HEALING ARCHITECT',
      desc: 'Writes production-ready Python/TypeScript modules, performs automated AST debugging, and synthesizes complete test suites.',
      capabilities: [
        'AST Code Inspection & Refactoring',
        'Self-Healing Runtime Sandbox Execution',
        'Unit Test & PyTest Suite Synthesis',
        'Type-Safe Async Architecture Design'
      ],
      presets: [
        'Build an Async LangGraph Multi-Agent Router in Python',
        'Refactor FastAPI Microservice to utilize Token-Bucket Rate Limiter',
        'Debug Memory Leak in PyTorch Transformer Inference Pipeline'
      ],
      simulations: {
        'Build an Async LangGraph Multi-Agent Router in Python': [
          { type: 'user', content: 'Build an Async LangGraph Multi-Agent Router in Python' },
          { type: 'thought', content: 'Designing typed StateGraph with conditional edges and error recovery fallback.' },
          { type: 'tool', tool: 'AST_PYTHON_GENERATOR', args: 'framework="langgraph" type="async_state_router"' },
          { type: 'tool', tool: 'SANDBOX_LINTER_EXEC', args: 'command="pytest test_router.py --asyncio-mode=auto"' },
          { type: 'output', content: `\`\`\`python
import operator
from typing import Annotated, TypedDict, List
from langgraph.graph import StateGraph, END

class AgentState(TypedDict):
    messages: Annotated[List[str], operator.add]
    next_step: str
    confidence_score: float

def router_node(state: AgentState) -> dict:
    prompt = state["messages"][-1]
    if "code" in prompt.lower():
        return {"next_step": "code_agent", "confidence_score": 0.98}
    elif "data" in prompt.lower() or "sql" in prompt.lower():
        return {"next_step": "sql_agent", "confidence_score": 0.95}
    return {"next_step": "general_research", "confidence_score": 0.91}

workflow = StateGraph(AgentState)
workflow.add_node("router", router_node)
workflow.set_entry_point("router")
workflow.add_conditional_edges(
    "router",
    lambda state: state["next_step"],
    {
        "code_agent": "code_node",
        "sql_agent": "sql_node",
        "general_research": "research_node"
    }
)
app = workflow.compile()
print("✓ Agent Graph Compiled and Validated (0 errors)")
\`\`\`` }
        ],
        'default': [
          { type: 'user', content: 'Generate and validate code solution' },
          { type: 'thought', content: 'Parsing prompt into structural abstract syntax tree. Verifying type annotations.' },
          { type: 'tool', tool: 'PYTHON_EXEC_SANDBOX', args: 'env="python3.12-secure-v8"' },
          { type: 'output', content: `\`\`\`python\n# Automated Code Solution Synthesized\ndef execute_task():\n    return {"status": "success", "latency_ms": 14.2}\n\`\`\`\n✓ Sandbox test executed with 100% test coverage.` }
        ]
      }
    },

    automation: {
      id: 'automation',
      name: 'Automation Agent',
      badge: 'ENTERPRISE WORKFLOW ORCHESTRATOR',
      desc: 'Coordinates multi-application workflows, monitors webhooks, orchestrates API pipelines, and executes autonomous error recovery.',
      capabilities: [
        'Multi-SaaS Webhook Routing (Slack, Jira, GitHub)',
        'Event-Driven Distributed State Sync',
        'Exponential Backoff & Autonomous Failover',
        'Enterprise RBAC & Audit Log Generation'
      ],
      presets: [
        'Automate Customer SLA Escalation across Slack, Jira, and PostgreSQL',
        'Monitor Cloud Cluster Metrics and Autoscale GPU Pods via Webhooks',
        'Extract Invoice Line Items from PDF and Synchronize with SAP'
      ],
      simulations: {
        'Automate Customer SLA Escalation across Slack, Jira, and PostgreSQL': [
          { type: 'user', content: 'Automate Customer SLA Escalation across Slack, Jira, and PostgreSQL' },
          { type: 'thought', content: 'Initializing incident triage pipeline. Checking ticket queue and high-priority SLA breaches.' },
          { type: 'tool', tool: 'POSTGRES_QUERY', args: 'SELECT * FROM tickets WHERE priority="P0" AND response_time_min > 15' },
          { type: 'tool', tool: 'SLACK_ALERT_WEBHOOK', args: 'channel="#incident-oncall" urgency="CRITICAL" count=1' },
          { type: 'tool', tool: 'JIRA_API_AUTOMATOR', args: 'action="escalate_ticket" id="INC-8942" assign="Lead_Engineer"' },
          { type: 'output', content: `## ✦ Autonomous Automation Pipeline Triggered

- **PostgreSQL**: Detected 1 breached P0 SLA (Ticket: \`INC-8942\`, Customer: Enterprise Tier).
- **Jira Automation**: Escalated status to \`IN_PROGRESS_CRITICAL\`, tagged engineering lead.
- **Slack Dispatch**: Broadcasted thread with runbook links and diagnostic telemetry.
- **Audit Log**: Snapshot written to audit database in 18ms.` }
        ],
        'default': [
          { type: 'user', content: 'Execute automated workflow' },
          { type: 'thought', content: 'Connecting to API endpoints and validating webhook tokens.' },
          { type: 'tool', tool: 'WORKFLOW_DISPATCHER', args: 'status="active"' },
          { type: 'output', content: `[Automation Dispatch Complete]\nAll 3 downstream services synchronized with zero human intervention.` }
        ]
      }
    },

    multitool: {
      id: 'multitool',
      name: 'Multi-Tool Agent',
      badge: 'DYNAMIC REASONING & REPL',
      desc: 'Dynamically plans and calls multiple tools (SQL databases, Python REPL, Web Search, Vector Memory) in an adaptive loop.',
      capabilities: [
        'Dynamic Function Calling & Tool Selection',
        'Live SQL Query & Pandas Sandbox Execution',
        'Vector DB Retrieval-Augmented Generation',
        'Recursive ReAct Loop (Thought-Action-Observation)'
      ],
      presets: [
        'Query Financial SQL DB, Plot Portfolio Sharpe Ratio in Sandbox & Email Summary',
        'Fetch Live Crypto Arbitrage Rates, Calculate Variance and Alert Discord',
        'Scrape Competitor Pricing, Run Sentiment Analysis and Update Vector Store'
      ],
      simulations: {
        'Query Financial SQL DB, Plot Portfolio Sharpe Ratio in Sandbox & Email Summary': [
          { type: 'user', content: 'Query Financial SQL DB, Plot Portfolio Sharpe Ratio in Sandbox & Email Summary' },
          { type: 'thought', content: 'Step 1: Need to retrieve portfolio returns from database. Invoking SQL Tool.' },
          { type: 'tool', tool: 'SQL_EXECUTOR', args: 'SELECT date, ticker, return_pct FROM portfolio_returns WHERE date >= "2025-01-01"' },
          { type: 'thought', content: 'Data retrieved (252 rows). Step 2: Calculate annualized Sharpe Ratio in Python REPL sandbox.' },
          { type: 'tool', tool: 'PYTHON_SANDBOX_REPL', args: 'import numpy as np; rf=0.045; sharpe = (returns.mean() - rf) / returns.std() * np.sqrt(252)' },
          { type: 'thought', content: 'Calculated Sharpe Ratio: 2.34 (Optimal Alpha). Step 3: Generating visual graph & dispatching report.' },
          { type: 'output', content: `## ✦ Multi-Tool Execution Complete

1. **SQL Extraction**: Pulled 252 trading days across 8 portfolio asset classes.
2. **Quantitative Computing Sandbox**:
   - Portfolio Annualized Return: **24.8%**
   - Annualized Volatility: **8.7%**
   - **Sharpe Ratio: 2.34** (Top decile efficiency).
3. **Dispatch**: Generated vector plot artifact and sent email digest to stakeholders.` }
        ],
        'default': [
          { type: 'user', content: 'Run multi-tool chained pipeline' },
          { type: 'thought', content: 'Inspecting available tool registry: [WebSearch, SQL, Python, Memory]. Formulating plan.' },
          { type: 'tool', tool: 'DYNAMIC_ORCHESTRATOR', args: 'tools=["Search", "PythonREPL"]' },
          { type: 'output', content: `[Multi-Tool Execution Complete]\nSuccessfully chained 3 distinct tool invocations with verified data consistency.` }
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
      tagLabel = 'USER DIRECTIVE';
    } else if (entry.type === 'thought') {
      tagLabel = 'AGENT CHAIN-OF-THOUGHT';
    } else if (entry.type === 'tool') {
      tagLabel = `TOOL INVOCATION: ${entry.tool}`;
    } else if (entry.type === 'output') {
      tagLabel = 'FINAL AGENT SYNTHESIS';
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
      runBtnEl.innerHTML = `<span>Thinking...</span>`;
    }

    for (let i = 0; i < simulationSteps.length; i++) {
      const step = simulationSteps[i];
      appendTerminalEntry(step);
      // Realistic typing / thinking delay
      await new Promise((resolve) => setTimeout(resolve, i === 0 ? 300 : 700));
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
