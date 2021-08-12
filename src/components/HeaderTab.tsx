import { VFC } from "react";
import Link from "next/link";

type Props = {
  title: string;
  link: string;
};

export const HeaderTab: VFC<Props> = ({ title, link }) => (
  <div className="mt-4">
    <div className="text-xl text-gray-400 mr-8 ">
      <Link href={link}>{title}</Link>
    </div>
  </div>
);
