const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const resultParagraph = document.getElementById('result');

const citiesByCountry = {
    ger: ["Berlin", "Hamburg", "Munich", "Cologne"],
    usa: ["New York", "Washington", "Boston", "Chikago"],
    ukr: ["Kyiv", "Kharkiv", "Lviv", "Odessa"]
};

countrySelect.addEventListener('change', () => {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry] ;

    citiesSelect.innerHTML = '';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
    });

    resultParagraph.textContent = `Обрана країна: ${countrySelect.options[countrySelect.selectedIndex].text}, Обране місто: `;
});

citiesSelect.addEventListener('change', () => {
    resultParagraph.textContent = `Обрана країна: ${countrySelect.options[countrySelect.selectedIndex].text}, Обране місто: ${citiesSelect.options[citiesSelect.selectedIndex].text}`;
});