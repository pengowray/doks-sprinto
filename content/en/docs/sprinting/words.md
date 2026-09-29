---
title : "During the sprint"
description: "Join a sprint, give your word count, fix a count after the scoreboard, and cancel a sprint."
lead: "How to join a sprint, give your word count, and cancel a sprint, and what Sprinto's sprint messages mean."
url: "docs/during-the-sprint"
---

Most sprints need only two commands:

1. Join with {{<slashembed name="join" >}}. If your document already has words in it, add that number, such as {{<slashembed name="join" key0="word-count" val0="10000" >}}. That number is your starting count.
2. When time's up, give the total word count of your document with {{<slashembed name="words" key0="count" val0="10150" >}}. Sprinto subtracts your starting count to work out your new words.

The rest of this page covers other ways to join and give your count, fixing a count after the scoreboard, and cancelling a sprint.

## Join a sprint

{{<slash name="join" >}}
{{<alts>}}
{{<slash name="join" key0="word-count" val0="0" >}}
{{<atsprinto "join" >}}
{{</alts>}}
Join the sprint with a starting count of 0 words. You have to join your own sprint too.

`/join` with no number always sets your starting count to 0, even if you're already in the sprint. If you're in the sprint with 10,000 starting words and use `/join` again, include the number: {{<slashembed name="join" key0="word-count" val0="10000" >}}. A comment in brackets isn't a number, so {{<atsprintoembed "join (back from tea)">}} also sets your starting count to 0.

{{<slash name="join" key0="word-count" val0="10000" >}}
{{<alts>}}
{{<atsprinto "join 10000" >}}
{{</alts>}}
Join with a starting count of 10,000 words: the number of words already in your document. When you give your total at the end, Sprinto subtracts your starting count to work out your new words.

Sprinto replies `You have joined with 10,000 starting words.`, or `You have rejoined with …` if you were already in the sprint. If you have a [companion pet]({{<relref "emojipet" >}}), the reply ends with your pet, such as ` — with 🐢 Nugget`.

As you type in the `/join` box, Sprinto suggests `0` and the count you finished on last time.

{{<slash name="same" >}}
{{<alts>}}
{{<slash name="join" key0="word-count" val0="same" >}}
{{<slash name="join" key0="word-count" val0="last" >}}
{{<slash name="join" key0="word-count" val0="=" >}}
{{<atsprinto "same" >}}
{{</alts>}}
Join with your last word count as your starting count.

Your last word count is the last count you gave Sprinto, in any channel: a word count you reported, or the starting count you joined with. After a `/join` with no number, your last word count is 0.

In any command that takes a word count, these words mean your last word count: `same`, `last`, `previous`, `again`, `continue`, `=`, and common misspellings of `same`.

{{<slash name="same" key0="adjustment" val0="+300 new" >}}
`/same` also takes an adjustment to your last word count, such as `+300 new`.

If you're already in the sprint, `/same` gives a word count: it sets your total to your last word count, the same as typing that number into {{<slashembed name="words">}}. If that total means more new words than the sprint has had time for, Sprinto asks which you meant (see [When Sprinto asks about a count](#when-sprinto-asks-about-a-count)). An adjustment is added to your current count in this sprint, so `/same +300` does the same as {{<slashembed name="words" key0="count" val0="+300" >}}.

`/same` is only about word counts. To repeat the last sprint, use `/sprint again` or `/sprint same`: see [Sprint (all options)]({{<relref "sprint" >}}). A `/same` at the end of a sprint command, such as `/sprint 20 /same`, starts the sprint and joins you with your last word count.

You can join after time's up. The reply says how long is left for word counts:

{{< reply >}}
You have joined after time is up with 100 starting words. 2m12s remaining for final word counts.
{{< /reply >}}

<!-- TODO later pass: task sprints (closed beta) -->

## Give your word count

{{< slash name="words" key0="count" val0="10150" >}}
Give the total word count of your document, such as 10,150 words. You can give a count during the sprint as well as when time's up. If you joined with 0 starting words, your total is the same as your new words, such as {{<slashembed name="words" key0="count" val0="150" >}}.

Sprinto replies with your total and your new words:

{{< reply >}}
{{< mention "alex" >}}, Word count updated: 10,150 words (150 new)
{{< /reply >}}

