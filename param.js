
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);

    const city = params.get('city');
    const temperature = params.get('temperature');
    const description = params.get('description').toUpperCase();
    let aqi=params.get('aqi');
    const wind=params.get('speed');
    let snow=params.get('snow');
    let rain=params.get('rain');
    const icon=params.get('ikey');
    const humidity=params.get('humidity');
    let main=params.get('main');
    let color1, color2;
    if (['Haze','Mist','Fog'].includes(main)){
        main='Haze';
        color1='Silver';
        color2='WhiteSmoke';
    }
    else if(['Smoke','Dust','Sand'].includes(main)){
        main='Smoke';
        color1='Silver';
        color2='WhiteSmoke';
    }
    else if (['Torando','Squall','Ash'].includes(main)){
        main='Tornado';
        color1='Navy';
        color2='MediumTurquoise';
    }
    else if(main=='Rain')
    {
        color1='Navy';
        color2='MediumTurquoise';
    }
    else if(main=='Sunny')
    {
        color1='DarkOrange';
        color2='LightYellow';
    }
    else if(main=='Snow')
    {
        color1='LightBlue';
        color2='Snow';
    }
    else if(main=='Clear')
    {
        color1='DodgerBlue';
        color2='White';
    }
    else if (main=='Clouds')
    {
        color1='LightSlateGray';
        color2='LightGray';
    }
    else if(main=='Thunderstorm'){
        color1='DimGray';
        color2='SeaShell';
    }
    else if(main=='Drizzle')
    {
        color1='MediumTurquoise';
        color2='MintCream';
    }

    if (rain=="undefined")
    {
        rain=0;
    }
    if (snow=="undefined")
    {
        snow=0;
    }
    let index=['0','Good','Fair','Moderate','Poor','Very Poor'];
    let color=['0','Green','Yellow','Orange','Red','Maroon'];

    document.getElementById('city').innerText = city;
    document.getElementById('temp').innerText = Math.round(temperature)+" ºC";
    document.getElementById('description').innerText = description;
    document.getElementById('aqitext').innerText=index[aqi];
    document.getElementById('aqitext').style.color=color[aqi];
    document.getElementById('wtext').innerText=wind+" Km/h";
    document.getElementById('hum').innerText=humidity+" %";
    document.getElementById('rain').innerText=rain;
    document.getElementById('stext').innerText=snow;
    document.getElementById('icon').src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById('status').src=`${main}.png`;
    document.body.style.backgroundImage = `linear-gradient(to bottom, ${color1}, ${color2})`;
});
