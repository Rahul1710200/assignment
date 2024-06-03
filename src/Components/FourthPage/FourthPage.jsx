import { assets } from "../../assets/Assets"


function FourthPage() {
  return (
    <div className="w-full h-[27vw]" >
    <div className=" ml-[11vw] flex gap-[5vw]">
    <div className=" first flex flex-col gap-5">
        <div>    
            <div className=" mt-3">
                <img className="w-[8vw] h-[2.5vw]" src={assets.Group}></img>
            </div>
        </div>
        <div className="flex gap-3 ml-2 ">
        <img className="w-[1.3vw] h-[1.3vw]" src={assets.Email}></img>
        <div className="text-2xl font-semibold">Help@Frybix.com</div>

        </div>
        <div className="flex gap-3 ml-2 ">
            <img className="w-[1.3vw] h-[1.3vw]"  src={assets.Phone}></img>
            <div  className="text-2xl font-semibold">+123456789</div>
        </div>
    </div>
    <div className="second">
        <div className="font-semibold text-[2.5vw] mb-4">Links</div>
        <ul className="text-xl font-semibold flex flex-col gap-5">
            <li>Home</li>
            <li>About Us</li>
            <li>Bookings</li>
            <li>Blog</li>
        </ul>
    </div>
    <div className="third">
        <div className="font-semibold text-[2.5vw] mb-4">Legal</div>
        <ul className="text-xl font-semibold flex flex-col gap-5">
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
        </ul>
    </div>
    <div className="fourth">
        <div className="font-semibold text-[2.5vw] mb-4">Product</div>
        <ul className="text-xl font-semibold flex flex-col gap-5">
            <li>Take Tour</li>
            <li>Live Chat</li>
            <li>Reviews</li>
        </ul>
    </div>
    <div className="fifth">
        <div className="font-semibold text-[2.5vw] mb-4">Newsletter</div>
        <ul className="text-xl font-semibold flex flex-col gap-5">
            <li>Stay Up To Date </li>
            <li></li>
            <li className="text-[#76828A] mt-4 opacity-[0.5]">Your email</li>
        </ul>
    </div>
    <div className=" mt-[6vw] w-[8vw] h-[3.5vw]   text-white flex justify-center text-[1.3vw] ">
        <button className="bg-black px-[3vw] rounded-lg "> Subscribe</button>
    </div>

    </div>

    <div className="w-[80vw] h-[0.1vw] bg-black mt-[4vw] ml-[8vw]"></div>
    <div className="text-xl font-semibold ml-[40vw] mt-[2vw]"> Copyright2022Uifry.Com All Rights Reserved</div>

   

    
    
    
    


    </div>
  )
}

export default FourthPage
