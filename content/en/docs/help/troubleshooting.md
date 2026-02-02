---
title : "Troubleshooting"
identifier: "troubleshooting"
description:
lead: Tips and fixes for common Sprinto command issues
menu:
  docs:
    parent: "docshelp"
    weight: 630
toc: true
keywords: ["troubleshooting", "faq", "not responding"]
---
## Sprinto isn't responding to my commands

Discord's slash commands can be terribly inconsistent, and it can be hard to know if the problem is a permissions problem, or a Discord UI/UX issue, or something else.

If you're having trouble, here are some tips.

## 1) Spot the difference: @Sprinto the role vs @Sprinto the bot

![@Sprinto role vs bot](/images/help/troubleshooting/01-role-vs-bot.png)

**@Sprinto the role vs @Sprinto the bot. The role doesn't respond. Discord creates this role by default and it's a usability nightmare.**

- All of Sprinto's commands work with `@Sprinto` as a prefix. Some folk will find `@Sprinto` more reliable and easier than slash commands: e.g. **`@Sprinto sprint 30`**

- If there's a Discord role named `@Sprinto` you might accidentally mention it instead of `@Sprinto` the bot. Check you didn't mention a role.
- If you're an admin, please rename the `@Sprinto` role to another name such as `@RoleForSprinto` so sprinters can **@Sprinto** more easily.

## 2) Make sure you're actually sending a slash command

Sometimes sprint commands don't succeed because they're sent as chat messages.

![Sent as a chat message](/images/help/troubleshooting/02-sent-as-chat-message.png)

**Sometimes sprint commands don't succeed because they're sent as chat messages.**

Slash commands that succeed look like this:

![Successful slash command](/images/help/troubleshooting/03-sent-as-slash-command.png)

**Slash commands that succeed look like this.**

- Slash commands can be unreliable. Sometimes you'll just type `/sprint` into chat instead of sending a `/sprint` command to Sprinto. Mobile is more prone to this problem.

Tips:

- Type a slash command (for example **`/sprint`**), then wait for the menu to pop up, then click or tap on Sprinto's sprint command.
- Try typing a single slash (`/`) and wait for the menu to pop up before typing the rest of `/sprint`.
- On desktop with keyboard: after typing a command like `/sprint` you can use **up & down arrows** to select the command, and then **Tab** so you can enter any options.

- Discord is bad at copy-pasting slash commands, so avoid that if you can. It's also bad at copy-pasting `@Sprinto` (it might switch to @'ing the role).

- Ask for help or report strange Sprinto behavior with `/feedback`, or come to the Sprinto Planet Discord for support.

## 3) Check “Legacy chat input” (it breaks slash commands)

![Legacy chat input setting](/images/help/troubleshooting/04-legacy-chat-input.png)

**Slash commands will not work if you're using “Legacy chat input”, so keep this off unless you need it.** (User Settings > Accessibility)

## For admins

- Some of Sprinto's permissions were reset in early September 2022. Try re-adding Sprinto to your server to fix permission problems (you do **not** need to kick him first). From Sprinto's profile, click **Add App**.

- If Sprinto isn't starting sprints, make sure he has permission to send messages in your sprinting channel. `/sprint` will warn you if Sprinto does not have **Send Messages** permission (but `@Sprinto sprint` can't).

![Use Application Commands permission](/images/help/troubleshooting/05-use-application-commands.png)

- If users can't see the slash command menus, check they have **Use Application Commands** permission (can be set per-channel or per-role).

- Sprinto's commands also have permissions under **Server Settings > Integrations > Sprinto > Manage**.

- For completeness: under **Server Settings > Roles**, there are also permissions under **Sprinto's role** (“This role is managed by an integration: Sprinto”). Sprinto doesn't need special role permissions, except it needs **Manage Roles** if you've got an `@ActiveSprinter` role that you want Sprinto to manage.

Thanks for your patience and support.

![Permission summary](/images/help/troubleshooting/06-permission-summary.png)

- **Adding Sprinto to your server again (to a server he's already on) may fix permission problems.**
- **Check Sprinto can send messages in the channels you want to run sprints.**
- If Sprinto appears stuck on “Sending command...” for more than ~10 seconds, that's usually a Discord hangup. Check your internet connection and restart Discord.
- You can manage Sprinto in the **Integrations** section of your **Server Settings** (note: this isn't available on Discord mobile).
- Everyone who you want to use Sprinto needs **Use Application Commands** permission (role locking can cause issues).

Discord required bots to switch to slash commands. Sprinto needed a surprising amount of work to keep working with the new system, and it's still a work in progress. Some less common commands can only be accessed by mentioning `@Sprinto` for now, but I'm working on it.

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Frequently Asked Questions (FAQ)]({{<relref "faq" >}})
- [Curious commands]({{<relref "curious" >}}) — commands you don't need.
