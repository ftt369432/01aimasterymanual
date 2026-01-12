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
            }
        ]
    }
];
