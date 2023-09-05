// SignIn.js
import React from "react";
import "./content.css";
function Content() {
    return (
        <form className="formContainer" >
          <div className="topHeader"></div>
          <div class="nameDiv">
            <div class="name">
              Enter the Name <span class="required">*</span>
            </div>
            <div class="inputDiv">
              <input
                type="text"
                name="Name"
                id="name"
                placeholder="Your Answer"
                required
              />
              
            </div>
          </div>
    
          <div class="mobileDiv-m">
            <div class="name names">
              <select name="" id="">
                <option value="">---Please Select ---</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
          </div>

          <div class="nameDiv">
          <div class="name">
            <textarea name="" placeholder="Please write the description..." cols="30" rows="5"></textarea>
          </div>
        </div>
    
          <input class="btn" type="Submit" name="Submit" id="" />
        </form>
      );
}

export default Content;
