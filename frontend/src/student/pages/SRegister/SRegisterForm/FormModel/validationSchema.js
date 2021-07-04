import * as Yup from "yup";
import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    fullName,
    studentId,
    enrolementNo,
    aadhaarNo,
    email,
    contact,
    dob,
    gender,
    religion,
    address1,
    city,
    state,
    zipcode,
    country,
    coursetype,
    department,
    passingyear,
    cgpa,
  },
} = checkoutFormModel;

const data = [
  Yup.object().shape({
    [fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
    [studentId.name]: Yup.string().required(`${studentId.requiredErrorMsg}`),
    [enrolementNo.name]: Yup.string().required(
      `${enrolementNo.requiredErrorMsg}`
    ),
    [aadhaarNo.name]: Yup.string()
      .required(`${aadhaarNo.requiredErrorMsg}`)
      .test(
        "len",
        `${aadhaarNo.invalidErrorMsg}`,
        (val) => val && val.length === 12
      ),
    [email.name]: Yup.string()
      .email("Must be a valid email")
      .required(`${email.requiredErrorMsg}`),
    [contact.name]: Yup.string().required(`${contact.requiredErrorMsg}`),
    [dob.name]: Yup.string().required(`${dob.requiredErrorMsg}`),
    [gender.name]: Yup.string()
      .nullable()
      .required(`${gender.requiredErrorMsg}`),
    [religion.name]: Yup.string().required(`${religion.requiredErrorMsg}`),
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
    [coursetype.name]: Yup.string().required(`${coursetype.requiredErrorMsg}`),
    [department.name]: Yup.string().required(`${department.requiredErrorMsg}`),
    [passingyear.name]: Yup.number().required(
      `${passingyear.requiredErrorMsg}`
    ),
    [cgpa.name]: Yup.string().required(`${cgpa.requiredErrorMsg}`),
  }),
];

export default data;
