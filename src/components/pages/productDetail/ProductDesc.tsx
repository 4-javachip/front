'use client';

import { ProductDescriptionType } from '@/types/ProductResponseDataTypes';
import { useState } from 'react';
import ExpandCollapseButton from './ExpandCollapseButton';

export default function ProductDesc({
  detailDescription,
}: ProductDescriptionType) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const htmlData = `
                <!-- 불량판정서 -->
<div class="cdtl_sec_area">
    <div class="cdtl_sec cdtl_detail_num">
        <div class="cdtl_cont_info">
            <div class="cdtl_cont_bx">
                <p class="cdtl_prd_num">상품번호 : 1000683625816</p>
                <p class="cdtl_model_num">모델번호 : 9300000005636</p>
                    </div>
        </div>
    </div>

    <!--  몰탭 광고 상품 비노출 처리 -->
    <!--[D] 오픈마켓 -->
        <!--[D] 해외직구안내 노출 -->
        <!--[D] 신세계면세점 노출 -->
        <!--[D] SSG 개런티 -->
        <!-- [D] 발렉스 -->
        <!--[D] 미식관 -->
        <!-- [D] 삼성, 엘지전자 설치상품 -->
        <!-- 옵션컬러비교 -->
    <!--  몰탭 광고 상품 비노출 처리 -->
    <div class="cdtl_sec cdtl_md_notice">
                <div class="cdtl_sec_titarea">
                    <h4 class="cdtl_tit_info">상품 공지사항</h4>
                </div>
                <div class="cdtl_cont_info">
                    <div class="cdtl_cont_bx">
                                        [배송 안내]<br><br>프로모션 상품의 택배 물량 증가로 인해 4월 13일 일요일에도 출고가 진행될 예정입니다.<br>다만, 물량 증가로 인해 주
문하신 상품의 배송이 지연될 수 있습니다. 넓은 마음으로 양해 부탁드립니다.<br>빠르고 안전한 배송을 위해 노력하겠습니다. 감사합니다.</div>
                                </div>
            </div>
        <!-- 상품정보탭 > 멤버십 전용 상품 안내 배너 -->
    <div class="cdtl_sec cdtl_seller_html ty_1800">
        <h4 class="blind">상품 상세 정보</h4>

        <div class="blind" id="itemNutritionGrid">
























</div>

        <div class="cdtl_capture_img">
            <div id="descContents">
    <button class="btn_a11y FullText" onclick="itemDtlDescImgOcrVoiceSupportFullText();">이미지 OCR 대체 텍스트 음성지원 전체 듣기</button>
    <button class="btn_a11y SummaryText" onclick="itemDtlDescImgOcrVoiceSupportSummaryText();">이미지 OCR 대체 텍스트 음성지원 요약본 듣기</button>

 <link rel="stylesheet" href="https://sui.ssgcdn.com/ui/common/img/bo/editor/ssgQuotePlugin/ssgQuotePlugin.css">
 <link rel="stylesheet" href="https://sui.ssgcdn.com/ui/common/img/bo/editor/ssgHorizontalLinePlugin/ssgHorizontalLinePlugin.css">
 <div class="se-contents" style="box-sizing: content-box;">
  <div class="se-div" align="center">
   <p style="margin: 0px;"><span class="se-drawing-object-wrapper se-image" style="vertical-align: baseline; text-indent: 0px; display: inline-block;"><img style="vertical-align: bottom;" src="https://prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com/figma/ssg/product/9300000005636.png"></span><span>&nbsp;</span><span class="se-drawing-object-wrapper se-image" style="vertical-align: baseline; text-indent: 0px; display: inline-block;"><img style="vertical-align: bottom;" src="https://prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com/figma/ssg/common/ssg_nt.png"></span><span>&nbsp;</span><span class="se-drawing-object-wrapper se-image" style="vertical-align: baseline; text-indent: 0px; display: inline-block;"><img style="vertical-align: bottom;" src="https://prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com/figma/ssg/hd/sgheat_gtb.png"></span></p>
  </div>
 </div></div>
                        </div>

        <div class="cdtl_capture_img">
                <div class="cdtl_tmpl_cont ty_grocery">
                    <!-- SSG.Tip -->
</div>
            </div>
        <div class="cdtl_seller_html_collapse">
            <!-- 활성시 active -->
            <button type="button" class="btn_collapse ctrl_collapse">
                <span class="collapse_on">상세정보 펼쳐보기</span>
                <span class="collapse_off">상세정보 접기</span>
            </button>
        </div>
    </div>

</div>
  `;

  return (
    <section className="padded">
      <h2 className="font-pretendard font-bold pb-10">상품 정보</h2>
      <style jsx global>{`
        .collapse_on,
        .collapse_off {
          display: none;
        }
      `}</style>
      <div
        className={`relative inner-html overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-[9999px]' : 'max-h-[35rem]'
        }`}
      >
        <div dangerouslySetInnerHTML={{ __html: detailDescription }} />

        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-white via-white/90 to-transparent pt-8 pb-4">
            <ExpandCollapseButton
              expanded={expanded}
              onClick={toggleExpanded}
            />
          </div>
        )}
      </div>

      {expanded && (
        <div className="mt-5">
          <ExpandCollapseButton expanded={expanded} onClick={toggleExpanded} />
        </div>
      )}
    </section>
  );
}
