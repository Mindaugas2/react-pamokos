import React, { useState } from 'react';

const ControlledInputs = () => {
  const [student, setStudent] = useState({ firstName: '', lastName: '', birthday: '', city: '', program: '', group: '' });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (student.firstName && student.lastName && student.birthday && student.city && student.program && student.group) {
      const newStudent = { ...student, id: new Date().getTime().toString() };
      setStudents([...students, newStudent]);
      setStudent({ firstName: '', lastName: '', birthday: '', city: '', program: '', group: '' });
    }
  };

  return (
    <>
      <article className='form'>
        <form>
          <div className='form-control'>
            <label htmlFor='firstName'>First name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={student.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='lastName'>Last name: </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={student.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='birthday'>Birthday: </label>
            <input
              type='date'
              id='birthday'
              name='birthday'
              value={student.birthday}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='city'>City: </label>
            <input
              type='text'
              id='city'
              name='city'
              value={student.city}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='program'>Program: </label>
            <input
              type='text'
              id='program'
              name='program'
              value={student.program}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='group'>Group: </label>
            <input
              type='text'
              id='group'
              name='group'
              value={student.group}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            add student
          </button>
        </form>
      </article>

      <article>
        {students.map((student) => {
          const { id, firstName, email, age } = student;

          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
