---
title : "What's new"
description: "What changed in Sprinto's rewrite"
lead: "Sprinto has been rebuilt from the ground up. The commands are the same. Here's what actually changed for you."
weight: 40
toc: true
keywords: ["what's new", "changelog", "release notes", "rewrite"]
---

Sprinto ran on the same code from March 2023 until June 2026. This release replaces all of it.

The important thing first: **you don't have to relearn anything.** {{<slashembed name="sprint" >}}, {{<slashembed name="join" >}}, {{<slashembed name="words" >}} and the rest work exactly as they did, the replies read the same, and the defaults haven't moved (15 minute sprint, 1 minute join window, 3 more minutes to report your words before the scoreboard posts). Longer sprints get a longer reporting window, up to 10 minutes, and Sprinto says how long you have when time's up.

What changed is everything around that: word counts are harder to trip up, sprints can be repeated and chained, pets are a collection now, and the ten-odd `setup-set-something` commands have collapsed into one.

Everything below is measured against the bot you were actually using. A few of these were fixed years ago in code that never made it to the live bot, so they're new to you even if they're old to me.

## What carried over

You don't have to set anything up again.

- **Ping subscriptions.** Everyone who was signed up is still signed up, in the same channels, with the same number of pings left. `always` and `never` came across too.
- **Sprint channels.** The same channels allow sprints, and an empty list still means anywhere. Edit it with {{<slashembed name="settings sprint-channels" >}}.
- **Ping roles.** The same roles get mentioned at the start of a sprint. Edit them with {{<slashembed name="settings roles" >}}.
- **Channel settings**, all six the old bot had: `show-ps`, `show-quotes`, `show-patreon`, `auto-pings`, `carl` and `walltime`. What you turned off is still off.
- **Your last word count**, so {{<slashembed name="same" >}} picks up where you left off.
- **Your pet**, with the same name and look, if you were supporting when Sprinto took over.

What didn't come across:

- **Server-wide defaults start empty.** The old bot kept these settings per channel, and your channels kept theirs. A setting you once applied to ten channels one at a time can now be set once with {{<slashembed name="settings server" >}}.
- **Settings the old bot never had** start at their defaults rather than being pinned on your behalf: family-friendly on, tidy-sprints off, shuffle-leaderboard off, random emoji, longest sprint 2 hours.
- **The channel default sprint**, which no channel on the old bot had set. Set one now with {{<slashembed name="settings sprint-defaults" >}}.

**Ping lists get shorter over the first few sprints.** People who left your server years ago were still being tagged. Sprinto now checks a few each sprint and quietly drops the ones who've gone. If one of them comes back and joins a sprint, their old setting resumes.

More at [Settings]({{<relref "settings" >}}).

## Word counts got smarter

**`tare` is back.** {{<atsprintoembed "tare 1000" >}} says your document already had 1,000 words in it and leaves the total you've reported alone, so the words-written figure corrects itself. {{<slashembed name="words" >}} can only move the total and {{<slashembed name="join" >}} moves both. It last worked in 2019.

**The scoreboard isn't final the moment it's posted.** For 10 minutes after time's up, {{<slashembed name="late" key0="count" val0="442" >}} puts your count in or fixes one you got wrong, and Sprinto edits the board in place. The channel doesn't have to wait for you: the next sprint can start while the old board is still open. The host can set that window with `late 20`, or close it with `late none`.

**Brackets holding nothing but a number are the count, not a comment.** {{<slashembed name="words" key0="count" val0="(350)" >}} reports 350. You can paste Sprinto's own reply straight back at him: {{<atsprintoembed "words 1,250 words (250 new)" >}} sets your total to 1,250 and your starting count to 1,000, so the "(250 new)" you sent is the answer you get.

**Obvious typos get fixed, and you can see what happened.** If your input is a clear slip, Sprinto takes the sensible reading and posts a small `↳` line showing the correction, so nothing is silently changed behind your back. When it genuinely can't tell what you meant, it now offers buttons with the totals already worked out instead of guessing at one.

**A total too big to have been written gets a second look.** If the total you gave would mean more new words than anyone could have typed in the time the sprint has run, Sprinto asks before filing it, with buttons for the readings it thinks you meant. One of them files the number exactly as you typed it, so nothing is off limits. Confirm a total that big once and it stops asking.

**Spelled-out numbers work.** "for twenty" and "fifty new" parse the way you'd expect.

