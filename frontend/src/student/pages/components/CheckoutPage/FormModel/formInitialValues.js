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
    address1,
    city,
    zipcode,
    country,
    useAddressForPaymentDetails,
    coursetype,
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
  [address1.name]: '',
  [city.name]: '',
  [zipcode.name]: '',
  [country.name]: '',
  [useAddressForPaymentDetails.name]: false,
  [coursetype.name]: '',
  [department.name]: '',
  [passingyear.name]: '',
  [cgpa.name]: ''
};
