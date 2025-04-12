import Image from "next/image";
import { NavigationMenu } from "../ui/navigation-menu";
import { NavBar } from "../NavBar";
import { ModeToggle } from "../ui/ModeToggle";
import { DrawerCart } from "../DrawerCart";

function Header() {
  return (
    <>
      <div className="p-4 w-full flex justify-between">
        <Image
          src="/next.svg"
          className="dark:invert"
          alt="Company Name"
          width={120}
          height={120}
        ></Image>
        <NavBar></NavBar>
        <div className="flex gap-1">
          <ModeToggle></ModeToggle>
          <DrawerCart></DrawerCart>
        </div>
      </div>
    </>
  );
}

export default Header;
