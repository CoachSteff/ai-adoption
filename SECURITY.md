# Security Policy

## Reporting a Vulnerability

The Open-Source AI Adoption Playbook team takes security seriously. We appreciate your efforts to responsibly disclose your findings.

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing:

**[INSERT SECURITY EMAIL HERE - e.g., security@example.com]**

You should receive a response within 48 hours. If for some reason you do not, please follow up to ensure we received your original message.

### What to Include

Please include the following information in your report:

- Type of vulnerability
- Full paths of source file(s) related to the manifestation of the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the vulnerability, including how an attacker might exploit it

### What to Expect

- **Acknowledgment**: We'll acknowledge receipt of your vulnerability report within 48 hours
- **Assessment**: We'll investigate and validate the vulnerability
- **Communication**: We'll keep you informed of our progress
- **Resolution**: We'll work on a fix and coordinate disclosure timing with you
- **Credit**: With your permission, we'll publicly thank you for the responsible disclosure

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Security Best Practices

While this is primarily a documentation project, we follow security best practices:

### For Contributors

- **Dependencies**: Regularly update npm dependencies
- **Code Review**: All PRs require review before merging
- **Sensitive Data**: Never commit API keys, passwords, or sensitive information
- **Build Process**: Use secure build pipelines

### For Users

- **Clone Safety**: Always clone from the official repository
- **Verify Sources**: Check the authenticity of any forked versions
- **Report Issues**: If you see something suspicious, report it

## Known Security Considerations

### Documentation Project

As a documentation project, the primary security considerations are:

1. **Content Integrity**: Ensuring documentation accuracy and preventing misleading information
2. **Link Safety**: Verifying external links lead to legitimate sources
3. **Build Process**: Securing the Docusaurus build and deployment pipeline
4. **Dependencies**: Keeping npm packages up to date

### No User Data Collection

This project does not collect, store, or process user data. The website is static and does not have backend services or databases.

## Security Updates

Security updates will be:
- Released as quickly as possible
- Documented in CHANGELOG.md
- Announced via GitHub Security Advisories
- Tagged with appropriate severity levels

## Third-Party Dependencies

We rely on several third-party packages:
- Docusaurus and its dependencies
- Node.js ecosystem packages

We regularly:
- Review dependency updates
- Run `npm audit` checks
- Update dependencies promptly
- Monitor security advisories

## Disclosure Policy

- Security issues are handled privately until a fix is available
- We coordinate public disclosure with reporters
- We aim to disclose within 90 days of initial report
- We may request embargo extensions for complex issues

## Contact

For security-related questions or concerns:
- **General**: Open a GitHub Discussion
- **Vulnerabilities**: Email [INSERT SECURITY EMAIL]
- **Urgent**: Use email with "URGENT" in subject

---

Thank you for helping keep the Open-Source AI Adoption Playbook and our community safe!
