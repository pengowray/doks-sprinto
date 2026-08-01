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

{{< atsprinto "dare me" >}}

Hands out one writing dare, and nothing else. The dares are pulled from the now-deleted nanowrimo.org [word_sprints](https://nanowrimo.org/word_sprints) page.

There's no slash command for this, so you have to @Sprinto or send him a DM. `dare`, `dare me` and `give me a dare` all work.

### invite

{{< atsprinto "invite" >}}

Create an invite link to take Sprinto to another server. Also gives a link to the support server.

### sprintmc

{{<atsprinto "sprintmc" >}}
Tells you how to set up the {{< role "@Sprint MC" >}} role: create a role with exactly that name and give it to whoever should have it. {{< role "@Sprint Admin" >}} works the same way for settings powers. That one sentence is the whole reply. For the rest, see [Admin commands]({{<relref "admin" >}}).

### create / refresh active role

{{<slash name="create-active-role" >}}
{{<slash name="refresh-active-role" >}}

`/create-active-role` sets up the {{< role "@Active Sprinters" >}} role on your server. `/refresh-active-role` moves people in and out of it, just in case some people are stuck in the wrong place. Both need the **Manage Roles** permission, or a {{< role "@Sprint Admin" >}} role. For more info about this command and role: [ActiveSprinter]({{< relref "ActiveSprinter" >}}).

### prefix

{{< atsprinto "prefix" >}}
Show Sprinto's prefix on your server, which is now always slash (`/`). Unfortunately, this can no longer be changed.

{{<alts "Why though?">}}
In the old days, Sprinto would respond to messages in chat which started with an underscore prefix (_). You can still add this prefix when you @Sprinto, but there's no need for it. For example: {{< atsprinto "_time" >}} Maybe some day, you'll be able to leave off the "@Sprinto" part again.
{{</alts>}}

### explain / timeline / preview / peek

{{<slash name="sprint" key0="options" val0="explain for 20 in 5">}}
{{<alts>}}
{{<atsprinto "sprint explain for 20 in 5" >}}
{{<atsprinto "sprint timeline for 20 in 5" >}}
{{<atsprinto "sprint preview for 20 in 5" >}}
{{</alts>}}

Put `explain`, `timeline`, or `preview` in front of any {{<slashembed name="sprint" >}} command to see how Sprinto would schedule it, a dry run, without actually starting anything. The keyword only works there, as the first thing after `sprint`.

{{<slash name="sprint" key0="options" val0="peek for 20 in 5">}}
{{<atsprinto "sprint peek for 20 in 5" >}}

`peek` does the same thing, except only you see the reply. Add `me` or `private` right after any of the other keywords for the same effect, for example {{<atsprinto "sprint explain me for 20 in 5" >}}.

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Starting a sprint (basics)]({{<relref "basics" >}})
- [Miscellaneous sprint commands]({{<relref "misc-sprint" >}})
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
- [Voice]({{<relref "voice" >}}) — Experimental voice channel support
- [FAQ]({{<relref "faq" >}})
