---
title : "Ping me"
description: "Commands to get mentioned or not at the start of sprints"
lead: "After a sprint, participants will be tagged (@mentioned) at the start of three future sprints. Use /pingme and /forgetme to turn pings on and off."
---

## Overview

Joining a sprint signs you up for pings at the start of the next 3 sprints in that channel, unless an admin has turned `autopings` off there. Only people on that list get the @mention; everyone else in the sprint is still listed by name, just quietly.

If you miss three sprints, or use {{<slashembed name="forgetme" >}} or {{<slashembed name="sneak-away" >}}, the pings will stop.

When sprints are announced, Sprinto gives 📢 Pings to previous sprinters. This also includes people who have opted in to always get pings.

Use {{<slashembed name="pingme" >}} to be mentioned when the next sprint starts, even if you haven't sprinted recently (or to change your mind after {{<slashembed name="forgetme" >}} or setting yourself to "never").

You can also choose to never or always receive pings at the start of sprints in this channel, with {{<slashembed name="pings-never" >}} and {{<slashembed name="pings-always" >}}.

Pings are only for the one channel.

## Commands

### pingme

{{<slash name="pingme" >}}
{{<atsprinto "pingme" >}}

Sprinto will ping you at the start of the next 3 sprints in this channel.

{{<slash name="pingme" key0="count" val0="10" >}}

Choose how many sprints to be pinged at the start of (e.g. `1`, `10`, `100`). The `count` option also takes `always` or `never`, same as the commands below.

### forgetme

{{<slash name="forgetme" >}}
{{<atsprinto "forget me" >}}

Sprinto won't ping you at the start of sprints until after you join another one.

### sneak-away

{{<slash name="sneak-away" >}}
{{<atsprinto "sneak away" >}}

Sneak away like a ninja. Leave the current sprint if you've joined, and Sprinto won't ping you at the start of sprints until after you join another one. This command's response is only seen by you. Equivalent of using both {{<slashembed name="leave" >}} and {{<slashembed name="forgetme" >}} together, but "ephemeral" (visible only to you).

<!-- The bot deep-links here from /help always and /help never (help_always_never
     in crates/sprinto-render/src/lexicon.rs). Keep the {#always-never} id, whatever
     the heading says. -->
### pings-always / pings-never {#always-never}

{{<slash name="pings-always" >}}
{{<atsprinto always >}}

Be included in the pings at the start of all future sprints in this channel, until you change the setting again.

{{<slash name="pings-never" >}}
{{<atsprinto never >}}

Never ping you at the start of sprints in this channel, even after you join one. {{<slashembed name="pingme" >}} undoes it.

{{<slashembed name="pingme" key0="count" val0="always" >}} and {{<slashembed name="pingme" key0="count" val0="never" >}} do the same thing.

### pings-status

{{<slash name="pings-status" >}}
{{<atsprinto pingstatus >}}

Check your ping status. The answer is for the channel you ask in, and only you see it:

{{< reply ephemeral="1" >}}
I'll ping you at the start of the next 3 sprint(s) here.
{{< /reply >}}

The other answers you can get are `your pings are off`, `I'll ping you at the start of every sprint here.` if you've set yourself to always, and `I've stopped pinging you at the start of sprints. Join a sprint to re-arm them.` once your three have run out. After {{<slashembed name="forgetme" >}} it tells you both halves, the state now and the state you'd go back to, like `Your pings are off until you join a sprint; then: I'll ping you at the start of the next 3 sprint(s) here.`

## Regular pings by humans

Separate to Sprinto, servers often have a self-service @sprinters role to announce upcoming sprints. This can be more friendly and organic than relying on Sprinto's pings.

However you can also have Sprinto always ping a role at the start of sprints in a channel with ping roles. (see below)

## Starting a sprint without pinging anyone

{{<slash name="sprint" key0="options" val0="for 20 quietly" >}}
{{<atsprinto "sprint for 5 quiet" >}}

Add `quietly` or `noping` and the sprint starts without mentioning any role or any user. Handy for testing a command, or for sprinting quietly by yourself while everyone else is asleep. Anyone can use it.

## Sprint MC-only commands

{{<tag-mc>}}

### forget-user

{{<slash name="admin-forget-user" key0="user" val0="_user_" >}}
{{<atsprinto "forgetuser _user_" >}}

Replace _user_ with a mention of them, or their Discord user ID. A plain username won't work. Stops that person getting pinged at the start of sprints, as if they'd used {{<slashembed name="forgetme" >}} themselves. Only you see the slash command's reply.

If you can't see someone's user ID, turn on "Developer Mode" in Discord's settings, then "Copy ID" will appear when you right-click their name.

### ping-user

{{<atsprinto "pinguser _user_ _number_" >}}

This one isn't a slash command; mention Sprinto to use it.

Replace _user_ with a mention of them, or their Discord user ID. A plain username won't work. Replace _number_ with the number of sprints; default is 3, use `0` for never, `1000` for always.

Example:
{{<atsprinto "pinguser <@1234567890> 3" >}}

Turns pings on for that person, as if they'd used {{<slashembed name="pingme" >}} themselves.

## Ping roles

{{<tag-admin>}}

You can set your server or channel to always ping a role at the start of sprints with:

 {{<slash name="settings roles" >}}

{{<alts "Synonyms" >}}
The typed commands still work: {{<atsprintoembed "pingroles" >}} lists the roles, and `pingroles add @role`, `pingroles remove @role` and `pingroles reset` change them.
{{</alts>}}

Ping roles notes

* Ping roles are **per channel**. If you want the same role pinged in three sprint channels, run {{<slashembed name="settings roles">}} in each of them.
* You can pick several roles, and different channels can use different combinations.
* Sprinto doesn't give these roles to anyone. It only mentions roles that already exist. Setting up a self-assignable {{<role "@Sprinters">}} role is a job for Discord or another bot.
* This is only about the mention at the *start* of a sprint. Anyone who has joined a sprint gets mentioned by name during that sprint.

If you'd rather the ping roles were the only thing pinged, turn off `auto-pings` for the channel, so joining a sprint no longer signs anyone up for future pings:

{{<atsprinto "settings auto-pings off" >}}

That's also available in the panel under {{<slashembed name="settings channel">}}. See [Settings]({{<relref "settings" >}}).

Turning `auto-pings` off doesn't clear the pings people have gained or set up already. To wipe those, as if everyone in the channel had typed {{<slashembed name="forgetme">}}:

{{<slash name="admin-forget-all-users" >}} {{<tag-admin>}}
{{<alts>}}
{{<atsprinto "forget_all_users" >}}
{{</alts>}}

Individual sprinters can still opt in for themselves at any time with {{<slashembed name="pingme">}}, whatever `auto-pings` is set to, and ping roles are honoured either way.

## Feedback

- If you'd like to see Sprinto's pings get a revamp, send your suggestions with `/feedback`

## See also

- [Ping roles (admin)]({{<relref "ping-roles" >}}) — Set up a role to always be pinged
