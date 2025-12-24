---
title : "Carl-bot x Sprinto"
description: "How to schedule sprints with the help of Carl-bot"
lead:
identifier: "carlbot"
---

## Scheduling Sprints

NOTE: Carl-bot is not associated with Sprinto. I've provided this info to help you schedule sprints, to extend Sprinto's functionality beyond what it was originally designed for.

Want to scheduling sprints more than an hour in advance, or set up multiple sprints in a row? You can use Carl-bot for this purpose. Sprinto may get a built-in way in future, but for now there's Carl-bot, a popular Discord bot which is developed completely independently of Sprinto (I have nothing to do with it!)

## Setup:

1. [Invite Sprinto]({{< relref "invite" >}}) to your server

1. Invite Carl-bot to your Discord server by clicking "+ Invite" at [carl.gg](https://carl.gg/)

  Tip: Be sure you're logged in at discord.com on your browser for the invite link to work. Alternatively, you can copy the invite link and paste it into a message in Discord and then click on the message.

  Tip: Carl-bot does not require any special permissions to interact with Sprinto. So, if you're not using Carl-bot for other purposes, you can remove almost all his permissions.

1. By default Sprinto ignores messages from other bots, so tell Sprinto it's OK to listen to Carl-bot, in each sprinting channel, using one of these commands:

{{<slash name="setup-set-listen-to-carl" key0="setting" val0="On">}}
{{<atsprinto "setListenToCarl on">}}

Now you're ready to schedule a sprint via Carl-bot.

## Scheduling a Sprinto sprint with Carl-bot

Use the `autofeeds silent` command:

example:

{{<slash carl="true" name="autofeeds silent" key0="duration" val0="24h" key1="message" val1="<@421646775749967872> sprint in a bit for 30" >}}
{{<alts "Synonym">}}
Prefix command:

<pre>!af silent 24h sprint in a bit for 30
{{</alts>}}

You also can edit or add autofeeds, and set how often they recur, in the Carl-bot dashboard: [carl.gg](https://carl.gg/).

See Carl-bot's autofeed documentation for more:

- [https://docs.carl.gg/utilities/announcements/](https://docs.carl.gg/utilities/announcements/)

## Notes

- In each Discord channel where you might schedule a sprint, be sure to use:

{{<atsprinto "setListenToCarl on">}}
{{<alts Synonym>}}
{{<slash name="setup-set-listen-to-carl" key0="setting" val0="On">}}
{{</alts>}}

- When you're composing a message for Carl-bot to send `<@421646775749967872>` becomes `@Sprinto`. Writing it in long form with Sprinto's ID like this is more reliable than just typing `@Sprinto`
- Set your time zone via the dashboard at [carl.gg](https://carl.gg/)
- Sprinto will not prevent someone starting another Sprint which conflicts with Carl-scheduled sprints.
- When running chain sprints (back to back sprints), be mindful of the "end time" to finish up Sprint. You can set this manually to make it more predictable. (And you might want to give another minute between sprints to be sure they don't overlap). For example, this sprint gives 5 minutes for word counts: `sprint in 2 for 15 endtime 5`
- If you work out some commands for scheduling a nice series sprints, feel free to share it on the Sprinto discord server. I would like to add more examples or tips to this doc.
- To have Sprinto always ping a role when a new sprint is announced. Use:

  {{<slash name="setup-pingroles-set" key0="role" val0="_@role_">}}

  For more, see: [SprintAdmin: Always ping a role at sprint start]({{< relref "faq#always-ping-a-role-at-sprint-start" >}})

- Please do not abuse the bots. Don't, for example, schedule very large numbers of sprints that you don't intend for anyone to join. Abuse may lead to your account and/or your Discord server being barred from using Sprinto.

## Why only carl-bot?

I don't know any others. Unfortunately "reminder-bot" cannot be used (because Sprinto can't see its webhook-style reminder messages).

If you'd like to use a different scheduling bot, please suggest it on the Sprinto Discord or with the feedback command:

{{<slash name="feedback" key0="your-feedback" val0="Here's my suggestion for another bot for Sprinto to listen to...">}}
{{<alts Synonym>}}
{{<atsprinto "feedback Here's my suggestion for another bot for Sprinto to listen to..." >}}
{{</alts>}}

## See also
- [Admin commands]({{<relref "admin" >}})
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings, including `setup-set-listen-to-carl`
- [Sprint (all options)]({{<relref "sprint" >}}) — complete sprint options guide
