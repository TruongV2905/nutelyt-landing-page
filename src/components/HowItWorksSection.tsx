
const steps = [
  {
    step: "Bước 1",
    title: "Tạo hồ sơ cá nhân",
    description:
      "Cung cấp chỉ số cơ thể, bệnh lý và mục tiêu sức khỏe để AI hiểu bạn.",
    side: "left",
  },
  {
    step: "Bước 2",
    title: "Chọn nhu cầu",
    description:
      "Lựa chọn chế độ ăn ngoài, nấu tại nhà hoặc chuẩn bị cho cả gia đình.",
    side: "right",
  },
  {
    step: "Bước 3",
    title: "Nhận phân tích & Gợi ý AI",
    description:
      "Nhận ngay báo cáo dinh dưỡng chi tiết và lời khuyên tối ưu cho mỗi bữa ăn.",
    side: "left",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#f4f7fd] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Bắt đầu hành trình sống khỏe trong 3 bước
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          {/* Center line */}
          <div className="absolute left-6 top-0 h-full w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((item, index) => {
              const isLeft = item.side === "left";

              return (
                <div
                  key={item.step}
                  className="relative grid grid-cols-[48px_1fr] gap-5 md:grid-cols-[1fr_80px_1fr] md:items-center md:gap-8"
                >
                  {/* LEFT CONTENT - DESKTOP */}
                  <div
                    className={`hidden md:block ${
                      isLeft ? "text-right" : ""
                    }`}
                  >
                    {isLeft && (
                      <StepContent
                        step={item.step}
                        title={item.title}
                        description={item.description}
                      />
                    )}
                  </div>

                  {/* NUMBER */}
                  <div className="relative z-10 flex justify-center md:col-start-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-emerald-100 bg-emerald-700 text-xl font-bold text-white shadow-md shadow-emerald-900/20">
                      {index + 1}
                    </div>
                  </div>

                  {/* RIGHT CONTENT - DESKTOP */}
                  <div className="hidden md:block">
                    {!isLeft && (
                      <StepContent
                        step={item.step}
                        title={item.title}
                        description={item.description}
                      />
                    )}
                  </div>

                  {/* MOBILE CONTENT */}
                  <div className="md:hidden">
                    <StepContent
                      step={item.step}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type StepContentProps = {
  step: string;
  title: string;
  description: string;
};

function StepContent({ step, title, description }: StepContentProps) {
  return (
    <div>
      <p className="text-xl font-bold text-emerald-700">{step}</p>

      <h3 className="mt-4 text-base font-bold text-slate-700">{title}</h3>

      <p className="mt-2 max-w-md text-base leading-7 text-slate-600 md:ml-auto">
        {description}
      </p>
    </div>
  );
}