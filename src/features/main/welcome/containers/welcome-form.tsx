import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Video } from "../ui/video";
import logo from "../../../../../public/logo.png";
import Image from "next/image";

export default function WelcomeForm() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Video />
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="bg-opacity-50 p-8 rounded-lg max-w-xl text-center">
          <Image
            src={logo}
            alt="CoalFlow Logo"
            width={300}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-white">
            Reliable Transportation of Mineral Resources – Your Trusted
            Logistics Partner
          </h1>
          <p className="text-sm text-gray-300 mt-2">
            We are leaders in mineral resource transportation, ensuring
            reliable, fast, and safe delivery of any cargo volume. With modern
            technology and years of experience, we guarantee efficiency and
            cost-effectiveness for our clients.
          </p>
          <Link href="/profile">
            <Button size="lg" className="mt-4 bg-white text-black">
              Join to us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
