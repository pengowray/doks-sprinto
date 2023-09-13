---
title : "Allowed channels (admin)"
description: Admin whitelist commands
lead: 
url: "docs/allowed-channels"
---
### Sprinting channel whitelist (Sprinto Setup)

If any channels on your server are set as 'allowed' with `set-allowed-channel` then starting sprints will be disallowed in channels which have not been set as allowed. When a member of your server tries to sprint in a channel which has not been allowed they'll pointed to all allowed channels. If no channels are explicitly set as 'allowed' (the default) then Sprinto allows sprinting in all channels.

Alternatively, you can use Discord's permissions system to disallow Sprinto from reading or sending messages in channels where he should not be used or seen. You may also have to remove permissions from users to use bot commands in those channels too. However, using the `set-allowed-channel` command (detailed below) is simpler and is recommended.

Note: Sprinto does not have a concept of secret or hidden channels. Sprinto will attempt to point Discord users to a sprint room even if the user does not have permission to see or use that channel.

All these commands require an {{<tag-admin>}}, that is: a {{<role "@Sprint Admin">}}, server administrator or server owner.

### set-allowed-channel
{{<tag-admin>}}

{{< slash name="setup-set-allowed-channel" >}} 
{{< atsprinto "set_sprinting_channel_here" >}} 

Whitelist a channel to allow sprints to be run in it. Multiple channels can be selected by using this command in multiple channels. 

Starts using a whilelist if it was previously not used.

### unset-allowed-channel
{{<tag-admin>}}

{{< slash name="setup-unset-allowed-channel" >}} 
{{< atsprinto "unset_sprinting_channel_here" >}} 

Remove a channel from the whitelist. If none are left on the whitelist, sprinting is not restricted to any channel.

### clear-allowed-channels
{{<tag-admin>}}

{{< slash name="setup-clear-allowed-channels" >}} 
{{< atsprinto "clear_allowed_channels" >}} 

Clears the whitelist and stops using it. Allows sprints to be run in all channels.

<!-- Previously named "/setup-reset-sprinting-channels" but sometimes people accdientally used that command because it had "sprint" in it. Also: @sprinto reset_sprinting_channels -->

<!-- Alternatively, you can remove Sprinto's _Send Messages_ permission in rooms you don't want Sprinto to respond in, or remove his _Read Messages_ permission in channels you don't want Sprinto seen in. --> 