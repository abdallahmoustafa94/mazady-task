import { useState } from "react";
import Card from "../common/Card";
import Tab from "../common/Tab";
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";

const Products = () => {
  const [activeTab, setActiveTab] = useState("Products");

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  const tabs = [
    { title: "Products", key: "1" },
    { title: "Articles", key: "2" },
    { title: "Reviews", key: "3" },
  ];

  const products = [
    {
      id: 1,
      image: "/assets/images/product1.svg",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      price: "1000",
      sale: false,
      lots: ["2 Days", "10 Hours", "50 Minutes"],
    },
    {
      id: 2,
      image: "/assets/images/product2.svg",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      price: "1000",
      sale: false,
      lots: ["2 Days", "10 Hours", "50 Minutes"],
    },
    {
      id: 3,
      image: "/assets/images/product3.svg",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      price: "1000",
      sale: true,
      lots: ["2 Days", "10 Hours", "50 Minutes"],
    },
    {
      id: 4,
      image: "/assets/images/product4.svg",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      price: "1000",
      sale: false,
      lots: ["2 Days", "10 Hours", "50 Minutes"],
    },
  ];

  return (
    <Card>
      <div className="lg:flex items-center justify-between">
        <div className="flex items-center justify-between">
          {tabs.map((tab) => (
            <Tab
              key={tab.key}
              title={tab.title}
              className={"mr-2"}
              onClick={() => handleTabClick(tab.title)}
              activeTab={activeTab}
            />
          ))}
        </div>
        <Button
          className="hidden lg:flex"
          title="Add Review"
          icon="/assets/icons/add.svg"
        />
      </div>
      <div className="flex items-center my-6">
        <h2 className="text-2xl font-bold mr-1">Products</h2>
        <span className="text-xs text-[#828282]">(12)</span>
      </div>
      <ProductCard products={products} />
    </Card>
  );
};

export default Products;
