import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex justify-between items-center">
          {/* Toggle button for small screens */}
          <button className="lg:hidden" onClick={toggleMenu}>
            <Image src="/assets/icons/menu.svg" width={24} height={24} />
          </button>

          <div className={`flex  items-center`}>
            <img src="/assets/images/logo.svg" className="mr-6" alt="" />
            <div
              className={`${isMenuOpen ? "flex" : "hidden"} hidden lg:flex
              `}
            >
              <a href="" className="px-6 text-gray">
                Home
              </a>
              <a href="" className="px-6 text-gray">
                Blog
              </a>
              <a href="" className="px-6 text-gray">
                Gifts
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="lg:px-6 border-hidden lg:border-solid lg:border-1 border-r border-r-[#ffead2]">
            <Image src="/assets/icons/search.svg" width={24} height={24} />
          </div>
          <div className="px-6 border-hidden lg:border-solid lg:border-1 border-r border-r-[#ffead2]">
            <Image
              src="/assets/icons/notification.svg"
              width={24}
              height={24}
            />
          </div>
          <div className="lg:pl-6 pr-2 flex justify-between items-center border-hidden lg:border-solid lg:border-1 border-r border-r-[#E0E0E0]">
            <Image
              src="/assets/images/profile-pic.svg"
              width={24}
              height={24}
            />
            <Button
              title="Add New Product"
              className="mx-6 hidden lg:flex"
              icon="/assets/icons/add.svg"
            />
            <Image
              src="/assets/icons/locale.svg"
              width={24}
              height={24}
              className="hidden lg:flex"
            />
          </div>
          <p className="pl-2 text-bold hidden lg:flex">EN</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
