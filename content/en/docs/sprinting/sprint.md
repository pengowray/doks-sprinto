---
title : "Sprint (all options)"
description: The sprint command and all its options
lead:
weight: 20
---
## The Sprint Command in detail

{{<slash name="sprint" >}}

Without any options, the default sprint is for 15 minutes in 1 minute: The same as entering:
{{<slash name="sprint" key0="options" val0="for 15 minutes in 1 minute" >}}


<!-- {{<slash name="sprint" key0="options" val0="{{<tag-duration `for 15 minutes`>}} {{<tag-when `in 1 minute`>}} {{<tag-endtime `end 3 minute`>}}" >}} -->

You can change (override) the the {{<param-duration "duration">}} or the  {{<param-when "when">}} parameter or both.
{{<slash name="sprint" key0="options" val0="{{<tag-duration>}} {{<tag-when>}}" >}}

<!-- {{< atsprinto "sprint `duration` `when` `preset` `other`" >}} -->

Here's some examples:

{{<example caption="Sprint for 20 minutes, starting in 2 minutes.">}}
{{<slash name="sprint" key0="options" val0="{{<param-duration `for 20 minutes`>}} {{<param-when `in 2 min`>}}" >}}
{{<slash name="sprint" key0="options" val0="{{<param-duration `20`>}} {{<param-when `2`>}}" >}}
{{</example>}}
{{<example caption="Sprint until 1:30pm, starting immediately. Even simpler, just write: {{<param-duration `until :30`>}} which will sprint {{<param-duration `until half past`>}} without needing to know your timezone">}}
{{<slash name="sprint" key0="options" val0="{{<param-duration `until 1:30 pm`>}} {{<param-when `now`>}}" >}}
{{</example>}}
{{<example caption="Start your sprint at 1:45 in your set timezone. You can use {{<param-duration `at :45`>}} too.">}} <!-- tmi: {{<param-duration `for 15`>}} is optional because it's the bot's default."  -->
{{<slash name="sprint" key0="options" val0="{{<param-when `at 1:45`>}} {{<param-duration `for 15`>}}" >}}
{{</example>}}
{{<example caption="Start a random sprint length, on the minute mark. These and more are explained in detail below. ">}}
{{<slash name="sprint" key0="options" val0="{{<param-duration `for random 20-30`>}} {{<param-when `in 1-2 minutes`>}}" >}}
{{</example>}}

Parameters like the above and below are all optional and can be in any order.

There's also presets (which set both the duration and when the sprint starts); flags such as _quietly_ (which prevents people getting pinged when the sprint is announced); and "endtime", which explicitly sets how long sprinters have to give their final tally.

