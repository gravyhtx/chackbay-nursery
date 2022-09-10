import { useState } from "react"

const Form = ({ formObj, classes, submitFn }) => {

  const [userFormData, setUserFormData] = useState({});
  const [errorClass, setErrors] = useState({});
  const [submitCheck, setSubmitCheck] = useState(false);
  
  const handleInputChange = (event, rq) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    if(rq && submitCheck && event.target.value === "") {
      setErrors({ ...errorClass, [name]: true })
    }
    setSubmitCheck(false);
  }

  const handleSubmit = () => {
    if(errorClass && userFormData) {
      setSubmitCheck(true);
    } else {
      submitFn;
    }
  }
  
  const FormInput = (label, type, name, classes, placeholder, required) => {
    if(type === "submit") {
      return (
        <button
          label={label}
          type={type ? type : "submit"}
          className={"form-submit col " + (classes ? classes : "s12 submit")}
          onClick={handleSubmit()} />
      )
    } else {
      return (
        <input
          label={label}
          name={name}
          type={type ? type : "text"}
          className={"form-input col "
            + (classes ? classes : "s12")
            + (errorClass.name ? " error" : "")}
          placeholder={placeholder ? placeholder : ""}
          required={required ? required : false}
          onChange={(e) => handleInputChange(e, required)} />
      )
    }
  }

  return (
    <div className={"site-form" + (classes ? " "+classes : "")}>
      {...formObj.map((input, index) => {
        return (
          <FormInput index={index}
            label={input.label}
            name={input.name}
            type={input.type}
            classes={input.classes}
            placeholder={input.placeholder}
            required={input.required} />
        )
      })}
      {}
    </div>
  )
}

export default Form;