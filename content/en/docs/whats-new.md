---
title : "What's new"
description: "What changed in Sprinto's rewrite, for people who used the old bot"
lead: "Sprinto has been rewritten. Most commands work as before. This page lists what's new and what works differently."
weight: 40
toc: true
keywords: ["what's new", "changelog", "release notes", "rewrite"]
---

## The main changes

- Sprints can be repeated with `again`, chained into rounds with `then`, and started at a time of day, such as `at 14:30`.
- You can report or fix a word count after the scoreboard posts.
- Setup is one command, {{<slashembed name="settings" >}}.
- Pets are a collection now, managed with {{<slashembed name="pets" >}}.

<!-- main only: cancel vote -->
{{<slashembed name="cancel" >}} starts a vote when other people are in the sprint.

A few of these were fixed years ago in code that never made it to the live bot, so they're new to you even if they're old to me.

Basic sprinting is the same: {{<slashembed name="sprint" >}}, {{<slashembed name="join" >}}, {{<slashembed name="words" >}}.

The defaults haven't changed: a 15-minute sprint, a 1-minute join window, and 3 minutes after time's up to report your word count before the scoreboard posts. Longer sprints get a longer word-count window, up to 10 minutes. When time's up, Sprinto says how long you have to report your word count.

## Word counts

**You can report or fix a word count after the scoreboard posts.** For 10 minutes after time's up, {{<slashembed name="late" key0="count" val0="442" >}} adds your word count or corrects it, and Sprinto edits the scoreboard. The next sprint can start while this late window is still open.

**The person starting a sprint can change the late window.** `late 20` makes the late window 20 minutes long. The late window can be up to 60 minutes. `late none` turns the late window off. To change the late window for every sprint in a channel, add the `late` option to the channel's default sprint.

<!-- main only: over-long late window refused -->
Asking for a late window over 60 minutes, such as `late 99`, is refused, and the reply names the maximum.

**`tare` is back.** {{<atsprintoembed "tare 1000" >}} sets your starting count to 1,000 words and keeps your total, so the words you wrote this sprint are counted from 1,000. `tare +50` moves your starting count up 50 words, and `tare -10` moves it down 10 words. Use `tare` when the starting count you joined with was wrong; `/words` changes only your total. `tare` last worked in November 2019.

**You can paste Sprinto's reply back as your word count.** {{<atsprintoembed "words 1,250 words (250 new)" >}} sets your total to 1,250 words and your starting count to 1,000 words, so Sprinto's reply shows the same "(250 new)" you sent.

**More numbers can be spelled out**, such as `for twenty` and `fifty new`.

**`/same` uses the count you last joined with.** Every join records the count you joined with, including a plain {{<slashembed name="join" >}}, which starts you at 0 words. So after a plain join, `/same` offers 0 words next time.

**Sprinto corrects obvious typos in a word count, and says so.** A small `↳` line says what was changed. When your word count could mean two things, Sprinto shows a button for each meaning.

**You still get time to retry after an error.** If your first word count gets an error reply, the time to try again is given back to you.

See [During the sprint]({{<relref "words" >}}) for how word counts work.

## Sprint commands

### `again` and `identical`

Two new ways to run the channel's last sprint again.

{{<slash name="sprint" key0="options" val0="again" >}}

`again` runs the last sprint command again. Anything random is rolled again, and start times like `in 5` or `iab` count from now. Use it for "do that again".

{{<slash name="sprint" key0="options" val0="identical" >}}

`identical` repeats the last sprint's exact times: the same wait, the same length and the same time to report word counts. Use it when you want an exact copy of the last sprint.

You can add options to either one, with an optional `but`:

{{<slash name="sprint" key0="options" val0="again for 30" >}}
{{<slash name="sprint" key0="options" val0="identical but at :30 " >}}

`again` can't repeat a sprint set to a clock time (`at :45`, `until :00`). Sprinto says so and suggests `identical`.

### Chains

**Chain up to 8 rounds in one command with `then`.**

{{<slash name="sprint" key0="options" val0="25 then 50 then 15" >}}

**Repeat a round with `x` or `times`.**

