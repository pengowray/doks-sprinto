---
title : "Admin commands"
description: Admin commands
lead: 
---
Commands available to guild owners, administrators and people with a role named SprintAdmin. Some commands are also available to people with a SprintMC role. 

## Sprint Admin intro

A _Sprint Admin_  [{{<tag-admin>}}] is someone with extra privileges on a server. A server's owner, its administrators, and anyone with a role named `Sprint Admin`. For simplicity, they'll all be called _SprintAdmin_ here. Sprint Admins can configure Sprinto, for example, they can set which channels sprints run in, or remove all users from the ping list.

Sprinto considers anyone who has a role named {{<role "@Sprint Admin">}} or {{<role "@Sprint Admins">}} or {{<role "@sprintadmin">}} (space optional, any capitalization) to be a _Sprint Admin_.

## Sprint MC intro

A _Sprint MC_ [{{<tag-mc>}}]  is a less powerful role (which Sprint Admins also automatically have). Sprint MCs can cancel sprints, or remove a single user from the the ping list, or run "locked" sprints which ordinary users cannot cancel.

Sprinto considers anyone who has a role named {{<role "@Sprint MC">}} or {{<role "@Sprint MCs">}} or {{<role "@Sprinto MC">}} or {{<role "@sprintmcs">}} (space optional, any capitalization, and will also accept Sprinto MC) to be a _Sprint MC_. Additionally anyone with Sprint Admin powers also has Sprint MC powers.

## Create the roles

Sprinto doesn't create the {{<role "@Sprint MC">}} or {{<role "@Sprint Admin">}} roles for you, so you'll have to create them the same way as you create any other Discord role. The roles are both optional. There's no requirement to have anyone with either role to run sprints. On a small server you might create the {{<role "@Sprint MC">}}  role and give it to everyone just so everyone can easily cancel sprints.

More fine grained control of Sprinto privileges is not available. If you need a more specific role for your server please provide {{< slashembed name="feedback">}} and tell me about your situation.

### Notes about Sprint MC and Sprint Admin commands

* "Please" is required with several commands. Instead of "please" you can also use "pls", "thanks" or "merci". Please is also used for some non-admin commands like to set your word count to a negative number. 
* More {{<role "@Sprint MC">}} and {{<role "@Sprint Admin">}} commands may be added in future.
* Server owner and administrators automatically have Sprint Admin and Sprint MC powers.

## See also
* [Setup]({{< relref "setup" >}}) (setting up Sprinto)
* [ActiveSprinter]({{< relref "activesprinter" >}}) (another role used by Sprinto)
* [Voice]({{< relref "voice" >}})
