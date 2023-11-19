import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AiTwotoneHome } from "react-icons/ai";
import { changedToggle, toggled } from "../../global/globalState";
import { FaHistory } from "react-icons/fa";
const Sider = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  const [state, setState] = useState<boolean>(false);
  const onToggle = () => {
    setState(!state);
  };
  return (
    <>
      <div
        className={`${
          !toggle ? "w-[150px]" : "w-[50px]"
        } flex flex-col justify-center items-center`}
      >
        <div
          className={`mt-4 flex justify-end ${toggle ? "ml-0" : "ml-24"}`}
          onClick={() => {
            onToggle();
          }}
        >
          {!state ? (
            <GiHamburgerMenu
              className="text-2xl hover:cursor-pointer hover:scale-125 duration-500 transition-all "
              onClick={() => {
                dispatch(toggled());
              }}
            />
          ) : (
            <GiHamburgerMenu
              className="text-2xl hover:cursor-pointer hover:scale-125 duration-500 transition-all text-white"
              onClick={() => {
                dispatch(changedToggle());
              }}
            />
          )}
        </div>
        <div className="mt-10 flex items-center ">
          <div className="mr-2">
            <AiTwotoneHome className="text-2xl" />
          </div>
          {!toggle && <div className="font-bold ">Home</div>}
        </div>
        <div className="mt-10 flex items-center ">
          <div className="mr-2">
            <FaHistory className="text-2xl" />
          </div>
          {!toggle && <div className="font-bold ">History</div>}
        </div>
      </div>
    </>
  );
};

export default Sider;
