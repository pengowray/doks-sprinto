---
title : "Sprint"
description: The sprint command and all its options
lead: 
---
## The Sprint Command in detail
{{<slash name="sprint" key0="options" val0="_duration_ _when_ " >}}
<!-- {{< atsprinto "sprint `duration` `when` `preset` `other`" >}} -->

You can optinally include a "duration" and a "when" parameter, for example:

{{<slash name="sprint" key0="options" val0="for 10 minutes in 2 min" >}}
{{<slash name="sprint" key0="options" val0="until :30 now" >}}
{{<slash name="sprint" key0="options" val0="for 25 at :15 " >}}
{{<slash name="sprint" key0="options" val0="for however long in a bit" >}}

The parameters are all optional and can be in any order. 

{{<slash name="sprint" >}}
Without any options, the default sprint is for 15 minutes in 1 minute.

There's also presets (which set both the duration and when the sprint starts); Flags such as _quietly_ (which prevents people getting pinged when the sprint is annouced); and "endtime" which explicitly sets how long for sprinters to give their final tally.

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
{{</alts>}}
Run a sprint from the start time until quarter-to, starting immediately.

Sprinto assumes you're in a common time zone. If you're in Adelaide or somewhere else with a half-hour difference from everyone else, you'll have to adjust.

## Random duration options
Undecided? You can choose a random length for your sprints.

### Burst sprint
{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="burst" >}}
{{<atsprinto "sprint burst" >}}

A very quick sprint with a randomly chosen length from 35 to 150 seconds.
{{<alts "Details">}}
Possible durations, each an equal wheel slice (seconds): 35 45 45 60 60 75 75 90 90 100 105 120 135 150
{{</alts>}}

### Micro sprint
{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="micro" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint micro" >}}
{{< atsprinto "sprint μ-sprint" >}}
{{< slash name="sprint" key0="options" val0="μ" >}}
{{</alts>}}

μ-sprint for a random duration between 1 to 6 minutes.

### Flash sprint
{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="flash" >}}
{{< alts "Synonyms" >}}
{{< atsprinto "sprint flash" >}}
{{</alts>}}

Sprint for a random duration between 2.5 to 10.5 minutes

### Not a long sprint
{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="not long" >}}
{{< alts "Synonyms" >}}
{{< slash name="sprint" key0="options" val0="nl" >}}
{{< atsprinto "sprint nl" >}}
{{< atsprinto "sprint not long" >}}
{{< atsprinto "sprint for not long" >}}
{{</alts>}}

Start a sprint for between 5 and 12 minutes (randomly decided)

### But not for _too_ long
{{<tag-duration>}} {{<tag-random>}}

{{< slash name="sprint" key0="options" val0="not too long" >}}
{{< slash name="sprint" key0="options" val0="ntl" >}}
{{< alts "More synonyms" >}}
{{< atsprinto "sprint ntl" >}}
{{< atsprinto "sprint but not for too long" >}}
{{</alts>}}

Spin the wheel and start a sprint that's between 5 and 20 minutes.

### However long
{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="for however long" >}}
{{<slash name="sprint" key0="options" val0="hel" >}}
{{<alts "More synonyms" >}}
{{<slash name="sprint" key0="options" val0="surprise me" >}}
{{<atsprinto "sprint hel" >}}
{{<atsprinto "sprint whatever" >}}
Other synonyms "random", "rng" and "the wheel" may get used for other options in future.
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

{{< slash name="sprint" key0="options" val0="i don't know how long" >}}
{{< slash name="sprint" key0="options" val0="idk" >}}
{{< alts "More synonyms" >}}
{{< atsprinto "sprint idk" >}}
{{< atsprinto "sprint i don't care" >}}
{{</alts>}}

Sprint between 1 and 60 minutes. There's a 60× higher chance of a one-minute sprint than a 60 minute sprint. 

{{<alts "Details">}}
How it's calculated: There's 60/1830 (=3%) chance of a 1-minute sprint; 59/1830 chance of a two-minute sprint, 58/1830 chance of a three-minute sprint, etc. Another way to think of it, there's 1830 mables in a pot. One is selected. Here's the numbers on each marble:</p>
<ul>
<li>1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 52, 52, 52, 52, 52, 53, 53, 53, 53, 53, 53, 53, 53, 54, 54, 54, 54, 54, 54, 54, 55, 55, 55, 55, 55, 55, 56, 56, 56, 56, 56, 57, 57, 57, 57, 58, 58, 58, 59, 59, 60</li>
</ul>
<p>The idea is that if hour-long sprints had the same frequency as one-minute sprints then you'd end up spending much more time doing hour long sprints than one-minute sprints. This distribution attempts to balance it better so you're as likely to be doing any length sprint between 1 and 60 minutes. Anyway it seemed like a good idea at the time. I'm no mathematician though so you have a better idea about this kind of thing then please leave feedback using the feedback command, for example:
</p>
{{<slash name="feedback" key0="your-feedback" val0="I'm a mathematics professor at Brown University and I have an idea for improving and generalizing the sprint duration distrubtions of the IDK sprint wheel using a formula which takes account of... " >}}
{{</alts>}}

