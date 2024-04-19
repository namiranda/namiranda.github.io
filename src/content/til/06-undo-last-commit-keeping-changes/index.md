---
title: "Undo the last commit keeping the changes"
tags: ["git", "config"]
date: "Apr 10 2024"
---
To delete the last commit locally, while retaining the changes that were made, you can use the `reset` command:

```bash
git reset --soft HEAD~1
```
This command is useful when you realize that your last commit is incomplete or if there are mistakes in your commit message. It leaves the working tree as it was before the reset.

However, remembering this command might not be easy. In such cases, you can create a Git alias by adding the following lines to your `~/.gitconfig` file:

```text
[alias]
    uncommit = reset --soft HEAD~1
```
After adding this alias, you can use the command `git uncommit` instead of `git reset --soft HEAD~1`:

```bash
git uncommit
```

_ref: https://git-scm.com/docs/git-reset_