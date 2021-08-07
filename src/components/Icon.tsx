import { VFC } from "react";

type Props = {
  link: string;
  name: string;
  imageName: string;
};

export const Icon: VFC<Props> = ({ link, name, imageName }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <img
      src={imageName}
      alt={name}
      className="max-h-5 max-w-5 m-8 transition duration-300 ease-out transform hover:translate-x-2 "
    />
  </a>
);
