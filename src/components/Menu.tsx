import Image from "next/image";

// fontowesome 導入

function navOpen() {
  let height = document.getElementById("nav_height");
  // height.style.height = "100%";
  let a_zindex = document.getElementById("open_menu");
  // a_zindex.style.zIndex = 10;
  let b_zindex = document.getElementById("close_menu");
  // b_zindex.style.zIndex = 1111111111;
  let className = document.getElementsByClassName(
    "w-8 h-8 inline-block z-1000"
  );
  console.log(className);
}
function navClose() {
  let height = document.getElementById("nav_height");
  // height.style.height = "0px";
  let a_zindex = document.getElementById("open_menu");
  // a_zindex.style.zIndex = 1111111111;
  let b_zindex = document.getElementById("close_menu");
  // b_zindex.style.zIndex = -1111111111;
  let className = document.getElementsByClassName(
    "w-8 h-8 inline-block z-1000"
  );
  console.log("11");
}

export const Menu = ({}) => (
  <>
    <div className="">
      <div className="fixed right-10 top-10 ">
        <button
          className="w-8 h-8 inline-block z-1000 "
          onClick={() => navOpen()}
        >
          <div className=" w-full h-px bg-black"></div>
          <div className=" w-full h-px bg-black mt-2"></div>
          <div className=" w-full h-px bg-black mt-2"></div>
        </button>
        <p className="text-xs text-center mt-2">Menu</p>
      </div>

      {/* overflow-x-hidden */}
      <div
        id="nav_height"
        className="fixed container h-0 overflow-x-hidden z-10 top-0 left-0 bg-white"
      >
        <div>
          <button
            id="close_menu"
            className="w-8 h-8 right-5 top-8 "
            onClick={() => navClose()}
          >
            <div className="w-full h-1 bg-black transform rotate-45 "></div>
            <div className="w-full h-1 bg-black transform -rotate-45"></div>
          </button>
        </div>

        <ul className="">
          <li>
            <a href="./" className="">
              Home
            </a>
          </li>
          <li>
            <a href="./profile" className="">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
);
