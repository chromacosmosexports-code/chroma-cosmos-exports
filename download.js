const fs = require('fs');
const https = require('https');

const download = (url, dest) => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => fs.writeFileSync(dest, data));
  });
};

download("https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzhkNWFiMTg3ZGU2ZDRlNTdiMzIxNjJjNzFkYjI2MTNkEgsSBxCwi5PFmxEYAZIBIwoKcHJvamVjdF9pZBIVQhM0NTE4NTYxNDQzMjE1NTE0NzMz&filename=&opi=89354086", "index.html");
download("https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2NiMDVmZTA1NWEzNzQ0ZTc5MjY1NDYxYjRmMWY5ZTY4EgsSBxCwi5PFmxEYAZIBIwoKcHJvamVjdF9pZBIVQhM0NTE4NTYxNDQzMjE1NTE0NzMz&filename=&opi=89354086", "about.html");
download("https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzMyYzFmNWJkZDA5ZjQ3MjliMWMzZWFiZTgwYTBiZDIwEgsSBxCwi5PFmxEYAZIBIwoKcHJvamVjdF9pZBIVQhM0NTE4NTYxNDQzMjE1NTE0NzMz&filename=&opi=89354086", "products.html");
