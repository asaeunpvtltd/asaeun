import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

export interface AppT {
  id: string;
  name: string;
  description: string;
}

const AllApps = () => {
  const apps: AppT[] = [
    { id: "1", name: "PixezAI", description: "This is highly used app across asaeun platform" },
    { id: "2", name: "Task Manager", description: "Organize your workflow efficiently" },
    { id: "3", name: "Cloud Sync", description: "Seamless data synchronization across devices" },
    { id: "4", name: "Analytics", description: "Real-time data insights for your business" },

  ];

  return (
    // container should be flex-row (default) with wrap
    <div className='flex flex-wrap gap-2 justify-center  p-8  container mx-auto bg-gray-50 rounded-2xl'>
      {
        apps.map((app) => (
          /* Change 'id' to 'app' for clarity */
          <div
            key={app.id} /* Fixed: use app.id, not apps.id */
            className='flex bg-white gap-4 border hover:transition-all hover:scale-105 border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 flex-col rounded-xl h-54 w-72'
          >
            {/* Top Section: Icon & Name */}
            <div className='flex items-center gap-4'>
              <div className="bg-blue-50 p-2 rounded-lg">
                <Image
                  alt={app.name}
                  className='h-10 w-10 object-contain'
                  width={40}
                  height={40}
                  src='/noteapp.png'
                />
              </div>
              <h2 className='text-lg font-bold text-gray-800 line-clamp-1'>{app.name}</h2>
            </div>

            {/* Description Section */}
            <p className='text-gray-500 text-sm line-clamp-2 leading-relaxed h-10'>
              {app.description}
            </p>

            {/* Button Section */}
            <Button className='w-full bg-black hover:bg-gray-800 text-white rounded-lg py-2 mt-2'>
              Try now!
            </Button>
          </div>
        ))
      }
    </div>
  )
}

export default AllApps;