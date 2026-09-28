---
title : "During the sprint"
description:
lead: Commands for once the sprint's started
url: "docs/during-the-sprint"
---

## What Sprinto posts

Sprinto posts three announcements over the course of a sprint: one when the sprint is created, one when it starts, and one when time is up. Each has a banner, a line or two of detail, and a list of who's involved. If the sprint has a bell, there's also a short reminder partway through.

**The join window.** The sprint is created but hasn't started. The ideal time to join:

{{< reply >}}
🍋🍋🍋 **JOIN THE SPRINT** 🍋🍋🍋
The next sprint runs for 15 minutes and will begin in 60 seconds.
`/join` (with your starting word count), or `/same` (use your last word count).
📢 Pings: {{< mention "alex" >}} (not joined)
{{< /reply >}}

Notes:

- 📢 Pings lists everyone Sprinto is calling in: people who asked to be pinged, any ping role, and the person who started the sprint if they still haven't joined it, as above.
- If it starts in more than two minutes, the message also shows the start time, like `in 5 minutes (at 10:05)`, in your own timezone.
- The fruit emoji changes from sprint to sprint and doesn't mean anything.

### The start.

{{< reply >}}
🍏🍏🍏 **THE SPRINT BEGINS: FIFTEEN MINUTES** 🍏🍏🍏
Duration: 15 minutes (until ⏰ 10:45).
⏳ Time's up in 15 minutes
📣 Participants: {{< mention "alex" >}} (1,200), {{< mention "sam" >}} (0)
{{< /reply >}}

Notes:

- How long the sprint goes for is shown a few times so you don't miss it.
- A sprint with bells adds `🔔 at 60s remaining.` or similar to that line.

📣 Participants:

- Lists who's in the sprint.
- The number after each name is the count they joined with; it changes to something like `(1,200+300)` when they report progress, and disappears once their final count is in.

### The bell.

{{< reply >}}
🔔 **60 seconds remaining**
{{< /reply >}}

