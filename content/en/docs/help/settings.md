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

## The seven subcommands

### settings me

{{<slash name="settings me" >}}

Your own settings, and only yours. **Max chimes** is how many of a sprint's bells @ you. It starts at 0, so you're never pinged unless you ask; the bells ring in the channel either way. There's also a link through to your {{<slashembed name="pets">}} panel.

Nobody else's settings are affected, on any server.

### settings channel

{{<slash name="settings channel" >}}

What's different about *this* channel. Anyone can open it and read; an {{<tag-admin>}} can change it.

### settings server

{{<slash name="settings server" >}}

Server-wide defaults, inherited by every channel that hasn't overridden them itself. Same rule: anyone can read, {{<tag-admin>}} to change.

#### Why the panel looks empty

Both panels show **only what differs from the defaults**. On a freshly set up server that's nothing at all, so you get an almost blank panel with an "add" control. That's correct, not a bug.

Here's the whole thing on a brand new server:

{{<reply ephemeral="1">}}

## Channel sprint settings

Everything here uses the default. Add a setting below to change one.

### In effect here

- Ping roles: (none) (default). Edit with {{<slashembed name="settings roles">}}
- Sprint defaults: length 15 min, start 1 min, bells off, late 10 min (default). Edit with {{<slashembed name="settings sprint-defaults">}}
- Emoji theme: Random emojis (default). Edit with {{<slashembed name="settings theme">}}
More info: <https://sprintobot.com/docs/settings-admin/>

**My permissions in this channel:**
✅ View Channel
✅ Send Messages
{{</reply>}}

{{<buttons>}}
{{<button "You">}}
{{<button "Channel" "primary">}}
{{<button "Server">}}
{{</buttons>}}

{{<buttons>}}
{{<select "Add a setting">}}
{{</buttons>}}

The three buttons along the top switch between your own settings, this channel and the whole server. The dropdown is the only other control, because there is nothing yet to remove.

The last two lines of the message are a check on Sprinto's own access. Both need a ✅ for sprints to run in this channel.

The idea is that the panel is a list of your decisions, not a wall of switches you have to read past. Add a setting to pin it and edit it; remove it to hand it back to the default. Adding a setting doesn't change anything on its own, it just brings the setting out where you can see it.

Pick `walltime` from the dropdown, click its button once to cycle it, and the same panel now reads:

{{<reply ephemeral="1">}}

## Channel sprint settings

- Wall time: Static timer (classic)
- Tidy sprints (autodelete joins & word counts): On (server default)

### In effect here

- Ping roles: (none) (default). Edit with {{<slashembed name="settings roles">}}
- Sprint defaults: length 15 min, start 1 min, bells off, late 10 min (default). Edit with {{<slashembed name="settings sprint-defaults">}}
- Emoji theme: Random emojis (default). Edit with {{<slashembed name="settings theme">}}
More info: <https://sprintobot.com/docs/settings-admin/>

**My permissions in this channel:**
✅ View Channel
✅ Send Messages
{{</reply>}}

{{<buttons>}}
{{<button "You">}}
{{<button "Channel" "primary">}}
{{<button "Server">}}
{{</buttons>}}

{{<buttons>}}
{{<button "Wall time: Static timer (classic)" "primary">}}
{{<button "✕">}}
{{</buttons>}}

{{<buttons>}}
{{<select "Add a setting">}}
{{</buttons>}}

Two rows appeared, and they're there for different reasons. **Wall time** was set in this channel, so it gets a button (click it to cycle to the next value) and a ✕ to hand it back. **Tidy sprints** is marked `(server default)`: somebody set it on the server panel, this channel is going along with it, and it's listed so you know why sprints here behave that way. To pin it in this channel, add it from the dropdown; it starts on whatever it already resolved to, so nothing changes until you click it.

A channel falls back to the server default, and the server falls back to Sprinto's built-in default. So setting `show-quotes off` once at the server level turns quotes off everywhere, and a single channel can still add `show-quotes on` for itself.

#### The "in effect here" block

Underneath every channel and server panel is a short read-only summary. Ping roles, allowed channels, default sprint options and the emoji theme aren't edited from this panel, they have their own commands, but this is where you find out what they currently are. Each line tells you which command to use.

The server panel's version adds the channel list:

{{<reply ephemeral="1">}}

## Server default sprint settings

Everything here uses the default. Add a setting below to change one.

### In effect server-wide

- Sprint channels: #writing-sprints, #sprint-marathon. Edit with {{<slashembed name="settings sprint-channels">}}
- Ping roles: {{<role "@Sprinters">}}. Edit with {{<slashembed name="settings roles">}}
- Sprint defaults: length 20 min, start 1-2 min, bells off, late 10 min. Edit with {{<slashembed name="settings sprint-defaults">}}
- Emoji theme: Random emojis (default). Edit with {{<slashembed name="settings theme">}}
More info: <https://sprintobot.com/docs/settings-admin/>
{{</reply>}}

{{<buttons>}}
{{<button "You">}}
{{<button "Channel">}}
{{<button "Server" "primary">}}
{{</buttons>}}

{{<buttons>}}
{{<select "Add a setting">}}
{{</buttons>}}

