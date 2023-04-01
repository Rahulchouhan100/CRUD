import { useState } from "react";
import "./main.css";
const Main = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("please fill the data");
    } else {
      setData([...data, name]);
      setName("");
    }
  };

  // remove item
  const removeItem = (id) => {
    const delItems = data.filter((elm, ind) => {
      return ind !== id;
    });
    setData(delItems);
  };

  // edit items

  return (
    <>
      <div className="container">
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Add
          </button>
        </form>
        <div className="user-details">
          {data?.map((datas, ind) => {
            return (
              // never use key as a index
              <div className="input-container" key={ind}>
                <div>
                  <span>{datas}</span>
                </div>
                <div>
                  <button>Edit</button>
                  <button onClick={() => removeItem(ind)}>delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
