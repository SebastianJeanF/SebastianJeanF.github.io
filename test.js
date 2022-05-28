const defaultWeather = {
    temp: 80,
    cloud: false,
    year: 2022,
    condition: "sunny",
    changeWeather: function(newCondition) {
        this.condition = newCondition
      }
}

const NewYorkWeather1 = {
    temp: 40,
    precipitation: "20%",
    wind: "15MPH",
    cloud: true,
    year: 2022,
    season: "winter",
    month: "December",
    condition: "windy",
    changeWeather: function(newCondition) {
        this.condition = newCondition
      }
}

function Weather(temp, cloud, year, condition, changeFunction) {
    this.temp = temp;
    this.cloud = cloud;
    this.year = year;
    this.condition = condition;
    this.changeFunction = changeFunction;
}
const changeCloud =  function(newCloudState) {
    this.cloud = newCloudState
}
const changeCondition =  function(newCondition) {
    this.condition = newCondition 
}

const weather = new Weather(80, false, 2022, "sunny", changeCondition)
const NewYorkWeather = new Weather(40, true, 2022, "windy", changeCloud)
NewYorkWeather.month = "December"

console.log(NewYorkWeather.month)