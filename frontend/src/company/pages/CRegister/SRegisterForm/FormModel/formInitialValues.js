import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    orgname,
    website,
    hrname,
    hremail,
    hrcontact,
    address1,
    city,
    zipcode,
    country,
    computerEngineering,
    civilEngineering,
    electricalEngineering,
    electronicsEngineering,
    eandcEngineering,
    mechanicalEngineering,
    productionEngineering,
    informationTechnology,
    cgpa
  }
} = checkoutFormModel;

export default {
  [orgname.name]: '',
  [website.name]: '',
  [hrname.name]: '',
  [hremail.name]: '',
  [hrcontact.name]: '',
  [address1.name]: '',
  [city.name]: '',
  [zipcode.name]: '',
  [country.name]: '',
  [computerEngineering.name]: false,
  [civilEngineering.name]: false,
  [electricalEngineering.name]: false,
  [electronicsEngineering.name]: false,
  [eandcEngineering.name]: false,
  [mechanicalEngineering.name]: false,
  [productionEngineering.name]: false,
  [informationTechnology.name]: false,
  [cgpa.name]: ''
};
