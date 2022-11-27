import React from 'react'

const QuizOption = (props) => {
    return (
        <div className='p-2 flex items-center gap-4 bg-[#F2F8FA] rounded-full'>
            <div className='h-[2.5rem] w-[2.5rem] rounded-full flex items-center justify-center text-[#248489] border border-[#248489]'>
                {props.option}
            </div>
            <p className='text-sm'>{props.text}</p>
        </div>
    )
}

export default QuizOption