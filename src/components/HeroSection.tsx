import { AlertTriangle, BarChart3, Sparkles } from "lucide-react";

export default function HeroSection() {
  const users = [
    {
      name: "User 1",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
    },
    {
      name: "User 2",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
    },
    {
      name: "User 3",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f5fbfb] to-[#eef7fb]">
      <div className="mx-auto grid min-h-[460px] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <Sparkles size={16} />
            Dinh dưỡng cá nhân hóa với sức mạnh AI
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[52px]">
            Tối ưu hóa{" "}
            <span className="text-emerald-700">Sức khỏe Cá nhân</span> thông qua
            Dinh dưỡng AI
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Theo dõi chỉ số sức khỏe, phân tích khẩu phần ăn và nhận lộ trình
            dinh dưỡng thông minh được thiết kế riêng cho mục tiêu của bạn.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-md bg-emerald-700 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800">
              Dùng thử miễn phí
            </button>

            <button className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-emerald-700 bg-white px-8 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50">
              <BarChart3 size={17} />
              Khám phá tính năng
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {users.map((user) => (
                <img
                  key={user.name}
                  src={user.img}
                  alt={user.name}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover shadow"
                />
              ))}
            </div>

            <p className="text-sm text-slate-500">
              <span className="font-semibold text-slate-600">+15,000</span>{" "}
              người dùng đang tối ưu sức khỏe
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center lg:justify-end">
          <div className="relative h-[420px] w-full overflow-visible rounded-[26px] border-[7px] border-white shadow-2xl">
            {/* Background image */}
            <img
              src="/hero_image.png"
              alt="Nutrition AI app preview"
              className="h-full w-full rounded-[20px] object-cover"
            />

            {/* Overlay nhẹ cho ảnh đẹp hơn */}
            <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-t from-black/10 via-transparent to-white/5" />

            {/* Warning card */}
            <div className="absolute -left-13 top-[200px] z-20 w-[210px] rounded-xl border-l-4 border-red-500 bg-red-100 p-4 shadow-xl max-sm:-left-3 max-sm:w-[185px]">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 text-red-600" size={18} />

                <div>
                  <p className="text-xs font-bold text-red-600">CẢNH BÁO</p>
                  <p className="mt-1 text-sm font-medium leading-5 text-red-700">
                    Vượt quá lượng đường khuyến nghị hằng ngày.
                  </p>
                </div>
              </div>
            </div>

            {/* AI analysis card */}
            <div className="absolute -right-16 top-[75px] z-20 w-[210px] rounded-xl border border-emerald-200 bg-white/95 p-4 shadow-xl backdrop-blur max-sm:-right-3 max-sm:w-[185px]">
              <p className="mb-1 flex items-center gap-1 text-xs font-bold text-emerald-700">
                <Sparkles size={14} />
                AI PHÂN TÍCH
              </p>

              <p className="text-sm leading-6 text-slate-700">
                Khẩu phần này hoàn hảo cho mục tiêu của bạn hôm nay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
