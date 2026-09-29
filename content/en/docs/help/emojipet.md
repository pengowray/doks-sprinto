---
title : "Pets"
description: "Your pets, the companion seat, and the /pets panel"
lead: "Supporting Sprinto gives you a companion seat. The pet in your companion seat joins your sprints and appears on the scoreboard."
url: "docs/emoji-pets"
---
A pet is a small cosmetic companion that sprints alongside you and shows up on the scoreboard.

{{<example caption="Open the pets panel, where you can see and change everything about your pets. Only you can see it.">}}
{{<slash name="pets" >}}
{{</example>}}

## The companion seat

A **companion seat** lets one of your pets join your sprints. You get a companion seat by supporting Sprinto on Patreon or Ko-fi. The pet in your seat is your **companion**: they join every sprint you join and get their own line on the scoreboard. Anyone can sprint for free, with or without a seat.

Without a seat, your pets stay in your collection, but they don't join sprints or appear on scoreboards. The `/pets` panel says "No companion seat, so Nugget can't join your sprints." You also can't rename your pets or change their look until you have a seat. Sprinto answers "Your pets are resting. A companion seat lets one sit with you and appear on the scoreboard. You can still hibernate or revive them."

For how long a seat lasts after a tip or a membership, see [How long your seat lasts](#how-long-your-seat-lasts).

## Your first pet

When you first get a companion seat and have no pets, Sprinto gives you a pet: a random animal with a random name, already in your seat as your companion. Only the first pet is given automatically. Some writers have more than one pet, from the old bot or given by me.

**Pets from the old bot were carried over.** If you had a pet in the old bot and were supporting when the new Sprinto took over, your pet is in `/pets`, marked "Emoji pet (OG)". If you weren't supporting then, your pet is kept hidden, and comes back with the same name and look the first time you get a companion seat again.

## No loot boxes or "gacha"

Your first pet begins with a random name and look. While you have a companion seat, you can change both in the `/pets` panel. No pet is a random draw you pay for.

Pets from a set, such as Sprinto Pixel Pets, can be renamed too, and can change to any other look from the same set.

Some top supporters have received a Pixel Pet already but I haven't told them, so they'll only find out if they look in `/pets`, and then they'll probably be confused about what it is, and I still haven't posted how to get one anywhere or what they look like, which is why you're the first to know reading this documentation. Why are you reading this and not sprinting?

## The pets panel

{{<slashembed name="pets" >}} opens a panel headed "Your pets and items". Only you can see it. Typing `@Sprinto pets` gets the answer "Please use the /pets slash command to open this."

{{< reply ephemeral="1" >}}

## Your pets and items

Click a pet, egg or seat to view details.
Some pets allow you to change their name and appearance. If a pet is seated (activated), they will join you in sprints.
{{< /reply >}}
{{< buttons >}}
{{< button "🐢 Nugget ✓" >}}
{{< button "🐭 Biscuit" >}}
{{< button "🥚" >}}
{{< button "companion seat" >}}
{{< /buttons >}}

The panel has a button for each pet, with the pet's picture and name:

- Your companion has a ✓ after their name, and ✓✓ while they're in a sprint that's running now.
- Eggs are plain 🥚 buttons. See [Hibernate and eggs](#hibernate-and-eggs).
- The **companion seat** button, with a cushion picture, comes last. It's shown if you have a seat or any pets.

{{<slashembed name="settings me" >}} also shows your companion, on the "Sprint companion" line, with a **Pets** button that opens this panel.

## A pet's card

Click a pet to open their card: the pet's name and picture, then their kind and adoption date, such as "Emoji pet (OG) · Adopted: 2019-09-16". Below that are the pet's lifetime totals, such as "Sprints: 20", "Words: 30" and "Best sprint: 6". The totals are kept when you rename a pet or change their look, and for a pet from the old bot they include the old bot's history.

Below the totals, one line in italics says whether this pet will sprint with you, such as "Nugget will join sprints with you." or "Activate to have Nugget join you in sprints."

| Button | What it does |
| --- | --- |
| **Activate** | Make this pet your companion. If another pet is your companion, this pet takes their place. |
| **Remove from seat** | Shown on your companion instead of **Activate**. Take the pet out of your seat. No pet joins your sprints until you activate one. |
| **<3** | Show an "Animal observation" card with the pet's thought bubble, such as "🐢 ｡oO(💓)". Only you see it. In the Noto_R style, about 85 of the animals have a moving picture in the bubble. Press **<3** again to close the card. |
| **Appearance…** | Change the pet's look. See [Appearance](#appearance). |
| **Rename…** | Change the pet's name. See [Names](#names). |
| **Hibernate** | Turn the pet into an egg. See [Hibernate and eggs](#hibernate-and-eggs). |

When a pet's card is open, clicking that pet's button again also activates them, or removes them from your seat if they're already your companion.

**While you're in a sprint** that's running or collecting word counts, your companion's buttons are greyed out. If you try to change your companion anyway, Sprinto answers "Not while you're sprinting. Your companion is on the board right now, so changes wait until the sprint wraps up." Your other pets can still be renamed or given a new look.

### Kinds of pet

The kind is the first thing on a pet's card.

| Kind | What it is |
| --- | --- |
| Emoji pet | A pet given by the new Sprinto. |
| Emoji pet (OG) | A pet from the old bot. |
| Emoji pet (OG+) | A pet from the old bot with something the new Sprinto no longer allows: an emoji that isn't on the animal list, a name over 20 characters, or a name with an emoji in it. |
| Emoji pet (OG++) | An OG+ pet with both an emoji that isn't on the animal list and a name the new Sprinto no longer allows, so neither the emoji nor the name can be changed. |
| Sprinto Pixel Pet | A pet from the pixel-art set by Sambhur. |

Other one-off sets show their own name as the kind, such as "Special pet".

## Names

**Rename…** shows a "Pick or choose a new name" card with two suggested names as buttons. Pick one to rename the pet at once. **Roll again** shows two new suggestions, and **Other…** opens a "Rename your pet" box where you type your own name. Or press **Cancel**.

A new name can be up to 20 characters, and can't include an emoji.

A pet from the old bot whose name is over 20 characters or has an emoji in it keeps that name for good, and has no **Rename…** button, because after a rename the old name couldn't be typed back in.

## Appearance

**Appearance…** opens a picker with the pet's current picture, a **Browse a category** dropdown (dogs, cats, birds, sea life, bugs and more) and a grid of animals, drawn in the pet's art style. Click an animal to change the pet's look at once. **Roll** picks a random animal, and **‹ Prev** and **Next ›** page through the grid.

**Type an emoji** accepts the emoji itself (🐼), a Discord shortcode (`:panda:`), the animal's name (`panda`) or a code point (`1F43C`). The emoji must be one animal or creature from Sprinto's animal list of about 140 emoji: animals, birds, bugs, sea creatures, and mythical and prehistoric creatures. People, objects and food aren't on the list.

A pet can only change to a look from their own set. A Sprinto Pixel Pet picks from the pixel set, and has no **Type an emoji** button. An OG+ pet whose emoji is on the animal list can pick another animal. An OG+ pet whose emoji isn't on the list keeps their look, and has no **Appearance…** button.

### Art style

Each emoji pet has their own art style, and switching styles is free and instant. **Art style…**, inside Appearance, shows the pet drawn in each style, with the current style highlighted.

| Style | What it looks like |
| --- | --- |
| Standard | Plain emoji, in each reader's own emoji font. For example, it looks different on an iPhone. |
| Twemoji_R | Discord's emoji style, facing right. |
| Noto_R | Noto Color Emoji, facing right. |

The style you choose is the one shown on the scoreboard and in your join message. New pets start in Noto_R, and pets from before art styles existed are on Standard. Sprinto Pixel Pets have no style choice. An OG+ pet whose emoji isn't on the animal list can only be Standard.

## Hibernate and eggs

**Hibernate** turns a pet into an egg. If the pet was your companion, they leave your seat. Their name and look are hidden, and they can't sprint. The egg shows as a 🥚 button in the panel.

Click an egg to see "A hibernating pet.", the pet's kind, and an **Awaken (restore)** button. Press it to bring the pet back at once, with the same name, look and history. An egg always wakes up as the same pet.

Hibernating and waking are free, and work with or without a seat. You can't hibernate your companion during a sprint.

## On the scoreboard

Your companion gets a line of their own, ranked among the writers.

{{< reply >}}
🏆 **CONGRATS EVERYONE**
`1.` {{< mention "alex" >}} — **500 words** (33 wpm)
`2.` {{< mention "jo" >}} — **120 words** (8 wpm)
`3.` 🐢 Nugget — **3 words**
{{< /reply >}}

Your companion's count is a small random number of words, never more than yours: usually 1 to 6, sometimes up to 12, rarely up to 20. If you wrote 0 words, your companion's count is 0 too. If your count went down, your companion's count goes down a little too. Each sprint's count is added to your companion's lifetime totals.

On a tie, the pet comes after the person. If the channel has **Shuffled leaderboard** turned on, pets go at the bottom, in a random order.

When you join a sprint, the confirmation names your companion, for example "You have joined with 500 starting words — with 🐢 Nugget."

## Special pet commands

{{<atsprinto "pet pet" >}}

{{< reply >}}
🐢 Nugget ｡oO(💓)
{{< /reply >}}

Sprinto posts your companion's thought bubble in the channel. If no pet is in your seat, Sprinto posts the thought bubble of your first awake pet. The command works without a seat and pings nobody. `pet pat`, `pat pet`, `pet feed` and `pet hug` also work.

## How long your seat lasts

**A Ko-fi one-off tip** gives you a companion seat for a number of days, counted from the day you tip:

| Tip | Seat time |
| --- | --- |
| Under $1 | 1 day |
| $1 to $2.99 | 10 days for each whole dollar |
| $3 to $4.99 | 30 days |
| $5 to $9.99 | 45 days |
| $10 to $19.99 | 90 days |
| $20 to $49.99 | 180 days |
| $50 or more | 365 days |

Tips add up: each new tip adds its days after the end of the seat time you already have, up to one year past the date of that tip. A tip under $1 always counts from the day of the tip, so it doesn't add to seat time you already have. Amounts are read as written, in whatever currency you paid: a €5 tip counts as $5.

**A monthly membership**, on Patreon or Ko-fi, keeps your seat while you're supporting.

**If you stop supporting**, your seat stays until 7 days after your last month of support ends. If your last payment would buy more days as a tip (see the table), the seat lasts that long instead, counted from the day of the payment. For example, if you supported with $10 a month, your seat lasts 90 days from your last payment. While the seat lasts, your companion keeps sprinting, but you can't be given a new pet until you're supporting again. After the seat ends, your pets stay in your collection, but they don't join sprints.

When your seat has 7 days or fewer left, the `/pets` panel says when the seat ends, for example "Your companion seat lasts until 3 May 2027."

**A 7-day Patreon free trial** comes with a companion seat and a companion for the trial. The `/pets` panel shows when the trial ends. If the trial ends without a payment, your companion hibernates as an egg, and wakes up automatically if you start paying later.

**A reserved seat** never runs out. Some long-time supporters from the old bot have one, and I can give one as thanks.

### Your seat's details

Press the **companion seat** button in the `/pets` panel to see which pet is in your seat, such as "Sitting with you: 🐢 Nugget", and one line about the seat:

| Line | Meaning |
| --- | --- |
| "Supporter seat. For your ongoing support. Thank you!" | You're supporting Sprinto now. |
| "Reserved seat: yours for good. Thank you for supporting Sprinto!" | A reserved seat, which never runs out. |
| "Supporter seat, yours through 3 May 2027. Thank you for supporting Sprinto!" | You've stopped supporting, and the seat lasts until that date. |
| "Free trial seat: your Patreon trial ends 12 October 2026. Patreon has the exact billing details." | A Patreon free trial. |
| "Gift seat, with compliments." | A seat given as a gift. |
| "Reward seat. You earned this one!" | A seat given as a reward. |

Note (August 2026): Pets have changed a lot recently and there have been glitches. Please send a message on Patreon or Ko-fi if you have a problem with your pet.

## Artwork credit

- Sprinto Pixel Pet art was created for Sprinto by [Sambhur](https://bsky.app/profile/sambhur.bsky.social) (a human artist).
- **Twemoji_R style, and the picture on a Standard pet's card:** [Twemoji](https://github.com/jdecked/twemoji) by jdecked, continuing Twitter's set, used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Modified for Twemoji_R: mirrored so the animals face right.
- **Noto_R style:** [Noto Emoji](https://github.com/googlefonts/noto-emoji) images by Google, used under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). Modified: mirrored so the animals face right.
- **Moving pictures in the <3 bubble** (about 85 animals): [Noto Animated Emoji](https://googlefonts.github.io/noto-emoji-animation/) by Google, used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## TOS

- [Terms of Service]({{<relref "emojipet-tos">}})
