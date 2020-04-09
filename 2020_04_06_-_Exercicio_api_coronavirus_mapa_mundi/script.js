'use strict';

let DB = [
    {
        "Country": "Selecione um País",
        "CountryCode": "",
        "Confirmed": "<div class='spinner orange'></div>",
        "Deaths": "<div class='spinner green'></div>",
        "Recovered": "<div class='spinner blue'></div>"
    }
];

const getYesterdayDate = () => {
    var currentDate = new Date();
    var yesterdayDate = new Date(currentDate.getTime());
    yesterdayDate.setDate(currentDate.getDate() - 1);

    var year =  yesterdayDate.getFullYear();
    var month =  yesterdayDate.getMonth()+1;
    var day = yesterdayDate.getDate();

    if( month < 10 ){
        month = "0" + month;
    }
    if( day < 10 ){
        day = "0" + day;
    }

    return year + "-" + month + "-" + day;
}

const showData = () => {
    const data = DB[0];

    const infoPanel = `
        <div class="containerCountryName"> ${ data.Country } </div>

        <div class="containerCountryCases">
            <div class="numbers"> ${ data.Confirmed } </div>
            <div class="titles"> Casos </div>
        </div>

        <div class="containerCountryDeaths">
            <div class="numbers"> ${ data.Deaths } </div>
            <div class="titles"> Mortes </div>
        </div>

        <div class="containerCountryRecovers">
            <div class="numbers"> ${ data.Recovered } </div>
            <div class="titles"> Altas </div>
        </div>
    `

    const $container = document.createElement ( 'div' );
    $container.innerHTML = infoPanel;

    const $info = document.getElementById( 'containerDados' );
    if( $info.firstChild ){
        $info.removeChild ( $info.firstChild );
    }
    $info.appendChild ( $container );
}

const getCountryJson = async ( country, date ) => {
    var url = `https://api.covid19api.com/live/country/${country}/status/confirmed/date/${date}T23:59:59Z`;
    var api = await fetch ( url );
    var json = await api.json();
    DB = await json;

    return await DB;
}

const getCountryInfo = ( DB ) => {
    if( DB.length > 1 ){
        var cases = 0;
        var deaths = 0;
        var recovers = 0;

        for (var i = 0; i < DB.length; i ++) {
            console.log( DB[i].CountryCode );
            cases += DB[i].Confirmed;
            deaths += DB[i].Deaths;
            recovers += DB[i].Recovered;
        }
        DB = [{
            "Country": DB[0].Country,
            "CountryCode": DB[0].CountryCode,
            "Confirmed": cases,
            "Deaths": deaths,
            "Recovered": recovers
        }]
    }
}

const findCountry = async ( event ) => {
    const countryCode = event.target.id;
    
    getCountryInfo( await getCountryJson( countryCode, await getYesterdayDate() ) );

    showData();
}

showData();

document.querySelector( 'svg' ).addEventListener( 'click', findCountry );

// getCountryInfo( getCountryJson( "br", getYesterdayDate() ) );

// showData();