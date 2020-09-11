export interface CUSTOMER {
  customerName?: string;
  form?: string;
  street?: string;
  language?: string;
  postcode?: string;
  city?: string;
  country?: string;
  custType?: string;
  discount?: string;
  phone?: string;
  email?: string;
}

export interface RETURN {
  TYPE: string;
  ID: string;
  NUMBER: string;
  MESSAGE: string;
  LOG_NO: string;
  LOG_MSG_NO: string;
  MESSAGE_V1: string;
  MESSAGE_V2: string;
  MESSAGE_V3: string;
  MESSAGE_V4: string;
  PARAMETER: string;
  ROW: number;
  FIELD: string;
  SYSTEM: string;
}

/* tslint:disable */
export interface CUSTOMERS {
  CUSTOMER_LIST?: CUSTOMER[];
  CUSTOMER_RANGE?: any[];
  EXTENSION_IN?: any[];
  EXTENSION_OUT?: any[];
  RETURN?: RETURN[];
}
/* tslint:enable */
