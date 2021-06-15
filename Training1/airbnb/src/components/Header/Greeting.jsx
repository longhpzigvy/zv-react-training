import React from "react";

const Greeting = () => {
  return (
    <div
      className="greeting"
      style={{ fontWeight: "bold", width: "400px", marginLeft: "50px" }}
    >
      <div style={{ display: "flex" }}>
        <p style={{ marginRight: "10px" }}>Airbnb</p>
        <p style={{ background: "black", color: "white" }}>2021</p>
      </div>
      <div>
        <p style={{ fontSize: "40px" }}>Giới thiệu hơn 100 mục nâng cấp</p>
      </div>
      <button
        style={{
          width: "250px",
          height: "30px",
          background: "black",
          color: "white",
          fontWeight: "bold",
          borderRadius:'10px'
        }}
      >
        Tìm hiểu các nội dung nâng cấp mới
      </button>
    </div>
  );
};

export default Greeting;
