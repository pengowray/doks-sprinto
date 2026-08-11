---
title : "Chain sprints"
description: Run several sprints in a row with breaks in between, from one command
lead: "Chain sprints"
weight: 15
keywords: ["chain", "pomodoro", "pomo", "rounds", "break", "next", "all"]
---

A chain is one command that runs several sprints in a row, with breaks between them. Each sprint in the chain is a **round**: it gets its own start, time's up, and scoreboard, and the last round's scoreboard adds the whole chain up.

## The one rule worth knowing first

In a chain, a round's stated length includes the few minutes at the end for collecting word counts. `pomo` is a 25 minute round: you write for about 21 minutes, then counts come in, and everything wraps by the 25 minute mark. With the 5 minute break that's exactly 30 minutes per round, so `pomo x4` sits neatly on a 30 minute grid.

A single sprint is different: there, `sprint 25` means 25 minutes of writing, and the count-collection window is added on top. [Chain timing]({{< relref "chain-timing" >}}) shows the difference in diagrams, and how to get full writing minutes in a chain with `focus`.

## Starting a chain

The classic pomodoro rhythm, four 25 minute rounds with breaks:

{{<slash name="sprint" key0="options" val0="pomo x4" >}}

`x` (or `times`) repeats any sprint, not just `pomo`:

{{<slash name="sprint" key0="options" val0="for 20 x3" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint 20 times 3" >}}
{{</alts>}}

`then` chains different lengths, and combines with `x`:

{{<slash name="sprint" key0="options" val0="for 15 then for 25 then for 10" >}}
{{<slash name="sprint" key0="options" val0="for 15 x2 then for 25" >}}

A bare `x3` on its own runs three rounds of the room's default sprint. A chain holds up to 8 rounds; ask for more and Sprinto refuses the command rather than quietly running fewer.

The break between rounds is 5 minutes unless you say otherwise: `break 7`, or a clock target like `break until :30`. In a `pomo` chain the break before every 4th round is at least 15 minutes.

When the chain starts, the announcement lists every round's start and end time, so nobody has to work out when round 3 begins.

## What a round looks like

Minute by minute, a `pomo` round:

1. **Writing** for about 21 minutes. Sprinto stays quiet unless you asked for chimes.
2. **Time's up.** Sprinto asks for final counts, and mentions when the next round starts.
3. **Scoreboard.** Once counts are in (or the window closes), the results post. Reporting early helps here: if everyone reports, the board goes up right away and the break starts sooner.
4. **Break.** A quiet "☕ Break time" message counts down to the next round. Stretch, get water.
5. **Get ready.** In the break's last minute, Sprinto invites the room to join the next round.
6. The next round starts, right on the announced time.

## Staying in for the next round

Nobody is carried over automatically. When time's up, report your count with `next` to file this round's words and keep your seat for the next round, carrying your total forward:

{{<slash name="words" key0="count" val0="1234 next" >}}

Or commit once for the whole chain with `all`:

{{<slash name="join" key0="word-count" val0="all" >}}
{{<alts "Synonyms" >}}
{{<slash name="words" key0="count" val0="1234 all" >}}
{{<atsprinto "join all in the chain" >}}
{{</alts>}}

A bare `all` starts you from zero each round; `all 1000` carries your running total. You can also join mid-chain at any point during a break, and `/join next` during a round parks you a seat for the coming one without touching the round still running.

Leaving works the way you'd hope: {{<slashembed name="leave" >}} takes you out, and `leave next` gives up only a parked seat for the next round while your current round carries on.

## Stopping a chain

{{<slash name="sprint" key0="options" val0="last one" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "end chain" >}}
{{</alts>}}

The round that's running finishes as usual and the rest is dropped. Only the sprinter who started the chain, or a {{<role "@Sprint MC">}}, can do it. To also cut the running round, use {{<slashembed name="cancel" >}}.

A chain also stops on its own if the room goes quiet: a round nobody joined posts no scoreboard and the chain rolls on, but two empty rounds in a row end it, with a message saying the remaining rounds are off.

## Options that apply to the whole chain

Anything you set before the first `then` (other than the length and start time) carries across the whole chain, so you only say it once:

{{<slash name="sprint" key0="options" val0="for 20 quietly chime -5 then for 30 then for 10" >}}

`in 5` or a clock time on the front positions the whole chain; every later round follows from the timetable.

## See also

- [Chain timing]({{< relref "chain-timing" >}}) — diagrams of how rounds divide their time, `focus`, `asap`, and the fixed timetable
- [Sprint (all options)]({{< relref "sprint" >}}) — the full grammar
- [During the sprint]({{< relref "words" >}}) — word counts, joining, leaving
