---
title: "Delete the last N commits locally and in the remote"
tags: ["git"]
date: "Aug 07 2024"
---
If you want to remove the 2 (two) last commits, you can use the `git reset` command with `hard` mode:

```bash
git reset --hard HEAD~2
```
You can change the `2` for any number of last commits you want to remove

To push this change to remote, you need to do a `git push` with the *force* (-f) parameter:

```bash
git push -f
```

_ref: https://git-scm.com/docs/git-reset_