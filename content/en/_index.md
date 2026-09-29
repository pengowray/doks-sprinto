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
Writing starts 1 minute after the sprint is created. Write until time's up.

... <i>15 minutes later</i> ...

Enter your word count at the end. Word counts are on the honour system.

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
You can also type commands after @Sprinto:
{{< atsprinto "sprint" >}}
{{< atsprinto "join" >}}
... <i>15 minutes later</i> ...
{{< atsprinto "442" >}}

After @Sprinto, a number on its own is a word count.

Sprinto accepts fairly flexible input and fixes obvious typos, such as `spront`. Try the commands you think ought to work, or see the rest of this site for more commands.
{{< /alts >}}

{{< alts "Some variations">}}

The `options` box of {{<slashembed name="sprint">}} suggests options as you type.

Other ways to create a sprint:
{{< slash name="sprint" key0="options" val0="at :30 for 45" >}}
This creates a 45 minute sprint that starts at the next half past the hour. For example, if it's 2:26pm, the sprint starts at 2:30pm. A minute mark like `:30` works for everyone, and nobody needs to set a time zone.

{{< slash name="sprint" key0="options" val0="at 2:30pm for 45" >}}
To give a full clock time, first set your time zone with {{<slashembed name="timezone" key0="place" val0="Brisbane">}}. Or, without setting a time zone, name the place or time zone in the command: `at 2:30pm new york` or `at 10:30 est`. A sprint set to a clock time can start up to 50 minutes from now (90 minutes if you add `please`). A sprint set to start with `in`, such as `in 40`, can start up to 60 minutes from now.

{{< slash name="sprint" key0="options" val0="until :00 now" >}}
This creates a sprint that starts immediately and runs until the end of the hour.

{{< slash name="sprint" key0="options" val0="for 20 soon" >}}
This creates a 20 minute sprint that starts 1 to 2 minutes from now, on a whole minute. Use `shortly` instead of `soon` to start the sprint 2 to 3 minutes from now.

{{< slash name="sprint" key0="options" val0="hel iab" >}}
`hel` is short for "however long": Sprinto picks a random length. `iab` is short for "in a bit": the sprint starts in 2½ to 7½ minutes, at a round clock time. See [Random sprint lengths]({{< relref "random" >}}).

{{< slash name="sprint" key0="options" val0="pomo x4" >}}
Run four 25 minute sprints, one every half hour. `25 then 50 then 15` runs three sprints in a row: 25, 50 and 15 minutes long. Sprints in a row like these are a chain, and each sprint in a chain is a round. A chain can have up to 8 rounds. See [Chain sprints]({{< relref "chains" >}}).

{{< slash name="join" key0="word-count" val0="1000" >}}
Join the sprint with a starting count of 1,000 words. Your starting count is taken off the word count you report at the end.

{{< slash name="same" >}}
Join the sprint with your last word count as your starting count. Your last word count is the count you last reported, or the starting count you last joined with.

{{< slash name="words" key0="count" val0="1442 final" >}}
Give your final word count before the sprint ends, so Sprinto and the other participants don't wait for your count at the end. Use this if you need to rush off in the middle of a sprint.

{{< slash name="words" key0="count" val0="+102" >}}
A plus sign adds to your last count: `+102` adds 102 words to the count you last reported, or to your starting count if you haven't reported yet. Use a plus sign if you don't remember the count you joined with.

For many more ways to start a sprint, see [Sprint (all options)]({{< relref "sprint" >}}).
{{< /alts >}}

---

Coming back after a break? Sprinto's had a full rewrite. See [What's new]({{< relref "whats-new" >}}) for what changed.
