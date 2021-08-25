import { VFC } from "react";

type Props = {
  link: string;
  name: string;
  imageName: string;
};

export const Icon: VFC<Props> = ({ link, name, imageName }) => (
  <a href={link} target="_blank" rel="noreferrer noopener">
    <img
      src={imageName}
      alt={name}
      className="max-h-6 max-w-6 my-10 mx-7 opacity-25 transition duration-500 ease-out transform hover:translate-x-3 hover:opacity-100"
    />
  </a>
);
