'use client'

import { Experience } from '@/features/experience'

export default function WorkPage() {
  return (
    <main>
      <section className="px-6">
        <div className="mx-auto max-w-2xl py-10">
          <p className="section-heading">Career</p>
          <h1 className="text-3xl font-black tracking-[-0.04em] text-t1 mb-1">Experience</h1>
          <p className="text-[14px] text-t2">My work history, roles, and the things I've shipped.</p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-6 pb-14">
        <div className="mx-auto max-w-2xl pt-10">
          <Experience />
        </div>
      </section>
    </main>
  )
}
