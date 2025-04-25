import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube } from "lucide-react"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green-50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="text-2xl font-bold text-green-800">YashilHayot</span>
            </div>
            <p className="text-gray-600">
              Yashil Hayot - tabiatni asrash va ekologik muammolarni hal qilish uchun ishlayotgan tashkilot. Biz
              atrof-muhitni himoya qilish va kelajak avlodlar uchun yashil dunyo yaratishga intilamiz.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">Tezkor Havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-green-600">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link to="/problems" className="text-gray-600 hover:text-green-600">
                  Muammolar
                </Link>
              </li>
              <li>
                <Link to="/statistics" className="text-gray-600 hover:text-green-600">
                  Statistika
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-gray-600 hover:text-green-600">
                  Media
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-600 hover:text-green-600">
                  Hamkorlar
                </Link>
              </li>
              <li>
                <Link to="/donation" className="text-gray-600 hover:text-green-600">
                  Xayriya
                </Link>
              </li>
              <li>
                <Link to="/volonteer" className="text-gray-600 hover:text-green-600">
                  Ko'ngillilar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">Bog'lanish</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-gray-600">123 Eco Street, Tashkent, Uzbekistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-600" />
                <a href="tel:+998901234567" className="text-gray-600 hover:text-green-600">
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-600" />
                <a href="mailto:info@yashilhayot.uz" className="text-gray-600 hover:text-green-600">
                  info@yashilhayot.uz
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">Yangiliklar</h3>
            <p className="text-gray-600 mb-4">Yangiliklar va tadbirlar haqida xabardor bo'lish uchun obuna bo'ling</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Obuna bo'lish
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">&copy; {currentYear} YashilHayot. Barcha huquqlar himoyalangan.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-green-600 text-sm">
                Maxfiylik siyosati
              </Link>
              <Link to="/terms-of-service" className="text-gray-600 hover:text-green-600 text-sm">
                Foydalanish shartlari
              </Link>
              <Link to="/contacts" className="text-gray-600 hover:text-green-600 text-sm">
                Bog'lanish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
