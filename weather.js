var vlSpec = {
    "data": {"url": "data/seattle-weather.csv"},
    "mark": "line",
    "encoding": {
      "x": {"timeUnit": "month", "field": "date"},
      "y": {"aggregate": "mean", "field": "precipitation"}
    }
  };

    vegaEmbed('#weather_charts', vlSpec);