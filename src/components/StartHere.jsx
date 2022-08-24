import React from 'react'

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
          <TailwindCSSButton>
            Upload Receipt
          </TailwindCSSButton>
        </div>
      </div>
    </div>
  )
}

function TailwindCSSButton(props) {
  return (
    <button className="bg-eucalyptus text-white font-medium px-4 py-2 rounded hover:bg-greenHaze">{props.children}</button>
  )
}

export default StartHere