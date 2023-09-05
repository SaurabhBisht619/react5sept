import React, { useEffect, useState } from "react";
import Carousel from "../component/feature/Carousel/carousel";
import Header from "../component/Common/Header";
import ViewMyList from "../component/feature/ViewList/ViewMyList";
import FormFill from "../component/feature/Form";
import useLocalState from "../hooks/useLocalState";
import Form from "../component/feature/Form/main";

const images = [
  { url: "/image/1.JPG", key: "img1" },
  { url: "/image/2.JPG", key: "img2" },
  { url: "/image/3.JPG", key: "img3" },
  { url: "/image/4.JPG", key: "img4" },
];
function Main() {
  const [form, setForm] = useLocalState("imageData", images);

  const [editItem, setEditItem] = useState(null);

  const submitData = (data) => {
    setForm((prev) => [...prev, data]);
  };

  const validate = (val) => {
    for (let i of form) {
      if (i.key === val) {
        alert("Key Should be unique");
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      <Header />
      <Carousel images={form} />

      <ViewMyList data={form} setData={setForm} setEditItem={setEditItem} />
      
      <FormFill onSubmit={(e) => submitData(e)} validate={validate} />
      
      <Form form={form} setForm={setForm} editItem={editItem} />
    </div>
  );
}

export default Main;
