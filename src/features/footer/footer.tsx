import Link from "next/link";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full text-white mt-auto">
      <div className="container mx-auto px-4">
        <div className="mt-12 border-t border-gray-800 pt-8"></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Company</h3>
            <p className="text-gray-400">
              We build innovative solutions for modern businesses.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>123 Business Street</p>
              <p>Saint Petersburg</p>
              <p className="mt-2">info@example.com</p>
              <p>+7 (953) 2042456</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
