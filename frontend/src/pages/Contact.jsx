import React from 'react'
import ContactInfo from '../Components/ContactInfo'
import FAQ from '../Components/FAQ';

const Contact = () => {

  const faqs = [
        { question: "How do you find these deals?", answer: "Our automated systems constantly monitor our primary Telegram channel, which is run by a community of expert deal hunters. As soon as a deal is posted there, it appears here in real-time." },
        { question: "Are the deals always in stock?", answer: "The deals we post, especially 'Loot' deals, are often available in limited quantities and for a short time. We recommend acting fast to avoid disappointment. The timestamp on each deal card indicates how recently it was posted." },
        { question: "Can I submit a deal?", answer: "Currently, our deal pipeline is curated from our source Telegram channel to ensure quality and accuracy. The best way to contribute is to become an active member of our Telegram community!" },
        { question: "Is this service free?", answer: "Yes, DripnDeals is completely free to use. Our mission is to help everyone save money. We may earn a small affiliate commission from the e-commerce sites when you purchase a deal through our links, which helps us keep the servers running." },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Have a question or feedback? We'd love to hear from you.
          </p>
      </div>
      <ContactInfo />

      {/* FAQ section */}
      <section className="bg-white py-20 my-20 rounded-2xl shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQ key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Contact
