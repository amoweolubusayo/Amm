import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import AboutIcon from "../icons/AboutIcon";
import ExploreIcon from "../icons/ExploreIcon";
import SpacesIcon from "../icons/SpacesIcon";
import ReturnIcon from "../icons/ReturnIcon";

const Sidebar: React.FC = ({}) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
        <div className="h-screen flex justify-between shadow-sm scrollbar-change flex-col overflow-y-auto w-60 border-r border-r-[#545252] ml-0">
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center mx-auto py-4">
              </div>

              <div className="nav__inner mt-5">
                <div className="flex flex-col justify-between ">
                  <Link
                    href="/"
                    className={`nav__link hover:bg-[#3F3F3F] transition-all ease-in duration-200 ${
                      router.asPath === "/" ? "bg-[#3F3F3F] active" : ""
                    } `}
                  >
                    <div className="flex items-center gap-3 py-4 px-6 mx-auto border-b border-[#545252] text-sm relative">
                      <span>
                        <ExploreIcon />
                      </span>

                      <span className="nav_item">Liquidity Pool Creation</span>
                      <span className="right_border"></span>
                    </div>
                  </Link>
                  <Link
                    href="/pool"
                    className={`nav__link hover:bg-[#3F3F3F] transition-all ease-in duration-200 border-b border-[#545252] ${
                      router.asPath === "/pool" ||
                      router.pathname.startsWith("/pool")
                        ? "bg-[#3F3F3F] active"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 py-4 px-6 mx-auto text-sm relative">
                      <span>
                        <SpacesIcon />
                      </span>

                      <span className="nav_item">Liquidity Pool Explorer</span>

                      <span className="right_border"></span>
                    </div>
                  </Link>
                  <Link
                    href="/tokenchart"
                    className={`nav__link hover:bg-[#3F3F3F] transition-all ease-in duration-200 border-b border-[#545252] ${
                      router.asPath === "/tokenchart" ||
                      router.pathname.startsWith("/tokenchart")
                        ? "bg-[#3F3F3F] active"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 py-4 px-6 mx-auto text-sm relative">
                      <span>
                        <ReturnIcon />
                      </span>

                      <span className="nav_item">Token Price Charts</span>

                      <span className="right_border"></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="about_btn hover:bg-[#3F3F3F] transition-all ease-in duration-200 ">
              <Link href="/spaces">
                <div className="flex items-center gap-3 py-4 px-6 mx-auto text-sm">
                  <span>
                    <AboutIcon />
                  </span>

                  <span className="nav_item">About</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
};

export default Sidebar;
