# PRD: Oren Landing Page MVP

## Product

**Name:** Oren

**Category:** Relationship communication tool

**Goal:** Validate demand for a human-centered tool that helps couples understand what is underneath recurring arguments before building the full product.

Oren may use advanced technology behind the scenes, but the landing page must not lead with or explicitly mention AI. The brand should emphasize the human side of communication: reflection, understanding, emotional needs, and calmer conversations.

## Primary KPI

Visitor to waitlist conversion.

Targets:

- 20%+ conversion: promising
- 30%+ conversion: very strong
- Below 10% conversion: revisit positioning

## Audience

Primary audience:

- 24-45 years old
- In a long-term relationship
- Recently experiencing recurring arguments
- Open to self-improvement
- Comfortable using modern digital tools

Secondary audience:

- Married couples
- Couples considering therapy
- Long-distance relationships

## Positioning

Oren is not positioned as an AI product. It is positioned as a calm communication aid for couples who keep having the same argument and want to understand the deeper need beneath it.

Core idea:

> You're probably not arguing about what you think you're arguing about.

Supporting message:

> Tell both sides. Find the need underneath. Start the conversation again.

Tone:

- Human
- Warm
- Calm
- Therapy-adjacent, but not clinical
- Reflective
- Simple
- Emotionally safe

Avoid:

- Explicit references to AI
- Technical language
- Product jargon
- Blame-oriented language
- Stock photos of couples
- Dense explanatory copy

## Site Structure

The MVP landing page should use these sections in this order:

1. Branding
2. Hero
3. Examples
4. How it works
5. Early access
6. FAQ

## Section Requirements

### 1. Branding

Purpose: Make Oren the strongest first-viewport signal.

Requirements:

- Brand name must be very large.
- Brand name should be visually comparable in scale to the hero headline.
- Include a simple abstract brand mark.
- Include a visible early access CTA.

Brand:

> Oren

CTA:

> Get Early Access

### 2. Hero

Purpose: Communicate the core problem and promise in as few words as possible.

Headline:

> You're probably not arguing about what you think you're arguing about.

Subheadline:

> Tell both sides. Find the need underneath. Start the conversation again.

### 3. Examples

Purpose: Show the user the kind of insight Oren can reveal without explaining the whole product.

Requirements:

- Emphasize three examples.
- Each example should pair a surface-level conflict phrase with the emotional need underneath.
- Examples should be visually prominent cards.

Example 1:

Surface phrase:

> "You never listen."

Underneath:

> I want to feel heard before we fix anything.

Example 2:

Surface phrase:

> "Nothing I do is enough."

Underneath:

> I want my effort to be noticed.

Example 3:

Surface phrase:

> "Why are you so distant?"

Underneath:

> I miss feeling close to you.

### 4. How It Works

Purpose: Explain the workflow simply.

Copy:

> Slow down. Reflect. Return differently.

Steps:

1. Write your side privately.
2. Add your partner's perspective, or invite them in.
3. See the misunderstanding, the need, and the next sentence.

Behavioral requirements:

- Oren should work whether one partner participates or both partners participate.
- The experience should encourage empathy for both perspectives.
- The output should be neutral and practical, not judgmental.

### 5. Early Access

Purpose: Convert visitors to the waitlist.

Headline:

> Join the first Oren beta.

Supporting copy:

> For couples ready to understand the pattern, not win the fight.

Form fields:

- Email, required
- Relationship status, optional
- Biggest communication challenge, optional

Button:

> Get Early Access

Privacy reassurance:

> Private. Respectful. No spam.

Success state:

> You're in.

Follow-up copy:

> We're inviting our first users soon.

Optional survey prompt:

> What feels hardest to talk about?

Survey placeholder:

> A sentence is enough.

### 6. FAQ

Purpose: Remove hesitation without hiding answers behind accordions.

Requirements:

- FAQ answers must be visible by default.
- Use a simple Q&A list or card grid.
- Keep answers short.

Questions and answers:

**Is this therapy?**  
No. Oren is a communication tool for reflection and understanding.

**Does my partner need to participate?**  
No. You can begin alone, or use it together.

**Does Oren choose who's right?**  
No. The goal is clarity, not a verdict.

**Is my data private?**  
Yes. Your conversations are treated with care and never shared without permission.

## Visual Direction

Overall feel:

- Human therapy-like
- Calm
- Soft
- Minimal
- Spacious
- Warm rather than technical

Typography:

- Use a big rounded font.
- Current implementation uses Nunito.
- Copy should be large enough to feel expressive but not overwhelming.
- Later adjustment reduced the initial oversized type by roughly 50%.

Color and style:

- Warm cream background
- Soft blues
- Clay accents
- Sage accents
- Rounded cards
- Large rounded corners
- Minimal abstract illustration only

Avoid:

- Stock photos of smiling couples
- SaaS dashboard styling
- Dense startup landing-page copy
- Hidden FAQ accordions
- AI-forward visuals or language

## Technical Requirements

- Static website.
- Hostable on GitHub Pages.
- No build step required.
- Files should remain simple HTML, CSS, and JavaScript.
- Waitlist form can be local-only for MVP UI testing, but must be connected to a real form backend before sending real traffic.

Current local form behavior:

- Waitlist submissions are stored in browser `localStorage`.
- Survey submissions are stored in browser `localStorage`.

Recommended production form options:

- Formspree
- Basin
- Airtable form endpoint
- Serverless function

## Success Criteria

The landing page is successful if:

- Visitors immediately understand Oren is for recurring relationship arguments.
- The brand feels human and emotionally safe.
- The page does not feel like an AI product pitch.
- The copy is concise and essential.
- The examples make the value obvious.
- The early access form is easy to complete.
- Conversion reaches or exceeds 20%.

