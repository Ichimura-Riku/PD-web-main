// (() => {
//     const initMap = () => {
//         // マップの初期設定

//         const uluru = { lat: 36.52625627294591, lng: 136.61181585797752 };
//         const map = new google.maps.Map(document.getElementById("map"), {
//             zoom: 14,
//             center: uluru,
//         });
//         // 野々市市にマーカーを置くやつ
//         // const marker = new google.maps.Marker({
//         //     position: uluru,
//         //     map: map,
//         // });
//         const infoWindow = new google.maps.InfoWindow();
//         const locationButton = document.createElement("button");

//         //バス停の座標を入れた配列
//         const busStop = [
//             [36.519851, 136.609287], //野々市市役所
//             [36.521995, 136.608943], //三納
//             [36.522823, 136.611629], //老人福祉センター
//             [36.522282, 136.613968], //矢作
//             [36.523685, 136.615017], //菅原団地
//             [36.525586, 136.615326], //菅原小学校
//             [36.527732, 136.616125], //菅原
//             [36.527469, 136.618156], //住吉
//             [36.527384, 136.620749], //すみよし公園
//             [36.527284, 136.624698], //扇が丘
//             [36.527573, 136.628633], //扇が丘東
//             [36.528623, 136.630042], //工業大学東
//             [36.529564, 136.627709], //金沢工業大学・吉田宣伝株式会社協賛
//             [36.532199, 136.625384], //高橋
//             [36.532131, 136.621128], //工大前駅
//             [36.532264, 136.618667], //カミーノ
//             [36.531862, 136.615752], //喜多家住宅
//             [36.532152, 136.612526], //本町4丁目
//             [36.533031, 136.611255], //若松
//             [36.532457, 136.608777], //フォルテ
//             [36.532067, 136.606509], //太平寺
//             [36.529153, 136.608578], //カレード
//             [36.52921, 136.603684], //太平寺西
//             [36.529294, 136.601302], //堀内東
//             [36.52935, 136.598677], //堀内公民館・吉光内科医院協賛
//             [36.53204, 136.595984], //郷公民館
//             [36.52898, 136.593558], //蓮花寺・北鉄自動車学校前
//             [36.526537, 136.593881], //南ヶ丘病院
//             [36.525009, 136.60028], //明倫高校
//             [36.523468, 136.60273], //下林郵便局
//             [36.523375, 136.604821], //下林
//             [36.523178, 136.608368], //位川
//         ]
//         const busStopMarker = []
//         const busStopImage = {
//             url: "IMG/busStopIMG.png",
//             scaledSize: new google.maps.Size(45, 60)
//         }
//         //バス停のマーカーをセット
//         for (let i = 0; i < busStop.length; i++) {
//             busStopMarker[i] = new google.maps.Marker({
//                 map: map,
//                 position: { lat: busStop[i][0], lng: busStop[i][1] },
//                 icon: busStopImage,
//             })
//         }

