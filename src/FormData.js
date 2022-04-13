import React from "react";

const FormData = (props) => {
  // console.log(props);
  return (
    <div>
      <div>
        {props.details.map((elem) => {
          return (
            <div id="inner_container">
              <h1>Form Data</h1> <br />
              <h2>
                {" "}
                {elem.name} , {elem.age} ,{elem.salary}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormData;
