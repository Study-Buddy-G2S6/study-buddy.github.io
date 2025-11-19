# Study-Buddy.github.io

Run the static site quickly with npx (from GitHub):

```
# Run the site from the repo root, serving files on port 5173
npx github:Study-Buddy-G2S6/study-buddy.github.io

# Or run with options after fetching the repo once:
npx github:Study-Buddy-G2S6/study-buddy.github.io --port 8080 --dir pages
```

You can also run the CLI locally if you have Node installed:

```
node ./bin/serve.js --port 5173 --dir .
```