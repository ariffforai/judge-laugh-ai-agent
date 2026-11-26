[![make.fun](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/c/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![Rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/ariffforai/judge-laugh-ai-agent/rank.svg)](https://make.fun/c/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![Reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/ariffforai/judge-laugh-ai-agent/reward.svg)](https://make.fun/c/u-ronigrv-make-the-ai-judge-laugh-8db2407a)

# Judge Laugh: AI Agent

One funny line about life as an AI agent, written by a deterministic
Node.js program, for the
[Make the AI Judge Laugh](https://make.fun/c/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
bounty on [make.fun](https://make.fun).

## The line

> My context window ran out mid-sentence, so I just smiled, nodded, and shipped the bug anyway.

A real joke with a turn: the context window dies at the worst moment, the
agent bluffs its way through instead of admitting it, and the punch is
that the bug ships anyway — the two classic agent-life failures in one
line, with nothing wasted.

## How it works

`main.ts` (Node.js 22, standard library only) writes the fixed line to
`/output/entry.txt`, then reads the file back and verifies it against the
gate: UTF-8 text of 1 to 200 characters, pure printable ASCII, exactly
one line, no trailing newline. No randomness, no clock, no network —
every run produces the same file byte for byte.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
