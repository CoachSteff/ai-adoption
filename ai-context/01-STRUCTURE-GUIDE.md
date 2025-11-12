# AI Context: Structure Guide

**Purpose**: Detailed directory structure and file organization guide for AI systems navigating this repository.

**Last Updated**: 2025-01-27  
**Framework**: CoachSteff's CRAFTER (SuperPrompt Framework v0.1)

---

## Directory Structure Reference

### Root Level Files

| File | Purpose | Priority |
|------|---------|----------|
| `README.md` | Human-readable overview, quick start | **HIGH** |
| `CHANGELOG.md` | Version history, release notes | **HIGH** |
| `CONTRIBUTING.md` | Contribution guidelines | **MEDIUM** |
| `LICENSE` | MIT License | **LOW** |
| `SECURITY.md` | Security policy | **MEDIUM** |
| `package.json` | Node.js dependencies, scripts | **MEDIUM** |
| `docusaurus.config.js` | Docusaurus site configuration | **MEDIUM** |
| `sidebars.js` | Documentation navigation structure | **MEDIUM** |

### Core Directories

#### `/docs/` - Main Documentation (Docusaurus)

**Purpose**: Primary documentation content, organized by topic area.

**Structure**:
```
docs/
├── getting-started/
│   ├── overview.md              # Welcome page, quick start
│   └── the-mandate.md           # 2025 AI adoption mandate
├── governance-compliance/
│   ├── overview.md              # Governance introduction
│   ├── eu-ai-act.md             # EU AI Act compliance
│   ├── ai-trism.md              # Gartner AI TRiSM framework
│   ├── nis2.md                  # NIS2 Directive integration
│   ├── sovereignty.md          # Digital sovereignty strategy
│   └── agentic-ai.md           # Agentic AI governance
├── human-centric-adoption/
│   ├── overview.md              # Human-centric model intro
│   ├── change-management.md     # Change management playbook
│   ├── evp.md                   # Employee Value Proposition
│   ├── upskilling.md            # 6-step upskilling framework
│   └── shadow-ai.md            # Shadow AI management
├── adoption-engine/
│   ├── overview.md             # 5-phase framework intro
│   ├── readiness-assessment.md  # Phase 1: Assessment
│   ├── prioritization.md       # Phase 2: Prioritization
│   ├── roadmap.md               # Phase 3: Roadmap building
│   ├── measuring-value.md      # Phase 4: Value measurement
│   └── scaling-production.md    # Phase 5: Scaling
└── checklists-templates/
    ├── overview.md              # Checklists introduction
    ├── business-owner-checklist.md
    ├── cto-checklist.md
    ├── hrbp-checklist.md
    └── mckinsey-12-practices.md
```

**File Naming Convention**: kebab-case, descriptive names  
**Format**: Markdown with Docusaurus frontmatter

#### `/sources/` - Source Materials

**Purpose**: Research materials, source documents, and reference materials used to create the documentation.

**Key Files**:
- `AI Adoption Facilitators Manual.md` - Workshop facilitation guide
- `The Open-Source AI Adoption Playbook.md` - Original source document
- `Cognitive Agility - The Cognitive Agility Framework.md` - Related framework
- Various research documents and prompts

**Note**: These are source materials, not the final documentation. Use `/docs/` for authoritative content.

#### `/workshops/` - Workshop Materials

**Purpose**: Workshop facilitation materials, session guides, and handouts.

**Structure**:
```
workshops/
├── README.md                    # Workshop overview
├── WEBINAR_SERIES.md           # Webinar series information
├── 00-awareness-foundation/    # Foundation workshop
│   ├── README.md
│   ├── DEMO_SCRIPT.md
│   ├── SESSION_HANDOUT.md
│   ├── PRE_SESSION_CHECKLIST.md
│   └── [other materials]
├── 01-opportunity-mapping/     # Opportunity mapping workshop
├── 02-pilot-implementation/    # Pilot implementation workshop
└── 03-sustained-adoption/      # Sustained adoption workshop
```

#### `/ai-context/` - AI Context Files

**Purpose**: Structured context files for AI systems (this directory).

**Files**:
- `00-REPOSITORY-OVERVIEW.md` - Main entry point
- `01-STRUCTURE-GUIDE.md` - This file
- `02-CONTENT-MAP.md` - Content organization map
- `03-FRAMEWORKS-GLOSSARY.md` - Frameworks and concepts
- `04-NAVIGATION-PATTERNS.md` - Navigation patterns

#### `/src/` - Docusaurus Source Code

**Purpose**: React components and custom styling for the Docusaurus site.

**Structure**:
```
src/
├── components/          # React components
│   └── HomepageFeatures/
├── css/                # Custom CSS
│   └── custom.css
└── pages/              # Custom pages
    └── index.js        # Homepage
```

**Note**: For content, use `/docs/`. This directory is for site customization.

#### `/static/` - Static Assets

**Purpose**: Images, favicons, and other static files served directly.

**Files**:
- `img/logo.svg` - Project logo
- `img/favicon.ico` - Site favicon
- Other image assets

#### `/build/` - Generated Site

**Purpose**: Generated static site (gitignored, created by `npm run build`).

**Note**: Do not edit files here. They are generated from `/docs/` and `/src/`.

### Configuration Files

| File | Purpose |
|------|---------|
| `.github/workflows/` | GitHub Actions workflows (CI/CD) |
| `.gitignore` | Files to exclude from version control |
| `babel.config.js` | Babel configuration |
| `package-lock.json` | Dependency lock file |

## File Access Patterns

### Finding Documentation by Topic

**Governance & Compliance**:
- Start: `docs/governance-compliance/overview.md`
- EU AI Act: `docs/governance-compliance/eu-ai-act.md`
- AI TRiSM: `docs/governance-compliance/ai-trism.md`

**Human-Centric Adoption**:
- Start: `docs/human-centric-adoption/overview.md`
- Change Management: `docs/human-centric-adoption/change-management.md`
- Upskilling: `docs/human-centric-adoption/upskilling.md`

**Adoption Engine**:
- Start: `docs/adoption-engine/overview.md`
- Assessment: `docs/adoption-engine/readiness-assessment.md`
- Scaling: `docs/adoption-engine/scaling-production.md`

**Checklists**:
- Overview: `docs/checklists-templates/overview.md`
- Role-specific: `docs/checklists-templates/[role]-checklist.md`

### Finding Content by Role

**Business Owner**:
1. `docs/getting-started/overview.md`
2. `docs/adoption-engine/readiness-assessment.md`
3. `docs/checklists-templates/business-owner-checklist.md`

**HR Business Partner**:
1. `docs/human-centric-adoption/overview.md`
2. `docs/human-centric-adoption/upskilling.md`
3. `docs/checklists-templates/hrbp-checklist.md`

**CTO/CAIO**:
1. `docs/governance-compliance/overview.md`
2. `docs/governance-compliance/ai-trism.md`
3. `docs/adoption-engine/scaling-production.md`
4. `docs/checklists-templates/cto-checklist.md`

## Content Hierarchy

1. **Overview files** (`overview.md`) - Entry points for each section
2. **Detailed guides** - Specific topic documentation
3. **Checklists** - Actionable, role-based checklists
4. **Source materials** - Reference materials in `/sources/`

## Markdown Structure

All documentation files follow this structure:
- Frontmatter (YAML) with title, description
- H1 title
- Introduction/overview
- Main content sections (H2, H3)
- References/citations
- Related links

---

**Framework**: CoachSteff's CRAFTER (SuperPrompt Framework v0.1)  
**License**: CC-BY 4.0 — Attribution: Steff Vanhaverbeke (coachsteff.live)

