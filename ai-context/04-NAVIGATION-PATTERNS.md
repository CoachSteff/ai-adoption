# AI Context: Navigation Patterns

**Purpose**: Patterns and strategies for AI systems to efficiently navigate and extract information from this repository.

**Last Updated**: 2025-01-27  
**Framework**: CoachSteff's CRAFTER (SuperPrompt Framework v0.1)

---

## Navigation Strategy

### Entry Points

**For General Understanding**:
1. Start: `ai-context/00-REPOSITORY-OVERVIEW.md`
2. Then: `README.md`
3. Then: `docs/getting-started/overview.md`

**For Specific Topics**:
1. Start: `ai-context/02-CONTENT-MAP.md` (find topic)
2. Navigate to specific document in `/docs/`
3. Use cross-references within document

**For Framework Understanding**:
1. Start: `ai-context/03-FRAMEWORKS-GLOSSARY.md`
2. Navigate to framework documentation in `/docs/`

### Search Patterns

#### By Topic Keyword

**Governance/Compliance**:
- Search: "governance", "compliance", "EU AI Act", "TRiSM", "NIS2"
- Location: `docs/governance-compliance/`

**Human-Centric/Change Management**:
- Search: "human", "change", "upskilling", "EVP", "shadow AI"
- Location: `docs/human-centric-adoption/`

**Adoption Engine/Execution**:
- Search: "adoption engine", "readiness", "prioritization", "roadmap", "scaling"
- Location: `docs/adoption-engine/`

**Checklists/Action Items**:
- Search: "checklist", "template", "actionable"
- Location: `docs/checklists-templates/`

#### By Role

**Business Owner**:
- Path: `docs/getting-started/` → `docs/adoption-engine/readiness-assessment.md` → `docs/checklists-templates/business-owner-checklist.md`

**HR Business Partner**:
- Path: `docs/human-centric-adoption/overview.md` → `docs/human-centric-adoption/upskilling.md` → `docs/checklists-templates/hrbp-checklist.md`

**CTO/CAIO**:
- Path: `docs/governance-compliance/overview.md` → `docs/governance-compliance/ai-trism.md` → `docs/adoption-engine/scaling-production.md` → `docs/checklists-templates/cto-checklist.md`

#### By Use Case

**"I need to assess readiness"**:
- Primary: `docs/adoption-engine/readiness-assessment.md`
- Related: `docs/adoption-engine/overview.md`

**"I need compliance guidance"**:
- Primary: `docs/governance-compliance/overview.md`
- Specific: `docs/governance-compliance/eu-ai-act.md`, `docs/governance-compliance/ai-trism.md`

**"I need change management"**:
- Primary: `docs/human-centric-adoption/change-management.md`
- Related: `docs/human-centric-adoption/overview.md`

**"I need to prioritize initiatives"**:
- Primary: `docs/adoption-engine/prioritization.md`
- Related: `docs/adoption-engine/overview.md`

**"I need actionable steps"**:
- Primary: `docs/checklists-templates/overview.md`
- Then: Role-specific checklist

## File Reading Patterns

### Standard Document Structure

Most documentation files follow this pattern:

```markdown
# Title (H1)

## Introduction/Overview (H2)
- Context
- Purpose

## Main Content Sections (H2)
### Subsections (H3)
- Details
- Examples

## Related Links/References (H2)
- Cross-references
- External links
```

### Reading Priority

**High Priority Sections**:
- H1 title (document purpose)
- First H2 section (introduction/overview)
- H2 sections with "overview", "introduction", "summary"
- Conclusion or "next steps" sections

**Medium Priority**:
- Detailed H2 sections
- H3 subsections
- Examples and case studies

**Low Priority**:
- Footnotes
- Appendix sections
- Historical context

### Cross-Reference Following

**Pattern**: Documents frequently reference other documents using relative paths.

**Example**: `[AI Maturity Assessment](/docs/adoption-engine/readiness-assessment)`

**Strategy**: Follow cross-references to build comprehensive understanding.

