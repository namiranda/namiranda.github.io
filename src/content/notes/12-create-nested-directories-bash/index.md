---
title: "Create nested directories with one command"
tags: ["bash", "unix", "cli"]
date: "Jul 14 2025"
---
You can create nested directories in one command using the `-p` flag with `mkdir`. This creates parent directories as needed.

```bash
mkdir -p /path/to/nested/directories
```

The `-p` flag stands for "parents" and will create all necessary parent directories if they don't exist.

Examples:

```bash
# Create a project structure
mkdir -p project/{src,tests,docs,config}

# Create nested backup directories
mkdir -p ~/backups/$(date +%Y-%m-%d)/{database,logs,files}

# Create multiple nested paths at once
mkdir -p /tmp/app/{cache,uploads,logs} /var/www/{public,private}
```

The `-p` flag also prevents errors if directories already exist. 