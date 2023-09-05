import React,{useState} from 'react';
import AddForm from './AddForm/index';
import ContentForm from './ContentForm/index';
import './mainForm.css'
const Form = ({ form, setForm, editItem }) => {
  const validate = (val) => {
    for (let i of form) {
      if (i.key === val) {
        alert("Key Should be unique");
        return false;
      }
    }
    return true;
  };

  // add form
  const submitData = (data) => {
    setForm((prev) => [...prev, data]);
  };

  // content
  const handleContentUpdate = (data) => {
    console.log("fda");
  };

  const [isLoginPage, setIsLoginPage] = useState(false);

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div>
    <div className="toggleBtn">
        <button className="btn1 btnForm" onClick={togglePage}>Form</button>
        <button className="btn1 btnContent" onClick={togglePage}>Content</button>
      </div>
      
      {isLoginPage ? <AddForm validate={validate} submitData={submitData} /> : <ContentForm
      handleContentUpdate={handleContentUpdate}
      options={form.map((item) => ({
        label: item.keyName,
        value: item.key,
      }))}
      selectedItem={editItem}
    />}

      
      
    </div>
  );
};

export default Form;
