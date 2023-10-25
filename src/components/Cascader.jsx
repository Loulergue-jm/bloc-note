import React from "react";
import ReactDOM from "react-dom";
import { Cascader } from "antd";
import "antd/dist/antd.css";

const App = () => {
  const options = [
    {
      value: "thp",
      label: "THP",
      children: [
        {
          value: "ruby",
          label: "Ruby",
          children: [
            {
              value: "rails",
              label: "Rails",
            },
          ],
        },
      ],
    },
    {
      value: "javascript",
      label: "JS",
      children: [
        {
          value: "react",
          label: "React",
          children: [
            {
              value: "functional",
              label: "Function Components",
            },
          ],
        },
      ],
    },
  ];

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className="App">
      <p>Hey, this is a cool button, created with AntDesign!</p>
      <Cascader
        options={options}
        onChange={handleChange}
        placeholder="Please select"
      />
    </div>
  );
};
export default App;
