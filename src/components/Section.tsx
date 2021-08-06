import { FC } from "react";

type Props = {
  title: string;
};

export const Section: FC<Props> = ({ title, children }) => (
  <section className="mb-4 text-gray-600">
    <h1 className="mb-2  text-2xl ">{title}</h1>

    <div className="">{children}</div>
  </section>
);
