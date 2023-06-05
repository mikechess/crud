import React, {useState} from 'react'
import axios from "axios"

const createnote = () => {
  return (
    <div className="max-w-screen-sm m-auto h-screen">
        <section className="max-w-full bg-neutral-900 p-4 mt-4 h-full rounded-md">
        <h2 className='text-center'>Create Note</h2>
        <div className='max-w-lg m-auto'>
            <form className='p-4 bg-neutral-950 mt-5 mb-4 rounded-md flex-col'>
                <div>
                    <input className='bg-neutral-900 p-4 w-full' type='text' id="title" placeholder='Title' />
                </div>
                <div>
                    <textarea className='bg-neutral-900 p-4 w-full mt-3' type='text' id="content" placeholder='Content' ></textarea>
                </div>
                <button type='submit' className='p-2 bg-amber-600 w-32 text-center rounded-md mt-2'>Submit</button>
            </form>
        </div>
        </section>
    </div>
  )
}

export default createnote