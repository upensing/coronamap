function updateMap() {
    console.log("Updating map with resk time data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitute = element.longitude;


                cases = element.infected;
                if (cases>255){
                    color ="rgb(255, 0,0)";
                }
                else{
                    color = `rgb(${cases},0,0)`
                }
               
                //mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color

                })
                    .setLngLat([longitute, latitude])
                    .addTo(map);
            })
        })

}
let interval = 20000;
setInterval(updateMap,interval);
updateMap();