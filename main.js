/* jshint curly:true, debug:true */
/* globals $, firebase */

new Vue ({
  el: '#wrapper',
  data:{
    activeTab: 'top',
  },
});

const slide = () => {
  $('.slides').slick({
  autoplay: true,
  autoplaySpeed: 5500,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  cssEase: 'linear'
  });
};
slide();

function initMap() {
    const istanbul = {lat: 40.9992124, lng: 28.9709707};
    const istanbul_map = new google.maps.Map(
        document.getElementById('map_1'), {zoom: 7, center: istanbul});
    const istanbul_marker = new google.maps.Marker({position: istanbul, map: istanbul_map});
    
    const cappadocia = {lat: 38.642177, lng: 34.818121};
    const cappadocia_map = new google.maps.Map(
        document.getElementById('map_2'), {zoom: 7, center: cappadocia});
    const cappadocia_marker = new google.maps.Marker({position: cappadocia, map: cappadocia_map});
    
    const efes = {lat: 37.9412238, lng: 27.3382162};
    const efes_map = new google.maps.Map(
        document.getElementById('map_3'), {zoom: 8, center: efes});
    const efes_marker = new google.maps.Marker({position: efes, map: efes_map});
    
    const konya = {lat: 37.871267, lng: 32.5030415};
    const konya_map = new google.maps.Map(
        document.getElementById('map_4'), {zoom: 7, center: konya});
    const konya_marker = new google.maps.Marker({position: konya, map: konya_map});
    
    const pamukkale = {lat: 37.9228109, lng: 29.1245748};
    const pamukkale_map = new google.maps.Map(
        document.getElementById('map_5'), {zoom: 9, center: pamukkale});
    const pamukkale_marker = new google.maps.Marker({position: pamukkale, map: pamukkale_map});
    
    const mardin = {lat: 37.3136189, lng: 40.7367722};
    const mardin_map = new google.maps.Map(
        document.getElementById('map_6'), {zoom: 7, center: mardin});
    const mardin_marker = new google.maps.Marker({position: mardin, map: mardin_map});
}
