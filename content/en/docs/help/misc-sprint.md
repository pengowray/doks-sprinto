---
title : "Less used"
description:
lead: "Less used sprint commands (Miscellaneous commands)"
identifier: "misc-sprint"
url: "docs/misc-sprint"
---
Less used sprint commands (Miscellaneous commands) are documented here.

See also: [Starting a sprint]({{<relref "basics" >}}), and [full list of Sprint commands]({{<relref "sprint" >}}).

### Final

{{<slash name="final" >}}
{{<alts>}}
{{<atsprinto "final" >}}
{{<atsprinto "words final" >}}
{{<slash name="words" key0="count" val0="final">}}
{{</alts>}}

Finalize your word count so Sprinto won't wait for you to update it again when it's time to enter your final word count at the end of the sprint. Sprinto answers `Marked done.` when you finalize.

### Final _count_

{{<slash name="final" key0="count" val0="_count_">}}

Finalize your word count with _count_ words.

For example, to finalize with 1200 total words:

{{<slash name="final" key0="count" val0="1200">}}
{{<alts>}}
{{<atsprinto "1200 final" >}}
{{<atsprinto "final 1200" >}}
{{<atsprinto "words 1200 final" >}}
{{<slash name="words" key0="count" val0="1200 final">}}
{{<slash name="words" key0="count" val0="final 1200">}}
{{</alts>}}

Note: you can still update your word count after using {{<slashembed name="final" >}}. It's only to flag to Sprinto that your word count is in, so as not to wait for you when all other word counts are in.

### who

{{< atsprinto "who" >}}
Lists active sprinters in the channel.

An X (❌) next to a Sprinter's name indicates they've voted to {{<slashembed name="cancel" >}}.

### tare

{{<atsprinto "tare 1000" >}}

_During a sprint,_ change your starting word count without changing your total. You have to have joined already; this won't join you.

| Command | Your total | Your starting count |
| --- | --- | --- |
| {{<slashembed name="words" key0="count" val0="1200" >}} | set to 1,200 | unchanged |
| {{<slashembed name="join" key0="word-count" val0="1200" >}} | set to 1,200 | set to 1,200 |
| {{<atsprintoembed "tare 1200" >}} | unchanged | set to 1,200 |

A sign moves it instead of setting it, so {{<atsprintoembed "tare -50" >}} takes fifty off. To give both numbers at once, {{<atsprintoembed "tare 1000 + 250" >}} means you started at 1,000 and have written 250 since.

There's no slash command for this, so you have to @Sprinto.

### rejoin

{{<atsprinto "rejoin" >}}
Rejoin a sprint you left with {{<slashembed name="leave" >}}.

You can also just use {{<slashembed name="join" >}} again.

To restore your previous word count when rejoining:

{{<slash name="join" key0="word-count" val0="same" >}}

### status

{{<atsprinto "status" >}}

Check your word count, time remaining and number of active sprinters. If nothing is running here, Sprinto says so, and names the channel if a sprint is running elsewhere on the server.

### close / stop / end

{{<atsprinto "close" >}}
{{<atsprinto "stop" >}}
{{<atsprinto "end" >}}

These will tell you to use another command such as /cancel or /leave instead because Sprinto's not sure what you meant by _close_, _stop_ or _end_.

{{<alts "Instead try one of these:">}}
{{<slash name="cancel" >}}
End the sprint for everyone (if everyone agrees)

{{<tag-mc>}}
{{< slash name="cancel-please" >}}
End the sprint for everyone regardless, no vote needed. (Requires you have a {{<role "@Sprint MC">}} or {{<role "@Sprint Admin">}} role, or be an admin on the Discord server.)

{{<slash name="leave" >}}
Leave the sprint but leave it running for everyone/anyone else.

{{<slash name="forgetme" >}}
Don't ping me about the next few sprints.

{{<slash name="sneak-away" >}}
Leave the sprint and forgetme (don't ping me about the next few sprints), and also don't announce I've left (only you will see the reply)

{{<slash name="pingme" key0="count" val0="never">}}
Don't ever ping me about future sprints in this channel, even if I join one later.
{{</alts>}}

### undo / redo

{{<slash name="undo" >}}
{{<alts>}}
{{<atsprinto "undo" >}}
{{<atsprinto "wc_undo" >}}
{{</alts>}}

{{<slash name="redo" >}}
{{<alts>}}
{{<atsprinto "redo" >}}
{{<atsprinto "wc_redo" >}}
{{</alts>}}

Undo or redo your last `/words`, `/join` or other command that changed your word count or sprint status. <!-- Both step through your own reports one at a time, up to 100 of them, so you can undo your way out of a bad number without cancelling anything. -->

Once the scoreboard is posted there's nothing left to undo. Use {{<slashembed name="late" >}} to fix your number then.

<!-- | `/words reset`| Same as `/words 0 new` | -->
