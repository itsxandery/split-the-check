import React from 'react'
import { UploadButton } from '../../components/UploadButton'

const StartHere = () => {
  return (
    <div className='w-full h-[90vh] top[90px]'>
      <div className='w-full h-full flex flex-col justify-center items-center px-4 text-center bg-gray-300 space-y-12'>
        <div>
          <h1 className='text-5xl font-bold'>
            Let's split a check!
          </h1>
        </div>
        <div>
          <UploadButton>
            Upload Receipt
          </UploadButton>
        </div>
      </div>
    </div>
  )
}

export default StartHere