---
title : "Ping roles"
description: always ping role commands
lead: "Always ping a role at sprint start"
---
You can set roles to always mention at the start of sprints in a channel.

If members of your Discord server can self assign roles (for example using another bot), then you may have a role named {{<role "@Sprinters">}} and want Sprinto to always mention (ping) those users when a new Sprint starts. You can do that with setup-pingroles-set.

## Commands for changing the ping roles list

### pingroles-set

{{< slash name="setup-pingroles-set" key0="role" val0="_@sprinters-role_" >}} 
{{< atsprinto "always_ping_role _sprinters-role_" >}} 

Replace _@sprinters-role_ with the name of the role you want Sprinto to mention at the start of sprints, such as {{<role "@Sprinters">}}.

 (A) The chosen role will always be pinged whenever a new sprint starts. 
 
### pingroles-list

{{< slash name="setup-pingroles-list" >}} 
{{< atsprinto "list_ping_roles" >}} 

Lists "roles to always mention at the start of sprints in this channel".

### pingroles-remove

{{< slash name="setup-pingroles-remove" key0="role" val0="_@role-name_" >}} 
{{< atsprinto "never_ping_role _role-name_" >}} 

(A) Remove _{{<role "@role-name">}}_ from the "always ping role" list.

### pingroles-clear

{{< slash name="setup-pingroles-clear" >}} 
{{< atsprinto "clear_ping_roles" >}} 

(A) Remove all roles from the "always ping role" list.

## Related commands

### set-autopings off

{{< slash name="setup-set-autoping" key0="setting" val0="Off" >}} 
{{< atsprinto "setAutoPings off" >}}

You may wish to use ping roles in combination with {{< atsprintoembed "setAutoPings off" >}} to stop Sprinto pinging individual users at the start of a sprint, and only use the role or roles assigned.

### forget-all-users

{{< slash name="admin-forget-all-users" >}}
{{< atsprinto "forget_all_users" >}}

You may wish to remove the remaining pings users have left to receive. This is like if everyone in the channel typed {{< slashembed name="forgetme" >}}. Useful in combination with the above (set-autopings off)

### sprint noping
Examples:
{{< slash name="sprint" key0="options" val0="for 1000 seconds noping" >}} 
{{< atsprinto "sprint for 99.9 please noping" >}}

Add `noping` to a sprint command to start a sprint without pinging any roles or user. You can use this to test sprint commands without alerting anyone, or to sprint quietly by yourself while everyone's sleeping.

## Notes

* These settings are per channel; if you want a role pinged in multiple sprint channels then, for example, use {{< slash name="setup-pingroles-set" key0="role" val0="@Sprinter">}} in each sprinting channel. 
* Multiple roles and different combinations of roles can be used in each channel.
* These commands are only for mentions (pings) at the start of sprints. Anyone who has joined a sprint will be pinged by their username during a sprint.
* These commands will not cause Sprinto to assign anyone to the roles. Sprinto doesn't have any mechanism for that.
* Sprinto will still track recent sprinters and ping them (as well as the roles you choose). If sprinters want to always be pinged they can also use {{< slashembed name="pings-always" >}} to be specifically pinged at the start of sprints regardless.
