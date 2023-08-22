---
title : "Sprinto"
description: "Discord sprint bot. Bring writers together."
lead: ""
draft: false
images: []
---
Create a 15 minute sprint:
{{< slash name="sprint" >}}
You and other participants can join:
{{< slash name="join" >}}
One minute after creating the sprint, time begins.

Now do some writing!

Enter your word count at the end:

{{< slash name="words" key0="count" val0="442" >}}

Sprinto will congratulate all the sprinters and show a scoreboard.

Congratulations! You've written some words!

{{< alts "Without slash commands">}}
You can also @Sprinto:
{{< atsprinto "sprint" >}}
{{< atsprinto "join" >}}
{{< atsprinto "120" >}}

Sprinto accepts fairly flexible input, so try commands you think ought to work, or see the docs for more things.
{{< /alts >}}

{{< alts "Some variations">}}

Other ways to create a sprint:
{{< slash name="sprint" key0="options" val0="at :30 for 45" >}}
The above will create a 45 minute sprint which starts at the half hour. For example, if it's 2:26pm in your time zone, then it will start at 2:30pm. However, just write ":30" as Sprinto doesn't know your time zone.

{{< slash name="sprint" key0="options" val0="until :00 now" >}}
The above creates a sprint which starts immediately and runs until the end of the hour.

{{< slash name="sprint" key0="options" val0="for 20 soon" >}}
This creates a 20 minute sprint, which will start in 2 to 3 minutes. Sprinto will pick a starting time which with 00 seconds.

{{< slash name="sprint" key0="options" val0="hel iab" >}}
Sprint for "however long" (a random length of time) "in a bit" (in 2½ to 7½ minutes. Sprinto will pick a nice start time<!-- which has the minutes as a multiple of five-->)

{{< slash name="join" key0="count" val0="1000" >}}
Join the sprint with a starting count of 1000 words. These words will be deducted from your final count. 

{{< slash name="same" >}}
Join with sprint with however many words you had last time.

{{< slash name="words" key0="count" val0="1442 final" >}}
Give your final word count early (before the sprint ends) so Sprinto (and other participants) won't wait for your count after the sprint ends. You can use this if you need to rush off.

{{< slash name="words" key0="count" val0="+102" >}}
Adding a plus sign means you don't rememeber how many words you said you joined with, but you've written 102 more.

See the docs for many more ways to use Sprinto.
{{< /alts >}}
