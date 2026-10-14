export default function LoadingLayer() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f4f7fd]/95 backdrop-blur-md">
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-emerald-100" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-700 animate-spin" />

          <img
            src="/logo_icon.png"
            alt="Nutelyt AI"
            className="h-11 w-11 object-contain"
          />
        </div>

        <div className="text-center">
          <p className="text-base font-bold text-slate-900">
            Đang chuẩn bị Nutelyt AI
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Vui lòng chờ trong giây lát...
          </p>
        </div>
      </div>
    </div>
  );
}