import { NextPage } from "next";
import { Account } from "../components/Account";
import { Header } from "../components/Header";

const IndexPage: NextPage = () => (
  <div>
    <div className="h-screen">
      <Header />

      <div className="fixed bottom-1">
        <Account />
      </div>

      <div className="h-full w-4/5 mx-auto text-center table">
        <h1 className=" table-cell align-middle text-2xl">
          OKUGAWA KANTA PORTFOLIO SITE beta
        </h1>
      </div>

      {/* <div className="h-full  w-full">
        <div className="flex items-center justify-center ">
          <div className="w-4 h-4 bg-black"></div>
        </div>
      </div> */}
    </div>
  </div>
);

export default IndexPage;
