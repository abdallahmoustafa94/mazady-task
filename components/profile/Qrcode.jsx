import Image from "next/image"
import Card from "../common/Card"

const Qrcode = ()=>{

    const icons = [{
        id : 1,
        src : "/assets/icons/view.svg"
    },
    {
        id:2,
        src:"/assets/icons/share.svg"
    },
    {
        id: 3,
        src:"/assets/icons/download.svg"
    }
]
    return(
        <Card className="my-4">
            <div className="flex items-center justify-between">
            <h2 className=" text-lg w-[70%]">QR Code</h2>
            <div className="flex items-center justify-between w-[30%]">
                {icons?.map(icon => (
                <Image src={icon.src} key={icon.id} width={24} height={24} />
                ))}
          
            </div>
            </div>
                        <div className="bg-lightOrange py-4 pl-4 pr-4 rounded-2xl my-4 flex items-center ">
                            <Image src="/assets/icons/download-orange.svg"  width={24} height={24}/>
                            <p className="text-xs ml-2">Download the QR code or share it with your friends.</p>
                        </div>
            <div className="flex items-center justify-center ">
                <div className=" rounded-2xl bg-gradient-to-r from-[#D20653] to-[#FF951D]  w-[100%] my-4 p-4">
                    <div className="bg-card w-full flex flex-col items-center justify-center back">
                        <div className="py-4">
                            <Image src="/assets/images/logo.svg" height={48} width={152} />
                            <h2 className="text-center pt-3 font-normal text-2xl">Hala Ahmed</h2>
                            <Image src="/assets/icons/qr-icon.svg" width={135} height={135} className="block mx-auto"/>
                            <p className="text-xs text-center">Follow Us on Mazaady</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default Qrcode