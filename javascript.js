 $(document).ready(function() {
      $('#multiscroll').multiscroll({
      	sectionsColor: ['#d3d5fd', '#0b0b0d', '#929aab', '#474a56'],
      	anchors: ['home', 'portfolio', 'apropos', 'contact'],
        navigation: true,
      	navigationTooltips: ['Home', 'Portfolio', 'A propos', 'Contact'],
      	loopBottom: true,
      	loopTop: false,
        scrollingSpeed: 900
      });
  });
