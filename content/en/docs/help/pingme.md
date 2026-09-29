---
title : "Ping me"
description: "Commands to get mentioned or not at the start of sprints"
aliases: ["/docs/ping-roles/"]
lead: "Joining a sprint signs you up to be pinged at the start of the next 3 sprints in that channel. Use /pingme and /forgetme to turn these pings on and off."
url: "docs/ping-me"
---

## Overview

Joining a sprint signs you up to be pinged at the start of the next 3 sprints in that channel, unless a Sprint Admin has turned **Auto pings** off there. Each sprint you join resets the count to 3.

The pings stop when 3 sprints go by without you joining, or when you use {{<slashembed name="forgetme" >}} or {{<slashembed name="sneak-away" >}}. Joining another sprint turns them back on.

Pings are for one channel only.

Sprinto sometimes adds this line under the results: "Participants may be tagged at the start of future sprints (automatically stops after 3 missed). `/forgetme` if you don't want to be included."

To be pinged without joining a sprint first, use {{<slashembed name="pingme" >}}. To be pinged for every sprint in a channel, or never, use {{<slashembed name="pings-always" >}} or {{<slashembed name="pings-never" >}}.

### Who gets mentioned, and when

* When a sprint is announced (or when it starts, if it has no join window), the "📢 Pings:" line mentions the channel's [ping roles](#ping-roles) and everyone signed up for pings who hasn't joined yet. Anyone who has already joined is listed there without a notification.
* Someone on their last ping is marked, for example "📢 Pings: @Kim (last ping), @Sam". People whose pings are running out are listed first. People set to always have no mark.
* When the sprint starts, the "📣 Participants:" line mentions everyone who joined. The same happens at time's up.
* The results list everyone by name, without a notification.

### In channels where sprints aren't allowed

If your server has a list of [sprint channels]({{<relref "whitelist" >}}), you can only sign up for pings in those channels. Anywhere else, {{<slashembed name="pingme" >}}, {{<slashembed name="pings-always" >}}, {{<slashembed name="pings-status" >}}, `@Sprinto pinguser` and `@Sprinto pingroles add` reply "Sorry, you can only subscribe to pings in: #writing-sprints".

Stopping pings with {{<slashembed name="forgetme" >}}, {{<slashembed name="pings-never" >}}, {{<slashembed name="sneak-away" >}} or `/pingme count:never` works in any channel.

## Commands

### pingme

{{<slash name="pingme" >}}
{{<atsprinto "pingme" >}}

Sprinto pings you at the start of the next 3 sprints in this channel, even if you haven't sprinted recently. It also undoes {{<slashembed name="forgetme" >}} and {{<slashembed name="pings-never" >}}.

{{< reply >}}
OK, I'll ping you at the start of the next 3 sprints.
{{< /reply >}}

{{<slash name="pingme" key0="count" val0="10" >}}
{{<atsprinto "pingme 10" >}}

