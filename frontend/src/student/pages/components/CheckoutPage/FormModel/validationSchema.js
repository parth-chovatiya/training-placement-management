import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
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
    // firstName,
    // lastName,
    address1,
    city,
    zipcode,
    country,
    tech,
    department,
    passingyear,
    cgpa
  }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
    [studentId.name]: Yup.string().required(`${studentId.requiredErrorMsg}`),
    [enrolementNo.name]: Yup.string().required(`${enrolementNo.requiredErrorMsg}`),
    [aadhaarNo.name]: Yup.string().required(`${aadhaarNo.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [contact.name]: Yup.string().required(`${contact.requiredErrorMsg}`),
    [dob.name]: Yup.string().required(`${dob.requiredErrorMsg}`),
    [gender.name]: Yup.string()
      .nullable()
      .required(`${gender.requiredErrorMsg}`),
    [religion.name]: Yup.string().required(`${religion.requiredErrorMsg}`),
    // [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    // [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMsg}`),
    [zipcode.name]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test(
        'len',
        `${zipcode.invalidErrorMsg}`,
        val => val && val.length === 5
      ),
    [country.name]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    // [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    [tech.name]: Yup.string().required(`${tech.requiredErrorMsg}`),
    [department.name]: Yup.string()
    .required(`${department.requiredErrorMsg}`),
    [passingyear.name]: Yup.string().required(`${passingyear.requiredErrorMsg}`),
    [cgpa.name]: Yup.string().required(`${cgpa.requiredErrorMsg}`),
    // [expiryDate.name]: Yup.string()
    //   .nullable()
    //   .required(`${expiryDate.requiredErrorMsg}`)
    //   .test('expDate', expiryDate.invalidErrorMsg, val => {
    //     if (val) {
    //       const startDate = new Date();
    //       const endDate = new Date(2050, 12, 31);
    //       if (moment(val, moment.ISO_8601).isValid()) {
    //         return moment(val).isBetween(startDate, endDate);
    //       }
    //       return false;
    //     }
    //     return false;
    //   }),
    // [cvv.name]: Yup.string()
    //   .required(`${cvv.requiredErrorMsg}`)
    //   .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  })
];
