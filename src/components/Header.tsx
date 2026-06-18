import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "Tính năng",
    href: "#features",
  },
  {
    label: "Quy trình",
    href: "#process",
  },
  {
    label: "Gia đình",
    href: "#family",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo_transparent.png"
            alt="Nutelyt Logo"
            className="w-[160px] h-auto object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-slate-700 transition hover:text-emerald-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="/login"
            className="font-bold text-emerald-700 transition hover:text-emerald-800"
          >
            Đăng nhập
          </a>

          <a
            href="/register"
            className="rounded-lg bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800"
          >
            Bắt đầu ngay
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-5 shadow-sm md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-medium text-slate-700 transition hover:text-emerald-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/login"
              className="rounded-lg border border-emerald-700 px-5 py-3 text-center font-bold text-emerald-700"
            >
              Đăng nhập
            </a>

            <a
              href="/register"
              className="rounded-lg bg-emerald-700 px-5 py-3 text-center font-bold text-white"
            >
              Bắt đầu ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
