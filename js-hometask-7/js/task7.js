const citiesByCountry = {
    ger: ["Berlin", "Hamburg", "Munich"],
    usa: ["New York", "Washington D.C.", "Atlanta"],
    ukr: ["Kyiv", "Lviv", "Ivano-Frankivsk"]
};

const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const selectionParagraph = document.getElementById("selection");

// Функція, яка оновлює список міст при зміні вибраної країни
function updateCities() {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry];

    citiesSelect.innerHTML = "";
    cities.forEach(city => {
        const option = document.createElement("option");
        option.text = city;
        citiesSelect.add(option);
    });

    const selectedCity = citiesSelect.value;
    selectionParagraph.innerHTML = `Selected country: ${countrySelect.options[countrySelect.selectedIndex].text}, selected city: ${selectedCity}`;
}

citiesSelect.addEventListener("change", function () {
    const selectedCity = citiesSelect.value;
    selectionParagraph.innerHTML = `Selected country: ${countrySelect.options[countrySelect.selectedIndex].text}, selected city: ${selectedCity}`;
});


countrySelect.addEventListener("change", updateCities);


updateCities();