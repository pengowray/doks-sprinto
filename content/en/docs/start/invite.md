---
title : "Invite Sprinto"
description: "Add Sprinto to your Discord server, and the permissions Sprinto needs"
lead: "Add Sprinto to your Discord server with the invite link, or from Sprinto's profile on another server."
url: "docs/invite-sprinto"
---
Add Sprinto to your Discord server with the invite link, or from Sprinto's profile on another server.

## Use the invite link

Open Sprinto's invite link in Discord:

```text
https://discord.com/oauth2/authorize?client_id=421646775749967872&scope=bot&permissions=2419424576
```

1. Copy the invite link.
2. Paste it into a message on Discord.
3. Click the link in the message.
4. Choose the server and click **Continue**.

<!-- TODO owner: screenshot out of date: shows a "✓ BOT" badge next to Sprinto; Discord now labels apps "APP" -->
![Image](/images/sprinto-invite-dialog.png)

You can also open the link in a web browser. Sign in at [discord.com/login](https://discord.com/login) in that browser first.

If you don't have permission to add bots to the server, send the link to the server owner or someone who has that permission, or send them this page.

## Add Sprinto from its profile

![Image](/images/sprint-add-app.png)

If you can see Sprinto on another server, click Sprinto or "View Profile", then click **Add App**.

## What permissions does Sprinto need?

In each channel where you want sprints, Sprinto needs **View Channel** and **Send Messages**. In a thread, Sprinto needs **Send Messages in Threads** in place of Send Messages. The invite link doesn't ask for Send Messages in Threads, but servers usually give it to everyone by default.

The people who sprint need **Use Application Commands** in the channel, or Sprinto's slash commands don't appear for them. `@Sprinto` commands work without it.

The invite link asks for these permissions:

| Permission | What Sprinto uses it for |
| --- | --- |
| View Channel, Send Messages | Announcing sprints and answering commands. Sprinto needs both. |
| Manage Roles | Only the {{<role "@Active Sprinters">}} role, set up with `/create-active-role`. See [Active Sprinter role]({{< relref "activesprinter" >}}). |
| Read Message History | Showing Sprinto's answers to `@Sprinto` messages as Discord replies. Without it, each answer is posted as a plain message. |
| Connect, Speak, Priority Speaker | Voice chimes, which are paused. See [Voice]({{< relref "voice" >}}). |
| Use External Emojis | Some of Sprinto's messages use Sprinto's own custom emoji. |
| Add Reactions, Manage Messages, Embed Links, Send TTS Messages | Not used on your server. |
| Use Application Commands | Nothing. This permission is for the people typing commands. |

You can untick any of these except View Channel and Send Messages when you invite Sprinto, and sprints still work. If you later want something that needs one of them, invite Sprinto again with the same link to grant it.

### If a sprint won't start in a channel

Permissions are the usual cause. When Sprinto can't post in the channel, {{<slashembed name="sprint">}} answers with a note only you can see:

{{< reply ephemeral="1" >}}
Sorry, I can't post in this channel. Please give me the **View Channel** and **Send Messages** permissions here, then start the sprint again.
{{< /reply >}}

To check, an admin can run {{<slashembed name="settings channel">}} in that channel. The panel ends with **My permissions in this channel:** and a ✅ or ❌ for View Channel and Send Messages.

## Sprinto joined. Now what?

Type {{<slashembed name="sprint">}} in a channel to start a sprint. You don't need to set anything up first.

To set Sprinto up for your server, see [Setting up Sprinto]({{< relref "setup" >}}). It covers a dedicated sprint channel, the {{<role "@Sprint MC">}} and {{<role "@Sprint Admin">}} roles, and the settings most servers change.

For how to start a sprint, see [Sprint basics]({{< relref "basics" >}}). For every sprint option, see [Sprint (all options)]({{< relref "sprint" >}}).
