---
title : "Ping me"
description: "Commands to get mentioned or not at the start of sprints"
lead: "After a sprint, participants will be tagged (@mentioned) at the start of three future sprints. Use /pingme and /forgetme to turn pings on and off."
---

## Overview

Only people who've actually asked to be pinged get the @mention when a sprint starts. Everyone who joined is still listed on the scoreboard, just quietly, without a mention.

If you miss three sprints, or use {{<slashembed name="forgetme" >}} or {{<slashembed name="sneak-away" >}}, the pings will stop.

Use {{<slashembed name="pingme" >}} to be mentioned when the next sprint starts, even if you haven't sprinted recently (or to change your mind after {{<slashembed name="forgetme" >}} or setting yourself to never).

You can also choose to never or always receive pings at the start of sprints with {{<atsprintoembed "never" >}} and {{<atsprintoembed "always" >}}, or {{<slashembed name="pingme" key0="count" val0="never" >}} and {{<slashembed name="pingme" key0="count" val0="always" >}}.

If you leave the server, Sprinto now stops pinging you too. That didn't used to work.

## Commands

### pingme

{{<slash name="pingme" >}}
{{<atsprinto "ping me" >}}

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
     in crates/sprinto-render/src/lexicon.rs). Keep the {#always-never} id. -->
### always / never {#always-never}

{{<atsprinto always >}}
Be included in the pings at the start of all future sprints in this channel, until you change the setting again.

{{<atsprinto never >}}
Never ping you at the start of sprints, even after you've done one.

These aren't separate slash commands; use {{<slashembed name="pingme" key0="count" val0="always" >}} or {{<slashembed name="pingme" key0="count" val0="never" >}} instead.

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

These don't have slash commands of their own; use them by mentioning Sprinto.

### forgetuser

{{<atsprinto "forgetuser _user_" >}}

Replace _user_ with a Discord user ID, or a username with no `@` at the start. Stops that person getting pinged at the start of sprints, as if they'd used {{<slashembed name="forgetme" >}} themselves.

If you can't see someone's user ID, turn on "Developer Mode" in Discord's settings, then "Copy ID" will appear when you right-click their name.

### pinguser

{{<atsprinto "pinguser _user_ _number_" >}}

Replace _user_ with the user's name or ID. Replace _number_ with the number of sprints; default is 3, use `0` for never, `1000` for always.

Example:
{{<atsprinto "pinguser Pengo 3" >}}

Turns pings on for Pengo, as if they'd used {{<slashembed name="pingme" >}} themselves.

## Ping roles

{{<tag-admin>}}

Always pinging a role at the start of sprints, rather than individual people, is now part of {{<slash name="settings roles" >}}, a native Discord picker, rather than a typed command. See [Ping roles]({{<relref "ping-roles" >}}) for the full picture.

<!--
## Todo

* (TODO) guild or channel default number of pings
* (TODO) time-based, e.g. `/pingme for 15 hrs` or `/forgetme for 8 hrs`
-->

## See also

- [Ping roles (admin)]({{<relref "ping-roles" >}}) — Set up a role to always be pinged
