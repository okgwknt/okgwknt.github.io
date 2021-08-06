import Head from "next/head";
import Image from "next/image";

import { NextPage } from "next";
import { Account } from "../components/Account";
import { Section } from "../components/Section";
import { Paragraph } from "../components/Paragraph";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";

const IndexPage: NextPage = () => (
  <div className="font-body">
    <Header></Header>

    <div className="fixed bottom-1">
      <Account></Account>
    </div>

    <main className="pt-20 w-4/5 mx-auto">
      <PageTitle title="Profile"></PageTitle>
    </main>
  </div>
);

export default IndexPage;
