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
      className="max-h-7 max-w-7 my-10 mx-7 transition duration-300 ease-out transform hover:translate-x-4 "
    />
  </a>
);
