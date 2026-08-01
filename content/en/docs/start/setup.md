---
title : "Setting up Sprinto"
description: 
lead: 
---
## The short version

Invite Sprinto, then run {{<slashembed name="sprint">}}. That's genuinely it.

Sprinto sets nothing up when he joins. He doesn't create a channel, he doesn't create a role, he doesn't write any settings. He just works, straight away, in every channel he can see. If you never touch a single option on this page your sprints will still run.

Everything below is optional. The first section is the part most servers are glad they did.

## Worth doing first (about five minutes)

### Make a dedicated sprint channel (or two)

Sprinto usage can quickly overwhelm any chat room, so almost all servers create a dedicated sprint channel with a name like `#writing-sprints`, `#sprints-and-excerpts` or something thematically appropriate for their server like `#sprinting_dojo`.

Sprinto often fails to see any usage when he has to share a general `#bots` channel. Some servers even have two sprint channels, one for short spontaneous sprints (perhaps 15 or 30 minutes) and one for longer, pre-planned sprints (up to an hour).

Sprints started in different channels run independently. You cannot run more than one simultaneous sprint in a channel.

### Rename the @Sprinto role

Rename the {{<role "@Sprinto">}} role to {{<role "@Role for Sprinto">}} to make it easier to use Sprinto.

Why is this necessary? Sprinto accepts commands in two ways, either as slash commands such as {{<slashembed name="time">}} or as commands which start by mentioning Sprinto, for example: {{<atsprintoembed "time">}}. Bots on Discord, including Sprinto, automatically create a "role" with their own name ({{<role "@Sprinto">}}) which can be mentioned in an almost identical way to mentioning Sprinto the bot ({{<atsprintoembed>}}). If someone mentions Sprinto the role instead of Sprinto the bot, then their command is confusingly ignored. Renaming the role prevents this.

### Check Sprinto can actually post

Run {{<slashembed name="settings channel">}} in your sprint channel. The bottom of the panel marks View Channel and Send Messages with a ✅ or an ❌. Anyone can look.

Running {{<slashembed name="sprint">}} tells you too: if Sprinto can't post there, he'll quietly say so in a message only you can see, rather than starting a sprint nobody can follow. Either way, the fix is in the channel's permissions.

## Roles you create yourself

Two roles give people extra powers over sprints:

* {{<role "@Sprint MC">}} can force sprints along: cancelling, nudging, running locked sprints.
* {{<role "@Sprint Admin">}} can change Sprinto's settings.

Sprinto never creates these roles. You make them yourself, like any other Discord role, and he matches them **by name**. Capitalisation doesn't matter, the space is optional, and plurals work, so {{<role "@Sprint MC">}}, {{<role "@sprintmcs">}} and {{<role "@Sprinto MC">}} are all the same thing to him.

The server owner and anyone with Administrator already have both, so on a small server you may not need either role at all.

Full detail is on the [Admin commands]({{< relref "admin" >}}) page.

## Optional configuration

All of these are optional and all of them can be changed later.

### Restrict where sprints can run

{{<tag-admin>}}

{{< slash name="settings sprint-channels" >}}

Opens Discord's own channel picker. Choose the channels where sprints are allowed.

An empty list means sprints work anywhere, and that's the default. DMs always work regardless. More at [Allowed channels]({{< relref "whitelist" >}}).

### Ping a role when a sprint starts

{{<tag-admin>}}

{{< slash name="settings roles" >}}

Opens Discord's role picker. If people on your server can self-assign a role like {{<role "@Sprinters">}}, pick it here and Sprinto will mention it whenever a sprint starts in this channel. More at [Ping roles]({{< relref "ping-roles" >}}).

### Set this channel's default sprint

{{<tag-admin>}}

{{< slash name="settings sprint-defaults" >}}

Sets the default length, start time and bell for sprints in this channel, so a bare {{<slashembed name="sprint">}} does what your server actually wants. Out of the box that's 15 minutes, starting in 1 minute, with one bell a minute before the end. A long-form channel might prefer 30 minutes starting in 5.

It opens on the server default, and on a new server it looks like this:

{{<reply ephemeral="1">}}

## Sprint defaults: Server default

