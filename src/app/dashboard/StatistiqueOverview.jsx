import React from 'react'

export default function StatistiqueOverview() {
  return (
    <div className='flex flex-wrap justify-center items-center gap-5'>

        <div style={{backgroundColor: "#292a48"}}
                className='py-5 text-gray-200 flex flex-col gap-3 rounded-xl '>

            <div className='px-4'>
                <h1>Total Spent</h1>
            </div>
            <div className='flex flex-col gap-3 px-14'>
                <h1 className='text-3xl'>2300 $</h1>
                <div className='text-sm text-black'>
                    <select className='rounded-md px-3 py-1' name="" id="">
                        <option value="week">Last Week</option>
                        <option value="mounth">Last Mounth</option>
                        <option value="begin">From Begin</option>
                    </select>
                </div>
            </div>

        </div>

        
        <div style={{backgroundColor: "#292a48"}}
                className='py-5 text-gray-200 flex flex-col gap-3 rounded-xl '>

            <div className='px-4'>
                <h1>Total Projects</h1>
            </div>
            <div className='flex flex-col gap-3 px-14'>
                <h1 className='text-3xl'>2300 $</h1>
                <div className='text-sm text-black'>
                    <select className='rounded-md px-3 py-1' name="" id="">
                        <option value="week">Last Week</option>
                        <option value="mounth">Last Mounth</option>
                        <option value="begin">From Begin</option>
                    </select>
                </div>
            </div>

        </div>

        
        <div style={{backgroundColor: "#292a48"}}
                className='py-5 text-gray-200 flex flex-col gap-3 rounded-xl '>

            <div className='px-4'>
                <h1>Current Projects</h1>
            </div>
            <div className='flex flex-col gap-3 px-14'>
                <h1 className='text-3xl'>2300 $</h1>
                <div className='text-sm text-black'>
                    <select className='rounded-md px-3 py-1' name="" id="">
                        <option value="week">Last Week</option>
                        <option value="mounth">Last Mounth</option>
                        <option value="begin">From Begin</option>
                    </select>
                </div>
            </div>

        </div>

        
        <div style={{backgroundColor: "#292a48"}}
                className='py-5 text-gray-200 flex flex-col gap-3 rounded-xl '>

            <div className='px-4'>
                <h1>Completed Projects</h1>
            </div>
            <div className='flex flex-col gap-3 px-14'>
                <h1 className='text-3xl'>2300 $</h1>
                <div className='text-sm text-black'>
                    <select className='rounded-md px-3 py-1' name="" id="">
                        <option value="week">Last Week</option>
                        <option value="mounth">Last Mounth</option>
                        <option value="begin">From Begin</option>
                    </select>
                </div>
            </div>

        </div>

     
    </div>
  )
}
