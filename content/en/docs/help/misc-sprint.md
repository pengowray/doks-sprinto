---
title : "Less used"
description: 
lead: "Less used sprint commands (Miscellaneous commands)"
identifier: "misc-sprint"
url: "docs/misc-sprint"
---
See also: [Starting a sprint]({{< relref "basics" >}}), and [full list of Sprint commands]({{< relref "sprint" >}}).

### Final

{{<slash name="final" >}}
{{<alts>}}
{{<atsprinto "final" >}}
{{<atsprinto "words final" >}}
{{<slash name="words" key0="count" val0="final">}}
{{</alts>}}

Finalize your word count so Sprinto won't wait for you to update it later. Can be used during a sprint or when time's up and Sprinto is waiting for final word counts.

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

Note: you can still update your word count after using {{< slashembed name="final" >}}. It's only to flag to Sprinto that your word count is in, so as not to wait for you when all other word counts are in.

### who

{{< atsprinto "who" >}}
Lists active sprinters in the channel. 

An X (❌) next to a Sprinter's name indicates they've voted to {{< slashembed name="cancel" >}}.

### starting (tare)

_This command is no longer available._

{{<atsprinto "starting _count_" >}}
For example:
{{<atsprinto "starting 1000" >}}
{{<alts>}}
{{<atsprinto "tare 1000" >}}
{{</alts>}}

_During a sprint,_ change your starting word count without changing your current word count. I'm not sure why you'd want to do this. 

Instead of using this, you can {{< slashembed name="join" >}} again with a different starting word count, and then set your new word count with {{< slashembed name="words" >}}.

### rejoin

{{<atsprinto "rejoin" >}}
Rejoin a sprint you left with {{< slashembed name="leave" >}}. You can also just use {{< slashembed name="join" >}} again.

This command used to restore your previous word count. I might bring back that functionality one day if I'm really bored.

### status
{{<atsprinto "status" >}}

Check your word count, time remaining and number of active sprinters. Will give your `/pings-status` if no sprint is running 

### close / stop / end

{{<atsprinto "close" >}}
{{<atsprinto "stop" >}}
{{<atsprinto "end" >}}

These will tell you to use another command such as /cancel or /leave instead because Sprinto's not sure what you meant by _close_, _stop_ or _end_.

{{<alts "Instead try one of these:">}}
{{<slash name="cancel" >}}
End the sprint for everyone (if everyone agrees)

{{< slash name="admin-force-cancel" >}}
End the sprint for everyone regardless. (Requires you have a {{<role "@Sprint MC">}} or {{<role "@SprintAdmin">}} role, or be an admin on the Discord server.)

{{<slash name="leave" >}}
Leave the sprint but leave it running for everyone/anyone else.

{{<slash name="forgetme" >}}
Don't ping me about the next few sprints.

{{<slash name="sneak-away" >}}
Leave the sprint and forgetme (don't ping me about the next few sprints), and also don't announce I've left (only you will see the reply)

{{<slash name="pings-never" >}}
Don't ever ping me about future sprints in this channel, even if I join one later.

{{<atsprinto "voice_home_off" >}}
Stop Sprinto joining voice channels.
{{</alts>}}

### undo / redo

{{<atsprinto "wc_undo" >}}
{{<atsprinto "wc_redo" >}}

Undo or redo your last `/words`, `/join` or other command which changed your word count or sprint status. This was the start of a general undo feature, but was never finished.

<!-- | `/words reset`| Same as `/words 0 new` | -->