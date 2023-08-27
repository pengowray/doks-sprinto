---
title : "Sprint (admin)"
description: Sprint Admin commands
url: "/docs/sprint-admin"
lead: 
---

SprintAdmin (A) and SprintMC (MC) commands

## Commands

### sprint lock
{{<tag-mc>}}

{{< slash name="sprint" key0="options" val0="lock" >}} 

Begins a sprint which cannot be cancelled except by a Sprint MC. 

Example:
{{< slash name="sprint" key0="options" val0="for 30 in 5 endtime 10 lock" >}} 
{{< atsprinto "sprint for 30 in 5 endtime 10 lock" >}} 
Begins a 30 minute locked sprint with 5 minutes to join and 10 minutes to give a word count. Note: "lock" can also appear elsewhere, such as at the start.

See [Sprint] for the other parameters you can add to a `/sprint` 

### sprint please

SprintMCs who add "please" to a sprint command can set it to run for longer, or have slightly increased "ready" time before it starts than would normally be allowed.

Note: This isn't to force anyone to be polite. It's an added check so you don't accidentally run long sprints.

Example:
{{< slash name="sprint" key0="options" val0="for 90 minutes please" >}} 
{{< atsprinto "sprint for 90 pls" >}} 
{{<alts>}}
{{< slash name="sprint" key0="options" val0="90 pls" >}} 
{{< atsprinto "sprint for 1.5 hours s’il vous plaît" >}} 
{{</alts>}}

### cancel please
{{<tag-mc>}}

{{< slash name="admin-force-cancel" >}} 
{{< atsprinto "cancel pls" >}} 
{{<alts>}}
{{< slash name="cancel" key0="please" val0="True" >}} 
{{< slash name="sprint" key0="options" val0="cancel pls" >}} 
{{< atsprinto "cancel ffs" >}} 
{{< atsprinto "cancel pleeeeeeeease" >}} 
{{</alts>}}

Forces a running sprint to end, regardless of how many sprinters have joined.

### nudge please
{{<tag-mc>}}

{{< slash name="admin-force-nudge" >}} 
{{< atsprinto "nudge pls" >}} 
{{<alts>}}
{{< slash name="sprint" key0="options" val0="nudge pls" >}} 
{{</alts>}}

Moves a running sprint on to the next stage immediately, typically only used for testing or debugging purposes.

If a bug occurs and the sprint becomes stuck, {{< atsprintoembed "nudge" >}} (without the "please") can also be used by anyone to nudge the sprint along. That's if Sprinto can successfully detect that the sprint is stuck.


<!--

| `/admin-forget-user 123456789` or `@sprinto forgetuser 123456789` | (MC) Stops a user 123456789 getting pinged at the start of sprints, as if they had typed `/forgetme` themselves. Replace `123456789` with the ID of the Discord user. If you can't see their user id, you might have to turn on "Developer Mode" in Discord settings, then "Copy ID" will appear when you right click the user. You can also use their user name (with no `@`), if they haven't left the server. Use `/admin-forget-all-users` or `@sprinto forget_all_users` (A) to forget all users. |
| `@sprinto pinguser <user> <number>` | (MC) Turn pings on for a user, like if they typed `/pingme`. Replace `<number>` with the number of sprints. Default is 3. For "never" use 0. For always, use 1000. |
-->