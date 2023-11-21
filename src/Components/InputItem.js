import { useEffect, useState } from "react";

const InputItem = ({ label, data, amountKey, itemList, dataKey }) => {
  console.log(data);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [soChungTu, setSoChungTu] = useState("");

  useEffect(() => {
    setAmount(data?.[amountKey].toString());
    setNote(data?.note || "");
    setSoChungTu(data?.soChungTu || "");
  }, [data, amountKey]);

  useEffect(() => {
    const newData = {};
    itemList.forEach((item) => {
      if (item.dataKey === dataKey) {
        newData[dataKey] = true;
      } else {
        newData[item.dataKey] = false;
      }
      newData[amountKey] = amount;
      newData.note = note;
      newData.soChungTu = soChungTu;
      console.log(newData);
    });
  }, [amount, note, soChungTu]);

  return (
    <div className="input-container">
      <input
        placeholder={label}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Sô chứng từ"
        value={soChungTu}
        onChange={(e) => setSoChungTu(e.target.value)}
      />
      <input
        placeholder="ghi chú"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div>
        <input type="checkbox" />
        <span>Đã thanh toán</span>
      </div>
    </div>
  );
};

export default InputItem;