{{<slash name="sprint" key0="options" val0="25 break 7 x3" >}}
{{<slash name="sprint" key0="options" val0="pomo x4" >}}

**The length you give is writing time, in a chain or not.** `for 20 x3` is three rounds of 20 minutes' writing each. To make each round take exactly 20 minutes with the word counts inside it, use `round 20 x3`.

**`pomo` is 25 minutes of writing, then 5 minutes until the next round starts.** The word counts are collected inside those 5 minutes, so `pomo x4` starts a round every half hour. In a chain of 5 or more rounds, the break after round 4 is at least 15 minutes, counted from when the word counts close. Another preset, `dream`, runs a 10-minute sprint that starts on the next 5-minute mark.

**The break comes after the word counts.** Unless you set a break length, each round's word-count window is followed by a 5-minute break, so the gap between rounds is the word-count window plus 5 minutes. Set a different break with `break 7`; `rest`, `smoko` and `take` also mean `break`.

**`next 5` sets the whole gap between rounds**, word counts and break together, counted from when writing stops. `sprint 15 next 5 x3` starts a round every 20 minutes. The word counts are collected first, and the rest of the gap is the break. `gap`, `next in` and `next round in` mean the same as `next`.

<!-- main only: break between rounds capped -->
**A break between rounds is at most 1 hour, or 2 hours with `please`.** The limit applies however the break is written, such as `break 20`, `next 25` or `break until :30`. A longer break saved in a default sprint is cut to 1 hour.

**The default sprint can include a gap between rounds**, with `settings preset 20 next 10` or `settings preset 20 break 7`. Setting a default gap replaces the default break, and setting a default break replaces the default gap. The default gap has no effect on a single sprint.

**To stay in for the next round, report your count with `next`.** Or say `all` once to stay in for the rest of the chain:

{{<slash name="join" key0="word-count" val0="all" >}}

`all` carries your total forward into each round, and `all 1000` does the same starting from 1,000 words. To start every round from 0, use `all 0`. {{<slashembed name="leave" >}} takes you out of the chain.

**`last one` stops a chain after the round that's running.** That round finishes as usual, and the rest of the chain is dropped. `last round`, `last block`, `last focus` and `last sprint` also stop the chain. The person who started the chain, or a {{<role "@Sprint MC">}}, can stop a chain this way.

See [Chain sprints]({{<relref "chains" >}}) for more, and [Chain timing]({{<relref "chain-timing" >}}) for diagrams.

### Clock times and your timezone

**`at` and `until` take a time of day**: `at 14:30`, `at 2:30pm`, `at half past two`, `at quarter to five`, `until 15:00`. `quarter of five`, `quarter after` and `quarter before` work too. A time without am or pm means the next time the clock shows it, so `at 1:30` typed at one o'clock is half an hour away.

**A time of day needs your timezone.** Set it with {{<slashembed name="timezone" >}}: type a city, country or timezone abbreviation (`Brisbane`, `Japan`, `PST`) and pick from the matches, each shown with the time there now. If you use a time of day without setting a timezone, Sprinto tells you to set one. Minute marks like `at :30` work without a timezone.

`/timezone` on its own shows your timezone and the time there, next to the current time as your device shows it. `/timezone none` clears it. {{<slashembed name="settings me" >}} shows your timezone too.

**Or name the place in the command**: `at 10:30 est`, `at 6:30 new york`, `until 14:00 Europe/Paris`, `at 10:00 GMT+2`.

**Other ways to write a time also work**: offsets (`at 14:00+10`, `at 14:00Z`), ISO 8601, a pasted Discord timestamp, and forms from other languages (`午前10時`, `14h30`, `14 Uhr`). `at 10:30 to 11:00` and `at 10:30-11:00` run from the first time to the second.

**The usual limit on how far ahead a sprint can start still applies**: a time of day can be at most 50 minutes away. A time of day can't be part of a channel's default sprint; minute marks can.

**In a timezone half an hour off UTC**, such as Adelaide or Kolkata, `at :30` means half past on your clock. Minute marks in channel and server defaults stay on UTC. `/sprint explain` says whether it used your clock or UTC.