//         //走行ルートの座標
//         const runningPlanCoordinates = [
//             { lat: 36.519906, lng: 136.608859 },
//             { lat: 36.523082, lng: 136.609277 },
//             { lat: 36.522792, lng: 136.611619 },
//             { lat: 36.52216793805619, lng: 136.61428795828687 },
//             { lat: 36.522584857522176, lng: 136.61440542217895 },
//             { lat: 36.52249177192426, lng: 136.61501068751167 },
//             { lat: 36.523148462001394, lng: 136.61516078232546 },
//             { lat: 36.52407186956526, lng: 136.6150322508045 },
//             { lat: 36.52656310209432, lng: 136.61555488607226 },
//             { lat: 36.52774518052033, lng: 136.6157658789011 },
//             { lat: 36.52744346900605, lng: 136.6181530083362 },
//             { lat: 36.527173300855544, lng: 136.62869688824654 },
//             { lat: 36.528358436448016, lng: 136.62874294761397 },
//             { lat: 36.52831551251951, lng: 136.63002851757955 },
//             { lat: 36.52951165044877, lng: 136.63047722067049 },
//             { lat: 36.52968999717779, lng: 136.626348379049 },
//             { lat: 36.5321973064036, lng: 136.62640262863718 },
//             { lat: 36.532227479411084, lng: 136.62461786241758 },
//             { lat: 36.5320954711927, lng: 136.62351479373365 },
//             { lat: 36.532139001628956, lng: 136.62088959796728 },
//             { lat: 36.532452671275834, lng: 136.61868814999417 },
//             { lat: 36.53146625739543, lng: 136.61845018889284 },
//             { lat: 36.532052466081424, lng: 136.61449955943874 },
//             { lat: 36.53216070470513, lng: 136.61259244492385 },
//             { lat: 36.53229854885086, lng: 136.6118946147961 },
//             { lat: 36.53318168010032, lng: 136.6117550487655 },
//             { lat: 36.53298948103725, lng: 136.61005951631094 },
//             { lat: 36.53241007187945, lng: 136.61014674507652 },
//             { lat: 36.532433783279444, lng: 136.60844020171436 },
//             { lat: 36.53284964984321, lng: 136.60841112545455 },
//             { lat: 36.53270012504061, lng: 136.60675959415028 },
//             { lat: 36.53077408930504, lng: 136.60588748254972 },
//             { lat: 36.53035038107203, lng: 136.6073602754152 },
//             { lat: 36.530084862197526, lng: 136.60775679760758 },
//             { lat: 36.52969543286589, lng: 136.60877013209515 },
//             { lat: 36.5291938756406, lng: 136.60859031595098 },
//             { lat: 36.52855690789753, lng: 136.60855498813527 },
//             { lat: 36.52907819573437, lng: 136.60663392526723 },
//             { lat: 36.529232899838824, lng: 136.60495561107285 },
//             { lat: 36.5293355106587, lng: 136.6004285003209 },
//             { lat: 36.52940911981813, lng: 136.59728992878547 },
//             { lat: 36.529196118918875, lng: 136.59631941587384 },
//             { lat: 36.526561703321384, lng: 136.5928956938316 },
//             { lat: 36.52619363743825, lng: 136.59337728794677 },
//             { lat: 36.526936966323085, lng: 136.59438183510753 },
//             { lat: 36.527683651511886, lng: 136.59352797001662 },
//             { lat: 36.52892979606977, lng: 136.59375162860454 },
//             { lat: 36.52895763462876, lng: 136.59326660989288 },
//             { lat: 36.53019445195178, lng: 136.59330125408363 },
//             { lat: 36.532075155442264, lng: 136.5953896357131 },
//             { lat: 36.53209751235575, lng: 136.59629390245902 },
//             { lat: 36.52953760374983, lng: 136.59633563785593 },
//             { lat: 36.529286079766344, lng: 136.59644693222938 },
//             { lat: 36.52929725861511, lng: 136.59643997633216 },
//             { lat: 36.52948170958351, lng: 136.5977198615811 },
//             { lat: 36.529420225971805, lng: 136.60042570594044 },
//             { lat: 36.523523927691656, lng: 136.60017834170114 },
//             { lat: 36.52318606166965, lng: 136.60734412699392 },
//             { lat: 36.52304173961177, lng: 136.60911928677604 },
//             { lat: 36.519906, lng: 136.608859 },
//         ];
//         //ポリラインのセット
//         const runningPath = new google.maps.Polyline({
//             path: runningPlanCoordinates,
//             geodesic: true,
//             strokeColor: "#f44336",
//             strokeOpacity: 0.5,
//             strokeWeight: 6
//         });
//         runningPath.setMap(map);

