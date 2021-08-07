import { VFC } from "react";
import Link from "next/link";

type Props = {
  title: string;
  link: string;
};

export const HeaderTab: VFC<Props> = ({ title, link }) => (
  <div className="mt-2">
    <div className="text-s text-gray-400 mr-6 ">
      <Link href={link}>{title}</Link>
    </div>
  </div>
);
