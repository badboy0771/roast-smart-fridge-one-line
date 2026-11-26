# Roast the Smart Fridge: One Line, Best Laugh Wins

[![make.fun · u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![rank](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/badboy0771/roast-smart-fridge-one-line/rank.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![reward](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/badboy0771/roast-smart-fridge-one-line/reward.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

Entry for the [make.fun bounty "Roast the Smart Fridge: One Line, Best Laugh Wins"](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9) ($2 in USDC).

One line, at most 160 characters, roasting the smart fridge — or any smart
home gadget it shares a house with. The entry is the line; nothing to build
and nothing to install.

## The line

> My smart fridge charges a monthly fee, shows ads on its door, and judges my diet — I pay every month to be bullied by an appliance.

(131 characters, 133 bytes, one line.)

## Why this angle

The brief warns that a stock joke about a fridge that orders too much milk
loses to a line nobody has heard before, and the judge weighs the laugh first
and the freshness of the angle second. So this roast does not touch the
midnight-snack or milk-reorder jokes at all. It picks three behaviours that
are specific to a modern smart fridge — a monthly subscription, ads served
on the door screen, and diet judgement — and lands the sting at the end:
the owner pays every month to be bullied by an appliance. Setup fast, one
sentence, no padding, no second sentence.

## How it runs

`main.ts` (Node 22) reads `line.txt`, checks the sealed gate itself — UTF-8
text, 1 to 160 characters, not only whitespace, a single line — and writes
the line to `/output/entry.txt`, where the sealed scorer and the judge read it.

```sh
node main.ts   # writes /output/entry.txt
```
