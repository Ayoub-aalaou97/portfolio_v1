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
              className={`cursor-pointer rounded-sm border-2 bg-[#f1f1f1] p-2 text-sm transition-all duration-150 sm:text-base ${
                filter === cat ? 'border-indigo-500 bg-indigo-100' : 'border-gray-300'
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
            className="skill-item p-1 rounded-sm inline-block border-2 bg-green-50 border-green-500"
          >
            <Image src={skill.src} alt={skill.name} width={62} height={62} />
          </div>
        ))}

      </div>
    </div>
  )
}

export default ResumeSkills