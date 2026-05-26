import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLine from '@/components/ui/tools/SectionLine'
import SectionLineDivided from '@/components/ui/tools/SectionLineDivided'

import IntroSection from '@/components/sections/IntroSection'
import Stack from '@/components/sections/Stack'
import Activities from '@/components/sections/Activities'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'
import Certification from '@/components/sections/Certification'
import About from '@/components/sections/About'

export default function Home() {
  return (
    <main className='min-h-screen relative select-none'>
      <AnimatedSection delay={0.1}>
        <IntroSection />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <SectionLine text='Stack' />
        <div id='stack'>
          <Stack />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <SectionLineDivided text='Activities' />
        <div id='activities'>
          <Activities />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <SectionLineDivided text='Project' />
        <div id='projects'>
          <Projects />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <SectionLineDivided text='Certification' />
        <div id='certification'>
          <Certification />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.7}>
        <SectionLineDivided text='Education' />
        <div id='education'>
          <Education />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.8}>
        <About />
      </AnimatedSection>
    </main>
  )
}
