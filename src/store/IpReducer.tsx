import { InitialStateType } from "./IpStore";
import { IFetchIpAddressRes } from "../api/fetchIpAddress/type";

type ActionTypes = { type: "setIpData"; payload: IFetchIpAddressRes };

export default function IpReducer(state: InitialStateType, action: ActionTypes) {
  const payload = action.payload;
  switch (action.type) {
    case "setIpData":
      return {
        ...state,
        ipAddress: payload.ip,
        location: payload.location.country,
        timeZone: payload.location.timezone,
        isp: payload.isp,
      };
    default:
      return state;
  }
}
