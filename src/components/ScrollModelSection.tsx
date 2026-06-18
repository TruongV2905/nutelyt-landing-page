import {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { BrainCircuit, ClipboardCheck, ScanLine, Utensils } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

type ScrollModelSectionProps = {
  modelSrc?: string;
};

const sections = [
  {
    label: "01",
    title: "Quét món ăn hoặc sản phẩm",
    description:
      "Người dùng có thể chụp ảnh món ăn, thực đơn hoặc quét mã vạch sản phẩm để AI nhận diện thành phần dinh dưỡng.",
    icon: ScanLine,
  },
  {
    label: "02",
    title: "AI phân tích theo hồ sơ sức khỏe",
    description:
      "Hệ thống đối chiếu dữ liệu dinh dưỡng với mục tiêu cá nhân, bệnh lý, thói quen ăn uống và chỉ số cơ thể.",
    icon: BrainCircuit,
  },
  {
    label: "03",
    title: "Gợi ý bữa ăn phù hợp",
    description:
      "Nutelyt đề xuất lựa chọn tốt hơn, cảnh báo thành phần cần hạn chế và gợi ý khẩu phần phù hợp trong ngày.",
    icon: Utensils,
  },
  {
    label: "04",
    title: "Theo dõi tiến trình sống khỏe",
    description:
      "Người dùng theo dõi lịch sử dinh dưỡng, báo cáo sức khỏe và điều chỉnh thói quen ăn uống theo thời gian.",
    icon: ClipboardCheck,
  },
];

export default function ScrollModelSection({
  modelSrc = "/models/apple.glb",
}: ScrollModelSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerWidth * (sections.length - 1)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (sections.length - 1));

            setActiveIndex(index);
            setScrollProgress(self.progress);
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-[#f4f7fd] via-white to-[#edf8f4]"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-lime-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* LEFT HORIZONTAL CONTENT */}
        <div className="relative flex h-full items-center overflow-hidden">
          <div ref={trackRef} className="flex w-full">
            {sections.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.label}
                  className="flex min-w-full items-center pr-0 lg:pr-16"
                >
                  <div
                    className={`w-full rounded-[32px] border bg-white/75 p-8 shadow-sm backdrop-blur-md transition-all duration-500 sm:p-10 ${
                      isActive
                        ? "scale-100 border-emerald-200 opacity-100 shadow-xl shadow-emerald-900/10"
                        : "scale-[0.94] border-slate-200 opacity-45"
                    }`}
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                        <Icon className="h-7 w-7" />
                      </div>

                      <span className="text-6xl font-black text-emerald-100">
                        {item.label}
                      </span>
                    </div>

                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">
                      Nutelyt AI Flow
                    </p>

                    <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                      {item.title}
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                      {item.description}
                    </p>

                    <div className="mt-10 flex items-center gap-3">
                      {sections.map((dot, dotIndex) => (
                        <span
                          key={dot.label}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            dotIndex === activeIndex
                              ? "w-10 bg-emerald-700"
                              : "w-2.5 bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT 3D APPLE MODEL */}
        <div className="relative hidden h-[620px] lg:block">
          {/* BACKGROUND CỦA KHUNG MODEL */}
          <div className="absolute inset-0 overflow-hidden rounded-[40px] border border-emerald-100 bg-gradient-to-br from-[#dbe8c9] via-[#edf6df] to-[#f8fff0] shadow-sm backdrop-blur-md">
            <div className="absolute -left-20 top-20 h-60 w-60 rounded-full bg-emerald-300/25 blur-3xl" />
            <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-lime-300/25 blur-3xl" />
          </div>

          <div className="absolute inset-0">
            <Canvas dpr={[1, 2]}>
              {/* 
                CHỖ CHỈNH CAMERA:

                position={[x, y, z]}
                x = trái / phải
                y = cao / thấp
                z = xa / gần

                fov nhỏ hơn = zoom gần hơn
                fov lớn hơn = nhìn rộng hơn
              */}
              <PerspectiveCamera
                makeDefault
                position={[0, 1.35, 6.5]}
                fov={38}
                near={0.1}
                far={100}
              />

              <ambientLight intensity={2.1} />
              <directionalLight position={[4, 6, 5]} intensity={2.8} />
              <directionalLight position={[-4, 3, -3]} intensity={1} />

              <Environment preset="apartment" />

              <AppleModel modelSrc={modelSrc} progress={scrollProgress} />

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                target={[0, 0.15, 0]}
              />
            </Canvas>
          </div>

          <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-emerald-100 bg-white/80 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur-md">
            Cuộn để khám phá quy trình
          </div>
        </div>
      </div>
    </section>
  );
}

type AppleModelProps = {
  modelSrc: string;
  progress: number;
};

function AppleModel({ modelSrc, progress }: AppleModelProps) {
  return (
    <AppleRig progress={progress}>
      <Center>
        <LoadedAppleModel modelSrc={modelSrc} />
      </Center>
    </AppleRig>
  );
}

type AppleRigProps = {
  progress: number;
  children: ReactNode;
};

function AppleRig({ progress, children }: AppleRigProps) {
  const groupRef = useRef<THREE.Group | null>(null);

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;

    /*
      Giữ quả táo đứng yên ở giữa.
      Không dùng targetX / targetY để tránh bị bay lung tung khi scroll.
    */
    group.position.x = THREE.MathUtils.lerp(group.position.x, 0, 0.08);
    group.position.y = THREE.MathUtils.lerp(group.position.y, 0, 0.08);
    group.position.z = THREE.MathUtils.lerp(group.position.z, 0, 0.08);

    /*
      Chỉ xoay nhẹ theo scroll.
      progress chạy từ 0 -> 1.
    */
    const targetRotationY = progress * Math.PI * 0.95;
    const targetRotationX = -0.12;
    const targetRotationZ = 0.02;

    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      targetRotationY,
      0.06,
    );

    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      targetRotationX,
      0.06,
    );

    group.rotation.z = THREE.MathUtils.lerp(
      group.rotation.z,
      targetRotationZ,
      0.06,
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

type LoadedAppleModelProps = {
  modelSrc: string;
};

function LoadedAppleModel({ modelSrc }: LoadedAppleModelProps) {
  const { scene } = useGLTF(modelSrc);

  const normalizedModel = useMemo(() => {
    const clonedScene = scene.clone(true);

    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    const maxAxis = Math.max(size.x, size.y, size.z);

    /*
      CHỖ CHỈNH SIZE MODEL:

      Táo to quá: giảm 2.6 xuống 2.2
      Táo nhỏ quá: tăng 2.6 lên 3.0
    */
    const MODEL_TARGET_SIZE = 2.6;

    const scale = maxAxis > 0 ? MODEL_TARGET_SIZE / maxAxis : 1;

    return {
      clonedScene,
      center,
      scale,
    };
  }, [scene]);

  return (
    <group
      scale={normalizedModel.scale}
      position={[0, -0.15, 0]}
      rotation={[-0.15, 0.25, 0.02]}
    >
      <primitive
        object={normalizedModel.clonedScene}
        position={[
          -normalizedModel.center.x,
          -normalizedModel.center.y,
          -normalizedModel.center.z,
        ]}
      />
    </group>
  );
}
