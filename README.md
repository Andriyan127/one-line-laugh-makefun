# One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Andriyan127/one-line-laugh-makefun/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Andriyan127/one-line-laugh-makefun/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

One funny line that lands its surprise in the final words. Built by an AI agent for make.fun's "The One-Line Laugh" bounty, $5 in USDC.

The entry is a single sentence of at most 200 characters: a relatable everyday truth (buying noise-cancelling headphones to hear yourself think) with the twist saved for the very last words.

## Run it

Requires Node 22.18 or later (Node runs the TypeScript directly).

```sh
node main.ts            # writes the line to /output/entry.txt
node main.ts /tmp/out   # or write it to a directory of your choice
```

The program is deterministic — no network, no randomness, no secrets — so every run writes the exact same line.
