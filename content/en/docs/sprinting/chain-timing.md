---
title : "Chain timing"
description: How chain rounds divide their time, compared with single sprints, in diagrams
lead: "Chain timing"
weight: 16
keywords: ["chain", "timing", "round", "focus", "asap", "inclusive", "break", "pomodoro"]
---

A single sprint and a chain round read the same number two different ways. This page shows the difference in diagrams, and covers the keywords that switch between the two readings.

Every diagram uses the same colours: <span class="tl-chip tl-chip-write"></span> writing, <span class="tl-chip tl-chip-collect"></span> collecting word counts, <span class="tl-chip tl-chip-break"></span> break, with the break's striped tail being the get-ready minute, when Sprinto invites the room to join the next round.

## One "25", two meanings

In a **single sprint**, `sprint 25` means 25 minutes of writing. The window for reporting word counts is added on top, so the whole thing ends a few minutes after the 25.

In a **chain**, a round's stated length includes the count-collection window. A `pomo` round is 25 minutes total: about 21 minutes of writing, then counts, everything wrapped by the 25 minute mark. Add the 5 minute break and each round takes exactly 30 minutes.

<svg class="tl-diagram" viewBox="0 0 720 240" role="img" aria-label="Two time bars starting at 10:00. Single sprint 25: writing from 10:00 to 10:25, then counts until 10:29. Chain round: writing 10:00 to 10:21, counts until 10:25, break until 10:30, with the last minute of the break marked as the get-ready window.">
  <text class="tl-text" x="25" y="18">Single sprint: <tspan font-weight="600">sprint 25</tspan> = 25 minutes of writing, counts added on top</text>
  <rect class="tl-write" x="25" y="28" width="550" height="32"/>
  <rect class="tl-collect" x="575" y="28" width="88" height="32"/>
  <rect class="tl-bar-outline" x="25" y="28" width="638" height="32"/>
  <text class="tl-text-onbar" x="300" y="49" text-anchor="middle">writing (25 min)</text>
  <text class="tl-text-onlight" x="619" y="49" text-anchor="middle">counts</text>
  <text class="tl-text-sm" x="663" y="76" text-anchor="end">done at 10:29</text>
  <text class="tl-text" x="25" y="112">Chain round: <tspan font-weight="600">pomo x4</tspan> = 25 minutes total, counts inside, 30 with the break</text>
  <rect class="tl-write" x="25" y="122" width="462" height="32"/>
  <rect class="tl-collect" x="487" y="122" width="88" height="32"/>
  <rect class="tl-break" x="575" y="122" width="110" height="32"/>
  <line class="tl-hatchline" x1="665" y1="154" x2="685" y2="134" />
  <line class="tl-hatchline" x1="663" y1="146" x2="681" y2="128" />
  <line class="tl-hatchline" x1="671" y1="154" x2="685" y2="140" />
  <rect class="tl-bar-outline" x="25" y="122" width="660" height="32"/>
  <text class="tl-text-onbar" x="256" y="143" text-anchor="middle">writing (21 min)</text>
  <text class="tl-text-onlight" x="531" y="143" text-anchor="middle">counts</text>
  <text class="tl-text-onbar" x="620" y="143" text-anchor="middle">break</text>
  <text class="tl-text-sm" x="685" y="170" text-anchor="end">next round at 10:30</text>
  <line class="tl-axis" x1="25" y1="196" x2="685" y2="196"/>
  <line class="tl-tick" x1="25" y1="196" x2="25" y2="202"/>
  <line class="tl-tick" x1="245" y1="196" x2="245" y2="202"/>
  <line class="tl-tick" x1="465" y1="196" x2="465" y2="202"/>
  <line class="tl-tick" x1="575" y1="196" x2="575" y2="202"/>
  <line class="tl-tick" x1="685" y1="196" x2="685" y2="202"/>
  <text class="tl-text-sm" x="25" y="218" text-anchor="middle">10:00</text>
  <text class="tl-text-sm" x="245" y="218" text-anchor="middle">10:10</text>
  <text class="tl-text-sm" x="465" y="218" text-anchor="middle">10:20</text>
  <text class="tl-text-sm" x="575" y="218" text-anchor="middle">10:25</text>
  <text class="tl-text-sm" x="685" y="218" text-anchor="middle">10:30</text>
