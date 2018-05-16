window.onload = function () {
    //setup country list model
    var countryList = new CountryList();

    //setup views
    var countrySelectView = new CountrySelectView(document.querySelector('#countries'), countryList, lastCountry);
    var countryDetailView = new CountryDetailView(document.querySelector('#info'));

    //link change on select to update detail view
    countrySelectView.onChange = function(country) {
      console.log("select view changed");
      countryDetailView.display(country);
      
    };

    //get data from server
    countryList.populate();

};
