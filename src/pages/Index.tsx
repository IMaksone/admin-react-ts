import { useState } from "react";
import styles from '../styles/form.module.css'

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
    <div className={styles.divWrapper}>
      <form className={styles.form}
        onSubmit={handleSubmit}>
        <label className={styles.formLabel} htmlFor="firstName">
          First Name:
          <input className={styles.formInput}
            required
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </label>
        <label className={styles.formLabel} htmlFor="lastName">
          Last Name:
          <input className={styles.formInput}
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </label>
        <label className={styles.formLabel} htmlFor="phone">
          Phone:
          <input className={styles.formInput}
            required
            placeholder="+375ххххххххх"
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          ></input>
        </label>
        <label className={styles.formLabel} htmlFor="email">
          Email:
          <input className={styles.formInput}
            required
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </label>
        <label className={styles.formLabel} htmlFor="gender">
          {" "}
          Gender:
          <select className={styles.formSelect}
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option>Men</option>
            <option>Women</option>
          </select>
        </label>
        <label className={styles.formLabel} htmlFor="message">
          Comment:
          <textarea className={styles.formArea}
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button className={styles.formBtn}
          type="submit"
        >
          Отправить
        </button>
      </form>
      {dataError && (
        <div className={styles.formError}>
          {dataError}
        </div>
      )}
    </div>
  );
};

export default Index;
