---
title : "Chain timing"
description: How chain rounds divide their time, compared with single sprints, in diagrams
lead: "Chain timing"
weight: 16
keywords: ["chain", "timing", "round", "focus", "asap", "inclusive", "break", "pomodoro"]
---

A single sprint and a chain round read the same number two different ways. This page shows the difference in diagrams, and covers the keywords that switch between the two readings.

Every diagram uses the same colours: <span class="tl-chip tl-chip-wait"></span> the join window, striped, <span class="tl-chip tl-chip-write"></span> writing, <span class="tl-chip tl-chip-collect"></span> collecting word counts, <span class="tl-chip tl-chip-break"></span> break. The join window reappears as the break's last minute, when Sprinto invites the room to join the next round.

## One "25", two meanings

In a **single sprint**, `sprint 25` means 25 minutes of writing, followed by time to report your ffinal word count.

In a **chain sprints**, you give the length of a round, which includes the count-collection window. In `sprint 25 x3`, each round is 25 minutes total: 21 minutes of writing, then counts, everything wrapped by the 25 minute mark. Plus a 5 minute break between rounds.

<svg class="tl-diagram" viewBox="0 0 720 270" role="img" aria-label="Two time bars, each opening with a one minute join window and starting to write at 10:00, with a bracket marking the 25 minutes that was asked for. Single sprint 25: the bracket covers 25 minutes of writing, ending at 10:25, and the counts window sticks out past it, until 10:29. Chain round of sprint 25 x3: the bracket covers writing until 10:21 plus counts until 10:25 together, so the counts come out of the 25, the break runs to 10:30, and round 2's writing carries on past the edge of the diagram.">
  <defs>
    <pattern id="hatch-one25" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <rect class="tl-hatchbase" width="7" height="7"/>
      <line class="tl-hatchline" x1="0" y1="0" x2="0" y2="7"/>
    </pattern>
  </defs>
  <text class="tl-text" x="20" y="18">Single sprint: <tspan font-weight="600">sprint 25</tspan></text>
  <rect fill="url(#hatch-one25)" x="20" y="26" width="21" height="32"/>
  <rect class="tl-write" x="41" y="26" width="525" height="32"/>
  <rect class="tl-collect" x="566" y="26" width="84" height="32"/>
  <rect class="tl-bar-outline" x="20" y="26" width="630" height="32"/>
  <text class="tl-text-onbar" x="303" y="47" text-anchor="middle">writing (25 min)</text>
  <text class="tl-text-onbar" x="608" y="47" text-anchor="middle">counts</text>
  <path class="tl-dim" d="M 41 66 l 0 7 l 525 0 l 0 -7"/>
  <text class="tl-text-sm" x="303" y="88" text-anchor="middle">Focus time: 25 minutes</text>
  <text class="tl-text-sm" x="572" y="88">+ 4 min for counts</text>
  <text class="tl-text" x="20" y="120">Chain: <tspan font-weight="600">sprint 25 x3</tspan></text>
  <rect fill="url(#hatch-one25)" x="20" y="128" width="21" height="32"/>
  <rect class="tl-write" x="41" y="128" width="441" height="32"/>
  <rect class="tl-collect" x="482" y="128" width="84" height="32"/>
  <rect class="tl-break" x="566" y="128" width="105" height="32"/>
  <rect class="tl-bar-outline" x="20" y="128" width="651" height="32"/>
  <path class="tl-write" d="M 671 128 L 698 128 L 705 134 L 697 140 L 705 146 L 697 152 L 705 158 L 698 160 L 671 160 Z"/>
  <text class="tl-text-onbar" x="261" y="149" text-anchor="middle">writing (21 min)</text>
  <text class="tl-text-onbar" x="524" y="149" text-anchor="middle">counts</text>
  <text class="tl-text-onbar" x="618" y="149" text-anchor="middle">break</text>
  <path class="tl-dim" d="M 41 168 l 0 7 l 525 0 l 0 -7"/>
  <text class="tl-text-sm" x="303" y="190" text-anchor="middle">Round One: 25 minutes</text>
  <text class="tl-text-sm" x="706" y="190" text-anchor="end">round 2 &#8594;</text>
  <line class="tl-guide" x1="566" y1="22" x2="566" y2="218"/>
  <line class="tl-axis" x1="20" y1="218" x2="706" y2="218"/>
  <line class="tl-tick" x1="41" y1="218" x2="41" y2="224"/>
  <line class="tl-tick" x1="251" y1="218" x2="251" y2="224"/>
  <line class="tl-tick" x1="461" y1="218" x2="461" y2="224"/>
  <line class="tl-tick" x1="566" y1="218" x2="566" y2="224"/>
  <line class="tl-tick" x1="671" y1="218" x2="671" y2="224"/>
  <text class="tl-text-sm" x="41" y="240" text-anchor="middle">10:00</text>
  <text class="tl-text-sm" x="251" y="240" text-anchor="middle">10:10</text>
  <text class="tl-text-sm" x="461" y="240" text-anchor="middle">10:20</text>
  <text class="tl-text-sm" x="566" y="240" text-anchor="middle">10:25</text>
  <text class="tl-text-sm" x="671" y="240" text-anchor="middle">10:30</text>
