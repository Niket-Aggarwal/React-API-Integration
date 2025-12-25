import React from 'react'

const Box = (props) => {
    return (
        <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-5 mx-auto">
            <h3>Show some random data with number Fetched from API</h3>
            <br />
            <span className='text-xl font-semibold text-gray-800 mb-2'>
                Data no. : {props.ID}
            </span>
            <br /><br />
            <p className="text-gray-800 text-base leading-relaxed">
                Content: {props.Content}
            </p>
        </div>
    )
}

export default Box