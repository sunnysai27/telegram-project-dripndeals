import React from 'react'
import TeamMemberCard from './TeamMemberCard'

const Team = () => {
  return (
    <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">The Person Behind the Deals</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            I'm a developer and savvy shopper passionate about saving and earning money.
                        </p>
                    </div>
                    <div className="mt-16 flex items-center justify-center gap-16">
                        <TeamMemberCard
                            name="Sunny"
                            role="Founder & Developer"
                            bio="The architect of DealnDeals. Sunny built the system that powers our real-time deal aggregation."
                        />
                        
                    </div>
                </div>
            </section>
  )
}

export default Team
