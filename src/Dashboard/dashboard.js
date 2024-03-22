import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Header from '../Header/header';
import './dashboard.css';
import Performance from './Performance';
import Mettings from '../Mettings';

function Dashboard({ emp_id }) {
  const [details, setDetails] = useState({});
  
  useEffect(() => {
    axios.get(`/api/employee/${emp_id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [emp_id]);

  return (
    <>
    <Helmet/>
    <div className="container-fluid">
      <Header />
      <div className="scrollable-content">
      <div className='row'>
      <div className="details">
        <h2>Personal Details</h2>
            <p>Emp_id: {details.emp_id}</p>
            <p>Emp_name: {details.emp_name}</p>
            <p>Date_of_Birth: {details.date_of_birth}</p>
            <p>Gender: {details.gender}</p>
            <p>Nationality: {details.nationality}</p>
            <p>Phone Number: {details.phone_number}</p>
            <p>Email: {details.email}</p>
            <p>Address: {details.address}</p>
            <p>Emergency Number: {details.emergency_number}</p>
            <p>Father's Name: {details.father_name}</p>
            <p>Technical Skills: {details.skills && details.skills.join(', ')}</p>
            <p>Dept_id: {details.department_id}</p>
            <p>Leave_Type_id: {details.leave_type_id}</p>
            <p>Previous Company name: {details.company_name}</p>
            <p>Project Rating: {details.project_rating}</p>
            <p>Current Role: {details.current_Role}</p>
            <p>Current Position: {details.current_Position}</p>
          </div>
          <div className='Performancetable'>
            <h2>Performance Chart</h2>
            <Performance/>
          </div>
          </div>
          <div className='row'>
          <div className='employment_history'>
            <h2>Employment History</h2>
            <p>Emp_id: {details.emp_id}</p>
            <p>Previous_role: {details.previous_role}</p>
            <p>previous_position: {details.previous_position}</p>
            <p>Previous Company name: {details.company_name}</p>
            <p>joining date: {details.starting_date}</p>
            <p>End date: {details.ending_date}</p>
            <p>Previous project rating: {details.previous_project_rating}</p>
            <p>Over All Experience: {details.Over_All_Experience}</p>
          </div>
          <div className='calender'>
          <Mettings/>
          </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default Dashboard;
