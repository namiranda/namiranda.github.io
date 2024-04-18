---
title: "Recover deleted branch"
tags: ["git", "cli"]
date: "Feb 22 2024"
---
To recover a deleted branch we just need the SHA value of the commit to which the branch pointed when it was deleted.
A useful command to do this is 

```git
git reflog 
```
This prints the logs of when the tips of branches and other references were updated in the local repository.
Now, copy the SHA value you need and run: 

```bash
git checkout -b <branch_name> <SHA_value>
git push --set-upstream origin <branch_name>
```
Example: 
```bash
git checkout -b develop 055564ff81c
git push --set-upstream origin develop
```
Your branch is back in the remote repository! 😌