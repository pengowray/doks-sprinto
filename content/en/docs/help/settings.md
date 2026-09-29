---
title : "Settings"
description: "The /settings command: your own settings, channel and server settings, ping roles, sprint channels, sprint defaults and the emoji theme"
lead: "What each /settings panel shows, and how to change a setting"
url: "docs/settings-admin"
---

All of Sprinto's settings are under {{<slashembed name="settings">}}. The command has seven subcommands, one for each panel:

| Command | What it's for |
| --- | --- |
| [`/settings me`](#your-sprint-settings) | Your own settings: chimes, your sprint companion and your time zone |
| [`/settings channel`](#channel-and-server-settings) | Settings for the channel you're in. They override the server's settings. |
| [`/settings server`](#channel-and-server-settings) | Settings for every channel on the server |
| [`/settings roles`](#roles) | The roles pinged when a sprint starts in this channel |
| [`/settings sprint-channels`](#sprint-channels) | The channels sprints can run in |
| [`/settings sprint-defaults`](#sprint-defaults) | The default start time, length and chimes for sprints |
| [`/settings theme`](#emoji-theme) | The emoji in sprint announcements |

Anyone can open these panels and see the settings. To change anything except your own settings, you need to be a Sprint Admin {{<tag-admin>}}: the server owner, anyone with the Administrator or Manage Server permission, or anyone with a role named {{<role "@Sprint Admin">}}.

Sprinto sets nothing up when it joins your server: no channel, no role and no saved settings. It works straight away in every channel it can post in, and you only need these panels to change something.

## Channel and server settings

{{<slash name="settings channel" >}}
{{<slash name="settings server" >}}

Server settings apply in every channel. A channel's settings override the server's, except for **Longest sprint allowed**: when both are set, the shorter one applies.

A Sprint Admin sees only the settings that have been changed for this channel (or, on the server panel, for the server), each as a button showing its value, with a ✕ beside it:

{{<buttons>}}
{{<button "Tidy sprints (autodelete joins & word counts): On">}}
{{<button "✕">}}
{{</buttons>}}

{{<buttons>}}
{{<select "Add a setting">}}
{{</buttons>}}

* Click a setting's button to switch it to its next value.
* Click ✕ to remove the change. On the channel panel, the setting goes back to the server's value. On the server panel, the setting goes back to Sprinto's default.
* To change any other setting, pick it from **Add a setting**. Each option shows its current value, marked "(default)" or "(server default)". Picking a setting adds a button for it, showing its current value; then click the button to change the value.
* When many settings have been changed, use **More...** and **Back** to page through the buttons.

If nothing has been changed, the panel says "Everything here uses the default. To change a setting, first add it below."

A Sprint Admin can switch between panels with these buttons:

{{<buttons>}}
{{<button "You" "primary">}}
{{<button "Channel">}}
{{<button "Server">}}
{{</buttons>}}

Everyone else sees the channel and server settings as text, with no buttons. Their own settings are under [`/settings me`](#your-sprint-settings).

A change takes effect from the next command.

At the end of the panel, a list headed "In effect here" (or "In effect server-wide" on the server panel) shows the settings that have their own panels: ping roles, sprint defaults and the emoji theme, plus sprint channels on the server panel. Each line names the command that changes that setting, for example "Emoji theme: Random emojis (default). Edit with /settings theme".

`/settings channel` also shows whether Sprinto can post in the channel. Under "**My permissions in this channel:**", View Channel and Send Messages are each marked ✅ or ❌. Anyone can see this.

In a channel where sprints aren't allowed, `/settings channel` shows only the message below. A Sprint Admin also gets the **Allow sprints in this channel** button, which adds the channel to the [sprint channels](#sprint-channels) list.

{{< reply >}}
Sprints can't be run in this channel. Right now they run only in: #writing-sprints.
To let sprints run here, use the button below, or manage the list with /settings sprint-channels.
{{< /reply >}}

{{<buttons>}}
{{<button "Allow sprints in this channel" "success">}}
{{</buttons>}}

### Every setting

The first column gives each setting's name as the panel shows it. Use the text key to [change a setting by typing](#change-a-setting-by-typing).

| Setting | Text key | Default | What it does |
| --- | --- | --- | --- |
| **Wall time** | `walltime` | Dynamic timestamps | How the start message shows when the sprint ends. **Dynamic timestamps** (`on`): a live countdown that updates in each reader's Discord app and, on sprints of 2 minutes or more, the end time in each reader's own time zone. **Static timer (classic)** (`sometimes`): on sprints of 2 minutes or more, the minute the sprint ends, for example "Duration: 15 minutes (until ⏰ :16).", or "(until ⏰ :16 +30s)" when the end isn't on a whole minute. The minute is in UTC, so in a time zone with a half-hour offset, such as India or Adelaide, the minute shown is 30 minutes off. **Off** (`off`): the length of the sprint only. |
| **Post-sprint text** | `show-ps` | On | Add one extra line under the scoreboard: a quote, a news update, a reminder about `/forgetme`, a tip to upvote Sprinto on top.gg, "`/sprint` to start another", or a note about a Discord incident. With it off, the "Combined word count" line still shows when 3 or more people have a word count above 0. While it's off, the panel shows Quotes and Family-friendly struck through. |
| **Quotes** | `show-quotes` | On | Show a quote under the scoreboard on every second sprint in the channel. When an urgent news item is shown in a quote's place, the quote is shown on the next sprint instead. It's unlikely you'll agree with every quote. They're there to provoke thought and discussion. If that's not what your group is there for, turn them off. |
| **Family-friendly** | `family-friendly` | On | Filter out the occasional crass quote or reply. You'll rarely see a difference with it off. |
| **Auto pings** | `auto-pings` | On (shown as **3**) | Sign up everyone who joins a sprint to be pinged at the start of the next 3 sprints in the channel. With it off, sprinters sign up with {{<slashembed name="pingme">}}. Ping roles are pinged either way. See [Ping me]({{<relref "pingme" >}}). |
| **Listen to Carl-bot** | `carl` | Off | Let a feeder bot such as Carl-bot start sprints here. Sprinto ignores other bots unless this is on. See [Carl-bot x Sprinto]({{<relref "carlbot" >}}). |
| **Shuffled leaderboard** | `shuffle-leaderboard` | Off | List the scoreboard in a random order with no rank numbers. Word counts are still shown, and pets are listed last. This takes the edge off the competition and lets sprinters work at their own pace. |
| **Tidy sprints (autodelete joins & word counts)** | `tidy-sprints` | Off | Delete Sprinto's own join and word-count confirmations 45 seconds after they're posted, so a busy sprint doesn't fill the channel with them. Only Sprinto's confirmations are deleted, never anything a person typed. |
| **Longest sprint allowed** | `max-sprint` | 2 hours | The longest sprint anyone can start here. You can set it anywhere from 15 minutes to 2 hours. Longer sprints are refused, even with `please`. A channel's setting can't be higher than the server's. To change it, click its button and type a number of minutes, or a length such as `1.5 hours`. Leave the box blank to use the server's setting. |

The emoji theme and the default sprint have their own panels: see [Emoji theme](#emoji-theme) and [Sprint defaults](#sprint-defaults).

### Change a setting by typing

{{<atsprinto "settings tidy-sprints on" >}}

A typed setting changes **the channel you type it in**, and only that channel. To change a setting for the whole server, use {{<slashembed name="settings server">}}.

* **Key:** any text key from the table. Hyphens, underscores and spaces in the key don't matter, so `show-quotes`, `show_quotes` and `showquotes` are the same key.
* **Value:** `on` or `off` (also `yes`/`no`, `true`/`false`, `show`/`hide` and `allow`/`disallow`). Wall time also takes `sometimes`, and Longest sprint allowed takes a number of minutes, such as `settings max-sprint 90`.
* `default` (or `reset`, `clear`) removes this channel's own value, so the server's value or Sprinto's default applies again.
* Leave out the value to see the current one. `@Sprinto settings quotes` replies "OK. Quotes: On (default)".

The reply names the setting and its new value, for example "OK. Family-friendly: Off". If the value isn't set on this channel itself, the reply adds "(default)" or "(server default)" after it.

Typing `@Sprinto settings` on its own gets the reply "Please use the /settings me slash command to open this."

The old commands for single settings, such as `setShowQuotes`, `setListenToCarl` and the `/setup-set-...` slash commands, are gone. Typing one gets this reply:

{{< reply >}}
That command is gone. The settings are now in `/settings channel` for this channel, or `/settings server` for the whole server.
{{< /reply >}}

## Your sprint settings

{{<slash name="settings me" >}}

These are your own settings, and only you can change them. The panel has three rows.

**Max chimes** (0 to 5, default 0): how many of a sprint's chimes mention you, counting back from the last chime. A chime is a message Sprinto posts in the channel during a sprint, saying how much time is left. A chime is posted whether or not it mentions anyone, and it mentions only people who joined the sprint. With Max chimes at 2, the last 2 chimes of each sprint you join mention you. The dropdown's options read "0 - Don't @ me with time remaining", "1 - Notify me for the last 1 chime of a sprint", and so on up to 5. To add chimes to a sprint, see [Chimes]({{<relref "sprint#chimes" >}}).

You can also set Max chimes by typing. A number over 5 counts as 5, and the setting applies in every server:

{{<atsprinto "chimes 2" >}}

{{< reply >}}
OK, I'll notify you on the last 2 chime(s) of each sprint.
{{< /reply >}}

**Sprint companion**: the pet who sprints with you, or "No pet". Change your companion with {{<slashembed name="pets">}}. See [Pets]({{<relref "emojipet" >}}).

**Your timezone**: your time zone and the time there now, for example "Australia/Brisbane, where it's 3:45 pm. Change it with /timezone". If you haven't set one, the row reads "not set, so UTC is assumed, where it's 5:45 am. Set yours with /timezone". Sprinto needs your time zone for clock-time sprints such as `at 14:30`.

* `/timezone` on its own shows your time zone.
* `/timezone` followed by a city, country or clock name such as `PST` sets it. Discord suggests matches as you type.
* `/timezone none` clears it.

## Roles

{{<slash name="settings roles" >}}

This panel shows the roles Sprinto uses. The first list, "Roles detected by name (view only):", shows the Active Sprinters, Sprint MC and Sprint Admin roles Sprinto found on the server by their names, or "not found" for a role Sprinto didn't find. To change these, create or rename the roles in Discord. See [Admin commands]({{<relref "admin" >}}) and [Active Sprinter role]({{<relref "activesprinter" >}}).

Below that are the roles Sprinto pings when a sprint starts in this channel, for example "Roles to always mention at the start of sprints in this channel: @Sprinters". A Sprint Admin also gets a role picker to change them. The picker takes up to 25 roles, and the list is saved when you close the picker. Everyone else sees the text only. See [Ping roles]({{<relref "pingme#ping-roles" >}}).

## Sprint channels

{{<slash name="settings sprint-channels" >}}

Choose the channels sprints can run in. The list is saved when you close the channel picker, and holds up to 25 channels. An empty list, which is the default, means sprints can run in any channel. See [Sprint channels]({{<relref "whitelist" >}}).

## Sprint defaults

{{<slash name="settings sprint-defaults" >}}

Set the default sprint: its start time, length and chimes. The panel opens on **Server default**. Click **This channel** to set a default for the channel you're in. For a picture of the panel, see [Set the default sprint]({{<relref "setup#set-the-default-sprint" >}}).

Each option in a channel's default overrides the same option in the server's default. Each option someone types after {{<slashembed name="sprint">}} overrides the same option in both defaults. For example, with a default of `20 in 5`, `/sprint 30` starts a 30-minute sprint in 5 minutes.

A Sprint Admin gets these buttons:

* Start time: **in 1 min**, **in 1-2 min**, **in 2-3 min**
* Length: **15**, **20**, **30**, **40**
* Chimes: **🔔 1 minute**, **🔔 50% and 🔔 1 minute**, **🔕 No chime**
* **Edit text**: type the default sprint options, as you would after {{<slashembed name="sprint">}}.
* **Reset to built-in** (on the server) or **Clear channel override** (in a channel): remove the default set at this level.

Green buttons show the options in effect now. A ✓ on a button means that option is set for the server or channel you selected; click the button again to unset the option. Everyone else sees the text only.

### Set the default sprint by typing

{{<atsprinto "settings preset 20 iab" >}}

This command sets the channel's default to `20 iab`, a 20-minute sprint starting in 2½ to 7½ minutes, and Sprinto replies "OK. Default sprint options: `20 iab`".

* `@Sprinto settings preset` shows the channel's default, or "No default sprint options set. Using Sprinto's original default (for 15 mins in 1 min)."
* `@Sprinto settings preset none` sets no default for this channel and replies "OK. Default sprint options: (none)". The server's default then doesn't apply in this channel either.
* A default Sprinto can't use is refused with "Error: Could not set default sprint options: " followed by the reason.

### Rules for default sprints

A default can include most of what you can type after {{<slashembed name="sprint">}}. A few options have extra rules:

* **Gap between chain rounds:** `20 gap 10` starts each new round 10 minutes after the previous round's writing time ends. The 10 minutes include the time for word counts. `20 break 7` gives a 7-minute break after the word counts are in. Setting `gap` replaces any `break`, and setting `break` replaces any `gap`. On a sprint without rounds, `gap` and `break` have no effect. Sprinto writes a saved gap back as `next`, for example `next 10`. See [Chain sprints]({{<relref "chains" >}}).
* **Clock times:** a default needs more than one time, so `at :00/:30` works and `at :30` doesn't. A default with `until` also needs `for at least`, which sets the shortest sprint: `until :00/:30 for at least 10`.
* **Limits:** a default with a break longer than 1 hour, or a `late` window longer than 60 minutes, is refused.

## Emoji theme

{{<slash name="settings theme" >}}

Choose which emoji appear in sprint announcements. The panel opens on **Server default**. Click **This channel** to set a theme for the channel you're in. Then pick a theme from **Choose an emoji theme**:

| Theme | What you get |
| --- | --- |
| **Random emojis** (default) | A different set every sprint: one emoji from each of Sprinto's yellow, green and red sets. Yellow is for the join window, green for the start, and red for time's up. |
| **Screen reader friendly** | Announcements that read better with a screen reader: the same four emoji every sprint (join window, start, time's up and results), each with a short name, and plainer wording. |

**Reset to built-in** (on the server) or **Clear channel override** (in a channel) removes the theme set for the server or channel you selected. Everyone except a Sprint Admin sees the text only.

To set the theme for this channel by typing, use {{<atsprintoembed "settings theme screen-reader">}} or {{<atsprintoembed "settings theme random">}}.

## Remove or report a quote

If a quote is a problem, or just annoyingly prescriptive, tell me and I'll remove it from the database. Use {{<slashembed name="feedback">}} and include the quote itself, and what's wrong with it (or the author).

An {{<tag-admin>}} can take a quote off results that are already posted, straight away:

1. Right-click the sprint results the quote is on (long-press on mobile).
2. Choose **Apps → Clean up these results**.
3. Press **Remove the quote**.

Sprinto edits the quote out of the posted results, and replies "Done. That quote won't be shown in this server again." Only you see the **Clean up these results** panel.

Removing the quote this way covers only your server, so the panel then offers **Report it too**. **Report it too** asks why you're reporting the quote (Offensive or upsetting, Wrongly attributed, Wrong or misleading, Not right for this server, or Something else) and takes a note if you want to add one. Reports come to me and I read them by hand.

**Clean up these results** works only for Sprint Admins. By default, Discord shows it only to members with the Administrator permission. To show it to your other Sprint Admins too, add their role in Server Settings → Integrations.

## See also

* [Setup]({{< relref "setup" >}}) (setting up Sprinto)
* [Sprint channels]({{<relref "whitelist" >}}): keeping sprints to the channels you choose
* [Ping me]({{<relref "pingme" >}}): who gets @mentioned at sprint start, including roles
* [Admin commands]({{<relref "admin" >}}): about the {{<tag-admin>}} and {{<tag-mc>}} roles
* [ActiveSprinter]({{<relref "activesprinter" >}}) (another role used by Sprinto)
