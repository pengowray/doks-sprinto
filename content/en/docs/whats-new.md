---
title : "What's new"
description: "What changed in Sprinto's rewrite"
lead: "Sprinto has been rebuilt from the ground up. The commands are the same. Here's what actually changed for you."
weight: 40
toc: true
keywords: ["what's new", "changelog", "release notes", "rewrite"]
---

<!-- TODO(owner): add release date once known -->

Sprinto ran on the same code from March 2023 until June 2026. This release replaces all of it.

The important thing first: **you don't have to relearn anything.** {{<slashembed name="sprint" >}}, {{<slashembed name="join" >}}, {{<slashembed name="words" >}} and the rest work exactly as they did, the replies read the same, and the defaults haven't moved (15 minute sprint, 1 minute join window, 10 more minutes to report your words before the scoreboard closes).

What changed is everything around that: word counts are harder to trip up, sprints can be repeated and chained, pets are a collection now, and the ten-odd `setup-set-something` commands have collapsed into one.

Everything below is measured against the bot you were actually using. A few of these were fixed years ago in code that never made it to the live bot, so they're new to you even if they're old to me.

## Word counts got smarter

**{{<slashembed name="same" >}} is reliable again.** On the old bot, an absent-minded plain {{<slashembed name="join" >}} would quietly wipe the word count it had stored for you, so {{<slashembed name="same" >}} would reuse a zero and you'd have to look your number up again. Joining no longer touches your stored count.

**Obvious typos get fixed, and you can see what happened.** If your input is a clear slip, Sprinto takes the sensible reading and posts a small `↳` line showing the correction, so nothing is silently changed behind your back. When it genuinely can't tell what you meant, it now offers buttons with the totals already worked out instead of guessing at one.

**Spelled-out numbers work.** "for twenty" and "fifty new" parse the way you'd expect.

**An error doesn't cost you your time.** If your first attempt at a word count comes back with an error, the grace window to try again is restored rather than eaten.

See [During the sprint]({{<relref "words" >}}) for how word counts work generally.

## Sprints can repeat, chain and chime

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

`pomo` is a 25 minute block on the pomodoro rhythm, with a longer break before every fourth one. `dream` is a preset too.

### Mid-sprint chimes

The old bot said nothing between "go" and "time's up". Now every sprint gets a one minute warning by default. You can move it, add more (up to five), express it as a percentage, or turn it off for that sprint:

{{<slash name="sprint" key0="options" val0="30 chime -5,-1" >}}
{{<slash name="sprint" key0="options" val0="45 chime 50%" >}}
{{<slash name="sprint" key0="options" val0="20 chime none" >}}

If you'd like to be personally pinged on those chimes rather than just seeing them in the channel, turn on `chimes` under {{<slashembed name="settings me" >}}. It's off by default.

### Dry runs

Not sure what a command will do? Ask before you commit to it. `explain`, `timeline` and `preview` show you the schedule without scheduling anything.

{{<slash name="sprint" key0="options" val0="explain for 20 iab hel" >}}

`peek` does the same and shows the answer only to you. Adding `me` or `private` has the same effect.

### Countdowns that tick

Sprint and join-window countdowns now use Discord's own live timestamps, so they count down in your client, in your timezone, without anyone having to do timezone arithmetic in their head. Sprinto still does one final edit when a phase ends, so a finished sprint never sits there reading "3 minutes ago" forever.

### Other sprint fixes

`in 10 to 20` keeps its minimum now. A ranged start lands somewhere inside the window you asked for, instead of quietly dropping the lower bound. Undo and redo work properly as well, up to 100 steps back.

See [Sprint (all options)]({{<relref "sprint" >}}) for the full list.

## Pets are a collection now


{{<slash name="pets" >}}

Pets from the old bot came across with you.

More at [Pets]({{<relref "emojipet" >}}).

## Setup got much simpler

The old bot had about ten near-identical commands for this: `setup-set-allowed-channel`, `setup-unset-allowed-channel`, `setup-pingroles-set`, `setup-set-show-quotes`, `setup-set-walltime` and so on. They're all gone, replaced by one command with subcommands.

{{<slash name="settings me" >}} your own settings. Anyone.

{{<slash name="settings channel" >}} this channel's settings. Anyone can look, {{<tag-admin>}} to change.

{{<slash name="settings server" >}} server-wide defaults. Anyone can look, {{<tag-admin>}} to change.

{{<slash name="settings roles" >}} the roles pinged at sprint start, using Discord's own role picker. {{<tag-admin>}} to change.

{{<slash name="settings sprint-channels" >}} which channels allow sprints, using Discord's own channel picker. An empty list means sprints work anywhere, which is the default. {{<tag-admin>}} to change.

{{<slash name="settings sprint-defaults" >}} new: give this channel its own default sprint length and start time, so a bare {{<slashembed name="sprint" >}} does whatever your room actually likes. {{<tag-admin>}} to change.

There's a text form too, `settings <key> <value>`, and it's forgiving: on, off, sometimes, default and their obvious synonyms all work. Type a key it doesn't recognise and it shows you the current value rather than scolding you.

**One thing that surprises admins:** the channel and server panels show only what you've changed from the defaults. A freshly set up server sees a nearly empty panel. That's not a bug and nothing is missing, it just means you're running on defaults.

Three settings are worth knowing about, since they're new or newly documented: `family-friendly` is **on** by default and keeps the sweary quotes out; `tidy-sprints` is **off** by default and, when on, has Sprinto delete its own join and word-count confirmations to keep a busy channel readable; `shuffle-leaderboard` is **off** by default.

More on all of this at [Settings]({{<relref "settings" >}}) and [Set up your server]({{<relref "setup" >}}).

## Pings behave themselves

`pinguser N` respects the number you gave it. Asking to ping someone for the next three sprints now pings them for three sprints.

**Only people who asked to be pinged get pinged.** The participant line at the start of a sprint still shows everyone who has joined, but the mentions are scoped, so it's a quiet list for anyone who didn't sign up for a notification.

**People who leave the server stop being pinged.** This is one of those things that was supposed to work and never did.

See [pingme]({{<relref "pingme" >}}) for the whole set.

## Smaller fixes you might notice

- Added news items survive restarts. They used to vanish.
- The random phrases actually rotate. Cooldowns clean up properly and the weighted picks retry, so the variety works the way it was always meant to.
- Sprinto owns up to downtime. If he was offline over a sprint, a missed time's-up reopens the word-count window from now with a "late by N" note, and a completely missed ending posts one wrap-up instead of replaying the whole sprint as though nothing had happened.

## Changed

- The vote link points at [top.gg](https://top.gg/bot/421646775749967872/vote) now. The old discordbots.org link still redirects.
- Help links point here, at sprintobot.com, instead of the old GitHub wiki.
- The end-of-sprint clock defaults to a live countdown rather than a fixed wall time.
- The big-number easter egg now cites The Lord of the Rings (about 481,103 words).

## Not in this release

Some things didn't make the crossing. Straight answers:

<!-- TODO(owner): sign off on the delay wording before publishing -->
- **`delay N`**, which held the join window shut so a sprint could be queued to start later, isn't in this release. It was used something like one to two thousand times a year while it existed, so it wasn't nothing, but it carried a lot of complexity. Proper sprint scheduling is planned and will work differently.
<!-- end delay item -->

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