**An error doesn't cost you your time.** If your first attempt at a word count comes back with an error, the grace window to try again is restored rather than eaten.

See [During the sprint]({{<relref "words" >}}) for how word counts work generally.

## Sprints can repeat, chain, chime and roll dice

### sprint again, and sprint identical

Two new ways to re-run the channel's last sprint, and the difference between them matters.

{{<slash name="sprint" key0="options" val0="again" >}}

`again` re-runs the same command, re-evaluated. Random wheels spin fresh, and relative windows like `in 5` or `iab` pick a new time against the current clock. It's the one you want for "do that again".

{{<slash name="sprint" key0="options" val0="identical" >}}

`identical` replays the exact durations that were resolved last time: same wait, same length, same reporting window. Use it when the last sprint landed nicely and you want a copy of it rather than another roll of the dice.

Both act as a base you can layer on top of, with an optional `but` to make it read like a sentence:

{{<slash name="sprint" key0="options" val0="again for 30" >}}
{{<slash name="sprint" key0="options" val0="identical but at :30 " >}}

One limit worth knowing: because `again` re-evaluates, it can't re-roll a sprint that was pinned to a fixed clock time (`at :45`, `until :00`). Sprinto will say so and point you at `identical`.

### Chains

You can queue up several blocks in one command, up to eight, with `then`:

{{<slash name="sprint" key0="options" val0="25 then 50 then 15" >}}

Repeat a block with `x` (or `times`), and set the gap between blocks with `break` (or `rest`). Without an explicit break you get 5 minutes between blocks.

{{<slash name="sprint" key0="options" val0="25 break 7 x3" >}}
{{<slash name="sprint" key0="options" val0="pomo x4" >}}

`pomo` is a 25 minute block on the pomodoro rhythm, with a longer break after every fourth one. `dream` is a preset too.

The break between blocks is the next block's join window, so every round invites the room again and nobody is carried over. Say `all` once and you're in for the rest of the chain:

{{<slash name="join" key0="word-count" val0="all" >}}

A bare `all` starts you from zero each round; `all 1000` carries your total forward. {{<slashembed name="leave" >}} takes it back.

To stop a chain without cutting the round that's running, say `last one`. That round finishes as usual and the rest is dropped. The person who started the chain, or a {{<role "@Sprint MC">}}, can do it.

### Mid-sprint chimes

The old bot said nothing between "go" and "time's up". Now a sprint can ring a bell part way through. Nothing rings unless something asks for it: your command, this channel's default sprint, or a preset like `marathon`, which rings at halfway.

{{<slash name="sprint" key0="options" val0="30 chime -5,-1" >}}
{{<slash name="sprint" key0="options" val0="45 chime 50%" >}}

A minus counts back from the end and a plain number forward from the start, up to five per sprint. `no bell` silences a channel that sets one.

The bell rings in the channel and pings nobody. Set `chimes` under {{<slashembed name="settings me" >}} to how many of a sprint's last bells should @ you, up to 5. It's 0 out of the box.

### Dice

{{<slash name="sprint" key0="options" val0="3d6" >}}

Three six-sided dice thrown and added up, so a length of 3 to 18 minutes that lands near the middle far more often than at either end. `d20` is a single die, `3d6+10` adds ten minutes, and `2d6 + d20` throws both lots. {{<atsprintoembed "roll 2d6 + d20" >}} throws dice on their own and starts nothing.

### Start early, and join as you start

{{<slash name="go" >}}

Don't wait out the rest of the join window. The sprint starts now and keeps the length you chose, or the ending time if you set one with `until`. Only the person who started it, or a {{<role "@Sprint MC">}}, can do this. In a chain it skips the break and starts the next round.

{{<slash name="sprint" key0="options" val0="for 20 join 1000" >}}

Start the sprint and be in it, in one command. The number is your starting word count. It posts as an ordinary join, so the room can see somebody's in and follow.

### Dry runs

Not sure what a command will do? Ask before you commit to it. Put `explain` in front of any sprint command and Sprinto shows you the schedule without scheduling anything, and says which parts came from your command, which from this channel's defaults, and which are his own.

{{<slash name="sprint" key0="options" val0="explain for 20 iab hel" >}}

Only you see it. `public` is the word that shows it to the room.

{{<slash name="explain" >}}