### Not too short
{{<tag-duration>}} {{<tag-random>}}

{{<slash name="sprint" key0="options" val0="not too short" >}}
{{<slash name="sprint" key0="options" val0="nts" >}}
{{<alts "More synonyms" >}}
{{<atsprinto "sprint nts" >}}
{{<atsprinto "sprintnot short" >}}
{{</alts>}}

Sprint for between 20 and 60 minutes.

{{<alts "Details">}}
not too short (NTS) values: (wheel of 67 items)
<ul>
<li>00:20:00, 00:20:00, 00:20:00, 00:20:30, 00:21:00, 00:21:00, 00:21:00, 00:21:00, 00:22:00, 00:22:15, 00:23:00, 00:23:00, 00:23:30, 00:24:00, 00:24:10, 00:24:40, 00:25:00, 00:25:00, 00:25:00, 00:25:00, 00:25:45, 00:26:00, 00:26:35, 00:26:35, 00:27:00, 00:27:00, 00:27:00, 00:27:30, 00:27:30, 00:27:30, 00:28:00, 00:28:00, 00:28:00, 00:29:00, 00:29:00, 00:29:10, 00:30:00, 00:30:00, 00:30:00, 00:32:00, 00:32:45, 00:34:50, 00:35:00, 00:35:00, 00:35:40, 00:37:00, 00:38:00, 00:39:10, 00:39:35, 00:40:00, 00:41:00, 00:42:00, 00:43:10, 00:43:30, 00:43:30, 00:45:00, 00:46:00, 00:46:20, 00:47:00, 00:50:00, 00:50:00, 00:51:00, 00:53:30, 00:55:00, 00:55:00, 00:57:30, 01:00:00</li>
</ul>
Note: This might not be updated and could be using an old list of durations.
{{</alts>}}

### Summary of random sprint wheels

| Long name | Short name | min – max | How long will the sprint be? |
| --- | --- | --- | --- |
| burst | `burst` | 35s – 150s  | Randomly up to 2.5 minutes |
| micro | `μ` | 1 – 6 | Randomly  between 1 to 6 minutes |
| flash | `flash` | 2.5 – 10.5 | Randomly between 2.5 to 10.5 minutes | 
| not long | `nl` | 5 – 12 |  Randomly between 5 and 12 minutes |
| not too long | `ntl` | 5 – 20 |  Randomly between 5 and 20 minutes |
| however long | `hel` | 5 – 40 | Usually between 10 and 25 minutes, but a tiny chance of approximately 5 or 40 minutes. |
| i don't know how long | `idk` | 1 – 60 | Randomly between 1 and 60 minutes, with better odds of a shorter sprint. |
| not too short | `nts` | 20 – 60 | Randomly  between 20 and 60 minutes. |

## When?

### in x minutes
{{<tag-when>}} {{<tag-minutes>}} 

{{< slash name="sprint" key0="options" val0="in 5" >}}
{{< atsprinto "sprint in 5" >}}

Sprint in 5 minutes (for the default of 15 minutes)

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

