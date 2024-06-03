import { assets } from "../../assets/Assets";
import './SecondPage.css'

function SecondPage() {
  return (
    <div className="w-full h-screen flex  ">
      <div className="left mt-[10vw] ">
        <div className=" ml-[5vw] ">
          <img src={assets.star}></img>
        </div>
        <div className="  ml-[8vw]">
        
          <div className="relative rotate-[15deg] z-10">
            <img className="w-[43vw] h-[55vw]" src={assets.iphone}></img>
          </div>
          
          <div className="  absolute  top-[64vw] left-[11vw]">
            <img className=" w-[32vw] h-[34vw]" src={assets.c1}></img>   
          </div>
          <div className=" phone-wire  absolute  top-[65.5vw] left-[9vw]">
            <img className=" w-[32vw] h-[34vw]" src={assets.c2}></img>   
          </div>
          <div className="  absolute  top-[67vw] left-[7vw]">
            <img className=" w-[32vw] h-[34vw]" src={assets.c3}></img>   
          </div>
          
        </div>
      </div>
      <div className="right mt-[20vw]">
        <div>
          <p className="text-red-400 text-3xl uppercase">Features</p>
          <h1 className="text-[4vw] font-bold tracking-tighter"> Uifry Premium</h1>
        </div>
        <div className="">
        <div>
          <div className="flex gap-4 font-bold items-center tracking-tighter mt-[1.5vw]  ">
            <img className="w-[1.5vw] h-[2.5vh]" src={assets.icon}></img>
            <h1 className="text-[1.5vw]"> Budgeting Intervals</h1>
          </div>
          <p className="  w-[38vw] text-[1.2vw] mt-[1vw] text-[#7f7c72]">Cum Et Convallis Risus placerat  Aliquam,Nunc,Scelerisque Aliquet
          Faucibus Tincident Eu Adipiscing  Sociis Arcu Lorem Portitor</p>
        </div>
        <div>
          <div className="flex gap-4 font-bold items-center tracking-tighter mt-[2vw]  ">
            <img className="w-[1.5vw] h-[2.5vh]" src={assets.icon}></img>
            <h1 className="text-[1.5vw]"> Budgeting Intervals</h1>
          </div>
          <p className=" w-[38vw] text-[1.2vw] mt-[0.9vw] text-[#7f7c72]">Cum Et Convallis Risus placerat  Aliquam,Nunc,Scelerisque Aliquet
          Faucibus Tincident Eu Adipiscing  Sociis Arcu Lorem Portitor</p>
        </div>
        <div>
          <div className="flex gap-4 font-bold items-center tracking-tighter mt-[2vw]  ">
            <img className="w-[1.5vw] h-[2.5vh]" src={assets.icon}></img>
            <h1 className="text-[1.5vw]"> Budgeting Intervals</h1>
          </div>
          <p className="  w-[38vw] text-[1.2vw] mt-[0.9vw] text-[#7f7c72]">Cum Et Convallis Risus placerat  Aliquam,Nunc,Scelerisque Aliquet
          Faucibus Tincident Eu Adipiscing  Sociis Arcu Lorem Portitor</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
