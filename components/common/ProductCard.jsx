import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
const ProductCard = ({ products }) => {
  const isSmallScreen = useMediaQuery("(max-width: 639px)");

  return (
    <div>
      {products.map((item) => (
        <div className="flex  my-8">
          <div
            className={`relative ${
              isSmallScreen ? "w-[87px] h-[72.2px] : h-[127px]" : "w-[145px]"
            }`}
          >
            <Image
              src={item.image}
              width={isSmallScreen ? 87 : 145}
              height={isSmallScreen ? 72.2 : 127}
              className="rounded-lg "
            />
            <div
              className={`absolute bottom-0 right-[1px] ${
                item.sale
                  ? "bg-darkOrange py-0 lg:py-3 px-3 lg:px-8"
                  : "bg-red py-0 px-2 lg:py-3 lg:px-6"
              } text-white rounded-tl-[15px] lg:rounded-tl-[33.8px] rounded-br-[15px]  lg:rounded-br-[33.8px] text-xs font-light`}
            >
              <span className="text-[8px] lg:text-[12px]">
                {item.sale ? "hot sale" : "Live auction"}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between ml-2 mt-1">
            <h4 className="text-xs lg:text-md font-light">{item.title}</h4>
            <p className="text-[#828282] text-xs lg:text-sm font-light">
              Starting Price
              <span className="text-xs lg:text-lg lg:font-bold text-[#333333] ml-1">
                {item.price + "EGP"}
              </span>
            </p>
            <div className="lg:flex  items-center">
              <p className="text-[#828282] text-xs lg:text-sm font-light">
                Lot starts in
              </p>
              <div className="flex">
                {item.lots.map((item) => (
                  <div className="px-2 lg:px-6 py-1 bg-lightOrange lg:ml-4 rounded-xl mr-2 lg:mr-0">
                    <p className="text-darkOrange text-xs lg:text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCard;
