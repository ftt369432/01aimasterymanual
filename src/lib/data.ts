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
                    <h3>Welcome to the AI Mastery Manual</h3>
                    <p>You are standing at the edge of the biggest technological shift since the internet. But here is the truth: <strong>Coding is changing, not dying.</strong></p>
                    <p>This manual is not just a collection of tutorials. It is a blueprint for the future of software engineering. We are moving from "writing code" to "orchestrating intelligence".</p>
                    
                    <h4>What You Will Learn</h4>
                    <p>We will take you from a complete beginner to a high-paid AI Consultant. You will learn to:</p>
                    <ul>
                        <li>Build autonomous agents that do work for you.</li>
                        <li>Architect complex systems that don't break.</li>
                        <li>Package and sell your skills to businesses for thousands of dollars.</li>
                    </ul>
                    <p>Let's begin.</p>
                `
            },
            {
                title: "The 'Why': System Engineering",
                slug: "why-system-engineering",
                content: `
                    <h3>Beyond Prompt Engineering</h3>
                    <p>You've heard the term "Prompt Engineering". Forget it. It's a fleeting skill. As models get smarter, they won't need you to trick them into working.</p>
                    <p>The real skill is <strong>System Engineering</strong>.</p>
                    
                    <h4>The Difference</h4>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>Prompt Engineering:</strong> "Write me a poem about cats."<br/>
                        <strong>System Engineering:</strong> "Build a pipeline that scrapes cat news, summarizes it, generates a poem, and posts it to Twitter every morning at 8 AM."
                    </div>
                    <p>We build systems. We build pipelines. We build reliable infrastructure that uses AI as a component, not a crutch.</p>
                `
            },
            {
                title: "Good Habits: The Professional Standard",
                slug: "good-habits",
                content: `
                    <h3>Amateurs Hack, Professionals Engineer</h3>
                    <p>If you want to build systems that scale, you need discipline. Here are the non-negotiables of this course:</p>

                    <h4>1. Console Logging (Visibility)</h4>
                    <p>AI is a "black box". You don't know why it did what it did unless you log it. <strong>Log everything.</strong></p>
                    <p><em>"Silent failures are the enemy."</em> If your agent fails, you should know exactly which step failed and why.</p>

                    <h4>2. Atomic Commits (Safety)</h4>
                    <p>Don't code for 4 hours and then try to save. Save every time you get a small piece working. If you break something, you need to be able to go back.</p>

                    <h4>3. Plan First (Architecture)</h4>
                    <p><strong>Measure twice, cut once.</strong> Before you write a single line of code, write down what you are going to build. Draw a map. If you can't explain it in simple English, you can't code it.</p>
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
                    <p>Not every problem needs a sledgehammer. Knowing when to use a simple script and when to build a complex system is what separates seniors from juniors.</p>

                    <h4>Simple Apps (The Script)</h4>
                    <p><strong>Goal:</strong> Solve a specific problem once.</p>
                    <p><strong>Approach:</strong> Direct implementation. Don't over-engineer. Use a single file if possible. Get it done.</p>
                    <p><em>Example: A script that renames all files in a folder.</em></p>

                    <h4>Complex Systems (The Platform)</h4>
                    <p><strong>Goal:</strong> Solve a problem reliably, at scale, for many users.</p>
                    <p><strong>Approach:</strong> Guided structure. You need a database, authentication, error handling, and a modular architecture.</p>
                    <p><em>Example: This AI Mastery Manual platform.</em></p>
                `
            },
            {
                title: "The Architecture Map",
                slug: "architecture-map",
                content: `
                    <h3>Don't Build Without Blueprints</h3>
                    <p>Would you build a house without a blueprint? No. So why do you build software without an architecture map?</p>
                    
                    <h4>What is an Architecture Map?</h4>
                    <p>It is a visual or written representation of your system. It shows:</p>
                    <ul>
                        <li><strong>The Frontend:</strong> What the user sees.</li>
                        <li><strong>The Backend:</strong> Where the logic lives.</li>
                        <li><strong>The Database:</strong> Where the data lives.</li>
                        <li><strong>The AI:</strong> Where the intelligence lives.</li>
                    </ul>
                    <p><strong>Rule:</strong> Always update your map before you update your code.</p>
                `
            },
            {
                title: "Iterative Development",
                slug: "iterative-development",
                content: `
                    <h3>The Skeleton Strategy</h3>
                    <p>Don't try to build the whole thing at once. You will fail.</p>
                    
                    <h4>Step 1: The Skeleton</h4>
                    <p>Build the walking skeleton. A button that does nothing but log "Clicked". A page that is empty but loads.</p>

                    <h4>Step 2: The Muscle</h4>
                    <p>Add the logic. Make the button call the API. Make the page fetch data.</p>

                    <h4>Step 3: The Skin</h4>
                    <p>Make it beautiful. Add the CSS. Add the animations.</p>
                    <p><strong>Build in layers. Validate each layer before moving to the next.</strong></p>
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
                    <h3>Delegation is Key</h3>
                    <p>One AI cannot do everything. It will get confused. It will hallucinate.</p>
                    <p>The solution is the <strong>Manager/Worker Pattern</strong>.</p>
                    
                    <h4>The Manager</h4>
                    <p>The Manager is the boss. It doesn't do the work. It takes the user's request, breaks it down into a plan, and assigns tasks to the Workers.</p>

                    <h4>The Workers</h4>
                    <p>The Workers are specialists. One worker only knows how to search Google. Another only knows how to write Python code. They do one thing, and they do it perfectly.</p>
                `
            },
            {
                title: "Tool Use (Giving AI Hands)",
                slug: "tool-use",
                content: `
                    <h3>From Chatbot to Agent</h3>
                    <p>A chatbot can talk. An agent can <strong>do</strong>.</p>
                    <p>To make an agent, you need to give it tools. Tools are just functions that the AI can call.</p>
                    <ul>
                        <li><strong>Filesystem:</strong> Read and write files.</li>
                        <li><strong>Web Search:</strong> Look up real-time information.</li>
                        <li><strong>API Calls:</strong> Interact with other software (Slack, Jira, GitHub).</li>
                    </ul>
                    <p>We will learn how to define these tools so the AI knows exactly when and how to use them.</p>
                `
            },
            {
                title: "Memory & Context",
                slug: "memory-context",
                content: `
                    <h3>The Goldfish Problem</h3>
                    <p>LLMs have the memory of a goldfish. Once the chat window closes, they forget everything.</p>
                    <p>To build useful agents, we need to give them long-term memory.</p>
                    
                    <h4>Vector Databases (RAG)</h4>
                    <p>We store information in a special database that allows the AI to "search" for relevant memories based on meaning, not just keywords.</p>
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
                    <h3>Launch Fast with "Drop-in" Prompts</h3>
                    <p>The fastest way to validate a business idea is to build the MVP (Minimum Viable Product) in a single session. We can use sophisticated "One-Prompt" strategies to generate nearly complete applications.</p>
                    
                    <h4>Case Study 1: The "All-in-One" Workout App</h4>
                    <p>This prompt works because it covers functionality, design, and a unique AI differentiator in one go.</p>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0; font-family: monospace; font-size: 0.9rem;">
                        "Create a simple workout tracker application. Make it a mobile responsive app with a simple yet bold design. Let the user be able to build a workout, add exercises, track their workouts with sets and reps, and add a section to log progress like body measurements and weight. For the exercises, add a YouTube link which shows proper form so when we are tracking a workout we can check how to do the exercise. Finally, add a feature where we can record a video performing an exercise and tag the exercise, then an AI backend would check our form and correct any issues."
                    </div>
                    <p><strong>Why it works:</strong></p>
                    <ul>
                        <li><strong>Value-Add:</strong> The YouTube links instantly make it more useful than a notebook.</li>
                        <li><strong>Differentiation:</strong> The AI form-check feature (even if mocked initially) sells the vision.</li>
                    </ul>

                    <h4>Case Study 2: The "Retention-Focused" Budget App</h4>
                    <p>This prompt is designed to solve the specific "Blank Slate" problem that kills 70% of apps.</p>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0; font-family: monospace; font-size: 0.9rem;">
                        "Create a mobile-responsive budgeting app that allows users to log transactions and create categories. To improve onboarding, do not start with a blank screen; instead, allow users to select from a list of common categories during sign-up. Include an AI recommendation feature where the user inputs their post-tax income, and the app automatically allocates budget limits to categories based on the '50/30/20 rule' (50% needs, 30% wants, 20% savings). Additionally, include a dashboard that tracks daily spending and a lock screen widget that displays total spend for the week."
                    </div>
                `
            },
            {
                title: "Implementation & Monetization",
                slug: "implementation-tips",
                content: `
                    <h3>The Stack for Speed</h3>
                    <p>When you are building to test a market, you choose tools that reduce friction, not tools that are "pure".</p>
                    
                    <h4>1. The IDE Strategy</h4>
                    <p><strong>Use Replit (or similar cloud IDEs).</strong> For one-shot prompts, environments like Replit often handle dependency installation and environment setup faster than local scaffolding, requiring less "iterative prompting" to fix config bugs.</p>
                    
                    <h4>2. metrics from Day 1</h4>
                    <p><strong>Install Analytics Immediately.</strong> (e.g., PostHog). You need to know if users actally log an item within 48 hours. If they don't, your onboarding is broken.</p>
                    
                    <h4>3. The "4-Screen" Monetization Flow</h4>
                    <p>If you plan to charge, do not put the paywall at the end of a long journey. Use the <strong>Steven Cravotta Method</strong>:</p>
                    <ol>
                        <li><strong>Screen 1:</strong> value Proposition (The Promise)</li>
                        <li><strong>Screen 2:</strong> Data Collection (The Investment)</li>
                        <li><strong>Screen 3:</strong> "Analyzing..." (Building Anticipation)</li>
                        <li><strong>Screen 4:</strong> The Paywall (The Gate)</li>
                    </ol>
                    <p>Only let them access the core app <em>after</em> they commit.</p>
                `
            },
            {
                title: "The Productized Service",
                slug: "productized-service",
                content: `
                    <h3>Stop Trading Time for Money</h3>
                    <p>Consulting is a trap if you charge by the hour. You want to charge by the <strong>value</strong>.</p>
                    <p>Package your skills into a product. Don't sell "AI Development". Sell "The 24/7 Customer Support System".</p>
                    <p>Clients understand products. They don't understand hourly rates for "prompt engineering".</p>
                `
            },
            {
                title: "Structuring Your Offer",
                slug: "structuring-offer",
                content: `
                    <h3>The $10k Offer</h3>
                    <p>How do you charge $10,000 for a project?</p>
                    <ol>
                        <li><strong>Identify a Painful Problem:</strong> "We spend $50k/year on data entry."</li>
                        <li><strong>Propose a Permanent Solution:</strong> "I will build a system that does it automatically for $10k."</li>
                        <li><strong>Show the ROI:</strong> "You will save $40k in the first year alone."</li>
                    </ol>
                    <p>When the math works, the sale is easy.</p>
                `
            },
            {
                title: "Client Acquisition Roadmap",
                slug: "client-acquisition",
                content: `
                    <h3>Getting Your First Client</h3>
                    <p>You don't need a website. You don't need business cards.</p>
                    <p><strong>1. The Boring Business Strategy:</strong> Find un-sexy businesses (Logistics, Law, Real Estate). They have the most manual work.</p>
                    <p><strong>2. The Demo Strategy:</strong> Don't tell them what you can do. Build a prototype for free and show them. "I built this for you over the weekend. Want to see how it works?"</p>
                `
            },
            {
                title: "The Master System Prompt",
                slug: "master-system-prompt",
                content: `
                    <h3>The AI Strategic Advisor Persona</h3>
                    <p>To build a truly defensible business, you need an AI partner that thinks in "loops" and "flywheels," not just straight-line task execution. Copy this system instruction to upgrade your AI assistant.</p>
                    
                    <h4>The Master Prompt</h4>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0; font-family: monospace; font-size: 0.9rem; white-space: pre-wrap;">
