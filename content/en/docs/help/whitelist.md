---
title : "Sprint channels"
description: Choosing which channels sprints can run in
lead: "By default, sprints run in every channel Sprinto can post in. A Sprint Admin can limit them to a list of channels."
url: "docs/allowed-channels"
---

{{<slash name="settings sprint-channels" >}}

Choose the channels sprints can run in from the channel picker. The list is saved when you close the picker; there's no save button. The list holds up to 25 channels.

{{< reply >}}
Sprints are allowed in: #writing-sprints, #long-sprints
{{< /reply >}}

{{<buttons>}}
{{<select "Choose channels where sprints are allowed">}}
{{</buttons>}}

Anyone can open it and see the list. Changing it needs a Sprint Admin {{<tag-admin>}}: the server owner, anyone with the Administrator or Manage Server permission, or anyone with a role named {{<role "@Sprint Admin">}}.

## How the list works

* **An empty list means sprints work in any channel.** That's the default. You only need the list if you want to keep sprints to certain channels.
* Once the list has a channel in it, {{<slashembed name="sprint">}} in any other channel is refused for everyone, Sprint MCs and Sprint Admins included. The reply names the allowed channels, for example "Sorry, you can only sprint in: #writing-sprints". With the slash command, only the person who tried sees it. With `@Sprinto sprint`, it's posted in the channel.
* Signing up for pings is refused in those channels too, with "Sorry, you can only subscribe to pings in: #writing-sprints". Stopping pings works in any channel. See [Ping me]({{<relref "pingme" >}}).
* A thread is a separate channel: it isn't covered by its parent channel being on the list.
* Remove every channel from the list, and sprints work in any channel again.

Sprinto's reply names every allowed channel, including channels the person can't see.

You can also use Discord's own permissions to stop Sprinto reading or posting in channels it shouldn't appear in. That works, but you may also have to take command permissions away from members in those channels, so the list is usually less fiddly.

## Allow a channel from its settings

In a channel that isn't on the list, {{<slashembed name="settings channel">}} shows only this:

{{< reply >}}
Sprints can't be run in this channel. Right now they run only in: #writing-sprints.
To let sprints run here, use the button below, or manage the list with /settings sprint-channels.
{{< /reply >}}

{{<buttons>}}
{{<button "Allow sprints in this channel" "success">}}
{{</buttons>}}

Only a Sprint Admin gets the button. It adds the channel to the list.

## Text forms

Anyone can see the list:

{{<atsprinto "channels" >}}

The reply lists the allowed channels, for example "Sprints are allowed in: #writing-sprints, #long-sprints", or says "Sprints are allowed in every channel." when the list is empty.

A Sprint Admin can change the list by typing one of these in a channel:

{{<atsprinto "channels add" >}}
{{<atsprinto "channels remove" >}}
{{<atsprinto "channels reset" >}}

`channels add` adds the channel you type it in, and `channels remove` removes it. The reply lists the allowed channels, for example "OK. Sprints are allowed in: #writing-sprints, #long-sprints". `channels reset` empties the list and replies "OK. Sprints are allowed in every channel again." Removing the last channel gives the same reply.

{{<alts "Synonyms" >}}
`channels add` also works as `channels set`, `channels here` or `channels allow`. `channels remove` also works as `channels unset` or `channels disallow`. `channels reset` also works as `channels clear`, `channels all` or `channels everywhere`.

The old underscore commands still work too, if they're in your muscle memory or your server's pins:

{{<atsprinto "set_sprinting_channel_here" >}}
{{<atsprinto "unset_sprinting_channel_here" >}}
{{<atsprinto "clear_allowed_channels" >}}
{{</alts>}}

<!-- Previously named "/setup-reset-sprinting-channels" but sometimes people accidentally used that command because it had "sprint" in it. Also: @sprinto reset_sprinting_channels -->

## See also

* [Overview of Help]({{<relref "overview" >}})
* [Settings]({{<relref "settings" >}}): everything else you can configure
* [Setup]({{< relref "setup" >}}) (setting up Sprinto)
* [Admin commands]({{<relref "admin" >}})
