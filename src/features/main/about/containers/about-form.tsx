import Image from "next/image";

export default function AboutForm() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 gap-10">
      <div className="flex items-center gap-10 max-w-6xl w-full pt-12">
        <div className="w-1/2 h-[300px] relative shadow-lg">
          <Image
            src="/about/1.jpg"
            alt="Транспортировка минеральных ресурсов"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Оптимизированная транспортировка минеральных ресурсов
          </h2>
          <p>
            Наша веб-система оптимизирует транспортировку минеральных ресурсов,
            предоставляя сотрудникам инструменты для отслеживания в реальном
            времени, автоматического планирования логистики и мгновенной
            отчётности. Надёжно, быстро и безопасно — наша платформа меняет
            подход к управлению перевозками ресурсов.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-10 max-w-6xl w-full">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Мониторинг грузов в реальном времени
          </h2>
          <p>
            Отслеживайте отправления в реальном времени с помощью наших
            продвинутых инструментов мониторинга. Обеспечьте безопасность,
            сократите задержки и повысьте общую эффективность транспортировки
            благодаря актуальным данным.
          </p>
        </div>
        <div className="w-1/2 h-[300px] relative shadow-lg">
          <Image
            src="/about/2.jpg"
            alt="Отслеживание грузов"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="flex items-center gap-10 max-w-6xl w-full">
        <div className="w-1/2 h-[300px] relative shadow-lg">
          <Image
            src="/about/3.jpg"
            alt="Оптимизация логистики"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Продвинутая оптимизация логистики
          </h2>
          <p>
            Наша система автоматизирует планирование логистики, оптимизируя
            маршруты и графики, чтобы сократить расходы и повысить
            эффективность. Принимайте решения на основе данных для лучшего
            управления ресурсами.
          </p>
        </div>
      </div>
    </div>
  );
}
