import React from "react";
import "./Stats.css"

const Stats = () => {
  return (
    // streak 
    <div  className="stats">
      <div className="stats-item">
        <a href="https://github.com/SaurabhBH123">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=SaurabhBH123"
            alt="git-stats"
            id="github-streak-stats"
          />
        </a>
      </div>
 
      <div className="stats-item" 
      >
        <a href="https://github.com/SaurabhBH123">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=SaurabhBH123"
            alt="git-stats"
            id="github-top-langs"  //launguages
          />
        </a>
      </div>
      <div className="stats-item">
      <a href="https://github.com/SaurabhBH123">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=SaurabhBH123" 
            id="github-stats-card" 
            //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;