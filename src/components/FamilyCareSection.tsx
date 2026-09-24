import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Đề xuất món phù hợp khi ăn ngoài",
  "Gợi ý món để lựa chọn hoặc đặt khi ăn tại nhà",
  "Lên thực đơn và công thức tự nấu theo món bạn chọn",
];

export default function FamilyCareSection() {
  return (
    <section id="personalization" className="scroll-mt-20 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[28px] border border-emerald-100 bg-[#edf8fa] shadow-sm lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Mọi đề xuất đều bắt đầu từ health profile
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Nutelyt đối chiếu mục tiêu dinh dưỡng, tình trạng sức khỏe, chỉ số
              cơ thể, sở thích và các thành phần cần hạn chế trước khi đề xuất.
              Vì vậy, lựa chọn trong từng hoàn cảnh đều phù hợp với chính bạn.
            </p>

            <div className="mt-9 space-y-5">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 fill-emerald-700 text-white" />

                  <p className="text-base font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[320px] bg-gradient-to-br from-emerald-50 via-white to-lime-50 lg:min-h-[420px]">
            <img
              src="/family_care_image.png"
              alt="Gợi ý dinh dưỡng cá nhân hóa theo health profile"
              className="w-full object-contain"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
