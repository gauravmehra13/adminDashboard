import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, selectData } from './Slicer';


const AddDataForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', website: '' });
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
     // const newId = Math.random().toString(36).substr(2, 9);  use this if you want to generate random id

    // Find the highest id and increment it for the new data
    const highestId = Math.max(...data.map((item) => parseInt(item.id, 10)), 0);
    const newId = (highestId + 1).toString();

    // Combine the form data with the generated ID
    const newData = { ...formData, id: newId };

    // Dispatch the action to add the new data to Redux
    dispatch(addData(newData));

    // Reset the form data
    setFormData({ name: '', email: '', website: '' });
  };

  return (
    <div className="grid-item">
      <h2>Add Data</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <div>
        <label>Website:</label>
        <input type="text" name="website" value={formData.website} onChange={handleInputChange} />
      </div>
      <button onClick={handleSubmit} className='btn btn-warning' style={{position:'relative', right:"800px", padding:"31px", borderRadius:"20px"}}>Add</button>
    </div>
  );
};

export default AddDataForm;

