import React from "react";



const Reset = (props) => {
    const handleReset = (ev) => {
        props.reset(ev);
      };
  return (
    <>
      <div className="btnContainer">
      <button type="button" onClick={handleReset} className="resetButton ">
        <i class="fas fa-trash-restore-alt"></i>
      </button>
       <p className="btnText">Reset Filtros
       </p>
      </div>
      
    </>
  );
};
export default Reset;