A few things on this page are new in this release: [chains](#chains) (several sprints in a row from one command), [chimes](#chimes) (a bell part-way through), [repeating the last sprint](#again-and-identical) with `again` or `identical`, and [`explain`](#explain), which shows you what a command would do without running it.

## "for"

{{<tag-duration>}}

How long to sprint for?

{{<slash name="sprint" key0="options" val0="for 20" >}}
{{<slash name="sprint" key0="options" val0="for {{<tag-minutes>}}" >}}

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

More timings:
{{<slash name="sprint" key0="options" val0="{{<tag-duration `for 15 minutes`>}} {{<tag-when `in 1 min`>}} {{<tag-endtime `end 3 min`>}} {{<tag-endtime `late 10 min`>}}" >}}

## Random lengths

{{<tag-duration>}} {{<tag-random>}}

Don't want to decide? Sprinto can pick the length: a range, a throw of the dice, or one of the named wheels.

{{<slash name="sprint" key0="options" val0="random 15 to 20" >}}
{{<slash name="sprint" key0="options" val0="roll 3d6" >}}
{{<slash name="sprint" key0="options" val0="micro" >}}

All of it is on its own page: [Random sprint lengths]({{<relref "random" >}}) covers [random x to y]({{<relref "random" >}}#random-x-to-y), [dice]({{<relref "random" >}}#dice), and the eight wheels — `burst`, `micro`, `flash`, `nl`, `ntl`, `nts`, `hel` and `idk`.

## "until"

{{<tag-duration>}} {{<tag-time>}}

When will the sprint run until?

Example 1:
{{< slash name="sprint" key0="options" val0="until :00" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint until :00" >}}
{{< slash name="sprint" key0="options" val0="to :00" >}}
Using `to` as a synonym for `until` works but is not particularly recommended as it changes its meaning in other contexts.

{{</alts>}}
Run a sprint until the end of the hour, starting in one minute (the bot default).

Example 2:
{{< slash name="sprint" key0="options" val0="until :45 now" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint until :45 now" >}}
{{< atsprinto "sprint till :45 now" >}}
{{</alts>}}
Run a sprint from the start time until quarter-to, starting immediately.

You can list more than one mark with a slash, and Sprinto takes whichever comes first:

{{<example caption="Runs a sprint until :15 or :45, whichever comes first. For example, if the time is 11:32, it will run a sprint until 11:45.">}}
{{<slash name="sprint" key0="options" val0="until :15/45" >}}
{{</example>}}

Including multiple marks like this is mainly useful for setting a default sprint, and then should be combined with `for at least` (below).

### for at least, for at most

{{<tag-duration>}} {{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="until :00/30 for at least 10" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="until :00/30 at least 10" >}}
{{<slash name="sprint" key0="options" val0="until :00/30 no shorter than 10" >}}
{{</alts>}}

The shortest sprint a clock ending may give you. Run to the next `:00` or `:30`, but skip a mark less than 10 minutes off and take the one after it.

{{<slash name="sprint" key0="options" val0="until :00/30 for at least 10 for at most 35" >}}

`for at most` can be used to set an upper bound, but exists largely for completeness.

A channel's default sprint that uses `until` should have a `for at least`.

## Time zones

You can use {{<slashembed name="timezone">}} to set your time zone. If you're in Adelaide or anywhere else with a half-hour difference from everyone else in the world, be sure to set your timezone to make "until" and "at" work as expected.

Note that for custom default sprint settings for your channel or server, the common timezone is still used (that is, without any half-hour or quarter-hour offset from UTC).


{{<example caption="Setting your timezone to Adelaide, Australia, to make {{<param-when `at :15`>}} and {{<param-duration `until :45`>}} work as expected.">}}
{{<slash name="timezone" key0="place" val0="Australia/Adelaide" >}}
{{</example>}}



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

This will start a sprint for 35 minutes in 5 minutes

Note: Durations you can also use seconds or other units if you specify them, for example:

{{<slash name="sprint" key0="options" val0="for 1000 seconds in 45 seconds" >}}
{{<slash name="sprint" key0="options" val0="for .01 day in 0.9 minutes" >}}
{{<slash name="sprint" key0="options" val0="for 10m30s in 1m10s" >}}

Times are read by Sprinto's own time-span parser, a Rust port of [TimeSpanParser](https://github.com/pengowray/TimeSpanParser), which was originally created for Sprinto.

### “at”

{{<tag-when>}} {{<tag-time>}}

{{<slash name="sprint" key0="options" val0="at :30 " >}}
{{<atsprinto "sprint at :30 " >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="on :30" >}}
{{<slash name="sprint" key0="options" val0="from :30" >}}
{{<slash name="sprint" key0="options" val0="@ :30" >}}
{{</alts>}}

At half past the hour (for almost all timezones).

You can leave off either the `:` or the word `at` (but not both).

Change `30` to the minute mark of the time you want the sprint to start. :00 for on the hour, :15 for quarter past, etc.

Add `for x` to set the length of the sprint, for example:

{{<slash name="sprint" key0="options" val0="at :25 for 35" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0=":25 35" >}}
{{<slash name="sprint" key0="options" val0="at 25 til 00" >}}
{{<slash name="sprint" key0="options" val0=":25 to 00" >}}
{{</alts>}}


This runs a sprint from :25 to :00, for 35 minutes.

A range can be used with `to`.

{{<slash name="sprint" key0="options" val0="at :10 to :35" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="at 10 to 35" >}}
{{<slash name="sprint" key0="options" val0="at 10-35" >}}
{{<slash name="sprint" key0="options" val0="from 10 to 35" >}}
{{</alts>}}

Ten past to twenty-five to, a 25 minute sprint. Drop the `at` and it's a [rolled length]({{<relref "random" >}}#random-x-to-y) instead.

A bare number in front of an ending time is the minute to start on:

{{<slash name="sprint" key0="options" val0="15 til 45" >}}

Quarter past to quarter to. Put the number after the word and it's the wait again, so `til 45 15` starts in fifteen minutes.

You can offer more than one time, each minute mark separated by a slash. Sprinto takes whichever comes first. This is mostly useful for creating a default sprint and can be combined with `in at least` if you want to avoid starting too soon (see [in at least](#next-and-in-at-least)).

{{<slash name="sprint" key0="options" val0="at :00/15/30/45 in at least 1" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="next 15 in at least 1" >}}
{{</alts>}}


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

### "next" and "in at least"

{{<tag-when>}} {{<tag-minutes>}} {{<tag-minutes>}}

A "grace" period can also be given to prevent "next" from starting too soon. For example make sure the sprint starts at least 2 minutes from now, but still on the next 10 minute mark:

{{< slash name="sprint" key0="options" val0="next 10 in at least 2" >}}
{{<alts "Synonyms" >}}
{{< atsprinto "sprint next 10 in at least 2" >}}
{{< slash name="sprint" key0="options" val0="next 10 grace 2" >}}
{{< slash name="sprint" key0="options" val0="in 2 to 12" >}}
{{</alts>}}

This will start at the next 10 minute boundary, but not for at least 2 minutes.

`in at least` and `grace` are synonyms.

Setting `in at least` is especially useful when setting a default sprint starting time for the channel or server.

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

Can be started with a single word, for example:

{{<slashembed name="sprint" key0="options" val0="marathon" >}}

| Preset | Meaning | Also spelled |
| --- | --- | --- |
| (default) | for 15m in 1m | |
| `quick` | for 5m in 30s endtime 90s | `quickie`, `fast`, `short`, `brief`, `briefly`, `quickly` |
| `dream` | for 10m, starting on the next 5 minute mark | `dreamy`, `dreamily` |
| `pomo` | for 25m (chain them with `pomo x4`) | `pomodoro` |
| `long` | for 30 in 2.5 to 7.5 mins | `longer`, `slow` |
| `marathon` | for 60 in 7.5 to 13 mins endtime 10, with a halfway bell | `for a marathon` |
| `megathon` | for 120 in 7.5 to 13 mins endtime 10, with a halfway bell | `for ages` |

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

{{<tag-endtime>}} {{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="endtime 10 " >}}
{{<atsprinto "sprint endtime 10 " >}}
{{<alts "More synonyms" >}}
{{<slash name="sprint" key0="options" val0="end 10" >}}
{{<slash name="sprint" key0="options" val0="finish 10" >}}
{{<slash name="sprint" key0="options" val0="timesup 10" >}}
{{<atsprinto "sprint tally time 10" >}}
{{<atsprinto "sprint wc time 10" >}}
{{</alts>}}

How long sprinters have to give their final word count, once the writing time is up. A 15 minute sprint defaults to 3 minutes endtime.

It can be set anywhere from 30 seconds to 30 minutes, or up to an hour for a {{<role "@Sprint MC">}} using `please` (or `pls`).

If you don't set the endtime, the default ranges from 2 to 10 minutes depending on the length of your sprint.

How the default is calculated: 1 minute 30 seconds, plus another 30 seconds per 5 minutes of sprint, and never less than 2 minutes. An hour-long sprint gets 7 minutes 30 seconds. It stops climbing at 10 minutes, and only a sprint of 85 minutes or more gets that far, which needs `please`.

`marathon` and `megathon` include an endtime of 10 minutes as part of the preset, but you can change it by setting a different endtime.

Use {{<atsprintoembed "explain">}} or {{<atsprintoembed "status">}} to check the endtime duration for a currently running sprint.

## late

{{<tag-late>}} {{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="late 20" >}}
{{<alts "More synonyms" >}}
{{<slash name="sprint" key0="options" val0="latetime 20" >}}
{{<slash name="sprint" key0="options" val0="late window 20" >}}
{{<atsprinto "sprint late 20" >}}
{{</alts>}}

After the scoreboard is posted, sprinters can still adjust their word count with {{<slashembed name="late" >}}. The default late window is normally 10 minutes long, counted from the moment writing time ends (not from when the scoreboard is shown). This option changes it to anything up to an hour, or down to zero to disable late entries.

{{<slash name="sprint" key0="options" val0="late none" >}}

Turn late edits off for this sprint, so the scoreboard is final as soon as it's posted. `late 0` and `late off` do the same thing. This can be added to a channel's default sprint, but note that it can be overridden if the sprint specifies `late`.

## join

{{<slash name="sprint" key0="options" val0="for 20 /join 1000" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 20 join 1000" >}}
{{<slash name="sprint" key0="options" val0="for 20 wc 1000" >}}
{{<atsprinto "sprint 20 join 1000" >}}
{{</alts>}}

Start the sprint and join it in one command. A number after `join` is your starting word count, the same as {{<slashembed name="join" key0="word-count" val0="1000" >}}.

Say it once, and put it at the end. It works on a repeated sprint too:

{{<slash name="sprint" key0="options" val0="again /join same" >}}

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

Writes a message of how long to go into chat some way through the sprint.

{{<slash name="sprint" key0="options" val0="for 40 chime -1" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 40 bell -1" >}}
{{<atsprinto "sprint for 40 chimes -1" >}}
{{</alts>}}

The above runs a 40 minute sprint with a notification at one minute remaining (`chime -1`).

The minus sign means minutes from the end of the sprint, and a plain number is minutes after the start. Percentages work too:

| You write | You get |
| --- | --- |
| `chime -2` | 2 minutes before the end |
| `chime 5` | 5 minutes after the start |
| `chime -25%` | a quarter of the sprint left to go |
| `chime 50%` | halfway |
| `chime -10m30s` | 10 minutes 30 seconds before the end |

You can ask for several, separated by commas or spaces, and they can mix forms:

Chimes can be added to the channel or server defaults. Keep in mind if the Discord server notifies members for every message, as that impacts how noticeable (and annoying) the chime is.

You can also choose specifically to receive notifications when there's a chime during a sprint. Check `/settings me` for more.

{{<slash name="sprint" key0="options" val0="for 60 chime -50%, -10, -1" >}}

Up to 5 chimes are allowed per sprint, and they have to be at least a minute apart. Any you include that land outside the writing time are dropped. The sprint's start message says how many will occur.

`marathon` and `megathon` set a halfway bell of their own.

{{<slash name="sprint" key0="options" val0="for 30 no bell" >}}

This runs a 30 minute sprint with chimes off, even if this channel normally sets one.

{{<slash name="sprint" key0="options" val0="marathon no bell" >}}

This runs a marathon sprint (60 minutes) with the half way chime silenced.

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

A bare `all` starts you from zero each round.

Give a count as well and your total carries forward instead:

{{<slash name="join" key0="word-count" val0="all 1000" >}}

Already in this round? Add `all` to your word count and it signs you up for the rest too:

{{<slash name="words" key0="count" val0="1200 all" >}}

You can {{<slashembed name="leave" >}} any time.

Notes

- Details of chain sprinting may change in future.
- There's currently no automatic removal if you miss too many sprints in a chain.

### Stopping a chain early

{{<slash name="sprint" key0="options" val0="last one" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "no more" >}}
{{<atsprinto "stop after this" >}}
{{<atsprinto "wrap up" >}}
{{<atsprinto "end chain" >}}
{{</alts>}}

The round that's running finishes as usual and the rest of the chain is dropped. Only the sprinter who started the chain, or a {{<role "@Sprint MC">}}, can do it. To stop the round that's running as well, use {{<slashembed name="cancel" >}}.

## "again"

Repeat the last sprint that ran in this channel.

{{<slash name="sprint" key0="options" val0="again" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="same" >}}
{{<slash name="sprint" key0="options" val0="repeat" >}}
{{<atsprinto "sprint again" >}}
{{<atsprinto "sprint rerun" >}}
{{</alts>}}

Run the same sprint command again. Anything random is rolled fresh, so a wheel re-spins and a relative start time (`soon`, `in a bit`) is measured from now.

{{<slash name="sprint" key0="options" val0="identical" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="exact" >}}
{{<atsprinto "sprint duplicate" >}}
{{<atsprinto "sprint dupe" >}}
{{</alts>}}

## "identical"

Replay the exact lengths that were used last time, wheel spin and all.

If the last sprint was pinned to a minute mark (`at :30`, `until :45`), `again` won't repeat it, since that moment has been and gone, while `identical` runs the sprint with the identical timings as last time.

## "again" and "identical"

Both `again` and `identical` take overrides on the end, with an optional `but` to make it read like a sentence:

{{<slash name="sprint" key0="options" val0="again for 30" >}}
{{<slash name="sprint" key0="options" val0="identical but at :30" >}}

By default they repeat the _last block_, so after a chain you get the last sprint of it. Add `chain` for the whole thing:

{{<slash name="sprint" key0="options" val0="again chain" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="again whole chain" >}}
{{<slash name="sprint" key0="options" val0="identical chain" >}}
{{</alts>}}

Memory for `again` is per channel. In some rare cases (like when Sprinto has a silent code update behind the scenes) wheel spin data can be lost, and in those cases an `identical` may sometimes behave like an `again`.

## "explain"

{{<slash name="explain" key0="sprint-options" val0="for 25 in 5 chime -5" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="explain for 25 in 5 chime -5" >}}
{{<slash name="sprint" key0="options" val0="peek for 25 in 5" >}}
{{<slash name="sprint" key0="options" val0="preview for 25 in 5" >}}
{{<atsprinto "sprint dry-run for 25 in 5" >}}
{{</alts>}}

Put `explain` at the front of any sprint command and Sprinto tells you what it would do without starting anything. It shows what came from your command, what came from this channel's defaults, and what's just his built-in default, which makes it the fastest way to find out why a sprint isn't behaving the way you expected.

It's a dry run against the clock right now, so a random length gets rolled for the example only.

<!-- On the slash command only you see the answer, and `me` or `private` after the keyword still work and change nothing. `public` is the word that shows it to the room:

{{<slash name="sprint" key0="options" val0="explain public marathon" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="explain aloud marathon" >}}
{{<slash name="sprint" key0="options" val0="explain everyone marathon" >}}
{{</alts>}}
-->

The response to @Sprinto `explain` will always appear in the channel.

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

### "/explain" on its own

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

Example:
{{<slash name="sprint" key0="options" val0="for 90 mins pls" >}}

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
- [Random sprint lengths]({{<relref "random" >}}) — ranges, dice and the wheels, when you'd rather Sprinto picked the length
- [During the sprint]({{<relref "words" >}}) — join, leave, cancel, and setting your word count — commands to use once the sprint has started
- [Sprint (admin)]({{<relref "admin-sprint" >}}) — the few sprint options and commands only available to Sprint MCs and admins
- [Allowed channels (admin)]({{<relref "whitelist" >}}) — admin commands to prevent users running sprints where they're not supposed to.
- [Ping roles (admin)]({{<relref "ping-roles" >}})  — Set up a role to always be pinged
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
- [Carl-bot x Sprinto]({{<relref "carlbot" >}}) — using carl-bot to schedule sprints.
- [Active Sprinter role]({{<relref "ActiveSprinter" >}})  — Setting up a role on your server named {{<role "@Active Sprinters">}}
