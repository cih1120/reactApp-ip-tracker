export enum fetchIpAddressStatusType {
  success = 200,
  errorIpAddress = 422,
}

export interface IFetchIpAddressRes {
  ip: string,
  location: {
    country: string,
    region: string,
    timezone: string
  },
  as: {
    asn: number,
    name: string,
    route: string,
    domain: string,
    type: string,
  },
  isp: string
}