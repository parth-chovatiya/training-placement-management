import * as Yup from "yup";
import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    orgname,
    website,
    hrname,
    hremail,
    hrcontact,
    address1,
    city,
    state,
    zipcode,
    country,
    interviewDate,
    cgpa,
  },
} = checkoutFormModel;

const data = [
  Yup.object().shape({
    [orgname.name]: Yup.string().required(`${orgname.requiredErrorMsg}`),
    [website.name]: Yup.string().required(`${website.requiredErrorMsg}`),
    [hrname.name]: Yup.string().required(`${hrname.requiredErrorMsg}`),
    [hremail.name]: Yup.string()
      .email("Must be a valid email")
      .required(`${hremail.requiredErrorMsg}`),
    [hrcontact.name]: Yup.string().required(`${hrcontact.requiredErrorMsg}`),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: Yup.string().nullable().required(`${city.requiredErrorMsg}`),
    [state.name]: Yup.string().nullable().required(`${state.requiredErrorMsg}`),
    [zipcode.name]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test(
        "len",
        `${zipcode.invalidErrorMsg}`,
        (val) => val && val.length === 6
      ),
    [country.name]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [interviewDate.name]: Yup.string().required(
      `${interviewDate.requiredErrorMsg}`
    ),
    [cgpa.name]: Yup.string().required(`${cgpa.requiredErrorMsg}`),
  }),
];

export default data;
