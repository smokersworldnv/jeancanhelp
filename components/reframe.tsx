'use client'

import { useState } from 'react'

const problems = [
  {
    stuck: '“Our product isn’t selling.”',
    reframe:
      'You don’t have a selling problem — you have a story problem. People buy the version of themselves your product unlocks.',
  },
  {
    stuck: '“We can’t agree on a decision.”',
    reframe:
      'You’re not disagreeing on the answer. You’re answering two different questions. Name them and the deadlock dissolves.',
  },
  {
    stuck: '“There’s never enough time.”',
    reframe:
      'Time isn’t the constraint — clarity is. Half the work exists to make up for a decision that was never actually made.',
  },
  {
    stuck: '“I’m stuck and out of ideas.”',
    reframe:
      'You’re not out of ideas. You’re out of the right question. Change what you’re asking and the ideas come back.',
  },
]

export function Reframe() {
  const [selected, setSelected] = useState(0)
  const active = problems[selected]

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-20">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Same problem.
            <br />
            <span className="text-primary">Different angle.</span>
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground text-pretty">
            Pick a problem that sounds familiar and watch it flip. This is the whole job in one gesture
            — take what feels like a wall and find the door in it.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            {problems.map((problem, i) => (
              <button
                key={problem.stuck}
                type="button"
                aria-pressed={i === selected}
                onClick={() => setSelected(i)}
                className={
                  'rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ' +
                  (i === selected
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground')
                }
              >
                {problem.stuck}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-2xl border border-border bg-background p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            What you said
          </p>
          <p className="mt-2 font-display text-2xl font-semibold text-foreground text-balance md:text-3xl">
            {active.stuck}
          </p>
          <div className="my-6 flex items-center gap-3 text-primary">
            <span className="h-px flex-1 bg-primary/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">Reframed</span>
            <span className="h-px flex-1 bg-primary/30" />
          </div>
          <p
            key={selected}
            className="animate-in fade-in slide-in-from-bottom-2 text-lg leading-relaxed text-foreground text-pretty duration-500"
          >
            {active.reframe}
          </p>
        </div>
      </div>
    </section>
  )
}
