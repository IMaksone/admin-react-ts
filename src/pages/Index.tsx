import { useState } from "react";
import '../styles/form.css'

  const data = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "", 
  gender: "",
  message: "",
};

export const Index = () => {
  const [formData, setFormData] = useState(data);
  const [dataError, setDataError] = useState<string | null>(null);

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });

    switch (id) {
      case "firstName":
      case "lastName":
        if (value.length < 2) {
          setDataError("Длина должна быть более 2 символов.");
        } else {
          setDataError(null);
        }
        break;
      case "phone":
        if (value[0] !== "+") {
          setDataError('Номер телефона должен начинаться со знака "+".');
        } else if (value.length !== 13) {
          setDataError("Номер должен состоять из 12 цифр.");
        } else {
          setDataError(null);
        }
        break;
      case "email":
        if (!value.includes("@")) {
          setDataError('Emeil должен содержать символ "@"');
        } else {
          setDataError(null);
        }
        break;
      default:
        setDataError(null);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Name: ${formData.firstName}${formData.lastName},
     Email: ${formData.email}, Phone: ${formData.phone},
     Gender: ${formData.gender}, Message: ${formData.message}`);
  };

  document.body.style.backgroundColor = "#FF9D70";

  return (
    <div className="div-wrapper">
      <form className="form"
        onSubmit={handleSubmit}>
        <label className='form-label' htmlFor="firstName">
          First Name:
          <input className="form-input"
            required
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </label>
        <label className='form-label' htmlFor="lastName">
          Last Name:
          <input className="form-input"
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </label>
        <label className='form-label' htmlFor="phone">
          Phone:
          <input className="form-input"
            required
            placeholder="+375ххххххххх"
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          ></input>
        </label>
        <label className='form-label' htmlFor="email">
          Email:
          <input className="form-input"
            required
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </label>
        <label className='form-label' htmlFor="gender">
          {" "}
          Gender:
          <select className="form-select"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option>Men</option>
            <option>Women</option>
          </select>
        </label>
        <label className='form-label' htmlFor="message">
          Comment:
          <textarea className="form-area"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button className="form-btn"
          type="submit"
        >
          Отправить
        </button>
      </form>
      {dataError && (
        <div className="form-error">
          {dataError}
        </div>
      )}
    </div>
  );
};

export default Index;
