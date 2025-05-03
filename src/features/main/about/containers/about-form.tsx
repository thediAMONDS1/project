import Image from "next/image";

export default function AboutForm() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 gap-10">
      <div className="flex items-center gap-10 max-w-6xl w-full pt-12">
        <div className="w-1/2 h-[300px] relative shadow-lg">
          <Image
            src="/about/1.jpg"
            alt="Mineral transportation"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Optimized Mineral Resource Transportation
          </h2>
          <p>
            Our web-based information system optimizes mineral resource
            transportation, providing employees with real-time tracking,
            automated logistics planning, and instant reporting. Reliable, fast,
            and secure—our platform transforms resource transportation
            management.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-10 max-w-6xl w-full">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Real-Time Cargo Monitoring
          </h2>
          <p>
            Track shipments in real time with our advanced monitoring tools.
            Ensure safety, reduce delays, and increase overall transportation
            efficiency with up-to-date tracking data.
          </p>
        </div>
        <div className="w-1/2 h-[300px] relative shadow-lg">
          <Image
            src="/about/2.jpg"
            alt="Cargo tracking"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="flex items-center gap-10 max-w-6xl w-full">
        <div className="w-1/2 h-[300px] relative shadow-lg">
          <Image
            src="/about/3.jpg"
            alt="Logistics optimization"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Advanced Logistics Optimization
          </h2>
          <p>
            Our system automates logistics planning, optimizing routes and
            schedules to minimize costs and maximize efficiency. Make
            data-driven decisions for better resource management.
          </p>
        </div>
      </div>
    </div>
  );
}