It's also a command in its own right. On its own it describes the sprint running here, or what a new one in this channel would do. Its options pick which sprint, how much detail, a command to try out, and whether to post it. Under the answer there's a dropdown for more or less detail and a **Post to channel** button.

### Countdowns that tick

Sprint and join-window countdowns now use Discord's own live timestamps, so they count down in your client, in your timezone, without anyone having to do timezone arithmetic in their head. Sprinto still does one final edit when a phase ends, so a finished sprint never sits there reading "3 minutes ago" forever.

### Other sprint fixes

`in 10 to 20` keeps its minimum now. A ranged start lands somewhere inside the window you asked for, instead of quietly dropping the lower bound. Undo and redo work properly as well, up to 100 steps back.

Three readings changed, where the old one was a guess nobody meant. `at 00 to 35` sets the start and the end, :00 to :35, rather than rolling a random length of up to 35 minutes. `15 til 45` starts at :15 rather than waiting fifteen minutes. And `sprint 3 to 10` rolls a length between 3 and 10 minutes, rather than reading `to` as a clock mark and running to the next :10.

A hyphen is a range now, so `for 10-15` and `in 1-2` work, as do the dashes phone keyboards send. `random` can go in front of anything that rolls: `random 5 to 9`, `random 3d6`, `random micro`.

See [Sprint (all options)]({{<relref "sprint" >}}) for the full list.

## Pets are a collection now


{{<slash name="pets" >}}

Pets from the old bot came across with you. If you were supporting when Sprinto took over, yours is already in the panel. If you weren't, it's kept out of sight rather than lost, and you get the same pet back, name and look intact, the first time you support again.

More at [Pets]({{<relref "emojipet" >}}).

## Setup got much simpler

The old bot had about ten near-identical commands for this: `setup-set-allowed-channel`, `setup-unset-allowed-channel`, `setup-pingroles-set`, `setup-set-show-quotes`, `setup-set-walltime` and so on. They're all gone, replaced by one command with subcommands.

{{<slash name="settings me" >}} your own settings. Anyone.

{{<slash name="settings channel" >}} this channel's settings. Anyone can look, {{<tag-admin>}} to change.

{{<slash name="settings server" >}} server-wide defaults. Anyone can look, {{<tag-admin>}} to change.

{{<slash name="settings roles" >}} the roles pinged at sprint start, using Discord's own role picker. {{<tag-admin>}} to change.

{{<slash name="settings sprint-channels" >}} which channels allow sprints, using Discord's own channel picker. An empty list means sprints work anywhere, which is the default. {{<tag-admin>}} to change.

{{<slash name="settings sprint-defaults" >}} new: give this channel its own default sprint length, start time, bells and late window, so a bare {{<slashembed name="sprint" >}} does whatever your room actually likes. It can be a clock time, so a room always sprints to the half hour: `until :00/:30 for at least 5`. An end time needs that `for at least`, the shortest sprint it's allowed to leave you with. {{<tag-admin>}} to change.

{{<slash name="settings theme" >}} new: pick the emoji used in sprint announcements. Pick **Screen reader friendly** and Sprinto uses the same four named emoji every sprint instead of a fresh random trio, and stops shouting its headings, which is a good deal easier to listen to. {{<tag-admin>}} to change.

There's a text form too, `settings <key> <value>`, and it's forgiving: on, off, sometimes, default and their obvious synonyms all work. Give a value it doesn't recognise and it shows you the current one rather than scolding you. Give a key it doesn't recognise and it lists the keys.

**One thing that surprises admins:** the channel and server panels show only what you've changed from the defaults. A freshly set up server sees a nearly empty panel. That's not a bug and nothing is missing, it just means you're running on defaults.

Four settings are worth knowing about, since they're new or newly documented: `family-friendly` is **on** by default and keeps the sweary quotes and replies out; `tidy-sprints` is **off** by default and, when on, has Sprinto delete its own join and word-count confirmations to keep a busy channel readable; `shuffle-leaderboard` is **off** by default; and `max-sprint` caps how long a sprint may run here, **2 hours** to start with, which is as long as Sprinto goes. That last one is the only setting a channel can't loosen: set it on the server and the channel both and the smaller of the two wins, and `please` doesn't get past it.

More on all of this at [Settings]({{<relref "settings" >}}) and [Set up your server]({{<relref "setup" >}}).

## Pings behave themselves

