import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Video } from "../ui/video";
import logo from "../../../../../public/logo.png";
import Image from "next/image";

export default function WelcomeForm() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Video />
      <div className="relative flex items-center justify-center w-full h-full bg-zinc-950 opacity-50">
        <div className="bg-opacity-50 p-8 rounded-lg max-w-xl text-center">
          <Image
            src={logo}
            alt="Логотип CoalFlow"
            width={300}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-white">
            Надёжная транспортировка минеральных ресурсов — ваш проверенный
            логистический партнёр
          </h1>
          <p className="text-sm text-gray-300 mt-2">
            Мы — лидеры в транспортировке минеральных ресурсов, обеспечиваем
            надёжную, быструю и безопасную доставку любого объёма грузов.
            Современные технологии и многолетний опыт позволяют нам
            гарантировать эффективность и экономичность для наших клиентов.
          </p>
          <Link href="/profile">
            <Button size="lg" className="mt-4 bg-white text-black">
              Присоединиться к нам
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
