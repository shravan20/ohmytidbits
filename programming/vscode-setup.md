# VS Code Setup

Complete guide to setting up VS Code for optimal development experience.

## Essential Extensions

### Core Development
- **Prettier - Code formatter** - Automatic code formatting
- **ESLint** - JavaScript/TypeScript linting
- **GitLens** - Enhanced Git capabilities
- **Auto Rename Tag** - Automatically rename paired HTML/XML tags
- **Bracket Pair Colorizer 2** - Colorize matching brackets
- **indent-rainbow** - Colorize indentation levels

### Language Support
- **TypeScript Hero** - Additional TypeScript functionality
- **ES7+ React/Redux/React-Native snippets** - React code snippets
- **Python** - Python language support
- **Go** - Go language support
- **Rust** - Rust language support

### Productivity
- **Live Server** - Local development server with live reload
- **REST Client** - Test REST APIs directly in VS Code
- **Thunder Client** - Lightweight REST API client
- **Todo Tree** - Highlight TODO comments
- **Better Comments** - Improve comment highlighting

### Themes & UI
- **One Dark Pro** - Popular dark theme
- **Material Icon Theme** - Beautiful file icons
- **Dracula Official** - Dracula theme
- **Night Owl** - Theme optimized for night owls

## Settings Configuration

### User Settings (settings.json)
```json
{
  // Editor
  "editor.fontSize": 14,
  "editor.fontFamily": "'Fira Code', 'Cascadia Code', Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.lineHeight": 1.5,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "boundary",
  "editor.rulers": [80, 120],
  
  // Formatting
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  
  // Files
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.git": true,
    "**/.DS_Store": true
  },
  
  // Terminal
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.shell.osx": "/bin/zsh",
  "terminal.integrated.cursorStyle": "line",
  
  // Git
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.autofetch": true,
  
  // Emmet
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  
  // Language specific
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  
  // Explorer
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  
  // Workbench
  "workbench.startupEditor": "newUntitledFile",
  "workbench.editor.enablePreview": false,
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme"
}
```

## Keyboard Shortcuts

### Custom Keybindings (keybindings.json)
```json
[
  {
    "key": "cmd+d",
    "command": "editor.action.duplicateSelection"
  },
  {
    "key": "cmd+shift+k",
    "command": "editor.action.deleteLines"
  },
  {
    "key": "cmd+shift+up",
    "command": "editor.action.moveLinesUpAction"
  },
  {
    "key": "cmd+shift+down",
    "command": "editor.action.moveLinesDownAction"
  },
  {
    "key": "cmd+k cmd+f",
    "command": "editor.action.formatDocument"
  },
  {
    "key": "cmd+shift+p",
    "command": "workbench.action.showCommands"
  }
]
```

### Essential Shortcuts
- `Cmd/Ctrl + P` - Quick file open
- `Cmd/Ctrl + Shift + P` - Command palette
- `Cmd/Ctrl + Shift + F` - Search across files
- `Cmd/Ctrl + D` - Select next occurrence
- `Cmd/Ctrl + Shift + L` - Select all occurrences
- `Alt + Click` - Multiple cursors
- `Cmd/Ctrl + /` - Toggle line comment
- `Cmd/Ctrl + Shift + /` - Toggle block comment
- `Cmd/Ctrl + B` - Toggle sidebar
- `Cmd/Ctrl + J` - Toggle terminal

## Workspace Configuration

