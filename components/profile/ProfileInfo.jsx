import Image from "next/image";
import Button from "../common/Button";
import IconBadge from "../common/IconBadge";
import Card from "../common/Card";

const profileInfoData = [
  {
    id: 1,
    icon: "/assets/icons/following.svg",
    count: 5,
    countNum: null,
    label: "Following",
  },
  {
    id: 2,
    icon: "/assets/icons/followers.svg",
    count: 20,
    countNum: null,
    label: "followers",
  },
  {
    id: 3,
    icon: "/assets/icons/rate.svg",
    count: 4.2,
    countNum: 15,
    label: "Rate",
  },
];

const ProfileInfo = () => {
  return (
    <Card className="w-[100%]">
      <Image
        src="/assets/images/info-profile-pic.svg"
        width={100}
        height={100}
      />
      <h3 className="font-semibold text-xl leading-10">Hala Ahmed</h3>
      <p className="text-sm text-[#4f4f4f] font-light leading-5 ">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Makeup and Skin Care.
      </p>
      <div className="flex justify-between items-center my-6 w-full">
        {profileInfoData.map((data) => (
          <IconBadge
            key={data.id}
            icon={data.icon}
            count={data.count}
            label={data.label}
            countNum={data.countNum}
          />
        ))}
      </div>
      <Button className="w-full py-3" title="Follow" />
    </Card>
  );
};

export default ProfileInfo;
