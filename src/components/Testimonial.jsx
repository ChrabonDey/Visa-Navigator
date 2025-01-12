import React from 'react';

const Testimonial = () => {
    return (
        <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-10 space-y-4 px-6 md:px-0">
                    <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                        What Our Users Say About Visa Portal
                    </h2>
                </div>

                <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {/* Review 1 */}
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Tourist Visa Applicant</p>
                            </div>
                        </div>
                        <p className="mt-8">
                            The Visa Portal made my tourist visa application process so easy and stress-free! The
                            step-by-step guidance was incredible, and I got my visa much quicker than expected. Highly
                            recommended!
                        </p>
                    </div>

                    {/* Review 2 */}
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Student Visa Applicant</p>
                            </div>
                        </div>
                        <p className="mt-8">
                            Thanks to the Visa Portal, I secured my student visa without any hassles. Their
                            detailed resources and support team made the process super smooth. I can't thank them enough!
                        </p>
                    </div>

                    {/* Review 3 */}
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Work Visa Applicant</p>
                            </div>
                        </div>
                        <p className="mt-8">
                            I was able to land my dream job abroad thanks to the Visa Portal. Their team guided me
                            throughout the work visa application process. It was straightforward and efficient!
                        </p>
                    </div>

                    {/* Review 4 */}
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Family Visa Applicant</p>
                            </div>
                        </div>
                        <p className="mt-8">
                            I used Visa Portal to apply for a family visa, and the experience was fantastic. The
                            application instructions were clear, and the customer support team was always there to help. A
                            wonderful platform!
                        </p>
                    </div>

                    {/* Review 5 */}
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Investor Visa Applicant</p>
                            </div>
                        </div>
                        <p className="mt-8">
                            The Visa Portal provided me with all the information I needed for my investor visa.
                            Their expert team helped me understand the process and ensured I had all the required documents. A
                            fantastic service!
                        </p>
                    </div>

                    {/* Review 6 */}
                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" loading="lazy" />
                            <div>
                                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Tourist Visa Applicant</p>
                            </div>
                        </div>
                        <p className="mt-8">
                            Applying for a tourist visa was a breeze with Visa Portal. Their resources were easy to
                            follow, and I got my visa in record time. I highly recommend their services!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;
