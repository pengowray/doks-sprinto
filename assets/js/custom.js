/** Custom scripts */

/*
 * A copy button on each example command box (the `slash` and `atsprinto`
 * shortcodes, rendered as div.gg). What it copies:
 *   @Sprinto sprint 20 5       ->  @Sprinto#2517 sprint 20 5
 *   /words count: 1442         ->  /words count:1442
 * Discord turns a pasted "@Sprinto#2517" into a real mention; the #2517 is in
 * the page as a hidden span, so it comes along with textContent. A pasted
 * "/words count:1442" fills in the slash command's options, so each option
 * keeps its name.
 */
(() => {
    'use strict';

    const COPY_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"/><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/></svg>';
    const DONE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5l10 -10"/></svg>';

    const squash = (text) => text.replace(/\s+/g, ' ').trim();

    function commandText(chip) {
        const name = chip.querySelector(':scope > b');
        if (!name) return squash(chip.textContent);
        const text = (el) => (el ? squash(el.textContent) : '');
        const options = [...chip.querySelectorAll('.gg-options')].map((opt) => {
            const key = text(opt.querySelector('.gg-options-key')).replace(/:$/, '');
            const value = text(opt.querySelector('.gg-options-val'));
            return key ? `${key}:${value}` : value;
        }).filter(Boolean);
        return squash([name.textContent, ...options].join(' '));
    }

    async function copy(text) {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
        }
        // Plain-http previews (such as a LAN address) have no clipboard API.
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
    }

    function show(button, done) {
        const label = done ? 'Copied' : 'Copy command';
        button.classList.toggle('gg-copied', done);
        button.title = label;
        button.setAttribute('aria-label', label);
        button.innerHTML = done ? DONE_ICON : COPY_ICON;
    }

    for (const chip of document.querySelectorAll('div.gg')) {
        // Template boxes such as `/sprint options: DURATION WHEN` hold
        // placeholders, not a command anyone would paste.
        if (chip.querySelector('.param, .tag')) continue;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'gg-copy';
        show(button, false);
        button.addEventListener('click', async () => {
            try {
                await copy(commandText(chip));
            } catch (err) {
                console.error('Copy failed:', err);
                return;
            }
            show(button, true);
            setTimeout(() => show(button, false), 1500);
        });
        chip.classList.add('gg-has-copy');
        chip.appendChild(button);
    }
})();
