---
title : "Sprint channels"
description: Choosing which channels sprints can run in
lead: 
url: "docs/allowed-channels"
---

By default sprints work in every channel Sprinto can post in. If that's not what you want, you can name the channels where sprints belong, and Sprinto will turn them down everywhere else.

{{<slash name="settings sprint-channels" >}}

That opens a native Discord channel picker. Choose the channels sprints are allowed in and save. Anyone can open it and see the list; changing it needs an {{<tag-admin>}}, that is a {{<role "@Sprint Admin">}}, a server administrator, or the server owner.

## How the list behaves

* **An empty list means sprints work anywhere.** That's the default, and it's not a mistake. You only need this command if you want sprints restricted.
* Once the list has anything in it, {{<slashembed name="sprint">}} in any other channel is refused, and the person is pointed at the channels that do allow it.
* Take everything back off the list and you're back to sprints working anywhere.
* **DMs always work**, whatever the list says.

Sprinto has no concept of secret or hidden channels. When it points someone at an allowed channel it will name that channel even if they can't see it.

Alternatively you can use Discord's own permissions and stop Sprinto reading or posting in the channels it shouldn't appear in. That works, but you may also have to take command permissions away from members in those channels, so the picker above is usually less fiddly.

## Text forms

The old underscore commands still work if they're in your muscle memory or your server's pins:

{{<atsprinto "set_sprinting_channel_here" >}}
{{<atsprinto "unset_sprinting_channel_here" >}}
{{<atsprinto "clear_allowed_channels" >}}

They act on the channel you type them in, and clearing empties the list so sprints work anywhere again. The picker does the same job in one go, so it's the better habit.

<!-- Previously named "/setup-reset-sprinting-channels" but sometimes people accidentally used that command because it had "sprint" in it. Also: @sprinto reset_sprinting_channels -->

## See also

* [Overview of Help]({{<relref "overview" >}})
* [Settings]({{<relref "settings" >}}): everything else you can configure
* [Setup]({{< relref "setup" >}}) (setting up Sprinto)
* [Admin commands]({{<relref "admin" >}})
