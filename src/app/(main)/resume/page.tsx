'use client'

import { useState } from 'react'
import { Button } from '@/shared/components/ui/Button'
import { SITE } from '@/content/site'

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true)
  const embedUrl = `https://drive.google.com/file/d/${SITE.googleDriveFileId}/preview`
  const viewUrl = `https://drive.google.com/file/d/${SITE.googleDriveFileId}/view?usp=sharing`

  return (
    <main>
      <div className="mx-auto max-w-2xl px-6 py-10 print:py-0 print:px-0 print:max-w-none">
        
        {/* Header: title + action button matching site aesthetics */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between print:hidden">
          <div>
            <p className="section-heading">Profile</p>
            <h1 className="text-3xl font-black tracking-[-0.04em] text-t1 mb-1">Resume</h1>
            <p className="text-[14px] text-t2">My professional background and work history.</p>
          </div>
          <div className="shrink-0 pb-1">
            <Button href={viewUrl} external variant="solid" size="sm">
              Open in Drive
            </Button>
          </div>
        </div>

        {/* PDF / Document Embed Container matching the retro/flat style */}
        <div className="relative w-full overflow-hidden border border-[var(--border)] bg-black/5 dark:bg-white/[0.02] aspect-[1/1.414] min-h-[500px]">
          {/* Loading state indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--bg)] gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-t1 border-t-transparent" />
              <p className="text-xs text-t3 animate-pulse">กำลังโหลดเอกสาร Resume...</p>
            </div>
          )}

          <iframe
            src={embedUrl}
            className="h-full w-full border-none"
            title="Google Drive Resume Viewer"
            allow="autoplay"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Info helper for mobile readers */}
        <div className="mt-4 text-center sm:hidden print:hidden">
          <p className="text-xs text-t3">
            หากเปิดอ่านไม่สะดวก สามารถกดปุ่ม{' '}
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-t2 hover:text-t1"
            >
              Open in Drive
            </a>{' '}
            เพื่อเปิดผ่านแอปพลิเคชันโดยตรงได้
          </p>
        </div>

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


