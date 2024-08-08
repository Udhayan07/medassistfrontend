import React from 'react';
import './PatientProfile.css';
import imag from 'C:\\Users\\91936\\OneDrive\\Desktop\\git\\MedicAide\\src\\assets\\patient.jpg'

const PatientProfile = () => {

  const patient = {
    name: "Edward Hudson",
    age: 32,
    contact: "9900223454",
    email: "edwardhudson@gmail.com",
    address: "1/12A,Kuniyamuthur,Coimbatore-46",
    sex:"Male",
    medicalHistory: [
      "Hypertension",
      "Asthma",
    ],
    drugHistory: [
      "Thyroid Tablets [for 3 years]",
      "Insulin Injection",
      "Amlodepine"
    ]
  };

  return (
    <div className="patient-profile">
      <div className="profile-picture">
        <img src={imag} alt="Profile" width={150} height={150}/>
      </div>
      <div className="profile-details">
        <h2>{patient.name}</h2>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Sex:</strong> {patient.sex}</p>
        <p><strong>Contact:</strong> {patient.contact}</p>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Address:</strong> {patient.address}</p>
        <h3>Medical History</h3>
        <ul>
          {patient.medicalHistory.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
        <h3>Drug History</h3>
        <ul>
          {patient.drugHistory.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientProfile;
