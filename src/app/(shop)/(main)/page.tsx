import BannerSlide from '@/components/ui/BannerSlide';
import ProductCarousel from '@/components/pages/main/ProductCarousel';
import { eventCarousels, mainBannerSlideData } from '@/data/dummyDatas';

export default function Home() {
  //   const data = {
  //     __html: `
  //       <div class="mndtl_detail_area ty_detail">

  //                         <!--
  //                         ex) 일반 상세 일때
  //                         <div class="real_img"><img class="ssg_lazy" src="https://sui.ssgcdn.com/ui/m_ssg/img/common/b.gif" data-src="https://sstatic.ssgcdn.com/ui/ssg/img/product/size/fit_2000000002.jpg" alt="자켓/점퍼"></div>

  //                         ex) native일때
  //                         <div class="real_img"><img src="https://sstatic.ssgcdn.com/ui/ssg/img/product/size/fit_2000000002.jpg" alt="자켓/점퍼"></div>
  //                         -->

  //                         <div class="mndtl_tmpl_detail">

  //                                 <div class="mndtl_tmpl_html">

  //  <link href="https://fonts.googleapis.com" rel="preconnect">
  //  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect">
  //  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&amp;display=swap" rel="stylesheet">
  //  <div id="pib_detail_page">
  //   <div>
  //    <!-- 헤더 -->
  //    <img src="https://cdn.popinborder.com/_market/dyson/dyson_header_290_1738306778.jpg">
  //   </div> &nbsp;
  //   <div>
  //    <div style="text-align: center;">
  //     <img alt="" src="https://cdn.popinborder.com/_ckeditor/20250403/67ee52f934530.jpg" style="width: 860px; height: 450px;">
  //     <br>
  //     <img alt="" src="https://cdn.popinborder.com/_ckeditor/20250328/67e5ff3b86989.jpg" style="width: 860px; height: 12755px;">
  //    </div>
  //   </div>
  //   <div>
  //    <!-- 풋터 -->
  //    <img src="https://cdn.popinborder.com/_market/dyson/dyson_footer_290_1715328073.jpg">
  //   </div>
  //  </div>
  //  <style type="text/css">#pib_detail_page table{width:860px;border-collapse :collapse;margin-left: auto;margin-right:auto;}    #pib_detail_page table tr{border-top:1px solid rgb(218, 218, 218);border-bottom: 1px solid rgb(218, 218, 218);}    #pib_detail_page table tr th{width:18% !important; padding:14px 30px 15px 30px;background-color:#f1f1f1;font-family: sans-serif;font-size:16px;}    #pib_detail_page table tr td{padding:15px 30px;background-color:white;border: none;font-family: sans-serif;font-size:15px;}    #pib_detail_page div img{width:100%;}    #pib_detail_page {text-align: center;}    #pib_detail_page table tr td div {text-align: left !important;}
  // </style>

  //                                 </div>

  //                             <!-- 상품이미지 (1~10) -->

  //                                 <div class="mndtl_tmpl_ssgtips ty_grocery">

  //                                 </div>

  //                             <button class="btn_a11y SummaryText" onclick="javascript:itemDtlDescImgOcrVoiceSupportSummaryText();">이미지 OCR 대체 텍스트 음성지원 요약본 듣기</button>
  //                             <button class="btn_a11y FullText" onclick="javascript:itemDtlDescImgOcrVoiceSupportFullText();">이미지 OCR 대체 텍스트 음성지원 전체 듣기</button>
  //                         </div>

  //             </div>
  //     `,
  //   };
  return (
    <main>
      <BannerSlide slides={mainBannerSlideData} />
      <section className="flex flex-col pl-6 py-12 gap-12">
        {eventCarousels.map((carousel) => (
          <ProductCarousel key={carousel.eventId} {...carousel} />
        ))}
      </section>
      {/* <div
        className="inner-html px-4"
        dangerouslySetInnerHTML={{ __html: data.__html }}
      /> */}
    </main>
  );
}