**If no end time fits between `for at least` and `for at most`, Sprinto says so.** The reply names the shortest `for at most` that would work. The old bot ran an ordinary 15-minute sprint instead. When part of the conflict comes from the channel's or server's default sprint, that part is dropped, and `/sprint explain` says which part.

### More ways to set start and end times

**`in at least` is the new name for `grace`.** `in at least 2` sets the shortest wait before an `at` or `next` start. `grace` still works.

**`in next 5+1` skips a mark that's less than 1 minute away.** `in next 5` starts on the next 5-minute mark, however close it is. In a chain, `break next 10+2` ends the break on the next 10-minute mark that's at least 2 minutes away.

**You can say the mark in words**: `next 5 minute mark`, `at the next 5 minute mark`, `in the next 5 minutes`, `next quarter`, `next half` and `until the next hour` all work.

**`for the next 30` starts now and ends in 30 minutes.** Any wait comes out of the 30 minutes: `for the next 30 in at least 3` waits 3 minutes, then you write for 27 minutes. The old bot refused `for the next 30`.

**`on :30` means `at :30`.**

**`end -5` puts the word-count time inside the sprint.** With `for 20 end 5`, you write for 20 minutes, then have 5 minutes for word counts. With `for 20 end -5`, you write for 15 minutes and word counts are collected in the last 5 minutes, so the sprint is over at 20 minutes. Sprinto shows `for 20 end -5` as `round 20 end 5`.

### Mid-sprint chimes

**Sprinto can post chimes during a sprint: messages that say how much time is left.** The old bot posted nothing between the start and time's up. A sprint has chimes only when they are set in your sprint command or in the channel's default sprint, or when the sprint uses the `marathon` (60 minutes) or `megathon` (120 minutes) preset. Those two presets add a chime at halfway.

{{<slash name="sprint" key0="options" val0="30 chime -5,-1" >}}
{{<slash name="sprint" key0="options" val0="45 chime 50%" >}}

In a chime time, a minus sign counts back from the end of the sprint, and a plain number counts forward from the start. A sprint can have up to 5 chimes. `no chime` or `no bell` turns off the channel's default chimes.

**By default, a chime pings nobody.** To be @-mentioned by a sprint's last chimes, set **Max chimes** in {{<slashembed name="settings me" >}} to how many chimes should ping you, from 0 to 5. The default is 0.

### Dice and random lengths

{{<slash name="sprint" key0="options" val0="3d6" >}}

**`3d6` rolls three six-sided dice and adds them up**, so the sprint is 3 to 18 minutes long, and much more often near the middle than at either end. `d20` rolls one die, `3d6+10` adds 10 minutes, `3d6 - 2` takes off 2 minutes, and `2d6 + d20` rolls both sets. `5.3 + 2d12` works too.

`roll 3d6`, `dice 3d6` and `random 3d6` also set the length. `3d5h` is still read as 3 days and 5 hours. {{<atsprintoembed "roll 2d6 + d20" >}} rolls dice without starting a sprint.

**`random` can go in front of anything that rolls**: `random 5 to 9`, `random 3d6`, `random micro`. `however long` spins the random wheel, like `hel`.

### Start early, and join as you start

{{<slash name="go" >}}

**`/go` starts the sprint now, without waiting for the join window to end.** The sprint keeps the length you chose, or the end time you set with `until`: if you use `/go` 1 minute after `sprint in 5 until :30`, the sprint still runs to :30. Only the person who started the sprint, or a {{<role "@Sprint MC">}}, can use `/go`.

**In a chain, `/go` during a break starts the next round at once.** The round keeps its planned end time, so you write for longer, and no later round moves. `/go` is refused if the round would become longer than the channel's `max-sprint`.

{{<slash name="sprint" key0="options" val0="for 20 join 1000" >}}

**Start the sprint and join it in one command.** The number is your starting count, in words. Sprinto posts it as an ordinary join, so others in the channel can see that you've joined.

### Dry runs

**Put `explain` in front of any sprint command to see what it would do, without starting a sprint.** Sprinto shows the times, and says which parts came from your command, which from this channel's defaults, and which are his own defaults. Only you see the answer; add `public` to show it to the channel.

{{<slash name="sprint" key0="options" val0="explain for 20 iab hel" >}}