### .vscode/settings.json (Project-specific)
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "javascript.suggest.autoImports": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.workingDirectories": ["./src"],
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/*.log": true
  }
}
```

### .vscode/extensions.json (Recommended Extensions)
```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "eamodio.gitlens",
    "formulahendry.auto-rename-tag",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "ms-python.python"
  ]
}
```

## Snippets

### Custom JavaScript/TypeScript Snippets
```json
{
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';",
      "",
      "interface ${1:ComponentName}Props {",
      "  $2",
      "}",
      "",
      "export const ${1:ComponentName}: React.FC<${1:ComponentName}Props> = ({ $3 }) => {",
      "  return (",
      "    <div>",
      "      $4",
      "    </div>",
      "  );",
      "};",
      "",
      "export default ${1:ComponentName};"
    ],
    "description": "React functional component with TypeScript"
  },
  "Console Log": {
    "prefix": "clg",
    "body": ["console.log('$1', $1);"],
    "description": "Console log with label"
  },
  "Try Catch": {
    "prefix": "tryc",
    "body": [
      "try {",
      "  $1",
      "} catch (error) {",
      "  console.error('$2:', error);",
      "  $3",
      "}"
    ],
    "description": "Try catch block"
  }
}
```

## Debugging Configuration

### .vscode/launch.json
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Node.js",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/src/index.js",
      "console": "integratedTerminal",
      "env": {
        "NODE_ENV": "development"
      }
    },
    {
      "name": "Launch Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src"
    },
    {
      "name": "Attach to Node.js",
      "type": "node",
      "request": "attach",
      "port": 9229,
      "restart": true,
      "localRoot": "${workspaceFolder}",
      "remoteRoot": "."
    }
  ]
}
```

## Tasks Configuration

### .vscode/tasks.json
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "npm: start",
      "type": "npm",
      "script": "start",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    },
    {
      "label": "npm: test",
      "type": "npm",
      "script": "test",
      "group": "test",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    },
    {
      "label": "npm: build",
      "type": "npm",
      "script": "build",
      "group": "build"
    }
  ]
}
```

## Font Recommendations

### Programming Fonts
- **Fira Code** - Popular font with ligatures
- **Cascadia Code** - Microsoft's programming font
- **JetBrains Mono** - Font designed for developers
- **Source Code Pro** - Adobe's monospaced font
- **Inconsolata** - Humanist monospaced font

### Font Installation (macOS)
```bash
# Install Fira Code via Homebrew
brew tap homebrew/cask-fonts
brew install --cask font-fira-code

# Install JetBrains Mono
brew install --cask font-jetbrains-mono
```

## Performance Optimization

### Settings for Better Performance
```json
{
  "files.watcherExclude": {
    "**/node_modules/**": true,
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/dist/**": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/*.log": true
  },
  "files.exclude": {
    "**/node_modules": true,
    "**/.git": true,
    "**/.DS_Store": true,
    "**/dist": true
  },
  "typescript.disableAutomaticTypeAcquisition": true,
  "extensions.autoUpdate": false
}
```

## Multi-root Workspaces

### workspace.code-workspace
```json
{
  "folders": [
    {
      "name": "Frontend",
      "path": "./frontend"
    },
    {
      "name": "Backend",
      "path": "./backend"
    },
    {
      "name": "Shared",
      "path": "./shared"
    }
  ],
  "settings": {
    "typescript.preferences.includePackageJsonAutoImports": "on"
  },
  "extensions": {
    "recommendations": [
      "esbenp.prettier-vscode",
      "dbaeumer.vscode-eslint"
    ]
  }
}
```

## Useful Commands

### Command Palette Commands
- `Developer: Reload Window` - Reload VS Code window
- `Preferences: Open Settings (JSON)` - Open settings file
- `Preferences: Open Keyboard Shortcuts (JSON)` - Open keybindings
- `Developer: Toggle Developer Tools` - Open DevTools
- `View: Toggle Terminal` - Show/hide terminal
- `Git: Clone` - Clone repository
- `Format Document` - Format current file

## Troubleshooting

### Common Issues
```bash
# Reset VS Code settings
rm -rf ~/Library/Application\ Support/Code/User/settings.json

# Clear extension cache
rm -rf ~/.vscode/extensions

# Reset workspace settings
rm -rf .vscode/

# Fix TypeScript issues
# Command Palette > TypeScript: Restart TS Server
```

### Performance Issues
- Disable unused extensions
- Exclude large directories from file watcher
- Reduce number of open editors
- Use workspace-specific settings
- Clear search index: `Developer: Reload Window`

## Tips and Tricks

### Productivity Tips
1. Use Zen Mode (`Cmd/Ctrl + K Z`) for distraction-free coding
2. Split editor (`Cmd/Ctrl + \`) for side-by-side editing
3. Use breadcrumbs for navigation
4. Pin frequently used tabs
5. Use workspaces for project organization
6. Master multi-cursor editing
7. Use integrated terminal for workflow efficiency
8. Customize status bar for relevant information

### Hidden Features
- `Cmd/Ctrl + Shift + E` - Focus on Explorer
- `Cmd/Ctrl + Shift + G` - Focus on Source Control
- `Cmd/Ctrl + Shift + D` - Focus on Debug
- `Cmd/Ctrl + Shift + X` - Focus on Extensions
- `Cmd/Ctrl + K, Cmd/Ctrl + S` - Keyboard shortcuts
- `Cmd/Ctrl + K, V` - Open Markdown preview to side
