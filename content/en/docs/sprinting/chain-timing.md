---
title : "Chain timing"
description: How the writing time, word-count window and break of each chain round add up, in diagrams
lead: "When each round starts, and how the time between rounds is split into word counts and a break"
weight: 16
keywords: ["chain", "timing", "round", "next", "gap", "focus", "asap", "break", "pomodoro", "endtime"]
---

Each round of a chain has three parts: writing, a window to give your word count, and a break. The length you give is the writing time, the same as in a single sprint. This page shows in diagrams how long each part is and when the next round starts, and the options that change these times.

Every diagram uses the same colours: <span class="tl-chip tl-chip-wait"></span> the join window, striped, <span class="tl-chip tl-chip-write"></span> writing, <span class="tl-chip tl-chip-collect"></span> collecting word counts, <span class="tl-chip tl-chip-break"></span> break. The stripes also mark the break's last minute, when Sprinto invites the room to join the next round.

## When the next round starts

`for 25 x3` writes for 25 minutes in each round. The 4-minute word-count window comes after the writing, then the 5-minute break, so a new round starts every 34 minutes.

`pomo x3` also writes for 25 minutes, but starts a new round every 30 minutes. `pomo` sets the whole time between rounds to 5 minutes, and those 5 minutes are made up of the 4-minute word-count window and a 1-minute break.

<svg class="tl-diagram" viewBox="0 0 720 270" role="img" aria-label="Two time bars on the same clock. Both open with a one-minute join window, write from 10:00 to 10:25, and collect word counts until 10:29. A, for 25 x3: a 5-minute break follows, and round 2 starts at 10:34. B, pomo x3: a 1-minute break follows, and round 2 starts at 10:30.">
  <defs>
    <pattern id="hatch-one25" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <rect class="tl-hatchbase" width="7" height="7"/>
      <line class="tl-hatchline" x1="0" y1="0" x2="0" y2="7"/>
    </pattern>
  </defs>
  <text class="tl-text" x="20" y="18">A.&#160;<tspan font-weight="600">for 25 x3</tspan>: the break comes after the word counts</text>
  <rect fill="url(#hatch-one25)" x="20" y="26" width="18" height="32"/>
  <rect class="tl-write" x="38" y="26" width="450" height="32"/>
  <rect class="tl-collect" x="488" y="26" width="72" height="32"/>
  <rect class="tl-break" x="560" y="26" width="72" height="32"/>
  <rect fill="url(#hatch-one25)" x="632" y="26" width="18" height="32"/>
  <rect class="tl-bar-outline" x="20" y="26" width="630" height="32"/>
  <path class="tl-write" d="M 650 26 L 677 26 L 684 32 L 676 38 L 684 44 L 676 50 L 684 56 L 677 58 L 650 58 Z"/>
  <text class="tl-text-onbar" x="263" y="47" text-anchor="middle">writing 25</text>
  <text class="tl-text-onbar" x="524" y="47" text-anchor="middle">counts 4</text>
  <text class="tl-text-onbar" x="596" y="47" text-anchor="middle">break 5</text>
  <path class="tl-dim" d="M 38 66 l 0 7 l 448 0 l 0 -7"/>
  <text class="tl-text-sm" x="262" y="88" text-anchor="middle">Writing: 25 minutes</text>
  <path class="tl-dim" d="M 490 66 l 0 7 l 160 0 l 0 -7"/>
  <text class="tl-text-sm" x="570" y="88" text-anchor="middle">9 minutes until round 2</text>
  <text class="tl-text" x="20" y="120">B.&#160;<tspan font-weight="600">pomo x3</tspan>, the same as&#160;<tspan font-weight="600">for 25 next 5 x3</tspan></text>
  <rect fill="url(#hatch-one25)" x="20" y="128" width="18" height="32"/>
  <rect class="tl-write" x="38" y="128" width="450" height="32"/>
  <rect class="tl-collect" x="488" y="128" width="72" height="32"/>
  <rect fill="url(#hatch-one25)" x="560" y="128" width="18" height="32"/>
  <rect class="tl-bar-outline" x="20" y="128" width="558" height="32"/>
  <path class="tl-write" d="M 578 128 L 605 128 L 612 134 L 604 140 L 612 146 L 604 152 L 612 158 L 605 160 L 578 160 Z"/>
  <text class="tl-text-onbar" x="263" y="149" text-anchor="middle">writing 25</text>
  <text class="tl-text-onbar" x="524" y="149" text-anchor="middle">counts 4</text>
  <path class="tl-dim" d="M 38 168 l 0 7 l 448 0 l 0 -7"/>
  <text class="tl-text-sm" x="262" y="190" text-anchor="middle">Writing: 25 minutes</text>
  <path class="tl-dim" d="M 490 168 l 0 7 l 88 0 l 0 -7"/>
  <text class="tl-text-sm" x="534" y="190" text-anchor="middle">5 minutes until round 2</text>
  <line class="tl-axis" x1="20" y1="218" x2="706" y2="218"/>
  <line class="tl-tick" x1="38" y1="218" x2="38" y2="224"/>
  <line class="tl-tick" x1="218" y1="218" x2="218" y2="224"/>
  <line class="tl-tick" x1="398" y1="218" x2="398" y2="224"/>
  <line class="tl-tick" x1="488" y1="218" x2="488" y2="224"/>
  <line class="tl-tick" x1="578" y1="218" x2="578" y2="224"/>
  <line class="tl-tick" x1="650" y1="218" x2="650" y2="224"/>
  <text class="tl-text-sm" x="38" y="240" text-anchor="middle">10:00</text>
  <text class="tl-text-sm" x="218" y="240" text-anchor="middle">10:10</text>
  <text class="tl-text-sm" x="398" y="240" text-anchor="middle">10:20</text>
  <text class="tl-text-sm" x="488" y="240" text-anchor="middle">10:25</text>
  <text class="tl-text-sm" x="578" y="240" text-anchor="middle">10:30</text>
  <text class="tl-text-sm" x="650" y="240" text-anchor="middle">10:34</text>
