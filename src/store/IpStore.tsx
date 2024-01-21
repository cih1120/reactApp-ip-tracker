import { createContext, Dispatch } from "react";

export enum IpConfigKeys {
  ipAddress = "ipAddress",
  location = "location",
  timeZone = "timeZone",
  isp = "isp",
  lat = "lat",
  lng = "lng",
}

export type InitialStateType = {
  [IpConfigKeys.ipAddress]: string | null;
  [IpConfigKeys.location]: string | null;
  [IpConfigKeys.timeZone]: string | null;
  [IpConfigKeys.isp]: string | null;
  [IpConfigKeys.lat]: number | null;
  [IpConfigKeys.lng]: number | null;
};

export const initialState: InitialStateType = {
  [IpConfigKeys.ipAddress]: null,
  [IpConfigKeys.location]: null,
  [IpConfigKeys.timeZone]: null,
  [IpConfigKeys.isp]: null,
  [IpConfigKeys.lat]: null,
  [IpConfigKeys.lng]: null,
};

type IpContextType = {
  state: InitialStateType;
  dispatch: Dispatch<any>;
};

export const IpContext = createContext<IpContextType>({
  state: initialState,
  dispatch: () => null,
});