> For more, see [chimes]({{<relref "sprint" >}}#chimes).

The bell only appears if the sprint was set up with one: in your command, in the channel's default sprint, or through a preset like `marathon`. A bell doesn't @ anyone unless they asked to be @'d, which you can change in "/settings me".

### **Time's up.**

{{< reply >}}
🛑🛑🛑 **TIME'S UP** 🛑🛑🛑
Please give your final word count with `/words`. You have 3 minutes.
📣 Participants: {{< mention "alex" >}} (1,200), {{< mention "sam" >}} (0)
{{< /reply >}}

The three minutes is how long you have to report. It's worked out from the length of the sprint, 3 minutes for a 15 minute sprint and up to 10 for a very long one, unless the host set it with `endtime`. A name's count disappears once they've reported, so anyone still shown with a number here is someone Sprinto is waiting on.

### Everyone's in.

{{< reply >}}
All word counts are in! Results shortly.
{{< /reply >}}

Once everyone still in the sprint has reported or locked their count in, Sprinto stops waiting and posts the scoreboard a few seconds later. {{<slashembed name="leave" >}} counts as done too, so if the last person Sprinto was waiting on leaves instead of reporting, the results post straight away. A sprint started with `noff` waits out the full window instead. See [sprint flags]({{<relref "sprint" >}}#sprint-flags).

<!--
### Nobody in it.

{{< reply >}}
🏆 **CONGRATS EVERYONE!**
That's all, folks. /sprint to start another. (No one joined)
{{< /reply >}}

This is how a sprint ends when there's no one in it at the end, whether nobody joined or everybody left. There's no scoreboard. `That's all, folks.` is one of a handful of sign-offs, picked at random.
-->

### The scoreboard.

{{< reply >}}
🏆 **Congrats everyone!**
{{< /reply >}}

Notes:

- Your word counts are self-reported, on the honesty system.
- It's all about the writing, writing with others to keep yourself accountable, and challenging yourself.
- The admin can change the scoreboard to shuffle the results.

## Cancel

If you made a mistake, you can cancel a sprint with:

{{<slash name="cancel" >}}
<br>

If Sprinto didn't understand your {{< slashembed name="sprint" >}} command you can cancel it and start over. Note that if others have joined your sprint, you might need them to {{< slashembed name="cancel" >}} too.

{{< reply >}}
**The sprint has been called off.** 😢
📣 Participants: {{< mention "alex" >}}, {{< mention "sam" >}}
{{< /reply >}}

Everyone who was in it is tagged, and the countdown is edited to read `Time's up! ⏳ (Canceled)`. The sad face is picked at random.

If other people are in the sprint, your {{< slashembed name="cancel" >}} counts as a vote instead of cancelling it straight away:

{{< reply >}}
Sorry, can't cancel an active sprint when it has other participants. It will be cancelled if the remaining 2 of 3 sprinters also `/cancel`, or if you say `/cancelplease`.
{{< /reply >}}

Your vote stands, and {{<atsprintoembed "who" >}} marks the sprinters who have voted with an ❌.

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

A bare `/join` always means zero, rejoins included. If you're already in the sprint with 10,000 starting words, say the number again with {{<slashembed name="join" key0="word-count" val0="10000" >}} rather than `/join` on its own, or you'll be starting from nothing. A comment in brackets counts as bare too, so {{<atsprintoembed "join (back from tea)">}} also puts you back on zero.

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

That's the last count you gave Sprinto in any channel: a word count you reported, or the count a join put you on. A bare `/join` counts, and puts you on zero.

{{<slash name="same" key0="adjustment" val0="+300 new" >}}
`/same` also takes an optional adjustment, so you can pick up your last count with a tweak on top.

Once you're already in the sprint, `/same` reports instead of joining: it files your last count as your new total, exactly like typing that number into {{<slashembed name="words">}}. If that would mean more new words than the sprint has had time for, Sprinto asks which you meant and puts the choices on buttons instead of putting the number on the board. An adjustment then goes on the count you're on here, so `/same +300` means the same as {{<slashembed name="words" key0="count" val0="+300" >}}.

## Some different ways to declare or update your word count

{{< slash name="words" key0="count" val0="10150" >}}
When time's up, declare the word count of your document is now 10,150. If you started with 0 words, your word count might look more like: {{<slashembed name="words" key0="count" val0="150" >}}

Either way, Sprinto answers with the total in your document, and says how much of it is new:

{{< reply >}}
{{< mention "alex" >}}, Word count updated: 10,150 words (150 new)
{{< /reply >}}

If you joined with no starting count there's only one number to give back, so it reads `Word count updated: 150 words`. Your name is on it so the channel can tell whose count it is, but it won't ping you.

Sprinto won't file a number that looks wrong: a total far bigger than the sprint has had time for, or one that would put your new words below zero. It shows you what the number would mean and puts the choices on buttons. If it really is right, add `please`: {{<slashembed name="words" key0="count" val0="50000 please" >}}.

{{<slash name="words" key0="count" val0="\-" >}}
At the end of a sprint you may wish to simply leave your word count unchanged. Don't forget the dash `-`; without it, Sprinto will just show your current word count. The dash also marks you done, like {{<slashembed name="final" >}}, so the sprint stops waiting on you.

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
Give your final word count early, before the sprint is over. This way Sprinto won't wait for another {{<slashembed name="words">}} from you after time's up. If you never joined at all, {{<slashembed name="final" key0="count" val0="10150" >}} joins you and marks you done at once, so nobody waits on you. {{<slashembed name="final" >}} on its own does the same on zero.

{{<slash name="join" key0="word-count" val0="15000" >}}
You can rejoin a sprint with a different number of starting words before giving your word count with {{<slashembed name="words">}}. Sometimes it's easier.

{{<slash name="join" key0="word-count" val0="just 200 final" >}}
If you forgot to join, you can still jump in near the end with just your final count. This only works once the sprint is fully underway.

There are a lot of commands here, but all you need is to
{{<slash name="join" >}}
and then give a final count with
{{<slash name="words" key0="count" val0="_your word count_">}}
For example:
{{<slash name="words" key0="count" val0="150">}}
Everything else is just for convenience.

## Saying something with your count

Anything in brackets is a comment for the room, not part of the command. Sprinto takes it out before reading the rest, and repeats it in bold at the end of its reply:

{{< reply name="alex" app="0" >}}
{{< mention "Sprinto" >}} words 850 [brb tea]
{{< /reply >}}

{{< reply >}}
{{< mention "alex" >}}, Word count updated: 850 words (150 new) **[brb tea]**
{{< /reply >}}

Round `(…)` and square `[…]` brackets both work, and so do several in one line. Forget the closing bracket and the rest of the line is the comment. It works on {{<slashembed name="sprint">}} and {{<slashembed name="join">}} as well as the counting commands; on a sprint the comment goes in the line above the announcement, since the announcement is the reply.

Brackets holding nothing but a number are the count, not a comment: once the sprint is under way, {{<slashembed name="words" key0="count" val0="(350)" >}} reports 350. You can also paste Sprinto's own reply straight back at it. {{<atsprintoembed "words 1,250 words (250 new)">}} sets your total to 1,250 **and** your starting count to 1,000, so the "(250 new)" you sent is the answer you get. Before the sprint starts there's nothing new yet, so the same line simply joins you with 1,250 starting words.

Saying how much of it is new is also how you get a big total past Sprinto: {{<atsprintoembed "words 50,000 words (250 new)">}} goes straight through, crediting 250 words to the sprint and filing the other 49,750 as your starting count. It only asks about the new words now, so `100,000 words (50,000 new)` still gets a question.

## Typos

Typed commands don't have to be spelled right. If Sprinto is confident about what you meant, it runs it and shows you what it decided:

{{< reply name="alex" app="0" >}}
{{< mention "Sprinto" >}} wrods 250
{{< /reply >}}

{{< reply >}}
{{< mention "alex" >}}, ↳ /words : Word count updated: 250 words
{{< /reply >}}

The `↳` line is the correction: it's the command Sprinto ran on your behalf. If nothing is close enough to be sure about, it stays quiet rather than guessing. Slash commands come from Discord's own menu, so there's nothing there to correct.

## I forgot to report

{{<slash name="late" key0="count" val0="10150" >}}
{{<alts>}}
{{<slash name="late" >}}
{{<atsprinto "late 10150" >}}
{{<atsprinto "latewc 10150" >}}
{{</alts>}}

The scoreboard can still change after it's posted. For 10 minutes after "time's up" you can squeeze in your word count or fix it with {{<slashembed name="late">}}. The scoreboard updates in place.

In some cases the 10 minute window can be cut short. When a new (very short) sprint in the same channel is a minute from finishing, the previous window closes. The late window can also be adjusted or turned off either in the sprint command or the channel's custom sprint defaults.
<!-- In a [chain sprint]({{<relref "sprint" >}}#chains), each round's scoreboard takes late updates of its own, so a count you missed in the first block can still go on its board while the next one runs. {{<slashembed name="late">}} goes to the older board, {{<slashembed name="words">}} to the block you're in. The older window shuts a minute before the next block's writing ends, so only one board is ever open. -->
The "/late" command accepts the same sorts of counts as {{<slashembed name="words">}}, so:

-  {{<slashembed name="late" key0="count" val0="+250" >}} and

- {{<slashembed name="late" key0="count" val0="300 new" >}} both work.

The host can change that window when starting the sprint, with `late 20` for longer or `late none` to turn it off. See [Sprint (all options)]({{<relref "sprint" >}}).

## More sprint-related commands

{{<slash name="words" >}}
{{<alts>}}
{{<atsprinto "words">}}
{{<atsprinto "wc">}}
{{</alts>}}
By itself will show your current word count: your total, and how many of those words are new. Before the sprint starts it shows the count you joined with.

{{<slash name="time" >}}
{{<alts>}}
{{<atsprinto "time">}}
{{<atsprinto "timeleft">}}
{{<atsprinto "howlong">}}
{{</alts>}}
How long is remaining in the current sprint?

{{<slash name="leave" >}}
Leave the sprint. It works even if you never joined: that takes you off the list Sprinto is waiting on, which is what you want if you started a sprint you're not writing in. Leaving also undoes {{<slashembed name="final" >}}, so if you rejoin, Sprinto will wait on a count from you again.

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

{{<atsprinto "who" >}}
Who's in the current sprint.

{{<atsprinto "status" >}}
Similar to /time but gives more information about your own status.

## Related general commands

{{<slash name="help" >}}
{{<alts>}}
{{<atsprinto "help" >}}
{{</alts>}}
Show the basics for sprinting.

{{<slash name="help" key0="topic" val0="sprint" >}}
Add a topic and Sprinto replies with a link to the right page here. Topics include `sprint`, `words`, `pingme`, `always`, `never`, `pets` and `invite`. `donate` gives the Patreon link, and `sprinto planet` gives the support server invite.

{{<atsprinto "longhelp" >}}
Show longer help in the channel. It's still much less complete than the help here.

{{<atsprinto "invite" >}}
Generate a link to invite Sprinto to your own Discord server

{{<slash name="feedback" key0="text" val0="_your feedback here_" >}}
{{<alts>}}
{{<atsprinto "feedback *your feedback here*">}}
{{</alts>}}
Give your suggestions and improvement ideas. A copy is posted anonymously on the Sprinto Planet support server. If the developer replies, the reply appears in the channel you sent the feedback from, so there's nothing you need to join or check.

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Sprint (basics)]({{<relref "basics" >}}) — common ways to use `/sprint`
- [Sprint (all options)]({{<relref "sprint" >}}) — complete sprint options guide
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
