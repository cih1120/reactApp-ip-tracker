import axios, { AxiosResponse } from "axios";
import { fetchIpAddressStatusType, IFetchIpAddressRes } from "./type";
import { API_URLS, apiInstance } from "..";

export async function fetchIpAddress(ipAddress: string): Promise<AxiosResponse<IFetchIpAddressRes>> {
  try {
    const fetchUrl = `${API_URLS.IPGeolocation}apiKey=${import.meta.env.VITE_IPGEO_API_KEY}&ipAddress=${ipAddress}`
    const res = await apiInstance.get<IFetchIpAddressRes>(fetchUrl);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status == fetchIpAddressStatusType.errorIpAddress) {
      throw new Error('Error IP Address'); // 422 Error
    } else {
      throw new Error('Something wrong, please try again later.');
    }
  }
}