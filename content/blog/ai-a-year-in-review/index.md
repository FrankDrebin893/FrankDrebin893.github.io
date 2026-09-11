---
title: AI, a Year in Review
date: "2026-09-11"
description: Looking back at how AI tools has impacted my own day-to-day professional life during the past year.
---

A year ago, the ability to use agent mode popped up as an option in Rider, my IDE.
In the months that followed, the amount of code I've written myself has fallen to none.

<!-- TODO: one sentence framing the post: an honest practitioner's year, not a hype piece. -->

## It's not about the prompt

I initially started out using agent mode, permitting every single tool call, and have slowly progressed along to working with multiple autonmous agent sessions at any one time.

Initially, I thought it was all about prompting a lot to get to the end goal with a lot of manual testing along the wa, but I have since learned to instead proovide the right context and everionment for the agent to perform the entire task in the first try or at least get very close.

<!-- TODO: define "harness" here, before its first use below. The same idea currently goes by three names: "context and environment" (above), "harness" (next two sections) and "foundation" (later). Decide whether harness and foundation are one thing, and use one name throughout. -->

## Where agents surprised me

Furthermore, I've learned that it's incredibly powerful to use agents for non-coding work. I have started setting up automations that help me with all the parts of my job that I don't enjoy and am like to err at doing, which require high dilligence.
As harnesses are very focused on certain parts of the SDLC, it can be easy to forget backlog preparation or releases, but all of these aid to feed back into the harness and improving the development process.

Agents are great at producing unit and integration tests, but one area I've focused on are end-to-end testing. Agents don't struggle with dilligent processes the same way that humans do. Separate testing suites or documentation is something I've witnessed typically get neglected, and they usually end up poorly maintained. With agents, you can easily delegate these smaller areas of responsibility and get great results. This allows you to focus on the parts of the job that you enjoy. Personally, I enjoy delivering something that I feel like is of value to the users, so the more opportunity I get to do that in a fast and safe fashion, the better.

## The ideal harness and clashing with reality

I had initially dreamt of spinning up cloud agents that self-orchestrate the delivery of complete features, but I realized it would be slow and costly until we had properly prepares our systems for this. I realize a lot of the bleeding edge AI companies have accomplished this, but they are in a different position, where they can invest in this infrastructure, and have incentive to do so as well in order to sell their products. To boot, there are so many immature technologies coming out that achieve a suspiciously high number of Github starts in a short time. Many of these technologies take time to learn how to use, and they quickly become irrelevant as the underlying LLMs catch up on the missing features.

I have possibly started out with unrealistic aspirations for how agentic development would progress. Tokens are quite costly now, and it's important to choose the right models for the job, if you want to keep costs down. You can also throw a lot of money away with poorly described tasks and lack of ability to completely verify the result without human intervention.

Therefore, I opted to experiment more locally. I have become an avid user of the Github Copilot app, which allows me to connect all our systems, which gives me the perfect sandbox for testing out ideas for how to implement a harness withou tthe hassle of having to deploy it to a cloud setup, where I will have to deal with permissions, restrictions, connectivity etc.

<!-- TODO: E2E paragraph, no heading, bridging into the next section. Agents happily write E2E tests (see "Where agents surprised me"); the struggle is giving them an environment where they can run them and trust the result. -->

## Improving the foundation

In fact, I've started to believe my focus should be just as much on improving the foundation for an agent to do its job as the effort I put into understanding the context of the tasks. Why? Because it's not sustainable nor scalable for an engineer to juggle X number of agent sessions manually. It's a ludicrous amount of context switching and quickly burns you out.

It happens that I get tasks, which seem fairly simple, but in reality I am getting stuck in a rabbit hole of trying to solve an issue. It especially happens when I'm dealing with tricky bugs, which require a lot of knowledge about external systems and their workings. Of course, this can be alleviated to a high degree by giving the agent more access to reading live data or infrastructure metrics as well as documenting this information as well as possible. When I've run into these bugs, I've still been able to expedite other work, but I realize that I can't pay this much attention to one bug, if I can leave it be until I've sufficiently improved the foundation for the agent to solve it much more easily afterwards.

<!-- TODO: make this concrete. What was the bug, and what did you change in the foundation afterwards? -->

Improving the foundation is not always simple though. My team is responsible for a broad number of systems and domains, and, often, improving the foundation requires making large changes that require coordination with my own team and others. It can result in a high number of pull requests that update documentation and anget instruction files or fundamentally refactoring certain systems to make them more testable. Which by itself is fine, but it takes time and effort to get buy-in and prioritize these changes.

## Tips for using it

<!-- TODO: 3-4 tips max, each distilling a section above rather than adding new material. -->

- start with agentic coding
- too high expectations
- unanticipated use cases
- don't chase hyped tools

## Drifting toward product

As we get closer and closer to a foundation that allows agents to verify their results end-to-end, I see myself moving much more into a product management kind of role that allows me to figure out what the right thing is to build. In my team, engineering is responsible for managing the product requirements, and have a lot of freedom to implement the business' needs.

Even here, I see myself using AI more and more. I am currently experimenting with agent personas for product management that, in collaboration with more technical agents, prepare well described Jira issues with clear goals, where the information corresponds to the correct levels. As our team manage a highly technical portfolio, and engineer handle product requirements, we have struggled with being overly focused on technology in our task descriptions, and using this flow, I'm trying to turn it around from a bottom-up approach to wrapping the technical work in more business friendly language by including true user stories and epics that give context for the given initiative being undertaken.

<!-- TODO: a sanitized before/after example of a Jira issue. -->

## Where this is heading

I am definitely concerned about the impact it will have on software engineering as a profession, and the world as a whole. Many of the aspects of the job that I've enjoyed don't make sense for me to perform any longer.

<!-- TODO: resolve the "what I enjoy" tension. In "Where agents surprised me", agents free you up for what you enjoy (delivering value); here, parts of the job you enjoyed no longer make sense. What did you lose, and what did you gain? This is the emotional core of the post, so give it room. -->

For the future, I'm not sure where we're headed. LLMs are advancing so quickly that I see cost and compliance as the inhibiting factors. We still require humans to review the LLM's work, and, ultimately, take responsibility for their output, but we might be heading towards that LLMs can work so indepdently that humans mostly herd them in the right direction without further interference.
