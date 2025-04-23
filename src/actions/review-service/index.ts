'use server';

import { options } from '@/app/api/auth/[...nextauth]/options';
import {
  PaginatedReviewResponseType,
  ProductReviewImageType,
  ProductReviewSummaryType,
  ProductReviewType,
} from '@/types/ProductResponseDataTypes';
import { getReviewDataType } from '@/types/RequestDataTypes';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';

export async function getReviewDatasByProductUuid(params: getReviewDataType) {
  try {
    const queryString = params
      ? Object.entries(params)
          .reduce((acc, [key, value]) => {
            if (value !== undefined) acc.append(key, String(value));
            return acc;
          }, new URLSearchParams())
          .toString()
      : '';

    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/review/product?${queryString}`,
      {
        method: 'GET',
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);
      return {
        success: false,
        data: undefined,
      };
    }
    const data = (await res.json()) as CommonResponseType<
      PaginatedReviewResponseType<ProductReviewType[]>
    >;
    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    return {
      success: false,
      data: undefined,
    };
  }
}

export async function getReviewImageDataByReviewUuid({
  reviewUuid,
}: {
  reviewUuid: string;
}) {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/review/image/list/${reviewUuid}`,
      {
        method: 'GET',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('review image Data Fetching failed:', errorData);
      return {
        success: false,
        data: undefined,
      };
    }
    const data = (await res.json()) as CommonResponseType<
      ProductReviewImageType[]
    >;
    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    return {
      success: false,
      data: undefined,
    };
  }
}

export async function getReviewSummaryDataByProductUuid(productUuid: string) {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/review/summary/${productUuid}`,
      {
        method: 'GET',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('review summary Data Fetching failed:', errorData);
      return {
        success: false,
        data: undefined,
      };
    }
    const data =
      (await res.json()) as CommonResponseType<ProductReviewSummaryType>;
    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    return {
      success: false,
      data: undefined,
    };
  }
}

export async function checkIfReviewedByOrderDetailUuid(
  OrderDetailUuid: string
) {
  try {
    const session = await getServerSession(options);
    if (!session)
      return {
        success: false,
        data: undefined,
      };
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/order/exist/${OrderDetailUuid}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        data: errorData.message,
      };
    }

    const data = await response.json();
    return {
      success: true,
      data: data.result as boolean,
    };
  } catch (error) {
    return {
      success: false,
      data: undefined,
    };
  }
}
