export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <i className="fa-solid fa-paw text-blue-400 text-2xl"></i>
              <span className="font-bold text-xl">Snutto.com</span>
            </div>
            <p className="text-gray-400 mb-6">Innovative pet tracking technology for the modern pet parent. Keep your furry friends safe, healthy, and connected.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-twitter text-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-instagram text-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-youtube text-lg"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Features</a>
                </li>
                <li>
                  <a href="#booking" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Waitlist</a>
                </li>
                <li>
                  <a href="#support" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Support</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a>
                </li>
              </ul>
            </div>
            
           <div>
              <h3 className="font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQs</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Shipping Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Returns & Refunds</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Warranty Information</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fa-solid fa-location-dot text-blue-400 mt-1 mr-3"></i>
                  <span className="text-gray-400">203, Sinhgad Campus, vadgaon(bk), Pune-411041, Maharashtra, India</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-envelope text-blue-400 mt-1 mr-3"></i>
                  <span className="text-gray-400">swarajj762@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-phone text-blue-400 mt-1 mr-3"></i>
                  <span className="text-gray-400"> (+91) 98816-21676</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-clock text-blue-400 mt-1 mr-3"></i>
                  <span className="text-gray-400">Monday-Friday: 9am-6pm IST</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Snutto.com All rights reserved.</p>
            <div className="flex space-x-6">
              <i className="fa-brands fa-cc-visa text-gray-400 text-2xl"></i>
              <i className="fa-brands fa-cc-mastercard text-gray-400 text-2xl"></i>
              <i className="fa-brands fa-cc-amex text-gray-400 text-2xl"></i>
              <i className="fa-brands fa-cc-paypal text-gray-400 text-2xl"></i>
              <i className="fa-brands fa-apple-pay text-gray-400 text-2xl"></i>
            </div>
          </div>
        </div>
    </footer>
  );
}