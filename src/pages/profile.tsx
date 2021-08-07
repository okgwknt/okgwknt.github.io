import { NextPage } from "next";
import { Account } from "../components/Account";
import { Section } from "../components/Section";
import { Paragraph } from "../components/Paragraph";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";

const IndexPage: NextPage = () => (
  <div className="font-body">
    <Header />

    <div className="fixed bottom-1">
      <Account />
    </div>

    <main className="pt-20 w-4/5 mx-auto">
      <PageTitle title="Profile" />

      <Section title="Kanta Okugawa">
        <Paragraph>
          奥川莞多
          <br />
          Ritsumeikan University
          <br />
          Collage of Information Science and Engineering
          <br />
          Security and Networks Cource
          <br />A junior(Third year)
          <br />
          Birthday: 2000/12/26, Birthplace: Japan, Height: 173cm, Weight: 60kg,
          Body Temperature: 309.45K
        </Paragraph>
      </Section>

      <Section title="History">
        <Paragraph>大阪生まれだよ</Paragraph>
      </Section>

      <Section title="Skill">
        <Paragraph>
          C language, Swift, Java, (JavaScript), (Go), Git, GitHub, Network,
          World Wide Web, Security
        </Paragraph>
      </Section>

      <Section title="Qualification">
        <Paragraph>
          普通自動車免許
          <br />
          基本情報技術者(Fundamental Information Technology Engineer)
          <br />
          応用情報技術者(Applied Information Technology Engineer)
        </Paragraph>
      </Section>

      <Section title="Favorite">
        <Paragraph>
          THE BLUE HEARTS / IU / Dramas / Anime / TV show / Music
        </Paragraph>
      </Section>
    </main>
  </div>
);

export default IndexPage;
