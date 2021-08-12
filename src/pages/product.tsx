import Head from "next/head";
import Image from "next/image";

import { NextPage } from "next";
import { Account } from "../components/Account";
import { Section } from "../components/Section";
import { Paragraph } from "../components/Paragraph";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";

const ProductPage: NextPage = () => (
  <div>
    <Header />

    <div className="fixed bottom-1">
      <Account />
    </div>

    <main className="pt-20 w-4/5 mx-auto">
      <div className="pl-5">
        <PageTitle title="Product"></PageTitle>
      </div>
    </main>
  </div>
);

export default ProductPage;
