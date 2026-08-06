---
title : "Ping roles"
description: always ping role commands
lead: "Always ping a role at sprint start"
---

You can have Sprinto mention a role every time a sprint starts in a channel.

If people on your server can give themselves roles, say with another bot, you might have a {{<role "@Sprinters">}} role and want everyone wearing it to hear about a new sprint. That's what this is for.

{{<slash name="settings roles" >}}

That opens a native Discord role picker. Tick the roles you want mentioned at the start of every sprint in this channel, and save.

Anyone can open it and read the list. Changing it needs an {{<tag-admin>}}, that is a {{<role "@Sprint Admin">}}, a server administrator, or the server owner.

Above the picker Sprinto lists the {{<role "@Active Sprinters">}}, {{<role "@Sprint MC">}} and {{<role "@Sprint Admin">}} roles it has matched by name on your server, or `not found` for any that don't exist. That part is read only.

Once a channel has picked roles of its own, a **Reset to server default** button appears under the picker.

## Notes

* Ping roles are **per channel**. If you want the same role pinged in three sprint channels, run {{<slashembed name="settings roles">}} in each of them.
* You can pick several roles, and different channels can use different combinations.
* Sprinto never gives anyone a role, or creates one, or edits one. It only mentions roles that already exist. Setting up a self-assignable {{<role "@Sprinters">}} role is a job for Discord or another bot.
* This is only about the mention at the *start* of a sprint. Anyone who has joined a sprint gets mentioned by name during that sprint regardless.

## How this works with individual pings

Sprinto also tracks who's been sprinting lately and pings those people too, on top of any roles you've chosen. The two don't cancel each other out.

If you'd rather the role were the only thing pinged, turn off `auto-pings` for the channel, so joining a sprint no longer signs anyone up for future pings:

{{<atsprinto "settings auto-pings off" >}}

That's also available in the panel under {{<slashembed name="settings channel">}}. See [Settings]({{<relref "settings" >}}).

Turning `auto-pings` off doesn't clear the pings people have already earned. To wipe those, as if everyone in the channel had typed {{<slashembed name="forgetme">}}:

{{<slash name="admin-forget-all-users" >}} {{<tag-admin>}}
{{<alts>}}
{{<atsprinto "forget_all_users" >}}
{{</alts>}}

Only you see the slash command's reply.

Individual sprinters can still opt in for themselves at any time with {{<slashembed name="pingme">}}, whatever `auto-pings` is set to, and ping roles are honoured either way.

## Starting a sprint without pinging anyone

{{<slash name="sprint" key0="options" val0="for 20 noping" >}}
{{<atsprinto "sprint for 5 noping" >}}

Add `noping` and the sprint starts without mentioning any role or any user. Handy for testing a command, or for sprinting quietly by yourself while everyone else is asleep. Anyone can use it.

## See also

* [pingme]({{<relref "pingme" >}}): controlling mentions for the next sprint
* [Settings]({{<relref "settings" >}}): everything else you can configure
* [Admin commands]({{<relref "admin" >}}): about the {{<tag-admin>}} and {{<tag-mc>}} roles
