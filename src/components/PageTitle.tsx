import { VFC } from "react";

type Props = {
  title: string;
};

export const PageTitle: VFC<Props> = ({ title }) => (
  <h1 className="mb-8 text-5xl text-gray-600">{title}</h1>
);
