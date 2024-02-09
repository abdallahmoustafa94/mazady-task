const Tab = ({ title, className, onClick, activeTab }) => {
    return (
      <button
        className={`rounded-2xl text-sm border border-[#E0E0E0] px-4 py-1 ${
          onClick ? "cursor-pointer" : ""
        } ${className} ${
          activeTab === title
            ? "bg-lightOrange border-darkOrange text-darkOrange"
            : "text-[#828282]"
        }`}
        onClick={onClick}
      >
        {title}
      </button>
    );
  };
  
  export default Tab;
  