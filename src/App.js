import "./App.css";
import ChiPhiThu from "./Components/ChiPhiThu";
import ChiPhiChi from "./Components/ChiPhiChi";
import { data } from "./constants";
import { useEffect, useState } from "react";

function App() {
  const [thuData, setThuData] = useState([]);
  const [chiData, setChiData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaaa");
  };
  useEffect(() => {
    if (data) {
      setThuData(data.chiPhiPhatSinhThuArr);
      setChiData(data.chiPhiPhatSinhChiArr);
    }
  }, []);

  return (
    <div className="App">
      <form>
        <ChiPhiThu data={thuData} setData={setThuData} />
        <ChiPhiChi data={chiData} setData={setChiData} />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

export default App;
