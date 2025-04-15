import { LogoIcon } from '@/components/ui/icons/LogoIcon';

export default function StarbucksLoading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#f6f5ef] flex flex-col font-pretendard items-center justify-center text-[#1e3932] max-w-[var(--base-w)] mx-auto">
      <div className="mb-4">
        <LogoIcon size={50} />
      </div>

      <p className="text-base font-semibold tracking-wide flex items-center">
        스타벅스 스토어 준비 중
        <span
          className="w-1 h-1 ml-1 rounded-full bg-current inline-block"
          style={{
            animation: 'dot-pop 1.8s infinite',
            animationDelay: '0s',
          }}
        ></span>
        <span
          className="w-1 h-1 ml-1 rounded-full bg-current inline-block"
          style={{
            animation: 'dot-pop 1.8s infinite',
            animationDelay: '0.3s',
          }}
        ></span>
        <span
          className="w-1 h-1 ml-1 rounded-full bg-current inline-block"
          style={{
            animation: 'dot-pop 1.8s infinite',
            animationDelay: '0.6s',
          }}
        ></span>
        <style>
          {`
            @keyframes dot-pop {
              0%, 100% {
                transform: translateY(0);
                opacity: 0.4;
              }
              50% {
                transform: translateY(-6px);
                opacity: 1;
              }
            }
          `}
        </style>
      </p>
    </div>
  );
}
