
  // Assign the specification to a local variable vlSpec.
  var vlSpec = {
    "data": {
      "values": [
        {"date": "Sun Feb 12 2017", "value": 10, "symbol": "pages"}, {"date": "Sun Feb 12 2017", "value": .5, "symbol": "hours"}, {"date": "Sun Feb 12 2017", "value": 0, "symbol": "goals"},
        {"date": "Sat Feb 11 2017", "value": 18, "symbol": "pages"}, {"date": "Sat Feb 11 2017", "value": 1, "symbol": "hours"}, {"date": "Sat Feb 11 2017", "value": 1, "symbol": "goals"},
        {"date": "Fri Feb 10 2017", "value": 52, "symbol": "pages"}, {"date": "Fri Feb 10 2017", "value": 4, "symbol": "hours"}, {"date": "Fri Feb 10 2017", "value": 3, "symbol": "goals"},
        {"date": "Thu Feb 09 2017", "value": 30, "symbol": "pages"}, {"date": "Thu Feb 09 2017", "value": 2.5, "symbol": "hours"}, {"date": "Thu Feb 09 2017", "value": 2, "symbol": "goals"},
        {"date": "Wed Feb 08 2017", "value": 32, "symbol": "pages"}, {"date": "Wed Feb 08 2017", "value": 2, "symbol": "hours"}, {"date": "Wed Feb 08 2017", "value": 1, "symbol": "goals"}
      ]
    },
    "mark": "line",
    "encoding": {
      "x": {"field": "date", "type": "temporal"},
      "y": {"field": "value", "type": "quantitative"},
      "color":{"field":"symbol", "type":"nominal"}
      },
    "width": 500,
    "height": 300
  };
  var embedSpec = {
    mode: "vega-lite",  // Instruct Vega-Embed to use the Vega-Lite compiler
    spec: vlSpec
    // You can add more vega-embed configuration properties here. 
    // See https://github.com/vega/vega/wiki/Embed-Vega-Web-Components#configuration-propeties for more information.
  };
  // Embed the visualization in the container with id `vis`
  vg.embed("#vis", embedSpec, function(error, result) {
    // Callback receiving the View instance and parsed Vega spec
    // result.view is the View, which resides under the '#vis' element
  });