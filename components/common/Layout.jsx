import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#F6F4F5]">
      <Header />
      {children}
    </div>
  );
};
export default Layout;
