---
title : "Invite Sprinto"
description:
lead:
url: "docs/invite-sprinto"
---
## Inviting Sprinto!

## Method 1

![Image](/images/sprint-add-app.png)

If you can see Sprinto on another server, you can click Sprinto or "view profile" and invite him directly from his info with the "Add App" button.

## Method 2

Open Sprinto's invite link in Discord.

```text
https://discord.com/oauth2/authorize?client_id=421646775749967872&scope=bot&permissions=2419424576
```

1. Copy the above invite link
2. Paste it into message on Discord
3. Click it the link in the message
4. Choose the server and click Continue (see below)

![Image](/images/sprinto-invite-dialog.png)

Alternatively you can open the link in a web browser, but make sure you're logged into [discord.com/login](https://discord.com/login) on that browser first.

If you don't have permission to add bots, pass the link on to the server owner or someone who has permission to add bots, or link them here.

## What permissions does Sprinto need?

Two, really.

* **Send Messages** and **Use Application Commands**, in any channel where you want sprints. Without those he can't announce a sprint or take your commands, and that's most of what he does.
* **Manage Roles**, only if you want the {{<role "@Active Sprinters">}} role. Skip it and everything else still works. See [Active Sprinter role]({{< relref "activesprinter" >}}).

The invite link asks for a few more bits than that. They're held in reserve for features that aren't switched on right now, and you can untick them at invite time without breaking sprints. If you later turn on something that needs one, you can re-invite with the same link to grant it.

If a sprint won't start in a particular channel, permissions are the usual culprit: {{<slashembed name="sprint">}} is refused with a quiet note only you can see when Sprinto can't post there.

## Sprinto joined. Now what?

Once Sprinto joins, you're ready to Sprint! Use {{<slashembed name="sprint">}} in a channel to start a sprint. Nothing needs configuring first.

When you do want to tune things, [Setting up Sprinto]({{< relref "setup" >}}) walks through what's worth doing on a new server: a dedicated sprint channel, the {{<role "@Sprint MC">}} and {{<role "@Sprint Admin">}} roles, and the settings most servers change.

More on the basics of [Starting a sprint]({{< relref "basics" >}}), and full details of the Sprint command are at [Sprint]({{< relref "sprint" >}}).
