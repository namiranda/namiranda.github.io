---
title: "Using COALESCE to handle null values"
tags: ["database","SQL", "MySQL"]
date: "Aug 02 2024"
---
The `COALESCE` function in SQL is useful when you want to take a value but use a default if it’s null. `COALESCE` returns the first non-null value from a list of arguments.

For example:

```sql
SELECT symbol FROM currency c
WHERE c.currency_id = COALESCE(payment.currency_id, 1)
```

In this query, `COALESCE(payment.currency_id, 1)` returns `payment.currency_id` if it’s not `null`; otherwise, it returns `1`. This ensures you always get a valid currency ID, avoiding potential null value issues.

