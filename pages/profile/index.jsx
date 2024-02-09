import Layout from "@/components/common/Layout";
import Products from "@/components/profile/Products";
import ProfileInfo from "@/components/profile/ProfileInfo";
import Qrcode from "@/components/profile/Qrcode";

const Profile = () => {
  return (
    <Layout>
      <div className="container lg:flex justify-between  text-cente px-4 mx-auto py-10">
        <div className="lg:w-[33%]">
          <ProfileInfo />
          <Qrcode />
        </div>
        <div className="lg:w-[65%]">
          <Products />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
