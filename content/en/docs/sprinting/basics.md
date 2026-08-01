---
title : "Sprint basics"
description: How to start a sprint, join it, and report your word count
lead: "Sprint basics"
weight: 10
---

Write with your friends! A sprint is a shared timer. Somebody starts one, everyone who wants in joins, and then you all write until the time runs out. At the end you say how many words you got down and Sprinto posts a scoreboard.

It's on the honour system. Nobody is checking your document.

## The four steps

**1. Start it.**

{{<slash name="sprint" >}}

That's a 15 minute sprint, starting in 1 minute. The minute before the start is the join window, so people have a moment to notice and pile in.

**2. Join it.**

{{<slash name="join" >}}

You have to join your own sprint. Sprinto doesn't add you automatically, and it's the single most common thing new sprinters get caught by. If you're partway through a document already, join with the count you're starting from and Sprinto will subtract it later: {{<slashembed name="join" key0="word-count" val0="10000" >}}

**3. Write.** Sprinto announces the start, and announces when time's up. A bell rings in the channel a minute before the end. If you want that bell to ping you as well, set your chimes to 1 or more under {{<slashembed name="settings me" >}}.

**4. Report.**

{{<slash name="words" key0="count" val0="442" >}}

You get a few minutes after time's up to give your count before Sprinto posts the scoreboard. On a 15 minute sprint that's 3 minutes, and the time's-up message says how long. If you joined with a starting count, give the new total and Sprinto works out the difference.

More on counting, leaving, cancelling and the rest: [During the sprint]({{< relref "words" >}}).

## Reading the scoreboard

When the reporting window closes, Sprinto posts the results:

{{< reply >}}
🏆 **CONGRATS EVERYONE**
`=` `1.` {{< mention "alex" >}} — **500 words** (33 wpm)
`=` `1.` {{< mention "sam" >}} — **500 words** (33 wpm)
&nbsp;&nbsp;&nbsp;&nbsp;`3.` {{< mention "jo" >}} — **120 words** (8 wpm)
&nbsp;&nbsp;&nbsp;&nbsp;`  ` {{< mention "kit" >}} — **2,005 words deleted** (4% of starting words)
Combined word count: 1,120 words over 15 minutes.
{{< /reply >}}

Everyone who joined gets a line: their name, the words they wrote during the sprint, and a words-per-minute figure in brackets. Ranks are shared on a tie, marked with `=`. If three or more people wrote something, Sprinto adds a combined total for the whole room underneath. If nobody wrote and three or more people cut, it adds the deletions instead: `Combined: 600 words deleted (10% of combined starting words).`

The words-per-minute number divides your words by the **whole sprint length**, not by however long you were actually at the keyboard. Join five minutes late into a twenty minute sprint and your wpm will look low. That's on purpose, so the figure means the same thing for everybody on the board.

If you deleted more than you wrote, Sprinto says so instead, without ranking you. Cutting words is still work. The percentage beside it is how much of your starting words you cut. It's left off when it would tell you nothing: a starting count under 20 words, or a cut of more than twenty times what you started with.

## If you forget to report

You'll still show up on the scoreboard, on zero. It happens to everyone.

For the few minutes right after time's up, you can fix it:

{{<slash name="late" key0="count" val0="442" >}}

Sprinto edits the scoreboard in place, so your count lands where it should have. The window is 10 minutes after the sprint ends by default, and after that the board is closed for good.

## Handy ways to start a sprint

Every part is optional and the order doesn't matter, so most of these can be mixed together.

### A different length

{{<slash name="sprint" key0="options" val0="30" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 30 minutes" >}}
{{<slash name="sprint" key0="options" val0="for 30 in 1" >}}
{{<atsprinto "sprint 30" >}}
{{</alts>}}
A bare number is a length in minutes. Anything from half a minute up to an hour. Anyone can push past an hour, up to two, by asking nicely with `please`.

### Start a bit later

{{<slash name="sprint" key0="options" val0="in 5" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 15 in 5" >}}
{{<atsprinto "sprint in 5" >}}
{{</alts>}}
Default length, starting in five minutes. Handy when you want to give people time to arrive.

### Both at once

{{<slash name="sprint" key0="options" val0="for 20 in 5" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="20 5" >}}
{{<atsprinto "sprint 20 5" >}}
{{<atsprinto "sprint in five mins for 20 mins" >}}
{{</alts>}}
Twenty minutes of writing, starting in five.

### On the clock

{{<slash name="sprint" key0="options" val0="at :45 " >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0=":45" >}}
{{<slash name="sprint" key0="options" val0="at :45 for 15" >}}
{{<atsprinto "sprint :45 " >}}
{{</alts>}}
Start at the next quarter-to. If it's 11:39 now, the sprint starts at 11:45. Round start and end times are much easier for everyone to keep track of. Write only the minutes, since Sprinto doesn't know your time zone.

Tip: put a space after `:45` so Discord doesn't try to turn it into an emoji.

### In a bit

{{<slash name="sprint" key0="options" val0="iab" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint iab " >}}
{{<slash name="sprint" key0="options" val0="for 15 mins in a bit" >}}
{{</alts>}}
Sprinto picks a tidy start time somewhere in the next 2½ to 7½ minutes.

### Quick

{{<slash name="sprint" key0="options" val0="quick" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint quick" >}}
{{</alts>}}
Five minutes, starting in thirty seconds, with a shortened window for final counts. Good for a warm-up.

### However long

{{<slash name="sprint" key0="options" val0="hel" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint hel" >}}
{{<slash name="sprint" key0="options" val0="for however long" >}}
{{</alts>}}
Can't decide? Sprinto spins a wheel. Usually 10 to 25 minutes, with a small chance of something around 5 or 40. Combine it with anything else, for example {{<slashembed name="sprint" key0="options" val0="hel iab" >}}

### Pomodoro

{{<slash name="sprint" key0="options" val0="pomo" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint pomo" >}}
{{<slash name="sprint" key0="options" val0="pomodoro" >}}
{{</alts>}}
A 25 minute block. Add a repeat to get the real rhythm: {{<slashembed name="sprint" key0="options" val0="pomo x4" >}} runs four of them with five minute breaks in between. Ask for more than four and the break after the fourth block is a longer one, 15 minutes.

### Marathon

{{<slash name="sprint" key0="options" val0="marathon" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint marathon" >}}
{{</alts>}}
An hour of writing, starting in 7½ to 13 minutes, with ten minutes at the end for final counts.

There is a lot more where this came from: wheels, chains, breaks, flags, exact clock windows. See [Sprint (all options)]({{< relref "sprint" >}}).

## Running it again

Liked that one? Do it again without retyping it.

{{<slash name="sprint" key0="options" val0="again" >}}
Re-runs the channel's last sprint, but freshly worked out. Random wheels spin again, and "in a bit" style start times get picked again from now.

{{<slash name="sprint" key0="options" val0="identical" >}}
Repeats the exact same durations as last time. If the wheel gave you 17 minutes, you get 17 minutes.

If the last sprint was pinned to a clock time with `at` or `until`, there's nothing for `again` to re-roll, so it'll ask you to use `identical` instead.

Either one takes changes on the end, optionally with `but`:

{{<slash name="sprint" key0="options" val0="identical but at :30 " >}}
{{<slash name="sprint" key0="options" val0="again in 2" >}}

## See also

- [During the sprint]({{< relref "words" >}}) — join, leave, cancel, and word counts
- [Sprint (all options)]({{< relref "sprint" >}}) — the full grammar
