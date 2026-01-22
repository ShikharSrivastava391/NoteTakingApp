/**
 * Hello World Plugin
 * A simple example demonstrating NoteMakingApp plugin capabilities
 */

// Plugin activation function - called when plugin is enabled
export function activate(context, NoteMakingApp) {

  try {
    // Show a welcome notification
    NoteMakingApp.notifications.show({
      type: 'success',
      title: 'Hello World Plugin',
      message: 'Plugin successfully activated! 👋',
      duration: 3000
    });

    // Register a command
    NoteMakingApp.commands.register({
      id: 'helloWorld.greet',
      name: 'Hello World: Greet',
      description: 'Shows a friendly greeting',
      execute: () => {
        NoteMakingApp.notifications.success(
          'Hello from the Hello World plugin!',
          'Greetings',
          4000
        );
      }
    });

    // Register a slash command to insert greeting text
    NoteMakingApp.editor.addSlashCommand({
      name: 'hello',
      description: 'Insert a friendly greeting',
      icon: '👋',
      execute: async () => {
        try {
          await NoteMakingApp.editor.insertNode('paragraph', {}, 'Hello from NoteMakingApp! 👋');
          NoteMakingApp.notifications.success('Greeting inserted!', null, 2000);
        } catch (error) {
          NoteMakingApp.notifications.error('Failed to insert greeting', null, 3000);
          console.error('Insert error:', error);
        }
      }
    });

    // Register another command to insert custom greeting
    NoteMakingApp.commands.register({
      id: 'helloWorld.insertGreeting',
      name: 'Hello World: Insert Greeting',
      shortcut: 'Mod-Shift-H',
      description: 'Inserts a custom greeting into the editor',
      execute: async () => {
        try {
          const selection = await NoteMakingApp.editor.getSelection();

          if (selection && !selection.empty) {
            // Replace selected text with greeting
            await NoteMakingApp.editor.replaceSelection(`Hello, ${selection.text}! 👋`);
          } else {
            // Insert at cursor
            await NoteMakingApp.editor.insertNode('paragraph', {}, 'Hello from the Hello World plugin! 👋');
          }

          NoteMakingApp.notifications.success('Greeting inserted!');
        } catch (error) {
          NoteMakingApp.notifications.error('Failed to insert greeting');
          console.error('Insert error:', error);
        }
      }
    });

    // Add a toolbar button
    NoteMakingApp.editor.addToolbarItem({
      id: 'hello-world-button',
      title: 'Say Hello',
      icon: '👋',
      group: 'plugin',
      handler: () => {
        NoteMakingApp.notifications.info('Hello from the toolbar! 👋');
      }
    });


  } catch (error) {
    console.error('Hello World plugin activation error:', error);
    NoteMakingApp.notifications.error(
      'Failed to activate Hello World plugin',
      'Plugin Error',
      5000
    );
  }
}

// Plugin deactivation function - called when plugin is disabled
export function deactivate(NoteMakingApp) {

  try {
    // Show goodbye notification
    NoteMakingApp.notifications.show({
      type: 'info',
      title: 'Hello World Plugin',
      message: 'Plugin deactivated. Goodbye! 👋',
      duration: 2000
    });
  } catch (error) {
    console.error('Hello World plugin deactivation error:', error);
  }
}

// Default export for CommonJS compatibility
export default {
  activate,
  deactivate
};