`pinguser N` respects the number you gave it. Asking to ping someone for the next three sprints now pings them for three sprints.

**Only people on the ping list get pinged.** The participant line at the start of a sprint still shows everyone who has joined, but the mentions are scoped, so it's a quiet list for anyone who isn't due a notification.

**The ping list is ordered by who's about to run out.** `(last ping)` now comes at the head of the names instead of sitting somewhere in the middle of them. The `(always)` tag next to standing subscribers is gone: it said the same thing about the same people every sprint.

**People who leave the server stop being pinged.** This is one of those things that was supposed to work and never did.

**And you can stop pings for someone else.** {{<slashembed name="admin-forget-user" >}} stops pinging one writer in this channel, and takes a pasted user ID as well as a mention, so it still works once they've left the server ({{<tag-mc>}} or {{<tag-admin>}}). {{<slashembed name="admin-forget-all-users" >}} stops pinging everyone here ({{<tag-admin>}}). Both reply only to you.

See [pingme]({{<relref "pingme" >}}) for the whole set.

## Smaller changes you might notice

- Feedback gets an answer. {{<slashembed name="feedback" >}} still posts anonymously to the support server, and if I reply, the reply comes back to you in the channel you sent it from. You don't have to join anything to hear back.
- Notices from me can reach every server without an update. They turn up under the sprint results, in the same place as the quotes, and each server sees a given one once. The old bot had them written into its code, which is why the last of them expired in 2021.
- Numbers hold together. `sprint 1,000` used to run for one minute. Commas, underscores and apostrophes now group digits in durations, word counts, `tare`, `pingme` and chimes alike.
- `for 30 minutes starting in 8 min` used to be thrown out as an unknown option. It runs.
- A message wrapped in underscores is writing, not a command, however many words are in it. `_takes a deep breath_` used to be read from its first word.
- Typo correction is choosier. `spront` and `jion` still get fixed, but ordinary words said to Sprinto no longer turn into commands: `@Sprinto good luck!` could start the sprint early for everyone waiting. Anything that ends or resets something for other people has to be typed correctly now.
- The random phrases actually rotate. Cooldowns clean up properly and the weighted picks retry, so the variety works the way it was always meant to.
- Sprinto owns up to downtime. If he was offline over a sprint, a missed time's-up reopens the word-count window from now with a "late by N" note, and a completely missed ending posts one wrap-up instead of replaying the whole sprint as though nothing had happened.

## Changed

- The vote link points at [top.gg](https://top.gg/bot/421646775749967872/vote) now. The old discordbots.org link still redirects.
- Help links point here, at sprintobot.com, instead of the old GitHub wiki.
- The end-of-sprint clock defaults to a live countdown rather than a fixed wall time.
- The big-number easter egg now cites The Lord of the Rings (about 481,103 words).

## Not in this release

Some things didn't make the crossing. Straight answers:

- **`delay N`** no longer holds the join window shut so a sprint can be queued to start later. That was used something like one to two thousand times a year while it existed, so it wasn't nothing, but it carried a lot of complexity. The word itself still works: `delay 10` now means the same as `in 10`, a plain wait before the start with the join window open. Proper sprint scheduling is planned and will work differently.

- **Voice.** The chime in a voice channel is built, but it hasn't been proven in a live call yet, so it's switched off at launch. It was only ever enabled for about 32 servers. It's planned to come back. See [Voice]({{<relref "voice" >}}).

- Two smaller absences: the round-trip `/ping` command, and some of the Active Sprinters role diagnostics.

If you were relying on any of these, say so with {{<slashembed name="feedback" >}} and it'll help me sort out what comes back first.

## Under the hood

Kept short on purpose, but a few of these you'll feel:

- Rewritten in Rust, on a single scheduler whose deadlines are written to a PostgreSQL database. A restart no longer loses sprints that were in flight.
- Sprinto writes down what happened before he announces it. A crash now costs at most one message, and never produces a duplicate announcement.
- Quotes and phrases are data rather than code. If someone reports a quote that's wrong, tasteless or misattributed, it can be corrected or pulled the same day instead of waiting for a release.
- The commands and replies are deliberately unchanged. Most of this work went into making the familiar bits harder to break.

## See also

- [Sprint basics]({{<relref "basics" >}})
- [Sprint (all options)]({{<relref "sprint" >}})
- [Settings]({{<relref "settings" >}})
- [FAQ]({{<relref "faq" >}})
