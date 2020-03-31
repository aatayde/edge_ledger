// Initializs & add the map 
function initMap() {
  // your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, position at location
  const marker = new google.maps.Marker({ poition: loc, map: map });
}
// Opaticy on navbar is not working properly 
// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 80
      },
      800
    );
  }
});