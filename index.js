const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

document.body.innerHTML += '<p> Dispozice bytu: ' + apartment.disposition + '</p>';
document.body.innerHTML += '<p> Najem bez poplatku: ' + apartment.price.rent + '</p>';
document.body.innerHTML += '<p> Vymera bytu: ' + apartment.area.floorage + apartment.area.balcony + apartment.area.units + '</p>';

const { city, district } = apartment;
document.body.innerHTML += '<p>Mesto: ' + city + '</p>';
document.body.innerHTML += '<p>Mestska cast: : ' + district + '</p>';


apartment.status = 'taken';
document.body.innerHTML += '<p> Stav inzeratu: ' + apartment.status + '</p>';



