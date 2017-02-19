var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);
function searchCountries(){
  var countryName = $('#country-name').val();
    if (!countryName.length) {
      countryName ='Poland';
  };
    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList
    });
};
function showCountriesList(resp){
  countriesList.empty();
  resp.forEach(function(item){
    $('<li>').text('Country: ' + item.name + ', capital: ' + item.capital).appendTo(countriesList);
    $('<li>').text('Region: ' + item.region + ', language: ' + item.languages + ', population: ' + item.population).appendTo(countriesList);
  })
}
