import { NextPage } from "next";
import { Account } from "../components/Account";
import { Menu } from "../components/Menu";
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
          OKUGAWA KANTA PORTFOLIO SITE
        </h1>
      </div>
    </div>
  </div>
);

export default IndexPage;
