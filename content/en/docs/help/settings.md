---
title : "Settings"
description: "Settings"
lead: "One command for everything you can configure"
url: "docs/settings-admin"
---

All of Sprinto's settings can be found via: {{<slashembed name="settings">}}.

Changing a channel or server setting needs an {{<tag-admin>}}, that is a {{<role "@Sprint Admin">}}, a server administrator, or the server owner. Viewing them is open to anyone.

Sprinto configures nothing when it joins your server. No channel, no role, no saved settings. It works straight away in every channel it can post in, and you only come here if you want something changed.

## Navigating settings
Use the these buttons as "Tabs" to look through settings which apply only to you, to the channel you're in, or the whole server. In most cases, the channel settings will override the server settings (except for the maximum sprint length, which can only be reduced)

{{<buttons>}}
{{<button "You" "primary">}}
{{<button "Channel">}}
{{<button "Server">}}
{{</buttons>}}



### settings roles

{{<slash name="settings roles" >}}

Pick the roles Sprinto mentions when a sprint starts here. It's a native Discord role picker. See [Ping me]({{<relref "pingme#ping-roles" >}}).

### settings sprint-channels

{{<slash name="settings sprint-channels" >}}

Pick which channels sprints are allowed in. An empty list, which is the default, means sprints work anywhere. See [Allowed channels]({{<relref "whitelist" >}}).

### settings sprint-defaults

{{<slash name="settings sprint-defaults" >}}

This channel's (or server's) default sprint. You can use the buttons to set it with presets, or edit the text of the sprint.

The channel's sprint defaults override the server's, sprint option by sprint option. The host of the sprint can then override any of those.

### settings theme

{{<slash name="settings theme" >}}

Which emoji appear in sprint announcements, and how those announcements read aloud. Currently just two choices:

- **Random emojis**, the default. A different set every sprint: one emoji rolled from each of Sprinto's red, green and yellow pools, for the join window, the start and time's up.
- **Screen reader friendly.** The same four emoji every sprint, with shorter names to be read aloud in a less annoying way. There are also some screen reader friendly changes the wording.

## Every setting

Channel and server scope. Anyone can view, {{<tag-admin>}} to change.

Set these via {{<slashembed name="settings">}} now.

| Key | Default | What it does |
| --- | --- | --- |
| `walltime` | on | How the start message shows the end of the sprint. `on` adds a live countdown that ticks in each reader's own client, plus the end time in their own timezone on sprints of 2 minutes or more. `sometimes` drops the countdown and gives the older static end minute instead, e.g. "Duration: 15 minutes (until ⏰ :16).", also only on sprints of 2 minutes or more; when the end doesn't land on a whole minute it reads "(until ⏰ :16 +30s)". `off` shows the duration only. |
| `theme` | random | Which emoji appear in sprint announcements, and how they're read aloud. `random` rolls a fresh emojis every sprint; `screen-reader` uses a fixed emojis and plainer wording, and is covered under [settings theme](#settings-theme) above. |
| `show-ps` | on | The post-sprint text: quotes, combined word counts, updates, `/forgetme` help, everything below the scoreboard. Turning this off hides all of it, including anything the settings below would have shown. The panel lists Quotes, Family-friendly and Patreon requests underneath this row, struck through while it's off. |
| `show-quotes` | on | Quotes at the end of sprints, on every second sprint in the channel. It's unlikely you'll agree with every quote. They're there to provoke thought and discussion. If that's not what your group is there for, turn them off. |
| `family-friendly` | on | Filters out the occasional crass quote or response. Filtering is on by default, but you'll rarely see a difference with it off. |
| `show-patreon` | on | Allow occasional requests to support Sprinto through Patreon, Ko-fi or merch. There aren't many of these messages, and one may still slip through if it's part of a news update. |
| `auto-pings` | on | Whether joining a sprint signs you up to be pinged at the start of the next (usually) 3 sprints. With this off, sprinters need to manually request to be pinged with {{<slashembed name="pingme">}}. Ping roles are still honoured either way. |
| `carl` | off | Lets a feeder bot such as Carl-bot start sprints here. Sprinto ignores other bots unless you turn this on. See [Carl-bot x Sprinto]({{<relref "carlbot" >}}). |
| `shuffle-leaderboard` | off | Lists the scoreboard in a stable random order with no rank numbers, with pets at the bottom. Takes the edge off the competition and let sprinters work at their own pace. |
| `tidy-sprints` | off | Sprinto deletes its own join and word-count confirmations 45 seconds after posting, to stop a busy sprint burying the channel. It only ever removes its own confirmations, never anything you typed. |
| `preset` | none | The channel's default sprint, written the same way you'd write it after {{<slashembed name="sprint">}}. For example `20 iab` for a 20 minute sprint starting in a bit. Someone typing a bare {{<slashembed name="sprint">}} gets this. |
| `max-sprint` | 2 hours | Caps how long a sprint can be here, anywhere from 15 minutes to 2 hours. Attempts to start longer sprints are refused, and `please` doesn't get past it. It's the only setting a channel can't loosen: set on both the channel and the server, the smaller one wins. The settings panel calls this row **Longest sprint allowed**. |

Your own settings are under {{<slashembed name="settings me">}}.

To change chimes by text, type {{<atsprintoembed "chimes 2">}}

| Key | Default | What it does |
| --- | --- | --- |
| `chimes` | 0 | How many of a sprint's bells @ you, counting back from the last one. Anything from 0 to 5, and 0 means none. The bells ring in the channel either way. The panel calls this row **Max chimes**. |

## Reporting a quote

If a quote is a problem, or just annoyingly prescriptive, tell me and I'll remove it from the database.

Use {{<slashembed name="feedback">}} and include the quote itself, and what's wrong with it (or the author).
<!--
An {{<tag-admin>}} doesn't have to wait. Right-click the sprint results the quote is on (long-press on mobile), choose **Apps → Clean up these results**, then press **Remove the quote**. Sprinto edits it out of the message that's already posted and won't show that quote in your server again. Only you see the panel. Discord puts that right-click entry in front of server administrators only; to give it to another role as well, use Server Settings → Integrations.

That covers your own server only, so the panel then offers **Report it too**. It asks why (offensive, wrongly attributed, wrong, not right for this server, or something else) and takes a note if you want to add one. Reports come to me and I read them by hand.
-->
## See also

- [Setup]({{< relref "setup" >}}) (setting up Sprinto)
- [Allowed channels]({{<relref "whitelist" >}}): keeping sprints out of channels they don't belong in
- [Ping me]({{<relref "pingme" >}}): who gets @mentioned at sprint start, including roles
- [Admin commands]({{<relref "admin" >}}): about the {{<tag-admin>}} and {{<tag-mc>}} roles
- [ActiveSprinter]({{<relref "activesprinter" >}}) (another role used by Sprinto)
