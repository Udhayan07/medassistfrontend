import React, { useState } from 'react';
import './AppontMain.css';

function AppointMain() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    doctor: '',
    doctorid:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, formData]);
    setFormData({
      name: '',
      date: '',
      time: '',
      doctor: '',
      doctorid:''
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Doctor Appointment</h1>
      </header>
      <main>
        <section className="appointment-form">
          <h2>Book an Appointment</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </label>
            <label>
              Date:
              <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
            </label>
            <label>
              Time:
              <input type="time" name="time" value={formData.time} onChange={handleInputChange} required />
            </label>
            <label>
              Doctor:
              <input type="text" name="doctor" value={formData.doctor} onChange={handleInputChange} required />
            </label>
            <label>
              Doctor ID:
              <input type="text" name="doctorid" value={formData.doctorid} onChange={handleInputChange} required />
            </label>
            <button type="submit">Book Appointment</button>
          </form>
        </section>
        <section className="appointment-list">
          <h2>Upcoming Appointments</h2>
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>
                {appointment.name} has an appointment with Dr. {appointment.doctor} on {appointment.date} at {appointment.time}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default AppointMain;