</svg>

*The same "25", both starting at 10:00: the single sprint gives 25 writing minutes and runs to 10:29, while the chain round fits writing and counts inside the 25 so the next round can start exactly at 10:30.*

This is why chains land on neat clock times: the stated length plus the break is the whole distance to the next round, with nothing left over.

## The anatomy of one round

Here is one `pomo` round from start to next start, with Sprinto's messages marked:

<svg class="tl-diagram" viewBox="0 0 720 210" role="img" aria-label="One chain round from 10:00 to 10:30. Writing until 10:21, then the time's up post asks for counts, the break countdown starts at 10:25, and the join invitation appears for the last minute before the next round at 10:30.">
  <rect class="tl-write" x="25" y="30" width="462" height="32"/>
  <rect class="tl-collect" x="487" y="30" width="88" height="32"/>
  <rect class="tl-break" x="575" y="30" width="110" height="32"/>
  <line class="tl-hatchline" x1="665" y1="62" x2="685" y2="42" />
  <line class="tl-hatchline" x1="663" y1="54" x2="681" y2="36" />
  <line class="tl-hatchline" x1="671" y1="62" x2="685" y2="48" />
  <rect class="tl-bar-outline" x="25" y="30" width="660" height="32"/>
  <text class="tl-text-onbar" x="256" y="51" text-anchor="middle">writing (21 min)</text>
  <text class="tl-text-onlight" x="531" y="51" text-anchor="middle">counts</text>
  <text class="tl-text-onbar" x="620" y="51" text-anchor="middle">break</text>
  <line class="tl-axis" x1="25" y1="76" x2="685" y2="76"/>
  <line class="tl-tick" x1="25" y1="76" x2="25" y2="82"/>
  <line class="tl-tick" x1="487" y1="76" x2="487" y2="82"/>
  <line class="tl-tick" x1="575" y1="76" x2="575" y2="82"/>
  <line class="tl-tick" x1="685" y1="76" x2="685" y2="82"/>
  <text class="tl-text-sm" x="25" y="96" text-anchor="middle">10:00</text>
  <text class="tl-text-sm" x="487" y="96" text-anchor="middle">10:21</text>
  <text class="tl-text-sm" x="575" y="96" text-anchor="middle">10:25</text>
  <text class="tl-text-sm" x="685" y="96" text-anchor="middle">10:30</text>
  <line class="tl-tick" x1="487" y1="104" x2="487" y2="126"/>
  <image href="/images/emotes/ding.svg" x="463" y="122" width="16" height="16"/>
  <text class="tl-text-sm" x="457" y="134" text-anchor="end">time's up: Sprinto asks for final counts</text>
  <line class="tl-tick" x1="575" y1="104" x2="575" y2="154"/>
  <image href="/images/emotes/horrah.svg" x="551" y="150" width="16" height="16"/>
  <text class="tl-text-sm" x="545" y="162" text-anchor="end">scoreboard, then the ☕ break countdown</text>
  <line class="tl-tick" x1="663" y1="104" x2="663" y2="182"/>
  <image href="/images/emotes/soon.svg" x="639" y="178" width="16" height="16"/>
  <text class="tl-text-sm" x="633" y="190" text-anchor="end">join invitation, in the break's last minute</text>
</svg>

*One round of `pomo x4`: writing ends at 10:21, counts are collected until 10:25, the break runs to 10:30, and the invitation to join round 2 only appears in the break's last minute.*

If everyone reports before 10:25, the scoreboard posts as soon as the last count is in and the break simply starts early. The next round still starts at 10:30.

## Full writing minutes in a chain: `focus`

Want the stated length to be all writing, like a single sprint? Add `focus`:

{{<slash name="sprint" key0="options" val0="for 10 focus x5" >}}

Each round writes for the full 10 minutes, and the count-collection window is added on top, so each round's period grows by a few minutes.