Be pinged at the start of the next 10 sprints, or any other number of sprints, such as `1` or `100`. `0` or a negative number means never, and a number over 1000 means always. The `count` option also takes `always` or `never`, the same as [the commands below](#always-never).

{{< reply >}}
OK, I'll let you know at the start of the next 10 sprints.
{{< /reply >}}

### forgetme

{{<slash name="forgetme" >}}
{{<atsprinto "forget me" >}}

Sprinto stops pinging you at the start of sprints in this channel until you join another sprint.

{{< reply >}}
OK, I won't tag you when the next sprint starts in this room.
{{< /reply >}}

### sneak-away

{{<slash name="sneak-away" >}}
{{<atsprinto "sneak-away" >}}

Sneak away like a ninja. Leave the current sprint, if you've joined one, and stop your pings until you join another sprint. It's the same as using {{<slashembed name="leave" >}} and {{<slashembed name="forgetme" >}} together, except that only you see the reply:

{{< reply ephemeral="1" >}}
You have left the sprint and you won't receive a notification for the next sprint.
{{< /reply >}}

<!-- The bot deep-links here from /help always and /help never (help_always_never
     in crates/sprinto-render/src/lexicon.rs). Keep the {#always-never} id, whatever
     the heading says. -->
### pings-always / pings-never {#always-never}

{{<slash name="pings-always" >}}
{{<atsprinto always >}}

Be pinged at the start of every sprint in this channel, until you change the setting again.

{{< reply >}}
OK, I'll ping you at the start of every sprint here.
{{< /reply >}}

{{<slash name="pings-never" >}}
{{<atsprinto never >}}

Never be pinged at the start of sprints in this channel, even after you join one. {{<slashembed name="pingme" >}} undoes it.

{{< reply >}}
OK, I won't ever tag you for sprints here again. `/pingme` to undo.
{{< /reply >}}

{{<slashembed name="pingme" key0="count" val0="always" >}} and {{<slashembed name="pingme" key0="count" val0="never" >}} do the same thing.

If someone set to always, or to many more than 3 pings, leaves the server, Sprinto eventually notices and stops pinging them. Their pings come back if they return and join a sprint. Shorter counts run out on their own.

### pings-status

{{<slash name="pings-status" >}}
{{<atsprinto pingstatus >}}

Check your ping status. The answer is for the channel you ask in, and only you see it:

{{< reply ephemeral="1" >}}
I'll ping you at the start of the next 3 sprint(s) here.
{{< /reply >}}

Other answers you can get:

* "I'll ping you at the start of every sprint here." if you're set to always.
* "I've stopped pinging you at the start of sprints. Join a sprint to re-arm them." once your pings have run out.
* "Your pings are off until you join a sprint; then: I'll ping you at the start of the next 3 sprint(s) here." after {{<slashembed name="forgetme" >}}, or if you've never joined a sprint in this channel.
* "your pings are off"

## Let people who are interested in sprinting know about sprints

If you're hosting a series of sprints, make sure you have a way to ping people and let them know.

Servers often have a self-service {{<role "@sprinters">}} role so people interested in sprinting can be pinged by anyone hosting sprints. A role like this can be set up without the help of Sprinto.

Sprinto's automatic pings only reach people who joined a recent sprint in the channel. Other people who are interested won't be pinged, so let them know another way.

To have Sprinto ping a role at the start of every sprint in a channel, set up [ping roles](#ping-roles).

## Starting a sprint without pinging roles or signed-up people

{{<slash name="sprint" key0="options" val0="for 20 quietly" >}}
{{<atsprinto "sprint for 5 quiet" >}}

Add `quietly` (or `quiet`, `silent`) or `noping` (or `nopings`) to leave out the "📢 Pings:" line. Sprinto doesn't mention the ping roles or anyone signed up for pings. People who join the sprint are still mentioned when it starts and at time's up.

Anyone can use it. It's handy for testing a command, or for sprinting by yourself while everyone else is asleep. On servers with the [voice]({{<relref "voice" >}}) beta, `quiet` also keeps Sprinto out of voice.

## Sprint MC-only commands

{{<tag-mc>}}

### forget-user

{{<slash name="admin-forget-user" key0="user" val0="_user_" >}}
{{<atsprinto "forgetuser _user_" >}}

Stop pinging someone at the start of sprints in this channel, as if they'd used {{<slashembed name="forgetme" >}} themselves. Replace _user_ with a mention of them, or their Discord user ID. A plain username won't work.

{{< reply ephemeral="1" >}}
OK, I won't tag {{< mention "Kim" >}} in future sprints.
{{< /reply >}}

Only you see the slash command's reply. If Sprinto can't find the person, it replies "User not found or ID not valid."

If you can't see someone's user ID, turn on "Developer Mode" in Discord's settings, then "Copy ID" will appear when you right-click their name.

### ping-user

{{<atsprinto "pinguser _user_ _number_" >}}

Turn on pings for someone, as if they'd used {{<slashembed name="pingme" >}} themselves. This one isn't a slash command; mention Sprinto to use it.

Replace _user_ with a mention of them, or their Discord user ID. A plain username won't work. Replace _number_ with the number of sprints. Leave it out for 3, use `0` for never, and `1000` or more for always.

Examples:
{{<atsprinto "pinguser @Kim 3" >}}
{{<atsprinto "pinguser <@1234567890> 3" >}}

{{< reply >}}
OK, I'll let {{< mention "Kim" >}} know at the start of the next 3 sprints.
{{< /reply >}}

## Ping roles

{{<tag-admin>}}

To ping a role at the start of every sprint in a channel, run this in that channel:

 {{<slash name="settings roles" >}}

The role picker ("Choose roles to ping at sprint start") takes up to 25 roles, and the list is saved when you close it. Anyone can open it to see the list; only a Sprint Admin can change it.

{{<alts "Synonyms" >}}
The typed commands still work: {{<atsprintoembed "pingroles" >}} lists the roles, and `pingroles add @role`, `pingroles remove @role` and `pingroles reset` change them. The reply lists the roles, for example "Roles to always mention at the start of sprints in this channel: @Sprinters", with "OK." in front after a change. If Sprinto can't read the mention as a role, it replies "Sorry, couldn't find that role."
{{</alts>}}

Ping roles notes

* Ping roles are **per channel**. If you want the same role pinged in three sprint channels, run {{<slashembed name="settings roles">}} in each of them.
* You can pick several roles, and different channels can use different combinations.
* Sprinto doesn't give these roles to anyone. It only mentions roles that already exist. Setting up a self-assignable {{<role "@AlwaysPingMe">}} role is a job for Discord or another bot.
* Ping roles are mentioned only when a sprint is announced. People who join are mentioned by name when the sprint starts and at time's up.
* Each sprinter can also sign up for every sprint in a channel with {{<slashembed name="pings-always">}}, without a ping role.

If you'd rather the ping roles were the only thing pinged, turn off `auto-pings` for the channel, so joining a sprint no longer signs anyone up for future pings:

{{<atsprinto "settings auto-pings off" >}}

That's also the **Auto pings** row in {{<slashembed name="settings channel">}}. See [Settings]({{<relref "settings" >}}).

Turning `auto-pings` off doesn't clear the pings people have gained or set up already. To wipe those, as if everyone in the channel had typed {{<slashembed name="forgetme">}}:

{{<slash name="admin-forget-all-users" >}} {{<tag-admin>}}
{{<alts>}}
{{<atsprinto "forget_all_users" >}}
{{</alts>}}

{{< reply ephemeral="1" >}}
OK, All users forgotten in this channel. No one will be pinged for the next sprint.
{{< /reply >}}

Only you see the slash command's reply.

Individual sprinters can still opt in for themselves at any time with {{<slashembed name="pingme">}}, whatever `auto-pings` is set to, and ping roles are honoured either way.

## Feedback

- If you'd like to see Sprinto's pings get a revamp, send your suggestions with `/feedback`

## See also

- [Settings]({{<relref "settings" >}}) — every setting, including `auto-pings`
- [Sprint channels]({{<relref "whitelist" >}}): choose which channels sprints and ping sign-ups work in