</svg>

*Both chains start with a one-minute join window, write from 10:00 to 10:25, then collect word counts for 4 minutes, until 10:29. In A, `for 25 x3`, the 5-minute break comes after the word counts, so round 2 starts at 10:34. In B, `pomo x3` sets the whole time between rounds to 5 minutes: the 4 minutes of word counts and a 1-minute break, so round 2 starts at 10:30. The striped last minute of each break is when Sprinto invites the room to join round 2.*

## Set the time between rounds with `next`

`next` sets the time from the end of one round's writing to the start of the next round's writing. The word-count window comes out of that time first, and the break is whatever is left. `gap 10`, `next in 10` and `next round in 10` mean the same as `next 10`.

| Command | Writing | Word-count window | Break | A new round every |
| --- | --- | --- | --- | --- |
| `for 15 next 5 x3` | 15 min | 3 min | 2 min | 20 min |
| `for 20 next 10 x3` | 20 min | 3 min 30 s | 6 min 30 s | 30 min |
| `for 20 endtime 2 next 10 x3` | 20 min | 2 min | 8 min | 30 min |
| `pomo x3`, the same as `for 25 next 5 x3` | 25 min | 4 min | 1 min | 30 min |
| `round 25 next 5 x3` | 21 min | 4 min | 1 min | 26 min |

To put rounds on tidy clock times, use `next`: `/sprint at :15 for 20 gap 10 x3` typed at 10:05 starts its three rounds at 10:15, 10:45 and 11:15.

