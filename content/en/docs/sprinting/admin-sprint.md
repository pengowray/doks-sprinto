---
title : "Sprint (admin)"
description: "Sprint commands for Sprint MCs and Sprint Admins"
url: "/docs/sprint-admin"
lead: "Sprint commands for Sprint MCs and Sprint Admins, and the 'please' option, which raises Sprinto's limits for anyone."
---

Most commands on this page need a {{<tag-mc>}} or {{<tag-admin>}} role. The `please` option is for anyone. For who counts as a Sprint MC or Sprint Admin, see [Sprint MC and Sprint Admin roles](#sprint-mc-and-sprint-admin-roles).

## Commands

### sprint lock

{{<tag-mc>}}

{{< slash name="sprint" key0="options" val0="lock" >}}

Start a sprint that only a Sprint MC can cancel. Only a Sprint MC can start a locked sprint: anyone else who adds `lock` gets `Sorry, only a Sprint MC can lock a sprint (make it uncancellable).` Other words for `lock`: `locked`, `nocancel`, `no cancel`, `uncancellable`.

Example:
{{< slash name="sprint" key0="options" val0="for 30 in 5 endtime 10 lock" >}}
{{< atsprinto "sprint for 30 in 5 endtime 10 lock" >}}
Start a 30-minute locked sprint in 5 minutes, with 10 minutes at the end to give word counts. `lock` can go anywhere in the command, such as at the start.

If anyone else tries to cancel a locked sprint, Sprinto replies `Sorry, only an administrator or Sprint MC can cancel this sprint.` For a locked sprint, {{<atsprintoembed "status" >}} shows `Cannot be cancelled.`

<!-- main only: locked sprint vote buttons -->
In a vote to cancel a locked sprint, people who aren't Sprint MCs can press ❌ but not ✅.

See [Sprint (all options)]({{<relref "sprint" >}}) for the other options you can add to a `/sprint`.

### sprint please

Add `please` to a sprint command to raise some of Sprinto's limits. Anyone can use it, and a {{<role "@Sprint MC">}} gets higher limits:

| Limit | Without `please` | With `please` | Sprint MC with `please` |
| --- | --- | --- | --- |
| Sprint length | 1 hour | 2 hours | 2 hours |
| Start, given in minutes (`in 40`) | 1 hour ahead | 90 minutes ahead | 2 hours ahead |
| Time to give word counts (`endtime`) | 30 minutes | 30 minutes | 1 hour (`endtime 1hr`) |

A start given as a clock time (`at 14:30`, `at :30`) or with `next` (`in next 15`) can be at most 50 minutes away without `please`.

`please` can't raise a sprint's length past the longest sprint set in the channel's or server's settings, which can be lower than 2 hours. `megathon`, a 2-hour sprint, includes `please` automatically.

<!-- main only: chain break cap -->
The break between rounds of a chain can be up to 60 minutes, or 120 minutes with `please`.

`please` is a check against starting a long sprint by mistake, not a politeness rule. Other words that count as `please` include `pls`, `plz`, `thanks`, `ty`, `cheers`, `merci`, `danke`, `gracias`, `could you` and `sudo`.

Example:
{{<slash name="sprint" key0="options" val0="for 90 minutes please" >}}
{{<atsprinto "sprint for 90 pls" >}}
{{<alts>}}
{{<slash name="sprint" key0="options" val0="90 pls" >}}
{{<atsprinto "sprint for 1.5 hours s'il vous plaît" >}}
{{</alts>}}

### cancel please

{{<tag-mc>}}

{{< slash name="cancel-please" >}}
{{< atsprinto "cancelplease" >}}
{{<alts>}}
{{< atsprinto "cancel-please" >}}
{{< atsprinto "cancel_please" >}}
{{< atsprinto "cancelpls" >}}
{{< atsprinto "forcecancel" >}}
{{</alts>}}

End the sprint at once, with no vote, however many people have joined.

Once writing has started and other people are in the sprint, only a Sprint MC can use `/cancel-please`. Before writing starts, or when nobody else is in the sprint, anyone can use it, and a plain {{<slashembed name="cancel" >}} also ends the sprint at once.

<!-- main only: cancel vote -->
### Vote to cancel

<!-- main only: cancel vote -->
Once writing has started and other people are in the sprint, {{<slashembed name="cancel" >}} starts a 2-minute vote with ✅ and ❌ buttons. The full rules are in [Vote to cancel]({{<relref "words" >}}#vote-to-cancel). A Sprint MC can decide the vote, even if they aren't in the sprint:

<!-- main only: cancel vote -->
- Press ✅ to cancel the sprint at once. The vote message then reads `@alex asked to cancel the sprint. Sprint MC @kit cancelled the sprint.`
- Press ❌ to end the vote. The sprint continues, and the vote message then reads `@alex asked to cancel the sprint. Sprint MC @kit ended the vote, so the sprint continues.`

<!-- main only: cancel vote -->
A Sprint MC's own `/cancel` starts or joins a vote like anyone else's. To skip the vote, use `/cancel-please`. After a vote fails, nobody can start another vote for 5 minutes, but a Sprint MC can still use `/cancel-please`.

### go

{{<slash name="go" >}}
{{<atsprinto "go" >}}
{{<alts>}}
{{<atsprinto "begin" >}}
{{<atsprinto "start" >}}
{{<atsprinto "startnow" >}}
{{<atsprinto "gonow" >}}
{{<atsprinto "letsgo" >}}
{{</alts>}}

Start the waiting sprint now, skipping the rest of the join window. Only the person who started the sprint or a Sprint MC can do this. Type `go` exactly: Sprinto doesn't correct typos to `go`.

A sprint set to end at a clock time, such as `/sprint in 5 until :30`, still ends at that time. A sprint given a length keeps its length.

In a chain, `/go` during the break starts the next round now. The round's writing time gets longer, and the round still finishes when the timetable said. The start message says so, such as `Started 3 minutes early with /go, so this round runs 18 minutes and still finishes on schedule.`

If starting now would make the round longer than the room's longest sprint, Sprinto refuses, such as `Sorry, starting now would make this round 125 minutes, over this room's 120 minutes limit.` The round length in this reply includes the time for word counts.

### last one

{{<slash name="sprint" key0="options" val0="last one" >}}
{{<atsprinto "last one" >}}
{{<alts>}}
{{<atsprinto "end chain" >}}
{{<atsprinto "stop after this" >}}
{{<atsprinto "wrap up" >}}
{{</alts>}}

End a chain after the round that's running. Only the person who started the chain or a Sprint MC can do this. Sprinto replies `🙂 Okay, this will be the last one. The chain will not continue after round 2.` See [Chains]({{<relref "chains" >}}).

### nudge please

{{<tag-mc>}}

{{<slash name="nudge-please" >}}
{{<atsprinto "nudge pls" >}}
{{<alts>}}
{{<atsprinto "nudgeplease" >}}
{{<atsprinto "nudge-please" >}}
{{<atsprinto "nudgepls" >}}
{{<atsprinto "forcenudge" >}}
{{</alts>}}

Move a running sprint on to its next stage now. This is mostly used for testing. Sprinto replies `I have been nudged.` and says where the sprint is now.

If a sprint seems stuck, anyone can use {{< atsprintoembed "nudge" >}} without `please`. It works only when Sprinto can tell the sprint is stuck. `@Sprinto results` does the same as `@Sprinto nudge`. There's no `/nudge` slash command.

### Clean up these results

{{<tag-admin>}}

Take the quote off a posted scoreboard. Right-click the scoreboard (long-press on mobile) and choose **Apps** > **Clean up these results**. Sprinto shows a private panel:

{{< reply ephemeral="1" >}}
What should come off these results?
{{< /reply >}}
{{< buttons >}}
{{< button "Remove the quote" >}}
{{< /buttons >}}

**Remove the quote** edits the quote out of the posted scoreboard, and Sprinto stops showing that quote in this server. Sprinto replies `Done. That quote won't be shown in this server again.`, then `That covers this server only. Report it as well and it can be looked at everywhere.` with a **Report it too** button. The reasons you can pick in a report are Offensive or upsetting, Wrongly attributed, Wrong or misleading, Not right for this server, and Something else, and you can add a note.

By default, Discord shows **Clean up these results** only to members with the Administrator permission. A server can give it to another role in **Server Settings** > **Integrations**, but Sprinto still refuses anyone who isn't a Sprint Admin: `Sorry, you need to be a Sprint Admin to change settings.`

### Sprint MC and Sprint Admin roles

What each role can do:

- **Sprint MC**: cancel sprints without a vote, lock sprints so only Sprint MCs can cancel them, and start sprints early.
- **Sprint Admin**: everything a Sprint MC can do, and change Sprinto's settings for the server.

The server owner and members with the Administrator or Manage Server permission are always Sprint Admins. Anyone with a role named Sprint MC or Sprint Admin also counts. See [Admin commands]({{<relref "admin" >}}).

<!-- main only: choose MC and Admin roles -->
{{<slash name="settings roles" >}}

<!-- main only: choose MC and Admin roles -->
A Sprint Admin can also choose existing roles to count as Sprint MC or Sprint Admin, in `/settings roles`. A dropdown chooses which list to show. `@everyone` can't be chosen.

## See also

- [Setup]({{<relref "setup" >}}) (setting up Sprinto)
- [Admin commands]({{<relref "admin" >}}) — about the {{<tag-admin>}} and {{<tag-mc>}} roles and commands

- [ActiveSprinter]({{<relref "activesprinter" >}}) (another role used by Sprinto)
- [Allowed channels (admin)]({{<relref "whitelist" >}}) — commands to prevent users running sprints where they're not supposed to
- [Carl-bot x Sprinto]({{<relref "carlbot" >}}) — using carl-bot to schedule sprints.
- [Ping me (admin section)]({{<relref "pingme#ping-roles" >}}) — set a role to always be pinged at sprint start
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
- [Voice]({{<relref "voice" >}}): voice channel sounds, paused at the moment
