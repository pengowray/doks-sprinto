---
title : "Less used"
description: "Sprint commands you need less often: final, who, tare, rejoin, status, and undo and redo."
lead: "Sprint commands you need less often: mark your count as final, change your starting count, see who's sprinting, and undo a change to your count."
identifier: "misc-sprint"
url: "docs/misc-sprint"
---
See also: [Starting a sprint]({{<relref "basics" >}}), [During the sprint]({{<relref "words" >}}), and [full list of Sprint commands]({{<relref "sprint" >}}).

### Final

{{<slash name="final" >}}
{{<alts>}}
{{<atsprinto "final" >}}
{{<atsprinto "words final" >}}
{{<slash name="words" key0="count" val0="final">}}
{{</alts>}}

Mark yourself done without changing your word count. When time's up, Sprinto doesn't wait for another count from you. Sprinto answers `Marked done. Your count stands at 1,200 words (200 new).`

`finalize`, `finalise` and `finally` also work.

If you haven't joined, `/final` joins you with a starting count of 0 words and marks you done: `You have joined with 0 starting words and marked done.`

### Final _count_

{{<slash name="final" key0="count" val0="_count_">}}

Give your total word count and mark yourself done in one command.

For example, to give a total of 1,200 words and mark yourself done:

{{<slash name="final" key0="count" val0="1200">}}
{{<alts>}}
{{<atsprinto "1200 final" >}}
{{<atsprinto "final 1200" >}}
{{<atsprinto "words 1200 final" >}}
{{<slash name="words" key0="count" val0="1200 final">}}
{{<slash name="words" key0="count" val0="final 1200">}}
{{</alts>}}

Sprinto answers `Word count updated: 1,200 words (200 new). Marked done.`

{{<atsprintoembed "1200 final" >}} works because `@Sprinto` followed by a number is a word count, the same as {{<slashembed name="words" key0="count" val0="1200" >}}.

If you haven't joined, `/final 1200` joins you with a starting count of 1,200 words and 0 new words, and marks you done. To get credit for words you wrote, see [If you forgot to join]({{<relref "words" >}}#if-you-forgot-to-join).

You can still change your word count after {{<slashembed name="final" >}}. `/final` only tells Sprinto not to wait for you once everyone else's counts are in.

### who

{{< atsprinto "who" >}}
List the people in the sprint in this channel. The reply uses display names, so nobody is pinged:

{{< reply >}}
Currently sprinting: Alice, Bob ❌
{{< /reply >}}

A ❌ after a name means that person has voted ✅ to cancel the sprint in the vote that's open now. See [Vote to cancel]({{<relref "words" >}}#vote-to-cancel).

If nobody has joined, Sprinto replies `No one has joined the sprint.`

`who` has no slash command. Other names: `active`, `sprinters`, `who's sprinting`, `nowsprinting`.

### tare

{{<atsprinto "tare 1000" >}}

While the sprint is running, change your starting word count and keep your total. You have to have joined already: `tare` doesn't join you.

| Command | Your total | Your starting count |
| --- | --- | --- |
| {{<slashembed name="words" key0="count" val0="1200" >}} | set to 1,200 | unchanged |
| {{<slashembed name="join" key0="word-count" val0="1200" >}} | set to 1,200 | set to 1,200 |
| {{<atsprintoembed "tare 1200" >}} | unchanged | set to 1,200 |

Sprinto answers with both numbers, such as `Starting word count set to 1,000. Your word count is now 1,250 words (250 new).`

A number with a sign changes your starting count by that amount: {{<atsprintoembed "tare -50" >}} lowers it by 50 words. To give both numbers at once, {{<atsprintoembed "tare 1000 + 250" >}} means you started at 1,000 words and have written 250 since, and `tare 1000 - 250` means you started at 1,000 words and have deleted 250 since. `tare = 1000` and numbers with separators, such as `1,000` or `1 000`, also work.

Before the sprint starts, `tare` changes your total too, because nothing has been written yet: `tare 2000` sets both numbers to 2,000.

`tare` takes only numbers. It refuses the extra words that {{<slashembed name="words">}} accepts, such as `new`, `just`, `final`, `same`, `idk`, `about`, `500ish` and `please`, and replies with the forms it does take.

`tare` has no slash command, so type {{<atsprintoembed "tare" >}}. Type `tare` exactly: Sprinto doesn't correct typos in it.

### starting

{{<atsprinto "starting" >}}

