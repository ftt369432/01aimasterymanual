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
                    <h3>The Shift Has Already Happened</h3>
                    <p>There is a moment in every technological revolution when the early adopters stop being weird and start being wealthy. We are in that moment right now.</p>
                    <p>The people reading this manual fall into one of two categories: those who sense that the ground beneath them is shifting and want to understand why, and those who have already started building on the new ground and want to move faster. Both are valid. Both will be served.</p>
                    <p>But let us be clear about what has changed: <strong>We are no longer in the Information Age. We are in the Synthesis Age.</strong></p>
                    <p>In the Information Age, the person with the most data won. Libraries were power. Google was the great equalizer. If you could <em>find</em> the answer, you could compete.</p>
                    <p>That era is over.</p>
                    <p>Today, everyone has the same data. Every competitor can find the same tutorial, read the same research paper, access the same API documentation. <strong>The bottleneck is no longer knowledge. The bottleneck is structure.</strong></p>
                    <p>Can you take raw information and synthesize it into a working product? Can you take a vague business idea and turn it into a deployed application in 48 hours? Can you take ten disconnected data sources and weave them into a coherent strategy?</p>
                    <p>That is the new game. And AI is the engine that makes it possible.</p>

                    <h3>What AI Can Already Do (That Most People Ignore)</h3>
                    <p>Let us dispense with the hype and state the facts. As of this writing, AI can:</p>
                    <ul>
                        <li><strong>Write production-ready code</strong> faster than any individual human developer, in virtually any programming language.</li>
                        <li><strong>Design user interfaces</strong> from a single sentence description, complete with responsive layouts and accessibility considerations.</li>
                        <li><strong>Draft business strategies</strong>, market analyses, and competitive reports that would take a consulting firm weeks to produce.</li>
                        <li><strong>Generate content at industrial scale</strong> - articles, social posts, email sequences, video scripts - with a level of consistency that human teams struggle to match.</li>
                        <li><strong>Debug complex systems</strong> by analyzing logs, stack traces, and documentation simultaneously.</li>
                        <li><strong>Learn new domains</strong> in real-time by ingesting documentation and adapting its responses accordingly.</li>
                    </ul>
                    <p>And yet, the vast majority of people who interact with AI walk away <em>disappointed</em>.</p>
                    <p>They say things like: It just gives generic answers. It made up information. It could not do what I actually needed.</p>
                    <p>They are not wrong. But they are also not seeing the full picture.</p>
                    
                    <h3>The Real Problem: Chat Mindset vs. System Mindset</h3>
                    <p>Here is the uncomfortable truth: <strong>AI does not reward intelligence. It rewards clarity and structure.</strong></p>
                    <p>Most people approach AI with what I call the Chat Mindset. They treat it like a smarter version of Google - a search engine with opinions. They type vague prompts, hope for magic, and are frustrated when the magic does not appear.</p>
                    <p>This is like handing someone a power drill and asking them to make something nice. The tool is extraordinary. The instruction is worthless.</p>
                    <p>Professionals operate differently. They have what I call the System Mindset. They treat AI like a junior engineer - capable, eager, but requiring clear specifications and defined constraints.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p style="margin-bottom: 0.5rem;"><strong>The Amateur:</strong></p>
                        <ul style="margin-bottom: 1rem;">
                            <li>Treats AI like Google with opinions</li>
                            <li>Types vague prompts (Help me with my startup)</li>
                            <li>Hopes for magic</li>
                            <li>Blames the tool when it fails</li>
                        </ul>
                        <p style="margin-bottom: 0.5rem;"><strong>The Architect:</strong></p>
                        <ul>
                            <li>Treats AI like a junior engineer</li>
                            <li>Designs constraints before asking for output</li>
                            <li>Breaks work into verifiable stages</li>
                            <li>Owns the outcome, uses the tool</li>
                        </ul>
                    </div>

                    <h3>The Core Shift</h3>
                    <p>This is the mental leap that separates amateurs from professionals.</p>
                    <p>When you sit down at your computer, do you think: What should I ask the AI today?</p>
                    <p>Or do you think: What system am I designing? What are the components? What does the AI handle, and what do I handle?</p>
                    <p>The first question leads to scattered, reactive work. You ask a question, get an answer, ask another question, get confused, start over.</p>
                    <p>The second question leads to <strong>compounding leverage</strong>. You build a system once, and it works for you repeatedly. You define a workflow, and AI executes it at scale.</p>
                    <p>This manual is about the second path.</p>

                    <h3>A Word on Who This Manual Is For</h3>
                    <p>This is not a beginners guide to ChatGPT. There are thousands of those, and most of them are obsolete within months.</p>
                    <p>This manual is for people who want to <strong>build real things</strong>. Applications. Businesses. Automated workflows. Products that generate revenue.</p>
                    <p>It assumes you are willing to learn. It does not assume you already know how to code - though you will learn enough to be dangerous. It does not assume you have a technical background - though you will develop technical intuition.</p>
                    <p>What it does assume is that you are serious. That you are tired of surface-level content. That you want the mental models and practical skills that actually separate the people who <em>use</em> AI from the people who <strong>build with</strong> AI.</p>

                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1.5rem 0;">
                        The goal is not to use AI. The goal is to become dangerous with it.
                    </blockquote>

                    <h3>What You Will Learn</h3>
                    <p>By the end of this manual, you will understand:</p>
                    <ul>
                        <li>How to think in <strong>systems</strong>, not prompts</li>
                        <li>How to design <strong>workflows</strong> that leverage AI at every stage</li>
                        <li>How to build and deploy <strong>real applications</strong> without a decade of coding experience</li>
                        <li>How to <strong>validate and debug</strong> AI-generated output (because it will lie to you)</li>
                        <li>How to <strong>monetize</strong> your new capabilities - as a freelancer, a consultant, or a product builder</li>
                        <li>How to stay ahead as the technology continues to evolve at an unprecedented pace</li>
                    </ul>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Mindset Shift:</strong> You are no longer a typist. You are a system designer.</li>
                            <li><strong>First Question:</strong> What is the outcome I need? (Not: What should I ask?)</li>
                            <li><strong>Key Rule:</strong> AI rewards structure, not intelligence. Be precise.</li>
                            <li><strong>Action:</strong> Before your next AI session, write down your goal in one sentence.</li>
                        </ul>
                    </div>
                    <p>This is the foundation. Let us build.</p>
                `
            },
            {
                title: "The 'Why': System Engineering",
                slug: "why-system-engineering",
                content: `
                    <h3>The Trap Everyone Falls Into: Prompt Engineering</h3>
                    <p>You have probably heard the term prompt engineering a hundred times by now. There are courses on it. Books. Certifications. And let me be clear: prompt engineering is useful. It is a real skill.</p>
                    <p>But it is also incomplete. And if you stop there, you will never build anything that matters.</p>
                    <p>Here is the problem: <strong>Prompt engineering is stateless.</strong></p>
                    <p>A single prompt, no matter how beautiful, cannot build a real product. It cannot maintain consistency across a complex codebase. It cannot debug itself when something goes wrong. It cannot remember what you did yesterday and pick up where you left off.</p>
                    <p>Prompt engineering is like shouting instructions at a factory <em>once</em> and hoping the product comes out perfect. Sometimes it works. Usually it does not. And when it fails, you have no idea why.</p>

                    <h3>The Unlock: Thinking in Pipelines</h3>
                    <p>Professionals do not write better prompts. They build better <strong>pipelines</strong>.</p>
                    <p>A pipeline is a sequence of steps where the output of one step becomes the input of the next. It is how factories work. It is how software is built. And it is how you should think about AI.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p><strong>Example (The Amateur Approach):</strong></p>
                        <p style="font-style: italic; color: #888;">Build me a SaaS app that lets users track their fitness goals...</p>
                        <p>Result: A mess of code that sort of works, maybe, if you squint.</p>
                        
                        <p style="margin-top: 1.5rem;"><strong>Example (The Professional Approach):</strong></p>
                        <ol>
                            <li><strong>Step 1:</strong> Define the product spec (What are the features? What are the constraints?)</li>
                            <li><strong>Step 2:</strong> Generate the database schema (What data do we store? How is it structured?)</li>
                            <li><strong>Step 3:</strong> Generate the API layer (How do we read and write data?)</li>
                            <li><strong>Step 4:</strong> Generate the UI skeleton (What does the user see?)</li>
                            <li><strong>Step 5:</strong> Integrate and test (Does it actually work?)</li>
                        </ol>
                        <p>Result: A system you understand, can debug, and can extend.</p>
                    </div>
                    
                    <p>The difference is not just quality. It is <strong>control</strong>. When you build in stages, you can verify each stage before moving to the next.</p>

                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1.5rem 0;">
                        AI scales linearly. Humans fail exponentially. Pipelines invert that equation.
                    </blockquote>

                    <h3>Mental Model: AI as a Compiler</h3>
                    <p>Here is the mental model that will change how you work with AI: <strong>Treat AI like a compiler for intent.</strong></p>
                    <p>A compiler takes human-readable code and transforms it into something the machine can execute. If your code is vague or buggy, the compiler fails. If your code is precise and correct, the compiler produces a working program.</p>
                    <p>AI works the same way:</p>
                    <ul>
                        <li><strong>Vague intent</strong> leads to broken output</li>
                        <li><strong>Clear specification</strong> leads to reliable output</li>
                    </ul>
                    <p>Your job is not to be creative with your prompts. Your job is to be <strong>precise</strong>.</p>

                    <h3>The Three Levels of AI Work</h3>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p><strong>Level 1: Chat</strong> - You ask AI questions. It gives you answers. This is where most people stay forever.</p>
                        <p style="margin-top: 1rem;"><strong>Level 2: Prompt Chains</strong> - You break complex tasks into sequences of prompts. You start to build things that actually work.</p>
                        <p style="margin-top: 1rem;"><strong>Level 3: Systems</strong> - You design automated workflows where AI is one component among many. You build products that run without you.</p>
                    </div>
                    <p>This manual is designed to take you from Level 1 to Level 3.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Stop:</strong> Treating AI like a magic answer box.</li>
                            <li><strong>Start:</strong> Breaking complex tasks into sequential steps (pipelines).</li>
                            <li><strong>Mental Model:</strong> AI is a compiler. Vague input = broken output.</li>
                            <li><strong>Exercise:</strong> Take your next AI task and break it into 5 distinct steps before you start.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Good Habits: The Professional Standard",
                slug: "good-habits",
                content: `
                    <h3>Why Habits Matter More Than Talent</h3>
                    <p>Here is a truth that most people do not want to hear: <strong>AI amplifies whatever is already there.</strong></p>
                    <p>If you are a clear thinker, AI makes you faster. If you are a sloppy thinker, AI makes you faster at being sloppy. The tool does not care. It responds to what you give it.</p>
                    <p>This is why habits matter more than talent in the AI age. A person with mediocre talent but excellent habits will outperform a genius with terrible habits. Every single time.</p>

                    <h3>Habit 1: Plan Before You Prompt</h3>
                    <p>Before you type a single character into an AI interface, answer two questions:</p>
                    <ol>
                        <li><strong>What is the outcome?</strong> Not what you are doing. What you are trying to achieve.</li>
                        <li><strong>What are the constraints?</strong> What are the boundaries? What should it NOT do?</li>
                    </ol>
                    
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1.5rem 0;">
                        If you cannot explain it in bullet points, you cannot build it with AI.
                    </blockquote>

                    <h3>Habit 2: Log Everything</h3>
                    <p>AI-generated code has a dangerous property: <strong>it lies silently.</strong></p>
                    <p>When human code fails, it usually fails loudly. When AI code fails, it often fails quietly. It looks correct. It runs without errors. But it does the wrong thing.</p>
                    <p>The professional default is to log everything: inputs, outputs, decisions, and errors.</p>

                    <h3>Habit 3: Atomic Commits</h3>
                    <p>AI encourages reckless speed. You can generate a thousand lines of code in minutes. This is powerful and dangerous.</p>
                    <p>The antidote is <strong>atomic commits</strong>. One feature. One bug fix. One refactor. Not everything smashed together.</p>
                    
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1.5rem 0;">
                        Speed without control is just chaos arriving early.
                    </blockquote>

                    <h3>Habit 4: Trust but Verify</h3>
                    <p>AI is confident. Sometimes irritatingly so. It will tell you with absolute certainty that code is correct - and it will be completely wrong.</p>
                    <p><strong>Confidence is not correctness.</strong></p>
                    <ul>
                        <li><strong>Run the code.</strong> Never accept code you have not executed.</li>
                        <li><strong>Test edge cases.</strong> What happens with empty input? Null values?</li>
                        <li><strong>Ask for explanation.</strong> Tell the AI: Explain why this is correct and where it might fail.</li>
                    </ul>

                    <h3>Habit 5: Version Control from Day One</h3>
                    <p>If you are building anything with AI, you need version control. Not eventually. From day one.</p>
                    <p>The command you need: <code>git add . && git commit -m "Description of change"</code></p>
                    <p>Commit early. Commit often. Commit with meaningful messages.</p>

                    <hr style="margin: 2rem 0; border-color: rgba(255,255,255,0.1);"/>
                    
                    <h3>The Core Philosophy</h3>
                    <ol>
                        <li><strong>Systems over prompts</strong> - Think in workflows, not individual questions.</li>
                        <li><strong>Structure over cleverness</strong> - Clear beats creative. Every time.</li>
                        <li><strong>Verification over faith</strong> - Trust is earned through testing.</li>
                        <li><strong>Shipping over theory</strong> - Ideas are worthless. Execution is everything.</li>
                    </ol>
                    <p>This is not a course about <em>using AI</em>. This is a course about <strong>becoming dangerous with it</strong>.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Before prompting:</strong> Write your goal and three constraints.</li>
                            <li><strong>During coding:</strong> Add console.log statements for inputs and outputs.</li>
                            <li><strong>After each feature:</strong> Make one atomic commit with a clear message.</li>
                            <li><strong>When AI gives you code:</strong> Run it, test it, ask AI to explain it.</li>
                            <li><strong>Daily habit:</strong> git add . && git commit -m "End of session snapshot"</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The ConstantPrompt Method",
                slug: "constantprompt-method",
                content: `
                    <h3>The Problem: AI Has Amnesia</h3>
                    <p>Here is something that will cost you hours if you do not address it early: <strong>AI forgets everything between sessions.</strong></p>
                    <p>Every new chat is a blank slate. Every new conversation starts from zero. The AI does not remember your project structure, your coding preferences, your design decisions, or the context you have built over time.</p>
                    <p>This is not a bug. It is how these systems work. And if you do not plan for it, you will spend more time re-explaining your project than actually building it.</p>
                    <p>The solution is deceptively simple: <strong>Write it down once, inject it every time.</strong></p>

                    <h3>What is a ConstantPrompt?</h3>
                    <p>A ConstantPrompt is a persistent document that lives in your project. It contains everything the AI needs to know to work on your codebase without you having to explain it every session.</p>
                    <p>Think of it as a briefing document for a new team member who joins every single day with no memory of yesterday. You would not re-explain your entire architecture every morning. You would hand them a document.</p>
                    <p>That document is your ConstantPrompt.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p><strong>What a ConstantPrompt Contains:</strong></p>
                        <ul>
                            <li><strong>Project Overview:</strong> What is this project? What problem does it solve?</li>
                            <li><strong>Technical Stack:</strong> What frameworks, languages, and tools are used?</li>
                            <li><strong>Architecture Rules:</strong> How is the code organized? What patterns do we follow?</li>
                            <li><strong>Style Guidelines:</strong> How should code be formatted? What naming conventions apply?</li>
                            <li><strong>Current State:</strong> What features exist? What is in progress?</li>
                            <li><strong>Off-Limits:</strong> What should the AI NOT touch or change?</li>
                        </ul>
                    </div>

                    <h3>Why This Changes Everything</h3>
                    <p>Without a ConstantPrompt, every AI session starts with friction:</p>
                    <ul>
                        <li>You: Here is my project. We use React with TypeScript. The components are in src/components. We have a data file that...</li>
                        <li>AI: (Tries to help with incomplete context)</li>
                        <li>You: (Spends 10 minutes correcting assumptions)</li>
                    </ul>
                    <p>With a ConstantPrompt:</p>
                    <ul>
                        <li>You: (Paste ConstantPrompt) Add a new feature to the sidebar.</li>
                        <li>AI: (Already knows the project, produces correct code immediately)</li>
                    </ul>
                    <p>The time saved compounds. Over a week of development, you save hours. Over a month, you save days.</p>

                    <h3>How to Create Your ConstantPrompt</h3>
                    <p>Create a folder called <code>.constantprompt</code> in your project root. Inside, create a file called <code>constantprompt.md</code>.</p>
                    <p>Start simple. You can always add more later. Here is a minimal template:</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.85rem; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
                        <p style="color: #a78bfa; margin-bottom: 0.5rem;"># 1. Role</p>
                        <p>- Senior TypeScript Engineer. Concise. No yapping.</p>
                        
                        <p style="color: #a78bfa; margin-bottom: 0.5rem; margin-top: 1rem;"># 2. Tech Stack</p>
                        <p>- Frontend: Next.js 14, Tailwind, Lucide.</p>
                        <p>- Backend: Supabase (Auth + DB).</p>
                        <p>- No generic CSS. Tailwind only.</p>
                    
                        <p style="color: #a78bfa; margin-bottom: 0.5rem; margin-top: 1rem;"># 3. The Danger Zone (Off-Limits)</p>
                        <p>- NEVER touch /src/auth/* without asking.</p>
                        <p>- NEVER delete files. Only rename to .backup.</p>
                        <p>- NEVER use 'any'. Explicit types only.</p>
                    
                        <p style="color: #a78bfa; margin-bottom: 0.5rem; margin-top: 1rem;"># 4. Mandatory Workflow</p>
                        <p>1. Read the file.</p>
                        <p>2. Plan the change.</p>
                        <p>3. Write the code.</p>
                        <p>4. Verify imports.</p>
                    </div>

                    <h3>Advanced: Architecture Maps</h3>
                    <p>As your project grows, add an architecture map. This is a visual or textual diagram showing how the pieces fit together.</p>
                    <p>Store it in <code>/docs/ARCHITECTURE.md</code> and reference it from your ConstantPrompt.</p>
                    <p>When AI can see the full picture, it makes better decisions about where new code should live.</p>

                    <h3>The Discipline: Keep It Updated</h3>
                    <p>A ConstantPrompt only works if it reflects reality. When you make major changes:</p>
                    <ol>
                        <li>Update the ConstantPrompt</li>
                        <li>Update the Architecture Map</li>
                        <li>Commit both with your code changes</li>
                    </ol>
                    <p>This takes 2 minutes. It saves hours of confusion in future sessions.</p>

                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1.5rem 0;">
                        The best developers are not the ones who write the most code. They are the ones who maintain the clearest context.
                    </blockquote>

                    <h3>Using Your ConstantPrompt</h3>
                    <p>At the start of every AI session:</p>
                    <ol>
                        <li>Open your ConstantPrompt file</li>
                        <li>Paste it into the AI chat (or reference it if your tool supports file access)</li>
                        <li>Then give your actual instruction</li>
                    </ol>
                    <p>Some AI tools (like Cursor, Claude Desktop with MCP) can read files directly. In those cases, just tell the AI: Read .constantprompt/constantprompt.md before proceeding.</p>

                    <h3>The Meta-Benefit: You Become Clearer</h3>
                    <p>Writing a ConstantPrompt forces you to articulate your project clearly. This clarity is valuable beyond AI sessions.</p>
                    <p>It helps onboard human collaborators. It helps you remember your own decisions. It forces you to confront architectural debt.</p>
                    <p>The ConstantPrompt is not just for AI. It is for your future self.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Create:</strong> Make <code>.constantprompt/constantprompt.md</code> in your project root.</li>
                            <li><strong>Include:</strong> Overview, tech stack, structure, rules, current status.</li>
                            <li><strong>Use:</strong> Paste or reference at the start of every AI session.</li>
                            <li><strong>Maintain:</strong> Update when you make major changes. Commit with code.</li>
                            <li><strong>Bonus:</strong> Add <code>/docs/ARCHITECTURE.md</code> for complex projects.</li>
                        </ul>
                    </div>
                `
            }]
    },
    {
        title: "Module 2: Understanding AI",
        slug: "understanding-ai",
        desc: "What AI actually is, how the models work, and the tools that make them powerful.",
        chapters: [
            {
                title: "What is AI, Really?",
                slug: "what-is-ai",
                content: `
                    <h3>Forget Everything You Think You Know</h3>
                    <p>Before we go further, let us clear up what AI actually is. Because most people get this wrong, and that confusion costs them money and time.</p>
                    <p><strong>AI is not magic. AI is not conscious. AI is not going to take your job (if you read this manual).</strong></p>
                    <p>Here is what AI actually is: <strong>A pattern completion engine.</strong></p>
                    <p>That is it. At its core, every AI you interact with - ChatGPT, Claude, Gemini, all of them - is doing one thing: predicting what comes next based on patterns it learned from massive amounts of text.</p>

                    <h3>The Mental Model That Changes Everything</h3>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p><strong>Imagine a brilliant intern who:</strong></p>
                        <ul>
                            <li>Has read every book, article, and website ever published</li>
                            <li>Has perfect memory of all of it</li>
                            <li>Works instantly and never gets tired</li>
                            <li>BUT has no judgment, no common sense, and no way to verify if something is true</li>
                        </ul>
                    </div>
                    <p>That intern is incredibly useful - if you know how to manage them. They are dangerous if you just trust everything they say.</p>
                    <p>Your job is to be the manager. You provide the judgment. You verify the output. You make the decisions.</p>

                    <h3>Why AI Hallucinates</h3>
                    <p>AI is a pattern completion engine. When you ask it a question, it generates the most likely response based on patterns. Sometimes the most likely response is wrong. Sometimes the AI confidently states things that do not exist.</p>
                    <p>This is not a bug. It is a feature of how these systems work. AI does not know what is true. It knows what sounds true based on its training.</p>
                    <p><strong>Your defense:</strong> Always verify. Never assume. Treat AI output as a first draft, not a final answer.</p>

                    <h3>The Different Types of AI</h3>
                    <ul>
                        <li><strong>Large Language Models (LLMs):</strong> Text in, text out. ChatGPT, Claude, Gemini.</li>
                        <li><strong>Image Generators:</strong> Text in, image out. DALL-E, Midjourney, Stable Diffusion.</li>
                        <li><strong>Code Assistants:</strong> Specialized LLMs trained on code. GitHub Copilot, Cursor, Replit AI.</li>
                        <li><strong>Voice Models:</strong> Text to speech, speech to text. ElevenLabs, Whisper.</li>
                    </ul>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>What AI is:</strong> A pattern completion engine. Predicts likely text based on training.</li>
                            <li><strong>What AI is NOT:</strong> Conscious, always correct, or a replacement for your judgment.</li>
                            <li><strong>Mental Model:</strong> Brilliant intern with no common sense. You are the manager.</li>
                            <li><strong>Key Rule:</strong> Always verify AI output. Trust nothing without testing.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The Major Models: Gemini, Claude, GPT",
                slug: "major-models",
                content: `
                    <h3>The Big Three (And Why It Matters)</h3>
                    <p>There are three major AI providers you need to know about. Each has different strengths, different pricing, and different personalities.</p>

                    <h3>OpenAI (GPT-4, ChatGPT)</h3>
                    <p><strong>The Pioneer.</strong> OpenAI started the current AI revolution with ChatGPT in late 2022.</p>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p><strong>Strengths:</strong> Largest ecosystem, strong at following complex instructions, best image generation (DALL-E)</p>
                        <p><strong>Weaknesses:</strong> Can be expensive at scale, sometimes overly cautious</p>
                        <p><strong>Best For:</strong> General purpose use, complex reasoning, image generation</p>
                    </div>

                    <h3>Anthropic (Claude)</h3>
                    <p><strong>The Writers Choice.</strong> Claude is known for nuanced, thoughtful responses.</p>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p><strong>Strengths:</strong> Excellent at long documents, more nuanced responses, strong coding, huge context window</p>
                        <p><strong>Weaknesses:</strong> Smaller ecosystem, can be verbose</p>
                        <p><strong>Best For:</strong> Writing, analysis, handling large documents, coding</p>
                    </div>

                    <h3>Google (Gemini)</h3>
                    <p><strong>The Dark Horse.</strong> Rapidly improving and generously priced.</p>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p><strong>Strengths:</strong> Massive context window (2M tokens), integrated with Google, generous free tier, multimodal</p>
                        <p><strong>Weaknesses:</strong> Ecosystem still maturing, can be inconsistent</p>
                        <p><strong>Best For:</strong> Large document analysis, budget-conscious development, multimodal tasks</p>
                    </div>

                    <h3>Which One Should You Use?</h3>
                    <p>The honest answer: <strong>All of them.</strong> Professional AI users switch between models depending on the task. For beginners, start with whichever has the best free tier right now (often Gemini).</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>GPT-4:</strong> Best ecosystem, strong all-around. Start here if budget allows.</li>
                            <li><strong>Claude:</strong> Best for writing and long documents. Excellent coding.</li>
                            <li><strong>Gemini:</strong> Best free tier, massive context. Great for learning.</li>
                            <li><strong>Pro Tip:</strong> Do not marry one model. Learn to use all three.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "MCP: The Model Context Protocol",
                slug: "mcp-protocol",
                content: `
                    <h3>The Secret Weapon You Have Never Heard Of</h3>
                    <p>If you have used AI for any serious work, you have probably hit this wall: <strong>The AI does not know what you know.</strong></p>
                    <p>Every time you start a new conversation, you have to re-explain your project. Your codebase. Your preferences. It is exhausting and inefficient.</p>
                    <p>Enter <strong>MCP: Model Context Protocol</strong>.</p>
                    <p>MCP is a way to give AI persistent access to your files, your code, your documents - your entire working context. Instead of the AI being a stranger you have to brief every time, it becomes a colleague who already knows your project.</p>

                    <h3>Why MCP Changes Everything</h3>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p><strong>Without MCP:</strong></p>
                        <p>You: Here is my code. Here is what it does. Here is what I want to change...</p>
                        <p>AI: (Tries to help with limited context)</p>
                        <p style="margin-top: 1rem;"><strong>With MCP:</strong></p>
                        <p>You: Fix the bug in the authentication flow.</p>
                        <p>AI: (Already knows your codebase, finds the file, fixes the bug)</p>
                    </div>

                    <h3>How MCP Works (Simple Version)</h3>
                    <p>Think of MCP as giving AI eyes and hands:</p>
                    <ol>
                        <li><strong>Eyes:</strong> AI can read your files without you copy-pasting everything</li>
                        <li><strong>Hands:</strong> AI can write to files, create new files, run commands (with permission)</li>
                        <li><strong>Memory:</strong> AI can remember context across sessions</li>
                    </ol>
                    <p>Tools that implement MCP (like Claude Desktop, Cursor) give the AI a workspace to operate in, not just a chat box.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>What MCP is:</strong> A protocol that gives AI access to your files and context.</li>
                            <li><strong>Why it matters:</strong> No more re-explaining. AI already knows your project.</li>
                            <li><strong>Tools that use it:</strong> Claude Desktop, Cursor, modern AI IDEs.</li>
                            <li><strong>Action:</strong> Try Cursor or Claude Desktop to experience MCP firsthand.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Toolboxes: Function Calling and Tool Use",
                slug: "toolboxes",
                content: `
                    <h3>When AI Becomes More Than a Chat Box</h3>
                    <p>The biggest limitation of basic AI chat is that it can only give you text. It can tell you what to do, but it cannot do it.</p>
                    <p><strong>Tool use changes that.</strong></p>
                    <p>When you give AI access to tools, it stops being a text generator and becomes an agent that can take action. It can search the web. Query databases. Send emails. Write to files. Execute code.</p>

                    <h3>How Tool Use Works</h3>
                    <ol>
                        <li>You define a set of tools (functions the AI can call)</li>
                        <li>AI decides when to use which tool based on your request</li>
                        <li>AI calls the tool, gets the result, and continues</li>
                    </ol>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p><strong>You:</strong> What is the weather in New York?</p>
                        <p><strong>AI (without tools):</strong> I do not have access to real-time data...</p>
                        <p><strong>AI (with weather tool):</strong> Calls get_weather(New York) - It is currently 72 degrees and sunny.</p>
                    </div>

                    <h3>Common Tools You Will Use</h3>
                    <ul>
                        <li><strong>Web Search:</strong> AI can look up current information</li>
                        <li><strong>Code Execution:</strong> AI can run code and see the actual output</li>
                        <li><strong>File Operations:</strong> AI can read, write, and modify files</li>
                        <li><strong>Database Queries:</strong> AI can fetch and store data</li>
                        <li><strong>API Calls:</strong> AI can interact with external services</li>
                    </ul>

                    <h3>The Safety Question</h3>
                    <p>Giving AI access to tools raises an important question: <strong>How much power should you give it?</strong></p>
                    <ul>
                        <li><strong>Low stakes (reading files):</strong> Let AI act freely</li>
                        <li><strong>Medium stakes (writing code):</strong> Review before executing</li>
                        <li><strong>High stakes (financial, production):</strong> Human approval required</li>
                    </ul>
                    <p>This is called <strong>Human-in-the-Loop</strong> design.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>What tools are:</strong> Functions that AI can call to take real action.</li>
                            <li><strong>Why they matter:</strong> AI goes from advisor to worker.</li>
                            <li><strong>Common tools:</strong> Search, code execution, file ops, APIs.</li>
                            <li><strong>Safety rule:</strong> Higher stakes = more human oversight.</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 3: The Art of Building",
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Anti-Chaos Rule:</strong> One step at a time. Verify before proceeding.</li>
                            <li><strong>Verification Loop:</strong> Request → Receive → Run → Review → Proceed</li>
                            <li><strong>When stuck:</strong> Rollback to last working state.</li>
                            <li><strong>Test:</strong> If you can not explain it in one sentence, stop.</li>
                        </ul>
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Scripts:</strong> Fast, ugly, disposable. Perfect for prototypes.</li>
                            <li><strong>Platforms:</strong> Robust, maintainable, expensive. For real users.</li>
                            <li><strong>Default:</strong> Start as a script. Graduate when proven.</li>
                            <li><strong>Warning Sign:</strong> Building platform architecture before validating the idea.</li>
                        </ul>
                    </div>
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>4 Layers:</strong> Input → Logic → Storage → Output</li>
                            <li><strong>Before Coding:</strong> Ask AI for the blueprint first</li>
                            <li><strong>Boundaries:</strong> Each component has one job</li>
                            <li><strong>Debug Tip:</strong> When confused, identify which layer the problem is in</li>
                        </ul>
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Phase 1:</strong> Skeleton — Empty structure, runs without errors</li>
                            <li><strong>Phase 2:</strong> Muscle — Logic works, still ugly</li>
                            <li><strong>Phase 3:</strong> Skin — Polish and edge cases</li>
                            <li><strong>Build Loop:</strong> Specify → Plan → Generate → Run → Fix → Commit</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 4: Agentic Workflows",
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Agent Formula:</strong> AI + Role + Tools + Memory + Rules</li>
                            <li><strong>Manager vs Worker:</strong> Manager plans, Worker executes</li>
                            <li><strong>God Prompt Fail:</strong> One prompt doing everything fails</li>
                            <li><strong>Your Job:</strong> Clarity, not effort</li>
                        </ul>
                    </div>
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Manager:</strong> Plans, breaks down, assigns. Never writes code.</li>
                            <li><strong>Worker:</strong> Executes specific task, narrow focus.</li>
                            <li><strong>Key Rule:</strong> Review manager's plan before workers execute.</li>
                            <li><strong>Debug Tip:</strong> When output is wrong, check if roles were mixed.</li>
                        </ul>
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Tools:</strong> Filesystem, Terminal, Browser, APIs</li>
                            <li><strong>Security:</strong> Least privilege - only give needed access</li>
                            <li><strong>Memory:</strong> Short-term (context), Long-term (files/RAG)</li>
                            <li><strong>Fix:</strong> Write things down. Re-inject context each session.</li>
                        </ul>
                    </div>
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Workflow:</strong> Define Goal → Manager Breaks Down → Workers Execute → You Decide</li>
                            <li><strong>HITL:</strong> Human-in-the-loop for critical actions</li>
                            <li><strong>Purpose:</strong> Protect human attention, not replace humans</li>
                            <li><strong>Success:</strong> A good agent makes you calmer, not busier</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 5: Business & Monetization",
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Speed Rule:</strong> Hours, not weeks. Launch fast.</li>
                            <li><strong>Order:</strong> Manual before automated. Ugly before perfect.</li>
                            <li><strong>Test:</strong> If it takes more than a day, you built too much.</li>
                            <li><strong>Focus:</strong> One outcome, not many features.</li>
                        </ul>
                    </div>
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Product Promise:</strong> "I help X get Y without Z."</li>
                            <li><strong>Model:</strong> Fixed scope, fixed price, clear delivery.</li>
                            <li><strong>Pricing:</strong> Price by value created, not time spent.</li>
                            <li><strong>Test:</strong> If it feels scary to say the price, you're close.</li>
                        </ul>
                    </div>
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
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Input:</strong> What client gives you</li>
                            <li><strong>Processing:</strong> What AI does (The Magic)</li>
                            <li><strong>Review:</strong> Where humans approve (The Trust)</li>
                            <li><strong>Delivery:</strong> How value is delivered (The Outcome)</li>
                        </ul>
                    </div>
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
        title: "Module 6: The New IDE Landscape",
        slug: "new-ide-landscape",
        desc: "Design a cockpit that makes AI useful by default.",
        chapters: [
            {
                title: "The Anatomy of an AI IDE",
                slug: "anatomy-ai-ide",
                content: `
                    <h3>Why Structure Matters</h3>
                    <p>A bad workspace turns good AI into noise. A "cockpit" is not just a text editor; it is a meticulously designed environment where you have clear controls, visible signals, and zero distractions.</p>
                    <p>In the pre-AI era, your editor was a passive tool. It waited for you to type. In the AI era, your editor is an active participant. It suggests, refactors, and even plans. If you treat it like Notepad, you are leaving 90% of its power on the table.</p>
                    
                    <h3>The 4 Layers of the Modern Stack</h3>
                    <p>Every professional AI development environment must have these four distinct layers:</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: 1rem;">
                                <strong>1. The Editor (The Brain)</strong><br/>
                                <span style="font-size: 0.9em; opacity: 0.8;">Where you think. It must be fast, predictable, and minimal. Latency here destroys flow.</span>
                            </li>
                            <li style="margin-bottom: 1rem;">
                                <strong>2. The AI Interface (The Mouth)</strong><br/>
                                <span style="font-size: 0.9em; opacity: 0.8;">Where you converse. This isn't just a chat window; it's a command center. It needs to support scoped questions ("Explain this function") and broad directives ("Refactor this module").</span>
                            </li>
                            <li style="margin-bottom: 1rem;">
                                <strong>3. The Context Engine (The Eyes)</strong><br/>
                                <span style="font-size: 0.9em; opacity: 0.8;">What the AI sees. This is the invisible layer that decides <em>what</em> to read. Does it see your whole repo? Just the open files? The docs? Mastery here is the difference between a smart answer and a hallucination.</span>
                            </li>
                            <li>
                                <strong>4. The Execution Surface (The Hands)</strong><br/>
                                <span style="font-size: 0.9em; opacity: 0.8;">Truth. Terminals, logs, test runners. AI can write code, but only execution proves it works.</span>
                            </li>
                        </ul>
                    </div>

                    <h3>Visual Model: The Feedback Loop</h3>
                    <p>Imagine a loop: <strong>Context → AI → Code → Terminal → Context</strong>.</p>
                    <p>Most developers break this loop. They copy code from ChatGPT (breaking Context), paste it blindly (breaking Execution), and ignore errors (breaking Feedback). A proper IDE keeps this loop tight and continuous.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Mental Model:</strong> Your IDE is an active collaborator, not a passive typewriter.</li>
                            <li><strong>Critical Layer:</strong> The Context Engine. If AI can't see it, it doesn't exist.</li>
                            <li><strong>The Loop:</strong> Context → AI → Code → Terminal. Keep it unbroken.</li>
                            <li><strong>Warning:</strong> treating an AI IDE like a standard text editor.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Choosing Your Cockpit",
                slug: "choosing-your-cockpit",
                content: `
                    <h3>Best for How You Work</h3>
                    <p>There is no "best" AI IDE. There is only what matches your current mode of work. Do not marry your tools; date them aggressively.</p>
                    
                    <h3>The Contenders</h3>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <h4 style="margin-top: 0;">1. Cursor (The Standard)</h4>
                        <p><strong>Best For:</strong> Serious, daily coding. Refactoring. Deep file context.</p>
                        <p>Cursor is effectively VS Code with an AI brain transplant. It indexes your entire codebase, meaning you can ask "Where is the auth logic?" and it actually knows. It is the current professional standard.</p>
                        
                        <h4 style="margin-top: 1.5rem;">2. Windsurf / Cline (The Agents)</h4>
                        <p><strong>Best For:</strong> "Do this for me" workflows. Agentic autonomy.</p>
                        <p>These tools excel at <em>agency</em>. They don't just suggest code; they run terminal commands, create files, and fix their own errors. They are powerful but dangerous if you don't audit them.</p>

                        <h4 style="margin-top: 1.5rem;">3. Replit (The Instant)</h4>
                        <p><strong>Best For:</strong> Prototyping. Zero setup. Teaching.</p>
                        <p>If you have an idea in the shower, Replit lets you build it before you dry off. It removes the "setup tax."</p>
                    </div>

                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1.5rem 0;">
                        Choose the environment that matches your maturity, not your ambition. If you are learning, use Replit. If you are shipping, use Cursor.
                    </blockquote>
                    
                    <h3>The "Switch Cost" Myth</h3>
                    <p>People fear switching IDEs. "I'll lose my shortcuts!"</p>
                    <p>Get over it. The productivity gain from a true AI-native environment outweighs the 2 days of muscle memory retraining by 100x. If you are still using a non-AI editor because "it's tailored to you," you are piloting a biplane in the jet age.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Production:</strong> Use Cursor. It handles large codebases best.</li>
                            <li><strong>Experiments:</strong> Use Replit. Zero friction to first line of code.</li>
                            <li><strong>Agents:</strong> Use Windsurf/Cline. When you want it to <em>do</em>, not just <em>say</em>.</li>
                            <li><strong>Rule:</strong> Don't let nostalgia for your old config hold you back.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Setting Up Your Cockpit",
                slug: "setting-up-cockpit",
                content: `
                    <h3>Calm by Design</h3>
                    <p>AI behaves better when rules don’t disappear. By default, AI is chaotic. It guesses your style. It guesses your framework. You must lock this down.</p>
                    
                    <h3>The .cursorrules File</h3>
                    <p>This is the most important file in your repository. It is a prompt that runs fully automatically on every request.</p>
                    <p><strong>Do not leave this empty.</strong></p>
                    
                    <div class="glass-panel" style="padding: 1rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.9em;">
                        # .cursorrules<br/>
                        - You are an expert TypeScript engineer.<br/>
                        - Always use 'const' over 'let'.<br/>
                        - Prefer functional patterns.<br/>
                        - When writing React, use the 'use client' directive only when necessary.<br/>
                        - Do not delete comments unless told.<br/>
                        - Explain your plan before editing code.<br/>
                    </div>

                    <h3>Extensions: Force Multipliers vs. Noise</h3>
                    <p><strong>Good Extensions:</strong> Formatters (Prettier), Linters (ESLint). These provide <em>constraint</em>. AI needs constraint.</p>
                    <p><strong>Bad Extensions:</strong> specialized AI chat plugins that fight with your main AI. Visual clutter.</p>

                    <h3>The layout</h3>
                    <p>Close your file tree. Close your terminal if you aren't using it. Maximize the code. Maximize the chat. <strong>Focus is the asset.</strong></p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>.cursorrules:</strong> The single source of truth for AI behavior.</li>
                            <li><strong>Extensions:</strong> Use them to enforce style (Prettier), not for features.</li>
                            <li><strong>Layout:</strong> Hide distractions. Code + Chat is all you need.</li>
                            <li><strong>Tip:</strong> If AI keeps making the same mistake, add a rule.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Working With AI",
                slug: "working-with-ai",
                content: `
                    <h3>The Tactile Loop</h3>
                    <p>Working with AI is a specific physical skill. It's a rhythm: <strong>Cmd+K (Edit) → Cmd+L (Chat) → Terminal (Verify).</strong></p>
                    
                    <h3>1. Scoped Requests (Cmd+K)</h3>
                    <p>Don't select the whole file. Select only the function you want to change.</p>
                    <p><em>"Add error handling to this."</em></p>
                    <p>Because you scoped the selection, the AI can't mess up the rest of the file. <strong>Constraint is safety.</strong></p>
                    
                    <h3>2. The "Diff Review" Muscle</h3>
                    <p>When AI writes code, it shows you a diff (Red vs Green). rapid-fire clicking "Accept" is the hallmark of an amateur.</p>
                    <p><strong>You must read the Red.</strong> Did it delete something important? Did it accidentally remove a comment?</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1.5rem 0;">
                        The AI generates the draft. You generate the truth.
                    </blockquote>

                    <h3>3. Context Management</h3>
                    <p>AI context is expensive (money and quality). If you dump 50 files into context, the AI gets stupid.</p>
                    <ul>
                        <li><strong>@File:</strong> Reference only the specific files relevant to the task.</li>
                        <li><strong>@Docs:</strong> Use indexed docs, don't paste massive PDFs.</li>
                        <li><strong>Clear History:</strong> Start new chats often. Old context pollutes new tasks.</li>
                    </ul>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Cmd+K:</strong> For small, focused edits.</li>
                            <li><strong>Cmd+L:</strong> For planning and big questions.</li>
                            <li><strong>Read the Red:</strong> Always review what is being deleted.</li>
                            <li><strong>Context Hygiene:</strong> Clear chat history often. Reference fewer files.</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 7: Mastering the Prompt-Code Loop",
        slug: "prompt-code-loop",
        desc: "Prompting is not magic. It is a disciplined conversation.",
        chapters: [
            {
                title: "Conversation Engineering",
                slug: "conversation-engineering",
                content: `
                    <h3>Forget "Prompt Engineering"</h3>
                    <p>"Prompt Engineering" implies a one-off magic spell. You type the perfect words, and the perfect code appears. <strong>This is a myth.</strong></p>
                    <p>Real mastery is <strong>Conversation Engineering</strong>. It is the ability to steer a multi-turn dialogue towards a correct outcome, correcting course when the AI drifts, and reinforcing constraints when they are forgotten.</p>
                    
                    <h3>The State Machine Mental Model</h3>
                    <p>Treat the chat not as text, but as a state machine:</p>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <ul>
                            <li><strong>State 1: Context Setting.</strong> (No code yet. Just facts.)</li>
                            <li><strong>State 2: Planning.</strong> (AI proposes. You approve.)</li>
                            <li><strong>State 3: Execution.</strong> (AI writes. You verify.)</li>
                            <li><strong>State 4: Correction.</strong> (AI fixes. You re-verify.)</li>
                        </ul>
                    </div>
                    <p>The amateur merges all states into one giant prompt. The professional keeps them distinct.</p>

                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1.5rem 0;">
                        If you ask for the plan and the code in the same message, you will get a bad plan and broken code.
                    </blockquote>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Myth:</strong> One perfect prompt solves everything.</li>
                            <li><strong>Reality:</strong> Multi-turn conversation steering.</li>
                            <li><strong>Rule:</strong> Separate Planning from Execution.</li>
                            <li><strong>Sign of Failure:</strong> Trying to fix a bad original prompt with 10 follow-up "fixes". Restart instead.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The 30-Second Rule",
                slug: "30-second-rule",
                content: `
                    <h3>Speed as a Quality Signal</h3>
                    <p>If you have to spend more than 30 seconds reading an AI response to understand if it's right, <strong>it is wrong.</strong></p>
                    <p>Good AI output is obvious. It hits the mark. It's clean.</p>
                    <p>Bad AI output is verbose, apologetic, and confusing. It tries to hide its confusion in long paragraphs of explanation.</p>
                    
                    <h3>The Restart Reflex</h3>
                    <p>When you see a bad response, do not argue with it. Do not say "No, not like that."</p>
                    <p><strong>Delete your last message and try again.</strong></p>
                    <p>Arguing with a confused AI just adds more confusion to the context window. A clean retry costs nothing.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <strong>The Pattern:</strong><br/>
                        1. You Prompt.<br/>
                        2. AI Responds (confusingly).<br/>
                        3. STOP. Do not read it all.<br/>
                        4. Delete your prompt.<br/>
                        5. Refine your prompt (add constraint, clarify goal).<br/>
                        6. Send again.<br/>
                    </div>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Signal:</strong> If you are squinting at the screen, it's wrong.</li>
                            <li><strong>Action:</strong> Delete and Retry. Do not Argue.</li>
                            <li><strong>Why:</strong> Context pollution ruins sessions. Keep it clean.</li>
                            <li><strong>Mantra:</strong> "Garbage in, garbage stays."</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Priming The Context",
                slug: "priming-context",
                content: `
                    <h3>Setting the Stage</h3>
                    <p>Before you ask for code, you must "prime" the instance. You are loading the RAM of the agent.</p>
                    
                    <h3>The 3 Priming Levels</h3>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <h4 style="margin-top: 0;">Level 1: Role Priming</h4>
                        <p>"You are a senior React engineer focused on performance." (Sets the tone/vocabulary).</p>
                        
                        <h4 style="margin-top: 1rem;">Level 2: Knowledge Priming</h4>
                        <p>"We are using Next.js 14, Tailwind, and Supabase. We prefer composition over inheritance." (Sets the constraints).</p>
                        
                        <h4 style="margin-top: 1rem;">Level 3: Task Priming</h4>
                        <p>"I am about to paste a file. I entering a refactor phase. Do not output code yet, just confirm you understand." (Sets the immediate mode).</p>
                    </div>

                    <h3>The "Confirm" Pattern</h3>
                    <p>Always end a priming prompt with: <em>"Do not do the work yet. Just confirm you understand."</em></p>
                    <p>This forces the AI to reflect on your instructions without rushing into a solution. It saves tokens and increases accuracy.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Levels:</strong> Role → Knowledge → Task.</li>
                            <li><strong>Safety:</strong> "Do not code yet."</li>
                            <li><strong>Benefit:</strong> Forces internal reasoning before output generation.</li>
                            <li><strong>Analogy:</strong> Briefing a contractor before they pick up a hammer.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Escaping Loops of Death",
                slug: "escaping-loops",
                content: `
                    <h3>The "Apology Loop"</h3>
                    <p>AI: "I apologize, I made a mistake."<br/>
                    You: "It's still wrong."<br/>
                    AI: "I apologize again, here is the fix." (It breaks something else).<br/>
                    You: "Now X is broken."<br/>
                    AI: "I apologize..."</p>
                    
                    <p><strong>You are in a Loop of Death. stop.</strong></p>
                    <p>The AI has lost the plot. The context window is filled with failure. It is statistically likely to fail again because it is attending to its own previous bad code.</p>

                    <h3>The Eject Button</h3>
                    <ol>
                        <li><strong>Stop generating.</strong></li>
                        <li><strong>Open a new chat.</strong></li>
                        <li><strong>Paste only the current (broken) file.</strong></li>
                        <li><strong>Paste the error message.</strong></li>
                        <li><strong>Ask: "What is wrong with this logic?"</strong></li>
                    </ol>
                    <p>A fresh context window is a genius. A polluted context window is an idiot. Refreshing context is the most powerful debugging tool you have.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Symptom:</strong> AI apologizes more than once.</li>
                            <li><strong>Cause:</strong> Context pollution (attending to errors).</li>
                            <li><strong>Fix:</strong> The Eject Button (New Chat).</li>
                            <li><strong>Rule:</strong> Never fight a losing battle in a dirty context.</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 8: The Clean Code Console",
        slug: "clean-code-console",
        desc: "Using the terminal as a truth machine. Confidence meets reality.",
        chapters: [
            {
                title: "The Truth Machine",
                slug: "truth-machine",
                content: `
                    <h3>GUI vs. Reality</h3>
                    <p>Graphical User Interfaces (GUIs) are convenient, but they lie. They cache things. They hide errors. They "spin" indefinitely.</p>
                    <p>The Terminal never lies. If a file is there, <code>ls</code> will show it. If a build fails, the logs will show why. To master AI, you must get comfortable in the black box.</p>
                    
                    <h3>Why AI Needs the Terminal</h3>
                    <p>AI is text-based. The terminal is text-based. They are natural allies.</p>
                    <p>When you ask AI to "fix the bug," it is guessing. When you paste the <strong>terminal error output</strong> into the chat, it is <strong>knowing</strong>.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <strong>The Golden Rule of Debugging:</strong><br/>
                        Never paraphrase an error message. Copy precise text from the terminal.
                    </div>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Mindset:</strong> The terminal is the source of truth.</li>
                            <li><strong>Action:</strong> Run commands to verify "done" states.</li>
                            <li><strong>tactic:</strong> Paste raw logs into AI, never summaries.</li>
                            <li><strong>Fact:</strong> GUIs hide complexity; Terminals reveal it.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The Project Heartbeat (Git)",
                slug: "project-heartbeat",
                content: `
                    <h3>Git is not just version control.</h3>
                    <p>In the age of AI, Git is your <strong>Save Game</strong> system. It is the only thing standing between you and a hallucinated mess.</p>

                    <h3>The <code>git status</code> Reflex</h3>
                    <p>You should run <code>git status</code> every 5 minutes. It is the heartbeat of your project.</p>
                    <ul>
                        <li><strong>Clean working tree?</strong> Safe to ask AI to build a new feature.</li>
                        <li><strong>Dirty working tree?</strong> DANGER. Do not ask for new features until you commit or stash.</li>
                    </ul>

                    <h3>The Micro-Commit Strategy</h3>
                    <p>AI writes code fast. If it messes up, you need to rollback fast.</p>
                    <p><strong>Bad Habit:</strong> Coding for 4 hours, then committing.</p>
                    <p><strong>Pro Habit:</strong> 
                    1. AI gets the function working.
                    2. <code>git add . && git commit -m "feat: auth works"</code>
                    3. AI breaks everything in the next step.
                    4. <code>git checkout .</code> (Instant undo).
                    </p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Command:</strong> <code>git status</code> (Run it constantly).</li>
                            <li><strong>Strategy:</strong> Commit on every "Green" state.</li>
                            <li><strong>Undo:</strong> <code>git checkout .</code> creates invincibility.</li>
                            <li><strong>Rule:</strong> Never prompt on a dirty tree.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "5 Commands to Master",
                slug: "5-commands-master",
                content: `
                    <h3>You don't need to be a Linux wizard.</h3>
                    <p>You only need 5 commands to be dangerous.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: 1rem;">
                                <strong>1. <code>ls -la</code> (List All)</strong><br/>
                                <span style="font-size: 0.9em; opacity: 0.8;">"What is actually here?" Reveals hidden config files AI loves to mess with.</span>
                            </li>
                            <li style="margin-bottom: 1rem;">
                                <strong>2. <code>grep -r "text" .</code> (Search)</strong><br/>
                                <span style="font-size: 0.9em; opacity: 0.8;">"Where is this defined?" Faster than clicking folders.</span>
                            </li>
                            <li style="margin-bottom: 1rem;">
                                <strong>3. <code>npm run dev</code> (The Loop)</strong><br/>
                                <span style="font-size: 0.9em; opacity: 0.8;">Starts your local server. Keep this visible. Errors appear here first.</span>
                            </li>
                            <li style="margin-bottom: 1rem;">
                                <strong>4. <code>cat filename</code> (Read)</strong><br/>
                                <span style="font-size: 0.9em; opacity: 0.8;">Quickly check file content without opening an editor tab.</span>
                            </li>
                            <li style="margin-bottom: 1rem;">
                                <strong>5. <code>rm -rf node_modules</code> (The Nuclear Option)</strong><br/>
                                <span style="font-size: 0.9em; opacity: 0.8;">When nothing makes sense, delete dependencies and reinstall.</span>
                            </li>
                        </ul>
                    </div>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Look:</strong> <code>ls -la</code></li>
                            <li><strong>Find:</strong> <code>grep -r</code></li>
                            <li><strong>Run:</strong> <code>npm run ...</code></li>
                            <li><strong>Reset:</strong> <code>rm -rf node_modules</code></li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Safety: The Scary Commands",
                slug: "scary-commands",
                content: `
                    <h3>With great power comes great deletion.</h3>
                    <p>AI agents (like Windsurf) can run terminal commands. This is magical, but risky.</p>
                    
                    <h3>The Blacklist</h3>
                    <p>Be extremely cautious if an AI suggests these:</p>
                    <ul>
                        <li><code>rm -rf /</code> (Obviously)</li>
                        <li><code>git clean -fdx</code> (Deletes all untracked files forever)</li>
                        <li><code>dd</code> (Disk destroyers)</li>
                        <li><code>chmod -R 777</code> (Security nightmare)</li>
                    </ul>

                    <h3>The Human Firewall</h3>
                    <p><strong>Rule:</strong> Never auto-approve a terminal command you do not understand.</p>
                    <p>If the AI says "I will run a script to update permissions," you say: "Show me the script first."</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Verify:</strong> Read commands before hitting Enter.</li>
                            <li><strong>Block:</strong> <code>rm</code>, <code>chmod</code>, <code>dd</code> require double-check.</li>
                            <li><strong>Trust:</strong> Trust <code>npm install</code>. Distrust <code>curl | bash</code>.</li>
                            <li><strong>Role:</strong> You are the firewall.</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 9: Full-Stack Integration",
        slug: "full-stack-integration",
        desc: "Integration is about responsibility. Shipping is a contract with reality.",
        chapters: [
            {
                title: "The Architect vs. The Builder",
                slug: "architect-vs-builder",
                content: `
                    <h3>Role Switching</h3>
                    <p>To build full-stack apps with AI, you must wear two hats, but never at the same time.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <h4 style="margin-top: 0;">Hat 1: The Architect (You)</h4>
                        <p>Decides <em>what</em> connects to <em>what</em>. Defines data shapes. Picks the database. <strong>Does not write code.</strong></p>
                        
                        <h4 style="margin-top: 1.5rem;">Hat 2: The Builder (AI)</h4>
                        <p>Writes the glue code. Implements the API client. Connects the frontend form to the backend route. <strong>Does not make decisions.</strong></p>
                    </div>

                    <h3>The Integration Trap</h3>
                    <p>Integration is where AI struggles most. It forgets the contract. It sends a string when the database expects a number. It hallucinates an API endpoint that doesn't exist.</p>
                    <p><strong>The Fix:</strong> Provide the <em>Contract</em> first. Paste the Swagger definition, the Type interface, or the Database Schema <strong>before</strong> asking for the integration code.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Architect:</strong> Defines the Interfaces (Contracts).</li>
                            <li><strong>Builder:</strong> Implements the Implementation.</li>
                            <li><strong>Trap:</strong> Asking AI to guess the API structure.</li>
                            <li><strong>Rule:</strong> Never integrate two systems without showing AI the schema of both.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Glue Code & Middleware",
                slug: "glue-code-middleware",
                content: `
                    <h3>The Boring Stuff is the Important Stuff</h3>
                    <p>AI loves generating flashy UI components. It hates writing robust error handling middleware, retry logic, and type validation.</p>
                    <p><strong>This is where your app breaks.</strong></p>

                    <h3>The "Robustness" Prompt</h3>
                    <p>After AI generates the happy path (e.g., "Fetch users"), you must rigorously prompt for the unhappy path.</p>
                    
                    <div class="glass-panel" style="padding: 1rem; margin: 1.5rem 0;">
                        <strong>The Hardening Prompt:</strong><br/>
                        "Now rewrite this function to handle: 1. Network timeouts. 2. Invalid JSON responses. 3. Auth failures. Do not change the logic, just wrap it in safety."
                    </div>

                    <h3>Zod: The Universal Translator</h3>
                    <p>Use Zod (or similar validation libraries) at every system boundary. API inputs, Database outputs, URL params.</p>
                    <p>Tell the AI: <em>"All external data must be validated with Zod before use."</em> This single rule eliminates 90% of runtime bugs.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Focus:</strong> Force AI to write error handling explicitly.</li>
                            <li><strong>Tool:</strong> Zod for runtime validation.</li>
                            <li><strong>Concept:</strong> "Happy Path" code is only 50% of the job.</li>
                            <li><strong>Prompt:</strong> "Harden this."</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Secrets & Environment Variables",
                slug: "secrets-env-vars",
                content: `
                    <h3>AI Loves Leaking Secrets</h3>
                    <p>If you ask an AI to "Connect to OpenAI," it will often happily write: <code>const key = "sk-..."</code> directly in your code.</p>
                    <p><strong>This is a firing offense.</strong></p>

                    <h3>The .env Protocol</h3>
                    <p>You must establish a hard rule with your AI agents:</p>
                    <ul>
                        <li><strong>Rule 1:</strong> NEVER hardcode secrets.</li>
                        <li><strong>Rule 2:</strong> Always use <code>process.env.VARIABLE_NAME</code>.</li>
                        <li><strong>Rule 3:</strong> Create a <code>.env.example</code> file for templates.</li>
                    </ul>

                    <h3>The "Secret check"</h3>
                    <p>Before committing any code generated by AI, search for "sk-", "key", "password", or "token". AI is helpful, but it is not security-conscious.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Danger:</strong> Hardcoded API keys are leaked instantly on GitHub.</li>
                            <li><strong>Protocol:</strong> Use .env files strictly.</li>
                            <li><strong>Review:</strong> Grep for secrets before git push.</li>
                            <li><strong>Rule:</strong> Assume AI will leak credentials if you don't warn it.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The Deployment Cliff",
                slug: "deployment-cliff",
                content: `
                    <h3>Works on Localhost ≠ Works in Prod</h3>
                    <p>Deploying AI apps is harder than normal apps. You have timeouts, streaming responses, and edge function limits.</p>
                    
                    <h3>Common Deployment Failures</h3>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <ul>
                            <li><strong>Timeout:</strong> Vercel/Netlify functions time out after 10s. AI takes 30s to generate. (Fix: Use Edge functions or background jobs).</li>
                            <li><strong>Streaming:</strong> If you don't stream the response, the user thinks it's broken. (Fix: Implement UI skeletons).</li>
                            <li><strong>Cold Starts:</strong> Large AI models load slowly.</li>
                        </ul>
                    </div>

                    <h3>The "Prod-First" Mindset</h3>
                    <p>Don't wait until the end to deploy. Deploy the "Hello World" skeleton on Day 1. This exposes environment and timeout issues immediately.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Timeouts:</strong> The #1 enemy of AI apps.</li>
                            <li><strong>Streaming:</strong> Mandatory for UX.</li>
                            <li><strong>Strategy:</strong> Deploy on Day 1.</li>
                            <li><strong>Reality Check:</strong> Test with bad internet and zero cache.</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 10: Advanced AI Orchestration",
        slug: "advanced-orchestration",
        desc: "Management without drowning. Design systems that can evolve.",
        chapters: [
            {
                title: "Orchestration vs. Choreography",
                slug: "orchestration-vs-choreography",
                content: `
                    <h3>The Conductor vs. The Jazz Band</h3>
                    <p>When you have multiple AI agents working together, how do they coordinate?</p>
                    
                    <h3>Pattern 1: Orchestration (The Boss)</h3>
                    <p>One central "Manager" agent decides everything. It calls Worker A, gets the result, then calls Worker B. It maintains the state.</p>
                    <p><strong>Pros:</strong> Easy to debug. Deterministic flow.</p>
                    <p><strong>Cons:</strong> The Manager becomes a bottleneck.</p>
                    
                    <h3>Pattern 2: Choreography (The Swarm)</h3>
                    <p>Agents pass messages to each other. "I finished the database schema, passing to User Interface agent." There is no central boss.</p>
                    <p><strong>Pros:</strong> Fast. Scalable.</p>
                    <p><strong>Cons:</strong> Absolute chaos to debug. <strong>Avoid this until you are expert.</strong></p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Default:</strong> Start with Orchestration (Central Manager).</li>
                            <li><strong>Reason:</strong> You need to see the "Brain" of the system in one place.</li>
                            <li><strong>Warning:</strong> Autonomous swarms often loop indefinitely without a kill-switch.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The Router Pattern",
                slug: "router-pattern",
                content: `
                    <h3>Classification Before Action</h3>
                    <p>The single most powerful pattern for increasing accuracy is the <strong>Router</strong>.</p>
                    <p>Instead of one prompt handling "Customer Support" AND "Sales" AND "Tech Support", you send the input to a tiny Classifier Agent first.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <p><strong>Input:</strong> "My screen is broken."</p>
                        <p><strong>Router Agent:</strong> "This is category: HARDWARE_SUPPORT."</p>
                        <p><strong>Action:</strong> Route to the hardware-specialist prompt.</p>
                    </div>

                    <p>Specialized prompts are 10x more accurate than generalized prompts. The Router allows you to build a system of experts.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Concept:</strong> Router → Specialist Agents.</li>
                            <li><strong>Benefit:</strong> Smaller contexts = Higher accuracy.</li>
                            <li><strong>Cost:</strong> One extra API call (cheap).</li>
                            <li><strong>Code:</strong> <code>if (type === 'A') runAgentA()</code></li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The Evaluator-Optimizer Loop",
                slug: "evaluator-optimizer",
                content: `
                    <h3>Self-Healing Code</h3>
                    <p>This pattern mimics how humans write code. We draft, we review, we fix.</p>
                    
                    <h3>The 3-Step Flow</h3>
                    <ol>
                        <li><strong>Generator:</strong> Writes the initial draft code.</li>
                        <li><strong>Evaluator:</strong> Reviews the code against a checklist (Security, Style, Correctness). Returns a score + feedback.</li>
                        <li><strong>Optimizer:</strong> Takes the draft + feedback and rewrites it.</li>
                    </ol>
                    
                    <p>Moving from a "One Shot" architecture to a "Generator-Evaluator" loop typically boosts performance from 60% to 90%+.</p>
                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1.5rem 0;">
                        An agent that critiques itself is smarter than an agent that just guesses.
                    </blockquote>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Components:</strong> Generator (Draft) + Evaluator (Critique).</li>
                            <li><strong>Loop:</strong> Run untill score > 8/10.</li>
                            <li><strong>Key:</strong> The Evaluator must have a strict rubric.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Parallelization (Map-Reduce)",
                slug: "parallelization-map-reduce",
                content: `
                    <h3>Doing 100 Things at Once</h3>
                    <p>LLMs are slow. If you need to summarize 100 documents, doing it sequentially takes an hour. Doing it in parallel takes 30 seconds.</p>
                    
                    <h3>The Map-Reduce Pattern</h3>
                    <ul>
                        <li><strong>Map:</strong> Send all 100 documents to 100 parallel context windows. Ask for a summary of each.</li>
                        <li><strong>Reduce:</strong> Take the 100 summaries and feed them into one final "Synthesizer" agent to write the final report.</li>
                    </ul>
                    
                    <p>This is the secret to high-speed content generation and large-scale data analysis.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Use Case:</strong> Bulk operations (summaries, translation, classification).</li>
                            <li><strong>Map:</strong> Process items in parallel.</li>
                            <li><strong>Reduce:</strong> Combine results into one.</li>
                            <li><strong>Limit:</strong> Watch your rate limits!</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 11: The Agentic Architect",
        slug: "agentic-architect",
        desc: "Design systems that think, act, adapt, and endure.",
        chapters: [
            {
                title: "The 4-Box System Model",
                slug: "4-box-model",
                content: `
                    <h3>Architecture Before Code</h3>
                    <p>Every agentic system has four components. If you build without defining these, you are building a toy.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <ol>
                            <li><strong>State (Memory):</strong> What does the agent know? (Chat history, Vector DB, File contents).</li>
                            <li><strong>Policy (The Prompt):</strong> How does it decide? (System instructions, SOPs).</li>
                            <li><strong>Action (Tools):</strong> What can it touch? (API, Write File, Email).</li>
                            <li><strong>Evaluation (Reward):</strong> How do we know it worked? (Unit Test, Human thumbs up).</li>
                        </ol>
                    </div>

                    <p><strong>The Mistake:</strong> Most people focus 90% on the Prompt (Policy) and ignore State and Evaluation. The Prompt is cheap; State management is hard.</p>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Draw it first:</strong> Boxes and arrows. No code.</li>
                            <li><strong>State:</strong> Where is the user data stored?</li>
                            <li><strong>Tools:</strong> What is the minimum access required?</li>
                            <li><strong>Eval:</strong> How does it fail gracefully?</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Context Windows as RAM",
                slug: "context-as-ram",
                content: `
                    <h3>The Finite Resource</h3>
                    <p>Treat the "Context Window" (128k, 1M, 2M tokens) exactly like RAM in a computer.</p>
                    <ul>
                        <li>It is fast.</li>
                        <li>It is expensive.</li>
                        <li>It is volatile (vanishes when session ends).</li>
                    </ul>
                    
                    <h3>Context Hygiene</h3>
                    <p>Just because you <em>can</em> fit a book in context doesn't mean you <em>should</em>. "Needle in a Haystack" problems happen when you overload context.</p>
                    <p><strong>The Strategy:</strong></p>
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>RAG (Retrieval):</strong> Only fetch the 5 paragraphs you need, not the whole PDF.<br/>
                        <strong>Summarization:</strong> Collapse old conversation turns into a summary.<br/>
                        <strong>Selection:</strong> Don't give the agent 50 tools. Give it 5 relevant ones.
                    </div>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Analogy:</strong> Context = RAM. Database = Hard Drive.</li>
                            <li><strong>Rule:</strong> Don't dump the database into RAM.</li>
                            <li><strong>Technique:</strong> Summarize often. Prune history.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Latency and Trust",
                slug: "latency-trust",
                content: `
                    <h3>The Spinner of Death</h3>
                    <p>AI is slow. Waiting 10 seconds for a "Hello" destroys trust. You must design for latency.</p>
                    
                    <h3>The UI Pattern: Stream Everything</h3>
                    <p>Never wait for a full response. Stream the tokens. It makes the system <em>feel</em> alive.</p>
                    
                    <h3>The Backend Pattern: Optimistic UI</h3>
                    <p>If the user likes a post, turn the heart red <em>immediately</em>. Don't wait for the AI to confirm it. If the AI fails later, turn it back and show an error. Speed is a feature.</p>

                    <blockquote style="border-left: 4px solid #4f46e5; padding-left: 1rem; font-style: italic; margin: 1.5rem 0;">
                        Perceived Latency &lt; Actual Latency.
                    </blockquote>
                    
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Mandatory:</strong> Streaming responses.</li>
                            <li><strong>UI:</strong> Skeleton screens/loaders > Blank screens.</li>
                            <li><strong>Psychology:</strong> Show <em>something</em> in under 200ms.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The Reliability Stack",
                slug: "reliability-stack",
                content: `
                    <h3>Expecting Failure</h3>
                    <p>LLMs are non-deterministic. They will fail. Your architecture must assume failure.</p>
                    
                    <h3>Defense in Depth</h3>
                    <ol>
                        <li><strong>Retries:</strong> If JSON is broken, retry once automatically. (Catches 50% of errors).</li>
                        <li><strong>Fallbacks:</strong> If GPT-4 fails, fall back to Claude 3.5 Sonnet. Or a deterministic regex.</li>
                        <li><strong>Human Hand-off:</strong> If confidence is low, escalate to a human. "I am not sure, connecting you to support."</li>
                    </ol>
                    
                    <p><strong>The 99% Rule:</strong> Getting to 80% accuracy is easy. Getting to 99% requires the Reliability Stack.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Layer 1:</strong> Automatic Retry (1x).</li>
                            <li><strong>Layer 2:</strong> Model Fallback.</li>
                            <li><strong>Layer 3:</strong> Human Circuit Breaker.</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 12: The Zero-Cost Stack",
        slug: "zero-cost-stack",
        desc: "The best free tools for Hosting, Backend, and AI. Where to build your empire for $0.",
        chapters: [
            {
                title: "Local Intelligence (Ollama)",
                slug: "local-intelligence",
                content: `
                    <h3>Free Intelligence on Your Metal</h3>
                    <p>Why pay OpenAI $20/month when you have a GPU? Local LLMs are now good enough for 80% of tasks.</p>
                    
                    <h3>The Ollama Workflow</h3>
                    <p>Ollama is the Docker of LLMs. It makes running Llama 3 or Mistral as easy as one command.</p>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <code>ollama run llama3</code>
                    </div>
                    <p><strong>Use Case:</strong> Categorization, summary, draft writing. Anything where privacy matters or cost is a factor.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Tool:</strong> Ollama.</li>
                            <li><strong>Cost:</strong> $0 (uses your RAM/GPU).</li>
                            <li><strong>Privacy:</strong> 100% offline. Ideal for sensitive data.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The Free-Tier Empire",
                slug: "free-tier-empire",
                content: `
                    <h3>You Don't Need AWS</h3>
                    <p>The modern developer can launch a full-scale startup without spending a dime on infrastructure.</p>
                    
                    <h3>The Trinity</h3>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0;">
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: 1rem;"><strong>1. Hosting: Vercel / Netlify.</strong><br/>Global CDN, free SSL, instant git deploy. Generous free tiers.</li>
                            <li style="margin-bottom: 1rem;"><strong>2. Database: Supabase / PlanetScale.</strong><br/>Postgres as a Service. Auth included. First 500MB free.</li>
                            <li style="margin-bottom: 1rem;"><strong>3. Backend: Cloudflare Workers.</strong><br/>Serverless code at the edge. 100,000 requests/day for free.</li>
                        </ul>
                    </div>

                    <p><strong>Strategy:</strong> Build on the free tiers. Only pay when you have enough customers to afford it.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Frontend:</strong> Vercel.</li>
                            <li><strong>Backend:</strong> Supabase (Auth + DB).</li>
                            <li><strong>Logic:</strong> Cloudflare Workers.</li>
                            <li><strong>Total Cost:</strong> $0/month.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Open Source Agents",
                slug: "open-source-agents",
                content: `
                    <h3>Standing on Giants</h3>
                    <p>You don't need to build everything. There are open-source agents for specific tasks.</p>
                    
                    <h3>Top Tools</h3>
                    <ul>
                        <li><strong>MetaGPT:</strong> For generating entire software projects from one prompt.</li>
                        <li><strong>AutoGPT:</strong> For autonomous research.</li>
                        <li><strong>BabyAGI:</strong> For task planning loops.</li>
                    </ul>
                    
                    <p><strong>Warning:</strong> These tools are experimental. Use them to <em>learn patterns</em>, not as production employees.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Best For:</strong> Inspiration and rapid prototyping.</li>
                            <li><strong>Cost:</strong> Free (code), but you pay for API tokens.</li>
                            <li><strong>Idea:</strong> Read their source code to learn agent patterns.</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    {
        title: "Module 13: The Library of Concepts",
        slug: "library-of-concepts",
        desc: "Advanced patterns and foundational rules synthesized from expert literature.",
        chapters: [
            {
                title: "Agentic Design Patterns",
                slug: "agentic-design-patterns",
                content: `
                    <h3>The Vocabulary of Autonomous Systems</h3>
                    <p>Core patterns for building agents that work.</p>
                    
                    <h4>The Orchestrator Pattern</h4>
                    <p>Instead of one generalist agent, use a "Conductor" and "Musicians".</p>
                    <p><strong>The Flow:</strong> User -> Orchestrator (Breaks down task) -> Specialist Agents (Execute) -> Orchestrator (Synthesizes) -> User.</p>
                    
                    <h4>Agent Trajectory</h4>
                    <p>Debug the <em>thought process</em>, not just the output. A trajectory is the full log: Thought -> Action -> Observation.</p>
                    <p><strong>Pro Tip:</strong> If an agent fails, read the trajectory. Did it hallucinate a tool? Did it misinterpret an error?</p>
                    
                    <h4>System Prompting vs. User Prompting</h4>
                    <p>A System Prompt is a "Constitution". It defines Role, Constraints, and Tools. It is distinct from the ephemeral User Prompt.</p>
                    <p><strong>Avoid "Prompt Leakage":</strong> Keep internal logic separate from public-facing output.</p>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Pattern:</strong> Orchestrator > Swarm.</li>
                            <li><strong>Debug:</strong> Read the Trajectory (Thought Process).</li>
                            <li><strong>Safety:</strong> Separate System Prompt from User Prompt.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "GenAI Ethics & Safety",
                slug: "genai-ethics",
                content: `
                    <h3>The Three Pillars of Responsibility</h3>
                    <p>When building systems, you are responsible for their impact.</p>
                    
                    <h4>1. Bias Mitigation</h4>
                    <p>Models magnify societal biases. <strong>Action:</strong> Test your agents with diverse personas to ensure fair outcomes.</p>
                    
                    <h4>2. Copyright & Attribution</h4>
                    <p>The legal landscape is shifting. <strong>Rule:</strong> Never frame AI output as human-created. Always disclose AI involvement.</p>
                    
                    <h4>3. The "Human-in-the-Loop" Checkpoint</h4>
                    <p>Used for high-stakes actions (Financials, Emails, Deletion). The agent prepares the draft; the human pushes the button.</p>
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Bias:</strong> Test with diverse personas.</li>
                            <li><strong>Transparency:</strong> Disclose AI involvement.</li>
                            <li><strong>Control:</strong> HITL (Human-in-the-Loop) for high stakes.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The 5 Steps to GenAI Success",
                slug: "5-steps-genai",
                content: `
                    <h3>From Experiment to Production</h3>
                    <ol>
                        <li><strong>Identify Business Problems:</strong> Don't start with "We need AI". Start with "Processing invoices takes 4 days".</li>
                        <li><strong>Select a Data Platform:</strong> You cannot build good AI on bad data. Consolidate your knowledge base first.</li>
                        <li><strong>Build a Foundation:</strong> establish data pipelines and governance.</li>
                        <li><strong>Culture of Collaboration:</strong> Enable non-coders to prompt. The domain expert (accountant) knows <em>what</em> to ask better than the engineer.</li>
                        <li><strong>Measure, Learn, Celebrate:</strong> Define success metrics (e.g., "Hours saved per week").</li>
                    </ol>
                
                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Process:</strong> Use Case -> Model -> Prompt -> Eval -> Deploy.</li>
                            <li><strong>Key:</strong> Do not skip Evaluation.</li>
                        </ul>
                    </div>
`
            }
        ]
    },
    {
        title: "Module 14: The Modern Builder's Toolkit",
        slug: "modern-builders-toolkit",
        desc: "The exact stack to build a million-dollar one-person company.",
        chapters: [
            {
                title: "The Speed Stack (The Trinity)",
                slug: "speed-stack",
                content: `
                    <h3>Why This Stack Wins</h3>
                    <p>There are a million tools. I am choosing three for you. Why? Because they integrate perfectly, have massive free tiers, and scale to IPO.</p>
                    
                    <h3>1. The Framework: Next.js</h3>
                    <p>It is not just React. It is a full-stack framework. You write your frontend and your API in the same file.</p>
                    <p><strong>Benefit:</strong> Zero context switching. You think in one language (TypeScript).</p>
                    
                    <h3>2. The Backend: Supabase</h3>
                    <p>It gives you Postgres (the world's best database) + Auth + Edge Functions.</p>
                    <p><strong>Benefit:</strong> You don't need to write a login system ever again. It is solved.</p>
                    
                    <h3>3. The Host: Vercel</h3>
                    <p>It is the "Apple" of hosting. It just works. Git push -> Production URL.</p>
                    <p><strong>Benefit:</strong> The Preview Deployments (every branch gets a URL) change how you test software.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Frontend:</strong> Next.js (App Router).</li>
                            <li><strong>Backend:</strong> Supabase.</li>
                            <li><strong>Deploy:</strong> Vercel.</li>
                            <li><strong>Rule:</strong> Do not deviate unless you have a 10M user reason.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The Safety Stack (Monitoring)",
                slug: "safety-stack",
                content: `
                    <h3>Coding Blind is Suicide</h3>
                    <p>Once you deploy, you are blind. You don't know if users are clicking buttons or getting errors.</p>
                    
                    <h3>1. Sentry (Error Tracking)</h3>
                    <p>When your app crashes, Sentry emails you the exact line of code that failed.</p>
                    <p><strong>Without Sentry:</strong> User emails "It's broken." You say "Works on my machine." (You lose the customer).</p>
                    <p><strong>With Sentry:</strong> You fix the bug before the user even reports it.</p>
                    
                    <h3>2. PostHog (Analytics)</h3>
                    <p>Google Analytics is for marketers. PostHog is for engineers. It shows you "Session Replays" - you can literally watch a video of the user struggling with your UI.</p>
                    <p><strong>Insight:</strong> Watching 5 session replays is worth 100 customer interviews.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Crashes:</strong> Sentry helps you sleep at night.</li>
                            <li><strong>Behavior:</strong> PostHog shows you the truth of user confusion.</li>
                            <li><strong>Cost:</strong> Both have generous free tiers.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "The Growth Stack (Money)",
                slug: "growth-stack",
                content: `
                    <h3>Charging Money is a Feature</h3>
                    <p>You are not a charity. You need to accept credit cards.</p>
                    
                    <h3>Stripe (The Standard)</h3>
                    <p>Do not look elsewhere. Stripe has "Checkout" (pre-built payment pages) so you don't touch credit card data (which is a legal nightmare).</p>
                    <p><strong>Strategy:</strong> Build a "Pro" plan on Day 1. Even if it costs $1M. It forces you to think about value.</p>
                    
                    <h3>Resend (Email)</h3>
                    <p>Developers used to use SendGrid/AWS SES. They are painful. Resend is built by UI obsessives. It is beautiful. It sends emails that actually land in the inbox.</p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Payments:</strong> Stripe Checkout.</li>
                            <li><strong>Email:</strong> Resend.</li>
                            <li><strong>Mindset:</strong> Charge early. Sending an invoice is the best validation.</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Final Word: The Operator",
                slug: "final-word",
                content: `
                    <h3>You Are Not a Coder</h3>
                    <p>You used to be a coder. You typed characters into a file.</p>
                    <p><strong>Now you are an Operator.</strong></p>
                    <p>You direct a symphony of intelligence. You have a staff of 100 (agents) waiting for your command. Your ability to articulate your vision (Prompting) and verify the result (Terminal) is your new career.</p>
                    
                    <h3>The Loop Never Ends</h3>
                    <p>Build -> Ship -> Fail -> Fix -> Scale.</p>
                    <p>The tools will change next week. The models will get smarter next month. But the <em>Behavior</em>—the discipline of the Architect—will last forever.</p>
                    
                    <p style="text-align: center; font-size: 1.5em; margin-top: 3rem;"><strong>Go Build.</strong></p>

                    <div class="glass-panel" style="padding: 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 100%);">
                        <h4 style="margin-top: 0;">Quick Start Cheat Sheet</h4>
                        <ul>
                            <li><strong>Identity:</strong> Shift from "Writer of Code" to "Architect of Systems".</li>
                            <li><strong>Asset:</strong> Your judgment is now more valuable than your syntax memory.</li>
                            <li><strong>Action:</strong> Close this manual. Open your terminal.</li>
                        </ul>
                    </div>
                `
            }
        ]
    }
];