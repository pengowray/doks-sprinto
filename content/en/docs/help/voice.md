---
title : "Voice"
description: Using Sprinto in a voice channel
lead: "Voice is paused: Sprinto doesn't join voice channels at the moment."
---

## Voice is paused

Voice is paused and not available at the moment: Sprinto doesn't join voice channels on any server. There's no date for turning it back on.

Voice was live in the old bot from 2023 to 2026, but only ever enabled for around 32 servers, so this won't be a big change for most people. Servers that had voice in the old bot were carried over to the new bot.

## What voice does

When voice is on for a server, Sprinto joins the voice channel set for that server when writing starts, without playing a sound. It plays a short sound at each [chime]({{<relref "words" >}}#chimes) and a time's-up sound when time's up, then leaves about 6 seconds later. Most sprints have no chimes, so the only sound is at time's up.

Sprinto joins deafened, so it never listens. If Sprinto can't join, the sprint runs as normal.

Only Sprinto's owner can switch voice on for a server and set its voice channel. There's no command or setting for it.

To keep Sprinto out of the voice channel for one sprint, add `novc` (or `no vc`) to the sprint command, such as `/sprint 20 novc`. `quiet` turns off voice as well as pings.

## Feedback

If you'd like voice back, tell the developer with {{<slashembed name="feedback" >}}.

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
- [Setup]({{< relref "setup" >}}) (setting up Sprinto)
- [Admin commands]({{<relref "admin" >}})
