const mongoose = require('mongoose');
const City = require('./models/City');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const seedData = async () => {
  await City.deleteMany({});

  await City.insertMany([
    { city: 'New York', timezone: 'America/New_York', country: 'USA', population: '8,336,817', currency: 'USD', language: 'English', favoriteBeer: 'Brooklyn Lager' },
    { city: 'Toronto', timezone: 'America/Toronto', country: 'Canada', population: '2,731,571', currency: 'CAD', language: 'English', favoriteBeer: 'Steam Whistle' },
    { city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', population: '2,891,000', currency: 'ARS', language: 'Spanish', favoriteBeer: 'Quilmes' },
    { city: 'São Paulo', timezone: 'America/Sao_Paulo', country: 'Brazil', population: '11,253,503', currency: 'BRL', language: 'Portuguese', favoriteBeer: 'Skol' },
    { city: 'Rio de Janeiro', timezone: 'America/Rio_Branco', country: 'Brazil', population: '6,775,000', currency: 'BRL', language: 'Portuguese', favoriteBeer: 'Antarctica' },
    { city: 'Santiago', timezone: 'America/Santiago', country: 'Chile', population: '5,700,000', currency: 'CLP', language: 'Spanish', favoriteBeer: 'Cristal' },
    { city: 'London', timezone: 'Europe/London', country: 'UK', population: '8,982,000', currency: 'GBP', language: 'English', favoriteBeer: 'Guinness' },
    { city: 'Dublin', timezone: 'Europe/Dublin', country: 'Ireland', population: '1,173,179', currency: 'EUR', language: 'English', favoriteBeer: 'Murphy\'s' },
    { city: 'Paris', timezone: 'Europe/Paris', country: 'France', population: '2,165,423', currency: 'EUR', language: 'French', favoriteBeer: 'Pelforth' },
    { city: 'Berlin', timezone: 'Europe/Berlin', country: 'Germany', population: '3,748,148', currency: 'EUR', language: 'German', favoriteBeer: 'Beck\'s' },
    { city: 'Moscow', timezone: 'Europe/Moscow', country: 'Russia', population: '12,678,079', currency: 'RUB', language: 'Russian', favoriteBeer: 'Baltika' },
    { city: 'Istanbul', timezone: 'Europe/Istanbul', country: 'Turkey', population: '15,030,000', currency: 'TRY', language: 'Turkish', favoriteBeer: 'Efes' },
    { city: 'Dubai', timezone: 'Asia/Dubai', country: 'UAE', population: '3,379,000', currency: 'AED', language: 'Arabic', favoriteBeer: 'Heineken' },
    { city: 'Mumbai', timezone: 'Asia/Kolkata', country: 'India', population: '12,478,447', currency: 'INR', language: 'Hindi', favoriteBeer: 'Kingfisher' },
    { city: 'Jakarta', timezone: 'Asia/Jakarta', country: 'Indonesia', population: '10,562,088', currency: 'IDR', language: 'Indonesian', favoriteBeer: 'Bali Hai' },
    { city: 'Bangkok', timezone: 'Asia/Bangkok', country: 'Thailand', population: '8,280,000', currency: 'THB', language: 'Thai', favoriteBeer: 'Singha' },
    { city: 'Hong Kong', timezone: 'Asia/Hong_Kong', country: 'Hong Kong', population: '7,496,981', currency: 'HKD', language: 'Chinese', favoriteBeer: 'Tsingtao' },
    { city: 'Shanghai', timezone: 'Asia/Shanghai', country: 'China', population: '24,484,000', currency: 'CNY', language: 'Chinese', favoriteBeer: 'Snow Beer' },
    { city: 'Seoul', timezone: 'Asia/Seoul', country: 'South Korea', population: '10,292,000', currency: 'KRW', language: 'Korean', favoriteBeer: 'Hite' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan', population: '13,515,271', currency: 'JPY', language: 'Japanese', favoriteBeer: 'Asahi' },
    { city: 'Manila', timezone: 'Asia/Manila', country: 'Philippines', population: '1,780,148', currency: 'PHP', language: 'Filipino', favoriteBeer: 'San Miguel' },
    { city: 'Singapore', timezone: 'Asia/Singapore', country: 'Singapore', population: '5,637,000', currency: 'SGD', language: 'English', favoriteBeer: 'Tiger Beer' },
    { city: 'Sydney', timezone: 'Australia/Sydney', country: 'Australia', population: '5,312,163', currency: 'AUD', language: 'English', favoriteBeer: 'VB' },
    { city: 'Melbourne', timezone: 'Australia/Melbourne', country: 'Australia', population: '5,061,439', currency: 'AUD', language: 'English', favoriteBeer: 'Carlton Draught' },
    { city: 'Wellington', timezone: 'Pacific/Auckland', country: 'New Zealand', population: '418,000', currency: 'NZD', language: 'English', favoriteBeer: 'Speight\'s' },
    { city: 'Suva', timezone: 'Pacific/Fiji', country: 'Fiji', population: '77,366', currency: 'FJD', language: 'English', favoriteBeer: 'Fiji Beer' },
    { city: 'Auckland', timezone: 'Pacific/Auckland', country: 'New Zealand', population: '1,657,200', currency: 'NZD', language: 'English', favoriteBeer: 'Mac’s Gold' },
    { city: 'Nouméa', timezone: 'Pacific/Noumea', country: 'New Caledonia', population: '184,000', currency: 'XPF', language: 'French', favoriteBeer: 'Bière des Îles' },
    { city: 'Apia', timezone: 'Pacific/Apia', country: 'Samoa', population: '38,400', currency: 'WST', language: 'Samoan', favoriteBeer: 'Vailima' },
    { city: 'Tarawa', timezone: 'Pacific/Tarawa', country: 'Kiribati', population: '56,000', currency: 'AUD', language: 'English', favoriteBeer: 'Foster\'s' },
    { city: 'Honiara', timezone: 'Pacific/Guadalcanal', country: 'Solomon Islands', population: '84,520', currency: 'SBD', language: 'English', favoriteBeer: 'Solbrew' },
    { city: 'Port Moresby', timezone: 'Pacific/Port_Moresby', country: 'Papua New Guinea', population: '318,000', currency: 'PGK', language: 'English', favoriteBeer: 'SP Lager' },
    { city: 'Majuro', timezone: 'Pacific/Majuro', country: 'Marshall Islands', population: '27,797', currency: 'USD', language: 'Marshallese', favoriteBeer: 'Heineken' },
    { city: 'Wake Island', timezone: 'Pacific/Wake', country: 'USA', population: '0', currency: 'USD', language: 'English', favoriteBeer: 'Budweiser' },
    { city: 'San Francisco', timezone: 'America/Los_Angeles', country: 'USA', population: '883,305', currency: 'USD', language: 'English', favoriteBeer: 'Anchor Steam' },
    { city: 'Los Angeles', timezone: 'America/Los_Angeles', country: 'USA', population: '3,898,747', currency: 'USD', language: 'English', favoriteBeer: 'Stone IPA' },
    { city: 'Chicago', timezone: 'America/Chicago', country: 'USA', population: '2,693,976', currency: 'USD', language: 'English', favoriteBeer: 'Bud Light' },
    { city: 'Dallas', timezone: 'America/Chicago', country: 'USA', population: '1,304,379', currency: 'USD', language: 'English', favoriteBeer: 'Shiner Bock' },
    { city: 'Houston', timezone: 'America/Chicago', country: 'USA', population: '2,304,580', currency: 'USD', language: 'English', favoriteBeer: 'Karbach' },
    { city: 'Atlanta', timezone: 'America/New_York', country: 'USA', population: '498,715', currency: 'USD', language: 'English', favoriteBeer: 'SweetWater' },
    { city: 'Boston', timezone: 'America/New_York', country: 'USA', population: '695,000', currency: 'USD', language: 'English', favoriteBeer: 'Harpoon IPA' },
    { city: 'Philadelphia', timezone: 'America/New_York', country: 'USA', population: '1,584,138', currency: 'USD', language: 'English', favoriteBeer: 'Yards' },
    { city: 'Washington, D.C.', timezone: 'America/New_York', country: 'USA', population: '705,749', currency: 'USD', language: 'English', favoriteBeer: 'Port City' },
    { city: 'Baltimore', timezone: 'America/New_York', country: 'USA', population: '593,490', currency: 'USD', language: 'English', favoriteBeer: 'Natty Boh' },
    { city: 'Las Vegas', timezone: 'America/Los_Angeles', country: 'USA', population: '641,903', currency: 'USD', language: 'English', favoriteBeer: 'Budweiser' },
    { city: 'San Diego', timezone: 'America/Los_Angeles', country: 'USA', population: '1,423,851', currency: 'USD', language: 'English', favoriteBeer: 'Ballast Point' },
    { city: 'Seattle', timezone: 'America/Los_Angeles', country: 'USA', population: '744,955', currency: 'USD', language: 'English', favoriteBeer: 'Pike Place' },
    { city: 'Portland', timezone: 'America/Los_Angeles', country: 'USA', population: '652,816', currency: 'USD', language: 'English', favoriteBeer: 'Deschutes' },
    { city: 'Reykjavik', timezone: 'Atlantic/Reykjavik', country: 'Iceland', population: '131,136', currency: 'ISK', language: 'Icelandic', favoriteBeer: 'Viking Lager' },
    { city: 'Accra', timezone: 'Africa/Accra', country: 'Ghana', population: '2,291,000', currency: 'GHS', language: 'English', favoriteBeer: 'Club Beer' },
    { city: 'Anchorage', timezone: 'America/Anchorage', country: 'USA', population: '288,000', currency: 'USD', language: 'English', favoriteBeer: 'Anchorage Brewing Co.' },
    { city: 'Port Moresby', timezone: 'Pacific/Port_Moresby', country: 'Papua New Guinea', population: '318,000', currency: 'PGK', language: 'English', favoriteBeer: 'SP Lager' },
    { city: 'Funafuti', timezone: 'Pacific/Funafuti', country: 'Tuvalu', population: '6,000', currency: 'AUD', language: 'Tuvaluan', favoriteBeer: 'Foster\'s' },
    { city: 'Honiara', timezone: 'Pacific/Guadalcanal', country: 'Solomon Islands', population: '84,520', currency: 'SBD', language: 'English', favoriteBeer: 'Solbrew' },
    { city: 'Majuro', timezone: 'Pacific/Majuro', country: 'Marshall Islands', population: '27,797', currency: 'USD', language: 'Marshallese', favoriteBeer: 'Heineken' },
    { city: 'Reykjavik', timezone: 'Atlantic/Reykjavik', country: 'Iceland', population: '131,136', currency: 'ISK', language: 'Icelandic', favoriteBeer: 'Viking Lager' },
    { city: 'Accra', timezone: 'Africa/Accra', country: 'Ghana', population: '2,291,000', currency: 'GHS', language: 'English', favoriteBeer: 'Club Beer' },
    { city: 'Asunción', timezone: 'America/Asuncion', country: 'Paraguay', population: '525,000', currency: 'PYG', language: 'Spanish', favoriteBeer: 'Pilsen' },
    { city: 'Montevideo', timezone: 'America/Montevideo', country: 'Uruguay', population: '1,319,108', currency: 'UYU', language: 'Spanish', favoriteBeer: 'Patricia' },

  ]);

  console.log('Data seeded');
  mongoose.connection.close();
};

connectDB().then(() => seedData());
