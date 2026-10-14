import { FileText, Mail, ShieldCheck } from "lucide-react";

const footerLinks = [
  {
    label: "Chính sách bảo mật",
    href: "/privacy-policy",
    icon: ShieldCheck,
  },
  {
    label: "Điều khoản sử dụng",
    href: "/terms",
    icon: FileText,
  },
  {
    label: "Liên hệ",
    href: "/contact",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-emerald-100 bg-gradient-to-br from-white via-[#f7fbfb] to-[#eef7fb]">
      <div className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* TOP */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="max-w-xl">
              <a href="/" className="inline-flex items-center">
                <img
                  src="/logo_transparent.png"
                  alt="Nutelyt AI Logo"
                  className="h-14 w-auto object-contain"
                />
              </a>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
                Dinh dưỡng chuẩn xác cho mọi người. Nutelyt AI giúp bạn hiểu rõ
                bữa ăn, chăm sóc sức khỏe và xây dựng lối sống lành mạnh hơn mỗi
                ngày.
              </p>
            </div>

            {/* RIGHT LINKS */}
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {footerLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-10 border-t border-slate-200/80 pt-6">
            <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Nutelyt AI. Bản quyền thuộc về Nutelyt.</p>

              <p className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Made for healthy living
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
