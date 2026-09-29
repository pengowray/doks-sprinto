---
title : "FAQ"
description: "Answers to frequently asked questions about Sprinto"
lead: Answers to frequently asked questions about Sprinto
keywords: ["chain wars", "programming language", "Doks", "Hugo", "TimeSpanParser", "pronouns", "Streamling"]
---
## Sprinto isn't responding to my commands

Discord's slash commands can be terribly inconsistent, and it can be hard to know if the problem is a permissions problem, or a Discord UI/UX issue, or something else.

For fixes, see [Troubleshooting]({{<relref "troubleshooting" >}}).

When Discord stops delivering slash commands, Sprinto notices, registers its commands again, and posts a note in any channel with a sprint running. The note gives the `@Sprinto` command to type instead.

## What happens if Sprinto goes offline during my sprint?

A restart doesn't lose your sprint. Sprinto picks it up where it got to.

If he missed time's up, he posts it late and says how late he was. You get the full word count window from that moment.

{{< reply >}}
⏰ Time was actually up 4 minutes ago. I was offline, sorry! Submit your words now.
{{< /reply >}}

If he missed the ending altogether, you get one wrap-up post with the results, not the whole sprint replayed. That board is final: `/late` won't change it.

{{< reply >}}
I was offline when this sprint ended, sorry! Here are the results:
{{< /reply >}}

If he was away for more than two hours past the end, the sprint is dropped and nothing is posted.

Chimes (the notices saying how much time is left) that came due while he was away are skipped if they're more than 1 minute late, or if the writing has already ended.

## Why do I need to join my own sprint? Shouldn't I join automatically?

1. Sprinto doesn't know your starting word count and doesn't want to guess.

2. So other people in the channel can easily follow your lead and join too without having to look up documentation on how to do it.

3. You'll get pinged anyway. If you start a sprint and don't join it, Sprinto lists you first on the "📣 Participants:" line, marked "(not joined)", and pings you when the sprint starts. It pings you again at time's up if someone else joined.

To start a sprint and join it in one command, add `join` to the options. {{<slashembed name="sprint" key0="options" val0="20 join 1000">}} starts a 20-minute sprint and joins you with a starting count of 1,000 words. `20 join` joins you with a starting count of 0, and `20 /same` joins you at your last word count.

You can join a sprint at any time: during the join window, while people are writing, while word counts are being collected, and during a chain's break.

## Is there a way to keep a running scoreboard, set goals, or track progress over multiple sprints?

No, sorry. Keeping track of sprints is high on my to-do list and I'd like to add these sorts of features eventually.

Each scoreboard can show a total for the room: "Combined word count: 1,234 words over 15 minutes." appears when 3 or more people wrote. A chain's last scoreboard adds a total for the whole chain, for example "Whole chain: 3,250 words over 75 minutes." There's no running total for each person across sprints.

## How about back-to-back sprints? (also called chain wars or word crawls)

Yes. `/sprint` runs chains directly. Put any of these in its `options`:

- `25 then 50 then 15` runs three sprints in a row.
- `pomo x4` runs four 25-minute rounds and starts a new round every half hour. `pomo` is short for `for 25 gap 5`, so word counts are collected in the 5 minutes between rounds.
- `25 gap 10 x3` runs three 25-minute rounds and starts a new round every 35 minutes. Word counts are collected in the 10-minute gap, and the rest of the gap is the break.
- `25 break 7 x3` runs three 25-minute rounds with a 7-minute break after each round's word counts are in. The rounds start about 36 minutes apart: 25 minutes of writing, 4 minutes to report word counts, then the 7-minute break.

A chain can have up to 8 rounds. If you don't set a break, each break is 5 minutes, and it starts after the round's word counts are in. In a `pomo` chain of more than 4 rounds, the break after every 4th round is at least 15 minutes.

A break between rounds can be at most 1 hour, or 2 hours with `please`.

To skip the rest of a break, the person who started the chain, or a Sprint MC, can start the next round early with `/go`. The round still finishes at its planned time, so it runs longer, and the rest of the chain keeps its timetable:

{{< reply >}}
Started 3 minutes early with `/go`, so this round runs 28 minutes and still finishes on schedule.
{{< /reply >}}

If starting early would make the round longer than the longest sprint the room allows, `/go` refuses:

{{< reply >}}
Sorry, starting now would make this round 70 minutes, over this room's 60 minutes limit.
{{< /reply >}}

More chain commands:

- {{<atsprintoembed "last one">}} (or `no more`) ends the chain after the round that's running.
- {{<slashembed name="join" key0="word-count" val0="all">}} (or `join all`) joins you to every remaining round, with a starting count of 0 in each round. `join all same` carries your total from one round into the next.
- {{<slashembed name="leave" key0="what" val0="next">}} gives up your place in the next round and keeps you in this one.
- {{<slashembed name="sprint" key0="options" val0="again">}} runs the last sprint in the channel again, and random lengths are rolled again. `again chain` repeats a whole chain, and `identical` repeats the exact same times.

For everything chains can do, see [Chain sprints]({{<relref "chains" >}}).

## What is Sprinto written in?

Sprinto was rewritten in 2026. It's now written in Rust, using the twilight Discord library, with a PostgreSQL database behind it. It runs on Linux, in production and in testing alike.

