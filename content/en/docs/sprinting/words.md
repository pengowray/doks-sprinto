---
title : "During the sprint"
description: 
lead: Commands for once the sprint's started
---

## What Sprinto posts

A sprint has three announcements, and they're all the same shape: a decorated banner, a line of detail, then who's involved.

**The join window.** The sprint is booked but hasn't started, so there's still time to get in:

{{< reply >}}
🍋🍋🍋 **JOIN THE SPRINT** 🍋🍋🍋
The next sprint runs for 15 minutes and will begin in 60 seconds.
`/join` (with your starting word count), or `/same` (use your last word count).
📢 Pings: {{< mention "alex" >}} (not joined)
{{< /reply >}}

The fruit is different every sprint, it's only decoration. 📢 Pings is everyone Sprinto is calling in: people who asked to be pinged, any ping role, and the person who started the sprint if they still haven't joined it, as above. When the start is more than two minutes away you get a clock time instead of "in 60 seconds", shown in your own timezone.

**The start.**

{{< reply >}}
🍏🍏🍏 **SPRINT STARTING NOW** 🍏🍏🍏
Duration: 15 minutes (until ⏰ 10:45).
⏳ Time's up in 15 minutes
📣 Participants: {{< mention "alex" >}} (1,200), {{< mention "sam" >}} (0)
{{< /reply >}}

The end time is in your own timezone, and "in 15 minutes" ticks down by itself while you write. 📣 Participants is who's actually in the sprint. The number after each name is the count they joined with; it becomes something like `(1,200+300)` once they've told Sprinto how it's going, and vanishes altogether once their count is in.

**Time's up.**

{{< reply >}}
🛑🛑🛑 **TIME'S UP** 🛑🛑🛑
Please give your final word count with `/words`, e.g. `/words 150`
📣 Participants: {{< mention "alex" >}} (1,200), {{< mention "sam" >}} (0)
{{< /reply >}}

The example number is worked out from the length of the sprint, not from anything you wrote. Since names lose their count once they've reported, the Participants line here doubles as the list of who Sprinto is still waiting on.

## Cancel

Oops! Made a mistake? You can cancel a sprint with:

{{<slash name="cancel" >}}
<br>

If Sprinto didn't understand your {{< slashembed name="sprint" >}} command you can cancel it and start over. Note that if others have joined your sprint, you might need them to {{< slashembed name="cancel" >}} too.

## Force cancel

{{<tag-mc>}}

{{<slash name="cancelplease" >}}
{{<atsprinto "cancelplease" >}}
{{<alts>}}
{{<atsprinto "cancelpls" >}}
{{<atsprinto "forcecancel" >}}
{{</alts>}}

Forces a running sprint to end, regardless of how many sprinters have joined.

Anyone can use it on a sprint that hasn't started yet, or one where nobody else has joined. Once a sprint is underway with other people in it, forcing it is for {{<role "@Sprint MC">}}s.

## Join a sprint

{{<slash name="join" >}}
{{<alts>}}
{{<slash name="join" key0="word-count" val0="0" >}}
{{<atsprinto "join" >}}
{{</alts>}}
Join the sprint with zero starting words. Note: You must join your own sprint too.

