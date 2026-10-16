---
title: "Set config for a single repository"
tags: ["git", "config"]
date: "Mar 28 2024"
---
One fundamental aspect of Git is setting up your user information, including the username and email address.
While typically configured globally for all repositories on your system, there are instances where you might want to set them up specifically for a single repository.

To accomplish this you need to run the following commands in the repository directory 

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```
These commands will configure your user information specifically for this repository.
To verify that the configuration has been set correctly, you can use:
```bash
git config user.name
git config user.email
```
These commands will display the configured username and email for the repository :octocat:.