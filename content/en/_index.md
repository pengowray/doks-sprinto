---
title : "Sprinto"
description: "Discord sprint bot. Bring writers together."
lead: ""
draft: false
images: []
---
## Example usage

Create a 15 minute sprint:
{{< slash name="sprint" >}}
You and other participants can join:
{{< slash name="join" >}}
One minute after creating the sprint, time begins. Write until time's up.

... <i>15 minutes later</i> ...

Enter your word count at the end. It's on the honour system.

{{< slash name="words" key0="count" val0="442" >}}

Sprinto posts a scoreboard for everyone who joined.

Congratulations! You've written some words! Start again and write some more!

{{< alts "With a starting word count">}}
{{< slash name="sprint" >}}
{{< slash name="join" key0="word-count" val0="1000" >}}
... <i>15 minutes later</i> ...
{{< slash name="words" key0="count" val0="1442" >}}
Your starting count (1,000 words) is taken off the word count you report (1,442 words), so Sprinto counts 442 words written.
{{< /alts >}}

{{< alts "Without slash commands">}}
You can also @Sprinto:
{{< atsprinto "sprint" >}}
{{< atsprinto "join" >}}
... <i>15 minutes later</i> ...
{{< atsprinto "442" >}}

A number on its own is a word count.

Sprinto accepts fairly flexible input, and fixes obvious typos like `spront`, so try commands you think ought to work, or see the docs for more things.
{{< /alts >}}

{{< alts "Some variations">}}

The `options` box of {{<slashembed name="sprint">}} suggests options as you type.

Other ways to create a sprint:
{{< slash name="sprint" key0="options" val0="at :30 for 45" >}}
The above will create a 45 minute sprint which starts at the next half past the hour. For example, if it's 2:26pm, it will start at 2:30pm. A minute mark like `:30` works for everyone, with no time zone set.

{{< slash name="sprint" key0="options" val0="at 2:30pm for 45" >}}
To give a full clock time, first set your time zone with {{<slashembed name="timezone" key0="place" val0="Brisbane">}}. Or name the place in the command, with no time zone set: `at 2:30pm new york` or `at 10:30 est`. A clock-time start can be up to 50 minutes away (90 minutes if you add `please`). A wait like `in 40` can be up to 60 minutes.

{{< slash name="sprint" key0="options" val0="until :00 now" >}}
The above creates a sprint which starts immediately and runs until the end of the hour.

{{< slash name="sprint" key0="options" val0="for 20 soon" >}}
This creates a 20 minute sprint that starts 1 to 2 minutes from now, on a whole minute. `shortly` starts it 2 to 3 minutes from now.

{{< slash name="sprint" key0="options" val0="hel iab" >}}
Sprint for "however long" (a random length of time) "in a bit" (in 2½ to 7½ minutes, at a round clock time). See [Random sprint lengths]({{< relref "random" >}}).

{{< slash name="sprint" key0="options" val0="pomo x4" >}}
Run four 25 minute sprints, one every half hour. `25 then 50 then 15` runs three sprints in a row. A chain can have up to 8 rounds. See [Chain sprints]({{< relref "chains" >}}).

{{< slash name="join" key0="word-count" val0="1000" >}}
Join the sprint with a starting count of 1,000 words. Your starting count is taken off the word count you report at the end.

{{< slash name="same" >}}
Join the sprint at the last word count Sprinto has for you: the count you last reported, or joined with.

{{< slash name="words" key0="count" val0="1442 final" >}}
Give your final word count early (before the sprint ends) so Sprinto (and other participants) won't wait for your count after the sprint ends. You can use this if you need to rush off in the middle of a sprint.

{{< slash name="words" key0="count" val0="+102" >}}
A plus sign adds to your last count: `+102` adds 102 words to the count you last reported, or to your starting count if you haven't reported yet. Use it if you don't remember the count you joined with.

For many more ways to start a sprint, see [Sprint (all options)]({{< relref "sprint" >}}).
{{< /alts >}}

---

Coming back after a break? Sprinto's had a full rewrite. See [What's new]({{< relref "whats-new" >}}) for what changed.