{{<slash name="join" key0="word-count" val0="10000" >}}
{{<alts>}}
{{<atsprinto "join 10000" >}}
{{</alts>}}
Join with 10,000 words (This is the word count of the document you're working on so it can be subtracted from your final count)

{{<slash name="same" >}}
{{<alts>}}
{{<slash name="join" key0="word-count" val0="same" >}}
{{<slash name="join" key0="word-count" val0="last" >}}
{{<slash name="join" key0="word-count" val0="=" >}}
{{<atsprinto "same" >}}
{{</alts>}}
Join with your last word count (e.g. from your previous sprint)

{{<slash name="same" key0="adjustment" val0="+300 new" >}}
`/same` also takes an optional adjustment, so you can pick up your last count with a tweak on top.

## Some different ways to declare or update your word count

{{< slash name="words" key0="count" val0="10150" >}}
When time's up, declare the word count of your document is now 10,150. If you started with 0 words, your word count might look more like: {{<slashembed name="words" key0="count" val0="150" >}}

Either way, Sprinto answers with the words you wrote *during the sprint*, not the total in your document:

{{< reply >}}
{{< mention "alex" >}}, Word count updated: **150** words.
{{< /reply >}}

Your name is on it so the channel can tell whose count it is, but it won't ping you.

{{<slash name="words" key0="count" val0="\-" >}}
At the end of a sprint you may wish to simply leave your word count unchanged. Don't forget the dash `-` without it, Sprinto will just show your current word count.

{{<slash name="words" key0="count" val0="150 new" >}}
If you know how many *new* words you've written, but perhaps changed documents or lost track of your starting word count, you can just declare how many of your words are `new` (written during the sprint). Use {{< slashembed name="words" key0="count" val0="0 new" >}} to reset your count to your starting word count.

{{<slash name="words" key0="count" val0="+50" >}}
{{<alts>}}
{{<slash name="words" key0="count" val0="add 50" >}}
{{</alts>}}
Add another 50 new words to your count. Perhaps from your second manuscript.

{{<slash name="words" key0="count" val0="10150 final" >}}
{{<alts>}}
{{<slash name="final" key0="count" val0="10150" >}}
{{</alts>}}
Give your final word count early, before the sprint is over. This way Sprinto won't wait for another {{<slashembed name="words">}} from you after time's up.

{{<slash name="join" key0="word-count" val0="15000" >}}
You can rejoin a sprint with a different number of starting words before giving your word count with {{<slashembed name="words">}}. Sometimes it's easier.

{{<slash name="join" key0="word-count" val0="just 200 final" >}}
Late to the party? Forgot to join? Dive-bomb in just before the finish line with just your final tally and surprise everyone! You can't use this to join a sprint before it's fully underway.

Why are there so many commands? All you need is to
{{<slash name="join" >}}
and then give a final count with
{{<slash name="words" key0="count" val0="_your word count_">}}
For example:
{{<slash name="words" key0="count" val0="150">}}
The rest are just for your convenience.

## Typos

Typed commands don't have to be spelled right. If Sprinto is confident about what you meant, it runs it and shows you what it decided:

{{< reply name="alex" app="0" >}}
{{< mention "Sprinto" >}} wrods 250
{{< /reply >}}

{{< reply >}}
{{< mention "alex" >}}, ↳ /words : Word count updated: **250** words.
{{< /reply >}}

The `↳` line is the correction: it's the command Sprinto ran on your behalf. If nothing is close enough to be sure about, it stays quiet rather than guessing. Slash commands come from Discord's own menu, so there's nothing there to correct.

## I forgot to report

{{<slash name="late" key0="count" val0="10150" >}}
{{<alts>}}
{{<slash name="late" >}}
{{<atsprinto "late 10150" >}}
{{<atsprinto "latewc 10150" >}}
{{</alts>}}

The scoreboard isn't set in stone the moment it's posted. For 10 minutes after time's up you can still put your number in, or fix one you got wrong, with {{<slashembed name="late">}}. The scoreboard updates in place.

It takes the same sorts of counts as {{<slashembed name="words">}}, so {{<slashembed name="late" key0="count" val0="+250" >}} and {{<slashembed name="late" key0="count" val0="300 new" >}} both work.

The host can change that window when starting the sprint, with `late 20` for longer or `late none` to turn it off. See [Sprint (all options)]({{<relref "sprint" >}}).

## Undo

{{<slash name="undo" >}}
{{<alts>}}
{{<atsprinto "undo">}}
{{</alts>}}
Take back your last word count.

{{<slash name="redo" >}}
{{<alts>}}
{{<atsprinto "redo">}}
{{</alts>}}
Put it back again.

Both step through your own reports one at a time, up to 100 of them, so you can undo your way out of a bad number without cancelling anything.

## More sprint-related commands

{{<slash name="words" >}}
{{<alts>}}
{{<atsprinto "words">}}
{{<atsprinto "wc">}}
{{</alts>}}
By itself will show your starting and current word count.

{{<slash name="time" >}}
{{<alts>}}
{{<atsprinto "time">}}
{{<atsprinto "timeleft">}}
{{<atsprinto "howlong">}}
{{</alts>}}
How long is remaining in the current sprint?

{{<slash name="leave" >}}
Leave a sprint you have joined.

{{<slash name="cancel" >}}
{{<alts>}}
{{<atsprinto "cancel">}}
{{</alts>}}
Cancel the active sprint.

{{<slash name="go" >}}
{{<alts>}}
{{<atsprinto "go">}}
{{<atsprinto "begin">}}
{{</alts>}}
Don't wait out the rest of the join window, start the sprint now. Only the person who started it, or a {{<role "@Sprint MC">}}, can do this.

{{<slash name="nudge" >}}
{{<alts>}}
{{<atsprinto "nudge">}}
{{<atsprinto "results">}}
{{</alts>}}
If a sprint looks stuck waiting on someone's word count, this asks Sprinto to move it along.

{{<atsprinto "who" >}}
Who's in the current sprint.

{{<atsprinto "status" >}}
Similar to /time but gives more information about your own status.

## Related general commands

{{<atsprinto "help" >}}
Show the basics for sprinting.

{{<atsprinto "longhelp" >}}
Show longer help in the channel. Still it's not nearly as complete as the help here.

{{<atsprinto "invite" >}}
Generate a link to invite Sprinto to your own Discord server

{{<slash name="feedback" key0="text" val0="_your feedback here_" >}}
{{<alts>}}
{{<atsprinto "feedback *your feedback here*">}}
{{</alts>}}
Give your suggestions and improvement ideas. A copy will be posted anonymously on the Sprinto Planet support server. ⟨[discord.gg/jWBcCYQ](https://discord.gg/jWBcCYQ)⟩ Please join to see the dev's response

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Sprint (basics)]({{<relref "basics" >}}) — common ways to use `/sprint`
- [Sprint (all options)]({{<relref "sprint" >}}) — complete sprint options guide
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
