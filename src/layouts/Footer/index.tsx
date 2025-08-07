import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-sm">Rue du Môle 24, 1201 Genève</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-sm">+41787450880</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-sm">support@GNM.ch</span>
              </div>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Logo and Follow Us */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-2xl font-bold mb-4">
                  <Image
                    src={"/logo.png"}
                    alt="GNM"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <div className="text-xs text-gray-400 mt-1">
                    NAGUIS MARKET
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-6">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
              Copyright © 2025 GNM | Powered by FutureTechnology
            </p>
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm flex items-center cursor-pointer hover:bg-green-600">
              💬 How can I help you?
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
