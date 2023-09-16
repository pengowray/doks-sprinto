---
title : "Active Sprinter role"
description: "Setting up an active sprinter role for sprints to be more visible on Discord"
#lead: ""
keywords: ["roles", "active sprinter"]
---
## What is the 'Active Sprinter' role?

In brief:
* Makes members who are currently in a sprint with Sprinto more visible in the discord members list.
* It's just an optional nice thing to make it more obvious when a sprint is running on your server.
* I'm not sure why this documentation got so long for a simple feature.

The {{<role "@Active Sprinters">}} role is an extra thing admins can set up, but is not necessary for the running of Sprinto. It gives sprinters currently participating in a sprint (in any channel) the role {{<role "@Active Sprinters">}}. You can use this to make sprinters pop up to the top of the server's members list under the "Active Sprinters" role banner, which lets others on the server know a sprint is happening. Having the role can give sprinters a special color username while they're participating in a sprint, as well as a special badge next to their name. Badges require a Discord boosted servers.

Admins can use {{<atsprintoembed "create_active_role" >}} to set up an {{<role "@Active Sprinters">}} role. Once it's created, anyone who joins a sprint will now get automatically added to the {{<role "@Active Sprinters">}} role during the sprint. At the end of the Sprint everyone is removed from the role. Works with multiple sprint rooms.

If you no longer wish to use this feature, just delete the {{<role "@Active Sprinters">}} role in Discord.

{{< atsprintoembed "create_active_role" >}} will give you help or advice if there's problems with the role's set up or Sprinto's permissions for using the role.

## Active sprinter related commands

There are various commands to help set up the {{<role "@Active Sprinters">}} role and check that Sprinto can use it. 

These commands are available to server administrators and members with "Manage Roles" or "Manage Server" permissions:

### Creative Active Role
{{<tag-admin>}}

{{<atsprinto "create_active_role" >}} 

Create a role on the server named {{<role "@Active Sprinters">}} for Sprinto to use. The role is created:
* mentionable
*  _hoisted_ under Sprinto's highest role
*  with no permissions nor color. 

If can't be created, it will tell you why.

There are notes in a section below on customizing the role. In short, feel free to customize the role in anyway, such as changing the color or whether it's mentionable.

Note you can create an {{<role "@Active Sprinters">}} role manually in Discord and it will work just the same and be used by Sprinto. However, using {{< atsprintoembed "create_active_role" >}} is recommended because Sprinto will respond with any issues. 

You can also use {{< atsprintoembed "create_active_role" >}} _after_ the role is already create to check for issues.

### repair_active_role
{{<tag-admin>}}

{{< atsprinto "repair_active_role" >}} 

Sets the {{<role "@Active Sprinters">}} role to be hoisted, mentionable and its position to be under Sprinto's highest role.

### refresh_active_role

{{< slash name="admin-refresh-active-role" >}}
{{< atsprinto "refresh_active_role" >}} 

Attempts to fix membership of the {{<role "@Active Sprinters">}} role for special cases where people are stuck with or without the {{<role "@Active Sprinter">}} role that they should or shouldn't have. This command should never be needed, but it's here in case. 

Despite "admin" in the name, this command can be used by anyone. 

## Customizing the Active Sprinter role

Under **Server Settings > Roles** you can customize the Active Sprinter role.

Role attributes: The `@Active Sprinter` role color, badge icon and position in the members list, and mentionability are all standard Discord features that an admin can set up in the server's role settings.

1. (optionally) Change the color — if you want sprinters to have a different color when sprinting, feel free to change the color of the role.

2. (optionally) Rename the role (a little) — Sprinto will still find the role if it's named slightly differently: You can remove the space, change the capitalization or add a plural ending or anything else to the end. For example, the following are all valid names for the role: 
   * {{<role "@ActiveSprinter">}}
   * {{<role "@ActiveSprinters">}}
   * {{<role "@Active Sprinter">}}
   * {{<role "@Active Sprinters">}}
   * {{<role "@activesprinters">}}
   * {{<role "@active sprinters are the best">}}
   
   I haven't allowed it to be more customizable than this to avoid unforseen conflicts or security issues.

3. (optionally) Change the position of "Active Sprinters" on the members list: Under **Server Settings > Roles**, drag Sprinto's role at the top (or as high as you're comfortable) and drag the Active Sprinter role just under it. This way everyone on your server will more easily see a sprint is running.

   Why position matters: Users take on the color and badge of the "highest" role they have on the server, so if the {{<role "@Active Sprinters">}} role is high up on server's list then your server members can show they're sprinting. And if the role is below other roles, their sprinting colors won't be visible.

   Changing positions: The command {{< atsprintoembed "create_active_role" >}} will place the {{<role "@Active Sprinters">}} role as high as Sprinto is allowed. Bots cannot control roles that are higher than their own highest role, so if you want to move {{<role "@Active Sprinters">}} higher (to be more visible), drag one of Sprinto's roles to a higher position first and place {{<role "@Active Sprinters">}} just below that role. If Sprinto doesn't have any roles, then he probably doesn't have Manage Role permissions which he needs for this feature, so [inviting Sprinto]({{< relref "invite" >}}) to your server again, or set up a role for him. Note you don't need to display Sprinto on the members list at the position of his highest role: you can turn off "heisting" from Sprinto's top role (uncheck "Display role members separately from online members"). After changing role positions around, you can use {{< atsprintoembed "create_active_role" >}} or {{< atsprintoembed "refresh_active_role" >}} to check everything is OK. This all sounds needlessly complicated and I feel there should be a better way to explain it all but there it is.

4. (optionally) Make it mentionable? If the {{<role "@Active Sprinters">}} role is mentionable, it can also be used to mention (ping) active sprinters by sprinters or other users.

   Note: Sprinto never mentions the {{<role "@Active Sprinters">}} role, so the role can be mentionable or not mentionable and sprints will run just fine. Here's why (to clear up any confusion): The same {{<role "@Active Sprinters">}} role is used for every sprint channel, so if Sprinto were to try to use the role to ping a sprint in one channel, Sprinto would inadvertently also ping different sprinters who were sprinting in every other sprinting channel. Instead, Sprinto tags (mentions) the individual sprinters who have joined each individual sprint.

## See also

- [Admin commands]({{<relref "admin" >}}) — about the {{<tag-admin>}} and {{<tag-mc>}} roles and commands
- [Ping roles (admin)]({{<relref "ping-roles" >}})  — Set up a role to always be pinged
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
