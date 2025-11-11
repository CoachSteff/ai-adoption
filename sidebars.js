/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/the-mandate',
      ],
    },
    {
      type: 'category',
      label: 'Governance & Compliance',
      items: [
        'governance-compliance/overview',
        'governance-compliance/eu-ai-act',
        'governance-compliance/ai-trism',
        'governance-compliance/nis2',
        'governance-compliance/sovereignty',
        'governance-compliance/agentic-ai',
      ],
    },
    {
      type: 'category',
      label: 'Human-Centric Adoption',
      items: [
        'human-centric-adoption/overview',
        'human-centric-adoption/evp',
        'human-centric-adoption/change-management',
        'human-centric-adoption/upskilling',
        'human-centric-adoption/shadow-ai',
      ],
    },
    {
      type: 'category',
      label: 'Adoption Engine',
      items: [
        'adoption-engine/overview',
        'adoption-engine/readiness-assessment',
        'adoption-engine/prioritization',
        'adoption-engine/roadmap',
        'adoption-engine/measuring-value',
        'adoption-engine/scaling-production',
      ],
    },
    {
      type: 'category',
      label: 'Checklists & Templates',
      items: [
        'checklists-templates/overview',
        'checklists-templates/cto-checklist',
        'checklists-templates/hrbp-checklist',
        'checklists-templates/business-owner-checklist',
        'checklists-templates/mckinsey-12-practices',
      ],
    },
  ],
};

module.exports = sidebars;

