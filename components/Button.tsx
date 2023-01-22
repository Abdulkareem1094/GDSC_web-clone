import React from 'react'

export const Button = ({text,primary}:any) => {
  return (
        <button className={`border-1 py-2 w-14 border-gray-300 rounded-sm text-sm 
        ${primary? 'bg-[#1a73e8] text-white borsder-none group-hover:bg-[#1364ce] ' 
        : 'group-hover:bg-[#d8eef9]' } `} >{text}</button>
  )
}