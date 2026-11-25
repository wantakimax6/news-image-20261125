# The World in One Day — 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/wantakimax6/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/wantakimax6/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A newspaper front page summing up the world's news of **Wednesday, 25 November 2026**, for the [News image 25 November 2026](https://make.fun/bounty/news-image-20261125) bounty on make.fun. The image is drawn with Python (PIL) — no AI image generation, so no garbled text — and the program copies it to the output path the kit requires.

## The day's news

Every story below happened, or was first reported, on 25 November 2026:

- **The Gulf** — Two oil tankers hit naval mines and burn in the Strait of Hormuz, Iran's Revolutionary Guard says; the US tells its citizens to leave Iran at once.
- **Saudi Arabia** — Houthis claim a strike on Ras Tanura, the kingdom's biggest refinery; satellite images show thick smoke, and Brent crude jumps past $93.
- **Ukraine** — Ukrainian drones set two Russian refineries (Syzran and Kuibyshev) ablaze overnight in the Samara region.
- **Trade** — The US proposes new tariffs on 14 economies: up to 20% on Chinese goods, 15% on the EU.
- **Pacific** — Australia and Solomon Islands sign a security treaty in Canberra.
- **Space** — Shenzhou-24 launches and docks with Tiangong, carrying Pakistan's Muhammad Zeeshan Ali, the first foreign astronaut aboard.
- **Colombia** — All remaining hostages are freed as security forces storm a Cartagena supermarket after a 17-hour siege.
- **Sudan** — RSF drone strikes kill 19 civilians in Damazin, Blue Nile state, rights group Emergency Lawyers reports.

In brief: Bangladesh raises the garment minimum wage 36% to $139; Poundland collapses into administration. Markets: KOSPI −6.2%, Nikkei −2.8%, S&P 500 −2.2%.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024, under 1 MiB)
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`) and checks the gate limits — at most 1 MiB, at most 1024×1024 px — before finishing.