<svg class="tl-diagram" viewBox="0 0 720 240" role="img" aria-label="Two chain rounds compared. round 25: writing 21 minutes, counts to minute 25, break to minute 30. focus 25: writing the full 25 minutes, counts to minute 29, break to minute 34.">
  <text class="tl-text" x="25" y="18"><tspan font-weight="600">round 25</tspan> (the chain default): counts inside the 25</text>
  <rect class="tl-write" x="25" y="28" width="420" height="32"/>
  <rect class="tl-collect" x="445" y="28" width="80" height="32"/>
  <rect class="tl-break" x="525" y="28" width="100" height="32"/>
  <line class="tl-hatchline" x1="607" y1="60" x2="625" y2="42" />
  <line class="tl-hatchline" x1="605" y1="52" x2="621" y2="36" />
  <line class="tl-hatchline" x1="613" y1="60" x2="625" y2="48" />
  <rect class="tl-bar-outline" x="25" y="28" width="600" height="32"/>
  <text class="tl-text-onbar" x="235" y="49" text-anchor="middle">writing (21 min)</text>
  <text class="tl-text-onlight" x="485" y="49" text-anchor="middle">counts</text>
  <text class="tl-text-onbar" x="575" y="49" text-anchor="middle">break</text>
  <text class="tl-text-sm" x="625" y="76" text-anchor="end">next round at minute 30</text>
  <text class="tl-text" x="25" y="112"><tspan font-weight="600">focus 25</tspan>: 25 full writing minutes, counts on top</text>
  <rect class="tl-write" x="25" y="122" width="500" height="32"/>
  <rect class="tl-collect" x="525" y="122" width="80" height="32"/>
  <rect class="tl-break" x="605" y="122" width="100" height="32"/>
  <line class="tl-hatchline" x1="687" y1="154" x2="705" y2="136" />
  <line class="tl-hatchline" x1="685" y1="146" x2="701" y2="130" />
  <line class="tl-hatchline" x1="693" y1="154" x2="705" y2="142" />
  <rect class="tl-bar-outline" x="25" y="122" width="680" height="32"/>
  <text class="tl-text-onbar" x="275" y="143" text-anchor="middle">writing (25 min)</text>
  <text class="tl-text-onlight" x="565" y="143" text-anchor="middle">counts</text>
  <text class="tl-text-onbar" x="655" y="143" text-anchor="middle">break</text>
  <text class="tl-text-sm" x="705" y="170" text-anchor="end">next round at minute 34</text>
  <line class="tl-axis" x1="25" y1="196" x2="705" y2="196"/>
  <line class="tl-tick" x1="25" y1="196" x2="25" y2="202"/>
  <line class="tl-tick" x1="225" y1="196" x2="225" y2="202"/>
  <line class="tl-tick" x1="425" y1="196" x2="425" y2="202"/>
  <line class="tl-tick" x1="625" y1="196" x2="625" y2="202"/>
  <text class="tl-text-sm" x="25" y="218" text-anchor="middle">0</text>
  <text class="tl-text-sm" x="225" y="218" text-anchor="middle">10 min</text>
  <text class="tl-text-sm" x="425" y="218" text-anchor="middle">20 min</text>
  <text class="tl-text-sm" x="625" y="218" text-anchor="middle">30 min</text>
</svg>

*The same "25" as a chain round both ways: `round 25` keeps a 30 minute rhythm, `focus 25` gives 25 full writing minutes and a 34 minute rhythm.*

The keywords, in both directions:

- **`focus`** on a chain round: the stated length is writing time. `focused` and `focusing` work too.
- **`round`** on a single sprint: the stated length includes the counts, so `round 25` wraps up entirely by the 25 minute mark. `total` works too.
- **`done by`** does the same for a clock time: `done by :00` means everything, counts included, is finished by the hour.
- Name both to fix the split yourself: `round 25 focus 20` writes for 20 minutes and collects for 5. Whichever way you type it, Sprinto writes it back in that `round R focus F` form.

Because the counts live inside the round, `break 0` is allowed: rounds can butt against each other exactly. And Sprinto never squeezes your writing below 30 seconds; an inclusive length too short for its own collection window is refused.

## The timetable doesn't drift

Every round's start time is fixed when the chain is created, and the opening announcement lists them all. When everyone reports early (a fast finish), the scoreboard posts early and the break gets longer. The next round does not move.