Sprinto uses the [TimeSpanParser](https://github.com/pengowray/TimeSpanParser) library, which was developed for Sprinto.

### at
{{<tag-when>}} {{<tag-time>}} 

{{<slash name="sprint" key0="options" val0="at :30 " >}}
{{<atsprinto "sprint at :30 " >}}

At half past the hour (for almost all timezones). You can leave off either the `:` or the word `at` (but not both).

Change `30` to the minutes of the time you want the sprint to start. :00 for on the hour, :15 for quarter past, etc. 

### Now
{{<tag-when>}} 

{{< slash name="sprint" key0="options" val0="now" >}}
{{< atsprinto "sprint now" >}}

Start immediately.

### next
{{<tag-when>}} {{<tag-minutes>}} 
{{< slash name="sprint" key0="options" val0="next 5" >}}
{{< atsprinto "sprint next 5" >}}

Use `next 5` to start at :00 :05 :10 :15 :20 :25 :30 :35 :40 :45 :50 :55

Use `next 10` to start at :00 :10 :20 :30 :40 :50

Use `next 15` to start at :00 :15 :30 :45

For example, if the time right now is 11:32 pm in your time zone, then `next 5` will start the sprint at 11:35 pm; `next 10` will start at 11:40 pm; and `next 15` will start at 11:45pm

### next, grace
{{<tag-when>}} {{<tag-minutes>}} {{<tag-minutes>}} 

A "grace" period can also be given to prevent "next" from starting too soon. For example:

{{< slash name="sprint" key0="options" val0="next 10 grace 2" >}}

This will start at the next 10 minute boundary, but not for at least 2 minutes. 

These kinds of settings might be useful for setting a default sprint starting time.

### in (minutes) to (minutes)
{{<tag-when>}} {{<tag-minutes>}}  {{<tag-minutes>}} 

{{< slash name="sprint" key0="options" val0="in 5 to 10 minutes" >}}
{{< atsprinto "sprint in 5 to 10 minutes" >}}

Starts the sprint in 5 to 10 minutes. If run this sprint command at 7:14, the sprint will start at 7:20 (in 6 minutes). Sprinto finds the best ("roundest") time to start your sprint in the period given. In order of preference, Sprinto will start your sprint: on the hour, at half past, at quarter past or quarter to, on a 10 minute interval (such as 11:10 or 11:20), on a 5 minute interval (such as 11:05), or on an exact minute. Sprinto will choose whichever can be found in the interval given.

<!--TODO: next <minutes> grace <minutes> -->

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

{{< slash name="sprint" key0="options" val0="soon" >}}
{{< slash name="sprint" key0="options" val0="for 50 aab" >}}
{{< slash name="sprint" key0="options" val0="for not long in a bit" >}}
{{< atsprinto "sprint 5 real soon" >}}

## Presets

Convenient ways to start a sprint. 

| Preset | Meaning |
| --- | --- |
| {{<slashembed name="sprint" >}}  (default) | for 15m in 1m |
| {{<slashembed name="sprint" key0="options" val0="quick" >}} | for 5m in 30s endtime 90s |
| {{<slashembed name="sprint" key0="options" val0="long" >}} | for 30 in 2.5 to 7.5 mins |
| {{<slashembed name="sprint" key0="options" val0="marathon" >}} | for 60 in 7.5 to 12.5 mins endtime 10 |

<!-- | `dreamily` | `/sprint for 10 in a bit` (in 3 to 8 mins) | -->
<!-- | `just` | `/sprint now` | -->

You can override any part of a preset. For example,

{{<slash name="sprint" key0="options" val0="quick 10" >}} 
is the same as
{{<slash name="sprint" key0="options" val0="for 10 minutes in 30 seconds endtime 90s" >}} 
 
Please send feedback if you have suggestions for other presets or shortcuts.

## endtime
{{<tag-minutes>}}

{{<slash name="sprint" key0="options" val0="endtime 10 " >}}
{{<atsprinto "sprint endtime 10 " >}}
{{<alts "More synonyms" >}}
{{<slash name="sprint" key0="options" val0="fin 10 " >}}
{{</alts>}}

How long sprinters have to give their final word count. 

If you don't set this, the default ranges from 2 to 7.5 minutes depending on the length of your sprint. (calculated as: 1:30 min + 30s per 5 minutes of sprint) 

Use {{<atsprintoembed "status">}} to check the endtime duration for a currently running sprint.

## Sprint flags
| Keyword | Meaning |
| --- | --- |
| `quietly` | Don't ping anyone to announce the sprint. Synonym: `quiet` |
| `noff` | "No fast finish" — Always wait the full ending time for final word counts before showing the final results (instead of speeding it up if everyone's given their word counts). |
| `please` | Ask Sprinto to do things he wouldn't normally, such as running a sprint up to 2 hours. Synonym: `pls`, `thanks`, `danke` |
| `lock` | Lock the sprint, meaning only a SprintMC can cancel it. See: [sprint admin commands]({{< relref "admin-sprint" >}}) |

Examples:
{{<slash name="sprint" key0="options" val0="for 5 quietly" >}} 
Don't alert anyone about the start of your 5 minute sprint.

{{<slash name="sprint" key0="options" val0="marathon endtime 12 noff" >}} 
Run a 1 hour (marathon) sprint, give 12 minutes for sprinters to give or adjust their final word counts, and don't show the scoreboard until those 12 minutes are up.

{{<slash name="sprint" key0="options" val0="for 1.5hr in 5 pls" >}} 
Run a 90 minute sprint in 5 minutes


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