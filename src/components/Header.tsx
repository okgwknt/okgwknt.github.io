import { HeaderTab } from "./HeaderTab";

export const Header = ({}) => (
  <>
    <div className="fixed bg-white w-full flex justify-end ">
      <HeaderTab title="Home" link="./"></HeaderTab>
      <HeaderTab title="Profile" link="./profile"></HeaderTab>
      <HeaderTab title="Product" link="./product"></HeaderTab>
    </div>
  </>
);
