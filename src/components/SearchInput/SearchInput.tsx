import { useContext, useState } from "react";
import toast from "react-hot-toast";
import iconArrow from "@/assets/icon-arrow.svg";
import { fetchIpAddress } from "../../api/fetchIpAddress";
import { IpContext } from "../../store/IpStore";

export default function SearchInput() {
  const [ipAddressInput, setIpAddressInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { dispatch } = useContext(IpContext);

  async function onSubmit() {
    setIsDisabled(true);
    if (ipAddressInput !== "") {
      fetchIpAddress(ipAddressInput)
        .then((res) => {
          dispatch({ type: "setIpData", payload: res.data });
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("Please fill in the IP Address");
      setIsError(true);
    }
    setIsDisabled(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-[556px]">
      <input
        type="text"
        name="ipAddress"
        value={ipAddressInput}
        onChange={(e) => setIpAddressInput(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? onSubmit() : null)}
        onClick={() => setIsError(false)}
        placeholder="Search for any IP address or domain"
        className={`${
          isError ? "border-2 border-solid border-red-500" : "ring"
        } block flex-1 rounded-l-2xl focus:ring-sky-500 focus:ring-offset-1  focus:ring-offset-slate-50`}
      />
      <button
        onClick={onSubmit}
        disabled={isDisabled}
        className="rounded-r-2xl bg-zinc-600 px-3 transition hover:bg-zinc-800 disabled:bg-zinc-400"
      >
        <img src={iconArrow} alt="arrow" />
      </button>
    </div>
  );
}
