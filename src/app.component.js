(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'static/templates/app.component.html'
    })
    .Class({
      constructor: function(){},
      ngOnInit: function(){
          console.log("TESTING 12")
          var map = L.map('map').setView([39.2854197594374, -76.61796569824219], 12);
          L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
              minZoom: 0,
              maxZoom: 18,
              attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(map);
      }
    });
})(window.app || (window.app = {}));
