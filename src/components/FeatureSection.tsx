import { ChefHat, ScanBarcode, UsersRound, Utensils } from "lucide-react";

const features = [
  {
    title: "Ăn ngoài",
    description:
      "Chụp ảnh thực đơn hoặc món ăn tại nhà hàng. AI sẽ gợi ý món phù hợp nhất với hồ sơ sức khỏe của bạn.",
    icon: Utensils,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    title: "Nấu ăn tại nhà",
    description:
      "Gợi ý công thức nấu ăn dựa trên nguyên liệu có sẵn và mục tiêu calo, dinh dưỡng trong ngày.",
    icon: ChefHat,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    title: "Thực đơn gia đình",
    description:
      "Xây dựng thực đơn cân bằng cho cả nhà, tối ưu cho nhiều thế hệ và quản lý ngân sách đi chợ.",
    icon: UsersRound,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
  },
  {
    title: "Quét sản phẩm",
    description:
      "Quét mã vạch thực phẩm đóng gói để nhận phân tích thành phần và cảnh báo chất gây dị ứng tức thì.",
    icon: ScanBarcode,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-[#f4f7fd] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Chế độ linh hoạt cho mọi nhu cầu
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Dù bạn đang ở nhà hay đi tiệc, Nutelyt AI luôn đồng hành để đảm bảo
            mỗi bữa ăn đều hướng tới sức khỏe.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white/70 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}