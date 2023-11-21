import { chiItemList } from "../constants";
import InputItem from "./InputItem";

const ChiPhiChi = ({ data }) => {
  const itemList = chiItemList;
  const findDataByKey = (key) => {
    const item = data.find((i) => i[key]);
    return item;
  };
  return (
    <div className="chi-container">
      <p>Chi</p>
      {itemList.map((item, index) => {
        const dataItem = findDataByKey(item.dataKey);
        return (
          <InputItem
            key={index}
            label={item.label}
            data={dataItem}
            amountKey="chiphiphatsinhchi"
            itemList={itemList}
            dataKey={item.dataKey}
          />
        );
      })}
    </div>
  );
};

export default ChiPhiChi;
