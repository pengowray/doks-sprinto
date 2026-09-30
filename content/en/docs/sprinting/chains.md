---
title : "Chain sprints"
description: Run several sprints in a row with breaks in between, from one command
lead: "One command for several sprints in a row, with breaks between them"
weight: 15
keywords: ["chain", "pomodoro", "pomo", "rounds", "break", "next", "gap", "all"]
---

A chain is several sprints in a row, with breaks between them, started with one command. Each sprint in the chain is a **round**. Each round has its own start, its own time's up and its own scoreboard. The last round's scoreboard also gives the total for the whole chain, for example "Whole chain: 3,210 words over 75 minutes." In that example, 75 minutes is the writing time of all the rounds added together.

## Start a chain

For pomodoro timing, four rounds with 25 minutes of writing each:

{{<slash name="sprint" key0="options" val0="pomo x4" >}}

`x` (or `times`) repeats any sprint, not just `pomo`:

{{<slash name="sprint" key0="options" val0="for 20 x3" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint 20 times 3" >}}
{{</alts>}}

Use `then` to chain sprints of different lengths. You can combine `then` with `x`:

{{<slash name="sprint" key0="options" val0="for 15 then for 25 then for 10" >}}
{{<slash name="sprint" key0="options" val0="for 15 x2 then for 25" >}}

`x3` on its own runs three rounds of the room's default sprint. A chain can have up to 8 rounds. A command with more rounds is refused: "Sorry, that's too many sprints in a row. I can chain up to 8 at once."

The announcement that starts the chain lists every round. For `at 10:00 for 25 x3` typed at 9:59, it gives each round's start time and writing time: "Rounds: 10:00 ⌛︎ 25m · 10:34 ⌛︎ 25m · 11:08 ⌛︎ 25m". Each reader sees the times in their own time zone.

To see a chain's timetable before you start it, use {{<slashembed name="explain" key0="sprint-options" val0="for 20 x3" >}}. For a short summary of chains in Discord, use `/help chain`.

## Start rounds on the hour or half hour

Most people use `gap` to start every round at a set time on the clock, such as on the hour and half hour. `gap` sets the time from the end of one round's writing to the start of the next round's writing. When the writing time and the gap add up to 30 minutes, a new round starts every 30 minutes:

{{<slash name="sprint" key0="options" val0="at 10:00 for 20 gap 10 x3" >}}

This command starts rounds at 10:00, 10:30 and 11:00. Each round has 20 minutes of writing, then a 10-minute gap: 3 minutes 30 seconds for word counts and a 6 minute 30 second break.

For pomodoro timing, use 25 minutes of writing and a 5-minute gap:

{{<slash name="sprint" key0="options" val0="at 10:00 for 25 gap 5 x4" >}}

This command starts rounds at 10:00, 10:30, 11:00 and 11:30. It's the same as `/sprint at 10:00 pomo x4`.

For a new round every hour, use a writing time and a gap that add up to 60 minutes, such as `for 45 gap 15` or `for 50 gap 10`.

Each round's start time is set when the chain starts. If everyone gives their word count early, the break gets longer, and the next round still starts at its set time.

A time of day such as `at 10:00` needs your time zone, set with {{<slashembed name="timezone">}}. See [Time zones]({{< relref "sprint#time-zones" >}}) on the Sprint (all options) page. A minute mark works without a time zone: `at :00` starts the first round at the next :00, and `at :30` at the next :30.

A start time given as a time of day or a minute mark can be at most 50 minutes away, or 90 minutes if the command includes `please`. So to start the first round at 10:00, type the command between 9:10 and 10:00.

## How long each round is

Each round has three parts, one after the other:

1. **Writing**, for the length you give. This is the same as in a single sprint.
2. **Word-count window**, for giving your word count. It is 3 minutes after 15 minutes of writing, and 4 minutes after 25 minutes.
3. **Break**, 5 minutes unless you set another length.

The next round starts when the break ends. For example, `for 25 x3` starts a new round every 34 minutes: 25 minutes of writing, 4 minutes for word counts, and a 5-minute break.

Three options change these parts:

- `gap 10` sets the word-count window and the break together: 10 minutes from the end of one round's writing to the start of the next round's writing. The word counts come out of the 10 minutes first, and the break is what's left. See [Set the time between rounds](#set-the-time-between-rounds).
- `break 7` sets the break to 7 minutes.
- `round 25` sets the writing and the word-count window together: 21 minutes of writing, then 4 minutes for word counts. The break comes after the 25 minutes.

This table shows common chains and how often each one starts a new round:

| Command | Writing | Word-count window | Break | A new round every |
| --- | --- | --- | --- | --- |
| `for 25 x3` | 25 min | 4 min | 5 min | 34 min |
| `for 20 gap 10 x3` | 20 min | 3 min 30 s | 6 min 30 s | 30 min |
| `pomo x3`, short for `for 25 gap 5 x3` | 25 min | 4 min | 1 min | 30 min |
| `for 25 break 7 x3` | 25 min | 4 min | 7 min | 36 min |
| `round 25 x3` | 21 min | 4 min | 5 min | 30 min |

[Chain timing]({{< relref "chain-timing" >}}) has diagrams of the default timing, `gap` and `round`, and lists how long the word-count window is for other lengths.

In a `pomo` chain, the break after round 4 is at least 15 minutes, counted from the end of the word-count window. So in `pomo x5`, round 5 starts 44 minutes after round 4 starts: 25 minutes of writing, 4 minutes for word counts, and the 15-minute break. `pomo x4` has no long break.

## Set the time between rounds

To set the whole time from the end of one round's writing to the start of the next round's writing, use `gap`. The word counts come out of the gap first, and the break is what's left:

{{<slash name="sprint" key0="options" val0="for 20 gap 10 x3" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 20 next 10 x3" >}}
{{<slash name="sprint" key0="options" val0="for 20 next in 10 x3" >}}
{{<slash name="sprint" key0="options" val0="for 20 next round in 10 x3" >}}
{{<slash name="sprint" key0="options" val0="for 20 next focus in 10 x3" >}}
{{</alts>}}

Each round of `for 20 gap 10 x3` has 20 minutes of writing, then 3 minutes 30 seconds for word counts and a 6 minute 30 second break, so a new round starts every 30 minutes. Sprinto writes `gap 10` back as `next 10`, for example in `/explain`.

To start rounds at regular clock times, use `gap`. For example, {{<slashembed name="sprint" key0="options" val0="at :15 for 20 gap 10 x3" >}} typed at 10:05 starts its three rounds at 10:15, 10:45 and 11:15.

To set only the break, use `break`. The break starts after the word-count window, and is 5 minutes unless you set another length:

{{<slash name="sprint" key0="options" val0="for 25 x3 break 7" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 25 x3 smoko 7" >}}
{{<slash name="sprint" key0="options" val0="for 25 x3 take 7" >}}
{{<slash name="sprint" key0="options" val0="for 25 x3 rest 7" >}}
{{<slash name="sprint" key0="options" val0="for 25 x3 pause 7" >}}
{{</alts>}}

Each round of `for 25 x3 break 7` has 25 minutes of writing, 4 minutes for word counts, then a 7-minute break.

On a single sprint (a sprint that isn't a chain), `gap 5` and `next 5` are refused. To start a single sprint at the next 5-minute mark on the clock, use `in next 5`.

[Chain timing]({{< relref "chain-timing" >}}) has more ways to set the break, such as `break until :30`, and the rules for using `gap` and `break` in the same command.

A break can be at most 60 minutes, or 120 minutes if the command includes `please`. The limit applies however the break is set, including with `gap`. A longer break is refused: "Sorry, a break of 90 minutes is too long. The longest break between rounds is 60 minutes. Adding `please` raises the limit a little. Try `for 20 x3 break 90 please`."

A room can set its own default gap or default break for chains, for example {{<atsprintoembed "settings preset 20 gap 10" >}} or {{<atsprintoembed "settings preset 20 break 7" >}}. Setting a default gap replaces the room's default break, and setting a default break replaces the room's default gap. On a single sprint, a default gap or break has no effect.

A room's default break can be at most 60 minutes too. A longer default break is refused when someone tries to set it.

## What a round looks like

Round 1 of `at 10:00 for 25 x3`:

1. **Writing**, 10:00 to 10:25. During the writing, the only messages Sprinto posts are chimes (time-left messages), if the sprint has any.
2. **Time's up** at 10:25. The time's-up message is headed **Round 1 of 3**, asks for final word counts, and says when the next round starts: "Please give your final word count with `/words`. You have 4 minutes." and "The next round begins in 9 minutes, and writes for 25 minutes."
3. **Scoreboard** at 10:29, or sooner if everyone reports early. When everyone in the round has given a final word count, Sprinto posts "All word counts are in! Results shortly." and the scoreboard follows about 12 seconds later. The unused part of the word-count window is added to the break.
4. **Break**, 10:29 to 10:34. Sprinto posts a break message with a countdown to the next round.
5. **Join invitation** at 10:33, in the break's last minute. Sprinto invites the room to join round 2.
6. **Round 2 starts** at 10:34, the time given in the announcement.

The break message for round 2, as posted at 10:29:

{{< reply >}}
**Round 2 of 3**
☕ **Break time.** The next round starts in 5 minutes and runs for 25 minutes.
`/join` any time.
{{< /reply >}}

When round 2 starts, the break message is edited to one line: "**Round 2 of 3** ☕ 5 minute break".

Sprinto posts the break message only when at least 30 seconds of the break are left before the join invitation. A `pomo` round's break is 1 minute, so the join invitation is posted as soon as the break starts, and there's no break message unless everyone reports early.

After a round's scoreboard posts, you can still correct your count for that round with {{<slashembed name="late" >}}, until 10 minutes after that round's time's up, even while the next round runs. If the next round's time's up comes before those 10 minutes are over, you can correct your count only until just before the next round's time's up.

## Stay in for the next round

To stay in for the next round, add `next` to your word count when time's up. Nobody is moved into the next round automatically. For example, `/words 1234 next` gives 1,234 words as your count for this round, and puts you in the next round with a starting count of 1,234 words:

{{<slash name="words" key0="count" val0="1234 next" >}}

To join every round at once, use `all`:

{{<slash name="join" key0="word-count" val0="all" >}}
{{<alts "Synonyms" >}}
{{<slash name="words" key0="count" val0="1234 all" >}}
{{<atsprinto "join all in the chain" >}}
{{</alts>}}

With `all`, each later round starts from the count you reached in the round before it, unless you ask for 0:

| Command | Starting count for this round | Each later round starts from |
| --- | --- | --- |
| `/join all` | 0 words, or your current count if you're already in the round | your count at the end of the round before |
| `/join all 1000` | 1,000 words | your count at the end of the round before |
| `/join all 0` | 0 words | 0 words |
| `/join all 0 same` | 0 words | your count at the end of the round before |

In round 1 of a 3-round chain, `/join all 1000` replies "You have joined for all 3 rounds, starting with 1,000 words." and `/join all 0` replies "You have joined for all 3 rounds, starting with 0 for each."

You can join at any time during a break. During a round, `/join next` signs you up for the next round, and doesn't change whether you're in the round that is running:

{{<slash name="join" key0="word-count" val0="next" >}}

{{< reply >}}
You're in for round 2. It starts at 10:34.
{{< /reply >}}

With a count, `/join next 1200` replies "You're in for round 2, starting from 1,200 words. It starts at 10:34." In the last round, `/join next` replies "There's no round after this one to join. `/join` to jump into this sprint."

Signing up with `/join next` also keeps the chain going. Two empty rounds in a row end a chain, but the round you signed up for always runs, and the round before it doesn't count as empty.

## Leave a chain

| Command | What it does |
| --- | --- |
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

The round that is running finishes as usual, and the rest of the chain is dropped. The command must be exactly one of these phrases. `last` on its own doesn't stop the chain. Only the sprinter who started the chain, or a {{<role "@Sprint MC">}}, can stop a chain this way.

{{< reply >}}
🙂 Okay, this will be the last one. The chain will not continue after round 2.
{{< /reply >}}

The final scoreboard then says "🙂 Last one: The chain sprints have been stopped early." Anyone else who tries it gets "Sorry, only the sprinter who started this or a Sprint MC can end the chain early."

To stop the round that is running as well, use {{<slashembed name="cancel" >}}. `/cancel` ends the whole chain. Before a round starts, during a break, or when nobody else is writing, `/cancel` ends the chain at once.

During a round with other people in it, `/cancel` starts a 2-minute vote. See [During the sprint]({{< relref "words" >}}) for how cancelling works when other people are in the sprint.

A chain also stops if nobody joins. Sprinto posts no scoreboard for a round nobody joined, and the chain goes on. After two empty rounds in a row, the chain ends:

{{< reply >}}
😔 No one joined the last two rounds, so the rest of the chain is cancelled.
{{< /reply >}}

## Options that apply to the whole chain

Anything you set before the first `then`, except the length and the start time, applies to every round, so you only say it once:

{{<slash name="sprint" key0="options" val0="for 20 quietly chime -5 then for 30 then for 10" >}}

This includes `round`. In `round 20 then 25`, the `round` applies to the second round too, so the second round's 25 minutes include the word counts. To make a later round's length writing time only, add `focus` to that round: `round 20 then 25 focus`.

`quiet`, `noping` and `lock` apply to every round wherever you type them. `ff`, `noff`, `vff` and `nops` work differently: the first of these four flags in the command also applies to every round that has none of the four. A round with its own flag keeps that flag. So `25 then 50 noff` turns fast finish off for both rounds. [Sprint (all options)]({{< relref "sprint" >}}) explains each flag.

`in 5` or a clock time at the start of the command sets when the first round starts. Every later round starts at its time on the chain's timetable.

## See also

- [Chain timing]({{< relref "chain-timing" >}}) — diagrams of each round's writing, word counts and break, with `gap`, `round`, `asap`, and the fixed timetable
- [Sprint (all options)]({{< relref "sprint" >}}) — the full grammar
- [During the sprint]({{< relref "words" >}}) — word counts, joining, leaving
