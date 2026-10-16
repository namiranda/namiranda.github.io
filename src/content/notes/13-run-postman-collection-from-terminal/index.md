---
title: "Run Postman collections from the terminal with Newman and Make"
tags: ["testing", "postman", "cli", "make"]
date: "Apr 18 2026"
---
You can run your Postman collections outside of the Postman app using [Newman](https://github.com/postmanlabs/newman), Postman's CLI runner.
 
First, install Newman:
 
```bash
npm install -g newman
```
 
Export your collection from Postman as a JSON file and place it in your repository. Then run it:
 
```bash
newman run collection.json
```
 
If your collection uses an environment, pass it with the `--environment` flag:
 
```bash
newman run collection.json --environment environment.json
```
 
To make it easy to run from any repo without remembering the command, add a target to your `Makefile`:
 
```makefile
smoke-test:
	newman run postman/collection.json --environment postman/environment.json
```
 
Then just run:
 
```bash
make smoke-test
```
 
This is useful for running smoke tests on CI or after a deploy, without needing the Postman app installed.
 