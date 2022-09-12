import style from "./row.module.css";

const Row = ({ name, price, count }) => {
  return (
    <div>
      <span className={style.cell}>{name}</span>
      <span className={style.cell}>{price}</span>
      <span className={style.cell}>{count}</span>
    </div>
  );
};

export default Row;
