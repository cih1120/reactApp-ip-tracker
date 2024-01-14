import { createContext, Dispatch } from "react";

export enum IpConfigKeys {
  ipAddress = "ipAddress",
  location = "location",
  timeZone = "timeZone",
  isp = "isp",
}

export type InitialStateType = {
  [IpConfigKeys.ipAddress]: string | null;
  [IpConfigKeys.location]: string | null;
  [IpConfigKeys.timeZone]: string | null;
  [IpConfigKeys.isp]: string | null;
};

export const initialState: InitialStateType = {
  [IpConfigKeys.ipAddress]: null,
  [IpConfigKeys.location]: null,
  [IpConfigKeys.timeZone]: null,
  [IpConfigKeys.isp]: null,
};

type IpContextType = {
  state: InitialStateType;
  dispatch: Dispatch<any>;
};

export const IpContext = createContext<IpContextType>({
  state: initialState,
  dispatch: () => null,
});
