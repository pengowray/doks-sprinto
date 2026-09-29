---
title : "Curious commands"
description: "Commands you don't need for sprinting: response times, dice, writing dares, and links."
lead: "Commands you don't need for sprinting, such as Sprinto's response time, dice rolls and writing dares."
# identifier: "less-used"
# url: "docs/less-used"
keywords: ["ping", "latency", "parse", "dare", "roll", "dice", "invite", "donate", "support", "vote", "merch", "sprintmc", "refresh active role", "prefix"]
---

You don't need any of these commands to sprint. They're documented here for anyone curious.

### ping

{{<slash name="ping" >}}
{{<alts>}}
{{<atsprinto "ping" >}}
{{<atsprinto "latency" >}}
{{</alts>}}

Check how quickly Sprinto and Discord are responding. `/ping` shows a card that only you can see, with:

- Sprinto's response time and Discord's API response time, such as `Sprinto 45 ms · Discord API 62 ms`.
- The range of response times across Sprinto's shards, and which shard your server is on. Discord splits a large bot's servers into groups called shards, each with its own connection.
- A chart of both response times over the last 2 hours: Discord's API in blue and Sprinto's in green, with any Discord incidents marked.
- How many commands and button clicks Sprinto answered and missed, such as `Commands and clicks in the last 2 hours: 1,204 answered, 3 missed (0.2%).`
- The commands for changing your pings, such as {{<slashembed name="pingme" >}} and {{<slashembed name="forgetme" >}}, for anyone who typed `/ping` looking for `/pingme`.

<!-- main only: ping missed-command window -->
The count of missed commands covers the last 2 hours if anything was missed in them. Otherwise it covers the last day if anything was missed that day, and otherwise the last week.

When Discord's status page reports an incident, the card also says so, such as `Discord is reporting an issue: "Elevated API errors". More at https://status.discord.com`

<!-- main only: ping incident card -->
The incident has its own highlighted card, and `/ping` checks Discord's status page again if the last check is more than a minute old.

{{<atsprintoembed "ping" >}} posts the same readings and chart in the channel as plain text. Use it when slash commands aren't getting through. Type `ping` exactly: `pings` and `pingme` are different commands.

### Status line

Under Sprinto's name in the member list, the status line usually reads `Listening to /sprint`.

When slash commands aren't reaching Sprinto but mentions are, the status line reads `Listening to @Sprinto sprint`. Use `@Sprinto` commands until it changes back.

<!-- main only: status line on any incident -->
While Discord's status page reports an incident, the status line reads `Listening to status.discord.com`.

The dot next to Sprinto's name stays green in every case. See also [Troubleshooting]({{<relref "troubleshooting" >}}).

### parse

{{< atsprinto "parse 90m" >}}

{{< reply >}}
⏱️ I read that as **90 minutes**.
{{< /reply >}}

Check how Sprinto reads a length of time. `parse` reads every way a sprint length can be written, and doesn't start a sprint. A number on its own is minutes, so `parse 45` is 45 minutes, and `1:30` is 1 minute 30 seconds. From an hour up, the reply also gives hours and minutes: `parse 30000s` is 500 minutes (8 hours 20 minutes).

`@Sprinto parse` on its own replies with examples. `parse` has no slash command. Type `parse` exactly: Sprinto doesn't correct typos in it.

Sprinto reads lengths of time with a Rust version of [TimeSpanParser](https://github.com/pengowray/TimeSpanParser), the open source library written for the old version of Sprinto.

### dare

{{< atsprinto "dare me" >}}

Get one writing dare. Sprinto replies with the dare in italics. The dares come from the old [word_sprints](https://nanowrimo.org/word_sprints) page on nanowrimo.org, from around 2016. That page has since been deleted.

`dare`, `dare me`, `dareme`, `give me a dare`, `gimme a dare`, `give us a dare` and `i want a dare` all work. Sprinto doesn't correct typos in these, so type one exactly. In a server, start with `@Sprinto`, as in `@Sprinto dare me`. In a DM with Sprinto, `dare me` on its own works. `dare` has no slash command.

### roll

{{< atsprinto "roll 2d6 + d20 + 10" >}}

{{< reply >}}
🎲 You rolled **29**. (2d6: 4, 4 · 1d20: 11 · +10)
{{< /reply >}}

Roll dice. Sprinto replies with the total and what each die showed. `roll` on its own rolls one six-sided die, and the brackets just name it: `(1d6)`.

Other names: `rolls`, `dice`, `die`, `rng`, `rnd`, `rand`, `random`.

`roll` has no slash command: use `@Sprinto roll`, or send `roll` to Sprinto in a DM. Type `roll` exactly: Sprinto doesn't correct typos in it.

Sprint lengths can be dice too: {{<slashembed name="sprint" key0="options" val0="3d6" >}} rolls the sprint length. See [Random sprint lengths]({{<relref "random" >}}).

### invite

{{< atsprinto "invite" >}}

Get a link to the [Invite Sprinto]({{<relref "invite" >}}) page on this site, which has the invite link and setup steps. Also `invites` and `setup`.

{{< reply >}}
Sprinto invite link and quick setup instructions can be found here: <https://sprintobot.com/docs/invite-sprinto/>
{{< /reply >}}

### support / vote / donate / merch

Each of these replies with one link:

| Command | Sprinto replies with a link to |
| --- | --- |
| {{<atsprintoembed "donate" >}} (also `patreon`) | Sprinto's Patreon |
| {{<atsprintoembed "support" >}} | the Sprinto Planet support server, for help from the developer, to give feedback, or to tell people about your writing server |
| {{<atsprintoembed "vote" >}} (also `upvote`) | Sprinto's page on top.gg, where you can vote for Sprinto |
| {{<atsprintoembed "merch" >}} | the Sprinto merch store on Redbubble |

None of these have a slash command. Type `donate` exactly: Sprinto doesn't correct typos in it.

### sprintmc

{{<atsprinto "sprintmc" >}}

Get instructions for setting up the {{< role "@Sprint MC" >}} role:

{{< reply >}}
To give someone sprint-MC powers (like `lock`), create a role named exactly `Sprint MC` and assign it to them. `Sprint Admin` works the same way for settings powers.
{{< /reply >}}

<!-- main only: choose MC and Admin roles -->
A Sprint Admin can also choose existing roles to count as Sprint MC or Sprint Admin, in `/settings roles`. See [Sprint (admin)]({{<relref "admin-sprint" >}}#sprint-mc-and-sprint-admin-roles).

For more, see [Admin commands]({{<relref "admin" >}}).

### create / refresh active role

{{<slash name="create-active-role" >}}
{{<slash name="refresh-active-role" >}}

`/create-active-role` sets up the {{< role "@Active Sprinters" >}} role on your server. `/refresh-active-role` moves people in and out of the role, in case it's out of date. Both need the **Manage Roles** permission, or a {{< role "@Sprint Admin" >}} role. For more about the role, see [ActiveSprinter]({{< relref "ActiveSprinter" >}}).

### prefix

{{< atsprinto "prefix" >}}
Show Sprinto's prefix on your server. The prefix is always slash (`/`), and it can't be changed.

{{<alts "Why though?">}}
The old Sprinto also answered chat messages that started with an underscore (_). Sprinto ignores an underscore, slash or exclamation mark straight after the @Sprinto mention, so {{< atsprinto "_time" >}} still works, but there's no need for it.
{{</alts>}}

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Starting a sprint (basics)]({{<relref "basics" >}})
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
- [Voice]({{<relref "voice" >}}): voice channel sounds, paused at the moment
- [FAQ]({{<relref "faq" >}})
