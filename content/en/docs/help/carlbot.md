---
title : "Carl-bot x Sprinto"
description: "Chaining sprints, and scheduling them further ahead with Carl-bot"
lead:
identifier: "carlbot"
---

## Sprinto can chain sprints on its own now

If what you want is a run of sprints back to back, you probably don't need Carl-bot at all. `/sprint` understands chains directly:

{{<slash name="sprint" key0="options" val0="25 then 50 then 15" >}}
Three sprints in a row: 25 minutes, then 50, then 15.

{{<slash name="sprint" key0="options" val0="25 break 7 x3" >}}
The same 25 minute sprint repeated three times, with a 7 minute break between each.

{{<slash name="sprint" key0="options" val0="pomo x4" >}}
Four 25 minute pomodoro blocks, with 5 minute breaks in between.

If a chain is already running and you'd rather not wait out the gap, a host or {{<tag-mc>}} can jump straight to the next block:

{{<slash name="go" >}}

See [Sprint (all options)]({{<relref "sprint" >}}) for the full chain grammar.

What Carl-bot still gives you that chains don't: scheduling something more than an hour ahead, or a sprint that announces itself automatically at the same time every day. For that, read on.

## Scheduling further ahead with Carl-bot

NOTE: Carl-bot is not associated with Sprinto. This is here to help you extend Sprinto beyond what it does natively, using a popular Discord bot developed completely independently of Sprinto.

## Setup

1. [Invite Sprinto]({{< relref "invite" >}}) to your server

1. Invite Carl-bot to your Discord server by clicking "+ Invite" at [carl.gg](https://carl.gg/)

  Tip: Be sure you're logged in at discord.com on your browser for the invite link to work. Alternatively, you can copy the invite link and paste it into a message in Discord and then click on the message.

  Tip: Carl-bot does not require any special permissions to interact with Sprinto. So, if you're not using Carl-bot for other purposes, you can remove almost all his permissions.

1. By default Sprinto ignores messages from other bots, so turn on the `carl` setting in each sprinting channel:

{{<atsprinto "settings carl on">}}
{{<alts "Synonym">}}
{{<slash name="settings channel">}}
Open the channel settings panel and turn `carl` on.
{{</alts>}}

Now you're ready to schedule a sprint via Carl-bot.

## Scheduling a Sprinto sprint with Carl-bot

Use the `autofeeds silent` command:

example:

{{<slash carl="true" name="autofeeds silent" key0="duration" val0="24h" key1="message" val1="<@421646775749967872> sprint in a bit for 30" >}}
{{<alts "Synonym">}}
Prefix command:

<pre>!af silent 24h &lt;@421646775749967872&gt; sprint in a bit for 30</pre>
{{</alts>}}

The autofeed message must include `<@421646775749967872>`, in both forms above. Sprinto only reads messages that mention it, so an autofeed without the mention posts on schedule and starts nothing, even with `carl` on.

You also can edit or add autofeeds, and set how often they recur, in the Carl-bot dashboard: [carl.gg](https://carl.gg/).

See Carl-bot's autofeed documentation for more:

- [https://docs.carl.gg/utilities/announcements/](https://docs.carl.gg/utilities/announcements/)

## Notes

- In each Discord channel where you might schedule a sprint, be sure the `carl` setting is on:

{{<atsprinto "settings carl on">}}
{{<alts "Synonym">}}
{{<slash name="settings channel">}}
{{</alts>}}

- When you're composing a message for Carl-bot to send `<@421646775749967872>` becomes `@Sprinto`. Writing it in long form with Sprinto's ID like this is more reliable than just typing `@Sprinto`
- Set your time zone via the dashboard at [carl.gg](https://carl.gg/)
- Sprinto will not prevent someone starting another sprint which conflicts with Carl-scheduled sprints.
- When running chain sprints (back to back sprints) via Carl-bot, be mindful of the "endtime" needed to finish up each one. Setting it manually makes things more predictable, and it's worth leaving another minute between sprints so they don't overlap. For example, this sprint gives 5 minutes for word counts: `sprint in 2 for 15 endtime 5`
- Please don't abuse the bots. Don't, for example, schedule very large numbers of sprints that you don't intend for anyone to join. Abuse may lead to your account and/or your Discord server being barred from using Sprinto.
- Reminder-bot doesn't work for this, because Sprinto can't see its webhook-style reminder messages. If you'd like to use a different scheduling bot, suggest it with {{<slashembed name="feedback">}}.

## See also
- [Admin commands]({{<relref "admin" >}})
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings, including `carl`
- [Sprint (all options)]({{<relref "sprint" >}}) — complete sprint options guide, including chains
