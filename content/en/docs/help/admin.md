---
title : "Admin commands"
description: "The Sprint MC and Sprint Admin roles: who has them, and what they can do"
lead: "What Sprint MCs and Sprint Admins can do, and who counts as one"
---
Some of Sprinto's commands need a Sprint MC {{<tag-mc>}} or a Sprint Admin {{<tag-admin>}}. Sprint Admins can do everything a Sprint MC can, and can also change Sprinto's settings.

## Who counts as a Sprint Admin or Sprint MC

* **Sprint Admin** {{<tag-admin>}}: the server owner, anyone with the Administrator or Manage Server permission, or anyone with a role named {{<role "@Sprint Admin">}}.
* **Sprint MC** {{<tag-mc>}}: anyone with a role named {{<role "@Sprint MC">}}, and every Sprint Admin.

### Role names Sprinto accepts

Sprinto finds these roles by their names, in any capitalization. The name must be one of these:

* **Sprint Admin:** Sprint Admin, SprintAdmin, Sprint Admins, SprintAdmins, Sprinto Admin, SprintoAdmin, Sprinto Admins, SprintoAdmins
* **Sprint MC:** Sprint MC, SprintMC, Sprint MCs, SprintMCs, Sprinto MC, SprintoMC, Sprinto MCs, SprintoMCs

A role with anything else in its name, such as "Sprint Admin Team" or "Sprint-Admin", doesn't count. This rule is stricter than the one for the [Active Sprinters role]({{<relref "activesprinter" >}}), whose name only has to start with "Active Sprint".

To see which roles Sprinto found on your server, run {{<slashembed name="settings roles">}}.

## What a Sprint MC can do

| Command | What it does |
| --- | --- |
| {{<slashembed name="cancel-please">}} | End a sprint at once, even with other people in it. As text: `@Sprinto cancelplease`, `cancel-please` or `cancelpls`. |
| {{<slashembed name="nudge-please">}} | Move a stuck sprint on to its next step. |
| {{<slashembed name="go">}} | Start the waiting sprint now. The person who started the sprint can do this too. |
| `lock` | Add `lock` to a `/sprint` to start a locked sprint, which only a Sprint MC can cancel. |
| ✅ or ❌ in a vote to cancel | A Sprint MC's ✅ cancels the sprint straight away, and their ❌ ends the vote. |
| {{<slashembed name="admin-forget-user">}} | Stop pinging one person at the start of sprints in this channel. |
| `@Sprinto pinguser` | Turn on pings for one person. |

For details, see [Sprint (admin)]({{<relref "admin-sprint" >}}) for the sprint commands and [Ping me]({{<relref "pingme#sprint-mc-only-commands" >}}) for the ping commands.

Someone who isn't a Sprint MC gets a refusal, for example "Sorry, you need a Sprint MC or Sprint Admin role to do that." For `/cancel-please` on a sprint that other people have joined, the reply is:

{{< reply >}}
Sorry, only a Sprint MC can use `/cancel-please`. You can't force-cancel an active sprint when it has other participants. `/cancel` to vote to end it.
{{< /reply >}}

## What a Sprint Admin can do

Everything a Sprint MC can do, and also:

| Command | What it does |
| --- | --- |
| {{<slashembed name="settings">}} | Change any setting: channel, server, ping roles, sprint channels, sprint defaults and the emoji theme. See [Settings]({{<relref "settings" >}}). |
| {{<slashembed name="admin-forget-all-users">}} | Stop pinging everyone at the start of sprints in this channel. See [Ping me]({{<relref "pingme#ping-roles" >}}). |
| **Apps → Clean up these results** | Take a quote off sprint results that are already posted. See [Remove or report a quote]({{<relref "settings#remove-or-report-a-quote" >}}). |
| {{<slashembed name="create-active-role">}}, {{<slashembed name="refresh-active-role">}} | Set up the Active Sprinters role, and give it to or take it from the right people. Anyone with the Manage Roles permission can use these too. See [Active Sprinter role]({{<relref "activesprinter" >}}). |

## Create the roles

Sprinto never creates the {{<role "@Sprint MC">}} or {{<role "@Sprint Admin">}} roles. Create them in Discord the same way as any other role, and give them to the people you choose.

Both roles are optional: sprints run without anyone holding either role. On a small server you might create the {{<role "@Sprint MC">}} role and give it to everyone, so everyone can cancel sprints.

Sprinto has only these two levels. You can't give a role permission for single commands. If you need a more specific role for your server, use {{< slashembed name="feedback">}} and tell me about your situation.

## Commands that need "please"

Several Sprint MC commands need "please", as in {{<slashembed name="cancel-please">}}. Instead of "please" you can use "pls", "thanks", "merci" and other words. Some commands anyone can use need "please" too, for example setting your word count to a negative number.

## See also

* [Setup]({{<relref "setup" >}}) (setting up Sprinto)
* [ActiveSprinter]({{<relref "activesprinter" >}}) (another role used by Sprinto)
* [Sprint channels]({{<relref "whitelist" >}}) — choose which channels sprints can run in
* [Carl-bot x Sprinto]({{<relref "carlbot" >}}) — using carl-bot to schedule sprints.
* [Ping me (admin section)]({{<relref "pingme#ping-roles" >}}) — set a role to always be pinged at sprint start
* [Settings]({{<relref "settings" >}}) — every setting, and who can change it
* [Sprint (admin)]({{<relref "admin-sprint" >}}) — the few sprint options and commands only available to Sprint MCs
* [Voice]({{<relref "voice" >}}) — Experimental voice channel support
