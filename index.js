
(() => {
    const initMap = () => {

        // マップの初期設定
        const uluru = { lat: 36.519759814209486, lng: 136.60930881545332 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: uluru,
        });
        // 野々市市にマーカーを置くやつ
        // const marker = new google.maps.Marker({
        //     position: uluru,
        //     map: map,
        // });
        const infoWindow = new google.maps.InfoWindow();
        // const locationButton = document.createElement("button");

        // firebaseからデータ取得



        const firebaseConfig = {
            apiKey: "AIzaSyAPAEwhklEXdNAYTcFq6ejquO_cWd_KRmE",
            authDomain: "pdb5-notty.firebaseapp.com",
            databaseURL: "https://pdb5-notty-default-rtdb.firebaseio.com",
            projectId: "pdb5-notty",
            storageBucket: "pdb5-notty.appspot.com",
            messagingSenderId: "806046809458",
            appId: "1:806046809458:web:d19425b062cec2964d31eb",
            measurementId: "G-0Z3EN0ZSCL"
        };



        // 現在位置表示の処理
        // map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
        const getBusLocation = (location) => {
            LatLng = location.split(',');
            const pos = {
                lat: LatLng[0],
                lng: LatLng[1]
            }
            infoWindow.open(map)
            const marker2 = new google.maps.Marker({
                position: pos,
                map: map,
            });
            infoWindow.open(map);
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            }
            // if (navigator.geolocation) {
            //     navigator.geolocation.getCurrentPosition(
            //         (position) => {
            //             const pos = {
            //                 lat: position.coords.latitude,
            //                 lng: position.coords.longitude,
            //             };


            //             infoWindow.open(map);
            //             // ここでマーカーをセットする
            //             const marker2 = new google.maps.Marker({
            //                 position: pos,
            //                 map: map,
            //             });
            //             infoWindow.open(map);
            //             // map.setCenter(pos);
            //         },
            //         () => {
            //             handleLocationError(true, infoWindow, map.getCenter());
            //         }
            //     );
            // } else {
            //     // Browser doesn't support Geolocation
            //     handleLocationError(false, infoWindow, map.getCenter());
        }
    }



    handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
        );

    }

    window.initMap = initMap;

})();