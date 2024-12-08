const Footer = () => {
    return (
        <div className="h-full w-full" >
            <footer className="bg-gray-800 text-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Contact Us Section */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
                            <ul className="space-y-2">
                                <li><strong>Email:</strong> support@visa-navigator.com</li>
                                <li><strong>Phone:</strong> +1234567890</li>
                                <li><strong>Address:</strong> 456 Visa Street, City, Country</li>
                            </ul>
                        </div>

                        {/* Follow Us Section */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
                            <div className="flex space-x-6">
                                <a href="https://facebook.com/visa-navigator" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" alt="Facebook" className="w-6 h-6" />
                                </a>
                                <a href="https://twitter.com/visa-navigator" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" className="w-6 h-6" />
                                </a>
                                <a href="https://instagram.com/visa-navigator" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com/company/visa-navigator" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Feedback Section */}
                        <div>
                            <h6 className="text-xl font-bold text-white mb-4">Stay Updated</h6>
                            <form>
                                <fieldset className="form-control">
                                    <label className="label">
                                        <span className="label-text">Enter your email address for updates</span>
                                    </label>
                                    <div className="join w-full md:w-80">
                                        <input
                                            type="email"
                                            placeholder="your-email@visa-navigator.com"
                                            className="input input-bordered join-item w-full md:w-2/3" />
                                        <button className="btn btn-primary join-item md:w-1/3">Subscribe</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                        {/* Footer Bottom Section */}
                        <div className="md:col-span-3 mt-8 md:mt-0 text-center">
                            <p className="text-sm text-gray-400">
                                &copy; {new Date().getFullYear()} Visa Navigator. All rights reserved.
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
