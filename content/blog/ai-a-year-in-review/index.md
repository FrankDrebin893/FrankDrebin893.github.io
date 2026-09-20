---
title: The impact of AI on my past year as a software engineer
date: "2026-09-11"
description: Looking back on how AI tools have impacted my own day-to-day professional life during the past year.
---

## The quietly brewing storm
The progression seen in AI development is especially stunning when you think about the timeline of important milestones leading up to this.

I personally followed the progress of Google DeepMind a decade ago, when they entered the StarCraft II scene, which undeniably draws parallels to Kasparov vs. Deep Blue in 1997.
Later, Demis Hassabis and John Jumper (now with Anthropic) from the DeepMind team would receive the Nobel Prize in Chemistry for their work in using AI for protein folding.

However, the breakthrough that seemed to move the needle was the [Transformer architecture](https://en.wikipedia.org/wiki/Attention_Is_All_You_Need) introduced in 2017.
Later came ChatGPT in 2022, which has made AI a mainstay in media and public discourse.

All of this to say, while this storm has quietly brewed for many decades, the speed of change in the last year is all the more impressive (and concerning).

## Enter agent mode
I have been using tools like Copilot Chat in my workflow for years, but they were nowhere near as impactful as the features that arrived in the past year.

A little over a year ago, the agent mode feature became available in my IDE, Rider. In the months that followed, the amount of code I've written myself has fallen to none.

At first, I used agent mode by permitting every single tool call. Since then, my workflow has slowly progressed to working with multiple concurrent autonomous agent sessions that can complete entire tasks with little to no steering.

## Focusing on the foundation and meta aspects of the job
In a sense, the biggest change in how I think about my job has been to remove my focus from programming and instead harness AI tools for neglected parts of my work.
LLMs can be a force for good and bad. They will turbocharge in whichever direction they are sent, so it's important to be sure what the target is.
I have been and am guilty of producing "AI slop", not only in the form of code, but also in general communication and documentation.
It might not be the correct conclusion, but I have decided that the slop is a necessary evil while I work out what this technology can do. Instead of throwing it out, I need to learn how to build a strong foundation for it.

The foundation consists of the specs, harnesses, agents, skills, documentation, validation and tool integrations available. Based on a vague specification, an LLM can easily produce a big PR that does something, but how do we know it's a good result worth building on? Humans still need to take responsibility for reviewing what was produced, but we become the bottleneck in the flow if we spend too much time and effort manually intervening in the form of steering, testing, coordinating, etc.

Instead, it's essential to constantly invest in the foundation to improve future results. Some common examples I run into:

- Documenting context for the LLM that it might not be able to search out for itself.
- Updating agents or skills when they don't produce the expected result.
- Having automated testing suites that validate the build, especially automated workflows that update E2E test suites whenever other systems are updated.
- Enabling the LLM to deploy and test the solution by itself.
- Making telemetry, logs and monitoring available for the LLM to further improve validation.

At the speed with which things are progressing, I also predict that this foundation will be very relevant for the next stages of automated development.

## The bleeding edge
It is always difficult to determine whether new technology is mature enough and, just as importantly, relevant enough for the scale at which you're working.

I've seen presentations from Anthropic and OpenAI employees who have seemingly unlimited token budgets with agents running around the clock. Some engineers have several layers of agents to keep other agents working.
I'm very skeptical that this is applicable to the majority of people, and the vendors obviously have a vested interest in promoting as much token usage as possible.

There's been a wave of new GitHub repositories that receive a large number of stars in a short time. You can spend all day trying out new AI skills that promise to cut your token spend by X-percentage or make any large project possible. If you're not careful, you'll end up with a very bloated context window, and it can be hard to gauge whether adding this or that to your development workflow really improved the results that much.

Cloud-run agentic workflows are the next step for me, but as mentioned before, if your foundation isn't there, you'll just be throwing money down the toilet.

## Where this is heading

LLMs are advancing so quickly that I see cost and compliance as the factors holding back a complete takeover of human jobs. We still require humans to review their work and, ultimately, take responsibility for their output, but we might be heading toward a point where LLMs can work so independently that humans mostly herd them in the right direction without further interference.

I am definitely concerned about the impact it will have on software engineering as a profession, and the world as a whole. Short of an economic crisis, it seems like nothing can stop AI's march forward — not even a global environmental crisis. I wonder whether Ray Kurzweil's prophecy of reaching the singularity in 2045 will come true, and whether the resulting technological advancements will help us repair other global aspects that have been neglected in the meantime, but I guess there's nothing left to do except wait and see.
