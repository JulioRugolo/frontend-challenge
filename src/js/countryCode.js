const url = 'https://restcountries.com/v3.1/all';

const selectInput = document.getElementById('country');

const getCountryCode = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const dataNumber = data.map(({ idd, name }) => ({
        fullName: name.common,
        iddNumber: idd.root + idd.suffixes,
      }));
  
      dataNumber.sort((a, b) => a.fullName.localeCompare(b.fullName))
        .forEach(({ iddNumber, fullName }) => {
          const option = new Option(`${fullName} ${iddNumber}`, iddNumber);
          selectInput.appendChild(option);
        });
    } catch (error) {
      console.error('Ocorreu um erro ao carregar o arquivo JSON:', error);
    }
  };

getCountryCode();
