---
title : "Random sprint lengths"
description: Random ranges, dice, and the named wheels that pick a sprint length for you
lead:
weight: 25
---

Undecided? Let Sprinto pick how long the sprint runs.

There are three ways to do it: give a range, throw dice, or name one of the wheels.

{{<slash name="sprint" key0="options" val0="random 15 to 20" >}}
{{<slash name="sprint" key0="options" val0="roll 3d6" >}}
{{<slash name="sprint" key0="options" val0="micro" >}}

## "random x to y"

{{<tag-duration>}} {{<tag-random>}}

Give the shortest and longest possible durations you'd like for a sprint. Sprinto spins the wheel and picks a length at random from the range you give.

{{<slash name="sprint" key0="options" val0="random 15 to 20" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint random 15 to 20" >}}
{{<slash name="sprint" key0="options" val0="for 15 to 20" >}}
{{<slash name="sprint" key0="options" val0="for 15-20" >}}
{{<slash name="sprint" key0="options" val0="15 to 20" >}}
{{<slash name="sprint" key0="options" val0="15-20" >}}
{{<slash name="sprint" key0="options" val0="roll 1d6 + 14" >}}
{{</alts>}}

The above starts a sprint of 15, 16, 17, 18, 19 or 20 minutes, picked at random.

You can also shorten it to just {{<slashembed name="sprint" key0="options" val0="15-20" >}} (see synonyms for more)


The roll lands on whole minutes if both ends are whole minutes; on 30 second steps if both are half minutes (`for 10m to 12m30s`); otherwise, for something like (`for 9m01s to 12m55s`), you get a sprint which starts on a random second between those.

If the second number is a clock time it's no longer taken as random, but as an ending time instead, and the first is the minute to start on, so `20 to :30` runs from :20 until half past. (see [“at”]({{<relref "sprint" >}}#at) and [“until”]({{<relref "sprint" >}}#until))

## Dice

{{<tag-duration>}} {{<tag-random>}}
{{<slash name="sprint" key0="options" val0="roll 3d6" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="3d6" >}}
{{<slash name="sprint" key0="options" val0="for 3d6" >}}
{{<atsprinto "sprint 3d6" >}}
{{</alts>}}

Three six-sided dice, thrown separately and added up for a length in minutes: 3 to 18, most often 10 or 11. Unlike `random 3 to 18`, the middle range of sprint lengths is more likely than the extremes (because dice).

| You write | You get |
| --- | --- |
| `d20` | 1 to 20 minutes |
| `3d6+10` | 3d6, plus 10 minutes |
| `3d6-2` | 3d6, less 2 minutes |
| `2d6 + d20 + 10` | 13 to 42 minutes (everything added up) |
| `2d12 + 30s` | other units work too |

Limits: Up to 100 dice, up to 1,000 sides each, and up to 12 things added together. Dice are in minutes <!-- (TODO: I might add a multiplier if anyone asks) -->

## Named wheels

Each wheel has a set of different sprints, and one gets picked at random at the start of the sprint. The sprints are in minutes, and a length listed twice comes up twice as often.

`random` is optional in front of a wheel name or dice roll:

- {{<slashembed name="sprint" key0="options" val0="random 10 to 20" >}} or {{<slashembed name="sprint" key0="options" val0="10-20" >}}

- {{<slashembed name="sprint" key0="options" val0="random micro" >}} or {{<slashembed name="sprint" key0="options" val0="micro" >}}

- {{<slashembed name="sprint" key0="options" val0="random 3d6" >}} or {{<slashembed name="sprint" key0="options" val0="3d6" >}}

- But by itself {{<slashembed name="sprint" key0="options" val0="random" >}} spins the [however long](#however-long) wheel.


### Burst sprint

{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="burst" >}}
{{<atsprinto "sprint burst" >}}

A very quick sprint with a randomly chosen length from 35 to 150 seconds, usually around a minute and a half. It also opens with a short join window (30 to 60 seconds).

As with all wheels, the join window can be overriden (changed), for example:

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

μ-sprint for a random duration between 1 and 6 minutes, plus a short join window of 50 to 90 seconds.

### Flash sprint

{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="flash" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint flash" >}}
{{</alts>}}

Sprint for a random duration between 2.5 and 10.5 minutes.

### Not a long sprint

{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="not long" >}}
{{< alts "Synonyms" >}}
{{< slash name="sprint" key0="options" val0="nl" >}}
{{< atsprinto "sprint nl" >}}
{{< atsprinto "sprint not long" >}}
{{< atsprinto "sprint for not long" >}}
{{</alts>}}

Start a sprint for between 5 and 12 minutes (randomly decided).

### But not for _too_ long

{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="not too long" >}}
{{<slash name="sprint" key0="options" val0="ntl" >}}
{{<alts "More synonyms" >}}
{{<atsprinto "sprint ntl" >}}
{{<atsprinto "sprint nlt" >}}
{{<atsprinto "sprint tnl" >}}
{{</alts>}}

Spin the wheel and start a sprint that's between 5 and 20 minutes.

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

The original Sprinto random sprint. Spin the wheel and start a sprint usually between 10 and 25 minutes, with a tiny chance of being around 5 or 40 minutes.
{{<alts "Details">}}
All 'however long' possibilities (minutes):
<ul>
<li>10m30s, 13m20s, 17, 19, 21, 25. </li>
<li>Rare sprints (3% chance to pick one of these): 40, 5, 5m30s </li>
</ul>
{{</alts>}}

### I don't know how long

{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="idk" >}}
{{< alts "More synonyms" >}}
{{< atsprinto "sprint idk" >}}
{{< atsprinto "sprint i dunno" >}}
{{< atsprinto "sprint dunno" >}}
{{< atsprinto "sprint idc" >}}
{{</alts>}}

