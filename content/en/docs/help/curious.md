---
title : "Curious commands"
description:
lead:
# identifier: "less-used"
# url: "docs/less-used"
keywords: ["parse", "dare", "roll", "dice", "invite", "donate", "merch", "sprintmc", "refresh active role", "prefix", "explain"]
---

These commands are documented here mostly for curiousity's sake. You don't need any of them, and they're largely not useful, but they're documented here all the same.

### parse

Sprinto lets you try parsing a time span directly, just to see how it reads it.

See [pengowray/TimeSpanParser](https://github.com/pengowray/TimeSpanParser) on github for more about the open source TimeSpanParser library written for the old version of Sprinto. The new version of Sprinto will eventually be on par.

### dare

{{< atsprinto "dare me" >}}

Hands out one writing dare. The dares are pulled from the longer deleted nanowrimo.org [word_sprints](https://nanowrimo.org/word_sprints) page, which appeared circa 2016.

There's no slash command for this, so you have to @Sprinto.

`dare`, `dare me` and `give me a dare` all work.

### roll

{{< atsprinto "roll 2d6 + d20 + 10" >}}

{{< reply >}}
🎲 You rolled **29**. (2d6: 4, 4 · 1d20: 11 · +10)
{{< /reply >}}

Throws the dice and gives you the total and what each die showed. A bare `roll` throws one six-sided die.

There's no slash command for this, so you have to @Sprinto or send him a DM. Type it exactly: Sprinto's typo correction skips this one.

Sprint lengths take the same expressions, so {{<slashembed name="sprint" key0="options" val0="3d6" >}} rolls a length.

### invite

{{< atsprinto "invite" >}}

Create an invite link to take Sprinto to another server. Also gives a link to the support server.

### support / vote / donate / merch

{{< atsprinto "donate" >}}
{{< atsprinto "support" >}}
{{< atsprinto "vote" >}}

One link each: the Patreon, the Sprinto Planet support server, Sprinto's page on top.gg where you can vote for bot. None of them are slash commands.

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

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Starting a sprint (basics)]({{<relref "basics" >}})
- [Miscellaneous sprint commands]({{<relref "misc-sprint" >}})
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
- [Voice]({{<relref "voice" >}}) — Experimental voice channel support
- [FAQ]({{<relref "faq" >}})
