---
title : "Ping me"
description: "Commands to get mentioned or not at the start of sprints"
lead: "After a sprint, participants will be tagged (@mentioned) at the start of three future sprints. Use /pingme and /forgetme to turn pings on and off."
---

## Overview

If you miss three sprints or use {{<slashembed name="forgetme" >}} or {{<slashembed name="sneak-away" >}} the pings will stop. 

Use {{<slashembed name="pingme" >}} to be mentioned when the next sprint starts even if you haven't sprinted recently (or to change your mind after {{< slashembed name="forgetme" >}} or {{<slashembed name="pings-never" >}}. 

You can also choose to never or always receive pings at the start of sprints with {{<slashembed name="pings-never" >}} and {{<slashembed name="pings-always" >}}.

## Commands

### forgetme
{{<slash name="forgetme" >}} 
{{<atsprinto "forget me" >}} 

Sprinto wont ping you at the start of sprints until after you join another one. 

### sneak-away
{{<slash name="sneak-away" >}} 
{{<atsprinto "sneak away" >}} 

Sneak away like a ninja. Leave the current sprint if you're joined and Sprinto wont ping you at the start of sprints until after you join another one. This command's response will only be seen by you. Equivalent of using both {{< slashembed name="leave" >}} and {{< slashembed name="forgetme" >}} together, but the response is "ephemeral" (visible only to you).

### pingme
{{<slash name="pingme" >}} 
{{<atsprinto "ping me" >}} 
Sprinto will ping you at the start of the next 3 sprints in this channel. 

<!-- | `/pingme 10` | Choose how many sprints to be pinged at the start of. (e.g. 1 or 10 or 100). This will become your default after finishing a sprint. `_pingme 3` is what you typically start with. | -->

### pings-always
{{<slash name="pings-always" >}} 
{{<atsprinto always >}} 
Be included in the pings at the start of all future sprints in this channel, until you change the setting again. |

### pings-never
{{<slash name="pings-never" >}} 
{{<atsprinto never >}} 
Never ping you at the start of the sprints, even after you've done one. 

### pings-status
{{<slash name="pings-status" >}} 
{{<atsprinto pingstatus >}} 
Check your ping status

### Ping
{{<atsprinto "ping" >}}
Check Sprinto's round-trip latency to Discord's server. This is nothing to do with sprint mentions. If you used this by mistake you probably meant {{< atsprintoembed "ping me" >}}

## SprintMC-only commands

### forget user (by id)
{{<tag-mc>}}

{{<slash name="admin-forget-user" key0="user_id" val0="_123456789_" >}} 
{{<atsprinto "forgetuser _123456789_" >}} 

Replace _123456789_ with the Discord ID of the user.

Stops a user getting pinged at the start of sprints, as if they had typed {{< slashembed name="forgetuser" >}} themselves.

If you can't see their user id, you might have to turn on "Developer Mode" in Discord settings, then "Copy ID" will appear when you right click the user.

### forget user (by name)
{{<tag-mc>}}

{{<slash name="admin-forget-user-by-name" key0="user" val0="_username-to-forget_" >}} 
{{<atsprinto "forgetuser _username-to-forget_" >}} 

Replace _username-to-forget_ with the username of the user. 

When using {{< atsprintoembed "forgetuser" >}}, there's no need to add an @ at the start of the username. Note this version of the command can take either an id or username.

### pinguser
{{<tag-mc>}}

{{<atsprinto "pinguser _user_ _number_" >}} 

Replace _user_ with the user's name.

Replace _number_ with the number of sprints. Default is 3. For "never ping" use 0. For always ping, use 1000.

Example:
{{< atsprinto "pinguser Pengo 3" >}} 

Turns pings on for Pengo, as if he'd typed {{< slashembed name="pingme" >}} himself.

### pingroles-set
{{<tag-admin>}}

{{<slash name="setup-pingroles-set" key0="role" val0="_@rolename_" >}} 
{{<atsprinto "always_ping_role _rolename_" >}} 

With this command you can set a role to always get a mention at the start of sprints (in the channel the command is used). See the help page on [Ping Roles]({{<relref "ping-roles" >}}) for more on this and related commands.

<!--
## Todo

* (TODO) guild or channel default number of pings
* (TODO) time-based, e.g. `/pingme for 15 hrs` or `/forgetme for 8 hrs` 
-->

## See also
- [Ping roles (admin)]({{<relref "ping-roles" >}})  — Set up a role to always be pinged
