export async function getCountryLanguage() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    console.log(data.country_code);
    // Bangladesh country code is 'BD'
    if (data.country_code === "BD") {
      return "bn";
    } else {
      return "en";
    }
  } catch (error) {
    return "en";
  }
}
