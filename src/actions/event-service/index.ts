'use server';

import { EventDataType, EventProductType } from '@/types/EventResponseDataType';
import { PaginatedResponseType } from '@/types/ProductResponseDataTypes';
import { CommonResponseType } from '@/types/ResponseDataTypes';

export async function getEventDatas() {
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/event/list`, {
    method: 'GET',
    next: { revalidate: 24 * 60 * 60 },
  });
  if (!res.ok) {
    const errorData = await res.json();
    console.error('Data Fetching failed:', errorData);
    throw new Error(errorData.message);
  }
  const data = (await res.json()) as CommonResponseType<EventDataType[]>;
  return data.result;
}

export async function getEventProductDatasByEventUuid(eventUuid: string) {
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/event-product/list/${eventUuid}`,
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
  return data.result;
}

export async function getEventDataByEventUuid(eventUuid: string) {
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
  return data.result;
}
