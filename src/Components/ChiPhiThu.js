import { thuItemList } from "../constants";
import InputItem from "./InputItem";

const ChiPhiThu = ({ data }) => {
  const findDataByKey = (key) => {
    const item = data.find((i) => i[key]);
    return item;
  };
  const itemList = thuItemList;
  return (
    <div className="chi-container">
      <p>Thu</p>
      {itemList.map((item, index) => {
        const dataItem = findDataByKey(item.dataKey);
        return (
          <InputItem
            key={index}
            label={item.label}
            data={dataItem}
            amountKey="chiphiphatsinhthu"
            itemList={itemList}
            dataKey={item.dataKey}
          />
        );
      })}
    </div>
  );
};

export default ChiPhiThu;
