import React from "react";
//頁面內容
const About = () => {
  return (
    <div className="about-wrap">
      <p className="skill">技術說明</p>
      <p>
        網站使用React 進行開發，使用 Router、Hook等觀念，並且使用Fetch API
        非同步查找資料
      </p>
      <p>使用API:Pexels</p>
      <p>教學資源：來自udemy</p>
    </div>
  );
};

export default About;
