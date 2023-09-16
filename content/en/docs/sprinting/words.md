---
title : "During the sprint"
description: 
lead: Commands for once the sprint's started
---

## Cancel

Oops! Made a mistake? You can cancel a sprint with:

{{<slash name="cancel" >}}
<br>

If Sprinto didn't understand your {{< slashembed name="sprint" >}} command you can cancel it and start over. Note that if others have joined your sprint, you might need them to {{< slashembed name="cancel" >}} too.

## Force cancel

{{<tag-mc>}}

{{<slash name="admin-force-cancel" >}} 
{{<alts>}}
{{<atsprinto "cancel pls" >}} 
{{<slash name="cancel" key0="please" val0="True" >}} 
{{<slash name="sprint" key0="options" val0="cancel pls" >}} 
{{<atsprinto "cancel ffs" >}} 
{{<atsprinto "cancel pleeeeeeeease" >}} 
{{</alts>}}

Forces a running sprint to end, regardless of how many sprinters have joined.

## Join a sprint
{{<slash name="join" >}}
{{<alts>}}
{{<slash name="join" key0="count" val0="0" >}}
{{<atsprinto "join" >}} 
{{</alts>}}
Join once a sprint is started, join the sprint (with zero starting words). Note: You must join your own sprint too.

{{<slash name="join" key0="count" val0="10000" >}}
{{<alts>}}
{{<atsprinto "join 10000" >}} 
{{</alts>}}
Join with 10,000 words (This is the word count of the document you're working on so it can be subtracted from your final count)

{{<slash name="same" >}}
{{<alts>}}
{{<slash name="join" key0="count" val0="same" >}}
{{<slash name="join" key0="count" val0="last" >}}
{{<slash name="join" key0="count" val0="=" >}}
{{<atsprinto "same" >}} 
{{<atsprinto "=" >}} 
{{</alts>}}
Join with your last word count (e.g. from your previous sprint)

## Some different ways to declare or update your word count
{{< slash name="words" key0="count" val0="10150" >}}
When time's up, declare the word count of your document is now 10,150. If you started with 0 words, your word count might look more like: {{<slashembed name="words" key0="count" val0="150" >}}

{{<slash name="words" key0="count" val0="\-" >}}
At the end of a sprint you may wish to simply leave your word count unchanged. Don't forget the dash `-` without it, Sprinto will just show your current word count.

{{<slash name="words" key0="count" val0="150 new" >}}
If you know how many _new_ words you've written, but perhaps changed documents or lost track of your starting word count, you can just declare how many of your words are `new` (written during the sprint). Use {{< slashembed name="words" key0="count" val0="0 new" >}} to reset your count to your starting word count.

{{<slash name="words" key0="count" val0="+50" >}}
{{<alts>}}
{{<slash name="words" key0="count" val0="add 50" >}}
{{</alts>}}
Add another 50 new words to your count. Perhaps from your second manuscript. 

{{<slash name="words" key0="count" val0="10150 final" >}}
Give your final word count early, before the sprint is over. This way Sprinto won't wait for another {{<slashembed name="words">}} from you after time's up. |

{{<slash name="join" key0="count" val0="15000" >}}
You can rejoin a sprint with a different number of starting words before giving your word count with {{<slashembed name="words">}}. Sometimes it's easier. 

{{<slash name="join" key0="count" val0="just 200 final" >}}
Late to the party? Forgot to join? Dive-bomb in just before the finish line with just your final tally and surprise everyone! You can't use this to join a sprint before it's fully underway. 

Why are there so many commands? All you need is to
{{<slash name="join" >}}
and then give a final count with 
{{<slash name="words" key0="count" val0="_your word count_">}}
For example:
{{<slash name="words" key0="count" val0="150">}}
The rest of the are just for your convenience.

## More sprint-related commands

{{<slash name="words" >}}
{{<alts>}}
{{<atsprinto "words">}}
{{<atsprinto "wc">}}
{{</alts>}}
By itself will show your starting and current word count.

{{<slash name="time" >}}
{{<alts>}}
{{<atsprinto "time">}}
{{<slash name="sprint" key0="options" val0="time" >}}
{{</alts>}}
How long is remaining in the current sprint?

{{<slash name="leave" >}}
Leave a sprint you have joined.

{{<slash name="cancel" >}}
{{<alts>}}
{{<atsprinto "cancel">}}
{{<slash name="sprint" key0="options" val0="cancel" >}}
{{</alts>}}
Cancel the active sprint.

{{<atsprinto "who" >}}
Who's in the current sprint.

{{<atsprinto "status" >}}
Similar to /time but gives more information about your own status.

## Related general commands

{{<atsprinto "help" >}}
Show the basics for sprinting.

{{<atsprinto "longhelp" >}}
Show longer help in the channel. Still it's not nearly as complete as the help here.

{{<atsprinto "invite" >}}
Generate a link to invite Sprinto to your own Discord server

{{<slash name="feedback" >}}
{{<alts>}}
{{<atsprinto "feedback _your feedback here_">}}
{{</alts>}}
Give your your suggestions and improvement ideas. A copy will be posted anonymously on the Sprinto Planet support server. ⟨[discord.gg/jWBcCYQ](https://discord.gg/jWBcCYQ)⟩ Please join to see the dev's response

## See also
- [Overview of Help]({{<relref "overview" >}}) 
- [Sprint (basics)]({{<relref "basics" >}}) — common ways to use `/sprint`
- [Sprint (all options)]({{<relref "sprint" >}}) — complete sprint options guide
- [Settings (admin)]({{<relref "settings" >}}) — Sprint channel settings
- [Less used]({{<relref "misc-sprint" >}}) — commands you don't need but they're related to sprints
