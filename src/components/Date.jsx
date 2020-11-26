const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const today = new Date().toLocaleDateString("en-us", options);
const [day, month, date, year] = new Date().toLocaleDateString("en-US", options).split(" ");

function Date() {

}

export default Date;
