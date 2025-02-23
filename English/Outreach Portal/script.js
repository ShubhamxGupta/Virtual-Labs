mapboxgl.accessToken =
    "pk.eyJ1IjoicHVzaHBkZWVwIiwiYSI6ImNrdDFuNXRlOTBjMDYycHBobTVxN3hsaWMifQ.Nz2btK_t3y6Qh1q-KSa0wQ";
let geojson = [];
function mapinit1(geo) {
    const geojson = {
        type: "FeatureCollection",
        features: geo,
    };
    console.log(geojson);
    const map = new mapboxgl.Map({
        container: "map",
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/light-v10",
        center: [80.33707, 23.833018],
        zoom: 3.3,
    });
    map.on("load", () => {
        // Add a new source from our GeoJSON data and
        // set the 'cluster' option to true. GL-JS will
        // add the point_count property to your source data.
        console.log(geojson);
        map.addSource("earthquakes", {
            type: "geojson",
            // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
            // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
            data: geojson,
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
        });
        map.addLayer({
            id: "clusters",
            type: "circle",
            source: "earthquakes",
            filter: ["has", "point_count"],
            paint: {
                // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                // with three steps to implement three types of circles:
                //   * Blue, 20px circles when point count is less than 100
                //   * Yellow, 30px circles when point count is between 100 and 750
                //   * Pink, 40px circles when point count is greater than or equal to 750
                "circle-color": [
                    "step",
                    ["get", "point_count"],
                    "#51bbd6",
                    100,
                    "#f1f075",
                    200,
                    "#f28cb1",
                    300,
                    "#ffb38a",
                ],
                "circle-radius": [
                    "step",
                    ["get", "point_count"],
                    20,
                    100,
                    30,
                    200,
                    40,
                ],
            },
        });
        map.addLayer({
            id: "cluster-count",
            type: "symbol",
            source: "earthquakes",
            filter: ["has", "point_count"],
            layout: {
                "text-field": "{point_count_abbreviated}",
                "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                "text-size": 12,
            },
        });
        map.addLayer({
            id: "unclustered-point",
            type: "circle",
            source: "earthquakes",
            filter: ["!", ["has", "point_count"]],
            paint: {
                "circle-color": "#11b4da",
                "circle-radius": 4,
                "circle-stroke-width": 1,
                "circle-stroke-color": "#fff",
            },
        });

        // inspect a cluster on click
        map.on("click", "clusters", (e) => {
            const features = map.queryRenderedFeatures(e.point, {
                layers: ["clusters"],
            });
            const clusterId = features[0].properties.cluster_id;
            map.getSource("earthquakes").getClusterExpansionZoom(
                clusterId,
                (err, zoom) => {
                    if (err) return;
                    map.easeTo({
                        center: features[0].geometry.coordinates,
                        zoom: zoom,
                    });
                }
            );
        });

        map.addControl(new mapboxgl.FullscreenControl()); // full screen control in map
        map.addControl(new mapboxgl.NavigationControl()); // zoom-in and zoom-out control in map

        // When a click event occurs on a feature in
        // the unclustered-point layer, open a popup at
        // the location of the feature, with
        // description HTML from its properties.
        map.on("click", "unclustered-point", (e) => {
            const coordinates = e.features[0].geometry.coordinates.slice();
            const mag = e.features[0].properties.title;
            const district = e.features[0].properties.description;
            const tsunami =
                e.features[0].properties.tsunami === 1 ? "yes" : "no";
            // Ensure that if the map is zoomed out such that
            // multiple copies of the feature are visible, the
            // popup appears over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(
                    `<strong>Institute</strong>: ${mag}<br><strong>District</strong>: ${district}`
                )
                .addTo(map);
        });
        map.on("mouseenter", "clusters", () => {
            map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "clusters", () => {
            map.getCanvas().style.cursor = "";
        });
    });
}
function mapinit2() {
    mapboxgl.accessToken =
        "pk.eyJ1IjoicHVzaHBkZWVwIiwiYSI6ImNrdDFuNXRlOTBjMDYycHBobTVxN3hsaWMifQ.Nz2btK_t3y6Qh1q-KSa0wQ";
    const map = new mapboxgl.Map({
        container: "map",
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/light-v10",
        center: [80.33707, 20.833018],
        zoom: 3.3,
    });
    map.on("load", () => {
        map.addSource("places", {
            type: "geojson",
            data: { type: "FeatureCollection", features: geojson },
        });
        // Add a layer showing the places.
        map.addLayer({
            id: "places",
            type: "circle",
            source: "places",
            paint: {
                "circle-color": "#4264fb",
                "circle-radius": 6,
                "circle-stroke-width": 2,
                "circle-stroke-color": "#ffffff",
            },
        });
        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
        });

        map.addControl(new mapboxgl.FullscreenControl()); // full screen control in map
        map.addControl(new mapboxgl.NavigationControl()); // zoom-in and zoom-out control in map

        map.on("mouseenter", "places", (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = "pointer";
            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            //const description = e.features[0].properties.description;
            const description =
                e.features[0].properties.title +
                ", " +
                e.features[0].properties.description;
            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });
        map.on("mouseleave", "places", () => {
            map.getCanvas().style.cursor = "";
            popup.remove();
        });
    });
}
function selectmap() {
    let map = document.getElementById("map_select");
    if (map.value == "cluster") {
        mapinit1(geojson);
    } else {
        mapinit2();
    }
}
function responselocation1(data) {
    geojson = [];
    for (let i = 0; i < data.length; i++) {
        geojson.push({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [data[i].longitude, data[i].latitude],
            },
            properties: {
                title: data[i].name,
                description: data[i].city,
            },
        });
    }
    mapinit1(geojson);
    // "name": "SJM College of Pharmacy",
    // "longitude": "76.39273561",
    // "latitude": "14.24164297",
    // "city": "Chitradurga"
}
const locationmap1 = new API("statistics/nc_location", {}, responselocation1);
locationmap1.call();
//# sourceMappingURL=maps1.js.map
