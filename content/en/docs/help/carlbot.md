---
title : "Carl-bot x Sprinto"
description: "Chaining sprints, and scheduling them further ahead with Carl-bot"
lead:
---

## Scheduling further ahead with Carl-bot

NOTE: Carl-bot is not associated with Sprinto. This is here to help you extend Sprinto beyond what it does natively, using a popular Discord bot developed independently of Sprinto.

## Setup

1. [Invite Sprinto]({{< relref "invite" >}}) to your server

1. Invite Carl-bot to your Discord server by clicking "+ Invite" at [carl.gg](https://carl.gg/)

  Tip: Be sure you're logged in at discord.com on your browser for the invite link to work. Alternatively, you can copy the invite link and paste it into a message in Discord and then click on the message.

  Tip: Carl-bot does not require any special permissions to interact with Sprinto. So, if you're not using Carl-bot for other purposes, you can remove almost all his permissions.

1. By default Sprinto ignores messages from other bots, so turn on the `listen to carl` setting across your server, or for the channels carl-bot will be used:

{{<slash name="settings server">}}

Add the setting: "Listen to Carl-bot" and click it so it says "Listen to Carl-bot: On"

Now you're ready to schedule a sprint via Carl-bot.

## Scheduling a Sprinto sprint with Carl-bot

Use the `autofeeds silent` command:

example:

{{<slash carl="true" name="autofeeds silent" key0="duration" val0="24h" key1="message" val1="<@421646775749967872> sprint in a bit for 30" >}}
{{<alts "Synonym">}}
Prefix command:

<pre>!af silent 24h &lt;@421646775749967872&gt; sprint in a bit for 30</pre>
{{</alts>}}

The autofeed message must include `<@421646775749967872>`, which turns into an `@Sprinto` when displayed in Discord.

You also can edit or add autofeeds, and set how often they recur, in the Carl-bot dashboard: [carl.gg](https://carl.gg/).

See Carl-bot's autofeed documentation for more:

- [https://docs.carl.gg/utilities/announcements/](https://docs.carl.gg/utilities/announcements/)

## Notes

- In each Discord channel where you might schedule a sprint, be sure the `Listen to Carl-bot` setting is on, or otherwise it's on for the server:

{{<slash name="settings server">}}

- When you're composing a message for Carl-bot to say, `<@421646775749967872>` becomes `@Sprinto`. Writing it in long form with Sprinto's ID as digits like this is more reliable than just typing `@Sprinto`, which will likely be ignored.
- Set your time zone via the dashboard at [carl.gg](https://carl.gg/)
- Sprinto will not prevent someone starting another sprint which conflicts with Carl-scheduled sprints.
- When running chain sprints (back to back sprints) via Carl-bot, be mindful of the "endtime" needed to finish up each one. Setting it manually makes things more predictable, and it's worth leaving another minute between sprints so they don't overlap. For example, this sprint gives 5 minutes for word counts: `sprint in 2 for 15 endtime 5`
- Please don't abuse the bots. Don't, for example, schedule very large numbers of sprints that you don't intend for anyone to join. Abuse may lead to your account and/or your Discord server being barred from using Sprinto.
- Reminder-bot doesn't work for this purpose, because Sprinto can't see its webhook-style reminder messages. If you'd like to use a different scheduling bot, suggest it with {{<slashembed name="feedback">}}.

## See also

- [Admin commands]({{<relref "admin" >}})
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings, including `carl`
- [Sprint (all options)]({{<relref "sprint" >}}) — complete sprint options guide, including chain sprints