The basic sprint commands (`/sprint`, `/join`, `/words`, `/same`, `/final` and `/late`) work the same as before. Sprinting also gained clock-time starts after you set `/timezone`, chains, `again` to repeat the last sprint, and dice lengths such as `sprint 3d6`. During Discord outages, Sprinto now warns channels. For the full list, see [What's new]({{<relref "whats-new" >}}).

## How'd you make this amazing website?

This website uses the Doks theme for Hugo with a sprinkling of custom shortcodes and CSS. You can view the website's source code at [github.com/pengowray/doks-sprinto](https://github.com/pengowray/doks-sprinto).

## Is Sprinto's source code available?

I've released the [TimeSpanParser](https://github.com/pengowray/TimeSpanParser)—a timespan parser library I wrote for the old version of Sprinto—under a permissive open source license. Sprinto's full source code has not yet been released. I plan to release it eventually.

## How do I hide Sprinto from my @ mentions list?

You can vote to make the issue more visible to Discord's developers: [Add "Include mentions by bots" to the display list for Recent Mentions, so it can be turned off](https://support.discord.com/hc/en-us/community/posts/360036052991-Add-Include-mentions-by-bots-to-the-display-list-for-Recent-Mentions-so-it-can-be-turned-off-).

This issue has been reduced somewhat since Discord introduced chat replies, and I should probably say no one's ever actually brought this up to me, so maybe it's not really frequently asked.

## Would it be possible that the WPM stat would actually be counted for the duration a participant has been in the sprint?

> TL;DR: No, it would complicate the user experience too much and sprinters would no longer feel like they were participating in the same sprint.

The scoreboard's WPM is your words divided by the length of the whole sprint, even if you joined late.

I've considered making it work as suggested, and it seems like it would make sense, especially for very long sprints, but it gets complicated and messy when you think it through. For example, what happens when someone forgets to join until later in a sprint? Or if a sprinter wants to leave half way and doesn't want the second half of the sprint counted? So Sprinto would need special commands for users to adjust how long they were present (and Sprinto would also have to teach sprinters how to use these commands) for a correct WPM.

It also means not everyone's WPM has the same basis, so it's less of a level playing field: it's harder to maintain a high WPM over a longer sprint.

It also would make the scoreboard less intuitive to look at if it had more complex WPM calculations. To give the full information needed for the new WPMs to be easily understood, the scoreboard would need to also include the minutes and seconds each sprinter was joined for, or include both WPM calculations, but this becomes very messy, and the scoreboard would have to explain why it has two WPMs for each user and it would stop being fun any more.

Perhaps in future, the duration-adjusted WPM could be told to participants each time they give a word count, and they could do this multiple times during the sprint. This could happen while leaving the full-sprint WPM on the scoreboard. This still seems to add more complication than it's worth though, but let me know if you'd really like to see this feature added.

Similar issues arise for attempting to end a sprint early if all sprinters finalize (`/final`) before the time's up. There might be some special use case for this, but it's highly fraught with potential issues for little payoff. When everyone has used `/final`, the writing still runs until time's up, and the results are posted about 12 seconds later.

## Why did you create Sprinto?

[![Image](/images/programmers-credo.png)](https://twitter.com/pinboard/status/761656824202276864)

I saw the need for a good Sprint bot. The project looked like it would have a small, limited scope (incorrect), that I could complete quickly (also incorrect), and then I could move onto bigger and better Discord bots (I haven't), and it would encourage me to do more creative writing (nope, I've been too busy maintaining Sprinto and this documentation).

## Does Sprinto (yes, the bot) have assigned pronouns?

Sprinto is commonly pronouned _he/him_ to match his fictional persona, or _it_ when it's not functioning correctly. Sprinto is unaware of gender identity and pronoun usage, so please refer to him, her, them, or it as you please, or in whatever way makes you and your fellow sprinters feel the least discontentment over the course of your word-sprinting experience.

Sprinto is a non-sentient robot and so has no ability (for now) to think or feel anything at all so has no ability to have a perspective on the matter of self gender identity. However I am working to rectify this through the development of an analog phenomenal conscious experience circuit (APCEC), which will (perhaps as soon as next weekend) give Sprinto a local (or semilocal) pico-qualia churn above the Landauer threshold, demonstrating wakeful gestalt-like subjectivity and spontaneous authorial volition. Once this milestone is met I will update this FAQ with a percepts plot of Sprinto's wishes. <!-- (See Journal of Aneuronal Phenomenology) -->

## Are there other projects by Pengo Wray I can check out?

**Streamling Overlay app**: If you're a streamer or content creator, try out [Streamling Overlay app](https://itch.io/game/summary/554492) for Windows to show your current music. It's free or pay what you want.

## Where can I ask more questions?

Come to [Sprinto Planet](https://discord.gg/TZJ8YVU), Sprinto's support server, and ask away, or use the `/feedback` command.

Feedback is posted anonymously on Sprinto Planet: the post doesn't name you or your server. If the developer answers, the answer comes back to you in the channel you asked from, so you don't have to join Sprinto Planet to hear back.

Examples:
{{<slash name="feedback" key0="text" val0="Why is Sprinto so awesome?" >}}
{{<atsprinto "feedback Where can I give to help Sprinto's development?" >}}

Sprinto replies:

{{< reply >}}
Thanks! Your feedback is posted anonymously on the Sprinto Planet server. If the dev replies, the reply appears here.
{{< /reply >}}

## See also

- [Overview of Help]({{<relref "overview" >}})
- [Curious commands]({{<relref "curious" >}}) — commands you don't need.
