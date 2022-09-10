export const ContactUs = () => {

  // INPUT TYPES -- https://www.w3schools.com/html/html_form_input_types.asp

  const inputs = [
    {
      label: "First Name",
      name: "first_name",
      type: "text",
      classes: "s12 m6",
      placeholder: "",
      required: true
    },
    {
      label: "Last Name",
      name: "last_name",
      type: "text",
      classes: "s12 m6",
      placeholder: "",
      required: true
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "",
      required: true
    },
    {
      label: "Phone",
      name: "phone",
      type: "tel",
      placeholder: "",
      required: true
    },
    {
      label: "SUBMIT",
      name: "submit",
      type: "submit",
      classes: "submit"
    },
  ];

  return (inputs)
}