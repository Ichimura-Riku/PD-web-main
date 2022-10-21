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
        const locationButton = document.createElement("button");
        
        //バス停のマーカーをセット
        const busStop = [
            [36.519851, 136.609287], //野々市市役所
            [36.521955, 136.608943], //三納
            [36.522823, 136.611629], //老人福祉センター
            [36.522282, 136.613968], //矢作
            [36.523685, 136.615017], //菅原団地
            [36.52507, 136.61529], //菅原小学校
            [36.527732, 136.616125], //菅原
            [36.527469, 136.618156], //住吉
            [36.527384, 136.620749], //すみよし公園
            [36.527284, 136.624698], //扇が丘
            [36.527573, 136.628633], //扇が丘東
            [36.528623, 136.630042], //工業大学東
            [36.529564, 136.627709], //金沢工業大学・吉田宣伝株式会社協賛
            [36.532199, 136.625384], //高橋
            [36.532131, 136.621128], //工大前駅
            [36.532264, 136.618667], //カミーノ
            [36.531862, 136.615752], //喜多家住宅
            [36.532152, 136.612526], //本町4丁目
            [36.533031, 136.611255], //若松
            [36.532457, 136.608777], //フォルテ
            [36.532067, 136.606509], //太平寺
            [36.529153, 136.608578], //カレード
            [36.52921, 136.603684], //太平寺西
            [36.529294, 136.601302], //堀内東
            [36.52935, 136.598677], //堀内公民館・吉光内科医院協賛
            [36.53204, 136.595984], //郷公民館
            [36.52898, 136.593558], //蓮花寺・北鉄自動車学校前
            [36.52648, 136.59429], //南ヶ丘病院
            [36.525009, 136.60028], //明倫高校
            [36.52354, 136.60251], //下林郵便局
            [36.523375, 136.604821], //下林
            [36.523178, 136.608368], //位川
        ]
        const busStopMarker = []
        const busStopImage = {
            url: "busStopIMG.png",
            scaledSize: new google.maps.Size(45, 60)
        }

        for(let i = 0; i < busStop.length; i++){
            busStopMarker[i] = new google.maps.Marker({
                map: map,
                position: {lat: busStop[i][0], lng: busStop[i][1]},
                icon: busStopImage, 
            })
        }

        // 現在位置表示の処理
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