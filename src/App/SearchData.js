import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from './Slicer';

const QueryForm = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.data.query);

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <div className="grid-item">
      <h2>Employee Data</h2>
      <div className='searchlabel'>
        <label>Search : </label> &nbsp;
        <input type="text" value={query} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default QueryForm;
