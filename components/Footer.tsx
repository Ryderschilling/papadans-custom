'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/822546d0-a20b-4d6b-980b-4fb476c3ab26/papa-dans-logo-oval-light.png"
              alt="Papa Dan's Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm">
              Voted Best Pizza in the Coachella Valley. Serving Palm Desert since 1984.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gray-900 font-serif text-lg mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Mon–Thu: 11am–7:30pm</li>
              <li>Fri: 11am–8:30pm</li>
              <li>Sat–Sun: 10am–8:30pm</li>
              <li className="text-pd-gold">Breakfast: Sat–Sun 10am–2pm</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="tel:7605683267" className="hover:text-pd-gold transition-colors">
                  (760) 568-3267
                </a>
              </li>
              <li>
                <a href="mailto:info@papadanspalmdesert.com" className="hover:text-pd-gold transition-colors">
                  info@papadanspalmdesert.com
                </a>
              </li>
              <li className="pt-2">73011 Country Club Drive Suite F</li>
              <li>Palm Desert, CA</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gray-900 font-serif text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/PapaDansPizza/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pd-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/papadanspizzaandpasta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pd-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/papa-dans-pizza-and-pasta-palm-desert-3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pd-gold transition-colors"
                aria-label="Yelp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.02 10.423c-.116-.606-.74-1.227-1.36-1.227H6.666c-.622 0-1.144.622-1.144 1.227v1.966c0 .61.522 1.163 1.145 1.163h2.993c.62 0 1.245-.554 1.36-1.163v-1.966zm3.606-4.05c-.314-.573-1.054-.887-1.674-.887h-.314c-.62 0-1.254.314-1.674.887L9.34 9.87c-.22.469-.22 1.226 0 1.696l2.232 3.599c.314.573 1.054.886 1.674.886h.314c.62 0 1.254-.313 1.674-.886l2.232-3.599c.22-.47.22-1.227 0-1.696l-2.232-3.599zm-4.95 8.097c-.314-.573-1.054-.886-1.674-.886h-2.23c-.622 0-1.145.313-1.145.886v2.231c0 .573.523.887 1.146.887h2.23c.62 0 1.36-.314 1.674-.887v-2.231z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {currentYear} Papa Dan's Pizza & Pasta · All Rights Reserved</p>
            <p className="mt-4 md:mt-0">
              Site by{' '}
              <a href="mailto:ryderschilling@gmail.com" className="text-pd-gold hover:text-pd-red transition-colors">
                Ryder Schilling
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
