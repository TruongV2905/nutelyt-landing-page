import {
  Download,
  HeartPulse,
  Leaf,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const bgImage =
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80";

const apkDownloadUrl =
  "https://github.com/TruongV2905/nutelyt-landing-page/releases/download/app/nutelyt_app.apk";
const fanpageUrl = "https://www.facebook.com/profile.php?id=61595328179189";

export default function CTASection() {
  return (
    <section
      id="get-started"
      className="scroll-mt-20 bg-[#f4f7fd] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[36px] border border-emerald-100 bg-white shadow-sm">
          <img
            src={bgImage}
            alt="Bữa ăn dinh dưỡng lành mạnh"
            className="absolute inset-0 z-0 h-full w-full scale-110 object-cover opacity-70 blur-sm"
          />

          <div className="absolute inset-0 z-[1] bg-white/45" />
          <div className="absolute inset-0 z-[2] bg-gradient-to-br from-emerald-50/70 via-white/45 to-cyan-50/60" />

          <div className="absolute -left-16 top-10 z-[3] h-44 w-44 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute -right-16 bottom-8 z-[3] h-52 w-52 rounded-full bg-cyan-300/25 blur-3xl" />

          <div className="absolute left-10 top-10 z-[4] hidden h-12 w-12 items-center justify-center rounded-2xl bg-white/55 text-emerald-700 shadow-sm backdrop-blur-md md:flex">
            <Leaf className="h-6 w-6" />
          </div>

          <div className="absolute right-12 top-12 z-[4] hidden h-12 w-12 items-center justify-center rounded-2xl bg-white/55 text-emerald-700 shadow-sm backdrop-blur-md md:flex">
            <HeartPulse className="h-6 w-6" />
          </div>

          <div className="absolute bottom-12 left-20 z-[4] hidden h-11 w-11 items-center justify-center rounded-2xl bg-white/55 text-emerald-700 shadow-sm backdrop-blur-md lg:flex">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div className="absolute bottom-14 right-24 z-[4] hidden h-11 w-11 items-center justify-center rounded-2xl bg-white/55 text-emerald-700 shadow-sm backdrop-blur-md lg:flex">
            <Sparkles className="h-5 w-5" />
          </div>

          <div className="relative z-10 flex min-h-[360px] flex-col items-center justify-center px-6 py-20 text-center sm:px-10 lg:px-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Sống khỏe hơn mỗi ngày cùng AI
            </div>

            <h2 className="max-w-4xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Bắt đầu hành trình dinh dưỡng thông minh ngay hôm nay
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Khám phá cách Nutelyt hiểu nhu cầu của bạn và biến dữ liệu sức
              khỏe thành gợi ý ăn uống đơn giản, thực tế, cá nhân hóa.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href={apkDownloadUrl}
                download="nutelyt_app.apk"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
                aria-label="Tải ứng dụng Nutelyt cho Android"
              >
                <Download className="h-5 w-5" />
                Tải ứng dụng Nutelyt
              </a>

              <a
                href={fanpageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-emerald-100 bg-white/75 px-7 py-3.5 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white"
                aria-label="Xem Nutelyt hoạt động trên Facebook"
              >
                <Play className="h-5 w-5 fill-emerald-600 text-emerald-600" />
                Xem Nutelyt hoạt động
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <Download className="h-4 w-4 text-emerald-700" />
              Dễ dàng tìm lựa chọn phù hợp cho bữa ăn tiếp theo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