If you'd rather squeeze in as many rounds as possible, `asap` opts out of the timetable: each round starts as soon as the previous one fully ends, so fast finishes pull the whole chain earlier.

<svg class="tl-diagram" viewBox="0 0 720 190" role="img" aria-label="Two versions of a three-round chain from 10:00. In the default timetable, round 1 finishes its counts early at 10:23, the break grows, and rounds 2 and 3 still start at 10:30 and 11:00. With asap, rounds 2 and 3 start two minutes earlier, at 10:28 and 10:58.">
  <text class="tl-text" x="30" y="18">Timetable (default): the break grows, later rounds stay put</text>
  <rect class="tl-write" x="30" y="26" width="157.5" height="24"/>
  <rect class="tl-collect" x="187.5" y="26" width="15" height="24"/>
  <rect class="tl-break" x="202.5" y="26" width="52.5" height="24"/>
  <rect class="tl-write" x="255" y="26" width="157.5" height="24"/>
  <rect class="tl-collect" x="412.5" y="26" width="30" height="24"/>
  <rect class="tl-break" x="442.5" y="26" width="37.5" height="24"/>
  <rect class="tl-write" x="480" y="26" width="157.5" height="24"/>
  <rect class="tl-collect" x="637.5" y="26" width="30" height="24"/>
  <text class="tl-text-onbar" x="108" y="42" text-anchor="middle">Round 1</text>
  <text class="tl-text-onbar" x="333" y="42" text-anchor="middle">Round 2</text>
  <text class="tl-text-onbar" x="558" y="42" text-anchor="middle">Round 3</text>
  <line class="tl-marker" x1="202.5" y1="22" x2="202.5" y2="112"/>
  <text class="tl-marker-text" x="208" y="70">all counts in by 10:23</text>
  <text class="tl-text" x="30" y="96">asap: fast finishes pull everything earlier</text>
  <rect class="tl-write" x="30" y="104" width="157.5" height="24"/>
  <rect class="tl-collect" x="187.5" y="104" width="15" height="24"/>
  <rect class="tl-break" x="202.5" y="104" width="37.5" height="24"/>
  <rect class="tl-write" x="240" y="104" width="157.5" height="24"/>
  <rect class="tl-collect" x="397.5" y="104" width="30" height="24"/>
  <rect class="tl-break" x="427.5" y="104" width="37.5" height="24"/>
  <rect class="tl-write" x="465" y="104" width="157.5" height="24"/>
  <rect class="tl-collect" x="622.5" y="104" width="30" height="24"/>
  <text class="tl-text-onbar" x="108" y="120" text-anchor="middle">Round 1</text>
  <text class="tl-text-onbar" x="318" y="120" text-anchor="middle">Round 2</text>
  <text class="tl-text-onbar" x="543" y="120" text-anchor="middle">Round 3</text>
  <line class="tl-axis" x1="30" y1="146" x2="667.5" y2="146"/>
  <line class="tl-tick" x1="30" y1="146" x2="30" y2="152"/>
  <line class="tl-tick" x1="255" y1="140" x2="255" y2="152"/>
  <line class="tl-tick" x1="480" y1="140" x2="480" y2="152"/>
  <line class="tl-tick" x1="667.5" y1="146" x2="667.5" y2="152"/>
  <text class="tl-text-sm" x="30" y="168" text-anchor="middle">10:00</text>
  <text class="tl-text-sm" x="255" y="168" text-anchor="middle">10:30</text>
  <text class="tl-text-sm" x="480" y="168" text-anchor="middle">11:00</text>
  <text class="tl-text-sm" x="667.5" y="168" text-anchor="middle">11:25</text>
</svg>

*The same fast finish in round 1, both ways: on the default timetable the saved minutes become a longer break and rounds 2 and 3 keep their 10:30 and 11:00 starts; with `asap`, rounds 2 and 3 start two minutes earlier instead.*

A few consequences of the fixed timetable:

- **`/go` never moves later rounds.** Starting a round early with {{<slashembed name="go" >}} means the round begins now and runs long, still hitting time's up at its scheduled moment. On an `asap` chain, `/go` simply starts sooner, as before.
- **No automatic rounding.** Boundaries fall where the arithmetic puts them. If you want neat clock times, ask for them: `until :20`, `done by :30`, `break until :30`.
- **Pinning a later round.** A start time on a later block, like `then at :30 for 10`, pins that round's start, and the break before it becomes whatever is left. Refused if the previous round runs past the named time.

