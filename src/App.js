import "./App.css";

import Invoice from "./Componets/Invoice";
function App() {
  return (
    <>
      <div className="flex flex-col  h-screen  justify-center items-center">
        <div className="w-max">
          <Invoice />
        </div>
      </div>
    </>
  );
}

export default App;
