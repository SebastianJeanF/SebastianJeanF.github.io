function Weather(temp, cloud, year, condition, changeFunction) {
        this.temp = temp;
        this.cloud = cloud;
        this.year = year;
        this.condition = condition;
        this.changeFunction = changeFunction;
    }
    const changeCloud =  function(newCloudState) {
        this.cloud = newCloudState
    }
    const changeCondition =  function(newCondition) {
        this.condition = newCondition
    }
    
    
    const weather = new Weather(80, false, 2022, "sunny", changeCondition)
    const NewYorkWeather = new Weather(40, true, 2022, "windy", changeCloud)
    console.log(NewYorkWeather.month)
    NewYorkWeather.month = "December"

console.log(NewYorkWeather.month)
