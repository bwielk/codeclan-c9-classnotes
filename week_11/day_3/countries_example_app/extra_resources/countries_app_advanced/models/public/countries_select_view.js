var CountrySelectView = function(selectElement, countryList, lastCountry) {
  this.selectElement = selectElement;
  this.countryList = countryList;
  this.lastCountry = lastCountry;
  this.onChange = undefined;
  this.selectElement.addEventListener('change', function (e) {
      var target = e.target;
      var index = target.selectedIndex;
      var country = this.countryList.countries[target.selectedIndex];
      country.index = index;
      this.onChange(country);
  }.bind(this), false);
  
  //listen to when model updates
  this.countryList.onUpdate = this.populate.bind(this);
};

CountrySelectView.prototype = {
  populate:function() {
    console.log('populate', this);
    var countries = this.countryList.countries;
    var index = 0;
    countries.forEach(function(country) {
      this.addOption(country, index);
      index++;
    }.bind(this));
    this.setSelectedFromLocal();
  },
  setSelectedFromLocal:function() {
    var savedCountry = this.lastCountry.get();
    if(savedCountry) {
      this.setSelectedCountry(savedCountry);
    }
  },
  addOption:function(country, index) {
    var option = document.createElement("option");
    option.value = index.toString();
    option.text = country.name;
    this.selectElement.appendChild(option);
  },
  setSelectedCountry:function(country) {
    this.selectElement.selectedIndex = country.index;
    this.onChange(country);
  }
};
