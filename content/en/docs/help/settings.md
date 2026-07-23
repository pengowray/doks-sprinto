---
title : "Settings"
description: "Settings"
lead: "One command for everything you can configure"
url: "docs/settings-admin"
---

Everything Sprinto can be told to do differently lives under one command: {{<slashembed name="settings">}}. Anyone can look. Changing a channel or server setting needs an {{<tag-admin>}}, that is a {{<role "@Sprint Admin">}}, a server administrator, or the server owner.

Sprinto configures nothing when it joins your server. No channel, no role, no saved settings. It works straight away in every channel it can post in, and you only come here if you want something changed.

{{<alts "Where did setup-set-show-quotes and friends go?">}}
The old `setup-set-*` commands (`setup-set-allowed-channel`, `setup-pingroles-set`, `setup-set-show-quotes`, `setup-set-show-ps`, `setup-set-show-patreon-requests`, `setup-set-autoping`, `setup-set-walltime`, `setup-set-listen-to-carl`, `setup-set-default`, `setup-show-default` and the rest) have all been removed. There were about ten of them and they all did nearly the same thing. They're now the one `/settings` command below. If an old pin or an old link sent you here, that's why.
{{</alts>}}

## The six subcommands

### settings me

{{<slash name="settings me" >}}

Your own settings, and only yours. This is where you set your **chimes**: the little bells Sprinto can ring partway through a sprint. Chimes are off by default, so turn them on here if you want them. There's also a link through to your {{<slashembed name="pets">}} panel.

Nobody else's settings are affected, on any server.

### settings channel

{{<slash name="settings channel" >}}

What's different about *this* channel. Anyone can open it and read; an {{<tag-admin>}} can change it.

### settings server

{{<slash name="settings server" >}}

Server-wide defaults, inherited by every channel that hasn't overridden them itself. Same rule: anyone can read, {{<tag-admin>}} to change.

#### Why the panel looks empty

Both panels show **only what differs from the defaults**. On a freshly set up server that's nothing at all, so you get an almost blank panel with an "add" control. That's correct, not a bug.

The idea is that the panel is a list of your decisions, not a wall of switches you have to read past. Add a setting to pin it and edit it; remove it to hand it back to the default. Adding a setting doesn't change anything on its own, it just brings the setting out where you can see it.

A channel falls back to the server default, and the server falls back to Sprinto's built-in default. So setting `show-quotes off` once at the server level turns quotes off everywhere, and a single channel can still add `show-quotes on` for itself.

### settings roles

{{<slash name="settings roles" >}}

Pick the roles Sprinto mentions when a sprint starts here. It's a native Discord role picker. See [Ping roles]({{<relref "ping-roles" >}}).

### settings sprint-channels

{{<slash name="settings sprint-channels" >}}

Pick which channels sprints are allowed in. An empty list, which is the default, means sprints work anywhere. See [Allowed channels]({{<relref "whitelist" >}}).

### settings sprint-defaults

{{<slash name="settings sprint-defaults" >}}

This channel's default sprint: how long it runs and how long it waits before starting. Out of the box that's 15 minutes long with a 1 minute join window.

## The text form

If you'd rather type than click, every key works as text:

{{<atsprinto "settings show-quotes off" >}}
{{<atsprinto "settings walltime sometimes" >}}
{{<atsprinto "settings" >}}

Values are forgiving. `on`, `off`, `yes`, `no`, `true`, `false` and similar all land where you'd expect, as does `default` (which means "go back to inheriting"). Keys are forgiving too: `family-friendly`, `familyfriendly`, `family_friendly` and `clean` are the same key.

Give it a key it doesn't know, or a value it can't read, and it won't scold you. It shows you the current value instead.

## Every setting

Channel and server scope. Anyone can view, {{<tag-admin>}} to change.

| Key | Default | What it does |
| --- | --- | --- |
| `walltime` | on | How the start message shows the end of the sprint. `on` gives a live countdown that ticks in each reader's own client and timezone. `sometimes` gives the older static end-minute, e.g. "(Runs until ⏰ :30)", for sprints of 2 minutes or more. `off` shows the duration only. Also affects {{<slashembed name="time">}}. |
| `show-ps` | on | The post-sprint text: quotes, combined word counts, updates, `/forgetme` help, everything below the scoreboard. Turning this off hides all of it, including anything the settings below would have shown. |
| `show-quotes` | on | Quotes at the end of sprints, roughly one sprint in two. They're meant to provoke a bit of thought and discussion. If that's not what your group is there for, turn them off. |
| `family-friendly` | on | Filters out the occasional crass quote. On by default, so a new server never sees the sweary ones. Turn it off if your group would rather have the full set. |
| `show-patreon` | on | Occasional requests to support Sprinto through Patreon, Ko-fi or merch. There aren't many, and one may still slip through if it's part of a news update. |
| `auto-pings` | on | Whether joining a sprint signs you up to be pinged at the start of the next few. With this off, joining never touches anyone's ping settings, and people who want pings use {{<slashembed name="pingme">}} themselves. Ping roles are still honoured either way. |
| `carl` | off | Lets a feeder bot such as Carl-bot start sprints here. Sprinto ignores other bots unless you turn this on. See [Carl-bot x Sprinto]({{<relref "carlbot" >}}). |
| `shuffle-leaderboard` | off | Lists the scoreboard in a stable random order with no rank numbers instead of ranking it, with pets at the bottom. Some groups find this takes the edge off the competition. |
| `tidy-sprints` | off | Sprinto deletes its own join and word-count confirmations a few seconds after posting, to stop a busy sprint burying the channel. It only ever removes its own confirmations, never anything you typed. |
| `preset` | none | The channel's default sprint, written the same way you'd write it after {{<slashembed name="sprint">}}. For example `20 iab` for a 20 minute sprint starting in a bit. Someone typing a bare {{<slashembed name="sprint">}} gets this. |

Your own scope, under `/settings me`:

| Key | Default | What it does |
| --- | --- | --- |
| `chimes` | off | How many bells you get partway through a sprint. Mid-sprint chimes are new in this release. |
| pets | | Opens your {{<slashembed name="pets">}} panel. |

## Reporting a quote

If a quote is a problem, or just annoyingly prescriptive, tell me and I'll take it out. Use {{<slashembed name="feedback">}} and include the quote itself, or come and say so on the Sprinto Planet Discord server.

## See also

* [Setup]({{< relref "setup" >}}) (setting up Sprinto)
* [Allowed channels]({{<relref "whitelist" >}}): keeping sprints out of channels they don't belong in
* [Ping roles]({{<relref "ping-roles" >}}): a role to mention at every sprint start
* [Admin commands]({{<relref "admin" >}}): about the {{<tag-admin>}} and {{<tag-mc>}} roles
* [ActiveSprinter]({{<relref "activesprinter" >}}) (another role used by Sprinto)
