---
title : "Ping me"
description: "Commands to get mentioned or not at the start of sprints"
lead: "After a sprint, participants will be tagged (@mentioned) at the start of three future sprints. Use /pingme and /forgetme to turn pings on and off."
---

## Overview

Joining a sprint signs you up for pings at the start of the next 3 sprints in that channel, unless an admin has turned `autopings` off there. Only people on that list get the @mention; everyone else in the sprint is still listed by name, just quietly.

If you miss three sprints, or use {{<slashembed name="forgetme" >}} or {{<slashembed name="sneak-away" >}}, the pings will stop.

The 📢 Pings line at the start of a sprint lists the people closest to running out first, and marks someone's last remaining ping `(last ping)`. Any ping role, and the person who started the sprint if they haven't joined it, come before them.

Use {{<slashembed name="pingme" >}} to be mentioned when the next sprint starts, even if you haven't sprinted recently (or to change your mind after {{<slashembed name="forgetme" >}} or setting yourself to never).

You can also choose to never or always receive pings at the start of sprints in this channel, with {{<slashembed name="pings-never" >}} and {{<slashembed name="pings-always" >}}.

If you leave the server, Sprinto now stops pinging you too. That didn't used to work.

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

## Sprint MC-only commands

{{<tag-mc>}}

### forgetuser

{{<slash name="admin-forget-user" key0="user" val0="_user_" >}}
{{<atsprinto "forgetuser _user_" >}}

Replace _user_ with a mention of them, or their Discord user ID. A plain username won't work. Stops that person getting pinged at the start of sprints, as if they'd used {{<slashembed name="forgetme" >}} themselves. Only you see the slash command's reply.

If you can't see someone's user ID, turn on "Developer Mode" in Discord's settings, then "Copy ID" will appear when you right-click their name.

### pinguser

{{<atsprinto "pinguser _user_ _number_" >}}

This one isn't a slash command; mention Sprinto to use it.

Replace _user_ with a mention of them, or their Discord user ID. A plain username won't work. Replace _number_ with the number of sprints; default is 3, use `0` for never, `1000` for always.

Example:
{{<atsprinto "pinguser <@221579760545955840> 3" >}}

Turns pings on for that person, as if they'd used {{<slashembed name="pingme" >}} themselves.

## Ping roles

{{<tag-admin>}}

Always pinging a role at the start of sprints, rather than individual people, is part of {{<slash name="settings roles" >}}, a native Discord picker. The typed commands still work: {{<atsprintoembed "pingroles" >}} lists the roles, and `pingroles add @role`, `pingroles remove @role` and `pingroles reset` change them. See [Ping roles]({{<relref "ping-roles" >}}) for the full picture.

## See also

- [Ping roles (admin)]({{<relref "ping-roles" >}}) — Set up a role to always be pinged
