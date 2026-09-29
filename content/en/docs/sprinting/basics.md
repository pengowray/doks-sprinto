---
title : "Sprint basics"
description: How to start a sprint, join it, report your word count, and read the scoreboard
lead: "Start a sprint, join it, write, report your word count, and read the scoreboard."
weight: 10
---

A sprint is a shared timer. Someone starts one, anyone who wants in joins, and everybody writes until the time runs out. When it's over, you report how many words you wrote and Sprinto posts a scoreboard.

Word counts are on the honour system. You type in your own count, and Sprinto never sees your document.

## Your first sprint

### Start a sprint

{{<slash name="sprint" >}}

With no options, `/sprint` starts a 15-minute sprint that begins in 1 minute. That minute is the join window: the time people have to join before writing starts. Sprinto posts this message when the join window opens:

{{< reply >}}
**JOIN THE SPRINT**
The next sprint runs for 15 minutes and will begin in 1 minute.
`/join` (with your starting word count), or `/same` (use your last word count).
{{< /reply >}}

Some channels and servers have their own default sprint, set by an admin, such as 20 minutes starting in 5 minutes. To see what `/sprint` would start in this channel, and where each setting comes from, use {{<slashembed name="explain" >}}.

### Join the sprint

{{<slash name="join" >}}

Join even if you started the sprint yourself. Sprinto adds only people who join, and forgetting to join your own sprint catches out most new sprinters at least once.

If your document already has words in it, give that count when you join. This is your starting count:

{{<slash name="join" key0="word-count" val0="10000" >}}

At the end, report your new total. Sprinto subtracts your starting count to work out how many words you wrote in the sprint.

To start a sprint and join it in one command, add `/join` to the options:

{{<slash name="sprint" key0="options" val0="20 /join" >}}

This starts a 20-minute sprint with you in it, with a starting count of 0. To join with a starting count, use `20 /join 1000`. To join with your last word count, use `20 /same`.

### Write

Write until time's up. During the sprint, Sprinto posts nothing unless the sprint has chimes. A chime is a message saying how much time is left, such as "🔔 **60 seconds remaining**". To get a chime 1 minute before the end, add `chime -1` when you start the sprint:

{{<slash name="sprint" key0="options" val0="chime -1" >}}

