---
title: Supersaas v3 is here
description: The biggest update to Supersaas yet
published: 2025/04/15
image: https://supersaas.dev/blog/supersaas-v3-is-here.jpg
readableDate: Apr 15, 2025
category: Supersaas
author: Fayaz Ahmed
authorImage: /fayaz.jpg
timeToRead: 5
seo:
  title: Supersaas v3 is here
  description: The biggest update to Supersaas yet
  image: https://supersaas.dev/blog/supersaas-v3-is-here.jpg
---

After 250 customers and 4 months of work, Supersaas v3 is finally here.

## What's new?

I ended up rewriting the whole thing from scratch. v2 worked fine, but I realized I had added a bunch of things I thought people needed—but no one actually used.

Take the `usePayments("stripe")`{lang="ts"} hook for example. It was meant to be a universal payment utility with support for multiple gateways. Cool idea, but unnecessary. Nobody uses two payment gateways in one app. It just added bloat.

Same with auth—everything was tangled together in shared files and components. That made it hard for users to remove what they didn’t need. So I scrapped it all and started clean.

### TypeScript-first

I used to avoid TypeScript. Thought JavaScript was enough. I was wrong. Using TypeScript in v3 has been a game changer. The type safety makes everything clearer and easier to work with.

### Teams & Organizations

This one was long overdue. Teams are tricky, especially when you want them to be flexible for different use cases. But I finally got it done. It handles edge cases well and fits most workflows out of the box.

### Auth, simplified

Authentication is now modular. Everything lives in its own file. Don’t need Google login? Just delete the file. No more digging around.

### Payments, simplified

I removed the fancy `usePayments("stripe")`{lang="ts"} hook and went with simpler Stripe service files. I’m also working on a service for Polar.sh.

### A better Super Admin dashboard

The Super Admin got a full revamp. It's now a proper control panel:

- Create and manage users
- View team memberships
- See which teams are on paid plans
- Ban and unban users
- Impersonate users (this was super fun to build)
- Collect feedback
- See newsletter subscribers

### Multiple database options

There are now maintained branches for Postgres and Turso. Pick what works for you.

### All the latest tech

- Nuxt 4 ready
- Tailwind CSS v4
- Nuxt UI v4

---

### Demo apps

Supersaas v3 now comes with a separate repo packed with demo apps. Here’s why:

- Keeps the main repo lightweight
- Lets me dogfood the kit just like a real user
- Shows you exactly how things work
- Helps you build faster by learning from real examples

Here’s what’s included:

**AI Chat**  
A polished AI chat app with syntax highlighting and multi-LLM support. The demo has working examples for OpenAI, Gemini, Mistral, and Claude using the Vercel AI SDK.

![AI Chat demo](https://supersaas.dev/ai-chat-demo.jpg)

**Posts App**  
A team notes app that shows how team collaboration works and how to use the team features.

![Posts app demo](https://supersaas.dev/posts-demo.jpg)

**URL Shortener**  
A link management tool with redirect tracking, click analytics, and QR code generation.

![URL Shortner demo](https://supersaas.dev/url-shortner-demo.jpg)

**Todoist Clone**  
A full-featured Todoist-style app with slick UI, animations, and task assignment support.

![Todoist clone demo](https://supersaas.dev/todoist-clone-demo.jpg)

**File Manager**  
A clean file manager with upload/download features and a nice UI.

<div class="h-full w-full relative rounded-xl overflow-hidden ring-8 ring-neutral-500/10"> <video src="https://essentials.supersaas.dev/file-manager-1080.mp4" autoplay muted loop playsinline class="w-full h-full object-cover"></video></div>

### Goodies

You also get a beautiful, pre-built marketing site with sleek design and a clean UI.

<div
          class="h-full w-full relative rounded-xl overflow-hidden ring-8 ring-neutral-500/10"
        >
          <video
            src="https://essentials.supersaas.dev/nuxtra-for-supersaas.mp4"
            autoplay
            muted
            loop
            playsinline
            class="w-full h-full object-cover"
          ></video>
        </div>

### What's coming next?

- Nuxt Layers for a cleaner and more modular structure
- Payment support for Polar.sh and Paddle
- More docs, more guides, and more real-world examples

---

Supersaas v3 is cleaner, more flexible, and easier to build on. Go check it out and start building your next SaaS app faster.