### ROLE & IDENTITY
You are an expert AI CEO and Strategic Advisor. Your goal is not just to automate tasks but to help the user build a defensible, compounding business. You reject "straight-line" thinking in favor of "loops" and "flywheels."

### CORE KNOWLEDGE BASE

SECTION 1: VALIDATION (The Founders Triangle)
Evaluate ideas against:
1. Domain: 5+ years experience?
2. Depth: Is it "play" for you but "work" for others?
3. Distribution: Do you have an unfair advantage?

SECTION 2: STRATEGIC GROWTH (The 4 Loops)
1. Balance Loop: "Asymmetric Advantage" vs "Acute Customer Pain."
2. Speed to Revenue Loop: "Launch, Learn, Level Up." Ship daily.
3. Signal to Innovation Loop: User behavior is the only source of innovation.
4. Sweat Equity Loop: Founder must do the unseen work.

SECTION 3: OPERATIONS (The D.R.E.A.M. Machine)
- D (Demand): Lead generation.
- R (Revenue): Pricing.
- E (Engine): Product delivery.
- A (Admin): Finance/Legal.
- M (Marketing): Brand.

SECTION 4: THE TECH STACK FLYWHEEL
- Lead Gen: Apollo -> Clay.
- Nurture: Brevo -> Calendly.
- Closing: Gamma -> Airtable -> Stripe.
- Delivery: Lovable or Gumroad.
- Automation: Zapier -> N8N.

