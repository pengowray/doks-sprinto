---
title : "Setting up Sprinto"
description: "Setting up Sprinto on your Discord server: sprint channels, roles, permissions and settings"
lead: "Optional steps after inviting Sprinto, most useful first"
---
## The short version

Invite Sprinto, then run {{<slashembed name="sprint">}}. That's it. A sprint is running, waiting for you and others to join.

Sprinto sets nothing up when he joins. He doesn't post anything, create a channel or a role, or write any settings. He just works, straight away, in every channel he can see and post in. If you never touch a single option on this page your sprints will still run.

Everything below is optional. I've tried to put more useful stuff first.

## Worth doing first

### Make a dedicated sprint channel (or two)

Sprinto usage can quickly overwhelm any chat room, so almost all servers create a dedicated sprint channel with a name like `#writing-sprints`, `#sprints-and-excerpts` or something thematically appropriate for their server like `#sprinting_dojo`.

Sprinto rarely gets used when he has to share a general `#bots` channel with other bots. Some servers add multiple sprint channels, for example one for short spontaneous sprints (`#sprints-10-to-20-min`) and one for longer sprints (`#sprints-21-to-45-minutes`). Some servers add and remove sprinting channels as demand goes.

Each channel runs one sprint at a time. Sprints in different channels run independently.

### Rename the @Sprinto role

Rename the {{<role "@Sprinto">}} role to {{<role "@Bot role: Sprinto">}} to make it easier to use Sprinto. You can also make it unmentionable by regular users.

Why is this necessary? Sprinto accepts commands in two ways: slash commands such as {{<slashembed name="time">}}, and messages that start by mentioning Sprinto, such as {{<atsprintoembed "time">}}. Discord also gives every bot a role with the bot's name ({{<role "@Sprinto">}}), and in Discord's @ list the role looks almost the same as Sprinto the bot ({{<atsprintoembed>}}).

Discord doesn't show Sprinto the text of a message that mentions the role, so Sprinto can't run the command in it. Instead, he posts a note like this in the channel:

{{< reply >}}
Sorry, I couldn't read that. Discord doesn't show me the text when you ping {{< mention "Sprinto" >}} (the role).
Start your message with {{< mention "Sprinto" >}} and I'll see it.
When you type {{< mention "Sprinto" >}}, pick the one with my avatar, not the role.
{{< /reply >}}

The note notifies nobody, and disappears if the person deletes their message. If the role still has Sprinto's name, a Sprint Admin also sees a suggestion to rename it. Renaming the role makes the mistake less likely, because the role no longer looks like Sprinto in Discord's @ list.

### Check Sprinto can actually post

In a sprint channel, Sprinto needs two permissions: **View Channel** and **Send Messages** (in a thread, **Send Messages in Threads**). That's all a sprint needs. **Manage Roles** is only needed for [the Active Sprinters role](#the-active-sprinters-role). The invite link asks for more permissions than these, but a sprint runs on the two.

To check, run {{<slashembed name="settings channel">}} in your sprint channel. At the bottom of the panel, under "**My permissions in this channel:**", View Channel and Send Messages are each marked ✅ or ❌. Anyone can look.

Running {{<slashembed name="sprint">}} tells you too. If Sprinto can't post there, only you see this reply:

{{< reply ephemeral="1" >}}
Sorry, I can't post in this channel. Please give me the **View Channel** and **Send Messages** permissions here, then start the sprint again.
{{< /reply >}}

Either way, the fix is in the channel's permissions.

## Roles you create yourself

Two roles give people extra powers over sprints:

* {{<role "@Sprint MC">}} can force-cancel a sprint, move a stuck sprint on to its next step, and run locked sprints that only a Sprint MC can cancel.
* {{<role "@Sprint Admin">}} can do everything a Sprint MC can, and change Sprinto's settings.

Sprinto never creates these roles. You make them yourself, like any other Discord role, and he matches them **by name**. Capitalisation doesn't matter, the space is optional, and plurals work, so {{<role "@Sprint MC">}}, {{<role "@sprintmcs">}} and {{<role "@Sprinto MC">}} are all the same thing to him. Other names don't count: a role named "Sprint MC Team" isn't a Sprint MC role.

The server owner and anyone with the Administrator or Manage Server permission are already Sprint Admins, and so Sprint MCs too. On a small server you may not need either role at all.

<!-- TODO later pass: /settings roles can pick the Sprint MC and Sprint Admin roles (main only) -->

Full detail is on the [Admin commands]({{< relref "admin" >}}) page.

## Optional configuration

All of these are optional and all of them can be changed later.

### Restrict where sprints can run

{{<tag-admin>}}

{{< slash name="settings sprint-channels" >}}

On a large server with many users, you might want to restrict where sprints can be run.

An empty list means sprints work anywhere, which is the default. More at [Sprint channels]({{< relref "whitelist" >}}).

### Ping people who are interested in sprints when sprints are happening