## Content Extraction Patterns

### Extracting Frameworks

**Pattern**:
1. Find framework name in `ai-context/03-FRAMEWORKS-GLOSSARY.md`
2. Navigate to detailed documentation in `/docs/`
3. Extract:
   - Framework definition
   - Components/steps
   - Use cases
   - Related frameworks

### Extracting Checklists

**Pattern**:
1. Navigate to `docs/checklists-templates/[role]-checklist.md`
2. Extract:
   - Checklist items
   - Related frameworks referenced
   - Action items

### Extracting Statistics

**Pattern**:
- Search for numeric patterns (percentages, numbers)
- Common locations:
  - `docs/getting-started/overview.md`
  - `docs/getting-started/the-mandate.md`
  - Framework documents

### Extracting Citations

**Pattern**:
- Look for citation markers: `[1]`, `(Source)`, footnotes
- Common sources: McKinsey, Gartner, Deloitte, EU regulations
- Extract: Source name, claim, context

## Efficient Navigation Tips

### Use Overview Files

**Strategy**: Always start with `overview.md` files before diving into details.

**Benefits**:
- Understand section structure
- Identify relevant documents
- Get context before details

### Follow Sequential Paths

**Adoption Engine Path**:
1. `overview.md` → 2. `readiness-assessment.md` → 3. `prioritization.md` → 4. `roadmap.md` → 5. `measuring-value.md` → 6. `scaling-production.md`

**Benefits**: Understand logical flow and dependencies

### Use Content Map

**Strategy**: Use `ai-context/02-CONTENT-MAP.md` as a lookup table.

**When to Use**:
- Finding content by topic
- Finding content by audience
- Finding content by use case

### Leverage Structure Guide

**Strategy**: Use `ai-context/01-STRUCTURE-GUIDE.md` to understand file organization.

**When to Use**:
- Understanding directory structure
- Finding files by naming patterns
- Understanding file purposes

## Common Navigation Scenarios

### Scenario 1: "What is this repository about?"

**Path**:
1. `ai-context/00-REPOSITORY-OVERVIEW.md` (mission, purpose)
2. `README.md` (human-readable overview)
3. `docs/getting-started/overview.md` (detailed introduction)

### Scenario 2: "I need information about [specific topic]"

**Path**:
1. `ai-context/02-CONTENT-MAP.md` (find topic)
2. Navigate to specific document
3. Read overview section
4. Extract relevant details

### Scenario 3: "I need to understand [framework name]"

**Path**:
1. `ai-context/03-FRAMEWORKS-GLOSSARY.md` (framework definition)
2. Navigate to detailed documentation
3. Extract components and usage

### Scenario 4: "I need actionable steps for [role]"

**Path**:
1. `docs/checklists-templates/overview.md`
2. `docs/checklists-templates/[role]-checklist.md`
3. Follow references to related frameworks

### Scenario 5: "I need to understand the full adoption journey"

**Path**:
1. `docs/adoption-engine/overview.md` (framework overview)
2. Read each phase document sequentially
3. Cross-reference with checklists and other frameworks

## File Access Patterns

### Direct Access
- Use full file paths: `docs/adoption-engine/readiness-assessment.md`
- Works for known file locations

### Contextual Access
- Start from overview files
- Follow cross-references
- Use content map for discovery

### Hierarchical Access
- Start at section overview
- Drill down to specific topics
- Return to overview for context

## Best Practices

1. **Always Start with Context**: Read `ai-context/00-REPOSITORY-OVERVIEW.md` first
2. **Use Overview Files**: Read `overview.md` before detailed documents
3. **Follow Cross-References**: Build comprehensive understanding
4. **Use Content Map**: Efficient lookup for specific topics
5. **Extract Systematically**: Use consistent patterns for information extraction
6. **Verify with Source**: Cross-check with original documentation

---

**Framework**: CoachSteff's CRAFTER (SuperPrompt Framework v0.1)  
**License**: CC-BY 4.0 — Attribution: Steff Vanhaverbeke (coachsteff.live)

