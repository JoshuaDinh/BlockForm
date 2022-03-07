import "./frontend.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormInput from "./components/FormInput";

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<OurComponent {...data} />, div);
  div.classList.remove("boilerplate-update-me");
});

function OurComponent(props) {
  return (
    <div className="boilerplate-frontend">
      <FormInput />
    </div>
  );
}
