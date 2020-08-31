import React from "react";
import { render } from "react-dom";
import ReactDemo from "../../src"; // 引入组件

const App = () => {
    const options = {
        selectOnLineNumbers: true,
        minimap: {
            enabled: false,
		},
    };

    return <ReactDemo options={options} language='java' />;
};
render(<App />, document.getElementById("root"));
