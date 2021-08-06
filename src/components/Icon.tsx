import { VFC } from "react";

import Image from "next/image";

type Props = {
  link: string;
  name: string;
  imageName: string;
};

// fontowesome 導入

export const Icon: VFC<Props> = ({ link, name, imageName }) => (
  // className="transform hover:scale-110 motion-reduce:transform-none"

  <a href={link} target="_blank" rel="noreferrer">
    {/* {name} */}
    <img
      src={imageName}
      alt={name}
      className="max-h-5 max-w-5 m-8 transition duration-300 ease-out transform hover:translate-x-2 "
    />
  </a>
);