//         // 現在位置表示の処理
//         // map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//         const getBusLocation = (location) => {
//             LatLng = location.split(',');
//             const pos = {
//                 lat: LatLng[0],
//                 lng: LatLng[1]
//             }
//             infoWindow.open(map)
//             const marker2 = new google.maps.Marker({
//                 position: pos,
//                 map: map,
//             });
//             infoWindow.open(map);
//             () => {
//                 handleLocationError(true, infoWindow, map.getCenter());
//             }
//             // if (navigator.geolocation) {
//             //     navigator.geolocation.getCurrentPosition(
//             //         (position) => {
//             //             const pos = {
//             //                 lat: position.coords.latitude,
//             //                 lng: position.coords.longitude,
//             //             };


//             //             infoWindow.open(map);
//             //             // ここでマーカーをセットする
//             //             const marker2 = new google.maps.Marker({
//             //                 position: pos,
//             //                 map: map,
//             //             });
//             //             infoWindow.open(map);
//             //             // map.setCenter(pos);
//             //         },
//             //         () => {
//             //             handleLocationError(true, infoWindow, map.getCenter());
//             //         }
//             //     );
//             // } else {
//             //     // Browser doesn't support Geolocation
//             //     handleLocationError(false, infoWindow, map.getCenter());
//         }

//     }

//     handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
//         infoWindow.setPosition(pos);
//         infoWindow.setContent(
//             browserHasGeolocation
//                 ? "Error: The Geolocation service failed."
//                 : "Error: Your browser doesn't support geolocation."
//         );

//     }

//     window.initMap = initMap;

// })();


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics, setUserId } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

