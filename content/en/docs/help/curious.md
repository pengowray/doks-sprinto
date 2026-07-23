---
title : "Curious commands"
description: 
lead: 
# identifier: "less-used"
# url: "docs/less-used"
keywords: ["parse", "dare", "invite", "sprintmc", "refresh active role", "prefix"]
---

These commands are documented here mostly for curiousity's sake. You don't need any of them, and they're largely not useful, but they're documented here all the same.

### parse

_This command didn't make it into the rewrite._

Sprinto used to let you try parsing a time span directly, just to see how it read it. See [pengowray/TimeSpanParser](https://github.com/pengowray/TimeSpanParser) on github for more about the open source TimeSpanParser library Pengo Wray wrote for the old version of Sprinto.

### dare

_This command didn't make it into the rewrite._

It used to hand out a writing dare, pulled from the now-deleted nanowrimo.org [word_sprints](https://nanowrimo.org/word_sprints) page.

### invite

{{< atsprinto "invite" >}}

Create an invite link to take Sprinto to another server. Also gives a link to the support server.

### sprintmc

{{<atsprinto "sprintmc" >}}
Tells you about the {{< role "@Sprint MC" >}} role, and provides help to set it up. Use the {{< slashembed name="feedback" >}} command to remind me to update the link it gives to point to these new docs.

### create / refresh active role

{{<slash name="create-active-role" >}}
{{<slash name="refresh-active-role" >}}

`/create-active-role` sets up the {{< role "@Active Sprinters" >}} role on your server. `/refresh-active-role` moves people in and out of it, just in case some people are stuck in the wrong place. Either can be used by anyone. For more info about this command and role: [ActiveSprinter]({{< relref "ActiveSprinter" >}}).

### prefix

{{< atsprinto "prefix" >}}
Show Sprinto's prefix on your server, which is now always slash (`/`). Unfortunately, this can no longer be changed.

{{<alts "Why though?">}}
In the old days, Sprinto would respond to messages in chat which started with an underscore prefix (_). You can still add this prefix when you @Sprinto, but there's no need for it. For example: {{< atsprinto "_time" >}} Maybe some day, you'll be able to leave off the "@Sprinto" part again.
{{</alts>}}

### explain / timeline / preview / peek

{{<slash name="sprint" key0="options" val0="explain for 20 in 5">}}
{{<alts>}}
{{<atsprinto "explain for 20 in 5" >}}
{{<atsprinto "timeline for 20 in 5" >}}
{{<atsprinto "preview for 20 in 5" >}}
{{</alts>}}

Put `explain`, `timeline`, or `preview` in front of any {{<slashembed name="sprint" >}} command to see how Sprinto would schedule it, a dry run, without actually starting anything.

{{<slash name="sprint" key0="options" val0="peek for 20 in 5">}}
{{<atsprinto "peek for 20 in 5" >}}

`peek` does the same thing, except only you see the reply. Add `me` or `private` right after any of the other keywords for the same effect, for example {{<atsprinto "explain me for 20 in 5" >}}.

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Starting a sprint (basics)]({{<relref "basics" >}})
- [Miscellaneous sprint commands]({{<relref "misc-sprint" >}})
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
- [Voice]({{<relref "voice" >}}) — Experimental voice channel support
- [FAQ]({{<relref "faq" >}})