{{<slash name="explain" >}}

**`/explain` is a command too.** On its own, it describes the sprint running in this channel, or what a new sprint here would do. Its options let you choose which sprint to describe, how much detail to show, a sprint command to try, and whether to post the answer. Under the answer is a dropdown for more or less detail and a **Post to channel** button.

### Live countdowns

**Countdowns update live, in your own timezone.** Sprint and join-window countdowns use Discord's live timestamps. When the join window or the sprint ends, Sprinto edits the countdown one last time, so it doesn't read "3 minutes ago" afterwards. The end of a sprint is shown as a countdown by default; the old bot showed a clock time.

### Other sprint fixes

**`in 10 to 20` starts between 10 and 20 minutes from now.** The old bot dropped the lower number.

**A hyphen makes a range**: `for 10-15` and `in 1-2` work, and so do the dashes that phone keyboards type.

**A channel default that no longer fits is skipped.** If later changes to the server's settings put a channel's default sprint out of range, Sprinto skips that default and runs an ordinary sprint. `/explain` says which part was skipped.

**Undo and redo work, up to 100 steps back.**

See [Sprint (all options)]({{<relref "sprint" >}}) for the full list.

## Pets are a collection now

**You keep a collection of pets, and pick one to sprint with you.** The old bot gave you a single emoji pet. The pet in your **companion seat** is your **companion**. You have one companion at a time, and you can't swap companions during a sprint, because your companion is already on the scoreboard. Everything is in one panel:

{{<slash name="pets" >}}

**Pets from the old bot were carried over.** If you were supporting Sprinto when the new Sprinto took over, your pet is already in the panel. If you weren't, your pet is kept hidden, and comes back with the same name and look the first time you get a companion seat again.

More at [Pets]({{<relref "emojipet" >}}).

## Setup got much simpler

The old bot had about ten near-identical setup commands: `setup-set-allowed-channel`, `setup-unset-allowed-channel`, `setup-pingroles-set`, `setup-set-show-quotes`, `setup-set-walltime` and so on. They're all gone, replaced by one command with subcommands.

**Most settings can be set once for the whole server.** In the old bot, almost all settings were per channel. A setting you once applied to ten channels one at a time can now be set once with {{<slashembed name="settings server" >}}.

{{<slash name="settings me" >}} Your own settings. Anyone can use it.

{{<slash name="settings channel" >}} This channel's settings. Anyone can look, {{<tag-admin>}} to change.

{{<slash name="settings server" >}} Server-wide defaults. Anyone can look, {{<tag-admin>}} to change.

{{<slash name="settings roles" >}} The roles pinged at sprint start, using Discord's own role picker. {{<tag-admin>}} to change.

<!-- main only: Sprint MC and Admin role lists -->
With `/settings roles`, an admin can also choose which roles count as Sprint MC and which count as Sprint Admin.

{{<slash name="settings sprint-channels" >}} Which channels allow sprints, using Discord's own channel picker. An empty list means sprints work anywhere, which is the default. {{<tag-admin>}} to change. The typed command `channels` adds, removes and resets sprint channels, and lists them, for example `@Sprinto channels add`.

{{<slash name="settings sprint-defaults" >}} New: give this channel its own default sprint, with its length, start time, chimes and late window, so a plain {{<slashembed name="sprint" >}} runs that sprint. The default can end on a minute mark. For example, to make every sprint in the channel end on the hour or half hour, use `until :00/:30 for at least 5`. A default with an end time also needs `for at least`, which sets the shortest sprint length allowed. {{<tag-admin>}} to change.

{{<slash name="settings theme" >}} New: pick the emoji used in sprint announcements. With **Screen reader friendly**, Sprinto uses the same four named emoji every sprint, and stops shouting its headings, which is a good deal easier to listen to. {{<tag-admin>}} to change.

**There's a typed form too**: `settings <key> <value>`. As values, it accepts on, off, sometimes, default and their common synonyms. If it doesn't recognise the value, it shows the current value. If it doesn't recognise the key, it lists the keys.

**The channel and server panels show only what you've changed from the defaults.** On a newly set up server, the panel is nearly empty, because every setting is at its default.

