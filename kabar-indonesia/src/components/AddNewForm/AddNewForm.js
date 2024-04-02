import React, { useState } from "react";
import "./AddNewForm.css";

const AddNewForm = ({ onAddNew }) => {
  const [formData, setFormData] = useState({
    title: "",
    created_at: "",
    description: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNew(formData);
  };

  return (
    <div className="containerMovie">
      <section className="form">
       
          <h1 class="form-title">Add News</h1>
          <form onSubmit={handleSubmit}>
            <div class="form-inputgroup">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div class="form-inputgroup">
              <label htmlFor="created_at" className="form-label">
                created_at
              </label>
              <input
                type="date"
                name="created_at"
                id="created_at"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div class="form-inputgroup">
              <label htmlFor="thumbnail" className="form-label">
                Image
              </label>
              <input
                type="text"
                name="thumbnail"
                id="thumbnail"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div class="form-inputgroup">
              <label htmlFor="description" className="form-label">
                Deskription
              </label>
              <textarea
                type="text"
                name="description"
                id="description"
                className="for"
                onChange={handleChange}
              />
            </div>
            
            <button className="form-button">Submit</button>
          </form>
      
      </section>
    </div>
  );
};

export default AddNewForm;