</svg>

*Both commands say 25, and the bracket under each bar is that 25. Each opens with a one minute join window, then writing starts at 10:00. In the single sprint the 25 is all writing, and the counts window is added past 10:25; in the chain round the counts are taken from inside it, so writing shortens to 21 minutes, the round ends at 10:25 sharp, and round 2 carries straight on from 10:30.*

This is why chains land on neat clock times: the stated length plus the break is the whole distance to the next round, with nothing left over.

Reporting early pays off. When everyone's counts are in before the window closes (a fast finish), the scoreboard posts straight away and the break starts early:

<svg class="tl-diagram" viewBox="0 0 720 130" role="img" aria-label="The same chain round with a fast finish. Writing runs 10:00 to 10:21, all counts are in by 10:23, so the counts segment is shorter and the break starts at 10:23, before the 10:25 mark. The break grows to 7 minutes, still ends at 10:30, and round 2 carries on unchanged.">
  <defs>
    <pattern id="hatch-ff" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <rect class="tl-hatchbase" width="7" height="7"/>
      <line class="tl-hatchline" x1="0" y1="0" x2="0" y2="7"/>
    </pattern>
  </defs>
  <text class="tl-text" x="20" y="18">Fast finish: <tspan font-weight="600">sprint 25 x3</tspan>, round 1, everyone reports early</text>
  <rect fill="url(#hatch-ff)" x="20" y="26" width="21" height="32"/>
  <rect class="tl-write" x="41" y="26" width="441" height="32"/>
  <rect class="tl-collect" x="482" y="26" width="42" height="32"/>
  <rect class="tl-break" x="524" y="26" width="147" height="32"/>
  <rect class="tl-bar-outline" x="20" y="26" width="651" height="32"/>
  <path class="tl-write" d="M 671 26 L 698 26 L 705 32 L 697 38 L 705 44 L 697 50 L 705 56 L 698 58 L 671 58 Z"/>
  <text class="tl-text-onbar" x="261" y="47" text-anchor="middle">writing (21 min)</text>
  <text class="tl-text-onbar" x="597" y="47" text-anchor="middle">break (7 min)</text>
  <line class="tl-marker" x1="524" y1="22" x2="524" y2="70"/>
  <text class="tl-marker-text" x="518" y="82" text-anchor="end">all counts in by 10:23</text>
  <text class="tl-text-sm" x="572" y="82">still ends at 10:30</text>
  <line class="tl-guide" x1="566" y1="22" x2="566" y2="96"/>
  <line class="tl-axis" x1="20" y1="96" x2="706" y2="96"/>
  <line class="tl-tick" x1="41" y1="96" x2="41" y2="102"/>
  <line class="tl-tick" x1="251" y1="96" x2="251" y2="102"/>
  <line class="tl-tick" x1="461" y1="96" x2="461" y2="102"/>
  <line class="tl-tick" x1="566" y1="96" x2="566" y2="102"/>
  <line class="tl-tick" x1="671" y1="96" x2="671" y2="102"/>
  <text class="tl-text-sm" x="41" y="118" text-anchor="middle">10:00</text>
  <text class="tl-text-sm" x="251" y="118" text-anchor="middle">10:10</text>
  <text class="tl-text-sm" x="461" y="118" text-anchor="middle">10:20</text>
  <text class="tl-text-sm" x="566" y="118" text-anchor="middle">10:25</text>
  <text class="tl-text-sm" x="671" y="118" text-anchor="middle">10:30</text>
</svg>

*The same round with a fast finish: the last count is in by 10:23, so the scoreboard posts and the break begins early, slipping in ahead of the 10:25 mark. The break grows to 7 minutes, still ends at 10:30, and round 2 doesn't move.*

## The anatomy of one round

Here is one `pomo` round from start to next start, with Sprinto's messages marked:

<svg class="tl-diagram" viewBox="0 0 720 210" role="img" aria-label="One chain round from 10:00 to 10:30. Writing until 10:21, then the time's up post asks for counts, the break countdown starts at 10:25, and the join invitation appears for the last minute before the next round at 10:30.">
  <defs>
    <pattern id="hatch-anatomy" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <rect class="tl-hatchbase" width="7" height="7"/>
      <line class="tl-hatchline" x1="0" y1="0" x2="0" y2="7"/>
    </pattern>
  </defs>
  <rect class="tl-write" x="25" y="30" width="462" height="32"/>
  <rect class="tl-collect" x="487" y="30" width="88" height="32"/>
  <rect class="tl-break" x="575" y="30" width="110" height="32"/>
  <rect fill="url(#hatch-anatomy)" x="663" y="30" width="22" height="32"/>
  <rect class="tl-bar-outline" x="25" y="30" width="660" height="32"/>
  <text class="tl-text-onbar" x="256" y="51" text-anchor="middle">writing (21 min)</text>
  <text class="tl-text-onbar" x="531" y="51" text-anchor="middle">counts</text>
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

