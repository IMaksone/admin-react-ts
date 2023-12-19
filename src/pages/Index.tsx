import { useState } from "react";

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

  const inputStyle = {
    display: "flex",
    width: "calc(100% - 14px)",

    margin: "5px 0px",
    padding: "7px",
    border: "0px",
    borderRadius: "20px",
    backgroundColor: "#E9EFF7",
  };

  const labelStyle = {
    width: "100%",
    marginBottom: "10px",
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "325px",

        borderRadius: "30px",
        backgroundColor: "white",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",

          width: "70%",
          margin: "10%",
        }}
      >
        <label htmlFor="firstName" style={labelStyle}>
          First Name:
          <input
            required
            style={inputStyle}
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="lastName" style={labelStyle}>
          Last Name:
          <input
            style={inputStyle}
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="phone" style={labelStyle}>
          Phone:
          <input
            required
            style={inputStyle}
            placeholder="+375ххххххххх"
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="email" style={labelStyle}>
          Email:
          <input
            required
            style={inputStyle}
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="gender" style={labelStyle}>
          {" "}
          Gender:
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "5px",

              borderRadius: "10px",
              backgroundColor: "#E9EFF7",
            }}
          >
            <option>Men</option>
            <option>Women</option>
          </select>
        </label>
        <label htmlFor="message" style={labelStyle}>
          Comment:
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            style={{
              width: "calc(100% - 14px)",
              maxWidth: "calc(100% - 14px)",
              padding: "7px",

              backgroundColor: "#E9EFF7",
            }}
          ></textarea>
        </label>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            margin: "5px 0px",
            border: "0px",
            borderRadius: "10px",

            color: "white",
            backgroundColor: "#FF9D70",
            boxShadow: "0px 3px 0px 0px #E47E5A",
          }}
        >
          Отправить
        </button>
      </form>
      {dataError && (
        <div
          style={{
            textAlign: "center",

            margin: "0px 15px 30px 15px",
            color: "red",
          }}
        >
          {dataError}
        </div>
      )}
    </div>
  );
};

export default Index;
