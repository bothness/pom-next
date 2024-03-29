export const overlays = [
  {
    key: "pal2020",
    name: "Vector overlay, 2020s",
    attribution: "OpenMapTiles / OpenStreetMap Contributors",
    description: "Present day geographic features derived from OpenStreetMap, Wikidata and Natural Earth. Vector tiles generated using OpenMapTiles tools.",
    url: "https://cdn.jsdelivr.net/gh/bothness/pom-tiles/pal2020s/{z}/{x}/{y}.pbf"
  },
  {
    key: "pal1940",
    name: "Vector overlay, 1940s",
    attribution: "Palestine Open Maps community",
    description: "Crowd-sourced digitisation of \"Palestine 1:20,000\" Survey of Palestine map series from the 1940s. Vector tiles generated using OpenMapTiles tools.",
    url: "https://cdn.jsdelivr.net/gh/bothness/pom-tiles/pal1940s/{z}/{x}/{y}.pbf",
    edit: "http://data.palopenmaps.org/edit#background=custom:http://palopenmaps.org/tiles/pal20k-1940s/{z}/{x}/{y}@2x.jpg&disable_features=boundaries&map=",
    is_default: true
  }
];

export const overlayers = [
  {
    "id": "building",
    "group": "building",
    "type": "fill",
    "source-layer": "building",
    "paint": {
      "fill-antialias": true,
      "fill-color": {"base": 1, "stops": [[15.5, "#f2eae2"], [16, "#dfdbd7"]]}
    }
  },
  {
    "id": "tunnel-minor-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": ["all", ["==", "brunnel", "tunnel"], ["==", "class", "minor"]],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": {"stops": [[12, 0], [12.5, 1]]},
      "line-width": {
        "base": 1.2,
        "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
      }
    }
  },
  {
    "id": "tunnel-secondary-tertiary-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "tunnel"],
      ["in", "class", "secondary", "tertiary"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": 1,
      "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 17]]}
    }
  },
  {
    "id": "tunnel-trunk-primary-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "tunnel"],
      ["in", "class", "primary", "trunk"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-width": {
        "base": 1.2,
        "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
      }
    }
  },
  {
    "id": "tunnel-motorway-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "tunnel"],
      ["==", "class", "motorway"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-dasharray": [0.5, 0.25],
      "line-width": {
        "base": 1.2,
        "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
      }
    }
  },
  {
    "id": "tunnel-path",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "brunnel", "tunnel"], ["==", "class", "path"]]
    ],
    "paint": {
      "line-color": "#cba",
      "line-dasharray": [1.5, 0.75],
      "line-width": {"base": 1.2, "stops": [[15, 1.2], [20, 4]]}
    }
  },
  {
    "id": "tunnel-service-track",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "tunnel"],
      ["in", "class", "service", "track"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#fff",
      "line-width": {"base": 1.2, "stops": [[15.5, 0], [16, 2], [20, 7.5]]}
    }
  },
  {
    "id": "tunnel-minor",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "tunnel"],
      ["==", "class", "minor_road"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#fff",
      "line-opacity": 1,
      "line-width": {"base": 1.2, "stops": [[13.5, 0], [14, 2.5], [20, 11.5]]}
    }
  },
  {
    "id": "tunnel-secondary-tertiary",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "tunnel"],
      ["in", "class", "secondary", "tertiary"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#fef2b4",
      "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 10]]}
    }
  },
  {
    "id": "tunnel-trunk-primary",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "tunnel"],
      ["in", "class", "primary", "trunk"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#37c256",
      "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
    }
  },
  {
    "id": "tunnel-motorway",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "tunnel"],
      ["==", "class", "motorway"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#06b1ca",
      "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
    }
  },
  {
    "id": "tunnel-railway",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": ["all", ["==", "brunnel", "tunnel"], ["==", "class", "rail"]],
    "paint": {
      "line-color": "#bbb",
      "line-dasharray": [2, 2],
      "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
    }
  },
  {
    "id": "aeroway-taxiway-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "aeroway",
    "minzoom": 12,
    "filter": ["all", ["in", "class", "taxiway"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(153, 153, 153, 1)",
      "line-opacity": 1,
      "line-width": {"base": 1.5, "stops": [[11, 2], [17, 12]]}
    }
  },
  {
    "id": "aeroway-runway-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "aeroway",
    "minzoom": 12,
    "filter": ["all", ["in", "class", "runway"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(153, 153, 153, 1)",
      "line-opacity": 1,
      "line-width": {"base": 1.5, "stops": [[11, 5], [17, 55]]}
    }
  },
  {
    "id": "aeroway-taxiway",
    "group": "transport",
    "type": "line",
    "source-layer": "aeroway",
    "minzoom": 4,
    "filter": [
      "all",
      ["in", "class", "taxiway"],
      ["==", "$type", "LineString"]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255, 255, 255, 1)",
      "line-opacity": {"base": 1, "stops": [[11, 0], [12, 1]]},
      "line-width": {"base": 1.5, "stops": [[11, 1], [17, 10]]}
    }
  },
  {
    "id": "aeroway-runway",
    "group": "transport",
    "type": "line",
    "source-layer": "aeroway",
    "minzoom": 4,
    "filter": [
      "all",
      ["in", "class", "runway"],
      ["==", "$type", "LineString"]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(255, 255, 255, 1)",
      "line-opacity": {"base": 1, "stops": [[11, 0], [12, 1]]},
      "line-width": {"base": 1.5, "stops": [[11, 4], [17, 50]]}
    }
  },
  {
    "id": "highway-motorway-link-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "minzoom": 12,
    "filter": [
      "all",
      ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "class", "motorway_link"]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": 1,
      "line-width": {
        "base": 1.2,
        "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
      }
    }
  },
  {
    "id": "highway-link-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "minzoom": 13,
    "filter": [
      "all",
      ["!in", "brunnel", "bridge", "tunnel"],
      [
        "in",
        "class",
        "primary_link",
        "secondary_link",
        "tertiary_link",
        "trunk_link"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": 1,
      "line-width": {
        "base": 1.2,
        "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
      }
    }
  },
  {
    "id": "highway-minor-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      [
        "all",
        ["!=", "brunnel", "tunnel"],
        ["in", "class", "minor", "service", "track"]
      ]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": {"stops": [[12, 0], [12.5, 1]]},
      "line-width": {
        "base": 1.2,
        "stops": [[12, 0.5], [13, 1], [14, 4], [20, 15]]
      }
    }
  },
  {
    "id": "highway-secondary-tertiary-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "secondary", "tertiary"]
    ],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": 1,
      "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 17]]}
    }
  },
  {
    "id": "highway-primary-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "minzoom": 5,
    "filter": [
      "all",
      ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "primary"]
    ],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": {"stops": [[7, 0], [8, 1]]},
      "line-width": {
        "base": 1.2,
        "stops": [[7, 0], [8, 0.6], [9, 1.5], [20, 22]]
      }
    }
  },
  {
    "id": "highway-trunk-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "minzoom": 5,
    "filter": [
      "all",
      ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "trunk"]
    ],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": {"stops": [[5, 0], [6, 1]]},
      "line-width": {
        "base": 1.2,
        "stops": [[5, 0], [6, 0.6], [7, 1.5], [20, 22]]
      }
    }
  },
  {
    "id": "highway-motorway-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "minzoom": 4,
    "filter": [
      "all",
      ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "class", "motorway"]
    ],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": {"stops": [[4, 0], [5, 1]]},
      "line-width": {
        "base": 1.2,
        "stops": [[4, 0], [5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
      }
    }
  },
  {
    "id": "highway-path",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["!in", "brunnel", "bridge", "tunnel"], ["==", "class", "path"]]
    ],
    "paint": {
      "line-color": "#cba",
      "line-dasharray": [1.5, 0.75],
      "line-width": {"base": 1.2, "stops": [[15, 1.2], [20, 4]]}
    }
  },
  {
    "id": "highway-motorway-link",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "minzoom": 12,
    "filter": [
      "all",
      ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "class", "motorway_link"]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-color": "#06b1ca",
      "line-width": {
        "base": 1.2,
        "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
      }
    }
  },
  {
    "id": "highway-link",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "minzoom": 13,
    "filter": [
      "all",
      ["!in", "brunnel", "bridge", "tunnel"],
      [
        "in",
        "class",
        "primary_link",
        "secondary_link",
        "tertiary_link",
        "trunk_link"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#fea",
      "line-width": {
        "base": 1.2,
        "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
      }
    }
  },
  {
    "id": "highway-minor",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      [
        "all",
        ["!=", "brunnel", "tunnel"],
        ["in", "class", "minor", "service", "track"]
      ]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-color": "#fff",
      "line-opacity": 1,
      "line-width": {"base": 1.2, "stops": [[13.5, 0], [14, 2.5], [20, 11.5]]}
    }
  },
  {
    "id": "highway-secondary-tertiary",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "secondary", "tertiary"]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#fef2b4",
      "line-width": {"base": 1.2, "stops": [[6.5, 0], [8, 0.5], [20, 13]]}
    }
  },
  {
    "id": "highway-primary",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "primary"]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#ff889d",
      "line-width": {"base": 1.2, "stops": [[8.5, 0], [9, 0.5], [20, 18]]}
    }
  },
  {
    "id": "highway-trunk",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "trunk"]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#37c256",
      "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
    }
  },
  {
    "id": "highway-motorway",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "minzoom": 5,
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#06b1ca",
      "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
    }
  },
  {
    "id": "railway-transit",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "class", "transit"], ["!in", "brunnel", "tunnel"]]
    ],
    "paint": {
      "line-color": "hsla(0, 0%, 73%, 0.77)",
      "line-width": {"base": 1.4, "stops": [[14, 0.4], [20, 1]]}
    }
  },
  {
    "id": "railway-transit-hatching",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "class", "transit"], ["!in", "brunnel", "tunnel"]]
    ],
    "paint": {
      "line-color": "hsla(0, 0%, 73%, 0.68)",
      "line-dasharray": [0.2, 8],
      "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 2], [20, 6]]}
    }
  },
  {
    "id": "railway-service",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "class", "rail"], ["has", "service"]]
    ],
    "paint": {
      "line-color": "hsla(0, 0%, 73%, 0.77)",
      "line-width": {"base": 1.4, "stops": [[14, 0.4], [20, 1]]}
    }
  },
  {
    "id": "railway-service-hatching",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "class", "rail"], ["has", "service"]]
    ],
    "paint": {
      "line-color": "hsla(0, 0%, 73%, 0.68)",
      "line-dasharray": [0.2, 8],
      "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 2], [20, 6]]}
    }
  },
  {
    "id": "railway",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      [
        "all",
        ["!has", "service"],
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "rail"]
      ]
    ],
    "paint": {
      "line-color": "#bbb",
      "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
    }
  },
  {
    "id": "railway-hatching",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      [
        "all",
        ["!has", "service"],
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "rail"]
      ]
    ],
    "paint": {
      "line-color": "#bbb",
      "line-dasharray": [0.2, 8],
      "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 3], [20, 8]]}
    }
  },
  {
    "id": "bridge-motorway-link-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "bridge"],
      ["==", "class", "motorway_link"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": 1,
      "line-width": {
        "base": 1.2,
        "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
      }
    }
  },
  {
    "id": "bridge-link-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "bridge"],
      [
        "in",
        "class",
        "primary_link",
        "secondary_link",
        "tertiary_link",
        "trunk_link"
      ]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": 1,
      "line-width": {
        "base": 1.2,
        "stops": [[12, 1], [13, 3], [14, 4], [20, 15]]
      }
    }
  },
  {
    "id": "bridge-secondary-tertiary-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "bridge"],
      ["in", "class", "secondary", "tertiary"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-opacity": 1,
      "line-width": {"base": 1.2, "stops": [[8, 1.5], [20, 28]]}
    }
  },
  {
    "id": "bridge-trunk-primary-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "bridge"],
      ["in", "class", "primary", "trunk"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-width": {
        "base": 1.2,
        "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 26]]
      }
    }
  },
  {
    "id": "bridge-motorway-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "bridge"],
      ["==", "class", "motorway"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-width": {
        "base": 1.2,
        "stops": [[5, 0.4], [6, 0.6], [7, 1.5], [20, 22]]
      }
    }
  },
  {
    "id": "bridge-path-casing",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "brunnel", "bridge"], ["==", "class", "path"]]
    ],
    "paint": {
      "line-color": "#8f8f8f",
      "line-width": {"base": 1.2, "stops": [[15, 1.2], [20, 18]]}
    }
  },
  {
    "id": "bridge-path",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      ["all", ["==", "brunnel", "bridge"], ["==", "class", "path"]]
    ],
    "paint": {
      "line-color": "#cba",
      "line-dasharray": [1.5, 0.75],
      "line-width": {"base": 1.2, "stops": [[15, 1.2], [20, 4]]}
    }
  },
  {
    "id": "bridge-motorway-link",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "bridge"],
      ["==", "class", "motorway_link"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#06b1ca",
      "line-width": {
        "base": 1.2,
        "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
      }
    }
  },
  {
    "id": "bridge-link",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "bridge"],
      [
        "in",
        "class",
        "primary_link",
        "secondary_link",
        "tertiary_link",
        "trunk_link"
      ]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#fea",
      "line-width": {
        "base": 1.2,
        "stops": [[12.5, 0], [13, 1.5], [14, 2.5], [20, 11.5]]
      }
    }
  },
  {
    "id": "bridge-secondary-tertiary",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "bridge"],
      ["in", "class", "secondary", "tertiary"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#fef2b4",
      "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 20]]}
    }
  },
  {
    "id": "bridge-trunk-primary",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "bridge"],
      ["in", "class", "primary", "trunk"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#37c256",
      "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
    }
  },
  {
    "id": "bridge-motorway",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": [
      "all",
      ["==", "brunnel", "bridge"],
      ["==", "class", "motorway"]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#06b1ca",
      "line-width": {"base": 1.2, "stops": [[6.5, 0], [7, 0.5], [20, 18]]}
    }
  },
  {
    "id": "bridge-railway",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": ["all", ["==", "brunnel", "bridge"], ["==", "class", "rail"]],
    "paint": {
      "line-color": "#bbb",
      "line-width": {"base": 1.4, "stops": [[14, 0.4], [15, 0.75], [20, 2]]}
    }
  },
  {
    "id": "bridge-railway-hatching",
    "group": "transport",
    "type": "line",
    "source-layer": "transportation",
    "filter": ["all", ["==", "brunnel", "bridge"], ["==", "class", "rail"]],
    "paint": {
      "line-color": "#bbb",
      "line-dasharray": [0.2, 8],
      "line-width": {"base": 1.4, "stops": [[14.5, 0], [15, 3], [20, 8]]}
    }
  },
  {
    "id": "poi-level-3",
    "group": "place",
    "type": "symbol",
    "source-layer": "poi",
    "minzoom": 16,
    "filter": [
      "all",
      ["==", "$type", "Point"],
      [">=", "rank", 25],
      ["any", ["!has", "level"], ["==", "level", 0]]
    ],
    "layout": {
      "icon-image": "{class}_11",
      "text-anchor": "top",
      "text-field": "{name:latin}\n{name:ar}",
      "text-font": ["Noto Sans Regular"],
      "text-max-width": 9,
      "text-offset": [0, 0.6],
      "text-padding": 2,
      "text-size": 12
    },
    "paint": {
      "text-color": "#666",
      "text-halo-blur": 0.5,
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    }
  },
  {
    "id": "poi-level-2",
    "group": "place",
    "type": "symbol",
    "source-layer": "poi",
    "minzoom": 15,
    "filter": [
      "all",
      ["==", "$type", "Point"],
      ["<=", "rank", 24],
      [">=", "rank", 15],
      ["any", ["!has", "level"], ["==", "level", 0]]
    ],
    "layout": {
      "icon-image": "{class}_11",
      "text-anchor": "top",
      "text-field": "{name:latin}\n{name:ar}",
      "text-font": ["Noto Sans Regular"],
      "text-max-width": 9,
      "text-offset": [0, 0.6],
      "text-padding": 2,
      "text-size": 12
    },
    "paint": {
      "text-color": "#666",
      "text-halo-blur": 0.5,
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    }
  },
  {
    "id": "poi-level-1",
    "group": "place",
    "type": "symbol",
    "source-layer": "poi",
    "minzoom": 14,
    "filter": [
      "all",
      ["==", "$type", "Point"],
      ["<=", "rank", 14],
      ["has", "name"],
      ["any", ["!has", "level"], ["==", "level", 0]]
    ],
    "layout": {
      "icon-image": "{class}_11",
      "text-anchor": "top",
      "text-field": "{name:latin}\n{name:ar}",
      "text-font": ["Noto Sans Regular"],
      "text-max-width": 9,
      "text-offset": [0, 0.6],
      "text-padding": 2,
      "text-size": 12
    },
    "paint": {
      "text-color": "#666",
      "text-halo-blur": 0.5,
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    }
  },
  {
    "id": "poi-railway",
    "group": "place",
    "type": "symbol",
    "source-layer": "poi",
    "minzoom": 13,
    "filter": [
      "all",
      ["==", "$type", "Point"],
      ["has", "name"],
      ["==", "class", "railway"],
      ["==", "subclass", "station"]
    ],
    "layout": {
      "icon-allow-overlap": false,
      "icon-ignore-placement": false,
      "icon-image": "{class}_11",
      "icon-optional": false,
      "text-allow-overlap": false,
      "text-anchor": "top",
      "text-field": "{name:latin}\n{name:ar}",
      "text-font": ["Noto Sans Regular"],
      "text-ignore-placement": false,
      "text-max-width": 9,
      "text-offset": [0, 0.6],
      "text-optional": true,
      "text-padding": 2,
      "text-size": 12
    },
    "paint": {
      "text-color": "#666",
      "text-halo-blur": 0.5,
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    }
  },
  {
    "id": "highway-name-path",
    "group": "place",
    "type": "symbol",
    "source-layer": "transportation_name",
    "minzoom": 15.5,
    "filter": ["==", "class", "path"],
    "layout": {
      "symbol-placement": "line",
      "text-field": "{name:latin} {name:nonlatin}",
      "text-font": ["Noto Sans Regular"],
      "text-rotation-alignment": "map",
      "text-size": {"base": 1, "stops": [[13, 12], [14, 13]]}
    },
    "paint": {
      "text-color": "hsl(30, 23%, 62%)",
      "text-halo-color": "#f8f4f0",
      "text-halo-width": 0.5
    }
  },
  {
    "id": "highway-name-minor",
    "group": "transport",
    "type": "symbol",
    "source-layer": "transportation_name",
    "minzoom": 15,
    "filter": [
      "all",
      ["==", "$type", "LineString"],
      ["in", "class", "minor", "service", "track"]
    ],
    "layout": {
      "symbol-placement": "line",
      "text-field": "{name:latin} {name:nonlatin}",
      "text-font": ["Noto Sans Regular"],
      "text-rotation-alignment": "map",
      "text-size": {"base": 1, "stops": [[13, 12], [14, 13]]}
    },
    "paint": {
      "text-color": "#765",
      "text-halo-blur": 0.5,
      "text-halo-width": 1
    }
  },
  {
    "id": "highway-name-major",
    "group": "transport",
    "type": "symbol",
    "source-layer": "transportation_name",
    "minzoom": 12.2,
    "filter": ["in", "class", "primary", "secondary", "tertiary", "trunk"],
    "layout": {
      "symbol-placement": "line",
      "text-field": "{name:latin} {name:nonlatin}",
      "text-font": ["Noto Sans Regular"],
      "text-rotation-alignment": "map",
      "text-size": {"base": 1, "stops": [[13, 12], [14, 13]]}
    },
    "paint": {
      "text-color": "#765",
      "text-halo-blur": 0.5,
      "text-halo-width": 1
    }
  },
  {
    "id": "airport-label-major",
    "group": "place",
    "type": "symbol",
    "source-layer": "aerodrome_label",
    "minzoom": 10,
    "filter": ["all", ["has", "iata"]],
    "layout": {
      "icon-image": "airport_11",
      "icon-size": 1,
      "text-anchor": "top",
      "text-field": "{name:latin}\n{name:ar}",
      "text-font": ["Noto Sans Regular"],
      "text-max-width": 9,
      "text-offset": [0, 0.6],
      "text-optional": true,
      "text-padding": 2,
      "text-size": 12
    },
    "paint": {
      "text-color": "#666",
      "text-halo-blur": 0.5,
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    }
  },
  {
    "id": "place-other",
    "group": "place",
    "type": "symbol",
    "source-layer": "place",
    "filter": [
      "!in",
      "class",
      "city",
      "town",
      "village",
      "country",
      "continent"
    ],
    "layout": {
      "text-field": "{name:latin}\n{name:ar}",
      "text-font": ["Noto Sans Regular"],
      "text-letter-spacing": 0.1,
      "text-max-width": 9,
      "text-size": {"base": 1.2, "stops": [[12, 10], [15, 14]]},
      "text-transform": "uppercase"
    },
    "paint": {
      "text-color": "#633",
      "text-halo-color": "rgba(255,255,255,0.8)",
      "text-halo-width": 1.2
    },
    "minzoom": 10
  },
  {
    "id": "place-village",
    "group": "place",
    "type": "symbol",
    "source-layer": "place",
    "filter": ["==", "class", "village"],
    "layout": {
      "text-field": "{name:latin}\n{name:ar}",
      "text-font": ["Noto Sans Regular"],
      "text-max-width": 8,
      "text-size": {"base": 1.2, "stops": [[10, 12], [15, 22]]}
    },
    "paint": {
      "text-color": "#333",
      "text-halo-color": "rgba(255,255,255,0.8)",
      "text-halo-width": 1.2
    },
    "minzoom": 10
  },
  {
    "id": "place-town",
    "group": "place",
    "type": "symbol",
    "source-layer": "place",
    "filter": ["==", "class", "town"],
    "layout": {
      "text-field": "{name:latin}\n{name:ar}",
      "text-font": ["Noto Sans Regular"],
      "text-max-width": 8,
      "text-size": {"base": 1.2, "stops": [[10, 14], [15, 24]]}
    },
    "paint": {
      "text-color": "#333",
      "text-halo-color": "rgba(255,255,255,0.8)",
      "text-halo-width": 1.2
    },
    "minzoom": 9
  },
  {
    "id": "place-city",
    "group": "place",
    "type": "symbol",
    "source-layer": "place",
    "filter": ["all", ["==", "class", "city"]],
    "layout": {
      "text-field": "{name:latin}\n{name:ar}",
      "text-font": ["Noto Sans Regular"],
      "text-max-width": 8,
      "text-size": {"base": 1.2, "stops": [[7, 14], [11, 24]]}
    },
    "paint": {
      "text-color": "#333",
      "text-halo-color": "rgba(255,255,255,0.8)",
      "text-halo-width": 1.2
    }
  }
];