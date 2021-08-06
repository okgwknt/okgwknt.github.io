import { VFC } from "react";

type Props = {
  title: string;
  link: string;
};

export const HeaderTab: VFC<Props> = ({ title, link }) => (
  <div className="mt-2">
    <a href={link} className="text-s text-gray-400 mr-6 ">
      {title}
    </a>
  </div>
);
