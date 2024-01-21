import { useContext } from "react";
import { InitialStateType, IpConfigKeys, IpContext } from "../../store/IpStore";

export default function IpInfoCard() {
  const { state } = useContext(IpContext);
  type ConfigItemType<T> = {
    title: string;
    data: T;
  };
  type IpConfigType = [
    ConfigItemType<InitialStateType[IpConfigKeys.ipAddress]>,
    ConfigItemType<InitialStateType[IpConfigKeys.location]>,
    ConfigItemType<InitialStateType[IpConfigKeys.timeZone]>,
    ConfigItemType<InitialStateType[IpConfigKeys.isp]>,
  ];

  const IpConfig: IpConfigType = [
    {
      title: "IP Address",
      data: state[IpConfigKeys.ipAddress],
    },
    {
      title: "Location",
      data: state[IpConfigKeys.location],
    },
    {
      title: "TimeZone",
      data: state[IpConfigKeys.timeZone],
    },
    {
      title: "ISP",
      data: state[IpConfigKeys.isp],
    },
  ];
  return (
    <div className="relative z-[999] mx-auto  w-[80%] max-w-5xl">
      <ul className="absolute -top-[50px] flex w-full flex-col justify-between gap-5 rounded-lg bg-white p-6 shadow-xl md:flex-row">
        {IpConfig.map((item) => {
          return (
            <li
              key={item.title}
              className="flex w-full justify-center border-solid border-slate-300 last:border-0 md:w-3/12 md:border-r"
            >
              <div className="text-center font-medium md:text-left">
                <h5 className="text-sm text-slate-500">{item.title}</h5>
                <p className="text-lg">{item.data ? item.data : ""}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
