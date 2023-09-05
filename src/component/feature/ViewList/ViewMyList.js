import React from "react";
import "./viewList.css";
function ViewMyList({ data, setData }) {
  function removeData(index) {
    data.splice(index, 1);
    setData([...data]);
  }

  return (
    <div className="viewList">
      <div className="footer">
        <div className="heading">
          <h2 className="headLine headLineUrl">URL</h2>
          <h2 className="headLine headLineKey">Unique Key</h2>
          <h2 className="headLine headLineRemove">Remove</h2>
        </div>
      </div>

      {data.map((val, index) => {
        return (
          <>
            <div className="field">
              <h3 className="headLine1">{val.url}</h3>
              <h3 className="headingKey">{val.key}</h3>
              <button className="inpBtn" onClick={() => removeData(index)}>
                <i class="fa-sharp delete fa-solid fa-trash"></i>
              </button>
            </div>
            <div className="borderBottom"></div>
          </>
        );
      })}
    </div>
  );
}

export default ViewMyList;
