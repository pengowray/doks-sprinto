---
title : "Setting up Sprinto"
description: 
lead: 
---
## Optional steps

Once you've [Invited Sprinto to your Discord Server]({{< relref "invite" >}}), you can start sprinting right away. However, there's many optional steps you can take as a server owner or administrator to make things better.

1. **Create a dedicated sprint room (or two).** Sprinto usage can quickly overwhelm any chat room, so almost all servers create a dedicated sprint channel with a name like `#writing-sprints`, `#sprints-and-excerpts` or something thematically appropriate for their server like `#sprinting_dojo`.

   Sprinto often fails to see any usage when he has to share a general `#bots` channel. Some servers even have two sprint channels, one for short spontaneous sprints (perhaps 15 or 30 minutes) and one for longer, pre-planned sprints (up to an hour). 
   
   Sprints started in different channels run independently. You cannot run more than one simultaneous sprint in a channel.

2. Rename the {{<role "@Sprinto">}} role to {{<role "@Role for Sprinto">}} to make it easier to use Sprinto.

   Why is this necessary? Sprinto accepts commands in two ways, either as slash commands such as {{<slashembed name="time">}} or as commands which start by mentioning Sprinto, for example: {{<atsprintoembed "time">}}. Bots on Discord—including Sprinto—automatically create a "role" with their own name ({{<role "@Sprinto">}}) which can be mentioned in an almost identical way to mentioning Sprinto the bot ({{<atsprintoembed>}}). If someone mentions Sprinto the role instead of Sprinto the bot, then their command is confusingly ignored. Renaming the role prevents this.

3. **Create a Sprint MC role.** If you create a role named {{<role "@Sprint MC">}} (or {{<role "@Sprint MCs">}}), anyone assigned the role will have additional powers to help run and manage sprints, such as forcing a sprint to end. 

   Note: The server owner and administrators also have the permissions of {{<role "@Sprint MC">}}
   
   See [Admin Commands]({{< relref "admin" >}}) for more info on this role and the Sprint Admin role.

4. **Create a Sprint Admin role.** Commands for configuring Sprinto require someone with a role named {{<role "@Sprint Admin">}}, though they'll also work for the server owner and administrators. See [Admin Commands]({{< relref "admin" >}}) for more info on this role and the Sprint MC role.

5. Use {{< atsprintoembed "create_active_role" >}} to set up an {{<role "@Active Sprinters">}} role. 

   Anyone participating in a sprint will be automatically added to the {{<role "@Active Sprinters">}} role during the sprint, so everyone can see sprinters (and that a sprint is happening) in the members list. See [Active Sprinter Role]({{< relref "ActiveSprinter" >}}) for more info on this role and other related commands.

6. Sprints in the wrong rooms? If you want to prevent anyone starting a sprint outside of the sprint rooms, you can use {{< slashembed name="setup-set-allowed-channel" >}} in the channel or channels where you want to allow sprints to be run. For more info and other related commands, see [Allowed Channels]({{< relref "whitelist" >}}).

7. To help users see Sprinto you can order his role to place him higher in the members list. Server Settings > Roles > Drag the _Sprinto_ role up as high as you're comfortable.

8. If other bots have similar commands which may confuse or trip up sprinters, you can remove their permissions in your sprinting channels to make it easier to use and find Sprinto's commands. Similarly you can remove permission to use Sprinto commands elsewhere.

9. **Rename Sprinto** and give him a thematically suitable nickname on your server, such as Sir Sprinto Esquire. (Right-click on Sprinto and "Change Nickname"). Note: Sprinto may occassionally still refer to himself as "Sprinto".

10. Feel free to **plug your writing server** on #plug-your-writing-server on Sprinto's support server.

11. (Coming soon) Change the default Sprint times.