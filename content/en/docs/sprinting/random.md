---
title : "Random sprint lengths"
description: Have Sprinto pick a random sprint length from a range, a dice roll, or a named wheel
lead: "Let Sprinto pick the sprint length: give a range, roll dice, or name a wheel."
weight: 25
---

To have Sprinto pick how long the sprint runs, give a range, roll dice, or name one of the wheels:

{{<slash name="sprint" key0="options" val0="random 15 to 20" >}}
{{<slash name="sprint" key0="options" val0="roll 3d6" >}}
{{<slash name="sprint" key0="options" val0="micro" >}}

The word `random` in front of a range, dice or a wheel name is optional. Each pair here does the same thing:

- {{<slashembed name="sprint" key0="options" val0="random 10 to 20" >}} or {{<slashembed name="sprint" key0="options" val0="10-20" >}}

- {{<slashembed name="sprint" key0="options" val0="random micro" >}} or {{<slashembed name="sprint" key0="options" val0="micro" >}}

- {{<slashembed name="sprint" key0="options" val0="random 3d6" >}} or {{<slashembed name="sprint" key0="options" val0="3d6" >}}

On its own, {{<slashembed name="sprint" key0="options" val0="random" >}} spins the [however long](#however-long) wheel.

## "random x to y"

{{<tag-duration>}} {{<tag-random>}}

Give the shortest and longest sprint length you want, and Sprinto picks a length between them at random.

{{<slash name="sprint" key0="options" val0="random 15 to 20" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint random 15 to 20" >}}
{{<slash name="sprint" key0="options" val0="for 15 to 20" >}}
{{<slash name="sprint" key0="options" val0="for 15-20" >}}
{{<slash name="sprint" key0="options" val0="15 to 20" >}}
{{<slash name="sprint" key0="options" val0="15-20" >}}
{{<slash name="sprint" key0="options" val0="roll 1d6 + 14" >}}
{{</alts>}}

This starts a sprint of 15, 16, 17, 18, 19 or 20 minutes, each equally likely. The shortest form is {{<slashembed name="sprint" key0="options" val0="15-20" >}}.

The possible lengths go up in steps. The size of the step depends on the two lengths you give:

| Both lengths are | Step | Example |
| --- | --- | --- |
| whole minutes | 1 minute | `15 to 20` |
| whole or half minutes | 30 seconds | `for 10m to 12m30s` |
| anything else | 1 second | `for 9m01s to 12m55s` |

Only the length is random. The sprint starts after the usual join window.

If the second number is a clock time, such as `:30`, nothing is random: the first number is the minute to start on, and the clock time is the end. `20 to :30` runs from :20 until :30. See [“at”]({{<relref "sprint" >}}#at) and [“until”]({{<relref "sprint" >}}#until).

## Dice

{{<tag-duration>}} {{<tag-random>}}
{{<slash name="sprint" key0="options" val0="roll 3d6" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="3d6" >}}
{{<slash name="sprint" key0="options" val0="for 3d6" >}}
{{<slash name="sprint" key0="options" val0="dice 3d6" >}}
{{<slash name="sprint" key0="options" val0="random 3d6" >}}
{{<atsprinto "sprint 3d6" >}}
{{</alts>}}

`roll 3d6` throws three six-sided dice and adds them up for a length in minutes: 3 to 18 minutes, most often 10 or 11. Lengths in the middle of the range come up more often than lengths at the ends. With `random 3 to 18`, every length from 3 to 18 minutes is equally likely.

| You write | You get |
| --- | --- |
| `d20` | 1 to 20 minutes |
| `3d6+10` | 3d6, plus 10 minutes |
| `3d6-2` | 3d6, less 2 minutes |
| `2d6 + d20 + 10` | 13 to 42 minutes (everything added up) |
| `2d12 + 30s` | 2d12, plus 30 seconds |

Spaces around `+` and `-` are optional. Dice can only be added to a length: you can take minutes off a roll (`3d6-2`), but you can't take a roll off a length, so `20 - 3d6` isn't read as dice.

Limits: up to 100 dice, up to 1,000 sides on each die, and up to 12 parts added together (`2d6 + d20 + 10` has three parts). Dice always count minutes. <!-- (TODO: I might add a multiplier if anyone asks) -->

If the dice come out longer than 60 minutes, Sprinto refuses the sprint, as it would a typed length. For example, `3d20+10` can roll anything from 13 to 70 minutes, and a roll over 60 gets this reply:

{{< reply >}}
Sorry, that sprint is too long. The maximum is 60 minutes. Adding `please` raises the limit a little.
{{< /reply >}}

Add `please` to allow rolls up to 2 hours.

## Named wheels

Each wheel is a list of sprint lengths. When you start the sprint, Sprinto picks one length from the wheel at random. A length listed twice on a wheel comes up twice as often.

### Summary of random sprint wheels

| Long name | Short name | Full range | Usually |
| --- | --- | --- | --- |
| burst | `burst` | 35s to 2m30s | 45s to 2 minutes |
| micro | `micro`, `μ` | 1 to 6 minutes | 1½ to 4½ minutes, most often 3 |
| flash | `flash` | 2½ to 10½ minutes | 3 to 9 minutes |
| not long | `nl` | 5 to 12 minutes | 5 to 10 minutes |
| not too long | `ntl` | 5 to 20 minutes | 7 to 16 minutes |
| not too short | `nts` | 20 to 60 minutes | 23 to 46 minutes |
| however long | `hel` | 5 to 40 minutes | one of six set lengths from 10½ to 25 minutes; 3% of spins give 5, 5½ or 40 |
| i don't know how long | `idk` | 1 to 60 minutes | 6 to 37 minutes, whole minutes only, short far more likely |

About two thirds of spins give a length in the **Usually** range.

For your own range, use [random x to y](#random-x-to-y), where every step between the two lengths is equally likely.

### Burst sprint

{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="burst" >}}
{{<atsprinto "sprint burst" >}}

A random length from 35 seconds to 2½ minutes, usually around a minute and a half, with a short join window of 30 to 60 seconds.

To choose when the sprint starts, add `in`, as with any wheel:

{{<slashembed name="sprint" key0="options" val0="burst in 2" >}}

{{<alts "Details">}}
<p>The burst wheel's 14 slices: 35s, 45s ×2, 60s ×2, 75s ×2, 90s ×2, 100s, 105s, 120s, 135s, 150s.</p>
{{</alts>}}

### Micro sprint

{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="micro" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint micro" >}}
{{< slash name="sprint" key0="options" val0="random micro" >}}
{{< slash name="sprint" key0="options" val0="μ" >}}
{{</alts>}}

A random length from 1 to 6 minutes, most often 3 minutes, with a short join window of 50 to 90 seconds.

### Flash sprint

{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="flash" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint flash" >}}
{{</alts>}}

A random length from 2½ to 10½ minutes.

### Not a long sprint

{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="not long" >}}
{{< alts "Synonyms" >}}
{{< slash name="sprint" key0="options" val0="nl" >}}
{{< atsprinto "sprint nl" >}}
{{< atsprinto "sprint not long" >}}
{{< atsprinto "sprint for not long" >}}
{{</alts>}}

A random length from 5 to 12 minutes.

### But not for _too_ long

{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="not too long" >}}
{{<slash name="sprint" key0="options" val0="ntl" >}}
{{<alts "More synonyms" >}}
{{<atsprinto "sprint ntl" >}}
{{<atsprinto "sprint nlt" >}}
{{<atsprinto "sprint tnl" >}}
{{</alts>}}

A random length from 5 to 20 minutes.

### Not too short

{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="not too short" >}}
{{<slash name="sprint" key0="options" val0="nts" >}}
{{<alts "More synonyms" >}}
{{<atsprinto "sprint nts" >}}
{{</alts>}}

A random length from 20 to 60 minutes, weighted toward the short end: just over half of spins are under 30 minutes, and about a quarter are 40 minutes or more.
{{<alts "Details">}}
<p>The wheel has 67 slices, bunched at the short end. 23 of the slices include seconds, so a spin can give you 26m35s.</p>
{{</alts>}}

### However long

{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="for however long" >}}
{{<slash name="sprint" key0="options" val0="hel" >}}
{{<alts "More synonyms" >}}
{{<slash name="sprint" key0="options" val0="surprise me" >}}
{{<slash name="sprint" key0="options" val0="however long" >}}
{{<atsprinto "sprint hel" >}}
{{<atsprinto "sprint whatever" >}}
{{<atsprinto "sprint random" >}}
{{<atsprinto "sprint rng" >}}
{{<atsprinto "sprint roll" >}}
{{<atsprinto "sprint spin the wheel" >}}
{{</alts>}}

The original Sprinto random sprint: usually 10½ to 25 minutes, with a 3% chance of 5, 5½ or 40 minutes instead.
{{<alts "Details">}}
All 'however long' possibilities (minutes):
<ul>
<li>10m30s, 13m20s, 17, 19, 21, 25. </li>
<li>Rare sprints (3% chance to pick one of these): 40, 5, 5m30s </li>
</ul>
{{</alts>}}

On its own, each of these words spins the however long wheel: `hel`, `however long`, `random`, `rng`, `rnd`, `rand`, `roll`, `dice`, `die`, `wheel`, `spin the wheel`, `surprise me` and `whatever`. In front of a range, dice or another wheel, the word is optional: `random micro` is the same as `micro`.

These words start a sprint only inside a sprint command, such as `/sprint random` or `@Sprinto sprint random`. On its own, {{<atsprintoembed "random" >}} is the dice command: it throws dice and starts no sprint. See [Curious commands]({{<relref "curious" >}}).

### I don't know how long

{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="idk" >}}
{{< alts "More synonyms" >}}
{{< atsprinto "sprint idk" >}}
{{< atsprinto "sprint i dunno" >}}
{{< atsprinto "sprint dunno" >}}
{{< atsprinto "sprint idc" >}}
{{</alts>}}

A random whole number of minutes from 1 to 60, with short sprints far more likely than long ones. A 1-minute sprint is 60 times as likely as a 60-minute sprint.

About a quarter of idk sprints are under 9 minutes, about half are under 18 minutes, and about a quarter are over 30 minutes.

If you give a length as well, such as {{<slashembed name="sprint" key0="options" val0="idk 22 minutes" >}}, the sprint runs for that length.

{{<alts "Motivation and how the 'idk wheel' is weighted">}}
<p>The idk wheel is divided into 1,830 slices: 60 of them are 1 minute, 59 are 2 minutes, 58 are 3 minutes, and so on down to a single slice of 60 minutes. Each extra minute of length is a little less likely than the one before it.</p>
<p>The idea was that you spend longer in long sprints, so there should be fewer of them to make up for it. If every sprint length between 1 and 60 minutes were equally likely, then across many sprints you'd spend nearly all of your sprinting time in the long ones and very little in the short ones. Weighting the wheel toward short sprints is meant to even that out, so that at any given moment you're about as likely to be in a sprint of one length as another.</p>
<p>I'm no mathematician though, so the weighting doesn't balance this out exactly. If you have a better idea, send feedback:</p>
{{<slash name="feedback" key0="text" val0="I'm a mathematics professor at Brown University and I have an idea for improving and generalizing the sprint duration distributions of the IDK sprint wheel using a formula which takes account of... " >}}
{{</alts>}}

## When the length is picked

Sprinto picks the length as soon as you send the command, before the join window opens. Its first message says how the length was picked:

| You start | The first message says |
| --- | --- |
| a wheel, such as `micro` | `...Spinning the micro wheel...` |
| a range, such as `15 to 20` | `...Rolling for a length between 15 and 20 minutes...` |
| dice, such as `3d6` | `...Rolling 3d6...` |

The wheel names in this message are `burst`, `micro`, `flash`, `not long`, `not too long`, `not too short`, `random` (the however long wheel) and `IDK`. A single die, such as `d20`, shows as `1d20`.

## Rolling the same length twice

A wheel or a dice roll gives a fresh length every time, including on a repeat. To keep the length that came up last time, use `identical` in place of `again` — see [again and identical]({{<relref "sprint" >}}#again-and-identical).

In a chain, add `identical` (or `exact`) to give every round that uses the same wheel the same random length. For example, `nl x3 identical` runs three rounds, all with one length picked from the not long wheel. See [Sprint (all options)]({{<relref "sprint" >}}).

## See also

- [Sprint (all options)]({{<relref "sprint" >}}) — every other `/sprint` option, including fixed lengths, start times, presets and flags
- [Sprint (basics)]({{<relref "basics" >}}) — the short version of how to run a sprint
- [Curious commands]({{<relref "curious" >}}) — {{<atsprintoembed "roll" >}} throws dice without starting a sprint, using the same expressions