That server has never changed a toggle, so the panel itself is still empty, but it has picked sprint channels, a ping role and a 20 minute default. `bells off` means nothing rings unless a sprint asks for it. `late 10 min` is how long after time's up word counts are still accepted. Read the sprint channels line as "sprints run only in these two", and see [Allowed channels]({{<relref "whitelist" >}}).

#### When the channel panel says sprints don't run here

If your server has picked its sprint channels and you open {{<slashembed name="settings channel">}} somewhere that isn't one of them, there's nothing to configure, so Sprinto says so instead of showing you settings that would never apply:

{{<reply ephemeral="1">}}
Sprints don't run in this channel. Right now they run only in: #writing-sprints, #sprint-marathon.
To let sprints run here, use the button below, or manage the list with {{<slashembed name="settings sprint-channels">}}.
More info: <https://sprintobot.com/docs/settings-admin/>

**My permissions in this channel:**
✅ View Channel
✅ Send Messages
{{</reply>}}

{{<buttons>}}
{{<button "You">}}
{{<button "Channel" "primary">}}
{{<button "Server">}}
{{</buttons>}}

{{<buttons>}}
{{<button "Allow sprints in this channel" "success">}}
{{</buttons>}}

The button adds this channel to the list, and the panel turns into the ordinary one. The You and Server tabs work normally from here.

### settings roles

{{<slash name="settings roles" >}}

Pick the roles Sprinto mentions when a sprint starts here. It's a native Discord role picker. See [Ping roles]({{<relref "ping-roles" >}}).

### settings sprint-channels

{{<slash name="settings sprint-channels" >}}

Pick which channels sprints are allowed in. An empty list, which is the default, means sprints work anywhere. See [Allowed channels]({{<relref "whitelist" >}}).

### settings sprint-defaults

{{<slash name="settings sprint-defaults" >}}

This channel's default sprint: how long it runs, how long it waits before starting, and its bells. Out of the box that's 15 minutes long, a 1 minute join window and no bell. The bell buttons offer 🔔 1 minute, 🔔 50% and 🔔 1 minute, or 🔕 No chime, which is the one you start on. Anything else, including the late window, goes in through **Edit text**.

### settings theme

{{<slash name="settings theme" >}}

Which emoji decorate sprint announcements, and how those announcements read aloud. Two choices:

- **Random emojis**, the default. A different set every sprint: one emoji rolled from each of Sprinto's red, green and yellow pools, for the join window, the start and time's up.
- **Screen reader friendly.** The same four emoji every sprint, each named for what it means in the sprint: `soon` while the join window is open, `go` at the start, `ding` at time's up, `horrah` on the scoreboard. A screen reader reads a custom emoji by its name, so it says "soon soon soon" rather than "sunflower sunflower sunflower".

Screen reader friendly changes the wording too. Headings come out of capitals, so it's **Join the sprint** rather than **JOIN THE SPRINT**, and **Time's up** rather than **TIME'S UP**. The bell line spells its units out, `Chime at 60 seconds remaining.` instead of `🔔 at 60s remaining.`, the 📢 and 📣 come off the Pings and Participants labels, and a chime's bare 🔔 becomes the word `Chime:`.

Nothing else is different. Sprints run the same length, the commands are the same, and everyone in the channel sees the same announcements.

It opens on the server default, and on a new server it looks like this:

{{<reply ephemeral="1">}}

## Emoji theme: Server default

Which emoji decorate the sprint announcements across this server, unless a channel overrides it.
In effect: **Random emojis** (default)
{{</reply>}}

{{<buttons>}}
{{<button "Server default" "primary">}}
{{<button "This channel">}}
{{<button "Reset to built-in">}}
{{</buttons>}}

{{<buttons>}}
{{<select "Choose an emoji theme">}}
{{</buttons>}}

Click **This channel** first if you only want to change this one channel; a channel that has no theme of its own follows the server. **Reset to built-in** is greyed out until something is set, and reads **Clear channel override** while you're on **This channel**. Anyone can open it and read what's in effect; only an {{<tag-admin>}} gets the buttons and the dropdown. There is no personal version of this setting: the theme belongs to the channel.

## The text form

If you'd rather type than click, every setting works as text too:

{{<atsprinto "settings show-quotes off" >}}
{{<atsprinto "settings walltime sometimes" >}}
{{<atsprinto "settings" >}}

The text form always changes this channel. Server defaults are set from the panel, with {{<slashembed name="settings server">}}.

{{<atsprintoembed "settings show" >}} lists the settings as plain text, with `(server default)` or `(default)` marking the ones this channel isn't setting itself.

Values are forgiving. `on`, `off`, `yes`, `no`, `true`, `false` and similar all land where you'd expect, as does `default` (which means "go back to inheriting"). Keys are forgiving too. Every name in the table below works as written, with or without its hyphens, and a few have spares: `clean` for `family-friendly`, `tidy` or `autodelete` for `tidy-sprints`, `emoji` for `theme`.

Give it a value it can't read and it won't scold you; it shows you the current value instead. Give it a key it doesn't know and it lists the keys it does know.

