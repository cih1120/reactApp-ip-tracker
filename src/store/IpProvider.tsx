import { ReactNode, useReducer } from "react";
import { IpContext, initialState } from "./IpStore";
import IpReducer from "./IpReducer";

export default function IpProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(IpReducer, initialState);
  return <IpContext.Provider value={{ state, dispatch }}>{children}</IpContext.Provider>;
}
