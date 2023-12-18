import {useState} from 'react';

export const Index = () => {
  const data = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    gender: '',
    message: ''
  };

  const [formData, setFormData] = useState(data);
  const [dataError, setDataError] : any = useState(null);

  const handleChange = (event : any) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });

    switch (id) {
      case 'firstName':
      case 'lastName' : 
        if (value.length < 2) {
          setDataError('Длина должна быть более 2 символов.');
        } else { setDataError(null) }
        break;
      case 'phone' :
        if (value[0] !== '+') {
          setDataError('Номер телефона должен начинаться со знака "+".');
        }
        else if (value.length !== 13) {
          setDataError('Номер должен состоять из 12 цифр.');
        } else { setDataError(null) }
        break;
      case 'email' : 
        if (!value.includes('@')) {
          setDataError('Emeil должен содержать символ "@"');
        } else { setDataError(null) }
        break;
      default : setDataError(null);
    }
  } 

  const handleSubmit = (event : any) => {
    event.preventDefault();
    alert(`Name: ${formData.firstName}${formData.lastName},
     Email: ${formData.email}, Phone: ${formData.phone},
     Gender: ${formData.gender}, Message: ${formData.message}`
    );
};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName'>First Name:
        <input type='text' id='firstName' value={formData.firstName} onChange={handleChange}></input>
      </label>
      <label htmlFor='lastName'>Last Name:
        <input type='text' id='lastName' value={formData.lastName} onChange={handleChange}></input>
      </label>
      <label htmlFor='phone'>Phone:
        <input placeholder="+375ххххххххх" type='tel' id='phone' value={formData.phone} onChange={handleChange}></input>
      </label>
      <label htmlFor='email'>Email:
        <input type='email' id='email' value={formData.email} onChange={handleChange}></input>
      </label>
      <label htmlFor='gender'>
        <select id='gender' value={formData.gender} onChange={handleChange}>
          <option>gender</option>
          <option>Men</option>
          <option >Women</option>
        </select>
      </label>
      <label htmlFor='message'>
        <textarea id='message' value={formData.message} onChange={handleChange}></textarea>
      </label>
      {dataError && <div style={{ color: 'red' }}>{dataError}</div>}
      <button type='submit'>Send form</button>
    </form>
  )
};

export default Index;