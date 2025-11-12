# AI Context: Content Map

**Purpose**: Comprehensive map of all content in the repository, organized by topic, audience, and use case.

**Last Updated**: 2025-01-27  
**Framework**: CoachSteff's CRAFTER (SuperPrompt Framework v0.1)

---

## Content Organization Matrix

### By Topic Area

#### 1. Getting Started
**Purpose**: Introduction and orientation for new users.

| File | Audience | Key Content |
|------|----------|-------------|
| `docs/getting-started/overview.md` | All | Welcome, problem statement, quick start |
| `docs/getting-started/the-mandate.md` | Executives | 2025 AI adoption mandate, statistics |

**Entry Point**: `docs/getting-started/overview.md`

#### 2. Governance & Compliance
**Purpose**: EU regulatory compliance and governance frameworks.

| File | Audience | Key Content |
|------|----------|-------------|
| `docs/governance-compliance/overview.md` | CTOs, CAIOs | Governance introduction |
| `docs/governance-compliance/eu-ai-act.md` | All EU enterprises | EU AI Act compliance path |
| `docs/governance-compliance/ai-trism.md` | CTOs, CAIOs | Gartner AI TRiSM framework |
| `docs/governance-compliance/nis2.md` | CTOs, Security | NIS2 Directive integration |
| `docs/governance-compliance/sovereignty.md` | Executives | Digital sovereignty strategy |
| `docs/governance-compliance/agentic-ai.md` | CTOs, CAIOs | Agentic AI governance |

**Entry Point**: `docs/governance-compliance/overview.md`

#### 3. Human-Centric Adoption
**Purpose**: Managing the human side of AI adoption.

| File | Audience | Key Content |
|------|----------|-------------|
| `docs/human-centric-adoption/overview.md` | HR, Change Agents | Human-centric model intro |
| `docs/human-centric-adoption/change-management.md` | HR, Leaders | McKinsey "Rewired" playbook |
| `docs/human-centric-adoption/evp.md` | HR, Executives | Employee Value Proposition |
| `docs/human-centric-adoption/upskilling.md` | HRBPs | 6-step upskilling framework |
| `docs/human-centric-adoption/shadow-ai.md` | HR, IT | Shadow AI management (4-step) |

**Entry Point**: `docs/human-centric-adoption/overview.md`

#### 4. Adoption Engine
**Purpose**: 5-phase execution framework for AI adoption.

| File | Phase | Key Content |
|------|-------|-------------|
| `docs/adoption-engine/overview.md` | - | Framework introduction |
| `docs/adoption-engine/readiness-assessment.md` | Phase 1 | AI maturity assessment |
| `docs/adoption-engine/prioritization.md` | Phase 2 | 6 prioritization frameworks |
| `docs/adoption-engine/roadmap.md` | Phase 3 | 7-workstream roadmap (Gartner) |
| `docs/adoption-engine/measuring-value.md` | Phase 4 | ROI/ROE/ROF measurement |
| `docs/adoption-engine/scaling-production.md` | Phase 5 | Pilot-to-production scaling |

**Entry Point**: `docs/adoption-engine/overview.md`

#### 5. Checklists & Templates
**Purpose**: Role-based actionable checklists.

| File | Audience | Key Content |
|------|----------|-------------|
| `docs/checklists-templates/overview.md` | All | Checklists introduction |
| `docs/checklists-templates/business-owner-checklist.md` | Business Owners | Actionable checklist |
| `docs/checklists-templates/cto-checklist.md` | CTOs, CAIOs | Technical checklist |
| `docs/checklists-templates/hrbp-checklist.md` | HRBPs | HR-focused checklist |
| `docs/checklists-templates/mckinsey-12-practices.md` | All | McKinsey's 12 practices |

**Entry Point**: `docs/checklists-templates/overview.md`

### By Audience

#### Entrepreneurs & Business Owners
**Primary Path**:
1. `docs/getting-started/overview.md` - Understand the landscape
2. `docs/getting-started/the-mandate.md` - 2025 mandate
3. `docs/adoption-engine/readiness-assessment.md` - Assess current state
4. `docs/adoption-engine/overview.md` - 5-phase framework
5. `docs/checklists-templates/business-owner-checklist.md` - Take action

**Key Documents**:
- `docs/adoption-engine/prioritization.md` - What to do first
- `docs/adoption-engine/measuring-value.md` - Measure ROI
- `docs/governance-compliance/overview.md` - Compliance basics

#### HR Business Partners
**Primary Path**:
1. `docs/human-centric-adoption/overview.md` - Human-centric model
2. `docs/human-centric-adoption/change-management.md` - Change playbook
3. `docs/human-centric-adoption/upskilling.md` - Upskilling framework
4. `docs/human-centric-adoption/shadow-ai.md` - Shadow AI management
5. `docs/checklists-templates/hrbp-checklist.md` - HR checklist

