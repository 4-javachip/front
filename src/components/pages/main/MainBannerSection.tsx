import { mainBannerSlideData } from '@/data/dummyDatas';
import BannerSlide from './BannerSlide';

export default function MainBannerSection() {
  return (
    <div>
      <BannerSlide slides={mainBannerSlideData} />
    </div>
  );
}
