---
title : "Setting up Sprinto"
description:
lead:
---
## The short version

Invite Sprinto, then run {{<slashembed name="sprint">}}. That's it. A sprint is running, waiting for you and others to join.

Sprinto sets nothing up when he joins. He doesn't create a channel, he doesn't create a role, he doesn't write any settings. He just works, straight away, in every channel he can see. If you never touch a single option on this page your sprints will still run.

Everything below is optional. I've tried to put more useful stuff first.

## Worth doing first

### Make a dedicated sprint channel (or two)

Sprinto usage can quickly overwhelm any chat room, so almost all servers create a dedicated sprint channel with a name like `#writing-sprints`, `#sprints-and-excerpts` or something thematically appropriate for their server like `#sprinting_dojo`.

Sprinto generally fails to see any usage when he has to share a general `#bots` channel with general bot spam. Some servers add multiple sprint channels, for example one for short spontaneous sprints (`#sprints-10-to-20-min`) and one for longer sprints (`#sprints-21-to-45-minutes`). Some servers add and remove sprinting channels as demand goes.

Sprints started in different channels run independently. You cannot run more than one simultaneous sprint in a channel.

### Rename the @Sprinto role

Rename the {{<role "@Sprinto">}} role to {{<role "@Bot role: Sprinto">}} to make it easier to use Sprinto. You can also make it unmentionable by regular users.

Why is this necessary? Sprinto accepts commands in two ways, either as slash commands such as {{<slashembed name="time">}} or as commands which start by mentioning Sprinto, for example: {{<atsprintoembed "time">}}. Bots on Discord, including Sprinto, automatically create a "role" with their own name ({{<role "@Sprinto">}}) which can be mentioned in an almost identical way to mentioning Sprinto the bot ({{<atsprintoembed>}}). If someone accidentally mentions Sprinto the role instead of Sprinto the bot, their command is confusingly ignored. Renaming the role prevents this.

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

On a large server with many users, you might want to restrict where sprints can be run.

An empty list means sprints work anywhere, which is the default. More at [Allowed channels]({{< relref "whitelist" >}}).

### Ping people who are interested in sprints when sprints are happening

Set up a self-assigned role like {{<role "@Sprinters">}}, so you can ping people who are interested in sprinting and let them know sprints are starting.

Sprinto autopings people who were in a recent sprint, but it's a very simple system. It's bnest to have another way to ping people who have said they're interested in sprinting.

### Set each channel's default sprint

{{<tag-admin>}}

{{< slash name="settings sprint-defaults" >}}

Sets the default length, start time and bell for sprints in this channel, so a bare {{<slashembed name="sprint">}} does what your server actually wants.

Out of the box that's 15 minutes, starting in 1 minute, with no bell. A long-form channel might prefer `for 30 minutes in 1-2 minutes`.

Opening `/settings sprint-defaults` starts on the server default, and on a new server it looks something like this:

{{<reply ephemeral="1">}}

## Sprint defaults: Server default

Nothing is set for this server, so a plain `/sprint` uses the bot's defaults:

* Start: **in 1 min**
* Length: **15 min**
* Late edits: allowed for **10 min** after time's up

No channel or server default is set. The buttons below set one for this channel.
{{</reply>}}

{{<buttons>}}
{{<button "Server default" "primary">}}
{{<button "This channel">}}
{{<button "Edit text">}}
{{<button "Reset to built-in">}}
{{</buttons>}}

{{<buttons>}}
{{<button "in 1 min" "success">}}
{{<button "in 1-2 min">}}
{{<button "in 2-3 min">}}
{{</buttons>}}

{{<buttons>}}
{{<button "15" "success">}}
{{<button "20">}}
{{<button "30">}}
{{<button "40">}}
{{</buttons>}}

{{<buttons>}}
{{<button "🔔 1 minute">}}
{{<button "🔔 50% and 🔔 1 minute">}}
{{<button "🔕 No chime" "success">}}
{{</buttons>}}

Click **This channel** first if you only want to change this one channel. Green marks the start, length and bell in effect right now; clicking one pins it at the scope you're on and a check appears next to it, and clicking a checked one clears it again. On a new server **Reset to built-in** is greyed out, because there is nothing set to clear.

The bell buttons mean one bell a minute before the end; a bell at halfway as well; or no bell at all, which is what you get out of the box. **Edit text** takes most of what you could type after {{<slashembed name="sprint">}}, so an `in 5 minutes` start delay or anything else the buttons don't offer goes in there.
<!--
A clock time has to give more than one time, so `at :00/:30` works and `at :30` doesn't. An `until` also needs the shortest sprint it may leave you: `until :00/:30 for at least 10`.
-->
### Make announcements screen reader friendly

{{<tag-admin>}}

{{< slash name="settings theme" >}}

Consider turning on the **Screen reader friendly** theme if there's anyone around it might assist.

More at [Settings]({{< relref "settings" >}}).

### Everything else

{{<tag-admin>}}

{{< slash name="settings channel" >}}
{{< slash name="settings server" >}}

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
* **Plug your writing server** on #plug-your-writing-server on Sprinto's [support server](https://discord.gg/TZJ8YVU). Remember to use a permalink if you want people to find your server.

## See also

* [Sprint basics]({{< relref "basics" >}}) for how sprints actually run
* [Admin commands]({{< relref "admin" >}})
* [Settings]({{< relref "settings" >}})
