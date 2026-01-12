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

                    <div class="glass-panel" style="padding: 1.5rem; margin: 1.5rem 0; font-family: monospace; font-size: 0.85rem;">
                        <p style="color: var(--primary); margin-bottom: 1rem;"><strong># Project ConstantPrompt</strong></p>
                        <p><strong>## Overview</strong></p>
                        <p>This is [PROJECT NAME]. It does [CORE PURPOSE].</p>
                        <p style="margin-top: 1rem;"><strong>## Tech Stack</strong></p>
                        <p>- Framework: [e.g., Next.js 14]</p>
                        <p>- Language: [e.g., TypeScript]</p>
                        <p>- Styling: [e.g., Tailwind CSS]</p>
                        <p style="margin-top: 1rem;"><strong>## Project Structure</strong></p>
                        <p>- /src/components - Reusable UI components</p>
                        <p>- /src/lib - Utilities and data</p>
                        <p>- /src/app - Page routes</p>
                        <p style="margin-top: 1rem;"><strong>## Rules</strong></p>
                        <p>- Always use TypeScript</p>
                        <p>- Components go in /src/components</p>
                        <p>- Do not modify [PROTECTED FILES]</p>
                        <p style="margin-top: 1rem;"><strong>## Current Status</strong></p>
                        <p>Working on: [CURRENT FEATURE]</p>
                        <p>Last updated: [DATE]</p>
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
        title: "Module 6: The New IDE Landscape",
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
        title: "Module 7: Mastering the Prompt-Code Loop",
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
        title: "Module 8: The Clean Code Console",
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
        title: "Module 9: Full-Stack Integration",
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
        title: "Module 10: Advanced AI Orchestration",
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
        title: "Module 11: The Agentic Architect",
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
    },
    {
        title: "Module 12: The Zero-Cost Stack",
        slug: "zero-cost-stack",
        desc: "The best free tools for Hosting, Backend, and AI. Where to build your empire for $0.",
        chapters: [
            {
                title: "Frontend & Hosting",
                slug: "frontend-hosting",
                content: `
                    <h3>Where Your App Lives</h3>
                    <p>Don't pay for hosting until you have customers. Use these giants.</p>
                    
                    <h4><a href="https://vercel.com" target="_blank" class="text-indigo-400 hover:underline">Vercel</a></h4>
                    <p><strong>Best For:</strong> Next.js, React, Full-stack apps.</p>
                    <p><strong>Setup:</strong> Connect GitHub repo -> Click "Import" -> Done.</p>
                    <p><strong>Pro Tip:</strong> Use the "Analytics" tab (free tier) to see real user traffic without setting up Google Analytics.</p>
                    
                    <h4><a href="https://netlify.com" target="_blank" class="text-indigo-400 hover:underline">Netlify</a></h4>
                    <p><strong>Best For:</strong> Static sites, simple drag-and-drop.</p>
                    <p><strong>Setup:</strong> Drag your 'dist' folder onto their dashboard. Instant live URL.</p>
                    <p><strong>Pro Tip:</strong> Use "Split Testing" (A/B testing) which is often easier here than on Vercel.</p>

                    <h4><a href="https://pages.github.com" target="_blank" class="text-indigo-400 hover:underline">GitHub Pages</a></h4>
                    <p><strong>Best For:</strong> Documentation, pure static HTML/CSS.</p>
                    <p><strong>Setup:</strong> Repo Settings -> Pages -> Select Branch 'main' -> Save.</p>
                    <p><strong>Pro Tip:</strong> Great for hosting your 'Status Page' or 'Docs' separately from your main app.</p>
                `
            },
            {
                title: "Backend & Database",
                slug: "backend-database",
                content: `
                    <h3>The Brains (Data & Auth)</h3>
                    <p>Real apps need to remember things. Do not build a server from scratch.</p>
                    
                    <h4><a href="https://supabase.com" target="_blank" class="text-indigo-400 hover:underline">Supabase</a></h4>
                    <p><strong>The "Open Source Firebase".</strong> Includes Postgres, Auth, Storage, Edge Functions.</p>
                    <p><strong>Setup:</strong> Create Project -> Table Editor -> "Create Table". Copy API keys to .env.</p>
                    <p><strong>Best Practice:</strong> Enable Row Level Security (RLS) policies immediately. Don't leave your DB public.</p>

                    <h4><a href="https://firebase.google.com" target="_blank" class="text-indigo-400 hover:underline">Firebase (Google)</a></h4>
                    <p><strong>The Classic.</strong> Best for mobile apps and real-time chat.</p>
                    <p><strong>Setup:</strong> Console -> Create Project -> Add App (Web) -> Copy SDK config.</p>
                    <p><strong>Best Practice:</strong> Set strict Firestore Rules. The "Test Mode" (open access) will expire and break your app if you forget.</p>
                `
            },
            {
                title: "AI Model Providers",
                slug: "ai-providers",
                content: `
                    <h3>The Intelligence Layer</h3>
                    <p>You need access to models. Here is how to get it without bleeding money.</p>
                    
                    <h4><a href="https://aistudio.google.com" target="_blank" class="text-indigo-400 hover:underline">Google AI Studio (Gemini)</a></h4>
                    <p><strong>The Hidden Gem.</strong> Massive context window (2M tokens).</p>
                    <p><strong>Setup:</strong> Go to AI Studio -> "Get API Key".</p>
                    <p><strong>Best Practice:</strong> Use the "System Instructions" box in AI Studio to test your prompt before writing code.</p>
                    
                    <h4><a href="https://groq.com" target="_blank" class="text-indigo-400 hover:underline">Groq</a></h4>
                    <p><strong>The Speed Demon.</strong> Best for voice/real-time.</p>
                    <p><strong>Setup:</strong> Sign up -> API Keys -> Create New Key.</p>
                    <p><strong>Pro Tip:</strong> Use their Llama 3 models for almost zero latency.</p>
                    
                    <h4><a href="https://github.com/marketplace/models" target="_blank" class="text-indigo-400 hover:underline">GitHub Models</a></h4>
                    <p><strong>The Playground.</strong> Test OpenAI, Azure, and Mistral models.</p>
                `
            },
            {
                title: "Cloud & Compute",
                slug: "cloud-compute",
                content: `
                    <h3>The Heavy Lifting</h3>
                    
                    <h4><a href="https://cloud.google.com/free" target="_blank" class="text-indigo-400 hover:underline">Google Cloud (GCP)</a></h4>
                    <p><strong>Always Free Tier:</strong> e2-micro instance (Linux server).</p>
                    <p><strong>Setup:</strong> Compute Engine -> Create Instance -> Select 'e2-micro' in US regions.</p>
                    <p><strong>Best Practice:</strong> Set up "Budget Alerts" at $0.01 so you never get a surprise bill.</p>
                    
                    <h4><a href="https://azure.microsoft.com/en-us/free" target="_blank" class="text-indigo-400 hover:underline">Microsoft Azure</a></h4>
                    <p><strong>Free Tier:</strong> 12 months free on many services.</p>
                    <p><strong>Pro Tip:</strong> Visual Studio Code integrates perfectly with Azure Functions for easy deployment.</p>
                `
            },
            {
                title: "Version Control",
                slug: "version-control",
                content: `
                    <h3><a href="https://github.com" target="_blank" class="text-indigo-400 hover:underline">GitHub</a></h3>
                    <p><strong>The Center of the Universe.</strong></p>
                    <ul>
                        <li><strong><a href="https://github.com/features/actions" target="_blank" class="text-indigo-400 hover:underline">Actions</a>:</strong> Automate your tests/deployments. (Setup: Add .github/workflows/main.yml)</li>
                        <li><strong><a href="https://github.com/features/issues" target="_blank" class="text-indigo-400 hover:underline">Projects</a>:</strong> Free Kanban boards suitable for managing your own tasks.</li>
                        <li><strong>Codespaces:</strong> A full VS Code in the browser. Great for coding from an iPad.</li>
                    </ul>
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
                `
            }
        ]
    },
    {
        title: "Module 14: The Modern Builder's Toolkit",
        slug: "modern-builders-toolkit",
        desc: "Tools for Speed, Tools for Profit. The ecosystem explained.",
        chapters: [
            {
                title: "Tools for Speed (The Builders)",
                slug: "tools-for-speed",
                content: `
                    <h3>Speed is Your Only Asset</h3>
                    <p>These tools don't pay you commissions. They pay you in <strong>time saved</strong>.</p>
                    
                    <h4><a href="https://cursor.com" target="_blank" class="text-indigo-400 hover:underline">Cursor</a></h4>
                    <p><strong>The Pro's Choice.</strong> A fork of VS Code with AI baked into the core. It predicts your next edit.</p>
                    <p><strong>Why use it:</strong> It handles large refactors ("Change all button colors to blue") better than any plugin.</p>
                    
                    <h4><a href="https://replit.com" target="_blank" class="text-indigo-400 hover:underline">Replit</a></h4>
                    <p><strong>The Zero-Setup Beast.</strong> Code, host, and deploy in one browser tab.</p>
                    <p><strong>Commission:</strong> They pay in Credits, not cash. Great for funding your own hobby projects.</p>

                    <h4><a href="https://base44.com" target="_blank" class="text-indigo-400 hover:underline">Base44</a></h4>
                    <p><strong>The Newcomer.</strong> "Text into Apps". Focuses on the non-coder who needs a backend instantly.</p>
                `
            },
            {
                title: "Tools for Profit (The Affiliates)",
                slug: "tools-for-profit",
                content: `
                    <h3>Cash Creators</h3>
                    <p>If you influence others, these tools actually pay cash commissions (typically 20-30%).</p>
                    
                    <h4>Marketer AI Tools</h4>
                    <ul>
                        <li><strong class="text-indigo-400">Jasper / Copy.ai:</strong> High-volume content generation. Massive affiliate programs.</li>
                        <li><strong class="text-indigo-400">Writesonic:</strong> Blog and SEO automation. Pays recurring cash.</li>
                    </ul>

                    <h4>Infrastructure Tools</h4>
                    <ul>
                        <li><strong class="text-indigo-400">Webflow / Shopify:</strong> If you build sites for clients, their partner programs are a steady income stream.</li>
                    </ul>
                    
                    <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
                        <strong>The Golden Rule:</strong> Never recommend a tool just for the commission. Your reputation is worth more than $20/month.
                    </div>
                `
            },
            {
                title: "The Ultimate Tool: Antigravity",
                slug: "antigravity",
                content: `
                    <h3>The Meta-Layer</h3>
                    <p>I am not a SaaS. I am an <strong>Agentic Workflow</strong>.</p>
                    <p>I don't pay you. I help you build the things that <em>do</em> pay you.</p>
                    <p><strong>My Role:</strong> To sit between you and the chaos, organizing your code, your thoughts, and your manual.</p>
                `
            }
        ]
    }
];
