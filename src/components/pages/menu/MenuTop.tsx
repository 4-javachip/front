import CloseIcon from '@/components/ui/icons/CloseIcon';

interface Props {
  onClose: () => void;
}

export default function MenuTop({ onClose }: Props) {
  return (
    <section className="px-6 pt-5 " aria-label="메뉴 상단 영역">
      <nav className="flex justify-end">
        <button onClick={onClose} className="inline-flex items-center">
          <CloseIcon />
        </button>
      </nav>

      <article className="pt-5">
        <h2 className="text-2xl font-semibold font-body">Welcome !</h2>
        <p className="font-body text-xs font-medium text-black pt-3 pb-5">
          온라인 스토어에 오신 것을 환영합니다.
        </p>
      </article>

      <hr className="border-t border-[#DADADA] w-full" />
    </section>
  );
}
