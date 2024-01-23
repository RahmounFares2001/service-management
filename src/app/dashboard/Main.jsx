import React from 'react'
import StatistiqueOverview from './StatistiqueOverview'
import OverviewChat from './OverviewChat'

export default function Overview() {
  return (
    <div 
        className='w-full h-full rounded-xl overflow-hidden flex flex-col gap-5'>

          <div className='w-full'>
            <StatistiqueOverview />
          </div>

          <div className='w-full h-full'>
            <OverviewChat />
          </div>

    </div>
  )
}