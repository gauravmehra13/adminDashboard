import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './Slicer';

const FetchData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        dispatch(setData(users));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return null; 
};

export default FetchData;
