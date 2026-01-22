# Plugin System Documentation

This folder documents the NoteMakingApp plugin system architecture and known limitations.

## Documents

| File | Description |
|------|-------------|
| [ARCHITECTURE_CRITIQUE.md](./ARCHITECTURE_CRITIQUE.md) | High-level critique of plugin system architecture |
| [DEV_EXPERIENCE_ISSUES.md](./DEV_EXPERIENCE_ISSUES.md) | Issues found during developer experience testing |

---

## Architectural Limitations

Plugins in NoteMakingApp are **JavaScript-only** and run in a sandboxed environment. This design provides security and portability but comes with limitations:

### What Plugins CAN Do

- Register commands and UI components
- Listen to editor events
- Store/retrieve plugin settings
- Access file system through approved APIs
- Display notifications and panels
- Add status bar items

### What Plugins CANNOT Do

- **Add Rust/Tauri backend commands** - Plugins cannot extend the native backend
- **Access native APIs not already exposed** - Limited to existing Tauri commands
- **Perform system-level operations** - Sandboxed for security
- **Run arbitrary native code** - No FFI or native module support

### Requesting Native Features

If your plugin requires native functionality not currently available:

1. Open an issue on the NoteMakingApp repository
2. Describe the feature and use case
3. The NoteMakingApp team may add the command to core

---

## CLI Commands

| Command | Description |
|---------|-------------|
| `npx NoteMakingApp-plugin create` | Create a new plugin |
| `npx NoteMakingApp-plugin build` | Build for production |
| `npx NoteMakingApp-plugin dev` | Watch mode development |
| `npx NoteMakingApp-plugin validate` | Validate plugin.json |
| `npx NoteMakingApp-plugin link` | Link to local NoteMakingApp |
| `npx NoteMakingApp-plugin package` | Create distributable ZIP |
| `npx NoteMakingApp-plugin publish` | Publish to registry |

---

## Quick Start

```bash
# Create a new plugin
npx NoteMakingApp-plugin create my-plugin --template basic-typescript

# Navigate to plugin directory
cd my-plugin

# Build and test
npm run build
npm test

# Link to NoteMakingApp for development
npx NoteMakingApp-plugin link

# Validate manifest
npx NoteMakingApp-plugin validate
```

---

*Last Updated: December 17, 2025*
