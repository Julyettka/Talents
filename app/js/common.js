/*map*/
    function initMap() {
        const uluru = {lat: 50.435567, lng: 30.513601};
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        const marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

