# Terminal Shortcuts & Commands

Essential terminal shortcuts and commands for efficient development workflow.

## Navigation Shortcuts

### Cursor Movement

- `Ctrl + A` - Move to beginning of line
- `Ctrl + E` - Move to end of line
- `Ctrl + F` - Move forward one character
- `Ctrl + B` - Move backward one character
- `Alt + F` - Move forward one word
- `Alt + B` - Move backward one word

### Line Editing

- `Ctrl + K` - Delete from cursor to end of line
- `Ctrl + U` - Delete from cursor to beginning of line
- `Ctrl + W` - Delete word before cursor
- `Alt + D` - Delete word after cursor
- `Ctrl + Y` - Paste last deleted text
- `Ctrl + T` - Swap current and previous character

## Process Control

### Job Control

- `Ctrl + C` - Terminate current process
- `Ctrl + Z` - Suspend current process
- `Ctrl + D` - Exit current shell/EOF
- `Ctrl + L` - Clear screen
- `Ctrl + S` - Pause output
- `Ctrl + Q` - Resume output

### Background Jobs

```bash
# Run command in background
command &

# List background jobs
jobs

# Bring job to foreground
fg %1

# Send job to background
bg %1

# Kill job
kill %1
```

## History Navigation

### Command History

- `Ctrl + R` - Reverse search through history
- `Ctrl + P` - Previous command (↑)
- `Ctrl + N` - Next command (↓)
- `!!` - Repeat last command
- `!n` - Repeat command number n
- `!string` - Repeat last command starting with string

### History Commands

```bash
# Show command history
history

# Show last 10 commands
history 10

# Clear history
history -c

# Search history
history | grep "search_term"

# Execute command from history
!123
```

## File Operations

### Basic File Commands

```bash
# List files
ls -la                    # Detailed list
ls -lah                   # Human readable sizes
ls -lt                    # Sort by modification time
ls -lS                    # Sort by size

# Change directory
cd ~                      # Home directory
cd -                      # Previous directory
cd ..                     # Parent directory
cd ../..                  # Two levels up

# File operations
cp file1 file2           # Copy file
mv file1 file2           # Move/rename file
rm file                  # Remove file
rm -rf directory         # Remove directory recursively
mkdir -p path/to/dir     # Create directory with parents
```

### File Permissions

```bash
# Change permissions
chmod 755 file           # rwxr-xr-x
chmod +x file            # Add execute permission
chmod -w file            # Remove write permission

# Change ownership
chown user:group file
chown -R user:group dir  # Recursive
```

## Text Processing

### Viewing Files

```bash
# View file contents
cat file                 # Display entire file
less file                # Page through file
head file                # First 10 lines
tail file                # Last 10 lines
tail -f file             # Follow file changes
tail -n 20 file          # Last 20 lines
```

### Text Manipulation

```bash
# Search in files
grep "pattern" file      # Search for pattern
grep -r "pattern" dir    # Recursive search
grep -i "pattern" file   # Case insensitive
grep -n "pattern" file   # Show line numbers
grep -v "pattern" file   # Invert match

# Text processing
sort file                # Sort lines
uniq file                # Remove duplicates
wc file                  # Word, line, character count
cut -d',' -f1 file      # Extract first column (CSV)
awk '{print $1}' file   # Print first column
sed 's/old/new/g' file  # Replace text
```

## Network Commands

### Network Utilities

```bash
# Check connectivity
ping google.com          # Test connectivity
curl -I website.com      # Get HTTP headers
wget file_url            # Download file
ssh user@server          # Connect via SSH
scp file user@server:~   # Copy file over SSH

# Port and process info
netstat -tulpn           # Show listening ports
lsof -i :3000           # Show what's using port 3000
ps aux | grep process   # Find process
kill -9 PID             # Force kill process
```

## System Information

### System Monitoring

```bash
# System info
top                      # Running processes
htop                     # Better process viewer
ps aux                   # All running processes
df -h                    # Disk usage
du -sh *                 # Directory sizes
free -h                  # Memory usage
uptime                   # System uptime
whoami                   # Current user
id                       # User and group IDs
```

### Environment

```bash
# Environment variables
env                      # Show all variables
echo $PATH               # Show PATH variable
export VAR=value         # Set environment variable
unset VAR                # Remove variable

# System paths
which command            # Find command location
whereis command          # Find command and manual
type command             # Show command type
```

## Git Shortcuts

### Quick Git Commands

```bash
# Git aliases (add to ~/.gitconfig)
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'

# Common workflows
git add . && git commit -m "message"
git pull && git push
git checkout -b feature-branch
git merge --no-ff feature-branch
```

## Package Managers

### Node.js (npm/yarn)

```bash
# npm shortcuts
npm i                    # Install dependencies
npm i -D package         # Install dev dependency
npm i -g package         # Install globally
npm run script           # Run package script
npm ls                   # List installed packages
npm outdated             # Check for updates

# yarn shortcuts
yarn                     # Install dependencies
yarn add package         # Add dependency
yarn add -D package      # Add dev dependency
yarn global add package  # Add globally
yarn run script          # Run script
```