[`endtime 2`](#set-the-window-yourself) sets the word-count window to 2 minutes, and [`round`](#word-counts-inside-the-length-round) puts the word counts inside the length.

`next` always counts from the end of the writing, even with `round`: `round 25 next 5` writes for 21 minutes, and the next round starts 5 minutes after the writing stops.

The time's up message gives both the word-count window and the time until the next round. For `for 20 next 10 x3` it says "Please give your final word count with `/words`. You have 3 minutes 30 seconds." and "The next round begins in 10 minutes, and writes for 20 minutes."

Rules for `next`:

- A `next` shorter than the usual word-count window makes the window shorter to fit, down to 30 seconds. A `next` under 30 seconds is refused: "Sorry, 20 seconds isn't long enough between rounds. Word counts are collected in that time first, and that needs 30 seconds."
- `next` and `break` in the same command must add up. `next 10 break 8` works only when the word-count window is 2 minutes. Otherwise it is refused, for example: "Sorry, those don't add up: 10 minutes between rounds with 3 minutes 30 seconds for word counts leaves a break of 6 minutes 30 seconds, not 8 minutes."
- `next` with `break until` or `break next` is refused, because `next` and the `break` option would both set the time between rounds.
- On a sprint with no rounds, `next 5` is refused. To start a single sprint at the next 5-minute mark, use `in next 5`.

### `pomo`

`pomo` is short for `for 25 next 5`, and Sprinto writes it back that way. Each round has 25 minutes of writing, then the 4-minute word-count window, then a 1-minute break. That whole minute is the join invitation for the next round. `pomo x4` starts a round every 30 minutes.

After round 4, the break is at least 15 minutes, counted from the end of the word-count window. So in `pomo x5`, round 5 starts 44 minutes after round 4 starts: 25 minutes of writing, 4 for word counts, and the 15-minute break. A chain has at most 8 rounds, so this is the only long break.

## One round, step by step

One round of `for 25 x3` from its start to the next round's start, with the messages Sprinto posts:

<svg class="tl-diagram" viewBox="0 0 720 210" role="img" aria-label="One round of for 25 x3 from 10:00 to 10:34. Writing until 10:25, when the time's up message asks for word counts. Word counts until 10:29, when the scoreboard posts and the break countdown starts. At 10:33 the join invitation appears, in the last minute before round 2 starts at 10:34.">
  <defs>
    <pattern id="hatch-anatomy" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <rect class="tl-hatchbase" width="7" height="7"/>
      <line class="tl-hatchline" x1="0" y1="0" x2="0" y2="7"/>
    </pattern>
  </defs>
  <rect class="tl-write" x="25" y="30" width="475" height="32"/>
  <rect class="tl-collect" x="500" y="30" width="76" height="32"/>
  <rect class="tl-break" x="576" y="30" width="95" height="32"/>
  <rect fill="url(#hatch-anatomy)" x="652" y="30" width="19" height="32"/>
  <rect class="tl-bar-outline" x="25" y="30" width="646" height="32"/>
  <text class="tl-text-onbar" x="262" y="51" text-anchor="middle">writing (25 min)</text>
  <text class="tl-text-onbar" x="538" y="51" text-anchor="middle">counts</text>
  <text class="tl-text-onbar" x="614" y="51" text-anchor="middle">break</text>
  <line class="tl-axis" x1="25" y1="76" x2="671" y2="76"/>
  <line class="tl-tick" x1="25" y1="76" x2="25" y2="82"/>
  <line class="tl-tick" x1="500" y1="76" x2="500" y2="82"/>
  <line class="tl-tick" x1="576" y1="76" x2="576" y2="82"/>
  <line class="tl-tick" x1="671" y1="76" x2="671" y2="82"/>
  <text class="tl-text-sm" x="25" y="96" text-anchor="middle">10:00</text>
  <text class="tl-text-sm" x="500" y="96" text-anchor="middle">10:25</text>
  <text class="tl-text-sm" x="576" y="96" text-anchor="middle">10:29</text>
  <text class="tl-text-sm" x="671" y="96" text-anchor="middle">10:34</text>
  <line class="tl-tick" x1="500" y1="104" x2="500" y2="126"/>
  <image href="/images/emotes/ding.svg" x="476" y="122" width="16" height="16"/>
  <text class="tl-text-sm" x="470" y="134" text-anchor="end">time's up: Sprinto asks for word counts</text>
  <line class="tl-tick" x1="576" y1="104" x2="576" y2="154"/>
  <image href="/images/emotes/horrah.svg" x="552" y="150" width="16" height="16"/>
  <text class="tl-text-sm" x="546" y="162" text-anchor="end">scoreboard, then the ☕ break countdown</text>
  <line class="tl-tick" x1="652" y1="104" x2="652" y2="182"/>
  <image href="/images/emotes/soon.svg" x="628" y="178" width="16" height="16"/>
  <text class="tl-text-sm" x="622" y="190" text-anchor="end">join invitation at 10:33, in the break's last minute</text>
</svg>

*One round of `for 25 x3`: writing ends at 10:25 and Sprinto asks for word counts. The word-count window is open until 10:29, then the scoreboard posts and the ☕ break message counts down. At 10:33, in the break's last minute, Sprinto invites the room to join round 2, which starts at 10:34.*

## What happens between rounds

The time between one round's writing and the next round's writing has three parts, and you can join during any of them:

<svg class="tl-diagram" viewBox="0 0 720 200" role="img" aria-label="Three phases between rounds: collecting word counts, then the break, then the join invitation in the break's last minute. A bracket over all three notes that you can join during all of them.">
  <defs>
    <pattern id="hatch-phases" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <rect class="tl-hatchbase" width="7" height="7"/>
      <line class="tl-hatchline" x1="0" y1="0" x2="0" y2="7"/>
    </pattern>
  </defs>
  <path d="M 25 30 L 25 22 L 695 22 L 695 30" fill="none" class="tl-axis"/>
  <text class="tl-text" x="360" y="14" text-anchor="middle">you can join during all three</text>
  <rect class="tl-collect" x="25" y="44" width="200" height="34"/>
  <rect class="tl-break" x="225" y="44" width="280" height="34"/>
  <rect fill="url(#hatch-phases)" x="505" y="44" width="190" height="34"/>
  <rect class="tl-bar-outline" x="25" y="44" width="670" height="34"/>
  <text class="tl-text-onbar" x="125" y="66" text-anchor="middle">1. collection</text>
  <text class="tl-text-onbar" x="365" y="66" text-anchor="middle">2. break</text>
  <text class="tl-text-onlight" x="600" y="66" text-anchor="middle">3. join invitation</text>
  <image href="/images/emotes/ding.svg" x="25" y="88" width="15" height="15"/>
  <text class="tl-text-sm" x="45" y="100">final counts due;</text>
  <text class="tl-text-sm" x="25" y="115">a /join here joins the</text>
  <text class="tl-text-sm" x="25" y="130">round that just finished</text>
  <image href="/images/emotes/horrah.svg" x="245" y="88" width="15" height="15"/>
  <text class="tl-text-sm" x="265" y="100">scoreboard, then a quiet ☕</text>
  <text class="tl-text-sm" x="245" y="115">countdown to the next round</text>
  <image href="/images/emotes/soon.svg" x="515" y="88" width="15" height="15"/>
  <text class="tl-text-sm" x="535" y="100">Sprinto invites the room</text>
  <text class="tl-text-sm" x="515" y="115">to join the next round,</text>
  <text class="tl-text-sm" x="515" y="130">in the break's last minute</text>
  <text class="tl-text-sm" x="25" y="160">← writing ends</text>
  <text class="tl-text-sm" x="695" y="160" text-anchor="end">next round starts →</text>
</svg>

*Between rounds: word counts are collected first, then the ☕ break message counts down quietly, and the join invitation comes in the break's last minute. You can join during all three parts.*

- The quiet ☕ break message is posted only when at least 30 seconds of break are left before the join invitation. In a `pomo` round whose word-count window runs its full 4 minutes, the join invitation follows the scoreboard straight away. A fast finish gives a `pomo` round a real break.
- The join invitation takes the break's last minute, or the whole break if the break is shorter than a minute.
- With `break 0`, the next round starts as soon as the word-count window closes.
- When the next round starts, the ☕ message is edited to one line, for example "**Round 2 of 3** ☕ 5 minute break". It always gives the planned break, even if a fast finish made the break longer.

One thing to watch: a plain `/join` during the word-count window joins the round that just finished. To join the coming round instead, use `/join next`, or give your count with `/words 1234 next` to file this round's count and stay in. See [Chain sprints]({{< relref "chains" >}}) for `next` and `all`.

## When everyone reports early

When everyone in the round has given a final word count (a fast finish), Sprinto posts "All word counts are in! Results shortly." and the scoreboard follows about 12 seconds later, or about 5 seconds with `vff`. The counting time nobody needed is added to the break, and the next round still starts at its announced time. With `noff`, the word-count window always runs its full length.

<svg class="tl-diagram" viewBox="0 0 720 148" role="img" aria-label="One pomo x3 round with a fast finish. Writing runs from 10:00 to 10:25. All word counts are in by 10:27, so the word-count window closes 2 minutes early and the break starts at 10:27. A dashed line marks 10:29, when the window would have closed. The break grows from 1 minute to about 3, and round 2 still starts at 10:30.">
  <defs>
    <pattern id="hatch-ff" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <rect class="tl-hatchbase" width="7" height="7"/>
      <line class="tl-hatchline" x1="0" y1="0" x2="0" y2="7"/>
    </pattern>
  </defs>
  <text class="tl-text" x="20" y="18">Fast finish:&#160;<tspan font-weight="600">pomo x3</tspan>, round 1, everyone reports early</text>
  <rect fill="url(#hatch-ff)" x="20" y="26" width="21" height="32"/>
  <rect class="tl-write" x="41" y="26" width="525" height="32"/>
  <rect class="tl-collect" x="566" y="26" width="42" height="32"/>
  <rect class="tl-break" x="608" y="26" width="42" height="32"/>
  <rect fill="url(#hatch-ff)" x="650" y="26" width="21" height="32"/>
  <rect class="tl-bar-outline" x="20" y="26" width="651" height="32"/>
  <path class="tl-write" d="M 671 26 L 698 26 L 705 32 L 697 38 L 705 44 L 697 50 L 705 56 L 698 58 L 671 58 Z"/>
  <text class="tl-text-onbar" x="303" y="47" text-anchor="middle">writing (25 min)</text>
  <line class="tl-guide" x1="650" y1="22" x2="650" y2="66"/>
  <line class="tl-marker" x1="608" y1="22" x2="608" y2="70"/>
  <text class="tl-marker-text" x="602" y="82" text-anchor="end">all counts in by 10:27</text>
  <text class="tl-text-sm" x="614" y="82">break: 3 min</text>
  <text class="tl-text-sm" x="705" y="100" text-anchor="end">round 2 still starts at 10:30</text>
  <line class="tl-axis" x1="20" y1="114" x2="706" y2="114"/>
  <line class="tl-tick" x1="41" y1="114" x2="41" y2="120"/>
  <line class="tl-tick" x1="251" y1="114" x2="251" y2="120"/>
  <line class="tl-tick" x1="461" y1="114" x2="461" y2="120"/>
  <line class="tl-tick" x1="566" y1="114" x2="566" y2="120"/>
  <line class="tl-tick" x1="671" y1="114" x2="671" y2="120"/>
  <text class="tl-text-sm" x="41" y="136" text-anchor="middle">10:00</text>
  <text class="tl-text-sm" x="251" y="136" text-anchor="middle">10:10</text>
  <text class="tl-text-sm" x="461" y="136" text-anchor="middle">10:20</text>
  <text class="tl-text-sm" x="566" y="136" text-anchor="middle">10:25</text>
  <text class="tl-text-sm" x="671" y="136" text-anchor="middle">10:30</text>
</svg>

*A `pomo x3` round with a fast finish: the last word count is in by 10:27, and the scoreboard posts about 12 seconds later. The 2 minutes of counting time nobody needed are added to the break, so the break grows from 1 minute to about 3, and round 2 still starts at 10:30. The dashed line marks 10:29, when the word-count window would have closed.*

## Round start times are fixed

Every round's start time is set when the chain starts, and the announcement that starts the chain lists them all. For `for 25 x3`, it gives each round's start time and writing time: "Rounds: 10:00 ⌛︎ 25m · 10:34 ⌛︎ 25m · 11:08 ⌛︎ 25m". A chain of `round` lengths gives each round's start and end time instead, for example "Rounds: 10:00 to 10:25 · 10:30 to 10:55 · 11:00 to 11:25" for `round 25 x3`.

A fast finish makes the break longer, and the next round still starts at its announced time.

### Start rounds sooner with `asap`

To start rounds sooner after a fast finish, add `asap`. The break keeps its normal length, counted from when the previous round's scoreboard posts, so an early scoreboard moves every later round earlier by the same amount.

<svg class="tl-diagram" viewBox="0 0 720 190" role="img" aria-label="Two versions of pomo x3 from 10:00, with everyone reporting early in round 1, so its word counts are in by 10:27. On the default timetable, the break grows to 3 minutes and rounds 2 and 3 start at 10:30 and 11:00. With asap, the break stays 1 minute and rounds 2 and 3 start at about 10:28 and 10:58.">
  <text class="tl-text" x="30" y="18"><tspan font-weight="600">pomo x3</tspan>: the break grows, and rounds 2 and 3 keep their start times</text>
  <rect class="tl-write" x="30" y="26" width="187.5" height="24"/>
  <rect class="tl-collect" x="217.5" y="26" width="15" height="24"/>
  <rect class="tl-break" x="232.5" y="26" width="22.5" height="24"/>
  <rect class="tl-write" x="255" y="26" width="187.5" height="24"/>
  <rect class="tl-collect" x="442.5" y="26" width="30" height="24"/>
  <rect class="tl-break" x="472.5" y="26" width="7.5" height="24"/>
  <rect class="tl-write" x="480" y="26" width="187.5" height="24"/>
  <rect class="tl-collect" x="667.5" y="26" width="30" height="24"/>
  <text class="tl-text-onbar" x="124" y="42" text-anchor="middle">Round 1</text>
  <text class="tl-text-onbar" x="349" y="42" text-anchor="middle">Round 2</text>
  <text class="tl-text-onbar" x="574" y="42" text-anchor="middle">Round 3</text>
  <line class="tl-marker" x1="232.5" y1="22" x2="232.5" y2="78"/>
  <line class="tl-marker" x1="232.5" y1="100" x2="232.5" y2="132"/>
  <text class="tl-marker-text" x="238" y="70">all counts in by 10:27</text>
  <text class="tl-text" x="30" y="96"><tspan font-weight="600">pomo x3 asap</tspan>: the break keeps its length, and later rounds start sooner</text>
  <rect class="tl-write" x="30" y="104" width="187.5" height="24"/>
  <rect class="tl-collect" x="217.5" y="104" width="15" height="24"/>
  <rect class="tl-break" x="232.5" y="104" width="7.5" height="24"/>
  <rect class="tl-write" x="240" y="104" width="187.5" height="24"/>
  <rect class="tl-collect" x="427.5" y="104" width="30" height="24"/>
  <rect class="tl-break" x="457.5" y="104" width="7.5" height="24"/>
  <rect class="tl-write" x="465" y="104" width="187.5" height="24"/>
  <rect class="tl-collect" x="652.5" y="104" width="30" height="24"/>
  <text class="tl-text-onbar" x="124" y="120" text-anchor="middle">Round 1</text>
  <text class="tl-text-onbar" x="334" y="120" text-anchor="middle">Round 2</text>
  <text class="tl-text-onbar" x="559" y="120" text-anchor="middle">Round 3</text>
  <line class="tl-axis" x1="30" y1="146" x2="697.5" y2="146"/>
  <line class="tl-tick" x1="30" y1="146" x2="30" y2="152"/>
  <line class="tl-tick" x1="255" y1="140" x2="255" y2="152"/>
  <line class="tl-tick" x1="480" y1="140" x2="480" y2="152"/>
  <line class="tl-tick" x1="697.5" y1="146" x2="697.5" y2="152"/>
  <text class="tl-text-sm" x="30" y="168" text-anchor="middle">10:00</text>
  <text class="tl-text-sm" x="255" y="168" text-anchor="middle">10:30</text>
  <text class="tl-text-sm" x="480" y="168" text-anchor="middle">11:00</text>
  <text class="tl-text-sm" x="697.5" y="168" text-anchor="middle">11:29</text>
</svg>

*The same fast finish in round 1 of `pomo x3`, both ways. On the default timetable, the 2 minutes saved are added to the break, and rounds 2 and 3 keep their 10:30 and 11:00 starts. With `asap`, the break keeps its normal 1 minute, counted from when the scoreboard posts, so rounds 2 and 3 start about 2 minutes earlier, at 10:28 and 10:58.*

On an `asap` chain:

- The announcement that starts the chain shows no round times, only "Round times are approximate: a round starts early when everyone finishes fast."
- The break message gives a clock time in place of a countdown. For `for 25 x3 asap`, when everyone reported by 10:27: "The next round starts at 10:32 (25 minute sprint)." A `pomo` chain with `asap` posts no break message, because its break is only the 1-minute join invitation.
- The time's up message has no line saying when the next round begins.
- `asap` on a single sprint still means "start now".

### More about the timetable

- **`/go` keeps later rounds in place.** Starting a round early with {{<slashembed name="go" >}} makes that round longer: it starts now and still reaches time's up at its scheduled time. The round's start message says, for example, "Started 3 minutes early with `/go`, so this round runs 28 minutes and still finishes on schedule." On an `asap` chain, `/go` starts the round sooner. Only the sprinter who started the chain, or a {{<role "@Sprint MC">}}, can use `/go`. It is refused if the longer round, counting its writing, its word-count window and the minutes skipped, would be over the room's longest sprint, which is 120 minutes unless the server or channel set it lower: "Sorry, starting now would make this round 125 minutes, over this room's 120 minutes limit."
- **Round start times are not rounded.** They fall wherever the lengths and breaks add up to. For neat clock times, ask for them: `next` (`for 20 next 10 x3` starts a round every half hour), `until :20`, `done by :30`, or `break until :30`. `break until :30` applies between every pair of rounds: each later round starts at the next :30 after the round before it ends, word counts included. So after the first break, rounds shorter than an hour start an hour apart. For example, `for 25 x3 break until :30` with round 1 at 10:00 starts round 2 at 10:30 and round 3 at 11:30. For a round every half hour, use `next`.
- **A start time on a later round.** `then at :30 for 10` sets when that round starts, and the break before it is whatever time is left. A minute mark like `:30` means the next :30 after the previous round ends, word counts included. A time of day that the previous round runs past is refused: "Sorry, round 1 doesn't end until about 15 minutes from now, so the next round can't start at `10:15`. Try a later time." Other start words work on a later round too: `then in 5` (5 minutes after the previous round ends), `then in next 10`, and `then now` (no break). A command with a start time on a later round can't also have `break` or `asap`: it is refused. The wait before that round counts toward the usual limits on how far ahead a sprint can start, so `then in 90 for 5` is refused.

## Other ways to set the break

The break is 5 minutes unless you set another. In this table, a round ends when its word-count window closes.

| Option | When the next round starts |
| --- | --- |
| `break 7` | 7 minutes after the previous round ends |
| `smoko 7`, `take 7`, `rest 7`, `pause 7` | the same as `break 7` |
| `next 10`, `gap 10` | 10 minutes after the previous round's writing stops (see [`next`](#set-the-time-between-rounds-with-next)) |
| `break until :30` | at the next :30 after the previous round ends, between every pair of rounds |
| `break until 9pm` | at 9pm. Refused if any round runs past 9pm, so it suits only a two-round chain |
| `break next 10` | at the next 10-minute mark of the hour after the previous round ends. `break next 10+2` keeps the break at least 2 minutes long |
| `break 5-10`, `break 5 to 10` | at the tidiest clock time 5 to 10 minutes after the previous round ends |
| `break 0` | as soon as the previous round ends |

A break can be at most 60 minutes, or 120 minutes if the command includes `please`. The limit applies however the break is set: with `break`, `next`, `break until`, or a start time on a later round. A longer break is refused: "Sorry, a break of 90 minutes is too long. The longest break between rounds is 60 minutes. Adding `please` raises the limit a little. Try `for 20 x3 break 90 please`." A break from the room's default settings is cut to 60 minutes.

## Word counts inside the length: `round`

`round 25` makes 25 minutes the length of the whole round: 21 minutes of writing, then word counts until the 25-minute mark, then the break. It works the same in a chain and in a single sprint. `block`, `total` and `dusted` mean the same as `round`.

<svg class="tl-diagram" viewBox="0 0 720 270" role="img" aria-label="Two chain rounds compared, each with a bracket marking 25 minutes. round 25: the bracket covers 21 minutes of writing plus 4 minutes of word counts, and the break runs to minute 30. for 25: the bracket covers 25 minutes of writing, the word counts run past it to minute 29, and the break runs to minute 34.">
  <defs>
    <pattern id="hatch-rf" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <rect class="tl-hatchbase" width="7" height="7"/>
      <line class="tl-hatchline" x1="0" y1="0" x2="0" y2="7"/>
    </pattern>
  </defs>
  <text class="tl-text" x="25" y="18"><tspan font-weight="600">round 25</tspan></text>
  <rect class="tl-write" x="25" y="26" width="420" height="32"/>
  <rect class="tl-collect" x="445" y="26" width="80" height="32"/>
  <rect class="tl-break" x="525" y="26" width="100" height="32"/>
  <rect fill="url(#hatch-rf)" x="605" y="26" width="20" height="32"/>
  <rect class="tl-bar-outline" x="25" y="26" width="600" height="32"/>
  <text class="tl-text-onbar" x="235" y="47" text-anchor="middle">writing (21 min)</text>
  <text class="tl-text-onbar" x="485" y="47" text-anchor="middle">counts</text>
  <text class="tl-text-onbar" x="575" y="47" text-anchor="middle">break</text>
  <path class="tl-dim" d="M 25 66 l 0 7 l 500 0 l 0 -7"/>
  <text class="tl-text-sm" x="275" y="88" text-anchor="middle">25 minutes: 21 of writing + 4 for word counts</text>
  <text class="tl-text-sm" x="531" y="88">next round at minute 30</text>
  <text class="tl-text" x="25" y="120"><tspan font-weight="600">for 25</tspan>, the same as&#160;<tspan font-weight="600">focus 25</tspan></text>
  <rect class="tl-write" x="25" y="128" width="500" height="32"/>
  <rect class="tl-collect" x="525" y="128" width="80" height="32"/>
  <rect class="tl-break" x="605" y="128" width="100" height="32"/>
  <rect fill="url(#hatch-rf)" x="685" y="128" width="20" height="32"/>
  <rect class="tl-bar-outline" x="25" y="128" width="680" height="32"/>
  <text class="tl-text-onbar" x="275" y="149" text-anchor="middle">writing (25 min)</text>
  <text class="tl-text-onbar" x="565" y="149" text-anchor="middle">counts</text>
  <text class="tl-text-onbar" x="655" y="149" text-anchor="middle">break</text>
  <path class="tl-dim" d="M 25 168 l 0 7 l 500 0 l 0 -7"/>
  <text class="tl-text-sm" x="275" y="190" text-anchor="middle">25 minutes of writing</text>
  <text class="tl-text-sm" x="531" y="190">+ 4 for word counts</text>
  <text class="tl-text-sm" x="705" y="208" text-anchor="end">next round at minute 34</text>
  <line class="tl-guide" x1="525" y1="22" x2="525" y2="218"/>
  <line class="tl-axis" x1="25" y1="218" x2="705" y2="218"/>
  <line class="tl-tick" x1="25" y1="218" x2="25" y2="224"/>
  <line class="tl-tick" x1="225" y1="218" x2="225" y2="224"/>
  <line class="tl-tick" x1="425" y1="218" x2="425" y2="224"/>
  <line class="tl-tick" x1="625" y1="218" x2="625" y2="224"/>
  <text class="tl-text-sm" x="25" y="240" text-anchor="middle">0</text>
  <text class="tl-text-sm" x="225" y="240" text-anchor="middle">10 min</text>
  <text class="tl-text-sm" x="425" y="240" text-anchor="middle">20 min</text>
  <text class="tl-text-sm" x="525" y="240" text-anchor="middle">25</text>
  <text class="tl-text-sm" x="625" y="240" text-anchor="middle">30 min</text>
</svg>

*The same "25" read two ways, in a chain with the default 5-minute break. With `round 25`, the word counts fit inside the 25 minutes: 21 minutes of writing and 4 of word counts, then the break, so a new round starts every 30 minutes. With `for 25`, all 25 minutes are writing, the 4 minutes of word counts come after them, and a new round starts every 34 minutes.*

Other ways to fit the word counts inside a length:

- **`done by :00`**: everything, word counts included, is finished by the hour. `done and dusted by 9pm` also works.
- **`for 20 end -5`**: a negative word-count window takes the word counts out of the 20 minutes. This gives 15 minutes of writing and 5 for word counts, all finished by the 20-minute mark. Sprinto writes it back as `round 20 end 5`.
- **`round 25 focus 20`**: 20 minutes of writing and 5 for word counts. `for 20 round 25` is the same pair. Whichever way you type it, Sprinto writes it back in that `round R focus F` form.

`for 25 focus 20` is refused, because `for` and `focus` both set the writing time: "Sorry, `for 25` and `focus 20` both set the writing time, so I'm not sure which you meant. `for` already means the writing time, the same as `focus`. Did you mean one of these?" Buttons under the message offer the two readings: a 25-minute round with 20 minutes of writing, or 20 minutes of writing.

`focus` (also `focused` and `focusing`) says the length is writing time, which a plain length already is. Use it to name both parts of a round (`round 25 focus 20`), or to make a later round plain writing time when a `round` before the first `then` covers the whole chain: `round 20 then 25 focus`.

A `round` must leave at least 30 seconds of writing. `round 3` works, with 1 minute of writing and 2 for word counts, but `round 2` is refused: "Sorry, that's too short: a round of 2 minutes only leaves no time for writing once word counts are collected."

## How long the word-count window is

A single sprint and a chain round with a plain length get the same word-count window. It depends on the writing time: 1 minute 30 seconds, plus 30 seconds for each full 5 minutes of writing, and never less than 2 minutes or more than 10.

| Writing time | Word-count window |
| --- | --- |
| 5 min | 2 min |
| 10 min | 2 min 30 s |
| 15 min | 3 min |
| 20 min | 3 min 30 s |
| 25 min | 4 min |
| 30 min | 4 min 30 s |
| 45 min | 6 min |
| 60 min | 7 min 30 s |

A `round` length uses a quicker window. The writing time and the word-count window add up to the length:

| `round` length | Writing time | Word-count window |
| --- | --- | --- |
| `round 7` | 5 min | 2 min |
| `round 18` | 15 min | 3 min |
| `round 20` | 17 min | 3 min |
| `round 25` | 21 min | 4 min |
| `round 30` | 26 min | 4 min |
| `round 40` | 36 min | 4 min |
| `round 60` | 55 min | 5 min |

### Set the window yourself

`endtime 2` sets the word-count window to exactly 2 minutes. `counts 2` and `reporting 2` mean the same. A window can be from 30 seconds to 30 minutes, or up to 60 minutes for a {{<role "@Sprint MC">}} who adds `please`.

There are also named windows, from quickest (`end a`) to most patient (`end e`). `end o` is the standard window from the first table. `end auto` is the default: the standard window for plain lengths, and `end c` for `round` lengths. A pair like `end o/d` sets one window for plain lengths and one for `round` lengths.

Each named window in minutes, by writing time:

| Writing time | `end a` | `end b` | `end c` | `end d` | `end e` | `end o` |
| --- | --- | --- | --- | --- | --- | --- |
| 5 min | 1 | 2 | 2 | 2 | 2 | 2 |
| 10 min | 1 | 2 | 3 | 3 | 3 | 2½ |
| 15 min | 2 | 3 | 3 | 3 | 3 | 3 |
| 20 min | 2 | 3 | 3 | 4 | 4 | 3½ |
| 25 min | 2 | 3 | 4 | 4 | 5 | 4 |
| 30 min | 2 | 3 | 4 | 5 | 6 | 4½ |
| 45 min | 3 | 4 | 5 | 5 | 8 | 6 |
| 60 min | 3 | 4 | 5 | 5 | 10 | 7½ |

## See also

- [Chain sprints]({{< relref "chains" >}}) — running chains: starting, joining, staying in, stopping
- [Sprint (all options)]({{< relref "sprint" >}}) — the full grammar