Sprint between 1 and 60 minutes, with short sprints far more likely than long ones. A one-minute sprint is 60 times as likely as a 60 minute one.

Roughly: a quarter of idk-sprints land under 9 minutes, half land under 18 minutes, and a quarter run longer than 30 minutes.

`idk` can land on any whole minute from 1 to 60.

You can also say idk and still pick the length:

{{<slashembed name="sprint" key0="options" val0="idk 22 minutes" >}}

{{<alts "Motivation and how the 'idk wheel' is weighted">}}
<p>The idk wheel is divided into 1,830 slices: 60 of them say one minute, 59 say two minutes, 58 say three, on down to a single slice saying sixty. So every extra minute of length is a little less likely than the one before it, and a 1 minute sprint is 60 times as likely as a 60 minute one.</p>
<p>The idea was that you spend longer in long sprints so there should be fewer of them to compensate. If every sprint length between 1 and 60 minutes were equally likely, then across many sprints you'd spend nearly all of your sprinting time doing the long ones and rarely short one. Weighting the wheel toward short sprints evens that out, so at any given moment you're about as likely to be in a sprint of one length as another.</p>
<p>I'm no mathematician though, so the weighting is not that clever or correct to balance it out correctly. If you have a better idea about this kind of thing please feel free to leave feedback:</p>
{{<slash name="feedback" key0="text" val0="I'm a mathematics professor at Brown University and I have an idea for improving and generalizing the sprint duration distributions of the IDK sprint wheel using a formula which takes account of... " >}}
{{</alts>}}

### Not too short

{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="not too short" >}}
{{<slash name="sprint" key0="options" val0="nts" >}}
{{<alts "More synonyms" >}}
{{<atsprinto "sprint nts" >}}
{{</alts>}}

Sprint for between 20 and 60 minutes, weighted toward the short end. Most spins land in the twenties or thirties, and the long end is thin.
{{<alts "Details">}}
<p>The wheel has 67 slices, bunched at the short end: just over half are under 30 minutes, and about a quarter are 40 minutes or more. They aren't all whole minutes, so a spin can hand you 26m35s.</p>
{{</alts>}}

### Summary of random sprint wheels

| Long name | Short name | Full range | Usually |
| --- | --- | --- | --- |
| burst | `burst` | 35s to 2m30s | 45s to 2 minutes |
| micro | `micro`, `μ` | 1 to 6 minutes | 1.5 to 4.5 minutes, most often 3 |
| flash | `flash` | 2.5 to 10.5 minutes | 3 to 9 minutes |
| not long | `nl` | 5 to 12 minutes | 5 to 10 minutes |
| not too long | `ntl` | 5 to 20 minutes | 7 to 16 minutes |
| not too short | `nts` | 20 to 60 minutes | 23 to 46 minutes |
| however long | `hel` | 5 to 40 minutes | one of six set lengths, 10.5 to 25 minutes, with an odd chance of 5, 5.5 or 40 |
| i don't know how long | `idk` | 1 to 60 minutes | 6 to 37 minutes, whole minutes only, short far more likely |

**Usually** is where about two thirds of spins land. The rest fall elsewhere inside the full range.

`random x to y` creates a custom wheel: every step between the two lengths you give is equally likely. See [above](#random-x-to-y).

## Rolling the same length twice

A wheel or a dice roll gives a fresh length every time, including on a repeat. To keep the length that came up last time, use `identical` in place of `again` — see [again and identical]({{<relref "sprint" >}}#again-and-identical).

## See also

- [Sprint (all options)]({{<relref "sprint" >}}) — every other `/sprint` option, including fixed lengths, start times, presets and flags
- [Sprint (basics)]({{<relref "basics" >}}) — the short version of how to run a sprint
- [Curious commands]({{<relref "curious" >}}) — {{<slashembed name="roll" >}} throws dice on their own, using the same expressions
