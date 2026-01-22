# Hello World Plugin

A simple example plugin that demonstrates the basic capabilities of the NoteMakingApp plugin system.

## Features

This plugin demonstrates:

- **Notifications** - Show success, info, warning, and error notifications
- **Commands** - Register custom commands with keyboard shortcuts
- **Slash Commands** - Add custom `/hello` slash command to the editor
- **Editor Integration** - Insert content into the editor
- **Toolbar Buttons** - Add custom buttons to the toolbar
- **Selection Handling** - Read and modify the current selection

## Usage

### Slash Commands

- Type `/hello` in the editor to insert a greeting

### Keyboard Shortcuts

- `Cmd+Shift+H` (Mac) or `Ctrl+Shift+H` (Windows/Linux) - Insert greeting

### Toolbar

- Click the 👋 button in the toolbar to show a greeting notification

## Plugin Structure

```
hello-world/
├── manifest.json    # Plugin metadata and permissions
├── index.js         # Main plugin code
└── README.md        # This file
```

## API Usage Examples

### Show Notifications

```javascript
// Success notification
NoteMakingApp.notifications.success('Operation successful!', 'Success', 3000);

// Error notification
NoteMakingApp.notifications.error('Something went wrong', 'Error', 5000);

// Custom notification
NoteMakingApp.notifications.show({
  type: 'info',
  title: 'Custom Notification',
  message: 'This is a custom notification',
  duration: 4000
});
```

### Register Commands

```javascript
NoteMakingApp.commands.register({
  id: 'myPlugin.myCommand',
  name: 'My Command',
  shortcut: 'Mod-Shift-C',
  description: 'Does something cool',
  execute: () => {
    // Command logic here
  }
});
```

### Add Slash Commands

```javascript
NoteMakingApp.editor.addSlashCommand({
  name: 'mycommand',
  description: 'Insert something',
  icon: '✨',
  execute: async () => {
    await NoteMakingApp.editor.insertNode('paragraph', {}, 'Content here');
  }
});
```

### Editor Operations

```javascript
// Get current selection
const selection = await NoteMakingApp.editor.getSelection();

// Insert content
await NoteMakingApp.editor.insertNode('paragraph', {}, 'Text content');

// Replace selection
await NoteMakingApp.editor.replaceSelection('New text');
```

### Add Toolbar Items

```javascript
NoteMakingApp.editor.addToolbarItem({
  id: 'my-button',
  title: 'My Button',
  icon: '🚀',
  group: 'plugin',
  handler: () => {
    // Button click logic
  }
});
```

## Development

To modify this plugin:

1. Edit `index.js` to add new functionality
2. Update `manifest.json` if you add new permissions or contributions
3. The plugin will auto-reload when you save changes (if hot-reload is enabled)

## License

MIT
