---
title : "Sprint (all options)"
description: The sprint command and all its options
lead: 
weight: 20
---
## The Sprint Command in detail

{{<slash name="sprint" key0="options" val0="_duration_ _when_ " >}}
<!-- {{< atsprinto "sprint `duration` `when` `preset` `other`" >}} -->

You can optionally include a "duration" and a "when" parameter, for example:

{{<slash name="sprint" key0="options" val0="for 10 minutes in 2 min" >}}
{{<slash name="sprint" key0="options" val0="until :30 now" >}}
{{<slash name="sprint" key0="options" val0="for 25 at :15 " >}}
{{<slash name="sprint" key0="options" val0="for however long in a bit" >}}

The parameters are all optional and can be in any order.

{{<slash name="sprint" >}}
Without any options, the default sprint is for 15 minutes in 1 minute.

There's also presets (which set both the duration and when the sprint starts); flags such as _quietly_ (which prevents people getting pinged when the sprint is announced); and "endtime", which explicitly sets how long sprinters have to give their final tally.

A few things on this page are new in this release: [chains](#chains) (several sprints in a row from one command), [chimes](#chimes) (a bell part-way through), [repeating the last sprint](#again-and-identical) with `again` or `identical`, and [`explain`](#explain-and-peek), which shows you what a command would do without running it.

## "for"

{{<tag-duration>}} {{<tag-minutes>}}

How long to sprint for?

{{<slash name="sprint" key0="options" val0="for 20" >}}
{{<atsprinto "sprint for 20" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="20" >}}
{{<slash name="sprint" key0="options" val0="for 20 minutes" >}}
{{<slash name="sprint" key0="options" val0="for 1200 seconds" >}}
{{<atsprinto "sprint 20" >}}
{{<atsprinto "sprint for twenty" >}}
{{<atsprinto "/sprint 20" >}}
{{<atsprinto "_sprint 20" >}}
{{</alts>}}
Run a 20 minute sprint. Time is assumed to be in minutes unless you give another unit.

## "for x to y" (a rolled length)

{{<tag-duration>}} {{<tag-random>}}

Give two lengths and Sprinto rolls a random one between them.

{{<slash name="sprint" key0="options" val0="for 15 to 20" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="15 to 20" >}}
{{<slash name="sprint" key0="options" val0="15-20" >}}
{{<atsprinto "sprint 15-20" >}}
{{</alts>}}

A sprint of 15, 16, 17, 18, 19 or 20 minutes, picked at random. The bare form (`15 to 20`, with no `for`) means the same thing.

The roll lands on whole minutes if both ends are whole minutes; on 30 second steps if both ends sit on a half minute (`for 10m to 12m30s`); otherwise on exact seconds (`for 9m01s to 12m55s`).

If the second number is a clock time it's read as an ending time instead, so `20 to :30` still runs _until_ half past.

## Dice

{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="3d6" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 3d6" >}}
{{<slash name="sprint" key0="options" val0="roll 3d6" >}}
{{<atsprinto "sprint 3d6" >}}
{{</alts>}}

Three six-sided dice, thrown separately and added up for a length in minutes: 3 to 18, most often 10 or 11. Unlike `for 3 to 18`, the middle is far likelier than the ends.

| You write | You get |
| --- | --- |
| `d20` | one die, so 1 to 20 minutes |
| `3d6+10` | 3d6, plus 10 minutes |
| `3d6-2` | 3d6, less 2 minutes |
| `2d6 + d20 + 10` | everything added up |
| `2d12 + 30s` | other units work too |

Up to 100 dice, up to 1,000 sides each, and up to 12 things added together. Anything that isn't dice by those rules is read as an ordinary length, so `3d5h` is still three days and five hours.

## "until"

{{<tag-duration>}} {{<tag-time>}}

When will the sprint run until?

Example 1:
{{< slash name="sprint" key0="options" val0="until :00" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint until :00" >}}
{{</alts>}}
Run a sprint until the end of the hour, starting in one minute.

Example 2:
{{< slash name="sprint" key0="options" val0="until :45 now" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint until :45 now" >}}
{{< atsprinto "sprint till :45 now" >}}
{{</alts>}}
Run a sprint from the start time until quarter-to, starting immediately.

You can list more than one mark with a slash, and Sprinto takes whichever comes first:

{{<slash name="sprint" key0="options" val0="until :15/45" >}}

Sprinto assumes you're in a common time zone. If you're in Adelaide or somewhere else with a half-hour difference from everyone else, you'll have to adjust.

### for at least, for at most

{{<tag-duration>}} {{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="until :00/30 for at least 10" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="until :00/30 at least 10" >}}
{{<slash name="sprint" key0="options" val0="until :00/30 no shorter than 10" >}}
{{</alts>}}

The shortest sprint a clock ending may give you. Run to the next `:00` or `:30`, but skip a mark less than 10 minutes off and take the one after it.

{{<slash name="sprint" key0="options" val0="until :00/30 for at least 10 for at most 35" >}}

`for at most` is the other end. If no mark falls between the two, the clock ending is dropped and you get an ordinary 15 minute sprint.

Both only shape an ending given as a clock time. A channel's default sprint that uses `until` has to have a `for at least`.

## Random duration options

Undecided? You can choose a random length for your sprints.

Each wheel has its own list of lengths and picks one at random. A length listed twice comes up twice as often.

`random` in front of anything else that rolls just means "pick one": {{<slashembed name="sprint" key0="options" val0="random 5 to 9" >}}, {{<slashembed name="sprint" key0="options" val0="roll micro" >}}, {{<slashembed name="sprint" key0="options" val0="rng 3d6" >}}. On its own it spins the [however long](#however-long) wheel.

### Burst sprint

{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="burst" >}}
{{<atsprinto "sprint burst" >}}

A very quick sprint with a randomly chosen length from 35 to 150 seconds, usually around a minute and a half. It also opens with a short join window (30 to 60 seconds).
{{<alts "Details">}}
<p>The wheel's 14 slices: 35s, 45s ×2, 60s ×2, 75s ×2, 90s ×2, 100s, 105s, 120s, 135s, 150s.</p>
{{</alts>}}

### Micro sprint

{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="micro" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint micro" >}}
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

The original random sprint. Spin the wheel and start a sprint usually between 10 and 25 minutes, with a tiny chance of being around 5 or 40 minutes
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

Roughly: a quarter of these land under 9 minutes, half land under 18 minutes, and a quarter run longer than 30 minutes.

`idk` can land on any whole minute from 1 to 60.

You can still pin the length yourself and keep the rest: {{<slashembed name="sprint" key0="options" val0="idk 5 minutes" >}} gives you the 5 minutes you asked for.

{{<alts "How the idk wheel is weighted">}}
<p>The wheel has 1,830 slices: 60 of them say one minute, 59 say two minutes, 58 say three, on down to a single slice saying sixty. So every extra minute of length is a little less likely than the one before it, and a 1 minute sprint is 60 times as likely as a 60 minute one.</p>
<p>The idea is that if every length between 1 and 60 minutes were equally likely, then across many sprints you'd spend nearly all of your <em>time</em> inside the long ones and almost never be in a short one. Weighting the wheel toward short sprints evens that out, so at any given moment you're about as likely to be in a sprint of one length as another.</p>
<p>I'm no mathematician though, so if you have a better idea about this kind of thing please leave feedback:</p>
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

`for x to y` creates a custom wheel: every step between the two lengths you give is equally likely. See [above](#for-x-to-y-a-rolled-length).

## When?

### in x minutes

{{<tag-when>}} {{<tag-minutes>}}

{{< slash name="sprint" key0="options" val0="in 5" >}}
{{< atsprinto "sprint in 5" >}}

Sprint in 5 minutes (for the default of 15 minutes).

### for x minutes in y minutes

{{<tag-duration>}} {{<tag-when>}}

{{< slash name="sprint" key0="options" val0="for 35 in 5" >}}

"for" and "in" can be combined with this shortcut:

{{< slash name="sprint" key0="options" val0="35 5" >}}
{{< atsprinto "sprint 35 5" >}}

Which will start a sprint for 35 minutes in 5 minutes

Note: Durations you can also use seconds or other units if you specify them, for example:

{{<slash name="sprint" key0="options" val0="for 1000 seconds in 45 seconds" >}}
{{<slash name="sprint" key0="options" val0="for .01 day in 0.9 minutes" >}}
{{<slash name="sprint" key0="options" val0="for 10m30s in 1m10s" >}}

Times are read by Sprinto's own time-span parser, a Rust port of [TimeSpanParser](https://github.com/pengowray/TimeSpanParser), which was written for Sprinto in the first place.

### at

{{<tag-when>}} {{<tag-time>}}

{{<slash name="sprint" key0="options" val0="at :30 " >}}
{{<atsprinto "sprint at :30 " >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="on :30" >}}
{{<slash name="sprint" key0="options" val0="from :30" >}}
{{<slash name="sprint" key0="options" val0="@ :30" >}}
{{</alts>}}

At half past the hour (for almost all timezones). You can leave off either the `:` or the word `at` (but not both).

Change `30` to the minutes of the time you want the sprint to start. :00 for on the hour, :15 for quarter past, etc.

You can offer more than one mark with a slash and Sprinto takes whichever comes first, which is handy when you don't mind waiting but don't want to wait long:

{{<slash name="sprint" key0="options" val0="at :00/15/30/45" >}}

Two marks with `to` between them set the start and the end at once:

{{<slash name="sprint" key0="options" val0="at :10 to :35" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="at 10 to 35" >}}
{{<slash name="sprint" key0="options" val0="at 10-35" >}}
{{<slash name="sprint" key0="options" val0="from 10 to 35" >}}
{{</alts>}}

Ten past to twenty-five to, a 25 minute sprint. Drop the `at` and it's a [rolled length](#for-x-to-y-a-rolled-length) instead.

A bare number in front of an ending time is the minute to start on:

{{<slash name="sprint" key0="options" val0="15 til 45" >}}

Quarter past to quarter to. Put the number after the word and it's the wait again, so `til 45 15` starts in fifteen minutes.

### Clock idioms

{{<tag-when>}} {{<tag-time>}}

If you'd rather say it in words:

| Words | Same as |
| --- | --- |
| `on the hour`, `top of the hour`, `o'clock` | `at :00` |
| `quarter past` | `at :15` |
| `half past` | `at :30` |
| `quarter to` | `at :45` |
| `next five`, `next ten`, `next quarter`, `next half` | `next 5`, `next 10`, `next 15`, `next 30` |

{{<slash name="sprint" key0="options" val0="for 20 at half past" >}}

### Now

{{<tag-when>}}

{{<slash name="sprint" key0="options" val0="now" >}}
{{<atsprinto "sprint now" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="asap" >}}
{{<slash name="sprint" key0="options" val0="go" >}}
{{<atsprinto "sprint immediately" >}}
{{<atsprinto "sprint right now" >}}
{{<atsprinto "sprint 20 rn" >}}
{{</alts>}}

Start immediately, with no join window. People can still join once it's running.

### next

{{<tag-when>}} {{<tag-minutes>}}
{{<slash name="sprint" key0="options" val0="next 5" >}}
{{<atsprinto "sprint next 5" >}}

Use `next 5` to start at :00 :05 :10 :15 :20 :25 :30 :35 :40 :45 :50 :55

Use `next 10` to start at :00 :10 :20 :30 :40 :50

Use `next 15` to start at :00 :15 :30 :45

For example, if the time right now is 11:32 pm in your time zone, then `next 5` will start the sprint at 11:35 pm; `next 10` will start at 11:40 pm; and `next 15` will start at 11:45pm

### next, grace

{{<tag-when>}} {{<tag-minutes>}} {{<tag-minutes>}}

A "grace" period can also be given to prevent "next" from starting too soon. For example:

{{< slash name="sprint" key0="options" val0="next 10 grace 2" >}}

This will start at the next 10 minute boundary, but not for at least 2 minutes.

`in at least` means the same thing, and is how Sprinto writes it back to you:

{{< slash name="sprint" key0="options" val0="next 10 in at least 2" >}}

These kinds of settings might be useful for setting a default sprint starting time.

### in (minutes) to (minutes)

{{<tag-when>}} {{<tag-minutes>}}  {{<tag-minutes>}}

{{< slash name="sprint" key0="options" val0="in 5 to 10 minutes" >}}
{{< atsprinto "sprint in 5 to 10 minutes" >}}

Starts the sprint in 5 to 10 minutes. If you run this sprint command at 7:14, the sprint will start at 7:20 (in 6 minutes). Sprinto finds the best ("roundest") time to start your sprint in the period given. In order of preference, Sprinto will start your sprint: on the hour, at half past, at quarter past or quarter to, on a 10 minute interval (such as 11:10 or 11:20), on a 5 minute interval (such as 11:05), or on an exact minute. Sprinto will choose whichever can be found in the interval given.

A dash means the same thing as `to`, so {{<slashembed name="sprint" key0="options" val0="in 3-5" >}} works as well.

## Shortcuts

{{<tag-when>}}

Find a nice "round" time to start between these times.

| Shortcut | When will the sprint start |
| --- | --- |
| `now` | in 0s |
| `real soon` or `in a few ticks` | in 30s to 60s |
| `shortly` | in 1 to 2 minutes |
| `soon` | in 2 to 3 minutes |
| `iaf` or `in a few` | in 3 to 5 mins |
| `iab` or `in a bit` | in 2½ to 7½ mins |
| `aab` or `after a bit` | in 7½ to 12½ mins |
| `later` | in 12½ to 17½ mins |

Examples:

{{<slash name="sprint" key0="options" val0="soon" >}}
{{<slash name="sprint" key0="options" val0="for 50 aab" >}}
{{<slash name="sprint" key0="options" val0="for not long in a bit" >}}
{{<atsprinto "sprint 5 real soon" >}}

## Presets

Convenient ways to start a sprint.

| Preset | Meaning | Also spelled |
| --- | --- | --- |
| {{<slashembed name="sprint" >}}  (default) | for 15m in 1m | |
| {{<slashembed name="sprint" key0="options" val0="quick" >}} | for 5m in 30s endtime 90s | `quickie`, `fast`, `short`, `brief`, `briefly`, `quickly` |
| {{<slashembed name="sprint" key0="options" val0="dream" >}} | for 10m, starting on the next 5 minute mark | `dreamy`, `dreamily` |
| {{<slashembed name="sprint" key0="options" val0="pomo" >}} | for 25m (chain them with `pomo x4`) | `pomodoro` |
| {{<slashembed name="sprint" key0="options" val0="long" >}} | for 30 in 2.5 to 7.5 mins | `longer`, `slow` |
| {{<slashembed name="sprint" key0="options" val0="marathon" >}} | for 60 in 7.5 to 13 mins endtime 10, with a halfway bell | `for a marathon` |
| {{<slashembed name="sprint" key0="options" val0="megathon" >}} | for 120 in 7.5 to 13 mins endtime 10, with a halfway bell | `for ages` |

<!-- | `just` | `/sprint now` | -->

`megathon` is over Sprinto's usual one-hour limit, so it asks nicely on your behalf (see `please` under [flags](#sprint-flags)).

You can override any part of a preset. For example,

{{<slash name="sprint" key0="options" val0="quick 10" >}}
is the same as
{{<slash name="sprint" key0="options" val0="for 10 minutes in 30 seconds endtime 90s" >}}

Please send feedback if you have suggestions for other presets or shortcuts.

### Pomodoro

{{<tag-duration>}}

{{<slash name="sprint" key0="options" val0="pomo" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="pomodoro" >}}
{{<atsprinto "sprint pomo x4" >}}
{{</alts>}}

`pomo` is a 25 minute block. On its own it's just a 25 minute sprint; repeat it and you get the pomodoro rhythm, with a 5 minute break between blocks. Ask for five or more blocks and the break after the fourth is 15 minutes, in place of whatever you set `break` to.

{{<slash name="sprint" key0="options" val0="pomo x4" >}}

Four 25 minute blocks, with 5 minute breaks in between. See [chains](#chains) for what `x4` and `break` do.

## endtime

{{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="endtime 10 " >}}
{{<atsprinto "sprint endtime 10 " >}}
{{<alts "More synonyms" >}}
{{<slash name="sprint" key0="options" val0="end 10" >}}
{{<slash name="sprint" key0="options" val0="finish 10" >}}
{{<slash name="sprint" key0="options" val0="timesup 10" >}}
{{<atsprinto "sprint tally time 10" >}}
{{<atsprinto "sprint wc time 10" >}}
{{</alts>}}

How long sprinters have to give their final word count, once the writing time is up.

If you don't set this, the default ranges from 2 to 10 minutes depending on the length of your sprint. A 15 minute sprint gets 3 minutes. How it's calculated: 1 minute 30 seconds, plus another 30 seconds per 5 minutes of sprint, and never less than 2 minutes. An hour-long sprint gets 7 minutes 30 seconds. It stops climbing at 10 minutes, and only a sprint of 85 minutes or more gets that far, which needs `please`. `marathon` and `megathon` set their endtime to 10 minutes themselves.

It can be set anywhere from 30 seconds to 30 minutes, or up to an hour for a {{<role "@Sprint MC">}} using `please`.

Use {{<atsprintoembed "status">}} to check the endtime duration for a currently running sprint.

## late

{{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="late 20" >}}
{{<alts "More synonyms" >}}
{{<slash name="sprint" key0="options" val0="latetime 20" >}}
{{<slash name="sprint" key0="options" val0="late window 20" >}}
{{<atsprinto "sprint late 20" >}}
{{</alts>}}

After the scoreboard is posted, people can still fix their number with {{<slashembed name="late" >}}. That window is normally 10 minutes long (counted from the moment writing time ended), and this option changes it. Anything up to an hour is allowed.

{{<slash name="sprint" key0="options" val0="late none" >}}

Turn late edits off for this sprint, so the scoreboard is final as soon as it's posted. `late 0` and `late off` do the same thing.

## join

{{<slash name="sprint" key0="options" val0="for 20 join" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 20 wc 1000" >}}
{{<atsprinto "sprint 20 join 1000" >}}
{{</alts>}}

Start the sprint and be in it, in one command. A number after `join` is your starting word count, the same as {{<slashembed name="join" key0="word-count" val0="1000" >}}. If the sprint doesn't start, you aren't joined to anything.

Say it once, and put it at the end. It works on a repeat too: {{<slashembed name="sprint" key0="options" val0="again join same" >}}.

`wc time 10` still means [endtime](#endtime), not a word count.

## Sprint flags

| Keyword | Meaning |
| --- | --- |
| `quietly` | Don't ping anyone to announce the sprint. Synonyms: `quiet`, `silent`, `silently` |
| `noping` | Don't ping anyone, but leave everything else alone. Synonyms: `no ping`, `no pings` |
| `noff` | "No fast finish" — Always wait the full ending time for final word counts before showing the final results (instead of speeding it up if everyone's given their word counts). Synonyms: `no ff`, `no fast finish` |
| `ff` | The opposite: allow the fast finish, even if this channel normally turns it off. Synonym: `fast finish` |
| `nops` | Leave off the P.S. line at the bottom of the sprint messages. Synonym: `no ps` |
| `no bell` | No mid-sprint chimes at all. See [chimes](#chimes). Synonyms: almost any way of saying it, such as `no chime`, `no bells`, `nobell`, `zero chimes`, `without any bells`, `chime none`, `chime off`. `chime 0` is also assumed to mean no chimes. |
| `please` | Ask Sprinto to do things he wouldn't normally, such as running a sprint up to 2 hours. Synonyms: `pls`, `thanks`, `danke`, and a long list of other polite (and impolite) phrasings |
| `lock` | Lock the sprint, meaning only a Sprint MC can cancel it. Synonyms: `locked`, `nocancel`, `uncancellable`. See: [sprint admin commands]({{< relref "admin-sprint" >}}) |

Examples:
{{<slash name="sprint" key0="options" val0="for 5 quietly" >}}
Don't alert anyone about the start of your 5 minute sprint.

{{<slash name="sprint" key0="options" val0="marathon endtime 12 noff" >}}
Run a 1 hour (marathon) sprint, give 12 minutes for sprinters to give or adjust their final word counts, and don't show the scoreboard until those 12 minutes are up.

{{<slash name="sprint" key0="options" val0="for 1.5hr in 5 pls" >}}
Run a 90 minute sprint in 5 minutes

## Chimes

{{<tag-minutes>}}

A chime is a quiet bell part way through a sprint, so you know where you are without checking the clock. There are none unless somebody asks for one: your command, this channel's default sprint, or a preset that sets its own.

{{<slash name="sprint" key0="options" val0="for 40 chime -10" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 40 bell -10" >}}
{{<atsprinto "sprint for 40 chimes -10" >}}
{{</alts>}}

Ring at 10 minutes remaining.

A minus sign counts back from the end, and a plain number counts forward from the start. Percentages work too:

| You write | You get |
| --- | --- |
| `chime -5` | 5 minutes before the end |
| `chime 5` | 5 minutes after the start |
| `chime -25%` | a quarter of the sprint left to go |
| `chime 50%` | halfway |
| `chime -10m30s` | 10 minutes 30 seconds before the end |

You can ask for several, separated by commas or spaces, and they can mix forms:

{{<slash name="sprint" key0="options" val0="for 60 chime -50%, -10, -1" >}}

Up to 5 chimes per sprint, and they have to be at least a minute apart. Any of yours that land outside the writing time are dropped, and the start message says how many. `marathon` and `megathon` set a halfway bell of their own, and nothing else.

{{<slash name="sprint" key0="options" val0="for 30 no bell" >}}

Silence, even if this channel normally sets one.

How many of those bells actually ping _you_ is your own setting, and out of the box none of them do: see {{<atsprintoembed "chimes">}}.

## Chains

{{<tag-duration>}}

One command, several sprints in a row. Separate the blocks with `then`:

{{<slash name="sprint" key0="options" val0="for 20 then for 10" >}}
{{<atsprinto "sprint 20 then 10" >}}

Repeat a block with `x` or `times`:

{{<slash name="sprint" key0="options" val0="for 20 x3" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 20 times 3" >}}
{{</alts>}}

And set the gap between blocks with `break` (or `rest`):

{{<slash name="sprint" key0="options" val0="for 25 x4 break 5" >}}

The gap is 5 minutes if you don't say otherwise, and a chain can be at most 8 blocks long. In a `pomo` chain the break after every fourth block is 15 minutes, whatever you set here.

Anything you set before the first `then` (other than the length and the start time) carries across the whole chain, so you only have to say `quietly` or `chime -1` once:

{{<slash name="sprint" key0="options" val0="for 20 quietly chime -5 then for 30 then for 10" >}}

Add `identical` (or `exact`) and blocks using the same wheel share one spin, instead of each rolling their own:

{{<slash name="sprint" key0="options" val0="nl x3 identical" >}}

Three sprints of the same randomly chosen length, rather than three different ones.

### Joining each round

The break between blocks is the next block's join window, so every round posts its own invitation, start, time's-up and scoreboard, marked `Round n of N`. Nobody carries over: everyone joins again each round, from zero unless they give a starting count. The last round's scoreboard adds the whole chain up.

To be in for the rest of the chain without catching each join window, add `all`:

{{<slash name="join" key0="word-count" val0="all" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "join every sprint" >}}
{{<atsprinto "join all in the chain" >}}
{{</alts>}}

A bare `all` starts you from zero each round. Give a count as well and your total carries forward instead: {{<slashembed name="join" key0="word-count" val0="all 1000" >}}. Already in this round? Add `all` to your word count and it signs you up for the rest too: {{<slashembed name="words" key0="count" val0="1200 all" >}}. {{<slashembed name="leave" >}} takes it back.

### Stopping a chain early

{{<slash name="sprint" key0="options" val0="last one" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "no more" >}}
{{<atsprinto "stop after this" >}}
{{<atsprinto "wrap up" >}}
{{<atsprinto "end chain" >}}
{{</alts>}}

The round that's running finishes as usual and the rest of the chain is dropped. Only the sprinter who started the chain, or a {{<role "@Sprint MC">}}, can do it. To stop the round that's running as well, use {{<slashembed name="cancel" >}}.

## `again` and `identical`

Repeat the last sprint that ran in this channel.

{{<slash name="sprint" key0="options" val0="again" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="same" >}}
{{<slash name="sprint" key0="options" val0="repeat" >}}
{{<atsprinto "sprint again" >}}
{{<atsprinto "sprint rerun" >}}
{{</alts>}}

Run the same command again. Anything random is decided fresh, so a wheel re-spins and a relative start time (`soon`, `in a bit`) is measured from now.

{{<slash name="sprint" key0="options" val0="identical" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="exact" >}}
{{<atsprinto "sprint duplicate" >}}
{{<atsprinto "sprint dupe" >}}
{{</alts>}}

Replay the exact lengths that were used last time, wheel spin and all.

If the last sprint was pinned to a clock mark (`at :30`, `until :45`), `again` won't repeat it, since that moment has been and gone. It'll point you at `identical`, which replays the length instead.

Both take overrides on the end, with an optional `but` to make it read like a sentence:

{{<slash name="sprint" key0="options" val0="again for 30" >}}
{{<slash name="sprint" key0="options" val0="identical but at :30" >}}

By default they repeat the _last block_, so after a chain you get the last sprint of it. Add `chain` for the whole thing:

{{<slash name="sprint" key0="options" val0="again chain" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="again whole chain" >}}
{{<slash name="sprint" key0="options" val0="identical chain" >}}
{{</alts>}}

The memory is per channel, so `again` in one channel doesn't pick up another channel's sprint. If Sprinto has restarted since, he rebuilds it from the channel's recent history; that gets the shape and the lengths back, but the original wheel spin isn't recorded, so an `identical` recalled that way behaves like an `again`.

## `explain` and `peek`

{{<slash name="sprint" key0="options" val0="explain for 25 in 5 chime -5" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="peek for 25 in 5" >}}
{{<slash name="sprint" key0="options" val0="preview for 25 in 5" >}}
{{<atsprinto "sprint dry-run for 25 in 5" >}}
{{</alts>}}

Put `explain` at the front of any sprint command and Sprinto tells you what it would do without starting anything. It shows what came from your command, what came from this channel's defaults, and what's just his built-in default, which makes it the fastest way to find out why a sprint isn't behaving the way you expected.

It's a dry run against the clock right now, so a random length gets rolled for the example only.

On the slash command the answer goes to you alone. `peek`, `me` and `private` say the same thing. `public` is the word that shows it to the room:

{{<slash name="sprint" key0="options" val0="explain public marathon" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="explain aloud marathon" >}}
{{<slash name="sprint" key0="options" val0="explain everyone marathon" >}}
{{</alts>}}

An @Sprinto `explain` lands in the channel whatever you say.

Two more choices go in front of the sprint options. Which sprint to describe:

| Word | What it explains |
| --- | --- |
| `running` | the sprint going on now |
| `here` | a new sprint in this channel |
| `plain` | a new sprint with the channel and server defaults left out |

And how much of it:

| Word | What you get |
| --- | --- |
| `brief` | the settings only |
| `sources` | each setting and where it came from. This is what you get by default |
| `timeline` | minute by minute |
| `full` | everything above |

{{<slash name="sprint" key0="options" val0="explain full plain pomo x4" >}}

### `/explain` on its own

{{<slash name="explain" >}}
{{<atsprinto "explain" >}}

`explain` is a command in its own right too. Run it bare and it describes the sprint running here; if none is running, it describes what a new sprint in this channel would do.

{{<slash name="explain" key0="what" val0="A new sprint in this channel" key1="detail" val1="Minute-by-minute timeline" >}}

`what` and `detail` are the two lists above, on a menu. `sprint-options` takes a sprint command to try out, and `post` shows the answer to the channel. Otherwise only you see it, with a dropdown to change the detail and a **Post to channel** button.

## Limits

Sprinto will say no to some things, and `please` genuinely helps with a few of them.

| Thing | Normally | With `please` |
| --- | --- | --- |
| Sprint length | 30 seconds to 1 hour | up to 2 hours |
| How far ahead it can start | 1 hour (50 minutes for a clock mark like `at :30`) | 90 minutes, or 2 hours for a {{<role "@Sprint MC">}} |
| endtime | 30 seconds to 30 minutes | up to 1 hour for a {{<role "@Sprint MC">}} |
| Chimes per sprint | 5, at least a minute apart | same |
| Blocks in a chain | 8 | same |

<!-- | `delay <minutes>` | (removed) Delay the opening of the sprint by this many minutes. I've effectively removed this feature as it didn't seem useful. I can enable it on your server if you really want but you'll have to let me know why you want it). If your start time is too far into the future, part of the time will be converted into a delay. | -->
<!-- | `help` | Gives you a link to this wiki page | -->

<!--
## `:<MM>`

Where you see `:<MM>` it refers to a clock time without the hours. For example, to start a sprint at 7:35pm, you'd use `/sprint at :35`. There's no ambiguity because Sprinto can only start sprints less than an hour in advance. 

Use `/sprint now` to start a sprint immediately. If you try to start a sprint `at :35` when it's currently 7:35, Sprinto will think you want to start in about an hour (because 7:35:00 has already passed, so 8:35:00 is the next match for `:35`).

Note you can leave off the colon (`:`) so long as you remember to include the keyword `at` or `until`.

### Timezone notes for 'at' and 'until'

Sprinto doesn't know your timezone, and assumes you have a more typical one:

> Newfoundland, India, Iran, Afghanistan, Burma, Sri Lanka, the Marquesas, as well as parts of Australia use half-hour deviations from standard time, and some nations, such as Nepal, and some provinces, such as the Chatham Islands of New Zealand, use quarter-hour deviations. 
> — via Wikipedia, "[Time zone](https://en.wikipedia.org/wiki/Time_zone)"

Sorry, Sprinto can't adjust for Adelaidians and other half-hour or quarter-hour deviants, so if you are a timezone deviant please just pretend you're anywhere else in the world when using the `at :<MM>` and `until :<MM>` parameters. If this is an actual major issue for your Discord server, please let me know.
-->

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Sprint (basics)]({{<relref "basics" >}}) — common ways to use `/sprint` — like this page but much shorter and less complete
- [During the sprint]({{<relref "words" >}}) — join, leave, cancel, and setting your word count — commands to use once the sprint has started
- [Sprint (admin)]({{<relref "admin-sprint" >}}) — the few sprint options and commands only available to Sprint MCs and admins
- [Allowed channels (admin)]({{<relref "whitelist" >}}) — admin commands to prevent users running sprints where they're not supposed to.
- [Ping roles (admin)]({{<relref "ping-roles" >}})  — Set up a role to always be pinged
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
- [Carl-bot x Sprinto]({{<relref "carlbot" >}}) — using carl-bot to schedule sprints.
- [Active Sprinter role]({{<relref "ActiveSprinter" >}})  — Setting up a role on your server named {{<role "@Active Sprinters">}}
