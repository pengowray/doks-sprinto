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

{{<atsprinto "parse _time_" >}}

Try parsing _time_ with Sprinto's time span parser. 

Example: 
{{< atsprinto "parse 3,000,000 seconds" >}}
Sprinto parses this as `34:17:20:00` or 34 days, 17 hours, 20 minutes

{{<alts "more examples">}}
{{< atsprinto "parse 1 day 3,000,000 seconds" >}}
Sprinto parses this as `35:17:20:00` or 35 days, 17 hours, 20 minutes
{{</alts>}}

See [pengowray/TimeSpanParser](https://github.com/pengowray/TimeSpanParser) on github for more about the open source TimeSpanParser library created by Pengo Wray for Sprinto.

### dare 

{{<atsprinto "dare" >}}

Get a writing dare (via the now deleted nanowrimo.org [word_sprints](https://nanowrimo.org/word_sprints) page)

### invite

{{< atsprinto "invite" >}}

Create an invite link to take Sprinto to another server. Also gives a link to the support server.

### sprintmc

{{<atsprinto "sprintmc" >}}
Tells you about the {{< role "@Sprint MC" >}} role, and provides help to set it up. Use the {{< slashembed name="feedback" >}} command to remind me to update the link it gives to point to these new docs.

### refresh active role
{{<slash name="admin-refresh-active-role" >}}
{{<atsprinto "refresh_active_role" >}}

Moves people in and out of the {{< role "@Active Sprinters" >}} role, just in case some people are stuck in the wrong place. Can be used by anyone. For more info about this command and role: [ActiveSprinter]({{< relref "ActiveSprinter" >}}).

### prefix
{{< atsprinto "prefix" >}}
Show Sprinto's prefix on your server, which is now always slash (`/`). Unfortunately, this can no longer be changed. 

{{<alts "Why though?">}}
In the old days, Sprinto would respond to messages in chat which started with an underscore prefix (_). You can still add this prefix when you @Sprinto, but there's no need for it. For example: {{< atsprinto "_time" >}} Maybe some day, you'll be able to leave off the "@Sprinto" part again.
{{</alts>}}

## See also
- [Overview of Help]({{<relref "overview" >}})
- [Starting a sprint (basics)]({{<relref "basics" >}})
- [Miscellaneous sprint commands]({{<relref "misc-sprint" >}}) 
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
- [Voice]({{<relref "voice" >}}) — Experimental voice channel support
- [FAQ]({{<relref "faq" >}})
