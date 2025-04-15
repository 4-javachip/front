'use server';

import { PAGE_SIZE } from '@/constants/constants';
import { EventDataType, EventProductType } from '@/types/EventResponseDataType';
import { PaginatedResponseType } from '@/types/ProductResponseDataTypes';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { redirect } from 'next/navigation';

export async function getEventDatas() {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/api/v1/event/list`, {
      method: 'GET',
      // next: { revalidate: 24 * 60 * 60 },
    });
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);
      throw new Error(errorData.message);
    }
    const data = (await res.json()) as CommonResponseType<EventDataType[]>;

    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    console.log(error);
    redirect('/error');
  }
}

export async function getEventProductDatasByEventUuid({
  eventUuid,
  page,
}: {
  eventUuid: string;
  page: number;
}) {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/event-product/list/${eventUuid}?pageSize=${PAGE_SIZE}&page=${page}`,
      {
        method: 'GET',
        cache: 'no-cache',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);
      throw new Error(errorData.message);
    }
    const data = (await res.json()) as CommonResponseType<
      PaginatedResponseType<EventProductType[]>
    >;
    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    redirect('/error');
  }
}

export async function getEventDataByEventUuid(eventUuid: string) {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/event/${eventUuid}`,
      {
        method: 'GET',
        cache: 'no-cache',
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Data Fetching failed:', errorData);
      throw new Error(errorData.message);
    }
    const data = (await res.json()) as CommonResponseType<EventDataType>;
    return {
      success: true,
      data: data.result,
    };
  } catch (error) {
    redirect('/error');
  }
}
