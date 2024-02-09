import Image from "next/image";

const IconBadge = ({ icon, count, label, countNum }) => {
  return (
    <div className="flex items-center bg-lightOrange py-2 pl-2 pr-4 rounded-2xl">
      <Image src={icon} width={24} height={24} className="lg:mr-2" />
      <div className="flex flex-col text-xs">
        <div className="flex">
          <span className="leading-2 mr-1">{count}</span>
          <span className="text-[#828282]">
            {countNum ? `(${countNum})` : ""}
          </span>
        </div>
        <span className="text-xs text-darkOrange">{label}</span>
      </div>
    </div>
  );
};

export default IconBadge;
