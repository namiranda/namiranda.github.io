---
title: "Exclude logs with specific substring"
tags: ["kibana", "KQL"]
date: "Jul 11 2024"
---
In Kibana you can use KQL to search logs that do not contain a certain string by using the **'not'** operator combined with the **wildcard** operator **('*')**
to construct your query.

For example, if you want to find logs that do not contain the string "error", you can use the following KQL query:

```
not message:*error*
```
This query will match all logs where the *message* field does not contain the substring "error".

