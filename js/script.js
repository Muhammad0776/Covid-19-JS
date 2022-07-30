const apiUrl = "https://coronavirus-19-api.herokuapp.com/countries";

const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const cases = document.querySelector(".cases");
const recovered = document.querySelector(".recovered");
const deaths = document.querySelector(".deaths");
const todayCases = document.querySelector(".todayCases");
const todayDeaths = document.querySelector(".todayDeaths");
const results = document.querySelector(".results");
const form = document.querySelector(".formData");
const countryName = document.querySelector(".country-name");

results.style.display = "none";
loading.style.display = "none";

const searchCountry = async (country) => {
  loading.style.display = "block";
  errors.innerHTML = "";
  try {
    const response = await axios.get(`${apiUrl}/${country}`);
    if (response.data === "Country not found") {
      throw error;
    }
    loading.style.display = "none";

    todayCases.innerHTML = response.data.todayCases;
    todayDeaths.innerHTML = response.data.todayDeaths;
    cases.innerHTML = response.data.cases;
    deaths.innerHTML = response.data.deaths;
    recovered.innerHTML = response.data.recovered;
    results.style.display = "block";
  } catch (error) {
    loading.style.display = "none";
    results.style.display = "none";
    errors.innerHTML = "Such a state does not exist!";
  }
};

const handleSubmit = async (e) => {
    e.preventDefault();
    searchCountry(countryName.value);
}

form.addEventListener("submit", e => handleSubmit(e));
