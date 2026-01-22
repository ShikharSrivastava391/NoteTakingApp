# Security Policy

## Supported Versions

Currently supported versions for security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.3.x   | ✅ Yes             |
| < 1.3   | ❌ No              |

## Reporting a Vulnerability

**PLEASE DO NOT** open public GitHub issues for security vulnerabilities.

### How to Report

Email: **security@NoteMakingAppmd.com**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Any suggested fixes (optional)
- Your name/handle for acknowledgment (optional)

### What to Expect

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Depends on severity
  - Critical: 1-3 days
  - High: 1-2 weeks
  - Medium: 2-4 weeks
  - Low: Next planned release

### Disclosure Policy

- We request 90 days before public disclosure
- We will credit you in the fix release (if you wish)
- We may award recognition in our Hall of Fame

## Security Measures

NoteMakingApp implements several security measures:

### Code Signing
- **macOS**: Developer ID Application certificate
- **Verification**: Hardened runtime enabled
- **Notarization**: All macOS builds notarized by Apple

### Data Security
- **Local Storage**: All data stored locally (no cloud sync)
- **Encryption**: System keychain for OAuth tokens
- **Permissions**: Minimal required permissions

### Plugin System (Future)
- **Sandboxing**: Plugins run in restricted environment
- **Permissions**: Explicit permission grants
- **Validation**: Plugin manifest validation

### Build Security
- **CI/CD**: GitHub Actions with secret management
- **Dependencies**: Regular security audits via Dependabot
- **Updates**: Signed updates with public key verification

## Known Security Considerations

1. **OAuth Tokens**: Stored in system keychain (macOS Keychain) - as secure as your OS
2. **File Access**: NoteMakingApp requires broad file system access for workspace management
3. **Auto-Updates**: Downloads from GitHub releases (verified via signature)

## Security Best Practices for Users

1. **Keep NoteMakingApp Updated**: Enable auto-updates
2. **Secure Your Workspace**: Don't share workspace folders with untrusted users
3. **OAuth Caution**: Review Gmail permissions before connecting
4. **Backups**: Maintain backups (NoteMakingApp data is local-only)
5. **System Security**: Keep your OS and security software updated

## Vulnerability Disclosure History

No vulnerabilities disclosed to date.

## Contact

- **Security Issues**: security@NoteMakingAppmd.com
- **General Support**: support@NoteMakingAppmd.com
- **GitHub Issues**: https://github.com/NoteMakingApp-ai/NoteMakingApp/issues (non-security bugs only)

## Open Source

NoteMakingApp is open-source. You can review our security implementation:
https://github.com/NoteMakingApp-ai/NoteMakingApp

## Acknowledgments

We thank security researchers who help keep NoteMakingApp secure. Responsible disclosures are appreciated and will be credited.
