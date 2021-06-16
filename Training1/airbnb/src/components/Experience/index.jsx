import React from "react";
import News from "./News";
import news from "./fakeData";
import './index.css'

const Experience = () => {
  return (
    <div className="experience">
      <h1>Khám phá Trải nghiệm</h1>
      <p>
        Các hoạt động độc đáo với các chuyên gia địa phương – tham gia trực tiếp
        hoặc trực tuyến.
      </p>
      <div>
        {news.map((experience) => (
          <News item={experience}/>
        ))}
      </div>
    </div>
  );
};

export default Experience