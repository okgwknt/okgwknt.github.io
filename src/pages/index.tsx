import { NextPage } from "next";
import { Account } from "../components/Account";
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";

const IndexPage: NextPage = () => (
  <div className="font-body">
    <div className="h-screen">
      <Header></Header>

      <div className="fixed bottom-1">
        <Account></Account>
      </div>

      <div className="h-full w-4/5 mx-auto text-center table">
        <h1 className=" table-cell align-middle">
          {/* HOW TO GET THINGS DONE WHEN YOU DON’T WANT TO DO ANYTHING */}
          OKUGAWA KANTA POTFORLIO SITE
        </h1>
      </div>
    </div>
  </div>
);

export default IndexPage;
