import Link from "next/link";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full text-white mt-auto">
      <div className="container mx-auto px-4">
        <div className="mt-12 border-t border-gray-800 pt-8"></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Компания Transport Manager
            </h3>
            <p className="text-gray-400">
              Транспортировка минеральных ресурсов
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Сервисы
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Сервисы</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Что то еще
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Контакт</h3>
            <address className="not-italic text-gray-400">
              <p>Кораблестроителей 19</p>
              <p>Санкт Петербург</p>
              <p className="mt-2">info@example.com</p>
              <p>+7 (953) 2042456</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