Chimes ping nobody by default. To be pinged by chimes, open {{<slashembed name="settings me" >}} and set **Max chimes** to 1 or more. More about chimes: [Sprint (all options)]({{< relref "sprint" >}}#chimes).

### Report your word count

When writing time ends, Sprinto asks for final counts:

{{< reply >}}
**TIME'S UP**
Please give your final word count with `/words`.
You have 3 minutes.
{{< /reply >}}

Report the number of words you wrote:

{{<slash name="words" key0="count" val0="442" >}}

If you joined with a starting count, give your new total instead, and Sprinto works out the difference.

The time you have to report depends on the sprint length: 3 minutes for a 15-minute sprint. The time's-up message says how long. If everyone in the sprint reports before then, Sprinto posts "All word counts are in! Results shortly." and then the scoreboard.

To update your count during the sprint, leave a sprint, or cancel one, see [During the sprint]({{< relref "words" >}}).

## Reading the scoreboard

When the time to report runs out, or everyone has reported, Sprinto posts the results:

{{< reply >}}
🏆 **CONGRATS EVERYONE**

`=` `1.` {{< mention "alex" >}} — **500 words** (33 wpm)
`=` `1.` {{< mention "sam" >}} — **500 words** (33 wpm)
&nbsp;&nbsp;&nbsp;&nbsp;`3.` {{< mention "jo" >}} — **120 words** (8 wpm)
&nbsp;&nbsp;&nbsp;&nbsp;`  ` {{< mention "kit" >}} — **95 words deleted** (2% of starting words)
Combined word count: 1,120 words over 15 minutes.
{{< /reply >}}

Everyone who joined gets a line: their name, the words they wrote during the sprint, and their words per minute in brackets. Tied sprinters share a rank, marked with `=`. If three or more people wrote something, the combined word count for the whole sprint goes underneath.

The words-per-minute figure divides your words by the **whole sprint length**, not by the time you were actually writing. If you join a 20-minute sprint 5 minutes late, your wpm looks low. This is on purpose, so the figure means the same thing for everybody on the board.

If you deleted more words than you wrote, your line shows the number of words deleted, with no rank. The percentage beside it is how much of your starting count you deleted. The percentage is left off when:

- your starting count is under 20 words
- you deleted fewer than 20 words
- you deleted less than 1% of your starting count
- you deleted more than 20 times your starting count

If nobody wrote anything and three or more people deleted words, the deletions are combined instead: `Combined: 600 words deleted (10% of combined starting words).` If anyone started from 0 or deleted more than they started with, the line is `Combined: 600 words deleted.`

Under the results there's usually one more line. Every second sprint it's a quote. On the other sprints it can be news from Sprinto's developer, a reminder about {{<slashembed name="forgetme" >}}, a suggestion to start another sprint, a note that Discord is having problems, or, at the start of a month, a tip to vote for Sprinto on top.gg. Some sprints get no line. An admin can turn off the quotes with `show-quotes`, or the whole line with `show-ps`. See [Settings]({{< relref "settings" >}}).

## If you forget to report

You still appear on the scoreboard, with 0 words. To add your count after the scoreboard is posted, use `/late`:

{{<slash name="late" key0="count" val0="442" >}}

Sprinto edits the posted scoreboard to show your count. By default, `/late` works for 10 minutes after writing time ends. After that, the scoreboard can't be changed.

## Other ways to start a sprint

`/sprint` takes options in any order, and you can combine nearly all of them.

The options box suggests options as you type. To have Sprinto explain the options you typed, end the command with a space and `?`, or with `help`. Sprinto replies only to you.

{{<slash name="sprint" key0="options" val0="20 in 1 ?" >}}

### Length and start time

A number on its own is the length in minutes, from half a minute to 60 minutes. Add `please` for up to 2 hours. An admin can set a lower maximum for a channel or server, such as 90 minutes, and `please` can't go past it.

{{<slash name="sprint" key0="options" val0="30" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 30 minutes" >}}
{{<slash name="sprint" key0="options" val0="for 30 in 1" >}}
{{<atsprinto "sprint 30" >}}
{{</alts>}}

`in` sets when the sprint starts, in minutes from now. Use it to give people more time to join:

{{<slash name="sprint" key0="options" val0="in 5" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="for 15 in 5" >}}
{{<atsprinto "sprint in 5" >}}
{{</alts>}}

To set both, give the length and the start. This is 20 minutes of writing, starting in 5 minutes:

{{<slash name="sprint" key0="options" val0="for 20 in 5" >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0="20 5" >}}
{{<atsprinto "sprint 20 5" >}}
{{<atsprinto "sprint in five mins for 20 mins" >}}
{{</alts>}}

### On the clock

{{<slash name="sprint" key0="options" val0="at :45 " >}}
{{<alts "Synonyms" >}}
{{<slash name="sprint" key0="options" val0=":45" >}}
{{<slash name="sprint" key0="options" val0="at :45 for 15" >}}
{{<atsprinto "sprint :45 " >}}
{{</alts>}}
This starts the sprint the next time the clock reaches :45. If it's 11:39 now, the sprint starts at 11:45. Start times on the clock are easier for everyone to keep track of.

A minute mark like `:45` works without a time zone. To give a full clock time, such as `at 11:45` or `at 2:30pm`, first set your time zone with {{<slashembed name="timezone" >}}: type a city, country or time zone name, such as `Brisbane` or `PST`. You can also name the time zone in the command, as in `at 10:30 est`. Without a time zone, Sprinto refuses a full clock time and asks you to set one.

Tip: put a space after `:45` so Discord doesn't turn it into an emoji. If Discord turns it into a clock emoji anyway, Sprinto asks which command you meant, with a button for each likely one.

### In a bit

{{<slash name="sprint" key0="options" val0="iab" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint iab " >}}
{{<slash name="sprint" key0="options" val0="for 15 mins in a bit" >}}
{{</alts>}}
Sprinto picks a tidy start time 2½ to 7½ minutes from now.

### Quick

{{<slash name="sprint" key0="options" val0="quick" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint quick" >}}
{{</alts>}}
5 minutes of writing, starting in 30 seconds, with 90 seconds to report your word count. Good for a warm-up.

### However long

{{<slash name="sprint" key0="options" val0="hel" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint hel" >}}
{{<slash name="sprint" key0="options" val0="for however long" >}}
{{</alts>}}
Sprinto picks the length for you, usually 10 to 25 minutes, with a small chance of 5, 5½ or 40 minutes. You can combine it with other options, for example {{<slashembed name="sprint" key0="options" val0="hel iab" >}}. For ranges, dice and the other random lengths, see [Random sprint lengths]({{< relref "random" >}}).

### Pomodoro

{{<slash name="sprint" key0="options" val0="pomo" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint pomo" >}}
{{<slash name="sprint" key0="options" val0="pomodoro" >}}
{{</alts>}}
25 minutes of writing. To run several in a row, add a number of rounds: {{<slashembed name="sprint" key0="options" val0="pomo x4" >}} runs four rounds. Each round starts 5 minutes after the previous round's writing time ends. Those 5 minutes are 4 minutes to report your word count and a 1-minute break, so a new round starts every half hour. In a `pomo` chain of five or more rounds, the break after round 4 is at least 15 minutes. More at [Chain sprints]({{< relref "chains" >}}).

### Marathon

{{<slash name="sprint" key0="options" val0="marathon" >}}
{{<alts "Synonyms" >}}
{{<atsprinto "sprint marathon" >}}
{{</alts>}}
An hour of writing, starting in 7½ to 13 minutes, with 10 minutes at the end to report your word count. Halfway through, Sprinto posts a chime saying 30 minutes remain. To leave the chime out, use `marathon no chime`.

For every option, including chains, breaks, flags and exact clock windows, see [Sprint (all options)]({{< relref "sprint" >}}).

## Running it again

To repeat the channel's last sprint, use `again` or `identical`.

{{<slash name="sprint" key0="options" val0="again" >}}
Runs the channel's last sprint again. Random lengths are picked again, and start times such as `in 5` or `iab` are worked out again from now.

{{<slash name="sprint" key0="options" val0="identical" >}}
Repeats the exact lengths of the last sprint. If a random length gave you 17 minutes, you get 17 minutes again.

`again` refuses to repeat a sprint that was set to a clock time with `at` or `until`, and suggests `identical` instead.

You can add changes after either one, with or without `but`:

{{<slash name="sprint" key0="options" val0="identical but at :30 " >}}
{{<slash name="sprint" key0="options" val0="again in 2" >}}

## See also

- [During the sprint]({{< relref "words" >}}) — join, leave, cancel, and word counts
- [Sprint (all options)]({{< relref "sprint" >}}) — the full grammar