If your starting count is 0, the reply has one number: `Word count updated: 150 words`. When you use a slash command, Sprinto's reply starts with your name so the channel can see whose count it is, but the reply doesn't ping you. When you use an `@Sprinto` command, Sprinto answers with a Discord reply to your message.

{{<slash name="words" key0="count" val0="150 new" >}}
Give the number of new words you wrote in this sprint. This is useful if you changed documents or lost track of your starting count. {{< slashembed name="words" key0="count" val0="0 new" >}} sets your total back to your starting count.

{{<slash name="words" key0="count" val0="+50" >}}
{{<alts>}}
{{<slash name="words" key0="count" val0="add 50" >}}
{{</alts>}}
Add 50 new words to your count, for example words you wrote in a second document.

{{<slash name="words" key0="count" val0="\-" >}}
Keep your word count as it is and mark yourself done, so Sprinto stops waiting for a count from you. Without the dash, `/words` shows your current count and changes nothing.

{{<slash name="words" key0="count" val0="10150 final" >}}
{{<alts>}}
{{<slash name="final" key0="count" val0="10150" >}}
{{</alts>}}
Give your final word count before time's up. At the end, Sprinto doesn't wait for another count from you. See also [Final]({{<relref "misc-sprint" >}}#final).

{{<slash name="join" key0="word-count" val0="15000" >}}
To change your starting count, join again with the new number, then give your total with {{<slashembed name="words">}}. To change your starting count and keep your total, use [tare]({{<relref "misc-sprint" >}}#tare).

### If you forgot to join

{{<slash name="join" key0="word-count" val0="just 200 final" >}}
Join and give your new words in one command: this joins you with 200 new words and marks you done. This command works only after the sprint has started.

If you haven't joined, a count you give with {{<slashembed name="words">}} or {{<slashembed name="final">}} joins you, and that number becomes your starting count, with 0 new words. For example, {{<slashembed name="words" key0="count" val0="500" >}} joins you with 500 starting words. To get credit for words you wrote, say they're new: {{<slashembed name="join" key0="word-count" val0="just 200 final" >}}, {{<slashembed name="words" key0="count" val0="200 new" >}} or {{<slashembed name="words" key0="count" val0="+200" >}}.

{{<slashembed name="final" >}} with no number joins you with 0 starting words and marks you done.

### When Sprinto asks about a count

Sprinto asks before it accepts a word count that looks like a mistake:

- **Too many new words:** your total is higher than your current count by more than about 300 words for each minute of writing time so far. For example, 10 minutes into a sprint, Sprinto asks about a rise of more than 3,000 words. Sprinto never asks about a rise of 2,000 words or less.
- **Too many words deleted:** your total is more than 20% below your starting count, when your starting count is 100 words or more. For a starting count of 50 to 99 words, Sprinto asks when your total is more than 80% below your starting count. Sprinto never asks when your starting count is under 50 words.

Sprinto shows what the number would mean, with a button for each choice:

{{< reply >}}
In this sprint, 50,000 total would mean 49,000 new words. Did you mean:
{{< /reply >}}
{{< buttons >}}
{{< button "/rejoin 50000 → started at 50,000 (0 new)" >}}
{{< button "/words 50000 please → 50,000 words (49,000 new)" >}}
{{< /buttons >}}

If you had already given a word count in this sprint, a third button keeps the count you had.

If the number is right, add `please`: {{<slashembed name="words" key0="count" val0="50000 please" >}}.

<!-- main only: words 0 reply wording -->
`/words 0` is read as "no change" when your starting count is 50 words or more and you have no new words yet. Sprinto replies `Word count kept the same: 1,200 words`, with a `/words 0 please` button in case you really did delete everything.

### Other ways to write a count

| You write | Sprinto reads it as |
| --- | --- |
| `1,200` or `1 200` | 1,200 |
| `fifty new`, `twenty` | 50 new, 20. Spelled-out numbers work for zero to ten, fifteen, and the tens up to sixty, but not for combined numbers such as "twenty five". |
| `500ish`, `about 500` | 500. Sprinto reads the first number it finds. |
| `none`, `nothing`, `nada` | `0 new` |
| `no more` | `final` |
| `idk` | During the sprint: no change, and the reply is "I don't know either." After time's up: adds 5 words to your count, and the reply is "I don't know either. Let's just say 5 then." |

## Saying something with your count

Anything in brackets is a comment for the room, not part of the command. Sprinto removes it before reading the command, and repeats it in bold at the end of its reply:

{{< reply name="alex" app="0" >}}
{{< mention "Sprinto" >}} words 850 [brb tea]
{{< /reply >}}

{{< reply >}}
Word count updated: 850 words (150 new) **[brb tea]**
{{< /reply >}}

Round `(…)` and square `[…]` brackets both work, and you can put several comments in one line. If you leave out the closing bracket, the rest of the line is the comment. Comments work on {{<slashembed name="sprint">}} and {{<slashembed name="join">}} as well as the word count commands. On `/sprint`, the comment is shown on a line above the sprint announcement.

Brackets with only a number in them are read as your word count: once the sprint has started, {{<slashembed name="words" key0="count" val0="(350)" >}} gives a count of 350.

You can also paste Sprinto's reply back as your count. {{<atsprintoembed "words 1,250 words (250 new)">}} sets your total to 1,250 and your starting count to 1,000, so Sprinto's reply shows the same 250 new words. Before the sprint starts, the same line joins you with 1,250 starting words.

To give a large total without Sprinto asking about it, say how many of the words are new. {{<atsprintoembed "words 50,000 words (250 new)">}} is accepted as it is: 250 new words, and a starting count of 49,750. Sprinto then checks only the new words, so Sprinto still asks about `100,000 words (50,000 new)`.

A `#` on its own starts a note to yourself. Sprinto ignores everything after the `#` and doesn't repeat the note. A `#` joined to a number, such as `#20`, isn't a note.

## Typos

Sprinto corrects small typos in commands you type after `@Sprinto`. When Sprinto is confident what you meant, it runs the corrected command and shows it at the start of the reply:

{{< reply name="alex" app="0" >}}
{{< mention "Sprinto" >}} wrods 250
{{< /reply >}}

{{< reply >}}
↳ /words : Word count updated: 250 words
{{< /reply >}}

`↳ /words` is the command Sprinto ran. If Sprinto can't be sure which command you meant, Sprinto doesn't reply. Slash commands are picked from Discord's menu, so they have no typos to correct.

Sprinto doesn't correct words of 3 letters or fewer, or a typo in the first letter. These commands are never corrected, so type them exactly: `go`, `ping`, `roll`, `parse`, `tare`, `starting`, `donate`, `cancelplease`, `nudgeplease` and `last one`.

## I forgot to report

{{<slash name="late" key0="count" val0="10150" >}}
{{<alts>}}
{{<slash name="late" >}}
{{<atsprinto "late 10150" >}}
{{<atsprinto "latewc 10150" >}}
{{</alts>}}

For 10 minutes after time's up (the late window), you can add or fix your word count with {{<slashembed name="late">}}. Sprinto updates the posted scoreboard.

`/late` takes the same kinds of count as {{<slashembed name="words">}}, such as {{<slashembed name="late" key0="count" val0="+250" >}} or {{<slashembed name="late" key0="count" val0="300 new" >}}.

If you use `/words` or `/same` just after a sprint ends, and you were in the sprint but hadn't given a count, Sprinto replies with a button that gives your count with `/late`.

If another sprint starts in the same channel, the late window closes at whichever comes first: the late window's usual end, or 1 minute before the new sprint's writing time ends. In a [chain]({{<relref "chains" >}}), each round has its own late window: while the previous round's late window is open, {{<slashembed name="late">}} updates the previous round's scoreboard, and {{<slashembed name="words">}} gives your count for the round you're in.

To change the late window, add `late 20` (20 minutes) or `late none` (no late window) to the sprint command, or to the channel's default sprint. `late 0` does the same as `late none`. The late window can be up to 60 minutes. See [Sprint (all options)]({{<relref "sprint" >}}).

<!-- main only: late over 60 refused -->
A sprint command with a late window over 60 minutes is refused: `Sorry, 90 minutes is too long to keep word counts open after the sprint. The maximum is 60 minutes.`

## Cancel

{{<slash name="cancel" >}}
{{<alts>}}
{{<atsprinto "cancel">}}
{{</alts>}}

`/cancel` ends the sprint at once in these cases:

- before writing starts (during the join window, or during a break in a chain), even if other people have joined
- after writing starts, if nobody else is in the sprint

<!-- main only: cancel vote -->
Once writing has started and other people are in the sprint, `/cancel` starts a vote. See [Vote to cancel](#vote-to-cancel).

If Sprinto misread your {{< slashembed name="sprint" >}} command, cancel the sprint and start again.

{{< reply >}}
**The sprint has been called off.** 😢
📣 Participants: {{< mention "alex" >}}, {{< mention "sam" >}}
{{< /reply >}}

Sprinto tags everyone who was in the sprint and changes the countdown to `Time's up! ⏳ (Canceled)`. The sad face is picked at random.

On a [locked sprint]({{<relref "admin-sprint" >}}#sprint-lock), only a {{<role "@Sprint MC">}} can cancel.

<!-- main only: cancel vote -->
### Vote to cancel

<!-- main only: cancel vote -->
Once writing has started and other people are in the sprint, `/cancel` starts a 2-minute vote. Sprinto posts a vote message with ✅ and ❌ buttons, and your `/cancel` counts as the first ✅. The message names you but doesn't ping anyone.

<!-- main only: cancel vote -->
{{< reply >}}
{{< mention "alex" >}} wants to cancel the sprint. Voting closes in 2 minutes.
{{< /reply >}}
{{< buttons >}}
{{< button "✅ 1" >}}
{{< button "❌ 0" >}}
{{< /buttons >}}

<!-- main only: cancel vote -->
The sprint is cancelled if both of these are true when the vote closes:

<!-- main only: cancel vote -->
- There are at least twice as many ✅ votes as ❌ votes.
- At least a quarter of the people in the sprint voted ✅ (rounded up, and at least 1 person).

<!-- main only: cancel vote -->
People who don't vote aren't counted for either side. For example, in a sprint of 8 people, 2 ✅ and 1 ❌ passes, but 3 ✅ and 2 ❌ doesn't.

<!-- main only: cancel vote -->
- The vote closes after 2 minutes, or as soon as everyone in the sprint has voted.
- Only people in the sprint can vote. If you leave the sprint, your vote is removed.
- If you use `/cancel` again while the vote is open, it counts as ✅, or changes your ❌ to ✅. Only you see the reply.
- A {{<role "@Sprint MC">}} can decide the vote, even if they aren't in the sprint: ✅ cancels the sprint at once, and ❌ ends the vote and the sprint continues.
- After a vote fails, nobody can start another vote for 5 minutes. A Sprint MC can still use [/cancel-please](#force-cancel).
- If the sprint or chain round ends before the vote closes, the vote closes too.

<!-- main only: cancel vote -->
When the vote closes, the vote message changes to show the result:

<!-- main only: cancel vote -->
| Result | The vote message then reads |
| --- | --- |
| Passed | `@alex asked to cancel the sprint. The vote passed. ✅ 3 ❌ 1` |
| Didn't pass | `@alex asked to cancel the sprint. The vote didn't pass, so the sprint continues. ✅ 1 ❌ 2` |
| A Sprint MC pressed ✅ | `@alex asked to cancel the sprint. Sprint MC @kit cancelled the sprint.` |
| A Sprint MC pressed ❌ | `@alex asked to cancel the sprint. Sprint MC @kit ended the vote, so the sprint continues.` |
| The sprint ended first | `@alex asked to cancel the sprint. The sprint ended before the vote closed.` |

<!-- main only: cancel vote -->
In {{<atsprintoembed "who" >}}, a ❌ after a name means that person has voted ✅ to cancel in the open vote.

## Force cancel

{{<tag-mc>}}

{{<slash name="cancel-please" >}}
{{<atsprinto "cancelplease" >}}
{{<alts>}}
{{<atsprinto "cancel-please" >}}
{{<atsprinto "cancelpls" >}}
{{<atsprinto "forcecancel" >}}
{{</alts>}}

End the sprint at once, with no vote, however many people have joined.

Before writing starts, or when nobody else is in the sprint, anyone can use `/cancel-please`. Once writing has started with other people in the sprint, only a {{<role "@Sprint MC">}} can use it.

## What Sprinto posts

Sprinto posts three announcements during a sprint: one when the join window opens, one when writing starts, and one when time's up. Each announcement has a title, a line or two of detail, and a list of names. If the sprint has chimes, Sprinto also posts a chime message partway through, saying how much time is left.

The three emoji on each side of a title change from sprint to sprint. Some sprints get fruit, and others get stars, flowers, animals, boats and more. Their colours follow traffic lights: yellow on the join message, green at the start, and red at time's up. About 1 sprint in 50 uses a themed set instead, such as 🍎🍏🍋 or three hearts. The emoji have no other meaning. With the screen-reader emoji theme ({{<slashembed name="settings theme">}}), each message has one fixed emote instead, the same every sprint.

### The join window

This message is posted when the sprint is announced, at the start of the join window: the time to join before writing starts.

{{< reply >}}
🍋🍋🍋 **JOIN THE SPRINT** 🍋🍋🍋
The next sprint runs for 15 minutes and will begin in 60 seconds.
`/join` (with your starting word count), or `/same` (use your last word count).
📢 Pings: {{< mention "alex" >}} (not joined)
{{< /reply >}}

Notes:

- 📢 Pings lists everyone Sprinto pings: people who asked for pings, any ping role, and the person who started the sprint if they haven't joined yet, as in the example. Someone on their last ping is shown as `@sam (last ping)`, and people on their last ping are listed first. See [Ping me]({{<relref "pingme" >}}).
- If the join window is 2 minutes or longer, the message also shows the start time in each reader's own time zone, such as `in 5 minutes (at 10:05)`.

### The start

{{< reply >}}
🍏🍏🍏 **THE SPRINT BEGINS: FIFTEEN MINUTES** 🍏🍏🍏
Duration: 15 minutes (until ⏰ 10:45).
⏳ Time's up in 15 minutes
📣 Participants: {{< mention "alex" >}} (1,200), {{< mention "sam" >}} (0)
{{< /reply >}}

Notes:

- The sprint length is shown a few times so you don't miss it.
- If the sprint has chimes, the start message also says when they are, such as `🔔 at 60s remaining.` or, with two chimes, `🔔 at 5m and 60s remaining.`

📣 Participants:

- Lists everyone in the sprint.
- The number after each name is that person's starting count. When they give a word count during the sprint, the brackets also show their new words, such as `(1,200+300)`: 1,200 starting words and 300 new. The number disappears once they've given their final count or marked themselves done.
- The list is on the join message while people join, on the start message while everyone writes, and on the time's-up message at the end.

### Chimes

{{< reply >}}
🔔 **60 seconds remaining**
{{< /reply >}}

A chime is a message saying how much time is left in the sprint. A sprint has chimes only if someone asked for them: in the sprint command, in the channel's default sprint, or by using the `marathon` or `megathon` preset. Each of those two presets has one chime at the halfway point. A sprint can have up to 5 chimes, at least 60 seconds apart. To add chimes to a sprint, see [chimes]({{<relref "sprint" >}}#chimes).

A chime set as a percentage of the sprint adds a note, such as `🔔 **30 minutes remaining** (~50% in)`.

A chime pings only the people who asked for chime pings. The chime message lists those people after a second 🔔. To be pinged by the last 2 chimes of each sprint, type {{<atsprintoembed "chimes 2">}}. You can choose up to 5 chimes. {{<atsprintoembed "chimes off">}} or `chimes 0` stops chime pings, and 0 is the default. {{<atsprintoembed "chimes">}} on its own shows your setting. The same setting is **Max chimes** in {{<slashembed name="settings me">}}.

### Time's up

{{< reply >}}
🛑🛑🛑 **TIME'S UP** 🛑🛑🛑
Please give your final word count with `/words`. You have 3 minutes.
📣 Participants: {{< mention "alex" >}} (1,200), {{< mention "sam" >}} (0)
{{< /reply >}}

The time for word counts depends on the sprint length: 3 minutes for a 15-minute sprint, at least 2 minutes, and at most 10 minutes (for sprints of about 85 minutes or longer). A sprint can set its own time for word counts with [`endtime`]({{<relref "sprint" >}}).

Once someone gives their count, the number after their name disappears. Anyone still shown with a number is someone Sprinto is waiting for.

If nobody is in the sprint, the message says `Please /join and then /words to give your final word count.`

### Everyone's in

{{< reply >}}
All word counts are in! Results shortly.
{{< /reply >}}

Once everyone still in the sprint has given their count or marked themselves done, Sprinto stops waiting and posts the scoreboard about 12 seconds later. Leaving with {{<slashembed name="leave" >}} also counts as done, so if the last person Sprinto was waiting for leaves, Sprinto posts the scoreboard. A sprint started with `noff` always waits the full time for word counts. See [sprint flags]({{<relref "sprint" >}}#sprint-flags).

<!--
### Nobody in it.

{{< reply >}}
🏆 **CONGRATS EVERYONE!**
That's all, folks. /sprint to start another. (No one joined)
{{< /reply >}}

This is how a sprint ends when there's no one in it at the end, whether nobody joined or everybody left. There's no scoreboard. `That's all, folks.` is one of a handful of sign-offs, picked at random.
-->

### The scoreboard

{{< reply >}}
🏆 **CONGRATS EVERYONE**
{{< /reply >}}

For how to read the scoreboard, see [Sprint (basics)]({{<relref "basics" >}}).

Notes:

- With the screen-reader emoji theme, the title is `🏆 **Congrats everyone**`.
- Word counts are self-reported, on the honour system.
- It's all about the writing, writing with others to keep yourself accountable, and challenging yourself.
- An admin can turn on the `shuffle-leaderboard` setting, which lists the scoreboard in a random order with no rank numbers. See [Settings (admin)]({{<relref "settings" >}}).

<!-- main only: Discord status note -->
If Discord's status page shows an open incident, Sprinto adds a one-line note under the scoreboard, at most once a day in each server:

<!-- main only: Discord status note -->
{{< reply >}}
**Discord status:** "Elevated API errors". More at <https://status.discord.com>
{{< /reply >}}

## More sprint-related commands

{{<slash name="words" >}}
{{<alts>}}
{{<atsprinto "words">}}
{{<atsprinto "wc">}}
{{</alts>}}
On its own, `/words` shows your current word count: your total, and how many of those words are new. Only you see the reply. Before the sprint starts, it shows your starting count.

{{<slash name="time" >}}
{{<alts>}}
{{<atsprinto "time">}}
{{<atsprinto "timeleft">}}
{{<atsprinto "howlong">}}
{{</alts>}}
Show how much time is left in the sprint.

{{<slash name="leave" >}}
Leave the sprint. `/leave` works even if you never joined: if you started a sprint but aren't writing in it, use `/leave` so Sprinto doesn't wait for a count from you. Leaving also undoes {{<slashembed name="final" >}}, so if you join again, Sprinto waits for a count from you again.

{{<slash name="cancel" >}}
{{<alts>}}
{{<atsprinto "cancel">}}
{{</alts>}}
Cancel the sprint. See [Cancel](#cancel).

{{<slash name="go" >}}
{{<alts>}}
{{<atsprinto "go">}}
{{<atsprinto "begin">}}
{{</alts>}}
Skip the rest of the join window and start the sprint now. Only the person who started the sprint, or a {{<role "@Sprint MC">}}, can do this.

{{<atsprinto "who" >}}
List the people in the sprint. See [who]({{<relref "misc-sprint" >}}#who).

{{<atsprinto "status" >}}
Show your word count, the time left, and how many people have joined. See [status]({{<relref "misc-sprint" >}}#status).

## Related general commands

{{<slash name="help" >}}
{{<alts>}}
{{<atsprinto "help" >}}
{{</alts>}}
Show the basics for sprinting.

{{<slash name="help" key0="topic" val0="sprint" >}}
Add a topic, and Sprinto replies with a link to the page on this site about it. Topics include `sprint`, `words`, `final`, `status`, `pingme`, `always`, `never`, `pets` and `invite`. Some topics give something else:

- `chain` (also `chains`, `pomo`, `pomodoro` or `rounds`): a short explanation of chain sprints, posted in the channel.
- `donate`: the Patreon link.
- `sprinto planet` or `support`: the invite to the Sprinto Planet support server.

{{<atsprinto "longhelp" >}}
Show longer help in the channel. The longer help is still much less complete than the help on this site.

{{<atsprinto "invite" >}}
Get a link to the [Invite Sprinto]({{<relref "invite" >}}) page on this site, which has the invite link and setup steps.

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
- [Less used]({{<relref "misc-sprint" >}}) — less-used commands related to sprints
