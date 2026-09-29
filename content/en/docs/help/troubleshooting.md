---
title : "Troubleshooting"
description: "What to check when Sprinto doesn't respond to a command, and what Sprinto does when Discord is having problems"
lead: "What to check when Sprinto doesn't respond to a command, and what Sprinto does when Discord is having problems."
keywords: ["troubleshooting", "faq", "not responding", "commands", "permissions", "outage", "ping"]
---
## Sprinto isn't responding to my commands

Discord's slash commands can be terribly inconsistent, and it can be hard to know if the problem is a permissions problem, or a Discord UI/UX issue, or something else.

If you're having trouble, here are some tips. Sections 1 to 3 are for everyone. [When Discord is having problems](#when-discord-is-having-problems) explains the notes Sprinto posts during an outage, and [For admins](#for-admins) covers permissions.

### 1) @Sprinto the role vs @Sprinto the bot

<!-- TODO owner: screenshot out of date: shows the old "✓ BOT" badge (Discord now shows "APP"), an old-style "9 minutes 54 seconds remaining" reply, and the typo "a roll called sprinto" -->
![@Sprinto role vs bot](/images/help/troubleshooting/01-role-vs-bot.png)

**Spot the difference: The @Sprinto role can't run commands. Discord creates this role with the same name as the bot and it's a usability nightmare. The color and formatting of the role and bot may also be very similar, depending on Discord server settings.**

- Nearly all of Sprinto's commands work with `@Sprinto` as a prefix. Some folk will find `@Sprinto` more reliable and easier than slash commands. Example:

{{<atsprinto "sprint 30" >}}
(Starts a 30-minute sprint. Example of using Sprinto without the slash command)

- The exceptions: `/redeem`, `/create-active-role`, `/refresh-active-role` and the right-click **Clean up these results** entry have no `@Sprinto` form. `@Sprinto pets` and `@Sprinto settings` on its own answer with the slash command to use, because those panels need buttons. Changing a setting by text still works, for example `@Sprinto settings quotes off`.

- If there's a Discord role named `@Sprinto` you might accidentally mention it instead of `@Sprinto` the bot. Check you didn't mention a role.

- To be sure which one you're picking, look at the autocomplete list that pops up as you type `@Sprinto`. The bot has a profile picture.

{{<atsprinto "hello sprinto" >}}

{{< reply >}}
A star shines on the hour of our meeting.
{{< /reply >}}

If you mention the role by mistake, Sprinto can't run your command, because Discord doesn't show Sprinto the text of the message. Sprinto replies with a note:

{{< reply >}}
Sorry, I couldn't read that. Discord doesn't show me the text when you ping @Sprinto (the role).
Start your message with @Sprinto and I'll see it.
When you type @Sprinto, pick the one with my avatar, not the role.
{{< /reply >}}

The last line of the note is sometimes "Slash commands like /sprint work too." A server admin gets both lines. If the role has the same name as the bot, a server admin also gets a suggestion to rename the role.

No reply at all can also mean you mentioned the role. Sprinto skips the note if it sent one to the same channel in the last 10 seconds, and just after Sprinto restarts, it may skip notes in a server until someone there uses a command.

- If you're an admin, please rename the {{<role "@Sprinto">}} role to another name such as {{<role "@Bot role: Sprinto">}} so sprinters can **@Sprinto** more easily. There are more tips under [For admins](#for-admins).

### 2) Make sure you're actually sending a slash command