## Full writing minutes in a chain: `focus`

Want the stated length to be all writing, like a single sprint? Add `focus`:

{{<slash name="sprint" key0="options" val0="for 10 focus x5" >}}

Each round writes for the full 10 minutes, and the count-collection window is added on top, so each round's period grows by a few minutes.

<svg class="tl-diagram" viewBox="0 0 720 270" role="img" aria-label="Two chain rounds compared, each with a bracket marking the 25 minutes that was asked for. round 25: the bracket covers writing of 21 minutes plus counts to minute 25 together, and the break runs to minute 30. focus 25: the bracket covers 25 full writing minutes, the counts stick out past it to minute 29, and the break runs to minute 34.">
  <defs>
    <pattern id="hatch-rf" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <rect class="tl-hatchbase" width="7" height="7"/>
      <line class="tl-hatchline" x1="0" y1="0" x2="0" y2="7"/>
    </pattern>
  </defs>
  <text class="tl-text" x="25" y="18"><tspan font-weight="600">round 25</tspan> (the chain default)</text>
  <rect class="tl-write" x="25" y="26" width="420" height="32"/>
  <rect class="tl-collect" x="445" y="26" width="80" height="32"/>
  <rect class="tl-break" x="525" y="26" width="100" height="32"/>
  <rect fill="url(#hatch-rf)" x="605" y="26" width="20" height="32"/>
  <rect class="tl-bar-outline" x="25" y="26" width="600" height="32"/>
  <text class="tl-text-onbar" x="235" y="47" text-anchor="middle">writing (21 min)</text>
  <text class="tl-text-onbar" x="485" y="47" text-anchor="middle">counts</text>
  <text class="tl-text-onbar" x="575" y="47" text-anchor="middle">break</text>
  <path class="tl-dim" d="M 25 66 l 0 7 l 500 0 l 0 -7"/>
  <text class="tl-text-sm" x="275" y="88" text-anchor="middle">the 25 = 21 writing + 4 for counts</text>
  <text class="tl-text-sm" x="531" y="88">next round at minute 30</text>
  <text class="tl-text" x="25" y="120"><tspan font-weight="600">focus 25</tspan></text>
  <rect class="tl-write" x="25" y="128" width="500" height="32"/>
  <rect class="tl-collect" x="525" y="128" width="80" height="32"/>
  <rect class="tl-break" x="605" y="128" width="100" height="32"/>
  <rect fill="url(#hatch-rf)" x="685" y="128" width="20" height="32"/>
  <rect class="tl-bar-outline" x="25" y="128" width="680" height="32"/>
  <text class="tl-text-onbar" x="275" y="149" text-anchor="middle">writing (25 min)</text>
  <text class="tl-text-onbar" x="565" y="149" text-anchor="middle">counts</text>
  <text class="tl-text-onbar" x="655" y="149" text-anchor="middle">break</text>
  <path class="tl-dim" d="M 25 168 l 0 7 l 500 0 l 0 -7"/>
  <text class="tl-text-sm" x="275" y="190" text-anchor="middle">the 25, all writing</text>
  <text class="tl-text-sm" x="531" y="190">+ 4 for counts</text>
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

*The same "25" as a chain round both ways: `round 25` takes the counts out of the 25 and keeps a 30 minute rhythm; `focus 25` writes for the full 25, adds the counts past it, and stretches the rhythm to 34 minutes.*

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
  <defs>
    <pattern id="hatch-phases" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
      <rect class="tl-hatchbase" width="7" height="7"/>
      <line class="tl-hatchline" x1="0" y1="0" x2="0" y2="7"/>
    </pattern>
  </defs>
  <path d="M 25 30 L 25 22 L 695 22 L 695 30" fill="none" class="tl-axis"/>
  <text class="tl-text" x="360" y="14" text-anchor="middle">joins are open through all three</text>
  <rect class="tl-collect" x="25" y="44" width="200" height="34"/>
  <rect class="tl-break" x="225" y="44" width="280" height="34"/>
  <rect fill="url(#hatch-phases)" x="505" y="44" width="190" height="34"/>
  <rect class="tl-bar-outline" x="25" y="44" width="670" height="34"/>
  <text class="tl-text-onbar" x="125" y="66" text-anchor="middle">1. collection</text>
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
