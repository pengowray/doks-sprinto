---
title : "Chain sprints"
description: Run several sprints in a row with breaks in between, from one command
lead: "One command for several sprints in a row, with breaks between them"
weight: 15
keywords: ["chain", "pomodoro", "pomo", "rounds", "break", "next", "gap", "all"]
---

A chain is one command that runs several sprints in a row, with breaks between them. Each sprint in the chain is a **round**: it gets its own start, time's up, and scoreboard. The last round's scoreboard also gives the total for the whole chain, for example "Whole chain: 3,210 words over 75 minutes." The 75 minutes is the writing time of all the rounds added together.

## Start a chain

For the pomodoro rhythm, four rounds of 25 minutes of writing:

{{<slash name="sprint" key0="options" val0="pomo x4" >}}

`x` (or `times`) repeats any sprint, not just `pomo`:

{{<slash name="sprint" key0="options" val0="for 20 x3" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint 20 times 3" >}}
{{</alts>}}

`then` chains different lengths, and combines with `x`:

{{<slash name="sprint" key0="options" val0="for 15 then for 25 then for 10" >}}
{{<slash name="sprint" key0="options" val0="for 15 x2 then for 25" >}}

A bare `x3` runs three rounds of the room's default sprint. A chain can have up to 8 rounds. A command with more rounds is refused: "Sorry, that's too many sprints in a row. I can chain up to 8 at once."

The announcement that starts the chain lists every round. For `for 25 x3` typed at 9:59, it gives each round's start time and writing time: "Rounds: 10:00 ⌛︎ 25m · 10:34 ⌛︎ 25m · 11:08 ⌛︎ 25m". Each reader sees the times in their own time zone.

To see a chain's timetable before you start it, use {{<slashembed name="explain" key0="sprint-options" val0="for 20 x3" >}}. For a short summary of chains in Discord, use `/help chain`.

## How long each round is

The length you give is writing time, the same as in a single sprint. After each round's writing, there are a few minutes to give your word count, then the break, then the next round starts.

For example, `for 25 x3` is three rounds of 25 minutes of writing. After each round's writing there are 4 minutes for word counts and a 5-minute break, so a new round starts every 34 minutes.

Four chains, and when each one starts a new round. The notes under the table explain `pomo`, `next` and `round`.

| Command | Writing | Word-count window | Break | A new round every |
|---|---|---|---|---|
| `for 25 x3` | 25 min | 4 min | 5 min | 34 min |
| `pomo x3` | 25 min | 4 min | 1 min | 30 min |
| `for 20 next 10 x3` | 20 min | 3 min 30 s | 6 min 30 s | 30 min |
| `round 25 x3` | 21 min | 4 min | 5 min | 30 min |

- `pomo` is short for `for 25 next 5`. `next 5` sets the whole time from the end of one round's writing to the start of the next round's writing. The word-count window takes 4 of those 5 minutes, and the break is the 1 minute left.
- `next 10` works the same way with 10 minutes. See [Set the time between rounds](#set-the-time-between-rounds).
- `round 25` makes 25 minutes the length of the whole round: 21 minutes of writing, then word counts until the 25-minute mark.

[Chain timing]({{< relref "chain-timing" >}}) shows these in diagrams, and how long the word-count window is for other lengths.

In a `pomo` chain, the break after round 4 is at least 15 minutes, counted from the end of the word-count window. So in `pomo x5`, round 5 starts 44 minutes after round 4 starts: 25 minutes of writing, 4 for word counts, and the 15-minute break. `pomo x4` has no long break.

## Set the time between rounds

The break is 5 minutes unless you set another length. The break starts after the word-count window:

{{<slash name="sprint" key0="options" val0="for 25 x3 break 7" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 25 x3 smoko 7" >}}
{{<slash name="sprint" key0="options" val0="for 25 x3 take 7" >}}
{{<slash name="sprint" key0="options" val0="for 25 x3 rest 7" >}}
{{<slash name="sprint" key0="options" val0="for 25 x3 pause 7" >}}
{{</alts>}}

Each round of `for 25 x3 break 7` has 25 minutes of writing, 4 minutes for word counts, then a 7-minute break.

To set the whole time from the end of one round's writing to the start of the next round's writing, use `next`. The word-count window comes out of that time first, and the break is whatever is left:

{{<slash name="sprint" key0="options" val0="for 20 next 10 x3" >}}

Each round of `for 20 next 10 x3` has 20 minutes of writing, 3 minutes 30 seconds for word counts and a 6 minute 30 second break, so a new round starts every half hour. `gap 10`, `next in 10` and `next round in 10` mean the same as `next 10`.

To put rounds on tidy clock times, use `next`. {{<slashembed name="sprint" key0="options" val0="at :15 for 20 gap 10 x3" >}} typed at 10:05 starts its three rounds at 10:15, 10:45 and 11:15.

On a sprint with no rounds, `next 5` is refused. To start a single sprint at the next 5-minute mark, use `in next 5`.

More ways to set the break, such as `break until :30`, and what happens when `next` and `break` disagree, are on [Chain timing]({{< relref "chain-timing" >}}).

<!-- main only: 1-hour break limit -->
A break can be at most 60 minutes, or 120 minutes if the command includes `please`. The limit applies however the break is set, including with `next`. A longer break is refused: "Sorry, a break of 90 minutes is too long. The longest break between rounds is 60 minutes. Adding `please` raises the limit a little. Try `for 20 x3 break 90 please`."

A room can set its own default gap or break for chains, for example {{<atsprintoembed "settings preset for 20 next 10" >}} or {{<atsprintoembed "settings preset for 20 break 7" >}}. Setting one replaces the other. A default gap has no effect on a sprint without rounds.

<!-- main only: 1-hour break limit -->
A room's default break can be at most 60 minutes too. A longer one is refused when it is set.

## What a round looks like

One round of `for 25 x3`, starting at 10:00:

1. **Writing**, 10:00 to 10:25. Sprinto posts nothing during the writing, except chimes (time-left messages) if the sprint has any.
2. **Time's up** at 10:25. The message is headed **Round 1 of 3**, asks for final word counts, and says when the next round starts: "Please give your final word count with `/words`. You have 4 minutes." and "The next round begins in 9 minutes, and writes for 25 minutes."
3. **Scoreboard** at 10:29, or sooner if everyone reports early. When everyone in the round has given a final word count, Sprinto posts "All word counts are in! Results shortly." and the scoreboard follows about 12 seconds later. The counting time nobody needed is added to the break.
4. **Break**, 10:29 to 10:34. Sprinto posts a break message with a countdown to the next round.
5. **Join invitation** at 10:33, in the break's last minute. Sprinto invites the room to join round 2.
6. **Round 2 starts** at 10:34, the time given in the announcement.

The break message for round 2, as posted at 10:29:

{{< reply >}}
**Round 2 of 3**
☕ **Break time.** The next round starts in 5 minutes and runs for 25 minutes.
`/join` any time.
{{< /reply >}}

When round 2 starts, the message is edited to one line: "**Round 2 of 3** ☕ 5 minute break".

The break message is posted only when at least 30 seconds of break are left before the join invitation. A `pomo` round's break is 1 minute, all of it the join invitation, so there's no break message unless everyone reports early.

After a round's scoreboard posts, you can still correct your count for that round with {{<slashembed name="late" >}}, until 10 minutes after that round's time's up, even while the next round runs. If the next round's time's up comes first, the correction window closes just before it.

## Stay in for the next round

Nobody is carried into the next round automatically. When time's up, add `next` to your word count. For example, `/words 1234 next` gives 1,234 words as your count for this round, and puts you in the next round with a starting count of 1,234 words:

{{<slash name="words" key0="count" val0="1234 next" >}}

To join every round at once, use `all`:

{{<slash name="join" key0="word-count" val0="all" >}}
{{<alts "Synonyms" >}}
{{<slash name="words" key0="count" val0="1234 all" >}}
{{<atsprinto "join all in the chain" >}}
{{</alts>}}

With `all`, each later round starts from the count you reached in the round before it, unless you ask for 0:

| Command | Starting count for this round | Each later round starts from |
|---|---|---|
| `/join all` | 0 words, or your current count if you're already in the round | your count at the end of the round before |
| `/join all 1000` | 1,000 words | your count at the end of the round before |
| `/join all 0` | 0 words | 0 words |
| `/join all 0 same` | 0 words | your count at the end of the round before |

In round 1 of a 3-round chain, `/join all 1000` replies "You have joined for all 3 rounds, starting with 1,000 words." and `/join all 0` replies "You have joined for all 3 rounds, starting with 0 for each."

You can join at any time during a break. During a round, `/join next` signs you up for the next round and leaves the round that is running as it is:

{{<slash name="join" key0="word-count" val0="next" >}}

{{< reply >}}
You're in for round 2. It starts at 10:34.
{{< /reply >}}

With a count, `/join next 1200` replies "You're in for round 2, starting from 1,200 words. It starts at 10:34." In the last round, it replies "There's no round after this one to join. `/join` to jump into this sprint."

A `/join next` sign-up also keeps the chain going: the round you signed up for always runs, and the round before that one doesn't count as empty (two empty rounds in a row end a chain).

## Leave a chain

| Command | What it does |
|---|---|
| {{<slashembed name="leave" >}} | Leave the round that is running and the rest of the chain. |
| `leave next` | Cancel your sign-up for the next round. You stay in the round that is running. |
| `leave all` | Cancel your sign-up for every round after this one. You stay in the round that is running. |

`leave all` replies "Okay, you're no longer down for the rounds after this one. You're still in this round. Use `/leave` if you want out of that too."

If you joined every round with `all`, `leave next` changes nothing and replies "You asked to join every round, so you're still in for the next one. `/leave` to drop out of the chain."

## Stop a chain early

{{<slash name="sprint" key0="options" val0="last one" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "last round" >}}
{{<atsprinto "last sprint" >}}
{{<atsprinto "last block" >}}
{{<atsprinto "last focus" >}}
{{<atsprinto "no more" >}}
{{<atsprinto "stop after this" >}}
{{<atsprinto "stop after this one" >}}
{{<atsprinto "wrap up" >}}
{{<atsprinto "end chain" >}}
{{<atsprinto "end the chain" >}}
{{</alts>}}

The round that is running finishes as usual, and the rest of the chain is dropped. The whole command must be one of these phrases: a bare `last` doesn't stop the chain. Only the sprinter who started the chain, or a {{<role "@Sprint MC">}}, can do it.

{{< reply >}}
🙂 Okay, this will be the last one. The chain will not continue after round 2.
{{< /reply >}}

The final scoreboard then says "🙂 Last one: The chain sprints have been stopped early." Anyone else gets "Sorry, only the sprinter who started this or a Sprint MC can end the chain early."

To stop the round that is running as well, use {{<slashembed name="cancel" >}}. It ends the whole chain. Before a round starts, during a break, or when nobody else is writing, it ends the chain at once.

<!-- main only: cancel vote -->
During a round with other people in it, `/cancel` starts a 2-minute vote. See [During the sprint]({{< relref "words" >}}) for how cancelling works when other people are in the sprint.

A chain also stops if nobody joins. A round nobody joined posts no scoreboard and the chain goes on, but after two empty rounds in a row the chain ends:

{{< reply >}}
😔 No one joined the last two rounds, so the rest of the chain is cancelled.
{{< /reply >}}

## Options that apply to the whole chain

Anything you set before the first `then`, except the length and the start time, applies to every round, so you only say it once:

{{<slash name="sprint" key0="options" val0="for 20 quietly chime -5 then for 30 then for 10" >}}

This includes `round`. In `round 20 then 25`, the `round` applies to the second round too, so its 25 minutes include the word counts. To make a later round plain writing time, add `focus` to it: `round 20 then 25 focus`.

<!-- main only: flags typed after then -->
`quiet`, `noping` and `lock` apply to every round wherever you type them. For `ff`, `noff`, `vff` and `nops`, the first of these flags in the command also applies to every round that has none of them, and a round with its own flag keeps it. So `25 then 50 noff` turns fast finish off for both rounds. [Sprint (all options)]({{< relref "sprint" >}}) explains each flag.

`in 5` or a clock time at the front sets when the first round starts, and every later round follows the timetable.

## See also

- [Chain timing]({{< relref "chain-timing" >}}) — diagrams of each round's writing, word counts and break, with `next`, `round`, `asap`, and the fixed timetable
- [Sprint (all options)]({{< relref "sprint" >}}) — the full grammar
- [During the sprint]({{< relref "words" >}}) — word counts, joining, leaving