In a server, Sprinto only reads messages that start with `@Sprinto`, because Discord hides the text of other messages from it. So `/sprint` sent as a plain chat message does nothing. (In a direct message to Sprinto, you don't need `@Sprinto`.)

![Sent as a chat message](/images/help/troubleshooting/02-sent-as-chat-message.png)

**Sometimes sprint commands don't succeed because they're sent as chat messages.**

How to tell if you're sending a chat message instead of a slash command:

<!-- TODO owner: screenshot out of date: shows a separate "Sprint created." reply, which no longer exists (/sprint answers with the join message), and older join text -->
![Slash commands that fail vs succeed](/images/help/troubleshooting/03-sprinto-help-get-sprinting.png)

**Slash commands that fail vs succeed**

- Slash commands can be unreliable. Sometimes you'll just type `/sprint` into chat instead of sending a `/sprint` command to Sprinto. Mobile is more prone to this problem.

Tips:

- Type a slash command (for example **`/sprint`**), then wait for the menu to pop up, then click or tap on Sprinto's sprint command.
- Try typing a single slash (`/`) and wait for the menu to pop up before typing the rest of `/sprint`.
- On desktop with keyboard: after typing a command like `/sprint` you can use **up & down arrows** to select the command, and then **Tab** so you can enter any options.

- Discord is bad at copy-pasting slash commands, so avoid that if you can. It's also bad at copy-pasting `@Sprinto` (it might switch to @'ing the role).

- Ask for help or report strange Sprinto behavior with `/feedback`, or come to the Sprinto Planet Discord for support. Your report is posted anonymously on Sprinto Planet, and if the developer answers it, the reply arrives in the channel you sent it from, so you no longer need to join Sprinto Planet to hear back.

### 3) Check “Legacy chat input” (it breaks slash commands)

![Legacy chat input setting](/images/help/troubleshooting/04-legacy-chat-input.png)

**Slash commands will not work if you're using “Legacy chat input”, so keep this off unless you need it.** (User Settings > Accessibility)

## When Discord is having problems

Sometimes Discord stops delivering slash commands to bots. Sprinto notices this, registers its commands again, and keeps retrying until they come back. You don't need to report it.

If a sprint is running in a channel when this happens, Sprinto posts a note there with the `@Sprinto` command to type instead:

{{< reply >}}
⚠️ Slash commands aren't reaching Sprinto right now.
Type this instead: @Sprinto join same
Nothing has come through for 12 minutes.
{{< /reply >}}

- The command in the note depends on the moment: `@Sprinto join same` in the join window, `@Sprinto time` while people are writing, and `@Sprinto words 200` when word counts are due.
- If Discord's status page reports a problem, the note names it in place of the last line, for example: "Discord is reporting an issue: "Elevated API Errors". More at https://status.discord.com"
- If only some servers seem to be affected, the note adds: "This looks like it's affecting some servers rather than all of them."
- The note doesn't ping anyone.
- Sprinto waits for at least 10 minutes with no commands before it posts a note in the join window or while word counts are due. While people are writing, it waits longer: 15 minutes, or more for a long sprint. Each channel gets one note per outage.
- When slash commands work again, Sprinto crosses out the note and adds "✅ Slash commands are working again." This happens for notes up to 30 minutes old.

If Discord isn't delivering `@Sprinto` messages either, the note says:

{{< reply >}}
⚠️ Sprinto isn't receiving commands right now, by slash command or by mention. Nothing has come through for 25 minutes. The sprint itself is still running and will finish on time.
{{< /reply >}}

### Sprinto's status

Sprinto's status appears under its name in the member list:

| Status | Meaning |
| --- | --- |
| Listening to /sprint | Normal. |
| Listening to @Sprinto sprint | Slash commands aren't reaching Sprinto, but `@Sprinto` messages are. |
| Listening to status.discord.com | Discord's status page reports an incident. |

<!-- main only: Discord status after results -->
While Discord's status page reports an incident, Sprinto may add a line under a sprint's results, at most once a day per server:

{{< reply >}}
**Discord status:** "Elevated API Errors". More at <https://status.discord.com>
{{< /reply >}}

### Check response times with /ping

{{<slashembed name="ping">}} (or {{<atsprintoembed "ping">}}) shows how fast Sprinto and Discord are responding. Only you see the reply to `/ping`. It shows:

- Response times for Sprinto and for Discord's API, for example "Sprinto 41 ms · Discord API 145 ms". Discord's figure comes from Discord's status page.
- A chart of the last 2 hours, with Discord's API in blue and Sprinto in green.
- The shard your server is on, for example "This server is on shard 3 (39 ms)."
- How many commands and clicks Sprinto answered, and how many it missed.
- Any incident open on Discord's status page.
- Links to the ping commands, in case you meant `/pingme`: "Change your pings: /pingme /forgetme /pings-status /sneak-away" and "Always or never: /pings-always /pings-never".

<!-- main only: /ping answered count period -->
The count of answered and missed commands covers the last 2 hours if Sprinto missed any in that time, otherwise the last day, otherwise the last week.

## For admins

- Some of Sprinto's permissions have been reset in the past (for example, in early September 2022). Try re-adding Sprinto to your server to fix permission problems (you do **not** need to kick him first). From Sprinto's profile, click **Add App**.

- If Sprinto isn't starting sprints in a channel, check that Sprinto has **View Channel** and **Send Messages** there. In a thread, Sprinto needs **Send Messages in Threads** in place of Send Messages. When Sprinto can't post, `/sprint` answers with a note only you can see. `@Sprinto sprint` gets no answer at all.

{{< reply ephemeral="1" >}}
Sorry, I can't post in this channel. Please give me the **View Channel** and **Send Messages** permissions here, then start the sprint again.
{{< /reply >}}

- To check Sprinto's permissions in a channel, run {{<slashembed name="settings channel">}} there. The panel ends with **My permissions in this channel:** and a ✅ or ❌ for View Channel and Send Messages.

![Use Application Commands permission](/images/help/troubleshooting/05-use-application-commands.png)

- If users can't see the slash command menus, check they have **Use Application Commands** permission (can be set per-channel or per-role).

- Sprinto's commands also have permissions under **Server Settings > Integrations > Sprinto > Manage**.

- For completeness: under **Server Settings > Roles**, there are also permissions under **Sprinto's role** (“This role is managed by an integration: Sprinto”). Sprinto doesn't need special role permissions, except it needs **Manage Roles** if you're using an {{<role "@Active Sprinters">}} role (set up with `/create-active-role`<!--, kept in sync with `/refresh-active-role`-->) that you want Sprinto to manage. Without Manage Roles, `/create-active-role` replies: "Sorry, I couldn't create the role. I probably need the **Manage Roles** permission. Grant it and try again."

Thanks for your patience and support.

![Permission summary](/images/help/troubleshooting/06-permission-summary.png)

- **Adding Sprinto to your server again (to a server he's already on) may fix permission problems.**
- **Check Sprinto can send messages in the channels you want to run sprints.**
- If Sprinto appears stuck on “Sending command...” for more than ~10 seconds, that's usually a Discord hangup. Check your internet connection and restart Discord.
- You can manage Sprinto in the **Integrations** section of your **Server Settings** Note: this isn't available on Discord mobile.
- Everyone you want to be able to use Sprinto needs **Use Application Commands** permission. Role locking can cause issues.

Discord required bots to switch to slash commands. Sprinto needed a surprising amount of work to keep working with the new system, and it's still a work in progress. Some less common commands work only with `@Sprinto`, for example `@Sprinto tare 1000`, `@Sprinto who`, `@Sprinto roll 2d6` and `@Sprinto last one`.

## History

This guide was originally posted on the Sprinto Planet discord (in "#📣-news-and-updates"), then heavily updated with screenshots for a [Patreon post](https://www.patreon.com/posts/71439355) which was titled "Sprinto has switched to slash commands (tips)" (2022), and has now moved here to the Sprinto website for easier access and better formatting and has been updated again.

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Frequently Asked Questions (FAQ)]({{<relref "faq" >}})
- [Curious commands]({{<relref "curious" >}}) — commands you don't need.
