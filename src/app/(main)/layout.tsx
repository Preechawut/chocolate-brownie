import { Navbar } from '@/shared/components/Navbar'
import { Footer } from '@/shared/components/Footer'
import { IntroProvider } from '@/shared/contexts/IntroContext'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <IntroProvider>
      <Navbar />
      <div className="pt-[60px]">
        {children}
      </div>
      <Footer />
    </IntroProvider>
  )
}
