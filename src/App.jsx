import gsap from "gsap";
import {useGSAP} from "@gsap/react"
import { MotionPathPlugin } from "gsap/all";


function App() {

  
  useGSAP(()=> {
    gsap.registerPlugin(MotionPathPlugin) 
    // gsap code here
    gsap.to(".cloud",{
      duration:5,
      ease: "none",
      motionPath:{
        path: ".path",
        align: ".path",
        alignOrigin: [0.5, 0.5]
        
      }
    })
  })

  return (
    <>
      <div class="cloud" style={{ background: "black", width: "100px", height: "100px" }}>
        Cloud
      </div>
      <svg viewBox="0 0 1397 1982" fill="none" preserveAspectRatio='xMidYMax meet'>
        <path className="path" d="M1396 0.5C1214.67 133.833 843.5 428.5 809.5 540.5C775.5 652.5 256.667 1006.5 1.5 1169.5C198.5 1367.83 592.5 1807.9 592.5 1981.5" stroke="red" />

      </svg>

    </>
  )
}

export default App
