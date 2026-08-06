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

_This command didn't make it into the rewrite._

Sprinto used to let you try parsing a time span directly, just to see how it read it. See [pengowray/TimeSpanParser](https://github.com/pengowray/TimeSpanParser) on github for more about the open source TimeSpanParser library Pengo Wray wrote for the old version of Sprinto.

### dare

{{< atsprinto "dare me" >}}

Hands out one writing dare, and nothing else. The dares are pulled from the now-deleted nanowrimo.org [word_sprints](https://nanowrimo.org/word_sprints) page.

There's no slash command for this, so you have to @Sprinto or send him a DM. `dare`, `dare me` and `give me a dare` all work.

### roll

{{< atsprinto "roll 2d6 + d20 + 10" >}}

{{< reply >}}
🎲 You rolled **29**. (2d6: 4, 4 · 1d20: 11 · +10)
{{< /reply >}}

Throws the dice and gives you the total and what each die showed. A bare `roll` throws one six-sided die.

There's no slash command for this, so you have to @Sprinto or send him a DM. Type it exactly: Sprinto's typo correction skips this one.

Sprint lengths take the same expressions, so {{<slashembed name="sprint" key0="options" val0="3d6" >}} rolls a length.

### i love you / i hate you

{{< atsprinto "i love you" >}}
{{< atsprinto "i hate you" >}}

Sprinto has something to say to both, and a DM works too. He has to be addressed for it, so two writers saying it to each other in the channel are left alone.

About one declaration of love in 55 is turned down instead. The `family-friendly` setting, on by default, keeps the crasser replies out. See [Settings]({{<relref "settings" >}}).

### invite

{{< atsprinto "invite" >}}

Create an invite link to take Sprinto to another server. Also gives a link to the support server.

### support / vote / donate / merch

{{< atsprinto "support" >}}
{{< atsprinto "vote" >}}
{{< atsprinto "donate" >}}
{{< atsprinto "merch" >}}

One link each: the Sprinto Planet support server, Sprinto's page on top.gg where you can vote for him, the Patreon, and the merch store. None of them are slash commands.

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

`peek`, `me` and `private` all say the same thing: on the slash command the answer goes to you alone. `public` shows it to the room, and an @Sprinto version lands there whatever you say.

{{<slash name="explain" key0="sprint-options" val0="30 in 5 bell -1" >}}

There's a command of its own too. Choose which sprint (the one running, a new one here, or one that ignores the channel and server defaults) and how much to show. Only you see the reply, unless you set `post`.

{{<buttons>}}
{{<select "Show more or less">}}
{{</buttons>}}

{{<buttons>}}
{{<button "Post to channel">}}
{{</buttons>}}

Two controls sit under the answer. **Show more or less** switches between *Just the settings*, *Each setting and where it's from*, *Minute-by-minute timeline* and *Everything*. **Post to channel** puts a copy where the room can read it, then greys out.

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Starting a sprint (basics)]({{<relref "basics" >}})
- [Miscellaneous sprint commands]({{<relref "misc-sprint" >}})
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
- [Voice]({{<relref "voice" >}}) — Experimental voice channel support
- [FAQ]({{<relref "faq" >}})