**Some settings are new, or newly documented.** Here are their defaults:

| Setting | Default | What it does |
| --- | --- | --- |
| `family-friendly` | on | Keeps the sweary quotes and replies out. |
| `tidy-sprints` | off | When on, Sprinto deletes its own join and word-count confirmations, to keep a busy channel readable. |
| `shuffle-leaderboard` | off | When on, shuffles the order of the scoreboard. |
| `theme` | random emoji | The emoji used in sprint announcements. |
| `max-sprint` | 2 hours | The longest sprint allowed in the channel or server. 2 hours is also Sprinto's own limit. |

`max-sprint` is the only setting a channel can't loosen: if the server and the channel both set it, the smaller value applies, and adding `please` doesn't get past it.

**Carl-bot can start sprints again.** If a channel opts in with `settings carl on`, another bot set up to do so, such as Carl-bot, can `@Sprinto` in that channel to start a sprint. See [Carl-bot x Sprinto]({{<relref "carlbot" >}}).

More on all of this at [Settings]({{<relref "settings" >}}) and [Set up your server]({{<relref "setup" >}}).

## Pings

**`pinguser N` pings for N sprints.** Asking to ping someone for the next 3 sprints now pings them for 3 sprints.

**People who have left the server are dropped from ping lists.** In the old bot, they were still tagged unless someone removed them by hand. Sprinto now checks and drops a few each sprint, so a long ping list gets shorter over the first few sprints.

**Only people on the ping list get pinged.** The participant line at the start of a sprint still shows everyone who has joined, but only people due a ping get a notification.

**People on their last ping are listed first.** People marked `(last ping)` now come before the other names, after any role mentions. The `(always)` tag next to people who are always pinged is gone: it said the same thing about the same people every sprint.

**You can stop pings for someone else.** {{<slashembed name="admin-forget-user" >}} stops pinging one writer in this channel. You can give it a mention or a pasted user ID, so it still works after the writer has left the server ({{<tag-mc>}} or {{<tag-admin>}}). {{<slashembed name="admin-forget-all-users" >}} stops pinging everyone in this channel ({{<tag-admin>}}). Both reply only to you.

See [Ping me]({{<relref "pingme" >}}) for the whole set.

## When Discord is the problem

Sometimes slash commands stop working because of a problem at Discord. Sprinto now tells you when that happens.

**Sprinto posts a note when slash commands stop reaching him.** In a channel with a sprint running, the note says what to type instead, such as `@Sprinto join same` or `@Sprinto words 200`. When slash commands work again, Sprinto crosses the note out. If Discord's status page reports the problem, the note says so and links status.discord.com.

**{{<slashembed name="ping" >}} shows response times, with a chart.** It shows Sprinto's response time, Discord's published API response time and how response times vary across Sprinto's shards (its connections to Discord). It also shows which shard your server is on, and a chart of response times over the last two hours with Discord incidents marked. It lists the ping-list commands too, for anyone who meant {{<slashembed name="pingme" >}}. {{<atsprintoembed "ping" >}} shows the same.

<!-- main only: /ping incident card -->
When Discord has an incident open, `/ping` shows it on its own highlighted card. If Sprinto last checked Discord's status page more than a minute ago, `/ping` checks the page again first.

**During a Discord incident, Sprinto's status reads "Listening to status.discord.com".** Sprinto's status is the line under his name in the member list. It shows this text while Discord's status page reports a problem.

<!-- main only: status line switches sooner -->
The status changes as soon as Discord's status page reports a problem, without waiting for commands to fail.

<!-- main only: incident note after sprints -->
**When Discord has an incident open, a sprint's results end with a one-line note about it.** The note replaces a tip or notice, but never a quote, and each server sees the note at most once a day.

## Smaller changes you might notice

