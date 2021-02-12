/* Fallowed Code Institute video from Rosie */
        function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 16,
                center: {
                    lat: 52.976849,
                    lng: -0.034810
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 52.976849,
                lng: -0.034810
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker ({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
        