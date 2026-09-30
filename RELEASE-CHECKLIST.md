# Before merging `rust-release` to `master`

Merging to `master` publishes immediately. These were inline `TODO(owner)` comments in
the pages until 2026-08-01, when they were moved here: HTML comments in content survive
into `public/docs/*/index.md`, into the RSS feeds and into `search-index.json`, so every
one of them was publicly readable and searchable on the built site.

Keep new working notes in this file rather than in `content/`.

## Decisions

- [ ] **Release date.** `docs/whats-new.md` opens without one. Add it, or drop the idea.
- [ ] **`delay` wording.** `docs/whats-new.md`, the "Not in this release" list. The item
      now says the join-window behaviour is gone but that `delay 10` still works as
      `in 10`. Sign it off, and decide whether it still belongs under that heading.
- [x] **Invite permissions.** (2026-09-30: Send Messages in Threads added, the link is now `permissions=277297331520`; unused permissions still to review.) Was: `docs/start/invite.md` hardcodes
      `permissions=2419424576`. Only Manage Roles and Send Messages are load-bearing in
      the Rust code. The bitmask lives in the Discord developer portal, not in either
      repo, so confirm it is still what you want.
- [ ] **Word history.** `docs/help/faq.md` answers "no" to cross-sprint tracking. It now
      exists internally. Decide the public answer.
- [x] **Source release.** (2026-09-29: the call for developers is gone; the source is still unreleased.) `docs/help/faq.md` still says the source is unreleased and
      invites experienced developers to help. Confirm both still stand.
- [ ] **Social link.** `contributors/pengo-wray/_index.md` links to twitter.com. Confirm
      it is current.

## Screenshots

Eight images show old Discord or bot UI. The prose is written to stand without them.

- [ ] `docs/start/invite.md`: `sprint-add-app.png`, `sprinto-invite-dialog.png`
- [ ] `docs/help/troubleshooting.md`: `01-` through `06-` under
      `static/images/help/troubleshooting/`
- [x] `docs/help/emojipet.md`: a mock-up of the `/pets` panel now stands in (2026-09-29); a real screenshot can replace it. The old one was a Discord CDN
      attachment that has since 404'd. A shot of the `/pets` panel would suit the page;
      put it in `assets/images/`.

`faq.md`'s `programmers-credo.png` is a meme, not UI, and is fine as it is.

## Later

- [x] **Pets.** (2026-09-29: the page now covers the panel, cards, kinds, names, art styles, eggs and seats.) Was: `docs/help/emojipet.md` is deliberately minimal: `/pets`, companions and
      sprint seats only. Expand once the rework settles (eggs, appearance rolling, seat
      mechanics).
- [ ] **Ping features not built yet.** A guild or channel default number of pings, and a
      time-based form such as `/pingme for 15 hrs` or `/forgetme for 8 hrs`. These were
      parked in a commented-out section of `docs/help/pingme.md`.
- [x] **Two support-server invites are in use.** (2026-09-29: both work; the footer now uses TZJ8YVU like everything else.) `discord.gg/TZJ8YVU` in `menus.en.toml`
      and `discord.gg/7ZSuEgM` in `params.toml`. Reconcile them.
- [x] **Prune the stale `dependabot/*` branches on origin.** (done 2026-09-29)

## Built on the bot's `main` after v1.64 (added 2026-09-29)

These page passages describe behaviour that is on `main` but not in v1.64. Keep them if the release includes it; otherwise cut or reword them. The quoted start of each passage finds it.

- [ ] `docs/help/admin.md`
  - MC vote on /cancel: "✅ or ❌ in a vote to cancel A Sprint MC's ✅ cancels the sprint straight away, and their ❌ e"
- [ ] `docs/help/curious.md`
  - ping missed-command window: "The count of missed commands covers the last 2 hours if anything was missed in them. Other"
  - ping incident card: "The incident has its own highlighted card, and /ping checks Discord's status page again if"
  - status line on any incident: "While Discord's status page reports an incident, the status line reads Listening to status"
- [ ] `docs/help/faq.md`
  - chain break limit: "A break between rounds can be at most 1 hour, or 2 hours with please."
- [ ] `docs/help/misc-sprint.md`
  - cancel vote who marker: "A ❌ after a name means that person has voted ✅ to cancel the sprint in the vote that's ope"
  - cancel vote: "Once writing has started and other people are in the sprint, starts a vote."
  - vote kept after undo: "Undoing a word count doesn't withdraw a vote to cancel."
- [ ] `docs/help/settings.md`
  - default break and late limits: "Limits: a default with a break longer than 1 hour, or a late window longer than 60 minutes"
- [ ] `docs/help/troubleshooting.md`
  - Discord status after results: "While Discord's status page reports an incident, Sprinto may add a line under a sprint's r"
  - /ping answered count period: "The count of answered and missed commands covers the last 2 hours if Sprinto missed any in"
- [ ] `docs/sprinting/admin-sprint.md`
  - locked sprint vote buttons: "In a vote to cancel a locked sprint, people who aren't Sprint MCs can press ❌ but not ✅."
  - chain break cap: "The break between rounds of a chain can be up to 60 minutes, or 120 minutes with please."
  - cancel vote (4 passages): "### Vote to cancel"
