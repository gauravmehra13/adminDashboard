import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import AddDataForm from '../App/AddDataForm';
import QueryForm from '../App/SearchData';
import FetchData from '../App/FetchData';
import { selectData } from '../App/Slicer';



const DataGridComponent = () => {
  const data = useSelector(selectData);
  const query = useSelector((state) => state.data.query);
  const filteredData = data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'website', headerName: 'Website', width: 200 },
  ];

  return (
    <div className="data-grid-container">
      {/* <AddDataForm /> */}
      <QueryForm />
      <FetchData />
      <DataGrid className='table'
        rows={filteredData}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default DataGridComponent;
