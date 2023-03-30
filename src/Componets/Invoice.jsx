import React from "react";



function Invoice() {
  
  
  

return (
  <>
      <div className="flex justify-center items-center space-x-20 font-bold bg-slate-200">
         {
          ["#NAME", "Qty", "Price", "Total", "Delete"].map((item) => <span>{item}</span> )
         }
      </div>
      <form className="grid grid-cols-2 gap-5">
        <div className="form-group">
          <label htmlFor="order">Select Transaction Type</label>

          <div className="flex">
            <input
              type="radio"
              value="inward"
              name="myRadio"
              className="mt-2 border bg-slate-100 py-2 px-2 block w-full"
            />
            <label htmlFor="InWard">InWard</label>
            <input
              type="radio"
              value="outward"
              name="myRadio"
              className="mt-2 border bg-slate-100 py-2 px-2 block w-full"
            />
            <label htmlFor="OutWard">OutWard</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="order">Select Order Type</label>
          <select
            type="date"
            className="mt-2 border bg-slate-100 py-2 px-2 block w-full"
          >
            
         {["GEM","SENSEX","BITCOIN","NIFTY"].map((item) => <option>{item}</option>)}
          </select>
        </div>
          <InputApt label={"Order No."} inputType={"text"}/>       
          <InputApt label={"Order Date."} inputType={"date"}/>       
          <InputApt label={"Invoice No."} inputType={"text"}/>       
          <InputApt label={"Invoice Date."} inputType={"date"}/>       
          <InputApt label={"Batch No."} inputType={"text"}/>       
          <InputApt label={"Expiry Date."} inputType={"date"}/>       
        
        <div className="form-group">
          <div className="flex">
            <input
              type="radio"
              name="department"
              value="department"
              className="mt-2 border bg-slate-100 py-2 px-2 block w-full"
            />
            <label htmlFor="Department">Department</label>
            <input
              type="radio"
              name="department"
              value="department"
              className="mt-2 border bg-slate-100 py-2 px-2 block w-full"
            />
            <label htmlFor="Supplier">Supplier</label>
          </div>
          <input
            type="text"
            className="mt-2 border bg-slate-100 py-2 px-2 block w-full"
          />
        </div>
          <InputApt label={"Goods Received Date."} inputType={"date"}/>       
        
       <ButtonApt btnName="Reset" classApt="bg-slate-200 p-2" typeApt="reset"/>
       <ButtonApt btnName="Add" classApt="bg-blue-500 text-white p-2" typeApt="submit" />
      </form>
    </>
  );
}
export default Invoice;

const InputApt = ({label,inputType}) => {
return(

  <div className="form-group">
  <label >{label}</label>
  <input
    type={inputType}
    className="mt-2 border bg-slate-100 py-2 px-2 block w-full"
     
    />
</div>
    )
}
const ButtonApt = ({btnName,classApt,typeApt}) => {
return (
  <button
  type={typeApt}
  className={classApt}
>
  {btnName}
</button>
)
}
