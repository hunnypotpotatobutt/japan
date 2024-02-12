unicornGundamStatue = {
    latitude: 35.6260691780958,
    longitude: 139.77534831101303,
    map: 'https://www.google.com/maps/place/Unicorn+Gundam+Statue/@35.6327364,139.8191797,13.83z/data=!4m6!3m5!1s0x601889f9ca53ac17:0xe235a48a3479cb53!8m2!3d35.624451!4d139.7754917!16s%2Fg%2F11fq8sd4fb?entry=ttu',
}
var touristAttractions = ["unicornGundamStatue"];
var touristAttractionsTitles = [];

for (var i = 0; i < touristAttractions.length; i++) {    
    const text = touristAttractions[i];
    const result = text.replace(/([A-Z])/g, " $1");
    touristAttractionsTitles[i] = result.charAt(0).toUpperCase() + result.slice(1);
    
    document.getElementById("tourist attractions").innerHTML += '<br /><small id='+touristAttractions[i]+'>'+touristAttractionsTitles[i]+'</small>'+
    '<a href="'+window[touristAttractions[i]].map+'" target="_blank"><img src=”map.png”></a>'+'<img src=”map.png”>';
    console.log(window[touristAttractions[i]].map);
}