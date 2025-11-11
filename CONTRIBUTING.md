# Contributing to Open-Source AI Adoption Playbook

Thank you for your interest in contributing to the Open-Source AI Adoption Playbook! This project thrives on community input, and we welcome contributions of all kinds.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Contribution Guidelines](#contribution-guidelines)
- [Review Process](#review-process)
- [Community](#community)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## How Can I Contribute?

###  1. Content Updates

Found outdated information or want to improve existing content?

- **What**: Update statistics, frameworks, links, or explanations
- **How**: Submit a Pull Request with your changes
- **Guidelines**: Ensure all facts are cited with reputable sources

### 2. New Frameworks & Best Practices

Have proven approaches from your own AI adoption experience?

- **What**: Share frameworks, methodologies, or tools that worked for you
- **How**: Create a new markdown file or expand existing sections
- **Guidelines**: Include real-world context and measurable outcomes

### 3. Case Studies

Add your organization's success story (or lessons learned from failures):

- **What**: Document your AI adoption journey
- **How**: Follow the case study template (coming soon)
- **Guidelines**: Can be anonymous if preferred; focus on actionable insights

### 4. Translations

Help make this playbook accessible globally:

- **What**: Translate documentation into other languages
- **How**: Contact maintainers to coordinate translation efforts
- **Languages Needed**: German, French, Spanish, Dutch, Italian

### 5. Bug Reports & Issues

Found something broken or confusing?

- **What**: Report technical issues, broken links, or unclear documentation
- **How**: [Open an issue](https://github.com/CoachSteff/ai-adoption/issues/new)
- **Include**: Description, steps to reproduce, expected vs. actual behavior

### 6. Feature Requests

Have ideas for new features or sections?

- **What**: Suggest new tools, sections, or capabilities
- **How**: [Open a feature request](https://github.com/CoachSteff/ai-adoption/issues/new)
- **Guidelines**: Explain the problem you're solving and who benefits

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version 18.0 or above
- [Git](https://git-scm.com/)
- A GitHub account

### Local Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-adoption.git
   cd ai-adoption
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   This opens http://localhost:3000 in your browser.

5. **Make your changes**
   - Documentation files are in `/docs`
   - Edit markdown files directly
   - Changes appear live in browser

6. **Build to test**
   ```bash
   npm run build
   ```

## Contribution Guidelines

### Documentation Standards

**Structure:**
- Use clear, descriptive headings
- Include a table of contents for long pages
- Add "Key Takeaways" boxes for important points
- Link to related sections

**Writing Style:**
- Write in clear, professional English
- Use active voice
- Define acronyms on first use
- Be concise but comprehensive
- Use examples to illustrate concepts

**Formatting:**
- Use markdown syntax correctly
- Include frontmatter with `sidebar_position` for new docs
- Add appropriate admonitions (:::tip, :::warning, :::danger)
- Use tables for comparisons
- Include checklists where appropriate

**Citations:**
- All claims should be supported by reputable sources
- Use inline links or footnotes
- Prefer recent sources (2023-2025)
- Include access dates for web sources

**Example Frontmatter:**
```markdown
---
sidebar_position: 3
title: Your Page Title
---

# Your Page Title

Content goes here...
```

### Code Standards

For any React/JavaScript contributions:
- Follow existing code style
- Add comments for complex logic
- Test thoroughly before submitting

### Commit Messages

Write clear, descriptive commit messages:

**Good:**
```
Add NIS2 compliance section to governance docs

- Comprehensive guide to NIS2 requirements for AI systems
- Includes practical checklist for enterprises
- Links to official resources
```

**Bad:**
```
update docs
```

### Branch Naming

Use descriptive branch names:
- `docs/add-nis2-section`
- `fix/broken-link-in-readme`
- `feature/interactive-maturity-assessment`

## Review Process

### Pull Request Process

1. **Create your Pull Request**
   - Provide clear title and description
   - Reference related issues
   - Describe what changed and why
   - Include screenshots for visual changes

2. **Review Timeline**
   - Initial review within 5 business days
   - Feedback or approval provided
   - May request changes

3. **Address Feedback**
   - Respond to review comments
   - Make requested changes
   - Request re-review when ready

4. **Merge**
   - Once approved, maintainers will merge
   - Your contribution goes live!

### What We Look For

- **Quality**: Well-written, accurate, properly formatted
- **Relevance**: Aligns with playbook's mission and audience
- **Practicality**: Provides actionable value to users
- **Citations**: Claims are properly sourced
- **Clarity**: Easy to understand and follow

### Common Reasons for Rejection

- Poor writing quality or grammar
- Unsourced or inaccurate claims
- Off-topic or promotional content
- Duplicates existing content
- Incomplete or unclear

## Community

### Get Help

- **Questions**: Use [GitHub Discussions](https://github.com/CoachSteff/ai-adoption/discussions)
- **Issues**: Report via [GitHub Issues](https://github.com/CoachSteff/ai-adoption/issues)
- **Ideas**: Start a discussion in [Ideas category](https://github.com/CoachSteff/ai-adoption/discussions/categories/ideas)

### Recognition

Contributors are recognized in several ways:
- Listed in our Contributors page (coming soon)
- Git commit history
- Mentioned in release notes for significant contributions
- Invited to join core contributor team for sustained involvement

### Stay Connected

- Watch the repository for updates
- Star the project to show support
- Share with your network

## Questions?

If you have questions about contributing, please:
1. Check existing documentation
2. Search [GitHub Discussions](https://github.com/CoachSteff/ai-adoption/discussions)
3. Open a new discussion if your question isn't answered

---

## Thank You!

Your contributions help make AI adoption more accessible and successful for organizations worldwide. Every contribution, no matter how small, makes a difference.

**Happy Contributing!** 🎉
