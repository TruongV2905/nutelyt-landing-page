import { Quote } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const testimonials = [
  {
    content:
      "Tính năng ăn ngoài giúp mình không còn lo lắng khi đi tiệc cùng đối tác. AI luôn nhắc mình chọn những món ít muối tốt cho huyết áp.",
    name: "Hoàng Nam",
    role: "Quản lý dự án",
  },
  {
    content:
      "Mình rất thích chế độ thực đơn gia đình. Vừa đảm bảo con đủ chất, vừa giúp mình kiểm soát ngân sách đi chợ cực kỳ hiệu quả.",
    name: "Minh Thư",
    role: "Nội trợ hiện đại",
  },
  {
    content:
      "Quét sản phẩm là tính năng phải có. Mình biết chính xác thứ gì trong hộp thực phẩm mà không cần đọc bảng thành phần rắc rối.",
    name: "Tiến Dũng",
    role: "Vận động viên tự do",
  },
  {
    content:
      "Nutelyt giúp mình theo dõi khẩu phần ăn mỗi ngày dễ hơn. Giao diện đơn giản, phân tích rõ ràng và rất phù hợp với người bận rộn.",
    name: "Ngọc Anh",
    role: "Nhân viên văn phòng",
  },
  {
    content:
      "Mình chỉ cần chụp món ăn là có gợi ý dinh dưỡng ngay. Từ đó mình biết món nào nên ăn nhiều hơn và món nào cần hạn chế.",
    name: "Quốc Bảo",
    role: "Sinh viên",
  },
];

export default function CommunityFeedbackSection() {
  return (
    <section className="bg-[#eef6ff] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Phản hồi từ cộng đồng Nutelyt
          </h2>
        </div>

        {/* SWIPER CAROUSEL */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={24}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="community-feedback-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className="!h-auto">
                <div className="relative flex h-full min-h-[250px] flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                  <Quote className="absolute right-8 top-5 h-12 w-12 fill-emerald-100 text-emerald-100" />

                  <p className="relative z-10 text-base italic leading-7 text-slate-600">
                    "{item.content}"
                  </p>

                  <div className="relative z-10 mt-8">
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
