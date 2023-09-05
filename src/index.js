import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Low Priority
// ts
// Folder
// CSS

// Medium Pri
// Components
//  -- Feature -> Carousal -> ,on hover description  
           
// Priority
//Forms->add,content => description
//ViewList -> description (sync with form on click)
// -- Common -> Portal(Modal), ImageRender,
// FormComponent -> Input, textArea, select (label, value ,onChange, error),  ==> 
// hook -> localStorage , useForm ==> 
// Pages -> main

// const image = [     // Contact
//   {
//     url: "/assets/",
//     key: "21321",
//     keyName: "image one",
//     description: "",
//   },
// ];

// const useForm = (intialValue,rules) => {
//   const [state, setState] = useState({
//     url: "urs/1",
//     key: "",
//     keyName: "",
//   });

//   const [error, setError] = useState({
//     url: "",
//     key: "",
//     keyName: "",
//   });

//   const handleChange = () => {

//   };

//   const handleSubmit = ()=>{

//     // requried fields all filed

//     setError({

//     })

//     // max


//     // min



   


//     return state
//   }

//   // error, onFOcus, onBLur

//   return [state, handleChange, error];
// };