**Key Documents**:
- `docs/human-centric-adoption/evp.md` - Employee Value Proposition
- `docs/adoption-engine/readiness-assessment.md` - Organizational assessment

#### CTOs & CAIOs
**Primary Path**:
1. `docs/governance-compliance/overview.md` - Governance intro
2. `docs/governance-compliance/ai-trism.md` - AI TRiSM framework
3. `docs/governance-compliance/eu-ai-act.md` - EU AI Act compliance
4. `docs/adoption-engine/scaling-production.md` - Scaling strategy
5. `docs/checklists-templates/cto-checklist.md` - Technical checklist

**Key Documents**:
- `docs/governance-compliance/nis2.md` - NIS2 integration
- `docs/governance-compliance/agentic-ai.md` - Agentic AI governance
- `docs/adoption-engine/roadmap.md` - Technical roadmap

#### Change Agents & Facilitators
**Primary Path**:
1. `docs/human-centric-adoption/overview.md` - Human-centric model
2. `docs/human-centric-adoption/change-management.md` - Change playbook
3. `workshops/README.md` - Workshop materials
4. `sources/AI Adoption Facilitators Manual.md` - Facilitation guide

**Key Documents**:
- `workshops/00-awareness-foundation/` - Foundation workshop
- `docs/adoption-engine/readiness-assessment.md` - Assessment tools

### By Use Case

#### "I need to understand AI adoption"
**Start**: `docs/getting-started/overview.md`  
**Then**: `docs/getting-started/the-mandate.md`  
**Next**: `docs/adoption-engine/overview.md`

#### "I need to comply with EU regulations"
**Start**: `docs/governance-compliance/overview.md`  
**Then**: `docs/governance-compliance/eu-ai-act.md`  
**Also**: `docs/governance-compliance/nis2.md`

#### "I need to manage change"
**Start**: `docs/human-centric-adoption/overview.md`  
**Then**: `docs/human-centric-adoption/change-management.md`  
**Also**: `docs/human-centric-adoption/upskilling.md`

#### "I need to assess readiness"
**Start**: `docs/adoption-engine/readiness-assessment.md`  
**Also**: `docs/adoption-engine/overview.md`

#### "I need to prioritize initiatives"
**Start**: `docs/adoption-engine/prioritization.md`  
**Also**: `docs/adoption-engine/overview.md`

#### "I need to scale from pilot to production"
**Start**: `docs/adoption-engine/scaling-production.md`  
**Also**: `docs/adoption-engine/roadmap.md`

#### "I need actionable steps for my role"
**Start**: `docs/checklists-templates/overview.md`  
**Then**: Role-specific checklist in `docs/checklists-templates/`

## Content Relationships

### Sequential Reading Paths

**Complete Adoption Journey**:
1. Getting Started → 2. Readiness Assessment → 3. Prioritization → 4. Roadmap → 5. Value Measurement → 6. Scaling

**Governance Path**:
1. Governance Overview → 2. EU AI Act → 3. AI TRiSM → 4. NIS2 → 5. Agentic AI

**Human-Centric Path**:
1. Human-Centric Overview → 2. Change Management → 3. EVP → 4. Upskilling → 5. Shadow AI

### Cross-References

**Common Cross-References**:
- `docs/adoption-engine/overview.md` references all 5 phases
- `docs/governance-compliance/overview.md` links to all compliance topics
- Checklists reference relevant framework documents

## Source Materials

**Location**: `/sources/`

**Key Source Files**:
- `The Open-Source AI Adoption Playbook.md` - Original comprehensive document
- `AI Adoption Facilitators Manual.md` - Workshop facilitation
- `Cognitive Agility - The Cognitive Agility Framework.md` - Related framework
- Research documents and prompts

**Note**: Source materials are reference documents. Use `/docs/` for authoritative, current content.

## Workshop Materials

**Location**: `/workshops/`

**Available Workshops**:
- `00-awareness-foundation/` - Foundation workshop
- `01-opportunity-mapping/` - Opportunity mapping
- `02-pilot-implementation/` - Pilot implementation
- `03-sustained-adoption/` - Sustained adoption

**Each Workshop Contains**:
- `README.md` - Workshop overview
- `DEMO_SCRIPT.md` - Demo script
- `SESSION_HANDOUT.md` - Participant handout
- `PRE_SESSION_CHECKLIST.md` - Preparation checklist
- Other facilitation materials

## Content Statistics

- **24 documentation pages** in `/docs/`
- **5 major sections**
- **10,000+ words** of original content
- **80+ citations** to authoritative sources
- **20+ frameworks and tools**

---

**Framework**: CoachSteff's CRAFTER (SuperPrompt Framework v0.1)  
**License**: CC-BY 4.0 — Attribution: Steff Vanhaverbeke (coachsteff.live)

