import { SITE, STACK } from '@/content/site'
import { experiences, projects } from '@/content/data'
import { PrintButton } from './PrintButton'

export default function ResumePage() {
  return (
    <main>
      <div className="mx-auto max-w-2xl px-6 py-10 print:py-0 print:px-0 print:max-w-none">

        {/* Print button — hidden when printing */}
        <div className="mb-8 flex items-center justify-between print:hidden">
          <p className="section-heading">Resume</p>
          <PrintButton />
        </div>

        {/* Header: role + contact (no name, no address) */}
        <header className="mb-8 border-b border-[var(--border)] pb-6">
          <p className="text-[22px] font-black tracking-[-0.03em] text-t1">{SITE.role}</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-t2">
            <a href={`mailto:${SITE.email}`} className="hover:text-t1">{SITE.email}</a>
            <span>{SITE.bio}</span>
          </div>
        </header>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="section-heading">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <div>
                    <span className="text-[14px] font-black text-t1">
                      {exp.current ? '██████' : exp.company}
                    </span>
                    <span className="mx-2 text-t3">·</span>
                    <span className="text-[13px] font-medium text-t2">{exp.role}</span>
                  </div>
                  <span className="text-[12px] text-t3">{exp.period}</span>
                </div>
                <ul className="space-y-1 mb-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13px] leading-6 text-t2">
                      <span className="mt-[10px] h-1 w-1 shrink-0 bg-t3" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--border2)] px-2 py-[2px] text-[11px] font-medium text-t3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="section-heading">Projects</h2>
          <div className="space-y-5">
            {projects.map((p) => (
              <div key={p.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <span className="text-[14px] font-black text-t1">{p.name}</span>
                  <span className="text-[12px] text-t3">{p.year}</span>
                </div>
                <p className="text-[13px] text-t2 mb-2">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--border2)] px-2 py-[2px] text-[11px] font-medium text-t3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="section-heading">Skills</h2>
          <div className="space-y-2">
            {STACK.map(({ category, items }) => (
              <div key={category} className="flex gap-3 text-[13px]">
                <span className="w-32 shrink-0 font-bold text-t1">{category}</span>
                <span className="text-t2">{items.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      <style>{`
        @media print {
          body { background: white !important; }
          .section-heading { color: #111 !important; }
          nav, footer { display: none !important; }
        }
      `}</style>
    </main>
  )
}
