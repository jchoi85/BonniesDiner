import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppRouter } from "./appRouter";
//import "./css/vendor-styles";
import "./css/animate.min.css";
import "./css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <AppRouter />,
    document.getElementById("root")
);
