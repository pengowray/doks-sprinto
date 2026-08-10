---
title : "Sprint (admin)"
description: Sprint Admin commands
url: "/docs/sprint-admin"
lead:
---

Special sprint-related commands, most of them available only to an {{<tag-admin>}} or {{<tag-mc>}}. A few only need you to say "please".

## Commands

### sprint lock

{{<tag-mc>}}

{{< slash name="sprint" key0="options" val0="lock" >}}

Begins a sprint which cannot be cancelled except by a Sprint MC.

Example:
{{< slash name="sprint" key0="options" val0="for 30 in 5 endtime 10 lock" >}}
{{< atsprinto "sprint for 30 in 5 endtime 10 lock" >}}
Begins a 30 minute locked sprint with 5 minutes to join and 10 minutes to give a word count. Note: "lock" can also appear elsewhere, such as at the start.

See [Sprint (all options)]({{<relref "sprint" >}}) for the other parameters you can add to a `/sprint`.

### sprint please

Adding "please" to a sprint command raises some of Sprinto's limits, and anyone can do it: a sprint of up to 2 hours instead of 1, and a start up to 90 minutes ahead instead of an hour. A {{<role "@Sprint MC">}} gets two more on top: a start up to 2 hours ahead, and up to an hour for word counts to come in (`endtime 1hr`) instead of 30 minutes.

Note: This isn't to force anyone to be polite. It's an added check so you don't accidentally run long sprints. You can also use `pls` and other synonyms.

Example:
{{<slash name="sprint" key0="options" val0="for 90 minutes please" >}}
{{<atsprinto "sprint for 90 pls" >}}
{{<alts>}}
{{<slash name="sprint" key0="options" val0="90 pls" >}}
{{<atsprinto "sprint for 1.5 hours s’il vous plaît" >}}
{{</alts>}}

### cancel please

{{<tag-mc>}}

{{< slash name="cancel-please" >}}
{{< atsprinto "cancel pls" >}}
{{<alts>}}
{{< slash name="sprint" key0="options" val0="cancel pls" >}}
{{< atsprinto "cancel ffs" >}}
{{< atsprinto "cancel pleeeeeeeease" >}}
{{</alts>}}

Forces a running sprint to end, regardless of how many sprinters have joined.

### nudge please

{{<tag-mc>}}

{{<slash name="nudge-please" >}}
{{<atsprinto "nudge pls" >}}
{{<alts>}}
{{<slash name="sprint" key0="options" val0="nudge pls" >}}
{{</alts>}}

Moves a running sprint on to the next stage immediately, typically only used for testing or debugging purposes.

If a bug occurs and the sprint becomes stuck, {{< atsprintoembed "nudge" >}} (without the "please") can also be used by anyone to nudge the sprint along. That's if Sprinto can successfully detect that the sprint is stuck. This hasn't been needed for a while.

### go

{{<slash name="go" >}}
{{<atsprinto "go" >}}

Starts the waiting sprint right now, skipping the rest of the join window. Available to whoever started the sprint, as well as to a Sprint MC.

## See also

* [Setup]({{<relref "setup" >}}) (setting up Sprinto)
* [Admin commands]({{<relref "admin" >}}) — about the {{<tag-admin>}} and {{<tag-mc>}} roles and commands

* [ActiveSprinter]({{<relref "activesprinter" >}}) (another role used by Sprinto)
* [Allowed channels (admin)]({{<relref "whitelist" >}}) — commands to prevent users running sprints where they're not supposed to
* [Carl-bot x Sprinto]({{<relref "carlbot" >}}) — using carl-bot to schedule sprints.
* [Ping me (admin section)]({{<relref "pingme#ping-roles" >}}) — set a role to always be pinged at sprint start
* [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
* [Voice]({{<relref "voice" >}}) — Experimental voice channel support
