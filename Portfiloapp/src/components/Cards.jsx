import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({prop}) => {
    console.log(prop.name)
  return (
    <div className="relative h-[250px] w-[300px]">
  <img
    src="https://static.vecteezy.com/system/resources/previews/024/555/459/original/github-logo-black-transparent-free-png.png"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{prop.name}</h1>
    <p className="mt-2 text-sm text-gray-300">

    </p>
    <Link to={prop.html_url}>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Repo →
    </button>
    </Link>
  </div>
</div>
  )
}

export default Cards
