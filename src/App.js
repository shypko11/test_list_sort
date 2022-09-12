import { useEffect, useState } from "react";
import Row from "./components/row/row";

const getList = () => {
  return [
    {
      id: 1,
      title: "Good tea",
      price: 10,
      count: 53,
    },
    {
      id: 2,
      title: "Good coffee",
      price: 15,
      count: 31,
    },
  ];
};

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const res = getList(); // imitation api call
    setList(res);
  }, []);

  const handleSort = (e) => {
    debugger;
    const val = e.target.value;
    const res = list.sort((a, b) => a?.[val] - b?.[val]);
    setList([...res]);
  };
  return (
    <div className="App">
      <select name="select" onChange={handleSort}>
        <option value="value1" defaultValue>
          sort by
        </option>
        <option value="price">price</option>
        <option value="count">count</option>
      </select>
      <ul>
        <li style={{ listStyle: "none" }}>
          <Row name={"name"} price={"price"} count={"count"} />
        </li>
        {list?.map((el) => {
          return (
            <li style={{ listStyle: "none" }} key={el.id}>
              <Row name={el.title} price={el.price} count={el.count} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;


// const Twitter = (props) => {
//   return (
//     <>
//       <p>{props.username}</p>
//       <div>{props.children}</div>
//     </>
//   );
// };

// <Twitter username="tylermcginnis33">
//   {(user) => (user === null ? <Loading /> : <Badge info={user} />)}
// </Twitter>;
