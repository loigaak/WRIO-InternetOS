#WRIO – Workflow Automation Platform

> **Status:** This is a DRAFT for updating `github.com/webRunes/WRIO-InternetOS/README.md`
> **Goal:** Remove ICO/Crypto references, rebrand as "Workflow Automation Platform"

---

## 🚀 What is WRIO?

WRIO is a **decentralized workflow automation platform** built on JSON-LD and Semantic Web technologies. 

Think of it as **"Code-First Zapier"** – workflows are stored as machine-readable JSON, not locked in a proprietary database.

**Key Features:**
- ✅ **JSON-LD Native:** Workflows stored as semantic data (portable, versionable, Git-friendly)
- ✅ **Headless Execution:** Run workflows via API (no UI lock-in)
- ✅ **AI-Optimized:** Content structured for Language Models (LMO)
- ✅ **Open Source:** MIT licensed core components

---

## 📦 Use Cases

1. **YouTube Comment Analysis**
   - Analyze 10K+ comments for sentiment, Truth Gap, top questions
   - [Try it live](https://wr.io/wrio/workflows/youtube-research)

2. **Lead Generation & Follow-ups**
   - Automate CRM workflows (Pipedrive, HubSpot)
   - Example: [Feedback Collection Pack](https://wr.io/wrio/workflows/feedback)

3. **SEO Automation**
   - Competitor analysis, keyword research, meta generation
   - [SEO Skill Pack](https://wr.io/wrio/workflows/competitor-analysis)

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│   JSON-LD Workflow Definition           │
│   (stored in R2, versionable via Git)   │
└─────────────────┬───────────────────────┘
                  │
        ┌─────────▼──────────┐
        │  Workflows API      │
        │  (Cloudflare Worker)│
        └─────────┬───────────┘
                  │
    ┌─────────────┴─────────────┐
    │                           │
┌───▼────┐               ┌──────▼─────┐
│ Node   │               │ External   │
│Executors│              │ APIs       │
│(AI, Web)│              │(Pipedrive, │
└────────┘               │ YouTube)   │
                         └────────────┘
```

**Tech Stack:**
- **Runtime:** Cloudflare Workers (V8 Isolates)
- **Storage:** Cloudflare R2 (S3-compatible)
- **Database:** Cloudflare D1 (SQLite at Edge)
- **Frontend:** SvelteKit + TypeScript

---

## 🛠️ Development

### Quick Start

```bash
# Clone the monorepo
git clone https://github.com/webRunes/monorepo.git
cd monorepo

# Install dependencies
npm install

# Start local dev environment
./start.sh
```

### Project Structure

```
monorepo/
├── apps/
│   ├── workflows-api-wr-io/    # Workflow execution engine
│   ├── storage-api-wr-io/      # R2 & D1 management
│   ├── bizcom-wr-io/           # Frontend UI
│   └── sonar-api-wr-io/        # Ping/Feedback workflows
├── packages/
│   └── workflows-ui/           # Reusable Svelte components
└── docs/
    ├── specs/                  # BDD specifications
    └── strategies/             # SEO, LMO strategies
```

---

## 📚 Documentation

- **Specifications:** [docs/specs/](https://github.com/webRunes/monorepo/tree/main/docs/specs)
- **API Docs:** [wr.io/docs/api](https://wr.io/docs/api)
- **Blog:** [wr.io/@webrunes/feed](https://wr.io/@webrunes/feed)

---

## 🤝 Contributing

We follow **BDD (Behavior-Driven Development)** with Gherkin specs.

1. Read the spec: `docs/specs/[FeatureName]_BDD.md`
2. Write tests (Vitest)
3. Implement feature
4. Submit PR with tests passing

---

## 📄 License

MIT License – see [LICENSE](LICENSE) for details.

---

## 🔗 Links

- **Website:** [wr.io](https://wr.io)
- **Twitter:** [@webRunes](https://twitter.com/webRunes)
- **Support:** [t.me/webRunes](https://t.me/webRunes)

---

## ⚠️ Historical Note (Archive)

**2018-2019:** This project was initially funded via a token sale (WGD/WRIO token). 
The token is **no longer active**, and the project has pivoted to a SaaS model.

All ICO-related content is archived for transparency but does not reflect the current project direction.

For the current roadmap, see: [docs/ROADMAP.md](docs/ROADMAP.md)

---

**Built with ❤️ by [webRunes](https://wr.io/@webrunes)**
