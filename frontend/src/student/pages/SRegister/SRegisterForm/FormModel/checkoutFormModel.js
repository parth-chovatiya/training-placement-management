export default {
  formId: "checkoutForm",
  formField: {
    fullName: {
      name: "fullName",
      label: "Full Name *",
      requiredErrorMsg: "Full Name is required",
    },
    studentId: {
      name: "studentId",
      label: "Student Id No. *",
      requiredErrorMsg: "Student Id No is required",
    },
    enrolementNo: {
      name: "enrolementNo",
      label: "Enrolement No. *",
      requiredErrorMsg: "Enrolement No is required",
    },
    aadhaarNo: {
      name: "aadhaarNo",
      label: "Aadhaar No. *",
      requiredErrorMsg: "Aadhaar No is required",
      invalidErrorMsg: "Aadhaar No. is not valid (It must be 12 digit)",
    },
    email: {
      name: "email",
      label: "Email Id. *",
      requiredErrorMsg: "Email is required",
    },
    contact: {
      name: "contact",
      label: "Contact No. *",
      requiredErrorMsg: "Contact No is required",
    },
    dob: {
      name: "dob",
      label: "Date of Birth *",
      requiredErrorMsg: "Date of Birth is required",
    },
    gender: {
      name: "gender",
      label: "Gender *",
      requiredErrorMsg: "Gender is required",
    },
    religion: {
      name: "religion",
      label: "Religion *",
      requiredErrorMsg: "Religion is required",
    },
    address1: {
      name: "address1",
      label: "Address Line 1 *",
      requiredErrorMsg: "Address Line 1 is required",
    },
    address2: {
      name: "address2",
      label: "Address Line 2",
    },
    city: {
      name: "city",
      label: "City *",
      requiredErrorMsg: "City is required",
    },
    state: {
      name: "state",
      label: "State/Province/Region *",
      requiredErrorMsg: "State is required",
    },
    zipcode: {
      name: "zipcode",
      label: "Zip / Postal code *",
      requiredErrorMsg: "Zip / Postal code is required",
      invalidErrorMsg: "Zipcode is not valid (e.g. 700000)",
    },
    country: {
      name: "country",
      label: "Country *",
      requiredErrorMsg: "Country is required",
    },
    coursetype: {
      name: "coursetype",
      label: "Course Type *",
      requiredErrorMsg: "Course Type is required",
    },
    department: {
      name: "department",
      label: "Department *",
      requiredErrorMsg: "Department is required",
      // invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    passingyear: {
      name: "passingyear",
      label: "Passing Year *",
      requiredErrorMsg: "Passing Year is required",
      // invalidErrorMsg: 'Expiry date is not valid'
    },
    cgpa: {
      name: "cgpa",
      label: "CGPA *",
      requiredErrorMsg: "CGPA is required",
      // invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    },
  },
};