const initMap = () => {
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

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase(app);






    //データの読み取り
    const db = getDatabase();
    const starCountRef = ref(db, '/userLocation');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        const LatLngData = data.split(',');
        const LatLng = { lat: 36.519759814209486, lng: 136.60930881545332 };
        const userLatLng = { lat: Number(LatLngData[0]), lng: Number(LatLngData[1]) };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: LatLng,
        });
        const marker = new google.maps.Marker({
            position: userLatLng,
            map: map,
        });

        // マップの初期設定


        // 野々市市にマーカーを置くやつ
        // const marker = new google.maps.Marker({
        //     position: uluru,
        //     map: map,
        // });
        const infoWindow = new google.maps.InfoWindow();
        const locationButton = document.createElement("button");

        //バス停の座標を入れた配列
        const busStop = [
            [36.519851, 136.609287], //野々市市役所
            [36.521995, 136.608943], //三納
            [36.522823, 136.611629], //老人福祉センター
            [36.522282, 136.613968], //矢作
            [36.523685, 136.615017], //菅原団地
            [36.525586, 136.615326], //菅原小学校
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
            [36.526537, 136.593881], //南ヶ丘病院
            [36.525009, 136.60028], //明倫高校
            [36.523468, 136.60273], //下林郵便局
            [36.523375, 136.604821], //下林
            [36.523178, 136.608368], //位川
        ];
        const busStopMarker = []
        const busStopImage = {
            url: "IMG/busStopIMG.png",
            scaledSize: new google.maps.Size(45, 60)
        }
        //バス停のマーカーをセット
        for (let i = 0; i < script script script busStop.length; i++) {
        busStopMarker[i] = new google.maps.Marker({
            map: map,
            position: { lat: busStop[i][0], lng: busStop[i][1] },
            icon: busStopImage,
        })


        //走行ルートの座標
        const runningPlanCoordinates = [
            { lat: 36.519906, lng: 136.608859 },
            { lat: 36.523082, lng: 136.609277 },
            { lat: 36.522792, lng: 136.611619 },
            { lat: 36.52216793805619, lng: 136.61428795828687 },
            { lat: 36.522584857522176, lng: 136.61440542217895 },
            { lat: 36.52249177192426, lng: 136.61501068751167 },
            { lat: 36.523148462001394, lng: 136.61516078232546 },
            { lat: 36.52407186956526, lng: 136.6150322508045 },
            { lat: 36.52656310209432, lng: 136.61555488607226 },
            { lat: 36.52774518052033, lng: 136.6157658789011 },
            { lat: 36.52744346900605, lng: 136.6181530083362 },
            { lat: 36.527173300855544, lng: 136.62869688824654 },
            { lat: 36.528358436448016, lng: 136.62874294761397 },
            { lat: 36.52831551251951, lng: 136.63002851757955 },
            { lat: 36.52951165044877, lng: 136.63047722067049 },
            { lat: 36.52968999717779, lng: 136.626348379049 },
            { lat: 36.5321973064036, lng: 136.62640262863718 },
            { lat: 36.532227479411084, lng: 136.62461786241758 },
            { lat: 36.5320954711927, lng: 136.62351479373365 },
            { lat: 36.532139001628956, lng: 136.62088959796728 },
            { lat: 36.532452671275834, lng: 136.61868814999417 },
            { lat: 36.53146625739543, lng: 136.61845018889284 },
            { lat: 36.532052466081424, lng: 136.61449955943874 },
            { lat: 36.53216070470513, lng: 136.61259244492385 },
            { lat: 36.53229854885086, lng: 136.6118946147961 },
            { lat: 36.53318168010032, lng: 136.6117550487655 },
            { lat: 36.53298948103725, lng: 136.61005951631094 },
            { lat: 36.53241007187945, lng: 136.61014674507652 },
            { lat: 36.532433783279444, lng: 136.60844020171436 },
            { lat: 36.53284964984321, lng: 136.60841112545455 },
            { lat: 36.53270012504061, lng: 136.60675959415028 },
            { lat: 36.53077408930504, lng: 136.60588748254972 },
            { lat: 36.53035038107203, lng: 136.6073602754152 },
            { lat: 36.530084862197526, lng: 136.60775679760758 },
            { lat: 36.52969543286589, lng: 136.60877013209515 },
            { lat: 36.5291938756406, lng: 136.60859031595098 },
            { lat: 36.52855690789753, lng: 136.60855498813527 },
            { lat: 36.52907819573437, lng: 136.60663392526723 },
            { lat: 36.529232899838824, lng: 136.60495561107285 },
            { lat: 36.5293355106587, lng: 136.6004285003209 },
            { lat: 36.52940911981813, lng: 136.59728992878547 },
            { lat: 36.529196118918875, lng: 136.59631941587384 },
            { lat: 36.526561703321384, lng: 136.5928956938316 },
            { lat: 36.52619363743825, lng: 136.59337728794677 },
            { lat: 36.526936966323085, lng: 136.59438183510753 },
            { lat: 36.527683651511886, lng: 136.59352797001662 },
            { lat: 36.52892979606977, lng: 136.59375162860454 },
            { lat: 36.52895763462876, lng: 136.59326660989288 },
            { lat: 36.53019445195178, lng: 136.59330125408363 },
            { lat: 36.532075155442264, lng: 136.5953896357131 },
            { lat: 36.53209751235575, lng: 136.59629390245902 },
            { lat: 36.52953760374983, lng: 136.59633563785593 },
            { lat: 36.529286079766344, lng: 136.59644693222938 },
            { lat: 36.52929725861511, lng: 136.59643997633216 },
            { lat: 36.52948170958351, lng: 136.5977198615811 },
            { lat: 36.529420225971805, lng: 136.60042570594044 },
            { lat: 36.523523927691656, lng: 136.60017834170114 },
            { lat: 36.52318606166965, lng: 136.60734412699392 },
            { lat: 36.52304173961177, lng: 136.60911928677604 },
            { lat: 36.519906, lng: 136.608859 },
        ];
        //ポリラインのセット
        const runningPath = new google.maps.Polyline({
            path: runningPlanCoordinates,
            geodesic: true,
            strokeColor: "#f44336",
            strokeOpacity: 0.5,
            strokeWeight: 6
        });
        runningPath.setMap(map);

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

        }
    });



    handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
        );

    }
}

window.initMap = initMap;