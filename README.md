# Wine 🍇

Inspired by a wine flavour wheel I came across (similar to
[this one](https://winefolly.com/tips/wine-aroma-wheel-100-flavors/)) and the
interactions from "[How We Feel](https://howwefeel.org/)", I wanted to create a
tool to help identify tastes in wine.

## Built with

Deno Fresh and Tailwind, hosted on Deno Deploy.

If you're running locally, clone the repo and start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.


## Deploying

~I didn't want to bother with creating a GH action for deploying this, so next time you want to deploy, do the following:~

1. ~Ensure you have [`deployctl` installed](https://docs.deno.com/deploy/manual/deployctl).~
2. ~Run `deployctl` from the root of the project.~
3. ~That's it! This will push your source to Deno which will build and deploy.~

Errh - seems like Deno Deploy's GH integration automatically sets up the correct action. Feel free to simply push to `main` to deploy.
