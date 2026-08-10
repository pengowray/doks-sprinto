---
title : "Active Sprinter role"
description: "Setting up an active sprinter role for sprints to be more visible on Discord"
#lead: ""
keywords: ["roles", "active sprinter"]
---
## What is the 'Active Sprinter' role?

In brief:

* Makes members who are currently in a sprint with Sprinto more visible in the Discord members list.
* It's just an optional nice thing to make it more obvious when a sprint is running on your server.

The {{<role "@Active Sprinters">}} role is an extra thing admins can set up, but isn't necessary for running Sprinto. It gives sprinters currently participating in a sprint, in any channel, the role {{<role "@Active Sprinters">}}. That can make sprinters pop up under their own banner near the top of the server's members list, and give them a special color and badge next to their name while sprinting. Badges need a boosted server.

Use {{<slashembed name="create-active-role">}} to set up the role. Once it's created, anyone who joins a sprint automatically gets {{<role "@Active Sprinters">}} for the duration, and loses it again when the sprint ends. Works across multiple sprint channels at once.

If you no longer want the feature, just delete the {{<role "@Active Sprinters">}} role in Discord.

## Commands

Both commands need the **Manage Roles** permission, or a {{<role "@Sprint Admin">}} role (server administrators and the owner already count). Both are slash commands only: mentioning Sprinto won't work for them.

### create-active-role

{{<tag-admin>}}

{{<slash name="create-active-role">}}

Creates a role on the server named {{<role "@Active Sprinters">}} for Sprinto to use: shown separately in the members list, mentionable, no permissions and no color. Discord drops a new role at the bottom of your role list, so move it up yourself if you want its color and badge to show (step 3 below). If it can't be created, Sprinto will tell you why.

If the role already exists, this just confirms that and does nothing further. You can also create an {{<role "@Active Sprinters">}} role manually in Discord and Sprinto will use it just the same.

### refresh-active-role

{{<tag-admin>}}

{{<slash name="refresh-active-role">}}

Gives the {{<role "@Active Sprinters">}} role to everyone who's sprinting right now, and takes it off anyone Sprinto gave it to who has since stopped.

This should never be needed in the ordinary run of things, but there's a real reason it can be: Sprinto tracks who it gave the role to in memory, not in Discord, so a restart in the middle of a sprint can lose track of a few people. Someone left without the role gets it back from this command. Someone left wearing it is the one case it can't fix, because Sprinto can't see holders it didn't give the role to itself: their next sprint takes it off them, or you can remove it by hand in Discord.

## Customizing the Active Sprinter role

The role's color, badge, position in the members list, and mentionability are all standard Discord role settings, under **Server Settings > Roles**. Feel free to change any of them.

1. **Color**: give sprinters a different color while they're sprinting, if you like.

2. **Rename it (a little)**: Sprinto still finds the role if it's named slightly differently, so remove the space, change the capitalization, pluralize it, or tack something onto the end. All of these work:
   * {{<role "@ActiveSprinter">}}
   * {{<role "@Active Sprinters">}}
   * {{<role "@activesprinters">}}
   * {{<role "@active sprinters are the best">}}

   It's not more flexible than that, to avoid unexpected clashes.

3. **Position on the members list**: this is what actually makes sprinting visible, since a Discord member shows the color and badge of their *highest* role, so {{<role "@Active Sprinters">}} needs to sit above whatever else your members typically hold. Drag Sprinto's own role near the top of **Server Settings > Roles**, then drag {{<role "@Active Sprinters">}} just below it. A bot can't manage roles above its own highest role, so if Sprinto doesn't have a role of its own up there yet, give it one, or [re-invite Sprinto]({{<relref "invite" >}}) with the right permissions. After moving things around, {{<slashembed name="create-active-role">}} or {{<slashembed name="refresh-active-role">}} will confirm everything still lines up.

4. **Mentionable**: Sprinto never mentions the {{<role "@Active Sprinters">}} role itself, since the same role is shared across every sprint channel on the server, so mentioning it would ping people sprinting elsewhere too. It only tags the individual sprinters in each sprint. So mentionable or not, it makes no difference to how sprints run; it's purely up to you.

## See also

* [Admin commands]({{<relref "admin" >}}) — about the {{<tag-admin>}} and {{<tag-mc>}} roles and commands
* [Ping me (admin section)]({{<relref "pingme#ping-roles" >}}) — set a role to always be pinged at sprint start
* [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