Set up a self-assigned role like {{<role "@Sprinters">}}, so you can ping people who are interested in sprinting and let them know sprints are starting. To have Sprinto mention that role at the start of every sprint in a channel, add it as a [ping role]({{< relref "pingme#ping-roles" >}}).

Sprinto autopings people who joined a recent sprint, but it's a very simple system. It's best to have another way to ping people who have said they're interested in sprinting.

### Set the default sprint

{{<tag-admin>}}

{{< slash name="settings sprint-defaults" >}}

Sets the default start time, length and chimes for sprints on your server, or in one channel, so {{<slashembed name="sprint">}} does what your server actually wants. The default fills in whatever the person starting a sprint doesn't type: with a default of `20 in 5`, `/sprint 30` starts a 30-minute sprint in 5 minutes.

Out of the box that's 15 minutes, starting in 1 minute, with no chime, and late word counts accepted for 10 minutes after time's up. A long-form channel might prefer `for 30 minutes in 1-2 minutes`.

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

Click **This channel** first if you only want to change this one channel. Green buttons show the start time, length and chime in effect right now. Click a button to add it to the default at this level; it gets a ✓. Click a ✓ button to remove it again. On a new server **Reset to built-in** is greyed out, because there is nothing set to clear. On a channel, that button reads **Clear channel override**.

Only a Sprint Admin gets the buttons. Everyone else sees the text.

With **Edit text** you can edit the default sprint for your selected scope (server or channel). The text takes most of what you could type after {{<slashembed name="sprint">}}, such as `in 5 minutes` or `random 10-20` or anything else. The box is filled with the default set at this level, if there is one.

* Leave the box empty to remove this level's default.
* Type `none` for no default here. In a channel, that also stops the server's default applying.
* A clock time has to give more than one time, so `at :00/:30` works and `at :30` doesn't. An `until` also needs `for at least`, which sets the shortest sprint: `until :00/:30 for at least 10`.

Anything Sprinto can't use is refused with "Error: Could not set default sprint options: " and the reason. For chain defaults and the other rules, see [Sprint defaults]({{< relref "settings#sprint-defaults" >}}).

### Make announcements screen reader friendly

{{<tag-admin>}}

{{< slash name="settings theme" >}}

Consider turning on the **Screen reader friendly** theme if anyone on your server uses a screen reader.

More at [Settings]({{< relref "settings#emoji-theme" >}}).

### Everything else

{{<tag-admin>}}

{{< slash name="settings channel" >}}
{{< slash name="settings server" >}}

See [Settings]({{< relref "settings" >}}) for every setting.

### The Active Sprinters role

{{<tag-admin>}}

{{< slash name="create-active-role" >}}

Creates an {{<role "@Active Sprinters">}} role. Anyone in a running sprint is added to it for the duration, so sprinters (and the fact that a sprint is happening at all) show up in the members list. To run the command you need the Manage Roles permission or to be a Sprint Admin. Sprinto itself needs Manage Roles, and his own role must be above {{<role "@Active Sprinters">}}. See [Active Sprinter role]({{< relref "activesprinter" >}}).

## Settings worth knowing about

Three defaults that servers most often want to change:

* **family-friendly** is **on**, which keeps the sweary quotes and replies out. Turn it off if your server would rather have them.
* **tidy-sprints** is **off**. Turn it on and Sprinto deletes his own join and word-count confirmations 45 seconds after posting them, so the channel keeps just the sprint itself.
* **shuffle-leaderboard** is **off**, so the scoreboard is ranked by word count. Turn it on and the ranks come off entirely: everyone is listed in a random order, with counts still shown. Good for a server that would rather nobody came first.

Set any of them with {{<slashembed name="settings channel">}} or {{<slashembed name="settings server">}}, or in text: {{<atsprintoembed "settings tidy-sprints on">}}. Text changes only the channel you type it in, and replies like "OK. Tidy sprints (autodelete joins & word counts): On". All of them are covered on the [Settings]({{< relref "settings" >}}) page.

## Cosmetic and nice to have

* **Rename Sprinto.** Give him a thematically suitable nickname on your server, such as Sir Sprinto Esquire. (Right-click on Sprinto and "Change Nickname".) Most of his messages still call him "Sprinto".
* **Move him up the members list.** Server Settings > Roles > drag the _Sprinto_ role up as high as you're comfortable, so people can find him.
* **Keep other bots out of the sprint channel.** If other bots have similar commands which may confuse or trip up sprinters, remove their permissions in your sprinting channels. You can do the reverse too, and remove permission to use Sprinto's commands elsewhere.
* **Plug your writing server** on #plug-your-writing-server on Sprinto's [support server](https://discord.gg/TZJ8YVU). Remember to use a permalink if you want people to find your server.

## See also

* [Sprint basics]({{< relref "basics" >}}) for how sprints actually run
* [Admin commands]({{< relref "admin" >}})
* [Settings]({{< relref "settings" >}})
