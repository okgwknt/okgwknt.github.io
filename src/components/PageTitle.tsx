import { VFC } from "react";

type Props = {
  title: string;
};

export const PageTitle: VFC<Props> = ({ title }) => (
  <h1 className="mb-4 text-4xl text-gray-600">{title}</h1>
);
