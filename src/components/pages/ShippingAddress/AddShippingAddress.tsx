'use client';

import React, { useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import CommonButton from '../../ui/buttons/CommonButton';
import DaumPostcodeModal from './DaumPostcodeModal';
import { addShippingAddress } from '@/actions/shipping-address';
import CustomCheckBox from '@/components/ui/inputs/CustomCheckBox';
import AddShippingAddressHeader from './AddShippingAddressHeader';

export default function AddShippingAddress() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const zipCodeFromUrl = searchParams.get('zipCode') || '';
  const baseAddressFromUrl = searchParams.get('defaultAddress') || '';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shippingNote, setShippingNote] = useState('');
  const [isDefault, setIsDefault] = useState(false); // 기본배송지 여부 상태
  const [values, setValues] = useState({
    addressNickname: '',
    shippingAddressUuid: '',
    receiverName: '',
    zipCode: zipCodeFromUrl,
    baseAddresses: baseAddressFromUrl,
    detailedAddress: '',
    phoneNumber: '',
    secondPhoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleAddressSelect = (data: { zonecode: string; address: string }) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('zipCode', data.zonecode);
    newSearchParams.set('defaultAddress', data.address);
    router.replace(`${pathname}?${newSearchParams.toString()}`);

    setValues((prev) => ({
      ...prev,
      zipCode: data.zonecode,
      baseAddresses: data.address,
    }));
  };

  const handleSubmit = async () => {
    try {
      await addShippingAddress({
        shippingAddressUuid: '',
        addressName: values.addressNickname,
        recipientName: values.receiverName,
        zipCode: values.zipCode,
        baseAddress: values.baseAddresses,
        detailAddress: values.detailedAddress,
        phoneNumber: values.phoneNumber,
        secondPhoneNumber: values.secondPhoneNumber,
        shippingNote: shippingNote,
      });

      alert('배송지 등록이 완료되었습니다.');
      router.push('/mypage/shipping-addresses');
    } catch (error) {
      console.error(error);
      alert('배송지 등록에 실패했습니다.');
    }
  };

  return (
    <main>
      <AddShippingAddressHeader />
      <div className="px-[1.5rem]">
        <h1 className="py-[1.25rem] text-[1.625rem] font-semibold">
          배송지 정보
        </h1>

        <form
          className="mt-[1.25rem] mb-[10rem]"
          onSubmit={(e) => e.preventDefault()}
        >
          <section className="space-y-[1.25rem]">
            <div className="relative w-full pt-4">
              <input
                id="addressNickname"
                name="addressNickname"
                value={values.addressNickname}
                onChange={handleChange}
                className="peer w-full border-b text-[0.938rem] border-gray-300 focus:border-[#00a862] outline-none transition"
              />
              <label
                htmlFor="addressNickname"
                className={
                  values.addressNickname
                    ? 'absolute left-0 top-0 text-xs text-[#00a862]'
                    : 'absolute left-0 text-[0.938rem] text-gray-600 font-medium transition peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#00a862]'
                }
              >
                주소별칭
              </label>
            </div>

            <div className="relative w-full pt-4">
              <input
                id="receiverName"
                name="receiverName"
                value={values.receiverName}
                onChange={handleChange}
                className="peer w-full border-b text-[0.938rem] border-gray-300 focus:border-[#00a862] outline-none"
              />
              <label
                htmlFor="receiverName"
                className={
                  values.receiverName
                    ? 'absolute left-0 top-0 text-xs text-[#00a862]'
                    : 'absolute left-0 text-[0.938rem] text-gray-600 font-medium transition peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#00a862]'
                }
              >
                받는 분<span className="text-[#00a862] px-0.5">*</span>
              </label>
            </div>

            <div className="flex justify-between gap-5">
              <div className="relative w-full pt-4">
                <input
                  id="zipCode"
                  name="zipCode"
                  readOnly
                  value={values.zipCode}
                  className="peer w-full border-b text-[0.938rem] border-gray-300 focus:border-[#00a862] outline-none"
                />
                <label
                  htmlFor="zipCode"
                  className={
                    values.zipCode
                      ? 'absolute left-0 top-0 text-xs text-[#00a862]'
                      : 'absolute left-0 text-[0.938rem] text-gray-600 font-medium transition peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#00a862]'
                  }
                >
                  우편번호<span className="text-[#00a862] px-0.5">*</span>
                </label>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center whitespace-nowrap w-[5.375rem] h-[2.25rem] px-[1.0625rem] text-[0.938rem] bg-white text-[#00a862] rounded-[1.25rem] border border-[#00a862]"
              >
                주소검색
              </button>
            </div>

            <div className="relative w-full pt-4">
              <input
                id="defaultAddress"
                name="defaultAddress"
                readOnly
                value={values.baseAddresses}
                className="peer w-full border-b text-[0.938rem] border-gray-300 focus:border-[#00a862] outline-none"
              />
              <label
                htmlFor="defaultAddress"
                className={
                  values.baseAddresses
                    ? 'absolute left-0 top-0 text-xs text-[#00a862]'
                    : 'absolute left-0 text-[0.938rem] text-gray-600 font-medium transition peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#00a862]'
                }
              >
                기본주소<span className="text-[#00a862] px-0.5">*</span>
              </label>
            </div>

            <div className="relative w-full pt-4">
              <input
                id="detailedAddress"
                name="detailedAddress"
                value={values.detailedAddress}
                onChange={handleChange}
                className="peer w-full border-b text-[0.938rem] border-gray-300 focus:border-[#00a862] outline-none"
              />
              <label
                htmlFor="detailedAddress"
                className={
                  values.detailedAddress
                    ? 'absolute left-0 top-0 text-xs text-[#00a862]'
                    : 'absolute left-0 text-[0.938rem] text-gray-600 font-medium transition peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#00a862]'
                }
              >
                상세주소<span className="text-[#00a862] px-0.5">*</span>
              </label>
            </div>

            <div className="relative w-full pt-4">
              <input
                id="firstPhoneNumber"
                name="firstPhoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                className="peer w-full border-b text-[0.938rem] border-gray-300 focus:border-[#00a862] outline-none"
              />
              <label
                htmlFor="firstPhoneNumber"
                className={
                  values.phoneNumber
                    ? 'absolute left-0 top-0 text-xs text-[#00a862]'
                    : 'absolute left-0 text-[0.938rem] text-gray-600 font-medium transition peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#00a862]'
                }
              >
                연락처1<span className="text-[#00a862] px-0.5">*</span>
              </label>
            </div>

            <div className="relative w-full pt-4">
              <input
                id="secondPhoneNumber"
                name="secondPhoneNumber"
                value={values.secondPhoneNumber}
                onChange={handleChange}
                className="peer w-full border-b text-[0.938rem] border-gray-300 focus:border-[#00a862] outline-none"
              />
              <label
                htmlFor="secondPhoneNumber"
                className={
                  values.secondPhoneNumber
                    ? 'absolute left-0 top-0 text-xs text-[#00a862]'
                    : 'absolute left-0 text-[0.938rem] text-gray-600 font-medium transition peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#00a862]'
                }
              >
                연락처2
              </label>
            </div>
            <div>
              <label className="font-medium text-[0.75rem]">배송메모</label>
              <select
                name="deliveryMemo"
                value={shippingNote}
                onChange={(e) => setShippingNote(e.target.value)}
                className="w-full text-[0.938rem] font-medium border-b-1 border-t-0 border-x-0 border-gray-300 outline-none py-1"
              >
                <option value="default" disabled>
                  배송 메모를 선택해주세요.
                </option>
                <option value="배송 전 연락 바랍니다.">
                  배송 전 연락 바랍니다.
                </option>
                <option value="부재 시 경비실에 맡겨주세요.">
                  부재 시 경비실에 맡겨주세요.
                </option>
                <option value="부재 시 문 앞에 놓아주세요.">
                  부재 시 문 앞에 놓아주세요.
                </option>
                <option value="부재 시 전화 또는 문자 남겨주세요.">
                  부재 시 전화 또는 문자 남겨주세요.
                </option>
                <option value="직접입력">직접입력</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 pb-10">
              <CustomCheckBox
                label="기본배송지로 지정하기"
                onChange={(e) => setIsDefault(e.target.checked)}
                checked={isDefault}
              />
            </div>
          </section>

          <CommonButton
            className="font-semibold"
            onClick={handleSubmit}
            isEnabled={true}
          >
            등록하기
          </CommonButton>
        </form>

        {isModalOpen && (
          <DaumPostcodeModal
            onClose={() => setIsModalOpen(false)}
            onComplete={handleAddressSelect}
          />
        )}
      </div>
    </main>
  );
}
