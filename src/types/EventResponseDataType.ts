export interface EventDataType {
  eventUuid: string;
  name: string;
  description: string;
  precaution: string;
  startAt: string;
  endAt: string;
  state: boolean;
}

export interface EventProductType {
  productUuid: string;
  eventUuid: string;
}
