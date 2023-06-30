// consumed API from:
// https://restcountries.com/#endpoints-all
const url = 'https://restcountries.com/v3.1/all';

const selectInput = document.getElementById('country');

const getCountryCode = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // const findCountry = data.find((country) => country.name.common === 'United States');
      // console.log(findCountry);
  
      const dataNumber = data.map(({ idd, name }) => ({
        fullName: name.common,
        iddNumber: Array.isArray(idd.suffixes) ? idd.root : idd.root + idd.suffixes,
      }));
  
      dataNumber
        .filter(({ iddNumber }) => !Number.isNaN(iddNumber)) // filter out invalid numbers (api returns some invalid numbers)
        .sort((a, b) => a.fullName.localeCompare(b.fullName))
        .forEach(({ iddNumber, fullName }) => {
          const option = new Option(`${fullName} ${iddNumber}`, iddNumber);
          selectInput.appendChild(option);
        });
    } catch (error) {
      console.error('API has returned:', error);
    }
  };

getCountryCode();