## Every setting

Channel and server scope. Anyone can view, {{<tag-admin>}} to change.

| Key | Default | What it does |
| --- | --- | --- |
| `walltime` | on | How the start message shows the end of the sprint. `on` adds a live countdown that ticks in each reader's own client, plus the end time in their own timezone on sprints of 2 minutes or more. `sometimes` drops the countdown and gives the older static end minute instead, e.g. "Duration: 15 minutes (until ⏰ :16).", also only on sprints of 2 minutes or more; when the end doesn't land on a whole minute it reads "(until ⏰ :16 +30s)". `off` shows the duration only. |
| `theme` | random | Which emoji decorate sprint announcements, and how they read aloud. `random` rolls a fresh trio every sprint; `screen-reader` uses a fixed, named set and plainer wording, and is covered under [settings theme](#settings-theme) above. Typed, `off` means "stop varying the emoji", so it picks `screen-reader`. The dropdown at {{<slashembed name="settings theme">}} is easier. |
| `show-ps` | on | The post-sprint text: quotes, combined word counts, updates, `/forgetme` help, everything below the scoreboard. Turning this off hides all of it, including anything the settings below would have shown. The panel lists Quotes, Family-friendly and Patreon requests underneath this row, struck through while it's off. |
| `show-quotes` | on | Quotes at the end of sprints, on every second sprint in the channel. Each channel takes its own turns, so a busy one doesn't use up another's. They're meant to provoke a bit of thought and discussion. If that's not what your group is there for, turn them off. |
| `family-friendly` | on | Filters out the occasional crass quotes and replies. On by default, so a new server never sees them. Turn it off to leave them in. |
| `show-patreon` | on | Occasional requests to support Sprinto through Patreon, Ko-fi or merch. There aren't many, and one may still slip through if it's part of a news update. |
| `auto-pings` | on | Whether joining a sprint signs you up to be pinged at the start of the next few. With this off, joining never touches anyone's ping settings, and people who want pings use {{<slashembed name="pingme">}} themselves. Ping roles are still honoured either way. The panel writes this row's on value as **3**, the number of sprints one join signs you up for. |
| `carl` | off | Lets a feeder bot such as Carl-bot start sprints here. Sprinto ignores other bots unless you turn this on. See [Carl-bot x Sprinto]({{<relref "carlbot" >}}). |
| `shuffle-leaderboard` | off | Lists the scoreboard in a stable random order with no rank numbers instead of ranking it, with pets at the bottom. Some groups find this takes the edge off the competition. |
| `tidy-sprints` | off | Sprinto deletes its own join and word-count confirmations 45 seconds after posting, to stop a busy sprint burying the channel. It only ever removes its own confirmations, never anything you typed. |
| `preset` | none | The channel's default sprint, written the same way you'd write it after {{<slashembed name="sprint">}}. For example `20 iab` for a 20 minute sprint starting in a bit. Someone typing a bare {{<slashembed name="sprint">}} gets this. |
| `max-sprint` | 2 hours | Caps how long a sprint can be here, anywhere from 15 minutes to 2 hours. A longer one is refused, and `please` doesn't get past it. It's the only setting a channel can't loosen: set on both the channel and the server, the smaller one wins. The panel calls this row **Longest sprint allowed**. |

Your own scope, under {{<slashembed name="settings me">}}. Neither of these is a `settings` key: to change chimes by text, type {{<atsprintoembed "chimes 2">}} on its own.

| Key | Default | What it does |
| --- | --- | --- |
| `chimes` | 0 | How many of a sprint's bells @ you, counting back from the last one. Anything from 0 to 5, and 0 means none. The bells ring in the channel either way. The panel calls this row **Max chimes**. |
| Sprint companion | | Not a setting. Shows which pet is sprinting with you, or `No pet`. Change it in {{<slashembed name="pets">}}, which the panel links to. |

## Removing or reporting a quote

If a quote is a problem, or just annoyingly prescriptive, tell me and I'll take it out. Use {{<slashembed name="feedback">}} and include the quote itself, or come and say so on the Sprinto Planet Discord server.

An {{<tag-admin>}} doesn't have to wait. Right-click the sprint results the quote is on (long-press on mobile), choose **Apps → Clean up these results**, then press **Remove the quote**. Sprinto edits it out of the message that's already posted and won't show that quote in your server again. Only you see the panel. Discord puts that right-click entry in front of server administrators only; to give it to another role as well, use Server Settings → Integrations.

That covers your own server only, so the panel then offers **Report it too**. It asks why (offensive, wrongly attributed, wrong, not right for this server, or something else) and takes a note if you want to add one. Reports come to me and I read them by hand.

## See also

- [Setup]({{< relref "setup" >}}) (setting up Sprinto)
- [Allowed channels]({{<relref "whitelist" >}}): keeping sprints out of channels they don't belong in
- [Ping roles]({{<relref "ping-roles" >}}): a role to mention at every sprint start
- [Admin commands]({{<relref "admin" >}}): about the {{<tag-admin>}} and {{<tag-mc>}} roles
- [ActiveSprinter]({{<relref "activesprinter" >}}) (another role used by Sprinto)
