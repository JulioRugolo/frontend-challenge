const url = 'https://api-paises.pages.dev/paises.json';

const selectInput = document.getElementById('country');

const getCountryCode = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const dataNumber = Object.values(data).map(({ pais, ddi }) => {
        const object = {
          iddNumber: ddi,
          fullName: pais, 
        };
        return object;
      });
  
      dataNumber.forEach(({ iddNumber, fullName }) => {
          const option = new Option(`${fullName} +${iddNumber}`, iddNumber);
          selectInput.appendChild(option);
        });
    } catch (error) {
      console.error('API has returned:', error);
    }
  };

getCountryCode();
