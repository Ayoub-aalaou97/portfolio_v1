"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import skills  from '@/data/resume/de/skills.json'

const ResumeSkills = () => {
  const skillCategories = ['all', 'frontend', 'backend', 'testing', 'devops', 'tools'];
  const [filter, setFilter] = useState('all');

  const filteredSkills = filter === 'all'
    ? skills
    : skills.filter(skill => skill.category === filter);

  return (
    <div>

      <div className="filter-skills mt-4 flex flex-wrap gap-2">
        {skillCategories.map(cat => (
          
            <button key={cat} onClick={() => setFilter(cat)} 
              className={`cursor-pointer rounded-sm border-2 bg-[var(--surface-muted)] p-2 text-sm text-[var(--text-primary)] transition-all duration-150 sm:text-base ${
                filter === cat ? 'border-indigo-500 bg-indigo-100 dark:border-indigo-400 dark:bg-indigo-950/50' : 'border-zinc-300 dark:border-zinc-600'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          
        ))}
      </div>

      <div className="skill grid w-full max-w-[600px] grid-cols-3 gap-3 py-4 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-7">

        {filteredSkills.map((skill) => (
          
          <div
            key={skill.name}
            className="skill-item inline-block rounded-sm border-2 border-green-500 bg-green-50 p-1 dark:border-emerald-500 dark:bg-emerald-950/40"
          >
            <Image src={skill.src} alt={skill.name} width={62} height={62} />
          </div>
        ))}

      </div>
    </div>
  )
}

export default ResumeSkills