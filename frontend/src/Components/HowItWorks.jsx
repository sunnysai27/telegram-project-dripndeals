import React from 'react'

const HowItWorks = () => {
  return (
    
    <section className="bg-white rounded-xl shadow-sm my-16 py-12 px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Simple, Fast, and Effective</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
                <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto text-2xl font-bold">1</div>
                <h3 className="mt-4 text-xl font-bold">We Monitor Deals</h3>
                <p className="mt-2 text-gray-600">Our system watches the Telegram channel 24/7 for new deals.</p>
            </div>
            <div>
                <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto text-2xl font-bold">2</div>
                <h3 className="mt-4 text-xl font-bold">They Appear Here Instantly</h3>
                <p className="mt-2 text-gray-600">Using real-time tech, deals are posted here the moment they're live.</p>
            </div>
            <div>
                <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto text-2xl font-bold">3</div>
                <h3 className="mt-4 text-xl font-bold">You Click & Save</h3>
                <p className="mt-2 text-gray-600">You see the deal, click "Grab Deal", and buy it before it's gone.</p>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks
