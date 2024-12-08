import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
       
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              What documents are needed for a visa application?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                The documents you need will depend on the type of visa you're applying for. Generally, you will need a valid passport, proof of financial support, visa application forms, and photographs. Check the specific requirements for the visa type you're applying for.
              </p>
            </div>
          </div>

         
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              How long does it take to process my visa application?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                The processing time can vary based on the country and the type of visa you are applying for. It typically ranges from a few weeks to a few months. We recommend applying early to avoid delays.
              </p>
            </div>
          </div>

          
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              Can I track my visa application status?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                Yes, you can track the status of your visa application through the respective embassy or consulate's official portal or by using our tracking feature here at Visa Navigator.
              </p>
            </div>
          </div>

         
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              What if my visa application is denied?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                If your visa application is denied, you will typically receive a reason for the denial. You may be able to reapply or appeal the decision depending on the country’s rules. We recommend reviewing the feedback carefully before proceeding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
