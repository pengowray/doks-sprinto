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
- [ ] **Invite permissions.** `docs/start/invite.md` hardcodes
      `permissions=2419424576`. Only Manage Roles and Send Messages are load-bearing in
      the Rust code. The bitmask lives in the Discord developer portal, not in either
      repo, so confirm it is still what you want.
- [ ] **Word history.** `docs/help/faq.md` answers "no" to cross-sprint tracking. It now
      exists internally. Decide the public answer.
- [ ] **Source release.** `docs/help/faq.md` still says the source is unreleased and
      invites experienced developers to help. Confirm both still stand.
- [ ] **Social link.** `contributors/pengo-wray/_index.md` links to twitter.com. Confirm
      it is current.

## Screenshots

Eight images show old Discord or bot UI. The prose is written to stand without them.

- [ ] `docs/start/invite.md`: `sprint-add-app.png`, `sprinto-invite-dialog.png`
- [ ] `docs/help/troubleshooting.md`: `01-` through `06-` under
      `static/images/help/troubleshooting/`
- [ ] `docs/help/emojipet.md` has no image at all. The old one was a Discord CDN
      attachment that has since 404'd. A shot of the `/pets` panel would suit the page;
      put it in `assets/images/`.

`faq.md`'s `programmers-credo.png` is a meme, not UI, and is fine as it is.

## Later

- [ ] **Pets.** `docs/help/emojipet.md` is deliberately minimal: `/pets`, companions and
      sprint seats only. Expand once the rework settles (eggs, appearance rolling, seat
      mechanics).
- [ ] **Ping features not built yet.** A guild or channel default number of pings, and a
      time-based form such as `/pingme for 15 hrs` or `/forgetme for 8 hrs`. These were
      parked in a commented-out section of `docs/help/pingme.md`.
- [ ] **Two support-server invites are in use.** `discord.gg/TZJ8YVU` in `menus.en.toml`
      and `discord.gg/7ZSuEgM` in `params.toml`. Reconcile them.
- [ ] **Prune the stale `dependabot/*` branches on origin.**
