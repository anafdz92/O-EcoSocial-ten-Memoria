import React from "react";



const Reset = (props) => {
    const handleReset = (ev) => {
        props.reset(ev);
      };
  return (
    <>
    <button type="button" onClick={handleReset} className="resetButton">
       
        <i class="fas fa-trash-restore-alt"></i>
      </button>
      
    </>
  );
};
export default Reset;