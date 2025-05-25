# Git Commands Reference

Essential Git commands for daily development workflow.

## Basic Commands

### Repository Setup

```bash
# Initialize new repository
git init

# Clone existing repository
git clone <repository-url>

# Add remote origin
git remote add origin <repository-url>
```

### Daily Workflow

```bash
# Check status
git status

# Add files to staging
git add .                    # Add all files
git add <filename>           # Add specific file
git add *.js                 # Add all JS files

# Commit changes
git commit -m "Commit message"
git commit -am "Add and commit"  # Add and commit tracked files

# Push changes
git push origin main
git push -u origin main      # Set upstream and push
```

## Branching

### Branch Management

```bash
# List branches
git branch                   # Local branches
git branch -r               # Remote branches
git branch -a               # All branches

# Create and switch to branch
git checkout -b feature-name
git switch -c feature-name   # Modern alternative

# Switch branches
git checkout main
git switch main             # Modern alternative

# Delete branch
git branch -d feature-name   # Safe delete
git branch -D feature-name   # Force delete
```

### Merging

```bash
# Merge branch into current branch
git merge feature-name

# Merge with no fast-forward
git merge --no-ff feature-name

# Abort merge
git merge --abort
```

## History and Logs

### Viewing History

```bash
# View commit history
git log
git log --oneline           # Compact view
git log --graph --oneline   # Visual graph
git log -p                  # Show patches

# View specific file history
git log <filename>
git log --follow <filename> # Follow renames

# Show changes
git show <commit-hash>
git diff                    # Working directory vs staging
git diff --staged           # Staging vs last commit
git diff HEAD~1             # Compare with previous commit
```

## Undoing Changes

### Working Directory

```bash
# Discard changes in working directory
git checkout -- <filename>
git restore <filename>      # Modern alternative

# Discard all changes
git checkout -- .
git restore .
```

### Staging Area

```bash
# Unstage files
git reset HEAD <filename>
git restore --staged <filename>  # Modern alternative

# Unstage all files
git reset HEAD
```

### Commits

```bash
# Amend last commit
git commit --amend -m "New message"

# Reset to previous commit (keep changes)
git reset --soft HEAD~1

# Reset to previous commit (discard changes)
git reset --hard HEAD~1

# Revert commit (create new commit)
git revert <commit-hash>
```

## Remote Operations

### Fetching and Pulling

```bash
# Fetch changes from remote
git fetch origin

# Pull changes (fetch + merge)
git pull origin main

# Pull with rebase
git pull --rebase origin main
```

### Pushing

```bash
# Push to remote
git push origin main

# Force push (use carefully!)
git push --force-with-lease origin main

# Push new branch
git push -u origin feature-name
```

## Stashing

### Basic Stashing

```bash
# Stash current changes
git stash
git stash push -m "Work in progress"

# List stashes
git stash list

# Apply stash
git stash apply             # Keep stash
git stash pop              # Apply and remove stash

# Apply specific stash
git stash apply stash@{2}

# Drop stash
git stash drop stash@{0}
```

## Rebasing

### Interactive Rebase

```bash
# Rebase last 3 commits
git rebase -i HEAD~3

# Rebase onto main
git rebase main

# Continue rebase after resolving conflicts
git rebase --continue

# Abort rebase
git rebase --abort
```

## Configuration

### Global Configuration

```bash
# Set user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch
git config --global init.defaultBranch main

# Set default editor
git config --global core.editor "code --wait"

# View configuration
git config --list
```

### Useful Aliases

```bash
# Add aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

## Advanced Commands

### Cherry Picking

```bash
# Apply specific commit to current branch
git cherry-pick <commit-hash>

# Cherry pick without committing
git cherry-pick --no-commit <commit-hash>
```

### Bisect (Finding Bugs)

```bash
# Start bisect
git bisect start
git bisect bad              # Current commit is bad
git bisect good <commit>    # Known good commit

# Continue bisecting
git bisect good             # Current commit is good
git bisect bad              # Current commit is bad

# End bisect
git bisect reset
```

### Worktree

```bash
# Create new worktree
git worktree add ../feature-branch feature-name

# List worktrees
git worktree list

# Remove worktree
git worktree remove ../feature-branch
```

## Troubleshooting

### Common Issues

```bash
# Fix "detached HEAD"
git checkout main

# Recover deleted branch
git reflog
git checkout -b recovered-branch <commit-hash>

# Remove untracked files
git clean -f                # Remove files
git clean -fd               # Remove files and directories
git clean -n                # Dry run (preview)

# Fix line ending issues
git config core.autocrlf true    # Windows
git config core.autocrlf input   # Mac/Linux
```

### Conflict Resolution

```bash
# During merge conflicts
git status                  # See conflicted files
# Edit files to resolve conflicts
git add <resolved-files>
git commit

# Abort merge
git merge --abort

# Use merge tool
git mergetool
```

## Git Flow Commands

### Feature Development

```bash
# Start feature
git checkout -b feature/new-feature main

# Work on feature
git add .
git commit -m "Add new feature"

# Finish feature
git checkout main
git merge --no-ff feature/new-feature
git branch -d feature/new-feature
git push origin main
```

### Hotfix

```bash
# Start hotfix
git checkout -b hotfix/critical-fix main

# Fix and commit
git add .
git commit -m "Fix critical bug"

# Merge to main
git checkout main
git merge --no-ff hotfix/critical-fix
git tag -a v1.0.1 -m "Version 1.0.1"
git branch -d hotfix/critical-fix
```

## Best Practices

### Commit Messages

- Use imperative mood: "Add feature" not "Added feature"
- Keep first line under 50 characters
- Use body to explain what and why, not how
- Reference issues: "Fixes #123"

### Branching Strategy

- Use descriptive branch names: `feature/user-authentication`
- Keep branches short-lived
- Regularly sync with main branch
- Delete merged branches

### General Tips

- Commit often, push regularly
- Write meaningful commit messages
- Use `.gitignore` for generated files
- Never commit sensitive information
- Use signed commits for security

## Useful Git Hooks

### Pre-commit Hook

```bash
#!/bin/sh
# Run tests before commit
npm test
if [ $? -ne 0 ]; then
  echo "Tests failed. Commit aborted."
  exit 1
fi
```

### Pre-push Hook

```bash
#!/bin/sh
# Run linting before push
npm run lint
if [ $? -ne 0 ]; then
  echo "Linting failed. Push aborted."
  exit 1
fi
```
