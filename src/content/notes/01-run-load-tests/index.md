---
title: "Run load tests"
tags: ["http", "testing"]
date: "Feb 18 2024"
---
An easy way to hit your API with a lot of requests in a short period of time is to use [K6](https://k6.io/)

Once it's installed in your system, create a new script 

```bash
 k6 new script.js
```

Edit the file with your request 

```javascript
import http from 'k6/http';

export const options = {
    vus: 10,
    duration: '30s'
}

export default function () {
  const url = 'http://localhost:3000/challenge';
  const payload = JSON.stringify({
    id: '123456',
    challenge_value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'api_key': '0000001_private'
    },
  };

  http.post(url, payload, params);
}
```

And run the script
```bash
k6 run script.js
```