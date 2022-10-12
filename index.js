(() => {
    const initMap = () => {
        const uluru = { lat: 36.519759814209486, lng: 136.60930881545332 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: uluru,
        });
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
        const infoWindow = new google.maps.InfoWindow();
        const locationButton = document.createElement("button");

        map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };


                    infoWindow.open(map);
                    // ここでマーカーをセットする
                    const marker2 = new google.maps.Marker({
                        position: pos,
                        map: map,
                    });
                    infoWindow.open(map);
                    // map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }

    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
        );

    }

    window.initMap = initMap;

})();