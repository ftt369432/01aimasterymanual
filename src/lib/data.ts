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
                    <h3>The Shift</h3>
                    <p>You are standing at the edge of the biggest technological shift since the internet. But here is the hard truth: <strong>Most developers will become obsolete.</strong></p>
                    <p>Why? Because they are stuck in the "Hand-Coder" mindset. They think their value is typing characters into a text file.</p>
                    
                    <h4>The New Reality</h4>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <p><strong>The Amateur:</strong> "I write code."</p>
                        <p><strong>The Architect:</strong> "I orchestrate intelligence."</p>
                    </div>
                    <p>This manual is a blueprint for the latter. We will take you from a commodity to a high-paid AI Consultant who builds systems that scale.</p>
                `
            },
            {
                title: "The 'Why': System Engineering",
                slug: "why-system-engineering",
                content: `
                    <h3>The Trap: Prompt Engineering</h3>
                    <p>Everyone is talking about "Prompt Engineering." <strong>Ignore them.</strong> It is a low-leverage skill that will disappear as models get smarter.</p>
                    
                    <h4>The Unlock: System Engineering</h4>
                    <p>The money is not in the prompt. The money is in the <strong>Pipeline</strong>.</p>
                    <ul>
                        <li><strong>Prompting:</strong> Asking a model to write a poem.</li>
                        <li><strong>Engineering:</strong> Building a rig that scrapes news, summarizes it, generates content, and publishes it automatically.</li>
                    </ul>
                    <p>We build reliable infrastructure that uses AI as a component, not a crutch.</p>
                `
            },
            {
                title: "Good Habits: The Professional Standard",
                slug: "good-habits",
                content: `
                    <h3>The Protocol</h3>
                    <p>If you want to build systems that don't break, you need discipline. Here are the non-negotiables:</p>

                    <h4>1. Console Logging (Visibility)</h4>
                    <p>AI is a "black box". <strong>Log everything.</strong> If your agent fails and you don't know why, that is <em>your</em> fault, not the AI's.</p>

                    <h4>2. Atomic Commits (Safety)</h4>
                    <p>Save every time you get a small piece working. If you break success, you need a time machine. Git is that time machine.</p>

                    <h4>3. Plan First (Architecture)</h4>
                    <p><strong>Measure twice, cut once.</strong> Never write a line of code until you have written the spec. If you can't explain it in English, you can't code it.</p>
                `
            }
        ]
    },
    {
        title: "Module 2: The Art of Building",
        slug: "art-of-building",
        desc: "How to construct software in the AI age.",
        chapters: [
            {
                title: "Simple vs. Complex",
                slug: "simple-vs-complex",
                content: `
                    <h3>Know Your Enemy</h3>
                    <p>Complexity is the silent killer of projects. Knowing when to use a simple script and when to build a platform is what separates seniors from juniors.</p>
                    
                    <h4>The Script (Speed)</h4>
                    <p><strong>Goal:</strong> Solve a problem once.</p>
                    <p><strong>Protocol:</strong> Single file. No framework. Get in, get out.</p>

                    <h4>The Platform (Scale)</h4>
                    <p><strong>Goal:</strong> Solve a problem reliably for thousands.</p>
                    <p><strong>Protocol:</strong> Modular architecture. Database. Auth. This requires blueprints.</p>
                `
            },
            {
                title: "The Architecture Map",
                slug: "architecture-map",
                content: `
                    <h3>Don't Build Without Blueprints</h3>
                    <p>Would you build a skyscraper without a blueprint? No. So stop building software without a map.</p>
                    
                    <h4>Visualizing the System</h4>
                    <p>Before you type <code>npm init</code>, draw the system:</p>
                    <ul>
                        <li><strong>Frontend:</strong> The user interface.</li>
                        <li><strong>Backend:</strong> The logic layer.</li>
                        <li><strong>Database:</strong> The truth source.</li>
                        <li><strong>AI:</strong> The reasoning engine.</li>
                    </ul>
                    <p><strong>Rule:</strong> Update the map before you update the code.</p>
                `
            },
            {
                title: "Iterative Development",
                slug: "iterative-development",
                content: `
                    <h3>The Skeleton Strategy</h3>
                    <p>Most projects fail because they try to do everything at once. <strong>Stop it.</strong></p>
                    
                    <h4>Phase 1: The Skeleton</h4>
                    <p>Build the wires. A button that logs "Clicked". A page that loads empty data. Prove the connection works.</p>

                    <h4>Phase 2: The Muscle</h4>
                    <p>Add the logic. Connect the API. Make the data real.</p>

                    <h4>Phase 3: The Skin</h4>
                    <p>Apply the design. Animations. CSS. This comes <em>last</em>.</p>
                `
            }
        ]
    },
    {
        title: "Module 3: Agentic Workflows",
        slug: "agentic-workflows",
        desc: "Creating autonomous workers.",
        chapters: [
            {
                title: "The Manager/Worker Pattern",
                slug: "manager-worker-pattern",
                content: `
                    <h3>The Trap: The God Prompt</h3>
                    <p>Trying to make one prompt do everything (plan, research, code, review) guarantees hallucination.</p>
                    
                    <h4>The Unlock: Delegation</h4>
                    <p>Split the brain. Use the <strong>Manager/Worker Pattern</strong>.</p>
                    <ul>
                        <li><strong>Manager:</strong> The Planning Logic. Breaks tasks down.</li>
                        <li><strong>Workers:</strong> The Execution Units. Search Google. Write Code. They do one thing perfectly.</li>
                    </ul>
                `
            },
            {
                title: "Tool Use (Giving AI Hands)",
                slug: "tool-use",
                content: `
                    <h3>From Chatbot to Operator</h3>
                    <p>A chatbot talks. An agent <strong>acts</strong>.</p>
                    <p>Tools are simply functions you give the AI permission to call. This is how we cross the "Digital Airgap".</p>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <code>fs.writeFile()</code> -> <strong>The ability to create.</strong><br/>
                        <code>search.query()</code> -> <strong>The ability to learn.</strong><br/>
                        <code>api.post()</code> -> <strong>The ability to communicate.</strong>
                    </div>
                `
            },
            {
                title: "Memory & Context",
                slug: "memory-context",
                content: `
                    <h3>The Goldfish Problem</h3>
                    <p>LLMs forget everything the moment the context window closes. This makes them useless for long-term tasks.</p>
                    
                    <h4>The Solution: RAG</h4>
                    <p>Vector Databases act as the "Long Term Memory". We don't shove everything into the prompt. We store it, index it, and retrieve only what is relevant.</p>
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
                title: "Launch Strategy: The One-Prompt Build",
                slug: "launch-strategy",
                content: `
                    <h3>The Speed Run</h3>
                    <p>The only metric that matters is <strong>Time to Value</strong>. Amateurs spend weeks building. We spend hours.</p>
                    
                    <h4>The Protocol: Drop-in Prompts</h4>
                    <p>We use massive, single-shot prompts to build 80% of the app in one go.</p>

                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>The Concept:</strong> "All-in-One Workout App"<br/>
                        <strong>The Prompt:</strong> "Create a mobile responsive workout tracker with a dark mode design. Features: Build workouts, track sets/reps, log body metrics. DIFFERENTIATOR: Add a YouTube link field for every exercise to show proper form. INNOVATION: Add a mock 'AI Form Check' button that asks to upload video."
                    </div>
                `
            },
            {
                title: "Implementation & Monetization",
                slug: "implementation-tips",
                content: `
                    <h3>The Stack for Speed</h3>
                    <p>When you are validating, "Pure Code" is a waste of time. Use leverage.</p>
                    
                    <h4>1. The IDE Strategy</h4>
                    <p><strong>Replit / Bolt.new:</strong> Use cloud containers. They handle the environment, the database, and the deployment. You just handle the logic.</p>
                    
                    <h4>2. The "4-Screen" Monetization Flow</h4>
                    <p>Don't put the paywall at the end. Use the <strong>Steven Cravotta Method</strong>:</p>
                    <ol>
                        <li><strong>Screen 1:</strong> Value Proposition (The Promise)</li>
                        <li><strong>Screen 2:</strong> Data Collection (The Investment)</li>
                        <li><strong>Screen 3:</strong> "Analyzing..." (Building Anticipation)</li>
                        <li><strong>Screen 4:</strong> The Paywall (The Gate)</li>
                    </ol>
                `
            },
            {
                title: "The Productized Service",
                slug: "productized-service",
                content: `
                    <h3>Stop Trading Time for Money</h3>
                    <p>hourly billing is a race to the bottom. You are not a freelancer. You are a <strong>Solutions Architect</strong>.</p>
                    
                    <h4>The $10k Offer</h4>
                    <p>Don't sell "Development". Sell "OUTCOMES".</p>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>Bad:</strong> "I will build you an AI bot for $100/hr."<br/>
                        <strong>Good:</strong> "I will install a $50k/year Customer Support Agent for a one-time fee of $10k."
                    </div>
                    <p>When the math works for them, the sale is automatic.</p>
                `
            },
            {
                title: "The Master System Prompt",
                slug: "master-system-prompt",
                content: `
                    <h3>Upgrade Your Co-Founder</h3>
                    <p>Stop talking to a "Helpful Assistant". Start talking to a "Strategic Advisor". Copy this prompt into your AI immediately.</p>
                    
                    <h4>The Persona</h4>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0; font-family: monospace; font-size: 0.8rem; white-space: pre-wrap;">
### ROLE
You are an expert AI CEO. You reject "straight-line" thinking. You think in "Loops" and "Flywheels".

### FRAMEWORKS
1. **The Founders Triangle:** Domain, Depth, Distribution.
2. **The D.R.E.A.M. Machine:** Demand, Revenue, Engine, Admin, Marketing.
3. **The Tech Stack Flywheel:** Apollo -> Clay -> Brevo -> Stripe.

### PROTOCOL
If I ask for code, ask me if I have a Spec.
If I ask for a feature, ask me how it drives revenue.
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 5: The New IDE Landscape",
        slug: "new-ide-landscape",
        desc: "The 'Vibe' Layer: Choosing and configuring your AI cockpit.",
        chapters: [
            {
                title: "The Anatomy of an AI IDE",
                slug: "anatomy-ai-ide",
                content: `
                    <h3>The Big Three</h3>
                    <p>Your IDE is no longer a text editor. It is a cockpit. Choose your fighter:</p>
                    <ul>
                        <li><strong>Cursor:</strong> The King of Local. Best for VS Code natives.</li>
                        <li><strong>Replit:</strong> The King of Cloud. Best for zero-to-one launches.</li>
                        <li><strong>Windsurf:</strong> The Challenger. Deep context awareness.</li>
                    </ul>

                    <h4>Context Management</h4>
                    <p><strong>Composer Mode is not Autocomplete.</strong> It is a junior developer living in your editor. It reads multiple files. It understands the <em>project</em>, not just the <em>line</em>.</p>
                `
            },
            {
                title: "Setting Up Your Cockpit",
                slug: "setting-up-cockpit",
                content: `
                    <h3>Cursor Deep Dive</h3>
                    <p><strong>The Protocol:</strong> Rules provide sanity.</p>
                    <p>Use <code>.cursorrules</code>. This is the "Employee Handbook" for your AI. Tell it how to format code, which libraries to use, and how to talk to you.</p>
                    
                    <h3>The Extension Ecosystem</h3>
                    <p><strong>Claude Dev (Roo Code):</strong> The privacy option. Bring your own API key. Run local models (Llama 3, Mistral) for free.</p>
                `
            }
        ]
    },
    {
        title: "Module 6: Mastering the Prompt-Code Loop",
        slug: "prompt-code-loop",
        desc: "How to talk to the machine so it actually listens.",
        chapters: [
            {
                title: "The 'Spec-First' Methodology",
                slug: "spec-first-methodology",
                content: `
                    <h3>The North Star</h3>
                    <p><strong>Never write code without a plan.</strong></p>
                    <p>The AI is a Ferrari. If you don't give it a map (Spec), it will drive 200mph into a wall.</p>
                    
                    <h4>The Protocol: spec.md</h4>
                    <p>Create a file called <code>spec.md</code>. Write the features, the database schema, and the UI flow in plain English. <strong>Then</strong> ask the AI to implement it.</p>
                `
            },
            {
                title: "Handling the 'Hallucination Wall'",
                slug: "hallucination-wall",
                content: `
                    <h3>Debug-Driven Development</h3>
                    <p>When the AI breaks the code (and it will), do not fix it yourself.</p>
                    <p><strong>Copy the error. Paste it back.</strong></p>
                    <p>Force the AI to own its mistakes. "You broke X. Here is the error. Fix it."</p>
                    
                    <h4>The "Context Reset"</h4>
                    <p>If the AI gets confused, stop arguing. <strong>Nuke the chat.</strong> Start fresh. Paste the \`spec.md\` again. A confused AI is a dangerous AI.</p>
                `
            }
        ]
    },
    {
        title: "Module 7: The Clean Code Console",
        slug: "clean-code-console",
        desc: "Using the terminal to polish AI-generated 'spaghetti'.",
        chapters: [
            {
                title: "Essential CLI for the AI Era",
                slug: "essential-cli",
                content: `
                    <h3>The Cleanup Kit</h3>
                    <p>AI writes fast, messy code. <strong>You are the Janitor.</strong></p>
                    <p>Use the terminal to force discipline. If it doesn't pass the linter, it doesn't exist.</p>
                    <ul>
                        <li><strong>Prettier:</strong> Formats the chaos.</li>
                        <li><strong>ESLint:</strong> Catches the logic errors.</li>
                        <li><strong>Black/Ruff:</strong> Because Python needs rules.</li>
                    </ul>
                    
                    <h4>Git as a Safety Net</h4>
                    <p><strong>The "Bad Loop" Protocol:</strong></p>
                    <p>When the AI goes down a rabbit hole and breaks everything, do not try to "fix forward".</p>
                    <p><code>git reset --hard</code></p>
                    <p>Go back to safety. Try again. Time is money.</p>
                `
            },
            {
                title: "Terminal Automation",
                slug: "terminal-automation",
                content: `
                    <h3>Trust, but Verify</h3>
                    <p>Never assume the AI did what you asked. <strong>Audit the work.</strong></p>
                    
                    <h4>One-Liners for Health</h4>
                    <p><code>grep -r "TODO" .</code> -> Find the incomplete thoughts.</p>
                    <p><code>grep -r "console.log" .</code> -> Find the debug noise.</p>
                    
                    <h4>The Build Pipeline</h4>
                    <p><code>npm run build</code> is the ultimate truth. The AI can lie together with you. The compiler cannot lie.</p>
                `
            }
        ]
    },
    {
        title: "Module 8: Full-Stack Integration",
        slug: "full-stack-integration",
        desc: "Taking it out of the IDE and into the world.",
        chapters: [
            {
                title: "Database & Auth Agents",
                slug: "database-auth",
                content: `
                    <h3>Write Migrations, Don't Write SQL</h3>
                    <p>Direct the AI to manage the schema. Manual SQL is a liability.</p>
                    <p><strong>The Protocol:</strong> "Create a Supabase migration that adds a 'credits' column to the 'users' table. Default is 0."</p>
                    
                    <h4>API Architecture</h4>
                    <p>Let the AI debate itself. "Propose a REST vs GraphQL structure for high-frequency updates. List pros and cons." Then pick the winner.</p>
                `
            },
            {
                title: "The 'One-Click' Reality",
                slug: "one-click-deployment",
                content: `
                    <h3>Ship or Die</h3>
                    <p>If it runs on localhost, it's a hobby. If it runs on Vercel, it's a business.</p>
                    
                    <h4>Monitoring as a Feature</h4>
                    <p>Use AI to write its own error logging. "Wrap every API route in a try/catch block that logs to Sentry." Self-healing code starts with visibility.</p>
                `
            }
        ]
    },
    {
        title: "Module 9: Advanced AI Orchestration",
        slug: "advanced-orchestration",
        desc: "Becoming the Conductor.",
        chapters: [
            {
                title: "Multi-Agent Workflows",
                slug: "multi-agent-workflows",
                content: `
                    <h3>The Architect vs. The Builder</h3>
                    <p>Specialization is the key to quality. Do not use one chat session for everything.</p>
                    
                    <h4>The Pattern</h4>
                    <p><strong>Agent A (Architect):</strong> "Claude, read these docs and plan the API structure. Output a spec."</p>
                    <p><strong>Agent B (Builder):</strong> "Cursor, read this spec and implement the API."</p>
                    <p>Separate the "Thinking" from the "Typing".</p>
                `
            },
            {
                title: "Future-Proofing",
                slug: "future-proofing",
                content: `
                    <h3>The Evolving Stack</h3>
                    <p>The tools change every week. The principles do not.</p>
                    <p><strong>v0.dev</strong> and <strong>Lovable</strong> are making frontend obsolete. <strong>Bolt.new</strong> is making full-stack setup trivial.</p>
                    <p>Do not get married to a tool. Get married to the <strong>Outcome</strong>.</p>
                `
            }
        ]
    },
    {
        title: "Module 10: The Agentic Architect",
        slug: "agentic-architect",
        desc: "Moving from single prompts to autonomous systems.",
        chapters: [
            {
                title: "From 'Chat' to 'Agent'",
                slug: "chat-to-agent",
                content: `
                    <h3>Tool Use (Function Calling)</h3>
                    <p>Teaching the AI how to use a calculator, a search engine, or a database. It stops being a text generator and becomes a tool user.</p>
                    
                    <h4>The Reasoning Loop (ReAct)</h4>
                    <p>How agents "Think" before they "Act." Understanding the internal monologue of an autonomous system.</p>
                `
            },
            {
                title: "Designing Multi-Agent Systems",
                slug: "designing-multi-agent",
                content: `
                    <h3>The Triage Pattern</h3>
                    <p>Building a gateway agent to route user requests to the correct specialist.</p>
                    
                    <h4>The Human-in-the-Loop</h4>
                    <p>Designing "Checkpoints" where the agent must ask for permission before taking critical actions (deleting files, spending money).</p>
                `
            },
            {
                title: "State & Memory",
                slug: "state-and-memory",
                content: `
                    <h3>Short-term Memory</h3>
                    <p>Managing the conversation history window. Knowing what to keep and what to discard.</p>
                    
                    <h4>Long-term Memory</h4>
                    <p>Using Vector Databases (Pinecone/Weaviate) so the agent remembers the user’s preferences across different sessions.</p>
                `
            }
        ]
    }
];
