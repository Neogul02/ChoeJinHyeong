'use client'

import MarkdownContent from '@/components/ui/MarkdownContent'
import { Project } from '@/lib/supabase'

export default function ProjectModal({ project }: { project: Project }) {
  return (
    <div>
      <div className='text-xl md:text-[24px] font-bold mb-1'>{project.title}</div>
      <div className='text-sm md:text-[16px] text-gray-400 mb-4'>{project.period}</div>
      {project.content_md && (
        <MarkdownContent content={project.content_md} />
      )}
    </div>
  )
}