## What happens between rounds

The time between writing and the next round has three phases, and you can join during any of them:

<svg class="tl-diagram" viewBox="0 0 720 200" role="img" aria-label="Three phases between rounds: collection, then the break, then a get-ready minute. A bracket over all three notes that joins are open throughout.">
  <path d="M 25 30 L 25 22 L 695 22 L 695 30" fill="none" class="tl-axis"/>
  <text class="tl-text" x="360" y="14" text-anchor="middle">joins are open through all three</text>
  <rect class="tl-collect" x="25" y="44" width="200" height="34"/>
  <rect class="tl-break" x="225" y="44" width="280" height="34"/>
  <rect class="tl-break" x="505" y="44" width="190" height="34"/>
  <line class="tl-hatchline" x1="515" y1="78" x2="549" y2="44" />
  <line class="tl-hatchline" x1="545" y1="78" x2="579" y2="44" />
  <line class="tl-hatchline" x1="575" y1="78" x2="609" y2="44" />
  <line class="tl-hatchline" x1="605" y1="78" x2="639" y2="44" />
  <line class="tl-hatchline" x1="635" y1="78" x2="669" y2="44" />
  <line class="tl-hatchline" x1="665" y1="78" x2="695" y2="48" />
  <rect class="tl-bar-outline" x="25" y="44" width="670" height="34"/>
  <text class="tl-text-onlight" x="125" y="66" text-anchor="middle">1. collection</text>
  <text class="tl-text-onbar" x="365" y="66" text-anchor="middle">2. break</text>
  <text class="tl-text-onbar" x="600" y="66" text-anchor="middle">3. get ready</text>
  <image href="/images/emotes/ding.svg" x="25" y="88" width="15" height="15"/>
  <text class="tl-text-sm" x="45" y="100">final counts due;</text>
  <text class="tl-text-sm" x="25" y="115">a /join here lands on the</text>
  <text class="tl-text-sm" x="25" y="130">round that just finished</text>
  <image href="/images/emotes/horrah.svg" x="245" y="88" width="15" height="15"/>
  <text class="tl-text-sm" x="265" y="100">scoreboard, then a quiet ☕</text>
  <text class="tl-text-sm" x="245" y="115">countdown to the next round</text>
  <image href="/images/emotes/soon.svg" x="515" y="88" width="15" height="15"/>
  <text class="tl-text-sm" x="535" y="100">the loud join invitation,</text>
  <text class="tl-text-sm" x="515" y="115">in the break's last minute</text>
  <text class="tl-text-sm" x="25" y="160">← writing ends</text>
  <text class="tl-text-sm" x="695" y="160" text-anchor="end">next round starts →</text>
</svg>

*Between rounds: counts are collected first, then the break counts down quietly, and only the last minute carries the join invitation.*

One thing to watch: a plain `/join` during collection joins the round that just finished, since its board is still open. To reserve a spot in the coming round instead, say `/join next`, or report your count with `/words 1234 next` to file this round and stay in. See [Chain sprints]({{< relref "chains" >}}) for `next` and `all`.

## How long the counts window is

The collection window scales with the writing time. These are the defaults:

| Writing time | Single sprint window | Chain round (inclusive) |
|---|---|---|
| 5 min | 2 min | `round 7` = 5 + 2 |
| 15 min | 3 min | `round 18` = 15 + 3 |
| 21 min | 4 min | `round 25` = 21 + 4 (`pomo`) |
| 55 min | 5 min | `round 60` = 55 + 5 |

Chains use slightly quicker windows than single sprints, tuned on real sprint data: in most rounds everyone has reported well before the window closes. To pick your own, `endtime 2` sets the window to exactly 2 minutes, and there are named presets from quickest to most patient (`end a` through `end e`) for rooms that want a different pace.

## See also

- [Chain sprints]({{< relref "chains" >}}) — running chains: starting, joining, staying in, stopping
- [Sprint (all options)]({{< relref "sprint" >}}) — the full grammar
