---
title : "Carl-bot x Sprinto"
description: "Scheduling sprints more than an hour ahead, or on a repeating timetable, with Carl-bot"
lead: "Use Carl-bot to start Sprinto sprints more than an hour or two ahead, or on a repeating timetable, such as every day at 8pm."
identifier: "carlbot"
---

Use Carl-bot to start Sprinto sprints more than an hour or two ahead, or on a repeating timetable, such as every day at 8pm. Carl-bot posts a message at the time you schedule, and that message starts the sprint.

NOTE: Carl-bot is not associated with Sprinto. It's a popular Discord bot, developed independently of Sprinto.

## Do you need Carl-bot?

Sprinto can do the following without another bot:

| To do this | Use |
|---|---|
| Start at a clock time, up to 50 minutes ahead | {{<slashembed name="sprint" key0="options" val0="at 14:30">}} after you set your time zone with `/timezone`. A minute mark like `at :30` (the next half past) works without a time zone. |
| Start after a wait, up to 60 minutes ahead | {{<slashembed name="sprint" key0="options" val0="in 45 for 20">}} |
| Run sprints back to back, up to 8 rounds | {{<slashembed name="sprint" key0="options" val0="pomo x4">}} or `25 then 50 then 15`. See [Chain sprints]({{<relref "chains" >}}). |
| Run the last sprint again | {{<slashembed name="sprint" key0="options" val0="again">}}, or `again chain` for a whole chain |

Add `please` to the options to raise these limits: a clock-time start up to 90 minutes ahead, and a wait up to 90 minutes, or 2 hours for a Sprint MC. Sprinto forgets the last sprint when it restarts, so `again` can't repeat a sprint from before a restart.

For a sprint further ahead than that, or on a repeating timetable, use Carl-bot.

## Setup

1. [Invite Sprinto]({{< relref "invite" >}}) to your server.

2. Invite Carl-bot to your server by clicking "+ Invite" at [carl.gg](https://carl.gg/).

   Tip: Sign in at discord.com in your browser first, or the invite link won't work. You can also copy the invite link, paste it into a message in Discord, and click it there.

   Tip: Carl-bot doesn't need any special permissions to work with Sprinto. If you don't use Carl-bot for anything else, you can remove almost all of its permissions.

3. Turn on **Listen to Carl-bot**. Sprinto ignores messages from other bots until this setting is on. You need to be a Sprint Admin or a server admin to change it.

   - For the whole server, use {{<slashembed name="settings server">}}.
   - For one channel, use {{<slashembed name="settings channel">}} in that channel.

   In the panel, pick **Listen to Carl-bot** from the **Add a setting** list, then click the button until it says **Listen to Carl-bot: On**.

   {{< buttons >}}
   {{< button "Listen to Carl-bot: On" >}}
   {{< /buttons >}}

   You can also type {{<atsprintoembed "settings carl on">}} in a channel to turn the setting on for that channel.

Now you're ready to schedule a sprint with Carl-bot.

## Scheduling a Sprinto sprint with Carl-bot

Use Carl-bot's `autofeeds silent` command. For example:

{{<slash carl="true" name="autofeeds silent" key0="duration" val0="24h" key1="message" val1="<@421646775749967872> sprint in a bit for 30" >}}
{{<alts "Synonym">}}
Prefix command:

<pre>!af silent 24h &lt;@421646775749967872&gt; sprint in a bit for 30</pre>
{{</alts>}}

When Carl-bot posts this message, Sprinto starts a 30-minute sprint 2½ to 7½ minutes later.

The message must start with `<@421646775749967872>`. That's Sprinto's mention written out in full, and Discord shows it as `@Sprinto`. Sprinto only reads a message that starts with its mention. If you type `@Sprinto` in Carl-bot's message, it's likely to become plain text or the {{<role "@Sprinto">}} role, and Sprinto ignores it.

One message can start a whole chain of sprints. For example, `<@421646775749967872> sprint pomo x4` or `<@421646775749967872> sprint in 2 for 15 x4`. Sprinto times the rounds itself, so they don't overlap. See [Chain sprints]({{<relref "chains" >}}).

You can edit or add autofeeds, and set how often they repeat, in the Carl-bot dashboard at [carl.gg](https://carl.gg/).

For more, see [Carl-bot's autofeed documentation](https://docs.carl.gg/utilities/announcements/).

## Notes

- **Listen to Carl-bot** must be on in each channel where Carl-bot starts sprints, either for that channel or for the whole server.
- Set the time zone for Carl-bot's autofeeds in Carl-bot's dashboard at [carl.gg](https://carl.gg/). Your Sprinto `/timezone` doesn't change Carl-bot's times.
- Only one sprint runs in a channel at a time. If a sprint is already running when Carl-bot's message arrives, Carl-bot's sprint doesn't start, and Sprinto replies that a sprint is already running.
- From Carl-bot, Sprinto accepts only commands that start a sprint, and `leave`. Sprinto ignores joins, word counts and other commands from Carl-bot.
- The old `@Sprinto setListenToCarl on` command is gone. If you type it, Sprinto replies: "That command is gone. The settings are now in `/settings channel` for this channel, or `/settings server` for the whole server."
- Please don't abuse the bots. Don't, for example, schedule very large numbers of sprints that you don't intend for anyone to join. Abuse may lead to your account and/or your Discord server being barred from using Sprinto.
- Reminder-bot doesn't work for this purpose, because Sprinto can't see its webhook-style reminder messages. If you'd like to use a different scheduling bot, suggest it with {{<slashembed name="feedback">}}.

## See also

- [Admin commands]({{<relref "admin" >}})
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings, including `carl`
- [Chain sprints]({{<relref "chains" >}}): several sprints in a row from one command
- [Sprint (all options)]({{<relref "sprint" >}}) — complete sprint options guide