These apply when someone runs `/sprint` with no options in this server, unless a channel overrides them. Green shows what's in effect; a check marks a server default (click it again to clear).
Length 15 min, start 1 min, bells -1, late 10 min.
No default sprint options set. Using Sprinto's original default (for 15 mins in 1 min).
{{</reply>}}

{{<buttons>}}
{{<button "Server default" "primary">}}
{{<button "This channel">}}
{{<button "Edit text">}}
{{<button "Reset to built-in">}}
{{</buttons>}}

{{<buttons>}}
{{<button "15" "success">}}
{{<button "20">}}
{{<button "30">}}
{{<button "40">}}
{{</buttons>}}

{{<buttons>}}
{{<button "in 1 min" "success">}}
{{<button "in 1-2 min">}}
{{<button "in 2-3 min">}}
{{</buttons>}}

{{<buttons>}}
{{<button "🔔 1 minute" "success">}}
{{<button "🔔 50% and 🔔 1 minute">}}
{{<button "🔕 No chime">}}
{{</buttons>}}

Click **This channel** first if you only want to change this one channel. Green marks the length, start and bell in effect right now; clicking one pins it at the scope you're on and a check appears next to it, and clicking a checked one clears it again. On a new server **Reset to built-in** is greyed out, because there is nothing set to clear.

The bell buttons mean one bell a minute before the end, which is what you get out of the box; a bell at halfway as well; or no bell at all. **Edit text** takes most of what you could type after {{<slashembed name="sprint">}}, so a 5 minute start delay or a bell the buttons don't offer goes in there. Fixed clock times like `at :30` are refused, because a default has to work at any hour.

### Everything else

{{<tag-admin>}}

{{< slash name="settings channel" >}}
{{< slash name="settings server" >}}

`channel` covers this one channel; `server` sets the default for every channel that hasn't been given its own answer. Anyone can look; you need to be an admin to change anything.

Both open an add/remove panel that **only lists what differs from the defaults**. On a freshly invited Sprinto that panel is nearly empty. That's the point, not a fault: you're looking at your changes, not at a wall of options you never touched. Add a setting and it appears; remove it and it goes back to the default and disappears again.

See [Settings]({{< relref "settings" >}}) for the full list of keys.

### The Active Sprinters role

{{<tag-admin>}}

{{< slash name="create-active-role" >}}

Creates an {{<role "@Active Sprinters">}} role. Anyone in a running sprint is added to it for the duration, so sprinters (and the fact that a sprint is happening at all) show up in the members list. Sprinto needs Manage Roles for this one. See [Active Sprinter role]({{< relref "activesprinter" >}}).

## Settings worth knowing about

Three defaults that servers most often want to change:

* **family-friendly** is **on**, which keeps the sweary quotes and replies out. Turn it off if your server would rather have them.
* **tidy-sprints** is **off**. Turn it on and Sprinto deletes his own join and word-count confirmations, so the channel keeps just the sprint itself.
* **shuffle-leaderboard** is **off**, so the scoreboard is ranked by word count. Turn it on and the ranks come off entirely: everyone is listed in a random order, with counts still shown. Good for a server that would rather nobody came first.

Set any of them with {{<slashembed name="settings channel">}} or {{<slashembed name="settings server">}}, or in text: {{<atsprintoembed "settings tidy-sprints on">}}. All of them are covered on the [Settings]({{< relref "settings" >}}) page.

## Cosmetic and nice to have

* **Rename Sprinto.** Give him a thematically suitable nickname on your server, such as Sir Sprinto Esquire. (Right-click on Sprinto and "Change Nickname".) He may occasionally still refer to himself as "Sprinto".
* **Move him up the members list.** Server Settings > Roles > drag the _Sprinto_ role up as high as you're comfortable, so people can find him.
* **Keep other bots out of the sprint channel.** If other bots have similar commands which may confuse or trip up sprinters, remove their permissions in your sprinting channels. You can do the reverse too, and remove permission to use Sprinto's commands elsewhere.
* **Plug your writing server** on #plug-your-writing-server on Sprinto's [support server](https://discord.gg/TZJ8YVU).

## See also

* [Sprint basics]({{< relref "basics" >}}) for how sprints actually run
* [Admin commands]({{< relref "admin" >}})
* [Settings]({{< relref "settings" >}})
