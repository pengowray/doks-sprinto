---
title : "Active Sprinter role"
description: "Setting up an active sprinter role for sprints to be more visible on Discord"
lead: "An optional role that makes the people in a sprint stand out in the members list"
keywords: ["roles", "active sprinter"]
---
## What is the 'Active Sprinter' role?

In brief:

* Makes members who are currently in a sprint with Sprinto more visible in the Discord members list.
* It's an optional extra that makes it more obvious when a sprint is running on your server. Sprinto runs sprints without it.

Once the role is set up, Sprinto gives {{<role "@Active Sprinters">}} to everyone taking part in a sprint, in any channel. Depending on the role's settings, sprinters are listed in their own group near the top of the server's members list, and their names show the role's color and badge while they sprint. Role badges need a boosted server.

Use {{<slashembed name="create-active-role">}} to set up the role. One role covers every sprint channel on the server.

To turn the feature off, delete the {{<role "@Active Sprinters">}} role in Discord.

### When sprinters get the role

* Sprinto gives the role as soon as someone joins a sprint, including during the join window.
* Sprinto takes the role off when the sprint's results are posted, or when the sprint is cancelled. People keep it while they enter word counts after time's up.
* In a chain, Sprinto takes the role off when each round's results are posted, and gives it back during the break that follows.
* Someone sprinting in two channels keeps the role until both sprints are over.

## Commands

To run either command, you need the **Manage Roles** permission or to be a Sprint Admin {{<tag-admin>}}: the server owner, anyone with the Administrator or Manage Server permission, or anyone with a role named {{<role "@Sprint Admin">}}. Both are slash commands only: mentioning Sprinto won't work for them. Only you see the replies.

Anyone else gets this reply:

{{< reply ephemeral="1" >}}
Sorry, you need the **Manage Roles** permission (or be an admin) to manage the Active Sprinters role.
{{< /reply >}}

### create-active-role

{{<tag-admin>}}

{{<slash name="create-active-role">}}

Create a role on the server named {{<role "@Active Sprinters">}} for Sprinto to use: shown separately in the members list, mentionable, with no permissions and no color.

{{< reply ephemeral="1" >}}
Done. I created an **Active Sprinters** role. Sprinters will be given it during sprints and lose it at the end. Make sure my role sits above it so I can assign it.
{{< /reply >}}

Sprinto needs the **Manage Roles** permission for this, and its own role must be above {{<role "@Active Sprinters">}}. Discord puts a new role at the bottom of your role list, so move it up yourself if you want its color and badge to show (step 3 below). If Sprinto can't create the role, it says so:

{{< reply ephemeral="1" >}}
Sorry, I couldn't create the role. I probably need the **Manage Roles** permission. Grant it and try again.
{{< /reply >}}

If the role already exists, this command only confirms that: "An **Active Sprinters** role already exists. Sprinters are given it during sprints and lose it at the end." You can also create an {{<role "@Active Sprinters">}} role manually in Discord and Sprinto will use it just the same.

### refresh-active-role

{{<tag-admin>}}

{{<slash name="refresh-active-role">}}

Give the {{<role "@Active Sprinters">}} role to everyone who's sprinting right now, and take it off anyone Sprinto gave it to who has since stopped.

{{< reply ephemeral="1" >}}
Done. Giving the Active Sprinters role to 3 sprinter(s) and removing it from 1. (I can only adjust members I assigned it to.)
{{< /reply >}}

The reply comes before Sprinto makes the changes. If Discord refuses a change, because Sprinto's role is below {{<role "@Active Sprinters">}} or Sprinto doesn't have Manage Roles, nothing in Discord tells you. If the server has no Active Sprinters role, the reply is "There's no **Active Sprinters** role yet. Use `/create-active-role` to make one."

You'll rarely need this command. Sprinto keeps its list of who has the role in memory, so if Sprinto restarts during a sprint, it can lose track of a few people. This command gives the role back to anyone sprinting who doesn't have it. It can't take the role off someone Sprinto has lost track of, because Sprinto only knows about the people it gave the role to. They lose the role at the end of their next sprint, or you can remove it by hand in Discord.

## Customizing the Active Sprinter role

The role's color, badge, position in the members list, and mentionability are all standard Discord role settings, under **Server Settings > Roles**. Feel free to change any of them.

1. **Color**: give sprinters a different color while they're sprinting, if you like.

2. **Rename it (a little)**: Sprinto uses any role whose name starts with "Active Sprint" or "ActiveSprint", in any capitalization. So you can remove the space, change the capitalization, pluralize it, or add something to the end. All of these work:
   * {{<role "@ActiveSprinter">}}
   * {{<role "@Active Sprinters">}}
   * {{<role "@activesprinters">}}
   * {{<role "@active sprinters are the best">}}

   If more than one role matches, Sprinto uses the oldest one. To check that Sprinto recognizes the role, run {{<slashembed name="settings roles">}}: under "Roles detected by name (view only):" it shows "Active Sprinters: @Active Sprinters", or "not found".

3. **Position on the members list**: this is what makes sprinting visible. A Discord member shows the color and badge of their *highest* role, so {{<role "@Active Sprinters">}} needs to be above the other roles your members usually have. Drag Sprinto's own role near the top of **Server Settings > Roles**, then drag {{<role "@Active Sprinters">}} just below it. A bot can't manage roles above its own highest role, so if Sprinto doesn't have a role of its own up there yet, give it one, or [re-invite Sprinto]({{<relref "invite" >}}) with the right permissions. After moving things around, join a sprint and check the members list to see that it works.

4. **Mentionable**: Sprinto mentions the individual sprinters in each sprint, never the {{<role "@Active Sprinters">}} role. The role is shared by every sprint channel on the server, so mentioning it would ping people sprinting in other channels too. Whether the role is mentionable makes no difference to how sprints run; it's up to you.

## See also

* [Admin commands]({{<relref "admin" >}}) — about the {{<tag-admin>}} and {{<tag-mc>}} roles and commands
* [Ping me (admin section)]({{<relref "pingme#ping-roles" >}}) — set a role to always be pinged at sprint start
* [Settings]({{<relref "settings" >}}) — every setting, and who can change it
