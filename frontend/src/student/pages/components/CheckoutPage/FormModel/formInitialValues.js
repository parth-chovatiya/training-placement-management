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
    useAddressForPaymentDetails,
    tech,
    department,
    passingyear,
    cgpa
  }
} = checkoutFormModel;

export default {
  [fullName.name]: '',
  [studentId.name]: '',
  [enrolementNo.name]: '',
  [aadhaarNo.name]: '',
  [email.name]: '',
  [contact.name]: '',
  [dob.name]: '',
  [gender.name]: '',
  [religion.name]: '',
  // [firstName.name]: '',
  // [lastName.name]: '',
  [address1.name]: '',
  [city.name]: '',
  [zipcode.name]: '',
  [country.name]: '',
  [useAddressForPaymentDetails.name]: false,
  [tech.name]: '',
  [department.name]: '',
  [passingyear.name]: '',
  [cgpa.name]: ''
};