`@Sprinto starting` (also `base`, `initial` or `setjoincount`) changes nothing. Sprinto replies with the three commands you might have meant: `/join 1000` to join with a starting count, `@Sprinto tare 1000` to change your starting count and keep your total, and `/sprint` to start a sprint.

The exception is `@Sprinto starting wc 1200` (or `starting word 1200`), which joins you with a starting count of 1,200 words.

### rejoin

{{<atsprinto "rejoin" >}}
Join the sprint again after leaving it with {{<slashembed name="leave" >}}. Like {{<slashembed name="join" >}} with no number, `rejoin` puts you back in with a starting count of 0 words. Other names: `rejoinwc`, `rejoinsprint`.

To get back the word count you had before you left:

- Use {{<slashembed name="undo" >}} straight after `/leave`. This undoes the leave.
- Or join again with your original starting count, such as {{<slashembed name="join" key0="word-count" val0="1000" >}}, and then give your total with {{<slashembed name="words" >}}.

{{<slashembed name="join" key0="word-count" val0="same" >}} uses your last total as your new starting count, so the words you had already written in this sprint no longer count as new.

### status

{{<atsprinto "status" >}}

Show your word count, the time left, and how many people have joined:

{{< reply >}}
Your word count: 1,200 words (200 new). 5 minutes remaining, and 3 minutes for wc. 2 sprinters joined.
{{< /reply >}}

The reply also shows:

- `marked done (won't wait at end)` after your count, if you've used {{<slashembed name="final" >}}
- `Quiet.` if the sprint doesn't ping anyone
- `Cannot be cancelled.` if the sprint is [locked]({{<relref "admin-sprint" >}}#sprint-lock)

If no sprint is running in this channel, Sprinto says so, and names the channel if a sprint is running somewhere else on the server.

Other names: `report`, `sprint info`, `sprint status`.

### close / stop / end

{{<atsprinto "close" >}}
{{<atsprinto "stop" >}}
{{<atsprinto "end" >}}

These words don't end the sprint. Sprinto replies with the commands to use instead:

{{< reply >}}
Sorry, please use `/cancel` to call off a sprint. `/leave` to unjoin the sprint.
{{< /reply >}}

`delete`, `exit`, `quit` and `terminate` get the same reply. `end chain` and `stop after this` are different: they end a chain after the round that's running. See [Chains]({{<relref "chains" >}}).

{{<alts "Commands to use instead">}}
{{<slash name="cancel" >}}
End the sprint for everyone.
Once writing has started and other people are in the sprint, {{<slashembed name="cancel" >}} starts a vote.

{{<tag-mc>}}
{{< slash name="cancel-please" >}}
End the sprint for everyone at once, with no vote. Once writing has started and other people are in the sprint, you need a {{<role "@Sprint MC">}} or {{<role "@Sprint Admin">}} role, or the Administrator or Manage Server permission on the Discord server.

{{<slash name="leave" >}}
Leave the sprint. The sprint carries on for everyone else.

{{<slash name="forgetme" >}}
Stop pings in this channel until you next join a sprint here.

{{<slash name="sneak-away" >}}
Leave the sprint and stop pings until you next join a sprint, like {{<slashembed name="leave" >}} and {{<slashembed name="forgetme" >}} together. Only you see the reply, so the channel doesn't see that you left.

{{<slash name="pingme" key0="count" val0="never">}}
Never be pinged at the start of sprints in this channel, even after you join one.
{{</alts>}}

### undo / redo

{{<slash name="undo" >}}
{{<alts>}}
{{<atsprinto "undo" >}}
{{<atsprinto "wc_undo" >}}
{{<atsprinto "wcundo" >}}
{{</alts>}}

{{<slash name="redo" >}}
{{<alts>}}
{{<atsprinto "redo" >}}
{{<atsprinto "wc_redo" >}}
{{<atsprinto "wcredo" >}}
{{</alts>}}

Undo or redo your last change in this sprint: a word count, a join, or a leave. Sprinto answers `OK.`, or `Could not undo.` or `Could not redo.` when there's nothing to undo or redo.

You can undo up to 100 of your own changes in the sprint, one at a time. Making a new change clears anything you could have redone. {{<slashembed name="undo" >}} straight after {{<slashembed name="leave" >}} puts you back in the sprint.

Undoing a word count doesn't withdraw a vote to cancel.

After the scoreboard is posted, `/undo` can't change that sprint. To fix your count then, use {{<slashembed name="late" >}}. If a new sprint or the next round of a chain is running, `/undo` acts on that one.

<!-- | `/words reset`| Same as `/words 0 new` | -->
