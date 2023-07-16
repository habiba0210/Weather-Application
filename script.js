// To get the weather information we will be using accuweather API

// Upon opening the App get the current location coordinates.

// Using the coordinates Make the API call to basic details such as country,Key local location, timezone etc

// Once the weather data is available then start bulding UI

//Steps 1
//Register accuweather api website
//Login--> Go to profile --->My App-->Add a new App

// App Name:Weather,coreweather:limited trial,minute cast:none,API created for:Weather App,API Used:Desktop ,Programming Language:Javascript ,country:India --->Create App



//Step 2
//Upon opening the App get the current location coordinates.
//as soon as window is loaded we should call the method
window.addEventListener('load',()=>{
    //logic to read the coordinate
    //navigator and geolocation is a property by javascript to get the logitude and latitude and epoch time etc
    var lat,long,timestamp;
    navigator.geolocation.getCurrentPosition((position)=>{
         console.log(position);
         lat=position['coords']['latitude'];
         long=position['coords']['longitude'];
         t=position['timestamp'];
         console.log(lat);
         console.log(long);
         console.log(t);
    })
})


//Step 3
// Using the coordinates Make the API call to basic details such as country,Key local location, timezone etc
//For making the API call we can use fetch() or we can use third party library called as axios
// we will go axios bcz in framework we'll be using this axios --<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//In order to make http request we'll be using axios,In order to make request in our application to external server(accweather), it will connect to DB , DB will give respose in form of JSON
//  API Key:	9lAteGwt4EdmuT0niKcltcelm4m8y1ag  

//accuweather website ---> API refrence --Locations-->geoposition -->Paste ApI Key-->  latitude,longitude -->send request


