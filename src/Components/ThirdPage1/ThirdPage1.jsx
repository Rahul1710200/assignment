import { assets } from "../../assets/Assets";
import './ThirdPage1.css'

function SecondPage() {
  return (
    <div className="w-full h-[140vh] flex    ">
    <div className="left mt-[22vw] ml-[10vw] w-1/2 flex flex-col gap-3">
    <div className="text-3xl text-red-400 uppercase" >Advantages</div>
    <div className="text-[3.5vw] font-extrabold tracking-tighter">Why Choose Uifry?</div>
    <div className="flex  items-center gap-[1vw]">
        <img src={assets.Alarm}></img>
        <div className="text-[2vw] font-bold ">Clever Notifications </div>
    </div>

    <div className="text-[#76828A] w-[32vw] text-[1.3vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi veniam cupiditate doloribus sint inventore minus commodi sequi architecto! Commodi quod pariatur autem, labore eligendi beatae voluptates magni ipsum placeat!</div>

    </div>
      <div className="right1 mt-[10vw] w-1/2 relative  ">
        <div className=" absolute right-[1vw] top-[9vw]  ">
          <img className="w-[4vw] h-[4vw]" src={assets.star}></img>
        </div>
        <div className="  ml-[8vw] ">
        
          <div className="relative  rotate-[15deg] mt-[4vw]  z-10">
            <img className="w-[50vw] h-[52vw] " src={assets.iphone2}></img>
          
           
          <div className="  absolute  top-[5vw] left-[-1vw] z-[-1] rotate-[-10deg]">
            <img className=" w-[32vw] h-[34vw]" src={assets.c1}></img>   
          </div>
          <div className=" phone-wire1  absolute  top-[7vw] left-[-5vw] rotate-[-10deg] z-[-1]">
            <img className=" w-[32vw] h-[34vw]" src={assets.c2}></img>   
          </div>
          <div className="  absolute  top-[11vw] left-[-6vw] rotate-[-10deg] z-[-1]">
            <img className=" w-[32vw] h-[34vw]" src={assets.c3}></img>   
          </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default SecondPage;
