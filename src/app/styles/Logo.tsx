import "./Logo.css";

export default function Logo() {
  return (
   <div onClick={() => window.location.reload()} style={{ cursor: "pointer" }} className='unselectable h-full sm:w-[160px]  font-NeueMachina shiny-logo relative font-semibold overflow-hidden text-main-col text-2xl flex items-center justify-between'> 
     ASHMIT DEV
   
    </div>

  );
}