- **Replies to feedback reach you.** {{<slashembed name="feedback" >}} still posts anonymously to the support server. If I reply, the reply is posted in the channel you sent the feedback from, so you don't have to join the support server to hear back.
- **I can post notices to every server without an update to Sprinto.** They appear under the sprint results, in the same place as the quotes, and each server sees each notice once. The old bot's notices were written into its code, which is why the last of them expired in 2021.
- **`for 30 minutes starting in 8 min` works.** The old bot rejected it as an unknown option.
- **A message wrapped in underscores isn't read as a command**, however many words are in it. `_takes a deep breath_` used to be read as a command, from its first word.
- **The random phrases rotate as intended**, so the same one comes up less often.
- **If Sprinto was offline during a sprint, he says so when he's back.** If Sprinto missed a sprint's time's up, he reopens the word-count window when he's back, with a "late by N" note. A sprint whose whole ending was missed gets one wrap-up message.
- **The vote link points at [top.gg](https://top.gg/bot/421646775749967872/vote).** The old discordbots.org link still redirects.
- **Help links point here**, at sprintobot.com, instead of the old GitHub wiki.
- **The big-number easter egg now cites The Lord of the Rings** (about 481,103 words).

## What works differently

If you used the old bot, these are the changes most likely to surprise you.

<!-- main only: cancel vote -->
**{{<slashembed name="cancel" >}} starts a 2-minute vote when other people are in the sprint.** The sprint is cancelled if the ✅ votes are at least twice the ❌ votes and come from at least a quarter of the sprinters; people who don't vote aren't counted on either side. A Sprint MC's ✅ cancels the sprint at once, and {{<slashembed name="cancel-please" >}} still cancels without a vote. Before the sprint starts, or if nobody else is in it, `/cancel` still ends it straight away.

**On a single sprint, `next 5` is refused. Use `in next 5`.** In the old bot, `next 5` started the sprint on the next 5-minute mark. Now `next 5` sets the gap between rounds in a chain, so on a single sprint Sprinto refuses it and shows both meanings. `next 5 minute mark` and `at the next quarter` still start the sprint on a clock mark, and Sprinto writes `in next 5` itself when it repeats a sprint or saves a default.

**Three commands are read differently.**

| Command | Old bot | Now |
| --- | --- | --- |
| `at 00 to 35` | A random length of up to 35 minutes | Starts at :00 and ends at :35 |
| `15 til 45` | Waited 15 minutes | Starts at :15 |
| `sprint 3 to 10` | Ran until the next :10 | A random length from 3 to 10 minutes |

**Commas group digits.** `sprint 1,000` used to run for 1 minute. Commas, underscores and apostrophes now group digits in durations, word counts, `tare`, `pingme` and chimes.

**Typo correction is stricter.** `spront` and `jion` are still corrected, but ordinary words said to Sprinto are no longer read as commands. In the old bot, `@Sprinto good luck!` could start the sprint early for everyone waiting. A command that ends or resets something for other people must now be typed correctly.

## Not in this release

Some things from the old bot aren't in the new one. Straight answers:

- **`delay N` no longer holds the join window shut** so a sprint can be queued to start later. It was used about 1,000 to 2,000 times a year, so it wasn't nothing, but it made the code much more complex. The word itself still works: `delay 10` now means the same as `in 10`, a plain wait before the start with the join window open. A way to schedule sprints is planned.

- **Voice.** The chime in a voice channel is built, but it hasn't been proven in a live call yet, so it's switched off at launch. It was only ever enabled for about 32 servers. It's planned to come back. See [Voice]({{<relref "voice" >}}).

- **Some of the Active Sprinter role diagnostics.**

If you were relying on any of these, say so with {{<slashembed name="feedback" >}} and it'll help me sort out what comes back first.

## Under the hood

Kept short on purpose, but a few of these affect you:

- Rewritten in Rust, on a single scheduler whose deadlines are written to a PostgreSQL database. A restart no longer loses sprints that were running.
- Sprinto writes down what happened before he announces it. A crash now costs at most one message, and never produces a duplicate announcement.
- Quotes and phrases are data rather than code. If someone reports a quote that's wrong, tasteless or misattributed, it can be corrected or pulled the same day instead of waiting for a release.
- Most commands and replies are deliberately the same. Most of this work went into making the familiar bits harder to break.

## See also

- [Sprint basics]({{<relref "basics" >}})
- [Sprint (all options)]({{<relref "sprint" >}})
- [Chain sprints]({{<relref "chains" >}})
- [Settings]({{<relref "settings" >}})
- [FAQ]({{<relref "faq" >}})
