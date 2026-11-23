# Agent notes — gta6-meme-x-01 v3

This entry is the X post recorded in POST.json; that post is the judged
artefact, and it has to stay public until the results are announced.

The meme shows the make.fun ghost mascot — white ghost, sparkle eyes,
magenta star coin, sheriff badge — personally serving a NOTICE TO VACATE
on GRAND THEFT AUTO V, thirteen years after it moved into Los Santos.

main.ts is the whole hand-in: it copies POST.json from the bot directory
into the output directory, and it fails loudly (message printed, exit 1)
when POST.json is missing instead of handing in nothing.
