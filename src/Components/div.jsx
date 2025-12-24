import React from 'react'
const box=(props)=>{
  return(
    <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-5 mx-auto">
        <span className="text-xl font-semibold text-gray-800 mb-2">
            Title:{props.title}
        </span>
        <p className="text-gray-600 text-base leading-relaxed">
            Content:{props.Content}
        </p>
    </div>
  )
}
export default box