### System Package Managers

```bash
# macOS (Homebrew)
brew install package     # Install package
brew update              # Update Homebrew
brew upgrade             # Upgrade packages
brew list                # List installed packages
brew search package      # Search for package

# Ubuntu/Debian (apt)
sudo apt update          # Update package list
sudo apt upgrade         # Upgrade packages
sudo apt install package # Install package
apt list --installed     # List installed packages
```

## Zsh Specific Features

### Zsh Navigation

```bash
# Directory shortcuts
..                       # cd ..
...                      # cd ../..
....                     # cd ../../..

# Auto-completion
ls <TAB>                 # Complete filenames
git <TAB>                # Complete git commands
npm run <TAB>            # Complete npm scripts
```

### Zsh Plugins (Oh My Zsh)

```bash
# Git plugin shortcuts
gst                      # git status
ga                       # git add
gc                       # git commit
gp                       # git push
gl                       # git pull
gco                      # git checkout
gcb                      # git checkout -b
```

## Custom Aliases

### Useful Aliases (~/.zshrc or ~/.bashrc)

```bash
# Navigation
alias ..="cd .."
alias ...="cd ../.."
alias ll="ls -la"
alias la="ls -la"
alias l="ls -CF"

# Git shortcuts
alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gp="git push"
alias gl="git pull"

# Development
alias serve="python -m http.server 8000"
alias killport="lsof -ti:$1 | xargs kill -9"
alias myip="curl http://ipecho.net/plain; echo"

# System
alias reload="source ~/.zshrc"
alias edit="code"
alias cls="clear"

# Docker
alias dps="docker ps"
alias dpa="docker ps -a"
alias di="docker images"
alias dex="docker exec -it"
```

## Functions

### Useful Shell Functions

```bash
# Create directory and cd into it
mkcd() {
  mkdir -p "$1" && cd "$1"
}

# Extract various archive formats
extract() {
  if [ -f $1 ] ; then
    case $1 in
      *.tar.bz2)   tar xjf $1     ;;
      *.tar.gz)    tar xzf $1     ;;
      *.bz2)       bunzip2 $1     ;;
      *.rar)       unrar e $1     ;;
      *.gz)        gunzip $1      ;;
      *.tar)       tar xf $1      ;;
      *.tbz2)      tar xjf $1     ;;
      *.tgz)       tar xzf $1     ;;
      *.zip)       unzip $1       ;;
      *.Z)         uncompress $1  ;;
      *.7z)        7z x $1        ;;
      *)     echo "'$1' cannot be extracted via extract()" ;;
    esac
  else
    echo "'$1' is not a valid file"
  fi
}

# Find and kill process by name
killproc() {
  ps aux | grep $1 | grep -v grep | awk '{print $2}' | xargs kill -9
}

# Quick backup of file
backup() {
  cp "$1"{,.bak}
}
```

## Terminal Multiplexers

### tmux Shortcuts

```bash
# Session management
tmux new -s session_name # Create new session
tmux attach -t session   # Attach to session
tmux list-sessions       # List sessions
tmux kill-session -t session # Kill session

# Window management (Prefix: Ctrl+b)
Ctrl+b c                 # Create new window
Ctrl+b n                 # Next window
Ctrl+b p                 # Previous window
Ctrl+b &                 # Kill window

# Pane management
Ctrl+b %                 # Split vertically
Ctrl+b "                 # Split horizontally
Ctrl+b arrow             # Navigate panes
Ctrl+b x                 # Kill pane
```

### screen Shortcuts

```bash
# Basic commands
screen                   # Start new session
screen -S name           # Start named session
screen -r                # Reattach to session
screen -list             # List sessions

# Inside screen (Prefix: Ctrl+a)
Ctrl+a c                 # Create new window
Ctrl+a n                 # Next window
Ctrl+a p                 # Previous window
Ctrl+a d                 # Detach session
```

## Performance and Monitoring

### System Performance

```bash
# CPU and memory
top                      # Process monitor
htop                     # Enhanced process monitor
iostat                   # I/O statistics
vmstat                   # Virtual memory stats
sar                      # System activity reporter

# Disk usage
df -h                    # Filesystem usage
du -sh *                 # Directory sizes
ncdu                     # Interactive disk usage
```

### Network Monitoring

```bash
# Network activity
netstat -i               # Network interfaces
ss -tuln                 # Socket statistics
iftop                    # Network bandwidth usage
nload                    # Network load monitor
```

## Tips and Best Practices

### Productivity Tips

1. Use tab completion extensively
2. Learn and customize your shell (zsh/bash)
3. Set up useful aliases for common commands
4. Use history search (Ctrl+R) frequently
5. Master text processing tools (grep, awk, sed)
6. Use terminal multiplexers for session management
7. Learn keyboard shortcuts for your terminal emulator
8. Keep your dotfiles in version control

### Security Best Practices

1. Use SSH keys instead of passwords
2. Regularly update your system and packages
3. Be careful with sudo commands
4. Use strong passwords for user accounts
5. Enable firewall when necessary
6. Regularly backup important data
7. Use secure protocols (HTTPS, SSH, SFTP)
