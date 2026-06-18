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

export default function CTASection() {
  return (
    <section className="bg-[#f4f7fd] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[36px] border border-emerald-100 bg-white shadow-sm">
          {/* Background image blur */}
          <img
            src={bgImage}
            alt="Healthy nutrition background"
            className="absolute inset-0 z-0 h-full w-full scale-110 object-cover opacity-70 blur-sm"
          />

          {/* Overlay nhẹ thôi, không che mất hình */}
          <div className="absolute inset-0 z-[1] bg-white/45" />

          {/* Gradient nhẹ hiện đại */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-br from-emerald-50/70 via-white/45 to-cyan-50/60" />

          {/* Decorative blur circles */}
          <div className="absolute -left-16 top-10 z-[3] h-44 w-44 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute -right-16 bottom-8 z-[3] h-52 w-52 rounded-full bg-cyan-300/25 blur-3xl" />

          {/* Floating icons */}
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

          {/* Content */}
          <div className="relative z-10 flex min-h-[360px] flex-col items-center justify-center px-6 py-20 text-center sm:px-10 lg:px-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Sống khỏe hơn mỗi ngày cùng AI
            </div>

            <h2 className="max-w-4xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Bắt đầu hành trình dinh dưỡng thông minh ngay hôm nay
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Tham gia cộng đồng sống khỏe cùng Nutelyt AI và làm chủ sức khỏe
              của bạn.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <button className="group inline-flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white/75 px-7 py-3.5 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white">
                <Play className="h-5 w-5 fill-emerald-600 text-emerald-600" />
                Tải trên Google Play
              </button>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <Download className="h-4 w-4 text-emerald-700" />
              Miễn phí tải về, dễ dàng bắt đầu trong vài phút
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
