import { assets } from "../../assets/Assets";
import './FirstPage.css'


function FirstPage() {
  return (
    <div className="main w-full h-screen pt-[2vw]  ">
      <nav className=" h-[5vw] flex justify-between items-center pl-[4vw]   ">
        <div className="flex gap-[5vw] ml-[5vw]">
          <div className="left1">
            <img className="w-[7vw] h-[2.5vw]" src={assets.Group}></img>
          </div>
          <div className="left2 mt-1 ">
            <ul className="flex gap-8 font-semibold text-3xl">
              <li className="text-[#ff5555] font-bold">Home</li>
              <li>About Us</li>
              <li> Pricing</li>
              <li>Features</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-[2vw] pr-[5vw]">
          <div className="right  pr-[4vw] h-fit ">
            <div className="mt-3 bg-black text-white px-[2.6vw] py-[0.9vw] rounded-md ">
              <button className="text-2xl">Download</button>
            </div>
          </div>
          <div className="mt-5 ">
            <img className="w-[4vw] h-[4vw] " src={assets.star}></img>
          </div>
        </div>
      </nav>

      <div className="second ml-[2.5vw] ">
        <img src={assets.star} className="rotate-180"></img>
      </div>
      <div className="lower flex   ">
      <div className=" lower-left p-[2.5vw] pl-[11vw] w-1/2  mt-[2vw] mr-[3vw] ">
        <div className=" low text-[5vw]  w-[45vw] tracking-tighter leading-[4.9vw] font-extrabold ">Make
        <span className="sp1 h-full">The Best</span>
        <div className="bg-custom">
        {/* <img src={assets.Ellipse2}></img> */}
        <div>Finan<span className="sp1">cial Decisons</span></div>

        </div>
        
      
        </div>
        <div className=" mt-[1.3vw] tracking-tighter  text-[1.2vw] opacity-100 text-[#7f7c72]">
        <div>Cum Et Convallis Risus placerat  Aliquam,Nunc,Scelerisque Aliquet</div>
        <div>Faucibus Tincident Eu Adipiscing  Sociis Arcu Lorem Portitor</div>
        </div>

       
        <div className="flex items-center gap-[4vw]">
          <button className="bg-black px-8 py-5 flex items-center gap-4 rounded-md mt-7">
            <div className="text-white text-2xl">Get Started</div>
            <img className="w-[3vw] h-[0.6vw]" src={assets.vector}></img>
          </button>
          <div className="flex  gap-4 items-center mt-6 "> 
          <img className="w-[2vw] h-[2vw]" src={assets.video}></img>
         
          <div className="text-2xl font-semibold">Watch Video</div>

          </div>
        </div>
        <div>
          <div className="h-[1vw] w-[4vw]">
            <img className="rotate-180 mt-[4vw] ml-[4vw]" src={assets.star}></img>
          </div>
          <div className="mr-[4vw] mb-[6vw] ">
            <img className="w-[35vw] h-[28vw]" src={assets.unique}></img>
          </div>
        </div>
      </div>
      <div className="lower-right w-1/2 h-[90vw]   ">
        <div className=" relative   object-cover ">
        <div className="absolute z-40">
        <img  src={assets.iphone}></img>
        </div>
       
        <div className=" absolute top-[5vw] right-[4vw] object-cover z-30">
          <img src={assets.iphone2}></img>
        </div>
        <div className="absolute top-[9vw] right-[-1vw]  object-cover z-20">
          <img src={assets.iphone}></img>
        </div>
        <div className="mb-[2vw] absolute right-[1vw] top-[2vw] object-cover rotate-180 z-10">
          <img src={assets.wire}></img>
        </div>
        </div>
       
        <div className="mb-[2vw] absolute right-[40vw] top-[35vw] object-cover rotate-150 z-50">
          <img src={assets.star}></img>
        </div>
      </div>

      </div>
    </div>
  );
}

export default FirstPage;
