---
title: "Find columns by name across the schema"
tags: ["database","SQL", "MySQL"]
date: "Mar 14 2024"
---
Here is one way to find which tables in a schema contain a certain column name in MYSQL.

```mysql
SELECT COLUMN_NAME, TABLE_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME like '%mail%'
  AND TABLE_SCHEMA = 'company';
```

The results will look like this:

| COLUMN_NAME |TABLE_NAME |
|-------------|:---------:|
| mail        |forms      |
| mail_user   |forms      |
| replymail   |shops      |