---
title : "Settings (admin)"
description: "Settings"
lead:
---

All settings can be set to `on`, `off` or `default`. There's also a choice for `help` which displays help for the setting without changing it.

### settings

{{< slash name="settings" >}}
{{< atsprinto "settings" >}}

Display values of channel settings.

### show-patreon-requests

{{<tag-admin>}}

{{< slash name="setup-set-show-patreon-requests" key0="setting" val0="On" >}}
{{< atsprinto "setShowPatreonRequests on" >}}

Show / don't show requests to join Sprinto's Patreon, donate through Ko-fi (or to buy Sprinto merch) at the end of sprints.

You can also use {{< atsprintoembed "patreon" >}} and {{< atsprintoembed "merch" >}} for links.

As a courtesy I allow the occassional Patreon related messages to be "turned off". There aren't many of these messages, and sometimes one might still slip through, e.g. if it's part of a news update.

### show-quotes

{{<tag-admin>}}

{{< slash name="setup-set-show-quotes" key0="setting" val0="On" >}}
{{< atsprinto "setShowQuotes on" >}}

Hide or show quotes at the end of sprints.

Quotes are meant to provoke thought and discussion. They appear approximate once every two sprints or so. If they're not appropriate for your sprinting group, turn them off.

I don't mind removing individual quotes from the database if they're problematic or even overly prescriptive.

Feel free to report any quotes by leaving feedback with the {{< slashembed name="feedback" >}} command. Be sure to include the quote itself in your feedback. You can also join the Sprinto Planet Discord server to leave feedback.

### show-ps (post sprint text)

{{<tag-admin>}}

{{< slash name="setup-set-show-ps" key0="setting" val0="On" >}}
{{< atsprinto "setShowPS on" >}}

Show or hide all post-sprint text. Turning this off will hide quotes, updates, combined word counts, `/forgetme` help, and everything else which would otherwise be shown after the scoreboard.

### set-autoping

{{<tag-admin>}}

{{< slash name="setup-set-autoping" key0="setting" val0="On" >}}
{{< atsprinto "setAutoPings on" >}}

Set whether sprinters who join should automatically be pinged (mentioned) at the start of the next few sprints. If off, users will not be added to the list of users be pinged at the start of future sprints. Users can still manually use `/pingme` or `/always`. Even with autopings off, the `always_ping_role` setting will be respected, so, for example, if you have a @sprinter role which users can add themselves to and use `@sprinto always_ping_role @sprinter`, then Sprinto will alert them of new sprints via that role. Use {{<atsprintoembed "forgetallusers">}} {{<tag-admin>}} to remove all existing individual user pings.

See [Ping Roles]({{< relref "ping-roles" >}}) for more info.

### show-walltime

{{<tag-admin>}}

Note: This setting is being updated and these options may be out of date.

{{< slash name="setup-set-walltime" key0="setting" val0="sometimes" >}}
{{< atsprinto "setWalltime sometimes" >}}

Show or hide display of the ending "wall time" when sprint starts. e.g. "(Runs until ⏰ :30)".

* With `sometimes` (the default) it will only be shown if the sprint ends near an exact minute.
* With `on` it will be always shown (at least for sprints longer than 2 minutes).

Wall time also shown with the `/time` command for both `on` and `sometimes`.

### listen-to-carl

{{<tag-admin>}}

{{< slash name="setup-set-listen-to-carl" key0="setting" val0="Off">}}
{{< atsprinto "setListenToCarl off">}}

By default Sprinto ignores messages from other bots. Setting "listen-to-carl" to On tells Sprinto it’s OK to listen to Carl-bot. This allows Carl-bot to start sprints on a schedule. See [Carl-bot x Sprinto]({{< relref "carlbot" >}}) for more info.

## See also

* [Setup]({{< relref "setup" >}}) (setting up Sprinto)
* [Allowed channels (admin)]({{<relref "whitelist" >}}) — admin commands to prevent users running sprints where they're not supposed to.

* [ActiveSprinter]({{<relref "activesprinter" >}}) (another role used by Sprinto)
* [Ping roles (admin)]({{<relref "ping-roles" >}})  — Set up a role to always be pinged

* [Voice]({{<relref "voice" >}})
