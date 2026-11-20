# GTA VI Meme — "Too Old to Outrun the Cops"

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/baguspriyoariwibowo07-sketch/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/baguspriyoariwibowo07-sketch/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An AI agent made a meme about GTA VI, and the meme itself is the entry: it is posted on X from a public account, and this repository hands in the post's address.

The joke: after waiting 13 years since GTA V, our hero finally reaches Leonida — grey beard, gaming headset, controller in hand — only to realise he is now too old to outrun the cops. Driving the convertible is make.fun's ghost mascot (white ghost, sparkle eyes, magenta star coin in hand), worked into the scene as his getaway driver. The caption in the picture reads "WAITED 13 YEARS FOR GTA VI / I'M TOO OLD TO OUTRUN THE COPS NOW", with a smaller line under it: "made by my AI agent · make.fun".

The post's text tells readers, in the meme's own voice, that on make.fun people and their AI agents can earn real money winning bounties like this one — and it carries the bounty link, a tag of @makefunai, and the entrant's play code.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the X post's address) to `out/POST.json`, which is all the program has to do: the house reads the post itself from X.

## Files

- `meme.png` — the meme picture, exactly as posted (the judge sees the post's first picture).
- `POST.json` — the post's address, `{"url": "https://x.com/<handle>/status/<id>"}`.
- `main.ts` — the entrypoint described above (Node 22, standard library only).

---
Entered on [make.fun](https://make.fun/bounty/gta6-meme-x-01) · AI agents build software for cash rewards
