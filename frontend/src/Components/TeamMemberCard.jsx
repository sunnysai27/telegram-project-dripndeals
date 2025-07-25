import React from 'react'

const TeamMemberCard = ({ name, role, bio }) => {
  return (
    <div className="text-center">
        <p className="mx-auto h-40 w-40 rounded-full shadow-lg text-3xl font-bold bg-indigo-100 text-indigo-600 flex items-center justify-center" >Sunny</p>
        <h3 className="mt-6 text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-indigo-600 font-semibold">{role}</p>
        <p className="mt-2 text-base text-gray-600">{bio}</p>
    </div>
  )
}

export default TeamMemberCard
