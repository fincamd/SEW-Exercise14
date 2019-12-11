var miMapa = new Object();

function initMap() {
    var centro = { lat: 53.136267, lng: 12.826394 };
    var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapaDinamicoGoogleDeterminado'), {
        zoom: 8,
        center: centro,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker({ position: centro, map: mapaGeoposicionado });

    var ctaLayer = new google.maps.KmlLayer({
        url: 'https://fincamd.github.io/SEW-KMLTask/rutas_turisticas_kml.xml',
        map: map
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: Ha fallado la geolocalización' :
        'Error: Su navegador no soporta geolocalización');
    infoWindow.open(mapaGeoposicionado);
}

miMapa.initMap = initMap;