- [ ] `docs/sprinting/chain-timing.md`
  - 1-hour break limit: "A break can be at most 60 minutes, or 120 minutes if the command includes please. The limi"
- [ ] `docs/sprinting/chains.md`
  - 1-hour break limit (2 passages): "A break can be at most 60 minutes, or 120 minutes if the command includes please. The limi"
  - cancel vote: "During a round with other people in it, /cancel starts a 2-minute vote. See [During the sp"
  - flags typed after then: "quiet, noping and lock apply to every round wherever you type them. ff, noff, vff and nops"
- [ ] `docs/sprinting/sprint.md`
  - late over an hour refused: "A late of more than an hour is refused: "Sorry, 90 minutes is too long to keep word counts"
  - quietly and lock chain-wide: "quietly and lock apply to every round wherever you type them, even after a then."
  - break limit: "Break between chained rounds up to 1 hour up to 2 hours"
  - break over the limit refused: "A break over the limit is refused, with a button that runs the suggested command: "Sorry, "
- [ ] `docs/sprinting/words.md`
  - words 0 reply wording: "/words 0 is read as "no change" when your starting count is 50 words or more and you have "
  - late over 60 refused: "A sprint command with a late window over 60 minutes is refused: Sorry, 90 minutes is too l"
  - cancel vote (11 passages): "Once writing has started and other people are in the sprint, /cancel starts a vote. See [V"
  - Discord status note (2 passages): "If Discord's status page shows an open incident, Sprinto adds a one-line note under the sc"
- [ ] `docs/whats-new.md`
  - cancel vote (2 passages): "starts a vote when other people are in the sprint."
  - over-long late window refused: "Asking for a late window over 60 minutes, such as late 99, is refused, and the reply names"
  - break between rounds capped: "A break between rounds is at most 1 hour, or 2 hours with please. The limit applies howeve"
  - /ping incident card: "When Discord has an incident open, /ping shows it on its own highlighted card. If Sprinto "
  - status line switches sooner: "The status changes as soon as Discord's status page reports a problem, without waiting for"
  - incident note after sprints: "When Discord has an incident open, a sprint's results end with a one-line note about it. T"

## Owner checks from the 2026-09-29 pass

- [ ] `docs/help/settings.md`: show-patreon controls nothing in the bot now; restore if it is wired up (at "Family-friendly family-friendly On Filter out the occasional crass quote or reply. You'll ")
- [x] `docs/help/settings.md`: confirm the theme's emotes are uploaded on the live bot (working, 2026-09-30) (at "Screen reader friendly Announcements that read better with a screen reader: the same four ")
- [ ] `docs/help/troubleshooting.md`: screenshot out of date: shows the old "✓ BOT" badge (Discord now shows "APP"), an old-style "9 minutes 54 seconds remaining" reply, and the typo "a roll called sprinto" (at "![@Sprinto role vs bot](/images/help/troubleshooting/01-role-vs-bot.png)")
- [ ] `docs/help/troubleshooting.md`: screenshot out of date: shows a separate "Sprint created." reply, which no longer exists (/sprint answers with the join message), and older join text (at "![Slash commands that fail vs succeed](/images/help/troubleshooting/03-sprinto-help-get-sp")
- [x] `docs/help/voice.md`: confirm voice status before release (confirmed paused, 2026-09-30) (at "## Voice is paused")
- [ ] `docs/sprinting/sprint.md`: nops does nothing in the bot now; restore if fixed (at "no bell Turn off all chimes for this sprint. See chimes. Synonyms: almost any w")
- [ ] `docs/start/invite.md`: screenshot out of date: shows a "✓ BOT" badge next to Sprinto; Discord now labels apps "APP" (at "![Image](/images/sprinto-invite-dialog.png)")

## Later pass (Focus Lounge, to-do, projects, scheduling)

- [ ] `docs/help/activesprinter.md`: /settings roles can pick the Sprint MC and Sprint Admin roles (main only)
- [ ] `docs/help/admin.md`: /settings roles can pick the Sprint MC and Sprint Admin roles (main only)
- [ ] `docs/help/settings.md`: /settings roles can pick the Sprint MC and Sprint Admin roles (main only)
- [ ] `docs/sprinting/words.md`: task sprints (closed beta)
- [ ] `docs/start/setup.md`: /settings roles can pick the Sprint MC and Sprint Admin roles (main only)
- [ ] `docs/help/curious.md`: choosing the Sprint MC and Sprint Admin roles in `/settings roles` (1 paragraph(s) removed)
- [ ] `docs/sprinting/admin-sprint.md`: choosing the Sprint MC and Sprint Admin roles in `/settings roles` (2 paragraph(s) removed)
- [ ] `docs/whats-new.md`: choosing the Sprint MC and Sprint Admin roles in `/settings roles` (1 paragraph(s) removed)

## Settled 2026-09-30

- [x] Patreon sync is running on the live bot.
- [x] Ko-fi supporters don't get `/redeem` link codes; the Supporting page and privacy policy no longer mention them. `/redeem` is described for gift codes only.
- [x] The Ko-fi seat-time table is off the Supporting and Pets pages until Ko-fi's tiers are settled (it's in git history: commit 00970d2 and later).
- [x] Home page: 56,744 servers, "Up to 30k monthly users".
