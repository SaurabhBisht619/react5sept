import React from 'react';
import useForm from '../../../hooks/useForm';
 // Import your custom useForm hook

function MyForm() {
  // Initialize your form with initial values
  const { formState, errors, handleChange, handleSubmit } = useForm(
    {
      name: '',
      email: '',
    },
    (formData) => {
      // Handle form submission here, e.g., send data to the server
      console.log('Form submitted with data:', formData);
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      {/* Add more form fields and error messages as needed */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
