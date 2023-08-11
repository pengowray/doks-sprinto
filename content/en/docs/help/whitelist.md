---
title : "Allowed channels (admin)"
description: Admin whitelist commands
lead: 
url: "docs/allowed-channels"
---
### Sprinting channel whitelist (Sprinto Setup)

If a whitelist is setup, sprints will be disallowed in channels which have not been 'whitelisted' and users will be pointed to the allowed (whitelisted) channels.

Note: Sprinto does not have a concept of secret or hidden channels. Sprinto will attempt to point Discord users to a sprint room even if the user does not have permission to see or use that channel.

(A) = Admin. All these commands require a Sprint Admin, etc.

### set-allowed-channel

{{< slash name="setup-set-allowed-channel" >}} 
{{< atsprinto "set_sprinting_channel_here" >}} 

(A) Whitelist a channel to allow sprints to be run in it. Multiple channels can be selected by typing this in multiple channels. Starts using a whilelist if it was previously not used.

### unset-allowed-channel

{{< slash name="setup-unset-allowed-channel" >}} 
{{< atsprinto "unset_sprinting_channel_here" >}} 

(A) Remove a channel from the whitelist. If none are left on the whitelist, sprinting is not restricted to any channel.

### clear-allowed-channels

{{< slash name="setup-clear-allowed-channels" >}} 
{{< atsprinto "sprinto clear_allowed_channels" >}} 

(A) Clears the whitelist and stops using it. Allows sprints to be run in all channels.

<!-- Previously named "/setup-reset-sprinting-channels" but sometimes people accdientally used that command because it had "sprint" in it. Also: @sprinto reset_sprinting_channels -->