export const courseModules = [
    {
        title: "Module 1: Foundations & Mindset",
        slug: "foundations",
        desc: "The prerequisite mental models for success.",
        chapters: [
            {
                title: "Introduction: The New Era",
                slug: "intro-new-era",
                content: `
                    <h3>The Shift: From Typing to Designing</h3>
                    <p>We are no longer in the <em>Information Age</em>. We are in the <strong>Synthesis Age</strong>.</p>
                    <ul>
                        <li>The bottleneck is no longer <em>knowledge</em>.</li>
                        <li>The bottleneck is <em>structure</em>.</li>
                    </ul>
                    <p>AI can already:</p>
                    <ul>
                        <li>Write code faster than any human</li>
                        <li>Design interfaces</li>
                        <li>Draft business strategies</li>
                        <li>Generate content at industrial scale</li>
                    </ul>
                    <p>Yet most people feel <em>disappointed</em> by AI. Why? Because they approach a <strong>systemic tool</strong> with a <strong>chat mindset</strong>.</p>
                    
                    <h3>The Architect vs. The Amateur</h3>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <p><strong>The Amateur:</strong> Treats AI like Google with opinions. Types vague prompts. Hopes for magic.</p>
                        <p><strong>The Architect:</strong> Treats AI like a junior engineer. Designs constraints. Breaks work into stages.</p>
                    </div>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        AI does not reward intelligence. It rewards <em>clarity and structure</em>.
                    </blockquote>
                    <p>The core shift:</p>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0; text-align: center;">
                        <strong>From: “What should I ask?”</strong><br/>
                        <strong>To: “What system should I build?”</strong>
                    </div>
                `
            },
            {
                title: "The 'Why': System Engineering",
                slug: "why-system-engineering",
                content: `
                    <h3>The Trap: Prompt Engineering</h3>
                    <p>Prompt engineering is useful — but incomplete. It is <strong>stateless</strong>. A single prompt cannot build a real product, maintain consistency, or debug itself.</p>
                    <p>Prompt engineering is like shouting instructions at a factory <em>once</em> and hoping the product comes out perfect.</p>
                    
                    <h3>The Unlock: Pipelines</h3>
                    <p>Professionals don’t write <em>better prompts</em>. They build <strong>pipelines</strong>.</p>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <p><strong>Example (Bad):</strong> “Build me a SaaS app...”</p>
                        <p><strong>Example (Good):</strong></p>
                        <ol>
                            <li>Define product spec</li>
                            <li>Generate database schema</li>
                            <li>Generate UI skeleton</li>
                            <li>Integrate and test</li>
                        </ol>
                    </div>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        AI scales linearly. Humans fail exponentially. Pipelines invert that.
                    </blockquote>

                    <h3>Mental Model: AI as a Compiler</h3>
                    <p>Treat AI like a compiler for <em>intent</em>.</p>
                    <ul>
                        <li>Vague intent → broken build</li>
                        <li>Clear spec → reliable output</li>
                    </ul>
                    <p>Your job is to be <strong>precise</strong>.</p>
                `
            },
            {
                title: "Good Habits: The Professional Standard",
                slug: "good-habits",
                content: `
                    <h3>Why Habits Matter More Than Talent</h3>
                    <p>AI amplifies <em>whatever is already there</em>. Sloppy thinkers become faster at being sloppy.</p>
                    <p>This course assumes <strong>professional standards</strong>.</p>
                    
                    <h3>Habit 1: Plan First</h3>
                    <p>Before touching AI, answer: What is the outcome? What are the constraints?</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        If you can’t explain it in bullets, you can’t build it with AI.
                    </blockquote>

                    <h3>Habit 2: Console Logging Everything</h3>
                    <p>AI-generated code <em>lies silently</em>. <strong>Silence is the enemy.</strong> Professional default: Log inputs. Log outputs. Log errors.</p>
                    
                    <h3>Habit 3: Atomic Commits</h3>
                    <p>AI encourages reckless speed. Atomic commits enforce discipline.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        Speed without control is just chaos arriving early.
                    </blockquote>

                    <h3>Habit 4: Trust but Verify</h3>
                    <p>AI is confident — not correct. <strong>Power move:</strong> “Explain why this is correct and where it might fail.”</p>
                    
                    <hr/>
                    <h3>The Core Philosophy</h3>
                    <ol>
                        <li><strong>Systems over prompts</strong></li>
                        <li><strong>Structure over cleverness</strong></li>
                        <li><strong>Verification over faith</strong></li>
                        <li><strong>Shipping over theory</strong></li>
                    </ol>
                    <p>This is not a course about <em>using AI</em>. This is a course about <strong>becoming dangerous with it</strong>.</p>
                `
            }
        ]
    },
    {
        title: "Module 2: The Art of Building",
        slug: "art-of-building",
        desc: "How to construct software in the AI age without chaos.",
        chapters: [
            {
                title: "The Builder's Behavior",
                slug: "builders-behavior",
                content: `
                    <h3>Why Most People Fail</h3>
                    <p>It's not lack of intelligence. It's because they rush, over-ask, and skip verification. AI feels fast, so people panic and try to do everything at once. <strong>That impulse is the enemy.</strong></p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        AI rewards patience more than speed.
                    </blockquote>

                    <h3>Habit 1: One Step at a Time (The Anti-Chaos Rule)</h3>
                    <p><strong>Bad approach:</strong> "Build a to-do app with auth, database, UI, and deployment." (Result: 600 lines of broken code).</p>
                    <p><strong>Professional approach:</strong></p>
                    <ol>
                        <li>"Create a minimal to-do data model." (Verified)</li>
                        <li>"Create CRUD endpoints." (Verified)</li>
                        <li>"Add persistence." (Verified)</li>
                    </ol>
                    <p>If you can’t explain what you’re building <em>right now</em>, you’re building too much.</p>

                    <h3>Habit 2: Constant Structure Prompts</h3>
                    <p>Professionals don’t rely on inspiration. They rely on <strong>templates</strong>.</p>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>The Core Builder Prompt:</strong><br/>
                        "You are a senior engineer. Do not guess. Before writing code, respond with: 1. Assumptions, 2. Step-by-step plan, 3. The code."
                    </div>
                `
            },
            {
                title: "Simple vs. Complex",
                slug: "simple-vs-complex",
                content: `
                    <h3>Knowing What You’re Building</h3>
                    <p>One of the hardest skills is knowing <strong>how much architecture you actually need</strong>.</p>
                    
                    <h4>Scripts: Fast, Ugly, Powerful</h4>
                    <p>Linear, short-lived, focused. Perfect for prototypes and internal tools. <strong>Most things should start as scripts.</strong></p>

                    <h4>Platforms: Expensive but Necessary</h4>
                    <p>Store state, serve users, evolve over time. They require clear boundaries, testing, and discipline.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        Mistake: building a platform before you’ve earned it. If nobody is using it yet, don’t build for scale.
                    </blockquote>
                `
            },
            {
                title: "The Architecture Map",
                slug: "architecture-map",
                content: `
                    <h3>Seeing Before Writing</h3>
                    <p>Before code, you draw the map. Not diagrams. Words.</p>
                    
                    <h4>The 4-Layer Mental Model</h4>
                    <p>Every system can be explained as:</p>
                    <ol>
                        <li><strong>Input</strong> – where data comes from</li>
                        <li><strong>Logic</strong> – what happens to it</li>
                        <li><strong>Storage</strong> – where it lives</li>
                        <li><strong>Output</strong> – what the user sees</li>
                    </ol>
                    <p>When AI gets confused, it’s usually mixing layers. Your job is to separate them.</p>

                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>The Blueprint Prompt:</strong><br/>
                        "Describe the system at a high level. List each component and its responsibility. Do not write code yet."
                    </div>
                `
            },
            {
                title: "The Skeleton Strategy",
                slug: "skeleton-strategy",
                content: `
                    <h3>Iterative Development</h3>
                    <p>You don’t build a body by painting skin first.</p>
                    <ul>
                        <li><strong>1. Skeleton (Wires):</strong> Routes exist. Functions exist. Data is mocked. Nothing is pretty. Everything runs.</li>
                        <li><strong>2. Muscle (Logic):</strong> Real rules. Real transformations. Real persistence. Still not pretty. Still correct.</li>
                        <li><strong>3. Skin (Polish):</strong> Validation. UI. Edge cases. Only now does beauty matter.</li>
                    </ul>

                    <h3>The Human Build Loop</h3>
                    <p>1. Specify clearly -> 2. Ask AI for a plan -> 3. Generate small code -> 4. Run it -> 5. Read logs -> 6. Fix one thing -> 7. Commit.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        Mastery is repetition without panic.
                    </blockquote>
                `
            }
        ]
    },
    {
        title: "Module 3: Agentic Workflows",
        slug: "agentic-workflows",
        desc: "Stop working with AI. Start working through AI.",
        chapters: [
            {
                title: "The Manager Mindset",
                slug: "manager-mindset",
                content: `
                    <h3>From 'Chat' to 'Agent'</h3>
                    <p>Most people never leave chat mode (reactive, stateless). Agents are task-oriented, repeatable, and relentless.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        An agent is simply: AI + role + tools + memory + rules.
                    </blockquote>
                    
                    <h4>Why the 'God Prompt' Always Fails</h4>
                    <p>Trying to make one prompt do everything (plan, build, debug) creates confusion, not expertise. It lacks prioritization and checkpoints.</p>
                    <p><strong>Managers Don't Do the Work:</strong> They define outcomes, assign tasks, and review results. Your job is <em>clarity</em>, not effort.</p>
                `
            },
            {
                title: "The Manager / Worker Pattern",
                slug: "manager-worker-pattern",
                content: `
                    <h3>Splitting Responsibilities</h3>
                    <p>This is the most important pattern in agentic systems.</p>
                    
                    <h4>The Manager Agent</h4>
                    <p>Understands the goal. Breaks it into tasks. Assigns them. Evaluates output. <strong>Never writes production code.</strong></p>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>Manager Prompt:</strong> "You are a project manager. Break the goal into small, testable tasks. Do not solve them. Return a task list with acceptance criteria."
                    </div>

                    <h4>The Worker Agent</h4>
                    <p>Has a narrow role. Solves one task. Produces concrete output.</p>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>Worker Prompt:</strong> "You are a backend engineer. Complete ONLY task #3. Follow criteria exactly. If blocked, explain why."
                    </div>
                `
            },
            {
                title: "Tools & Memory",
                slug: "tools-and-memory",
                content: `
                    <h3>Giving AI Hands (Tool Use)</h3>
                    <p>An agent without tools is just a talker. Tools cross the "Digital Air Gap".</p>
                    <ul>
                        <li><strong>Tools:</strong> Filesystem, Terminal, Browser.</li>
                        <li><strong>Rule:</strong> Never give an agent more access than its role requires.</li>
                    </ul>

                    <h3>The Goldfish Problem (Memory)</h3>
                    <p>LLMs forget everything when the context window closes.</p>
                    <ul>
                        <li><strong>Short-Term:</strong> Current conversation. Fast but fragile.</li>
                        <li><strong>Long-Term:</strong> Files, RAG, Databases. Agents <em>retrieve</em> memory, they don't magically retain it.</li>
                    </ul>
                    <p><strong>Fix:</strong> Write decisions down. Store specs. Re-inject context deliberately.</p>
                `
            },
            {
                title: "Human Workflows",
                slug: "human-workflows",
                content: `
                    <h3>The End-to-End Workflow</h3>
                    <ol>
                        <li><strong>Define Goal:</strong> "Build a minimal API."</li>
                        <li><strong>Manager Breaks Down:</strong> "1. Data Model, 2. Endpoints, 3. Tests."</li>
                        <li><strong>Workers Execute:</strong> One task, one agent, one output.</li>
                        <li><strong>You Decide:</strong> Accept, Revise, or Reassign.</li>
                    </ol>

                    <h4>Human-in-the-Loop</h4>
                    <p>Agentic systems are about <em>protecting human attention</em>, not removing humans. Early systems should require approval before file writes or deployments.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        A good agent makes you calmer, not busier.
                    </blockquote>
                `
            }
        ]
    },
    {
        title: "Module 4: Business & Monetization",
        slug: "business-monetization",
        desc: "Turning skills into income.",
        chapters: [
            {
                title: "Launch Strategy",
                slug: "launch-strategy",
                content: `
                    <h3>Why Speed Beats Perfection</h3>
                    <p>“If I just build something impressive, money will follow.” <strong>This is a lie.</strong> Markets reward speed, clarity, and solved pain, not technical purity.</p>
                    
                    <h4>The Speed-Run Mental Model</h4>
                    <p>You are running an experiment. Rules: Hours, not weeks. Manual before automated. Ugly before perfect.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        If it takes more than a day, you built too much.
                    </blockquote>

                    <h4>The One-Prompt Build</h4>
                    <p>Not one literal prompt, but one <strong>outcome-focused instruction</strong>. Example: "Create a service that summarizes meeting notes into action items in 10 minutes." Everything else is detail.</p>
                `
            },
            {
                title: "Implementation & Monetization",
                slug: "implementation-monetization",
                content: `
                    <h3>Selling Outcomes, Not Software</h3>
                    <p>Nobody wants a dashboard or an agent. They want fewer emails, faster decisions, and less stress.</p>
                    <p><strong>Your Product Promise:</strong> "I help X get Y without Z."</p>

                    <h4>The Productized Service Model</h4>
                    <p>The fastest path to money. Fixed scope, fixed price, clear delivery. (e.g., Weekly AI reports, Automated qualification).</p>
                    
                    <h4>Pricing Like an Adult</h4>
                    <p>Do not price by hours or tokens. Price by <strong>value created</strong> and <strong>pain removed</strong>.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        If it feels scary to say the price, you’re close.
                    </blockquote>
                `
            },
            {
                title: "The Stack Strategy",
                slug: "stack-strategy",
                content: `
                    <h3>The 4-Screen Flow</h3>
                    <p>Every monetized AI system has four distinct surfaces. If one is missing, trust breaks.</p>
                    <ol>
                        <li><strong>Input:</strong> What the client gives you.</li>
                        <li><strong>Processing:</strong> What AI does (The Magic).</li>
                        <li><strong>Review:</strong> Where humans approve (The Trust).</li>
                        <li><strong>Delivery:</strong> How value is delivered (The Outcome).</li>
                    </ol>
                `
            },
            {
                title: "The Strategic Advisor",
                slug: "strategic-advisor",
                content: `
                    <h3>The Master System Prompt</h3>
                    <p>At some point, you stop asking AI for tasks. You ask it for <strong>judgment</strong>.</p>
                    
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>The Advisor Prompt:</strong><br/>
                        "You are my strategic advisor. Your job is to: Challenge assumptions, Identify risks, Suggest simpler paths. Do not flatter. Optimize for leverage and speed."
                    </div>
                    
                    <h4>Final Thought</h4>
                    <p>You don’t need permission. You need one real problem, one fast system, and one paying client. Everything else is noise.</p>
                `
            }
        ]
    },
    {
        title: "Module 5: The New IDE Landscape",
        slug: "new-ide-landscape",
        desc: "Design a cockpit that makes AI useful by default.",
        chapters: [
            {
                title: "The Anatomy of an AI IDE",
                slug: "anatomy-ai-ide",
                content: `
                    <h3>Why Structure Matters</h3>
                    <p>A bad workspace turns good AI into noise. A cockpit has clear controls, shows critical signals, and hides distractions.</p>
                    
                    <h4>The 4 Layers</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        <li><strong>1. The Editor:</strong> Where you think. Fast, predictable, minimal.</li>
                        <li><strong>2. The AI Interface:</strong> Where you converse. Scoped questions, respecting boundaries.</li>
                        <li><strong>3. The Context Engine:</strong> What AI sees. The invisible layer that decides history and visibility.</li>
                        <li><strong>4. The Execution Surface:</strong> Truth. Terminals, logs, tests.</li>
                    </ul>
                `
            },
            {
                title: "Choosing Your Cockpit",
                slug: "choosing-your-cockpit",
                content: `
                    <h3>Best for How You Work</h3>
                    <p>There is no "best" AI IDE. Only best for your workflow.</p>
                    
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>Cursor:</strong> Serious coding. Precise refactors. Strong file awareness.<br/><br/>
                        <strong>Replit:</strong> Fast experiments. Zero setup. Teaching.<br/><br/>
                        <strong>Windsurf:</strong> Agent-heavy workflows. Task-based thinking.
                    </div>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        Choose the environment that matches your maturity, not your ambition.
                    </blockquote>
                `
            },
            {
                title: "Setting Up Your Cockpit",
                slug: "setting-up-cockpit",
                content: `
                    <h3>Calm by Design</h3>
                    <p>AI behaves better when rules don’t disappear. Use persistent files like <code>.cursorrules</code>.</p>
                    
                    <h4>Example Core Rules</h4>
                    <ul>
                        <li>Do not rewrite unrelated code.</li>
                        <li>Prefer small, testable changes.</li>
                        <li>Ask before introducing new libraries.</li>
                    </ul>
                    <p><strong>Extensions:</strong> Use them as force multipliers (formatters, linters). Avoid ones that hide errors or add noise.</p>
                `
            },
            {
                title: "Working With AI",
                slug: "working-with-ai",
                content: `
                    <h3>Scoped Requests</h3>
                    <p>Never ask "Fix this file." Ask "Fix the error in function X. Do not touch anything else."</p>
                    
                    <h4>Diff-First Thinking</h4>
                    <p>Always review changes as diffs. Ask: What changed? Why? What could break? AI speed makes this mandatory.</p>
                `
            },
            {
                title: "Troubleshooting",
                slug: "troubleshooting",
                content: `
                    <h3>When Things Go Wrong</h3>
                    <ul>
                        <li><strong>AI Rewrites Everything:</strong> Too much context. Fix: Narrow scope.</li>
                        <li><strong>AI Forgets Decisions:</strong> No rules. Fix: Write it down.</li>
                        <li><strong>You Feel Tired:</strong> Too much automation. Fix: Slow down.</li>
                    </ul>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        Mastery is not faster typing. It is fewer surprises.
                    </blockquote>
                `
            }
        ]
    },
    {
        title: "Module 6: Mastering the Prompt-Code Loop",
        slug: "prompt-code-loop",
        desc: "Prompting is not magic. It is a disciplined conversation.",
        chapters: [
            {
                title: "The Spec-First Methodology",
                slug: "spec-first",
                content: `
                    <h3>Alignment Before Code</h3>
                    <p>A spec is not documentation. It is alignment. Before asking for code, you must know what success looks like.</p>
                    
                    <h4>The North Star Spec</h4>
                    <p>Every task needs a clear goal. "This function accepts validated input and returns a deterministic output. No side effects." This one sentence prevents dozens of errors.</p>

                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>Simple Spec Template:</strong><br/>
                        Goal, Non-goals, Inputs, Outputs, Edge cases. You don’t need poetry. You need clarity.
                    </div>
                `
            },
            {
                title: "Iterative Prompting",
                slug: "iterative-prompting",
                content: `
                    <h3>Talking Like an Adult</h3>
                    <p>Big, one-shot prompts hide assumptions. Professionals iterate on purpose.</p>
                    
                    <h4>The Three-Step Prompt Pattern</h4>
                    <ol>
                        <li><strong>Ask for understanding:</strong> "Restate the problem."</li>
                        <li><strong>Ask for a plan:</strong> "List assumptions. Propose a plan."</li>
                        <li><strong>Ask for implementation:</strong> "Implement step 1."</li>
                    </ol>
                    <p>This forces reflection and alignment. AI becomes predictable.</p>
                `
            },
            {
                title: "The Hallucination Wall",
                slug: "hallucination-wall",
                content: `
                    <h3>When Confidence Lies</h3>
                    <p>The dangerous phase: Code compiles, but behaves incorrectly. Confidence is high.</p>
                    
                    <h4>Debug-Driven Development</h4>
                    <p>Stop asking "Why is this broken?". Start asking "What did we expect? What actually happened?". Logs > explanations.</p>

                    <h4>The Reset Move</h4>
                    <p>When instructions conflict and fixes stack, <strong>RESET</strong>. New chat. Clean spec. Start again. It is hygiene, not failure.</p>
                `
            },
            {
                title: "Repairing Conversations",
                slug: "repairing-conversations",
                content: `
                    <h3>Symptoms and Fixes</h3>
                    <ul>
                        <li><strong>Repeats Mistakes:</strong> Restate the spec. Narrow scope.</li>
                        <li><strong>Argues Confidently:</strong> Run the code. Paste output. Reality wins arguments.</li>
                        <li><strong>You Feel Lost:</strong> Roll back. Return to last working state.</li>
                    </ul>
                `
            },
            {
                title: "Prompting as Leadership",
                slug: "prompting-leadership",
                content: `
                    <h3>Setting Standards</h3>
                    <p>When you prompt, you are assigning work. Sloppy prompts create sloppy systems.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        AI is structured amplification. If you think clearly, it will build clearly. Prompting is not magic. It is management.
                    </blockquote>
                `
            }
        ]
    },
    {
        title: "Module 7: The Clean Code Console",
        slug: "clean-code-console",
        desc: "Using the terminal as a truth machine. Confidence meets reality.",
        chapters: [
            {
                title: "The Terminal as a Safety Net",
                slug: "terminal-safety-net",
                content: `
                    <h3>Why GUIs Lie</h3>
                    <p>Interfaces hide warnings, deprecations, and partial failures. The terminal shows everything.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        Professionals read output. Amateurs click buttons.
                    </blockquote>
                    
                    <h4>Always Run the Code</h4>
                    <p>Never trust code you haven’t executed. Never merge code you haven’t run. It sounds obvious, but is violated constantly.</p>
                `
            },
            {
                title: "The Cleanup Kit",
                slug: "cleanup-kit",
                content: `
                    <h3>Non-Negotiable Tools</h3>
                    <p>These tools compensate for AI’s indifference to cleanliness.</p>
                    <ul>
                        <li><strong>Formatter (Prettier):</strong> Not aesthetics. Cognitive load reduction.</li>
                        <li><strong>Linter (ESLint):</strong> Catches dangerous patterns early.</li>
                        <li><strong>Git:</strong> A decision recorder, not just a backup. One idea per commit.</li>
                    </ul>
                `
            },
            {
                title: "Trust but Verify",
                slug: "trust-verify",
                content: `
                    <h3>Pipelines Over Hope</h3>
                    <p>AI encourages premature automation. Resist it. Run commands manually first.</p>
                    
                    <h4>Simple Build Pipelines</h4>
                    <p>Format -> Lint -> Test. If any step fails, stop. A failing pipeline is a gift.</p>
                `
            },
            {
                title: "Debugging as a Skill",
                slug: "debugging-skill",
                content: `
                    <h3>The Calm Debug Loop</h3>
                    <ol>
                        <li>Reproduce the error.</li>
                        <li>Read the message.</li>
                        <li>Isolate the failure.</li>
                        <li>Change one thing.</li>
                        <li>Re-run.</li>
                    </ol>
                    <p><strong>AI Prompt:</strong> "Here is the exact error output. Explain what it means and suggest one fix."</p>
                `
            },
            {
                title: "Cleaning Spaghetti Without Rage",
                slug: "cleaning-spaghetti",
                content: `
                    <h3>The Refactor Pass</h3>
                    <p>Refactoring is separate from building. Rules: No new features. No behavior changes. Smaller functions.</p>
                    
                    <h4>Final Thought</h4>
                    <p>The terminal is honest. Once you stop fearing it, you gain <strong>confidence that survives contact with reality</strong>.</p>
                `
            }
        ]
    },
    {
        title: "Module 8: Full-Stack Integration",
        slug: "full-stack-integration",
        desc: "Integration is about responsibility. Shipping is a contract with reality.",
        chapters: [
            {
                title: "Databases Without Drama",
                slug: "databases-no-drama",
                content: `
                    <h3>The AI Database Trap</h3>
                    <p>AI loves to invent weird schemas. This creates fragility.</p>
                    
                    <h4>Start With Minimal Data</h4>
                    <p>Ask: What must be stored? What can be derived? Minimal schemas survive change.</p>
                    
                    <h4>Migrations Are Not Optional</h4>
                    <p>If data matters, migrations matter. Use AI to generate them, but <strong>you</strong> approve them. "If a schema change cannot be replayed, it is not real."</p>
                `
            },
            {
                title: "Authentication as a Boundary",
                slug: "auth-boundary",
                content: `
                    <h3>Auth Is Not a Feature</h3>
                    <p>It is a wall. AI often treats auth as a checkbox. That is how breaches happen.</p>
                    
                    <h4>Use Boring Auth</h4>
                    <p>This is not the place for creativity. Prefer proven libraries and managed services. Your job is to apply security, not invent it.</p>
                `
            },
            {
                title: "APIs as Contracts",
                slug: "apis-contracts",
                content: `
                    <h3>The Contract Mental Model</h3>
                    <p>An API is a promise. AI-generated APIs often change shape silently. That is unacceptable.</p>
                    
                    <h4>Write the Contract First</h4>
                    <p>Define request shape, response shape, and errors <strong>before</strong> code. Then ask AI to implement. This prevents accidental breaking changes.</p>
                `
            },
            {
                title: "The One-Click Reality",
                slug: "one-click-reality",
                content: `
                    <h3>Shipping Is a System</h3>
                    <p>Deployment should be predictable, reversible, and boring. If it feels exciting, something is wrong.</p>
                    
                    <h4>Observability</h4>
                    <p>Minimum viable observability: Logs, Errors, Basic metrics. AI can help wire this, but <strong>you must read it</strong>.</p>
                    
                    <h4>When Things Break</h4>
                    <p>Professionals ask: "What failed? Who is affected?". They don't panic.</p>
                `
            },
            {
                title: "Human-in-the-Loop in Production",
                slug: "hitl-production",
                content: `
                    <h3>Automation Stops at Consequence</h3>
                    <p>Never automate deletions, payments, or user-impacting changes without review.</p>
                    
                    <h4>Final Thought</h4>
                    <p>Shipping is humility. You assume things will break, and you prepare. <strong>Mature systems fail gracefully.</strong></p>
                `
            }
        ]
    },
    {
        title: "Module 9: Advanced AI Orchestration",
        slug: "advanced-orchestration",
        desc: "Management without drowning. Design systems that can evolve.",
        chapters: [
            {
                title: "The Architect vs The Builder",
                slug: "architect-vs-builder",
                content: `
                    <h3>Two Fundamental Roles</h3>
                    <p><strong>Architect Agent:</strong> Plans, Defines constraints, Evaluates. Never writes code.</p>
                    <p><strong>Builder Agent:</strong> Executes, Writes code, Follows specs.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        Thinking and doing must be separated. You stay in the architect seat. Always.
                    </blockquote>
                `
            },
            {
                title: "Multi-Agent Workflow Patterns",
                slug: "workflow-patterns",
                content: `
                    <h3>The Triage Pattern</h3>
                    <p>Incoming tasks are Accepted, Deferred, or Rejected. One agent triages, others execute. Prevents chaos.</p>
                    
                    <h4>The Review Loop</h4>
                    <p>Every builder output goes through validation and human review. Speed without review is debt.</p>
                `
            },
            {
                title: "Coordination Over Cleverness",
                slug: "coordination",
                content: `
                    <h3>Explicit Handoffs</h3>
                    <p>Write handoffs like contracts: Inputs, Outputs, Success criteria. Ambiguity is the enemy.</p>
                    
                    <h4>State Is a First-Class Concern</h4>
                    <p>Ask: What must persist? What can be forgotten? Garbage memory creates garbage decisions.</p>
                `
            },
            {
                title: "The Evolving Stack",
                slug: "evolving-stack",
                content: `
                    <h3>Adapters Over Dependencies</h3>
                    <p>Tools evolve faster than doctrine. Design systems so tools can be swapped. Today’s platform is tomorrow’s legacy.</p>
                    <p><strong>Orchestration survives change.</strong></p>
                `
            },
            {
                title: "Knowing When to Stop",
                slug: "when-to-stop",
                content: `
                    <h3>The Over-Orchestration Trap</h3>
                    <p>Signs you’ve gone too far: Debugging coordination instead of logic. No one knows where truth lives.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        The best conductors are barely noticed.
                    </blockquote>
                `
            }
        ]
    },
    {
        title: "Module 10: The Agentic Architect",
        slug: "agentic-architect",
        desc: "Design systems that think, act, adapt, and endure.",
        chapters: [
            {
                title: "The ReAct Loop",
                slug: "react-loop",
                content: `
                    <h3>The Spine of Agency</h3>
                    <p>Every agentic system repeats: <strong>Observe -> Reason -> Act -> Reflect.</strong></p>
                    
                    <h4>Why Reflection Matters</h4>
                    <p>Without reflection, errors repeat. Reflection is how agents learn within constraints.</p>
                `
            },
            {
                title: "Designing Multi-Agent Systems",
                slug: "multi-agent-systems",
                content: `
                    <h3>One Mind, Many Hands</h3>
                    <p>Good systems centralize judgment and distribute labor. Never the reverse.</p>
                    
                    <h4>The Triage + Execution Pattern</h4>
                    <p><strong>Architect:</strong> Evaluates, Assigns, Reviews.</p>
                    <p><strong>Workers:</strong> Execute, Report.</p>
                    <p>Humans oversee the architect. Always.</p>
                `
            },
            {
                title: "State & Memory",
                slug: "state-memory",
                content: `
                    <h3>Not All Memory Is Equal</h3>
                    <p><strong>Short-Term:</strong> Active goals. <strong>Long-Term:</strong> Patterns & Decisions. Confusing them creates instability.</p>
                    
                    <h4>The Goldfish Problem (Solved)</h4>
                    <p>Memory must be curated and pruned. More memory != better intelligence. Relevant memory does.</p>
                `
            },
            {
                title: "Human-in-the-Loop",
                slug: "human-in-the-loop",
                content: `
                    <h3>Where Humans Must Stay</h3>
                    <p>Humans own final approval, ethics, and irreversible actions. Automation stops at consequence.</p>
                    
                    <h4>Designing for Intervention</h4>
                    <p>Good systems pause gracefully and ask for help. Opacity is a liability.</p>
                `
            },
            {
                title: "Designing for Change",
                slug: "designing-for-change",
                content: `
                    <h3>Tools Will Die</h3>
                    <p>Models improve, APIs deprecate. Architectures survive.</p>
                    <p>Design for replaceability, observability, and simplicity. If a tool disappears, your system should degrade, not collapse.</p>
                `
            },
            {
                title: "The Architect's Code",
                slug: "architects-code",
                content: `
                    <h3>Maturity Over Excitement</h3>
                    <p>The Architect prefers clarity, builds fewer systems better, and assumes failure.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1rem 0;">
                        Anyone can generate. Architects decide.
                    </blockquote>
                `
            }
        ]
    }
];
