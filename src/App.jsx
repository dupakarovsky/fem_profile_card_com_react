import { useState } from "react";
import "./css/App.css";

const messages = ["Learn react ✅", "Apply for jobs 📖 ", "Profit 🏂"];

function App() {
   const [steps, setSteps] = useState(0);
   const [isOpen, setIsOpen] = useState(true);

   const handlePrevious = () => {
      if (steps > 0)
         setSteps((currSteps) => {
            return currSteps - 1;
         });
   };

   const handleNext = () => {
      if (steps < messages.length - 1)
         setSteps((currSteps) => {
            return currSteps + 1;
         });
   };

   return (
      <>
         <button className="close" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "⮿" : "👁"}
         </button>

         {isOpen && (
            <div className={"steps"}>
               <div className="numbers">
                  <span className={steps >= 0 ? "active" : ""}>1</span>
                  <span className={steps >= 1 ? "active" : ""}>2</span>
                  <span className={steps >= 2 ? "active" : ""}>3</span>
               </div>

               <div className="message">
                  Step: {steps + 1} - {messages[steps]}
               </div>

               <div className="buttons">
                  <button className="btn" onClick={handlePrevious}>
                     previous
                  </button>
                  <button className="btn" onClick={handleNext}>
                     next
                  </button>
               </div>
            </div>
         )}
      </>
   );
}
export default App;
