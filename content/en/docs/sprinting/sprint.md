---
title : "Sprint (all options)"
description: Every option for the /sprint command, with examples
lead: "Every option you can type in /sprint, with examples: length, start time, presets, flags, chimes, chains and repeats."
weight: 20
url: "docs/sprint-all-options"
---
## The sprint command in detail

{{<slash name="sprint" >}}

`/sprint` on its own starts the default sprint. Sprinto's built-in default is 15 minutes of writing, starting in 1 minute, the same as:
{{<slash name="sprint" key0="options" val0="for 15 minutes in 1 minute" >}}

A channel or server can set its own default sprint: see [Channel and server defaults](#channel-and-server-defaults).

<!-- {{<slash name="sprint" key0="options" val0="{{<tag-duration `for 15 minutes`>}} {{<tag-when `in 1 minute`>}} {{<tag-endtime `end 3 minute`>}}" >}} -->

You can change the {{<param-duration "duration">}}, the {{<param-when "start time">}}, or both:
{{<slash name="sprint" key0="options" val0="{{<tag-duration>}} {{<tag-when>}}" >}}

<!-- {{< atsprinto "sprint `duration` `when` `preset` `other`" >}} -->

Some examples:

{{<example caption="Sprint for 20 minutes, starting in 2 minutes.">}}
{{<slash name="sprint" key0="options" val0="{{<param-duration `for 20 minutes`>}} {{<param-when `in 2 min`>}}" >}}
{{<slash name="sprint" key0="options" val0="{{<param-duration `20`>}} {{<param-when `2`>}}" >}}
{{</example>}}
{{<example caption="Write until 1:30 pm, starting now. A time of day like `1:30 pm` needs your time zone: see [Time zones](#time-zones). {{<param-duration `until :30`>}} ends at the next half past the hour and works without a time zone.">}}
{{<slash name="sprint" key0="options" val0="{{<param-duration `until 1:30 pm`>}} {{<param-when `now`>}}" >}}
{{</example>}}
{{<example caption="Start at 1:45 by the clock in your time zone. {{<param-when `at :45`>}} starts at the next :45 and works without a time zone.">}} <!-- tmi: {{<param-duration `for 15`>}} is optional because it's the bot's default."  -->
{{<slash name="sprint" key0="options" val0="{{<param-when `at 1:45`>}} {{<param-duration `for 15`>}}" >}}
{{</example>}}
{{<example caption="A random length between 20 and 30 minutes, starting on the minute, 1 to 2 minutes from now. These options and more are explained below.">}}
{{<slash name="sprint" key0="options" val0="{{<param-duration `for random 20-30`>}} {{<param-when `in 1-2 minutes`>}}" >}}
{{</example>}}

All options are optional, and you can type them in any order.

Other options include [presets](#presets), which set the length and the start time together; [flags](#sprint-flags) such as `quietly`, which announces the sprint without pinging anyone; and [`endtime`](#endtime), the time sprinters have to post their final word count.

### Typing the options

As you type in the `options` box, Sprinto suggests commands:

- The first suggestion shows how Sprinto reads what you've typed. If Sprinto would refuse the command, the reason follows a `#`, so you see it before you send.
- The suggestions after it complete the word you're typing. An empty box suggests a few common options.

Pick a suggestion to put it in the box, or send what you typed.

| You type | What happens |
| --- | --- |
| `20 in 1 ?` or `20 in 1 help` | Only you see the answer: up to 3 one-line explanations, starting with the option just before the `?` (here, `in`), then a link to this page. No sprint starts. |
| `?` | Sprinto answers with a link to this page. |
| `20 in 5?` | The sprint starts. A `?` with no space before it isn't a question. |
| `20 in 2 # starts in two minutes` | Starts `20 in 2`. A `#` followed by a space starts a note, and Sprinto ignores everything after it. `#20`, with no space, is a 20-minute sprint. |
| `20 (let's go team)` | Starts a 20-minute sprint and posts the text in brackets, in bold, with the sprint's announcement. Square brackets work too. Brackets inside a `#` note aren't posted. |

Sprinto ignores small joining words, so `starting in 8`, `run for 30 minutes` and `start a 30 minute sprint` all work. Quote marks around a pasted command are ignored, and so is a pasted `options:` label.

You can also start a sprint by mentioning Sprinto: `@Sprinto sprint 20`, or the short form `@Sprinto s 20`. `@Sprinto s` on its own starts the default sprint. `_sprint 20` and `_s 20` work too, and so do `@Sprinto start sprint 20`, `@Sprinto run sprint 20` and `@Sprinto war start 20`.

## "for"

{{<tag-duration>}}

Set the sprint length: how long everyone writes.

{{<slash name="sprint" key0="options" val0="for 20" >}}
{{<slash name="sprint" key0="options" val0="for {{<tag-minutes>}}" >}}

{{<atsprinto "sprint for 20" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="20" >}}
{{<slash name="sprint" key0="options" val0="for 20 minutes" >}}
{{<slash name="sprint" key0="options" val0="for 1200 seconds" >}}
{{<atsprinto "sprint 20" >}}
{{<atsprinto "s 20" >}}
{{<atsprinto "sprint for twenty" >}}
{{<atsprinto "/sprint 20" >}}
{{<atsprinto "_sprint 20" >}}
{{</alts>}}
A 20-minute sprint. A number with no unit is in minutes.

Length, start time, `endtime` and `late` together:
{{<slash name="sprint" key0="options" val0="{{<tag-duration `for 15 minutes`>}} {{<tag-when `in 1 min`>}} {{<tag-endtime `end 3 min`>}} {{<tag-endtime `late 10 min`>}}" >}}

### for the next

{{<tag-duration>}} {{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="for the next 30" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for next 30" >}}
{{<slash name="sprint" key0="options" val0="for the next half hour" >}}
{{</alts>}}

Writing starts now and stops 30 minutes from now. Any wait before the start comes out of the 30 minutes: `for the next 30 in at least 3` waits 3 minutes, then writes for 27. `for the next hour` is 60 minutes.

If the wait uses up all the time, Sprinto refuses:

{{< reply >}}
Sorry, waiting 5 minutes uses up the next 5 minutes, so there'd be no writing time left. Ask for longer, or wait less.
{{< /reply >}}

## Random lengths

{{<tag-duration>}} {{<tag-random>}}

Let Sprinto pick the length: from a range, with dice, or with one of the named wheels.

{{<slash name="sprint" key0="options" val0="random 15 to 20" >}}
{{<slash name="sprint" key0="options" val0="roll 3d6" >}}
{{<slash name="sprint" key0="options" val0="micro" >}}

[Random sprint lengths]({{<relref "random" >}}) covers [random x to y]({{<relref "random" >}}#random-x-to-y), [dice]({{<relref "random" >}}#dice), and the eight wheels — `burst`, `micro`, `flash`, `nl`, `ntl`, `nts`, `hel` and `idk`. The sprint's first message says which wheel was spun, or which range or dice were rolled.

## "until"

{{<tag-duration>}} {{<tag-time>}}

End the writing time at a minute mark on the clock.

Example 1:
{{< slash name="sprint" key0="options" val0="until :00" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint until :00" >}}
{{< slash name="sprint" key0="options" val0="to :00" >}}
`to` works too, but `to` means something else in other options (`at :10 to :35`, `random 15 to 20`), so `until` is clearer.

{{</alts>}}
Write until the next :00 on the clock, starting in 1 minute (the built-in default).

Example 2:
{{< slash name="sprint" key0="options" val0="until :45 now" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint until :45 now" >}}
{{< atsprinto "sprint till :45 now" >}}
{{</alts>}}
Start writing now and stop at :45.

`until the next hour` is the same as `until :00`. To end at a time of day, such as `until 15:00`, see [Times of day](#times-of-day).

You can list more than one mark with a slash, and Sprinto takes whichever comes first:

{{<example caption="Ends at :15 or :45, whichever comes first. At 11:32, the sprint runs until 11:45.">}}
{{<slash name="sprint" key0="options" val0="until :15/45" >}}
{{</example>}}

Several marks are mostly useful in a channel's default sprint. A default like this must also include `for at least`.

### for at least, for at most

{{<tag-duration>}} {{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="until :00/30 for at least 10" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="until :00/30 at least 10" >}}
{{<slash name="sprint" key0="options" val0="until :00/30 no shorter than 10" >}}
{{<slash name="sprint" key0="options" val0="until :00/30 for no less than 10" >}}
{{</alts>}}

With `until` marks, `for at least 10` makes the sprint at least 10 minutes long. This example ends at the next :00 or :30, but if that mark is less than 10 minutes away, it ends at the mark after it.

{{<slash name="sprint" key0="options" val0="until :00/30 for at least 10 for at most 35" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="until :00/30 at least 10 at most 35" >}}
{{<slash name="sprint" key0="options" val0="until :00/30 at least 10 no more than 35" >}}
{{<slash name="sprint" key0="options" val0="until :00/30 at least 10 no longer than 35" >}}
{{</alts>}}

`for at most` sets the longest sprint length. If no mark falls between the two, Sprinto refuses and suggests a fix. For example, `until :00/30 for at least 5 for at most 20` can be refused with:

{{< reply >}}
No sprint length fits. The next time of day to end at is 33 minutes away, and you asked for at most 20 minutes. Try `for at most 33 minutes`, or leave that out.
{{< /reply >}}

A channel or server default that ends on minute marks must include `for at least`. See [Clock times in a default](#clock-times-in-a-default).

## When?

### in x minutes

{{<tag-when>}} {{<tag-minutes>}}

{{< slash name="sprint" key0="options" val0="in 5" >}}
{{< atsprinto "sprint in 5" >}}
{{<alts "Synonyms" >}}
{{< slash name="sprint" key0="options" val0="starting in 5" >}}
{{< slash name="sprint" key0="options" val0="delay 5" >}}
{{</alts>}}

Start the sprint in 5 minutes, with the default length (15 minutes).

### for x minutes in y minutes

{{<tag-duration>}} {{<tag-when>}}

{{< slash name="sprint" key0="options" val0="for 35 in 5" >}}

You can leave out `for` and `in`. The first number is the length, and the second is the wait:

{{< slash name="sprint" key0="options" val0="35 5" >}}
{{< atsprinto "sprint 35 5" >}}

Both commands start a 35-minute sprint in 5 minutes.

Lengths and waits can use seconds or other units, for example:

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

Start at half past the hour.

Change `30` to the minute you want the sprint to start: `:00` for on the hour, `:15` for quarter past, and so on. You can leave off either the `:` or the word `at`, but not both. A bare number after `at` is a minute mark: `at 3` starts at :03.

To start at a time of day, such as `at 2:30pm`, see [Times of day](#times-of-day).

Add `for` to set the length of the sprint, for example:

{{<slash name="sprint" key0="options" val0="at :25 for 35" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0=":25 35" >}}
{{<slash name="sprint" key0="options" val0="at 25 til 00" >}}
{{<slash name="sprint" key0="options" val0=":25 to 00" >}}
{{</alts>}}

This runs a sprint from :25 to :00, for 35 minutes.

Give a start and an end with `to`:

{{<slash name="sprint" key0="options" val0="at :10 to :35" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="at 10 to 35" >}}
{{<slash name="sprint" key0="options" val0="at 10-35" >}}
{{<slash name="sprint" key0="options" val0="from 10 to 35" >}}
{{</alts>}}

A 25-minute sprint from :10 to :35. Without `at`, `10 to 35` is a [random length]({{<relref "random" >}}#random-x-to-y) between 10 and 35 minutes.

A bare number in front of an end time is the minute to start on:

{{<slash name="sprint" key0="options" val0="15 til 45" >}}

This starts at :15 and ends at :45. A number after the end time is the wait instead: `til 45 15` starts in 15 minutes and ends at :45.

You can list several start marks, separated by slashes, and the sprint starts at whichever comes first. This is mostly useful in a channel's default sprint. Add `in at least` to skip a mark that's too close (see ["in next" and "in at least"](#in-next-and-in-at-least)):

{{<slash name="sprint" key0="options" val0="at :00/15/30/45 in at least 1" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="in next 15 in at least 1" >}}
{{<slash name="sprint" key0="options" val0="in next 15+1" >}}
{{</alts>}}

A sprint that starts on a minute mark, a time of day or `in next` can start at most 50 minutes from now. If the mark you ask for has just gone by, the next one is nearly an hour away: `at :30` typed at 10:31 means 11:30. Sprinto refuses, and shows the time it worked out in your own time:

{{< reply >}}
Sorry, that works out as 11:30, which is 59 minutes away. A sprint can start at most 50 minutes from now. Adding `please` raises the limit a little.
{{< /reply >}}

If Discord's emoji picker turns `:30` into a clock emoji, Sprinto asks what you meant, with buttons for the likely commands:

{{< reply >}}
🕥 arrived where the time should be. Did you mean:
{{< /reply >}}

### Clock idioms

{{<tag-when>}} {{<tag-time>}}

If you'd rather say it in words:

| Words | Same as |
| --- | --- |
| `on the hour`, `top of the hour`, `o'clock` | `at :00` |
| `quarter past` | `at :15` |
| `half past` | `at :30` |
| `quarter to` | `at :45` |
| `next quarter`, `next half` | `in next 15`, `in next 30` |
| `next hour`, `in next hour` | `at :00` |
| `until the next hour` | `until :00` |

{{<slash name="sprint" key0="options" val0="for 20 at half past" >}}

`next five` and `next ten` are the same as `next 5` and `next 10`, which set the time between rounds in a [chain](#chains). They don't set a start time.

### Now

{{<tag-when>}}

{{<slash name="sprint" key0="options" val0="now" >}}
{{<atsprinto "sprint now" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="asap" >}}
{{<slash name="sprint" key0="options" val0="go" >}}
{{<atsprinto "sprint immediately" >}}
{{<atsprinto "sprint right now" >}}
{{<atsprinto "sprint right away" >}}
{{<atsprinto "sprint 20 rn" >}}
{{</alts>}}

Start immediately, with no join window. People can still join once it's running.

In a chain, `asap` means something else: see [Chain timing]({{< relref "chain-timing" >}}).

### in next

{{<tag-when>}} {{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="in next 5" >}}
{{<atsprinto "sprint in next 5" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="in the next 5 minutes" >}}
{{<slash name="sprint" key0="options" val0="at the next 5 minute mark" >}}
{{<slash name="sprint" key0="options" val0="the next 5 minute mark" >}}
{{<slash name="sprint" key0="options" val0="next 5 minute mark" >}}
{{<slash name="sprint" key0="options" val0="on next 5" >}}
{{</alts>}}

Start on the next 5-minute mark on the clock.

| You write | The sprint starts at the next |
| --- | --- |
| `in next 5` | :00 :05 :10 :15 :20 :25 :30 :35 :40 :45 :50 :55 |
| `in next 10` | :00 :10 :20 :30 :40 :50 |
| `in next 15` | :00 :15 :30 :45 |

For example, if the time is 11:32 pm in your time zone, `in next 5` starts the sprint at 11:35 pm, `in next 10` at 11:40 pm, and `in next 15` at 11:45 pm.

`in the next 5 minutes` also means the next 5-minute mark, not any time within the next five minutes.

Without `in`, `next 5` sets the time between rounds in a [chain](#chains). On a single sprint, such as `/sprint 20 next 5`, Sprinto refuses and suggests the start options:

{{< reply >}}
`next 5` sets the gap before the next round, and this sprint doesn't have one. Add rounds with `x3`. To start at the next 5-minute mark instead, write it as `in next 5`, `in 0-5` or `in 1-6` (or press the button below).
{{< /reply >}}

The button runs `/sprint for 20 in next 5`.

### "in next" and "in at least"

{{<tag-when>}} {{<tag-minutes>}} {{<tag-minutes>}}

Add `in at least` so that `in next` skips a mark that's too close. This example starts on the next 10-minute mark that is at least 2 minutes away:

{{< slash name="sprint" key0="options" val0="in next 10 in at least 2" >}}
{{<alts "Synonyms" >}}
{{< atsprinto "sprint in next 10 in at least 2" >}}
{{< slash name="sprint" key0="options" val0="in next 10+2" >}}
{{< slash name="sprint" key0="options" val0="in next 10 in no less than 2" >}}
{{< slash name="sprint" key0="options" val0="in next 10 grace 2" >}}
{{</alts>}}

`in next 10+2` is the short way to write it. The short form works with any mark size, for example `in next 5+1` or `30 in next 10+2`. `grace` is the older word for `in at least`, and still works.

Without `in at least`, `in next 5` starts on the very next mark, even if it's seconds away.

`in 2 to 12` is close, but not the same: it picks the roundest time between 2 and 12 minutes from now (see [in (minutes) to (minutes)](#in-minutes-to-minutes)), so it prefers a quarter-hour or a half-hour over a 10-minute mark. At 11:37, `in next 10+2` starts at 11:40, and `in 2 to 12` starts at 11:45.

A range after `in next` works like a range after `in`: `in next 1-6` is the same as `in 1-6`.

`in at least` is especially useful in a channel's or server's default sprint.

### in (minutes) to (minutes)

{{<tag-when>}} {{<tag-minutes>}}  {{<tag-minutes>}}

{{< slash name="sprint" key0="options" val0="in 5 to 10 minutes" >}}
{{< atsprinto "sprint in 5 to 10 minutes" >}}

Start at the roundest time between 5 and 10 minutes from now. If you send this command at 7:14, the sprint starts at 7:20, in 6 minutes.

Sprinto picks the first of these that falls in the time you gave:

1. On the hour
2. Half past
3. Quarter past or quarter to
4. A 10-minute mark, such as 11:10 or 11:20
5. A 5-minute mark, such as 11:05
6. A whole minute

A dash means the same as `to`, so {{<slashembed name="sprint" key0="options" val0="in 3-5" >}} works too.

## Shortcuts

{{<tag-when>}}

Each shortcut starts the sprint at the roundest time in its range:

| Shortcut | The sprint starts |
| --- | --- |
| `now` | immediately |
| `real soon` or `in a few ticks` | in 30 to 60 seconds |
| `soon` | in 1 to 2 minutes |
| `shortly` | in 2 to 3 minutes |
| `iaf` or `in a few` | in 3 to 5 minutes |
| `iab` or `in a bit` | in 2½ to 7½ minutes |
| `aab` or `after a bit` | in 7½ to 12½ minutes |
| `later` | in 12½ to 17½ minutes |

Examples:

{{<slash name="sprint" key0="options" val0="soon" >}}
{{<slash name="sprint" key0="options" val0="for 50 aab" >}}
{{<slash name="sprint" key0="options" val0="for not long in a bit" >}}
{{<atsprinto "sprint 5 real soon" >}}

## Times of day

{{<tag-duration>}} {{<tag-when>}}

`at` and `until` also take a time of day. A time of day needs your time zone: set it with {{<slashembed name="timezone">}}, or name the zone in the command. See [Time zones](#time-zones).

{{<slash name="sprint" key0="options" val0="at 2:30pm" >}}

| You write | The sprint |
| --- | --- |
| `at 14:30` or `at 2:30pm` | starts at 2:30 pm |
| `at half past two` | starts at the next 2:30, am or pm |
| `at quarter to five` or `at quarter of five` | starts at the next 4:45 |
| `at quarter after 11` | starts at the next 11:15 |
| `until 15:00` | ends at 3 pm |
| `at 10:30 to 11:00` or `at 10:30-11:00` | runs from 10:30 to 11:00 |

An hour from 1 to 12 without am or pm means the next time a clock shows it: `at 1:30` typed at 1 pm starts in half an hour.

A bare number is a minute mark unless you name a time zone: `at 3` starts at :03, and `at 3 est` starts at 3 o'clock.

To name the zone in the command, add it after the time:

{{<slash name="sprint" key0="options" val0="until 1:30 pm est" >}}

`at 10:30 est`, `at 6:30 new york`, `until 14:00 Europe/Paris`, `at 10:00 GMT+2`, `at 14:00+10` and `at 14:00Z` all work. A named zone follows its own summer time.

A pasted Discord timestamp works too. A timestamp that has already passed is refused:

{{< reply >}}
`10:15` has already passed, and Sprinto can't sprint backwards in time. Try a time that's still to come.
{{< /reply >}}

A time of day can't be part of a channel's or server's default sprint. Minute marks can.

## Time zones

A minute mark, such as `at :30` or `until :45`, works without a time zone. A time of day, such as `at 1:45` or `until 15:00`, needs one: set yours with {{<slashembed name="timezone">}}, or name the zone in the command (`until 1:30 pm est`). Without either, Sprinto refuses:

{{< reply >}}
Sprinto doesn't know what time it is where you are, so it can't tell when `1:30 pm` is. Please set your `/timezone`, then try again. A minute mark like `at :30` can be used without you setting a time zone.
{{< /reply >}}

If your time zone is on a half-hour or quarter-hour offset from UTC, as Adelaide is, set your time zone so that minute marks such as `at :15` and `until :45` match your clock.

{{<example caption="Setting your time zone to Adelaide, Australia, so that {{<param-when `at :15`>}} and {{<param-duration `until :45`>}} match your clock.">}}
{{<slash name="timezone" key0="place" val0="Australia/Adelaide" >}}
{{</example>}}

In the `place` box, type a city, a country or a clock name (`Brisbane`, `Japan`, `PST`). The box suggests matches as you type, each with the time there now. {{<slashembed name="timezone">}} with nothing typed shows your current setting, and {{<slashembed name="timezone" key0="place" val0="none" >}} clears it.

Channel and server default sprints read minute marks in UTC, with no half-hour or quarter-hour offset.

## Presets

Start a sprint with a single word, for example:

{{<slashembed name="sprint" key0="options" val0="marathon" >}}

| Preset | Length | Starts | Also sets | Also spelled |
| --- | --- | --- | --- | --- |
| (default) | 15 minutes | in 1 minute | | |
| `quick` | 5 minutes | in 30 seconds | `endtime 90s` | `quickie`, `fast`, `short`, `brief`, `briefly`, `quickly` |
| `dream` | 10 minutes | on the next 5-minute mark | | `dreamy`, `dreamily` |
| `pomo` | 25 minutes | in 1 minute (the default) | in a chain, 5 minutes from the end of writing to the next round | `pomodoro` |
| `long` | 30 minutes | in 2½ to 7½ minutes | | `longer`, `slow` |
| `marathon` | 60 minutes | in 7½ to 13 minutes | `endtime 10`, a chime at halfway | `for a marathon` |
| `megathon` | 120 minutes | in 7½ to 13 minutes | `endtime 10`, a chime at halfway, `please` | `for ages` |

<!-- | `just` | `/sprint now` | -->

`megathon` is over Sprinto's usual one-hour limit, so it adds `please` itself (see `please` under [flags](#sprint-flags)). A channel's or server's longest sprint still applies to it.

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
{{</alts>}}

On its own, `pomo` is a 25-minute sprint, with the usual 1-minute join window and 4 minutes to post word counts.

{{<slash name="sprint" key0="options" val0="pomo x4" >}}
{{<atsprinto "sprint pomo x4" >}}

Four 25-minute rounds, starting 30 minutes apart. Each round is 25 minutes of writing, then 5 minutes before the next round starts: 4 minutes to post word counts, then a 1-minute break.

With five to eight rounds (`pomo x5` to `pomo x8`), the break after round 4 is at least 15 minutes, counted from when round 4's word counts close. A chain has at most 8 rounds, so this long break happens once at most.

See [chains](#chains) for what `x4` does.

## endtime

{{<tag-endtime>}} {{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="endtime 10 " >}}
{{<atsprinto "sprint endtime 10 " >}}
{{<alts "More synonyms" >}}
{{<slash name="sprint" key0="options" val0="end 10" >}}
{{<slash name="sprint" key0="options" val0="finish 10" >}}
{{<slash name="sprint" key0="options" val0="timesup 10" >}}
{{<slash name="sprint" key0="options" val0="counts 10" >}}
{{<slash name="sprint" key0="options" val0="reporting time 10" >}}
{{<atsprinto "sprint tally time 10" >}}
{{<atsprinto "sprint wc time 10" >}}

Also `report`, `reports`, `reporting`, `reporting for`, `report time`, `ending`, `fin`, `final` and `after sprint`.
{{</alts>}}

How long sprinters have to post their final word count, once the writing time is up.

You can set it anywhere from 30 seconds to 30 minutes, or up to an hour for a {{<role "@Sprint MC">}} who adds `please` (or `pls`).

If you don't set it, the endtime depends on the sprint's length: 1 minute 30 seconds, plus 30 seconds for every full 5 minutes of writing, and at least 2 minutes. A 15-minute sprint gets 3 minutes, and an hour-long sprint gets 7 minutes 30 seconds. The longest default endtime is 10 minutes, for a sprint of 85 minutes or more (a length that needs `please`).

`marathon` and `megathon` include an endtime of 10 minutes. Type a different `endtime` to change it.

To check the endtime of the sprint that's running, use {{<atsprintoembed "explain">}} or {{<atsprintoembed "status">}}.

### end -5, round and done by

{{<tag-endtime>}} {{<tag-duration>}}

Usually the time for word counts comes after the writing time. These options fit the word counts inside the length, so the whole sprint is over when the length is up.

{{<slash name="sprint" key0="options" val0="for 20 end -5" >}}

A minus sign on `end` takes the time for word counts out of the length. This sprint writes for 15 minutes and collects word counts in the last 5, and it's all over at the 20-minute mark. It's handy for ending on a tidy clock time.

{{<slash name="sprint" key0="options" val0="round 25" >}}

`round 25` is 25 minutes in all: about 21 minutes of writing and 4 minutes for word counts. `block`, `total` and `dusted` mean the same as `round`. `round 20 end 5` is the same sprint as `for 20 end -5`.

{{<slash name="sprint" key0="options" val0="done by :30" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="done and dusted by :30" >}}
{{</alts>}}

Writing and word counts are all finished by :30.

These options work on a single sprint and in a chain. [Chain timing]({{< relref "chain-timing" >}}) shows them in diagrams.

## late

{{<tag-late>}} {{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="late 20" >}}
{{<alts "More synonyms" >}}
{{<slash name="sprint" key0="options" val0="latetime 20" >}}
{{<slash name="sprint" key0="options" val0="late window 20" >}}
{{<slash name="sprint" key0="options" val0="late time 20" >}}
{{<atsprinto "sprint late 20" >}}
{{</alts>}}

After the scoreboard is posted, sprinters can still change their word count with {{<slashembed name="late" >}} until the late window closes. The late window is 10 minutes by default, counted from when writing time ends, not from when the scoreboard is posted. `late 20` makes it 20 minutes. The longest late window is 1 hour.

<!-- main only: late over an hour refused -->
A `late` of more than an hour is refused: "Sorry, 90 minutes is too long to keep word counts open after the sprint. The maximum is 60 minutes."

{{<slash name="sprint" key0="options" val0="late none" >}}

Turn off late changes for this sprint: the scoreboard is final as soon as it's posted. `late 0` and `late off` also work. A channel's default sprint can include `late none`, and a `late` typed in the sprint command replaces it.

## join

{{<slash name="sprint" key0="options" val0="for 20 /join 1000" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 20 join 1000" >}}
{{<slash name="sprint" key0="options" val0="for 20 wc 1000" >}}
{{<slash name="sprint" key0="options" val0="for 20 words 1000" >}}
{{<slash name="sprint" key0="options" val0="for 20 /j 1000" >}}
{{<slash name="sprint" key0="options" val0="for 20 join1000" >}}
{{<atsprinto "sprint 20 join 1000" >}}
{{</alts>}}

Start the sprint and join it in one command. The number after `join` is your starting count, the same as {{<slashembed name="join" key0="word-count" val0="1000" >}}.

Put `join` at the end of the command, once. A command with two `join`s is refused:

{{< reply >}}
Sorry, I can't tell where the `join` part goes. Put `join` (and any starting word count) at the end of the command.
{{< /reply >}}

To join with your last word count, end the command with `/same` or `/s`:

{{<slash name="sprint" key0="options" val0="20 /same" >}}

This works on a repeated sprint too:

{{<slash name="sprint" key0="options" val0="again /join same" >}}

## Sprint flags

| Keyword | Meaning |
| --- | --- |
| `quietly` | Announce the sprint without pinging anyone. On servers in the voice beta, `quietly` also keeps Sprinto out of [voice]({{<relref "voice" >}}). Synonyms: `quiet`, `silent`, `silently` |
| `noping` | Announce the sprint without pinging anyone. Synonyms: `no ping`, `no pings`, `nopings` |
| `novc` | On servers in the voice beta, keep Sprinto out of [voice]({{<relref "voice" >}}) for this sprint. Synonyms: `no vc`, `shut up` |
| `noff` | "No fast finish" — wait the full `endtime` for final word counts before posting the scoreboard, even if everyone has reported. Synonyms: `no ff`, `no fast finish` |
| `ff` | Allow the fast finish, even if this channel's settings turn it off: the scoreboard is posted soon after everyone has reported. Synonym: `fast finish` |
| <!-- TODO owner: nops does nothing in the bot now; restore if fixed --> `no bell` | Turn off all chimes for this sprint. See [chimes](#chimes). Synonyms: almost any way of saying it, such as `no chime`, `no bells`, `nobell`, `zero chimes`, `without any bells`, `chime none`, `chime off`. `chime 0` also turns chimes off. |
| `please` | Raise some of Sprinto's limits, such as the longest sprint (up to 2 hours). See [Limits](#limits). Synonyms: `pls`, `thanks`, `danke`, and a long list of other polite (and impolite) phrasings |
| `lock` | Lock the sprint, so only a Sprint MC can cancel it. Only a Sprint MC can use `lock`. Synonyms: `locked`, `nocancel`, `no cancel`, `uncancellable`. See: [sprint admin commands]({{< relref "admin-sprint" >}}) |
| `clear defaults` | Leave out this channel's and server's default options. See [Channel and server defaults](#channel-and-server-defaults). Synonyms: `no defaults`, `ignore defaults`, `without defaults` |

Examples:
{{<slash name="sprint" key0="options" val0="for 5 quietly" >}}
A 5-minute sprint, announced without pinging anyone.

{{<slash name="sprint" key0="options" val0="marathon endtime 12 noff" >}}
A 60-minute marathon sprint with 12 minutes to post or change final word counts. The scoreboard is posted when the 12 minutes are up.

{{<slash name="sprint" key0="options" val0="for 1.5hr in 5 pls" >}}
A 90-minute sprint, starting in 5 minutes.

## Chimes

{{<tag-minutes>}}

A chime is a message that Sprinto posts during the sprint, saying how much time is left:

{{< reply >}}
🔔 **60 seconds remaining**
{{< /reply >}}

{{<slash name="sprint" key0="options" val0="for 40 chime -1" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 40 bell -1" >}}
{{<atsprinto "sprint for 40 chimes -1" >}}
{{</alts>}}

This runs a 40-minute sprint with a chime at one minute remaining (`chime -1`).

A minus sign means minutes before the end of the sprint, and a plain number means minutes after the start. Percentages work too:

| You write | The chime is posted |
| --- | --- |
| `chime -2` | 2 minutes before the end |
| `chime 5` | 5 minutes after the start |
| `chime -25%` | with a quarter of the sprint left |
| `chime 50%` | halfway |
| `chime -10m30s` | 10 minutes 30 seconds before the end |

In the chime message, a time under 2 minutes is given in seconds. A chime set as a percentage can add "(~50% in)" or "(~25% left)" to the message.

You can ask for several chimes, separated by commas or spaces, and they can mix forms:

{{<slash name="sprint" key0="options" val0="for 60 chime -50%, -10, -1" >}}

A sprint can have up to 5 chimes, at least a minute apart. Sprinto skips any chime that falls outside the writing time. The sprint's start message lists when each chime will be posted, such as "🔔 at 10m and 60s remaining." If some chimes were skipped, it adds "(1 more were outside the sprint, skipped)". If all of them were skipped, it says "🔔 The chime(s) you set fell outside the sprint, so none were scheduled."

To be pinged when a chime is posted, see `/settings me`.

Chimes can be part of a channel's or server's default sprint. Typing any `chime` in your command replaces the default's chimes. If your server notifies members of every message, each chime is a notification too.

`marathon` and `megathon` set a chime at halfway.

{{<slash name="sprint" key0="options" val0="for 30 no bell" >}}

This runs a 30-minute sprint with chimes turned off, even if this channel's default sprint has some.

{{<slash name="sprint" key0="options" val0="marathon no bell" >}}

This runs a marathon sprint (60 minutes) with the halfway chime turned off.

## Chains

{{<tag-duration>}}

Run several sprints in a row from one command. Each sprint in a chain is a round. [Chain sprints]({{< relref "chains" >}}) walks through a whole chain, and [Chain timing]({{< relref "chain-timing" >}}) shows how the time in each round is divided.

{{<slash name="sprint" key0="options" val0="for 20 then for 10" >}}
{{<atsprinto "sprint 20 then 10" >}}

| You write | You get |
| --- | --- |
| `for 20 then for 10` | a 20-minute round, then a 10-minute round |
| `for 20 x3` or `for 20 times 3` | three 20-minute rounds |
| `for 25 x4 break 10` | four 25-minute rounds, with a 10-minute break after each round's word counts |
| `20 next 5 x3` | three 20-minute rounds, starting 25 minutes apart |
| `pomo x4` | four 25-minute rounds, starting 30 minutes apart (see [Pomodoro](#pomodoro)) |
| `round 25 x4` | four rounds, each 25 minutes long including word counts |

A length is always writing time, in a chain too. After each round's writing comes the time to post word counts, then the break.

- `break 10` sets the break: the time from the word counts closing to the next round starting. The break is 5 minutes unless you set it. Also `rest`, `breaks`, `take`, `pause` and `smoko`.
- `next 5` sets the whole time from the end of one round's writing to the start of the next round's writing, word counts and break together. Also `gap`, `next in` and `next round in`.
- `round` fits each round's word counts inside its length: see [end -5, round and done by](#end--5-round-and-done-by).
- A chain has at most 8 rounds.

Anything you set before the first `then`, other than the length and the start time, applies to every round, so you only have to say `quietly` or `chime -1` once:

{{<slash name="sprint" key0="options" val0="for 20 quietly chime -5 then for 30 then for 10" >}}

<!-- main only: quietly and lock chain-wide -->
`quietly` and `lock` apply to every round wherever you type them, even after a `then`.

Add `identical` (or `exact`), and rounds that use the same wheel share one spin:

{{<slash name="sprint" key0="options" val0="nl x3 identical" >}}

Three sprints of the same randomly chosen length.

### Joining each round

For every round, Sprinto posts a start message, a time's-up message and a scoreboard, each labelled with the round, such as **Round 2 of 4**. The last round's scoreboard also adds up the whole chain, for example "Whole chain: 3,200 words over 100 minutes."

Joining a round joins you for that round only. To stay in:

| Command | What it does |
| --- | --- |
| `/words 1234 next` | Report your word count and join the next round. |
| `/join all` | Join every remaining round. Each round's starting count is your final word count from the round before. |
| `/join all 1000` | The same, with a starting count of 1,000 words in the first round you join. |
| `/join all 0` | Join every remaining round, with a starting count of 0 in every round. Only a typed 0 does this. |
| `/words 1200 all` | Report your word count and join every remaining round. |

If you're already writing in the round, `/join all` keeps the word count you're on.

{{<slash name="join" key0="word-count" val0="all" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "join every sprint" >}}
{{<atsprinto "join all in the chain" >}}
{{</alts>}}

You can join during a break. The invitation to join is posted in the last minute of the break.

Sprinto doesn't take you out of a chain if you miss rounds. You can {{<slashembed name="leave" >}} any time.

### Stopping a chain early

{{<slash name="sprint" key0="options" val0="last one" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "no more" >}}
{{<atsprinto "stop after this" >}}
{{<atsprinto "wrap up" >}}
{{<atsprinto "end chain" >}}
{{<atsprinto "last round" >}}
{{</alts>}}

The running round finishes as usual, and no more rounds start. Only the sprinter who started the chain, or a {{<role "@Sprint MC">}}, can stop a chain early. To stop the running round as well, use {{<slashembed name="cancel" >}}.

## "again"

Repeat the last sprint that ran in this channel.

{{<slash name="sprint" key0="options" val0="again" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="same" >}}
{{<slash name="sprint" key0="options" val0="repeat" >}}
{{<atsprinto "sprint again" >}}
{{<atsprinto "sprint rerun" >}}
{{</alts>}}

Run the same sprint command again. Anything random is rolled again: a wheel spins again, and a relative start time (`soon`, `in a bit`) is counted from now.

If the last sprint was set to a clock time, `again` refuses:

{{< reply >}}
The last sprint was set to a fixed clock time (`at`/`until`), so `sprint again` can't run it again. Use `identical` to repeat the exact same timing, or enter a fresh sprint command.
{{< /reply >}}

If there's no sprint to repeat:

{{< reply >}}
I don't have a recent sprint to repeat in this channel. Start one with `sprint for 20`.
{{< /reply >}}

## "identical"

{{<slash name="sprint" key0="options" val0="identical" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="exact" >}}
{{<slash name="sprint" key0="options" val0="exactly" >}}
{{<atsprinto "sprint duplicate" >}}
{{<atsprinto "sprint dupe" >}}
{{</alts>}}

Repeat the last sprint with the exact lengths used last time, including the length a wheel or dice roll gave.

`identical` also repeats a sprint that was set to a clock time (`at :30`, `until :45`), which `again` refuses. It runs the sprint with the same timings as last time.

## "again" and "identical"

Both `again` and `identical` take overrides on the end, with an optional `but` to make it read like a sentence:

{{<slash name="sprint" key0="options" val0="again for 30" >}}
{{<slash name="sprint" key0="options" val0="identical but at :30" >}}

After a chain, they repeat the _last round_. Add `chain` to repeat the whole chain:

{{<slash name="sprint" key0="options" val0="again chain" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="again whole chain" >}}
{{<slash name="sprint" key0="options" val0="again entire chain" >}}
{{<slash name="sprint" key0="options" val0="again full chain" >}}
{{<slash name="sprint" key0="options" val0="again the chain" >}}
{{<slash name="sprint" key0="options" val0="again series" >}}
{{<slash name="sprint" key0="options" val0="identical chain" >}}
{{</alts>}}

Sprinto remembers the last sprint in each channel separately, and `again` still works after Sprinto restarts. One exception: after a restart, `identical` can roll a new length for a wheel, the same as `again`.

## Channel and server defaults

Admins can set a default sprint for a channel or for a whole server, with {{<slashembed name="settings sprint-defaults" >}} or `@Sprinto settings preset 20 in 5`. See [Settings]({{<relref "settings" >}}).

Each option you don't type comes from the channel's default, then the server's default, then Sprinto's built-in default (15 minutes, starting in 1 minute). Anything you type wins. [`explain`](#explain) shows where each setting came from.

- Typing any `chime` replaces all of the default chimes.
- If part of a default no longer fits, for example after an admin lowers the longest sprint, Sprinto skips that part and runs your sprint. `explain` says which part was skipped.

To run a sprint with none of the channel's or server's default options, add `clear defaults`:

{{<slash name="sprint" key0="options" val0="20 clear defaults" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="20 no defaults" >}}
{{<slash name="sprint" key0="options" val0="20 ignore defaults" >}}
{{<slash name="sprint" key0="options" val0="20 without defaults" >}}
{{</alts>}}

The channel's or server's longest sprint still applies.

### Clock times in a default

- A default that ends on minute marks, such as `until :00/30`, must include `for at least`. The marks must be close enough together that one always falls between `for at least` and `for at most`, or the longest sprint allowed if there's no `for at most`.
- The start marks in a default must be no more than 50 minutes apart: `at :00/30` works as a default, but `at :30` on its own doesn't.
- A time of day, such as `at 14:30`, can't be a default. Minute marks can.
- Defaults read minute marks in UTC. See [Time zones](#time-zones).

## "explain"

{{<slash name="explain" key0="sprint-options" val0="for 25 in 5 chime -5" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="explain for 25 in 5 chime -5" >}}
{{<slash name="sprint" key0="options" val0="for 25 in 5 chime -5 explain" >}}
{{<slash name="sprint" key0="options" val0="preview for 25 in 5" >}}
{{<slash name="sprint" key0="options" val0="timeline for 25 in 5" >}}
{{<atsprinto "sprint dry-run for 25 in 5" >}}
{{<atsprinto "sprint dry run for 25 in 5" >}}
{{</alts>}}

Put `explain` at the start or the end of a sprint command, and Sprinto describes the sprint without starting it. The answer lists each setting and where it came from: your command, the channel's or server's default, or Sprinto's built-in default. Use it to find out why a sprint didn't do what you expected.

Times are worked out from the current time, and a random length is rolled for the explanation only.

`/sprint explain` answers only you. To post the answer in the channel, add `public` (or `aloud`, `out loud`, `everyone`, `share`):

{{<slash name="sprint" key0="options" val0="explain public marathon" >}}

`@Sprinto sprint explain` always posts its answer in the channel.

You can add two more words after `explain`, before the sprint options. The first chooses which sprint to describe:

| Word | What it explains |
| --- | --- |
| `running` | the sprint going on now |
| `here` | a new sprint in this channel |
| `plain` | a new sprint with the channel and server defaults left out |

The second chooses how much detail to show:

| Word | What you get |
| --- | --- |
| `brief` | the settings only |
| `sources` | each setting and where it came from. This is what you get by default |
| `timeline` | minute by minute |
| `full` | everything above |

{{<slash name="sprint" key0="options" val0="explain full plain pomo x4" >}}

To check what a repeat would do, {{<slashembed name="explain" key0="sprint-options" val0="again" >}} describes the sprint that `again` would run. `/sprint again explain` explains what `again` means, and starts nothing.

### "/explain" on its own

{{<slash name="explain" >}}
{{<atsprinto "explain" >}}

`explain` is a command in its own right too. With nothing else typed, it describes the sprint running here. If none is running, it describes what a new sprint in this channel would do.

{{<slash name="explain" key0="what" val0="A new sprint in this channel" key1="detail" val1="Minute-by-minute timeline" >}}

The `what` and `detail` options are menus with the same choices as the two tables earlier in this section. `sprint-options` takes a sprint command to describe, and `post` posts the answer in the channel. Otherwise only you see the answer, with a **Show more or less** dropdown to change the detail and a **Post to channel** button.

## Limits

Sprinto refuses some commands, and `please` raises a few of the limits.

| Limit | Normally | With `please` |
| --- | --- | --- |
| Sprint length | 30 seconds to 1 hour | up to 2 hours |
| How far ahead a sprint can start | 1 hour (50 minutes for a clock mark like `at :30`, a time of day, or `in next`) | 90 minutes, or 2 hours for a {{<role "@Sprint MC">}} |
| endtime | 30 seconds to 30 minutes | up to 1 hour for a {{<role "@Sprint MC">}} |
| Late window (`late`) | up to 1 hour; `late 0` turns it off | same |
| <!-- main only: break limit --> Break between chained rounds | up to 1 hour | up to 2 hours |
| Chimes per sprint | 5, at least a minute apart | same |
| Rounds in a chain | 8 | same |

Example:
{{<slash name="sprint" key0="options" val0="for 90 mins pls" >}}

A channel or server can set its own longest sprint, up to 2 hours: `@Sprinto settings maxsprint 90`, or in {{<slashembed name="settings" >}}. `please` can't go past it, and neither can `megathon`.

When `please` would help, the refusal says so, with a button that runs the suggested command:

{{< reply >}}
Sorry, that sprint is too long. The maximum is 60 minutes. Adding `please` raises the limit a little. Try `for 90 please`.
{{< /reply >}}

Other refusals:

- Sprint length: "Sorry, that sprint is too short. The minimum is 30 seconds."
- endtime: "Sorry, that's too short for final word counts. The minimum is 30 seconds." or "Sorry, that's too long to wait for final word counts. The maximum is 30 minutes."
- Rounds in a chain: "Sorry, that's too many sprints in a row. I can chain up to 8 at once."

<!-- main only: break over the limit refused -->
A break over the limit is refused, with a button that runs the suggested command: "Sorry, a break of 90 minutes is too long. The longest break between rounds is 60 minutes. Adding `please` raises the limit a little. Try `for 5 x2 break 90 please`." A channel or server default with a break or late window over the limit is cut to the limit.

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
- [Chain sprints]({{<relref "chains" >}}): several sprints in a row from one command
- [Chain timing]({{<relref "chain-timing" >}}): how the time in each round of a chain is divided
- [During the sprint]({{<relref "words" >}}) — join, leave, cancel, and setting your word count — commands to use once the sprint has started
- [Sprint (admin)]({{<relref "admin-sprint" >}}) — the few sprint options and commands only available to Sprint MCs and admins
- [Allowed channels (admin)]({{<relref "whitelist" >}}) — admin commands to prevent users running sprints where they're not supposed to.
- [Ping me]({{<relref "pingme" >}}) — who gets @mentioned at sprint start, and how admins set a role to always be pinged
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
- [Carl-bot x Sprinto]({{<relref "carlbot" >}}) — using carl-bot to schedule sprints.
- [Active Sprinter role]({{<relref "ActiveSprinter" >}})  — Setting up a role on your server named {{<role "@Active Sprinters">}}