SECTION 5: DEFENSE (The 3 Moats)
1. Counter-Positioning.
2. Sticky Habits.
3. Proprietary Data.

### INTERACTION PROTOCOLS (OCEAN Framework)
- O (Original)
- C (Concrete)
- E (Evident)
- A (Assertive)
- N (Narrative)
                    </div>

                    <h4>Why This Works</h4>
                    <p><strong>1. The Founders Triangle:</strong> It forces you to validate before you build. If you don't have Domain, Depth, and Distribution, the AI will tell you to stop.</p>
                    <p><strong>2. The D.R.E.A.M. Machine:</strong> It ensures you aren't just building a product (Engine) but neglecting the business (Demand, Revenue, Admin, Marketing).</p>
                    <p><strong>3. The Tech Stack Flywheel:</strong> It provides a concrete, integrated toolchain that feeds into itself, rather than a random collection of SaaS tools.</p>
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
                    <p>Understanding the current landscape of AI-integrated development environments:</p>
                    <ul>
                        <li><strong>Cursor:</strong> The current market leader for VS Code users.</li>
                        <li><strong>Replit:</strong> Best for zero-setup, cloud-native development.</li>
                        <li><strong>Windsurf (formerly Antigravity/Codeium):</strong> A strong competitor with deep context awareness.</li>
                    </ul>

                    <h4>Context Management</h4>
                    <p>"Composer" and "Agent" modes differ from simple autocomplete. They don't just guess the next line; they understand the intent of the entire block or file.</p>

                    <h4>Project Indexing</h4>
                    <p>Why letting the AI "read" your whole folder is the secret to zero-shot success. Without indexing, the AI is blind to your project structure.</p>
                `
            },
            {
                title: "Setting Up Your Cockpit",
                slug: "setting-up-cockpit",
                content: `
                    <h3>Cursor Deep Dive</h3>
                    <p><strong>Rules provide sanity.</strong> Use <code>.cursorrules</code> to define coding standards and behavior.</p>
                    
                    <h3>Replit Agent</h3>
                    <p>Building and deploying full-stack apps in a single browser tab. Ideal for rapid prototyping and MVPs.</p>

                    <h3>Extension Ecosystem</h3>
                    <p>Using <strong>Claude Dev (Roo Code)</strong> and <strong>Continue.dev</strong> allows for local/custom model workflows, giving you privacy and control.</p>
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
                    <h3>Defining the North Star</h3>
                    <p>Never write code without a plan. Write a <code>spec.md</code> before the first line of code. This aligns the AI's goal with yours.</p>
                    
                    <h4>The Iterative Prompt</h4>
                    <p>Move from "Build a todo app" to "Implement a CRUD task manager with Supabase auth and Tailwind dark mode." Specificity wins.</p>
                `
            },
            {
                title: "Handling the 'Hallucination Wall'",
                slug: "hallucination-wall",
                content: `
                    <h3>Debug-Driven Development</h3>
                    <p>Feed terminal errors back into the chat. The AI is great at fixing its own mistakes if you show them the error log.</p>
                    
                    <h4>The 'Context Reset'</h4>
                    <p>When the AI gets confused, don't argue. Start a new chat. Clear the context and provide the current state of the code to get a fresh perspective.</p>
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
                    <p>AI code can be messy. Use tools to force standards:</p>
                    <ul>
                        <li><strong>Prettier:</strong> For formatting.</li>
                        <li><strong>ESLint:</strong> For logic and quality checks.</li>
                        <li><strong>Black:</strong> For Python formatting.</li>
                    </ul>
                    
                    <h4>Git as a Safety Net</h4>
                    <p>Prompt the AI to write meaningful commit messages. Use <code>git checkout</code> effectively to undo "bad AI rabbit holes".</p>
                `
            },
            {
                title: "Terminal Automation",
                slug: "terminal-automation",
                content: `
                    <h3>One-Liners for Health</h3>
                    <p>Use <code>grep</code> and <code>find</code> to audit the AI’s work. Look for hardcoded secrets or leftover console logs.</p>
                    
                    <h4>The Build Pipeline</h4>
                    <p><code>npm run build</code> or <code>docker build</code> is the ultimate truth. If it doesn't build, the code is worthless.</p>
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
                    <h3>Supabase & Firebase</h3>
                    <p>Direct the AI to write schema migrations and security rules. Don't do it manually.</p>
                    
                    <h4>API Architecture</h4>
                    <p>Design REST vs GraphQL through AI dialogue. Let it weigh the pros and cons for your specific use case.</p>
                `
            },
            {
                title: "The 'One-Click' Reality",
                slug: "one-click-deployment",
                content: `
                    <h3>Vercel/Netlify Deployment</h3>
                    <p>Integrate CI/CD so your AI changes go live instantly. Speed is everything.</p>
                    
                    <h4>Monitoring</h4>
                    <p>Use AI to write its own error-logging and observability logic. Self-healing systems are the goal.</p>
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
                    <p>Use one AI (like Claude 3.5 Sonnet) to plan and another to execute. Specialization leads to better results.</p>
                    
                    <h4>Custom Instructions</h4>
                    <p>Build your own <code>.ai-instructions</code> file to maintain a specific "voice" and "stack" across every file.</p>
                `
            },
            {
                title: "Future-Proofing",
                slug: "future-proofing",
                content: `
                    <h3>The Evolving Stack</h3>
                    <p>Stay updated. Tools like <strong>v0.dev</strong>, <strong>Lovable</strong>, and <strong>Bolt.new</strong> are changing frontend rapid-prototyping. Don't get stuck in the past.</p>
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
