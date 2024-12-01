export const overlays = [
  {
    key: "pal2020",
    name: "Vector overlay, 2020s",
    attribution: "OpenMapTiles / OpenStreetMap Contributors",
    description: "Present day geographic features derived from OpenStreetMap, Wikidata and Natural Earth. Vector tiles generated using OpenMapTiles tools.",
    url: "https://tiler-osm.palopenmaps.org/maps/osm/{z}/{x}/{y}.pbf"
  },
  {
    key: "pal1940",
    name: "Vector overlay, 1940s",
    attribution: "Palestine Open Maps community",
    description: "Crowd-sourced digitisation of \"Palestine 1:20,000\" Survey of Palestine map series from the 1940s. Vector tiles generated using OpenMapTiles tools.",
    url: "https://tiler.palopenmaps.org/maps/osm/{z}/{x}/{y}.pbf",
    edit: "https://pom.masrad.org/edit#background=custom:https://palopenmaps.org/tiles/pal20k-1940s/{z}/{x}/{y}@2x.jpg&disable_features=boundaries&map=",
    is_default: true
  }
];

export const overlayers = [
  {
    "id": "orchard",
    "type": "fill",
    "source-layer": "landuse_areas",
    "minzoom": 0,
    "maxzoom": 24,
    "metadata": {
      "group": "landcover"
    },
    "filter": [
      "==",
        "type",
        "orchard"
    ],
    "paint": {
      "fill-color": "rgba(50, 168, 82, 0.5)",
      // "fill-outline-color": "rgba(50, 168, 82, 1)"
    }
  },
  {
    "id": "orchard_outline",
    "type": "line",
    "source-layer": "landuse_areas",
    "minzoom": 0,
    "maxzoom": 24,
    "metadata": {
      "group": "landcover"
    },
    "filter": [
      "==",
        "type",
        "orchard"
    ],
    "paint": {
      "line-color": "rgba(35, 118, 57, 0.5)",
      "line-width": {
        "stops": [
          [
            12,
            0
          ],
          [
            14,
            1
          ]
        ]
      }
    }
  },
  {
    "id": "building",
    "type": "fill",
    "source-layer": "buildings",
    "minzoom": 13,
    "metadata": {
      "group": "building"
    },
    "filter": [
      "all"
    ],
    "paint": {
      "fill-color": "rgba(128, 128, 128, 0.7)"
    }
  },
  {
    "id": "building_outline",
    "type": "line",
    "source-layer": "buildings",
    "minzoom": 13,
    "metadata": {
      "group": "building"
    },
    "filter": [
      "all"
    ],
    "paint": {
      "line-color": "rgba(96, 96, 96, 1)"
    }
  },
  {
    "id": "pier",
    "type": "fill",
    "source-layer": "other_areas",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "pier"
      ]
    ],
    "paint": {
      "fill-color": "rgba(198, 201, 193, 1)"
    }
  },
  {
    "id": "pier_line",
    "type": "line",
    "source-layer": "other_lines",
    "minzoom": 12,
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "pier"
      ]
    ],
    "paint": {
      "line-color": "rgba(198, 201, 193, 1)",
      "line-width": {
        "stops": [
          [
            12,
            2
          ],
          [
            18,
            7
          ]
        ]
      }
    }
  },
  {
    "id": "aero_areas_outlines",
    "type": "line",
    "source-layer": "transport_areas",
    "minzoom": 12,
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "aerodrome"
      ]
    ],
    "paint": {
      "line-color": "rgba(50, 50, 50, 1)",
      "line-width": 2
    }
  },
  {
    "id": "aero_taxiway_lines",
    "type": "line",
    "source-layer": "transport_lines",
    "minzoom": 12,
    "maxzoom": 24,
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "taxiway"
      ]
    ],
    "paint": {
      "line-color": "rgba(40, 40, 40, 1)",
      "line-dasharray": [
        3,
        1
      ],
      "line-width": {
        "stops": [
          [
            12,
            1
          ],
          [
            18,
            8
          ]
        ]
      }
    }
  },
  {
    "id": "aero_runway_lines",
    "type": "line",
    "source-layer": "transport_lines",
    "minzoom": 12,
    "maxzoom": 24,
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "runway"
      ]
    ],
    "paint": {
      "line-color": "rgba(30, 30, 30, 1)",
      "line-width": {
        "stops": [
          [
            12,
            1.5
          ],
          [
            18,
            15
          ]
        ]
      }
    }
  },
  {
    "id": "aero_apron_lines",
    "type": "line",
    "source-layer": "transport_lines",
    "minzoom": 12,
    "maxzoom": 24,
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "apron"
      ]
    ],
    "paint": {
      "line-width": 2,
      "line-color": "rgba(100, 100, 100, 1)"
    }
  },
  {
    "id": "road_rail",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "rail"
      ]
    ],
    "layout": {
      "line-cap": "butt",
      "line-join": "miter"
    },
    "paint": {
      "line-color": "rgba(146, 143, 143, 1)",
      "line-width": {
        "base": 1.4,
        "stops": [
          [
            14,
            0.4
          ],
          [
            15,
            0.75
          ],
          [
            20,
            2
          ]
        ]
      }
    }
  },
  {
    "id": "road_railhatch",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "rail"
      ]
    ],
    "layout": {
      "line-cap": "butt",
      "line-join": "miter"
    },
    "paint": {
      "line-color": "#928F8F",
      "line-dasharray": [
        0.2,
        8
      ],
      "line-width": {
        "base": 1.4,
        "stops": [
          [
            14.5,
            0
          ],
          [
            15,
            3
          ],
          [
            20,
            8
          ]
        ]
      }
    }
  },
  {
    "id": "road_service",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "track",
        "footway",
        "cycleway",
        "path",
        "service",
        "pedestrian"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(240, 240, 240, 1)",
      "line-width": {
        "stops": [
          [
            15,
            1
          ],
          [
            16,
            4
          ],
          [
            20,
            11
          ]
        ]
      }
    }
  },
  {
    "id": "road_residential_case",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "residential"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#cfcdca",
      "line-width": {
        "stops": [
          [
            12,
            0.5
          ],
          [
            13,
            1
          ],
          [
            14,
            4
          ],
          [
            20,
            20
          ]
        ]
      }
    }
  },
  {
    "id": "road_residential",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "residential",
        "unclassified"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(240, 240, 240, 1)",
      "line-width": {
        "stops": [
          [
            13.5,
            0
          ],
          [
            14,
            2.5
          ],
          [
            20,
            18
          ]
        ]
      }
    }
  },
  {
    "id": "road_secondary_case",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "secondary",
        "tertiary"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(129, 130, 124, 1)",
      "line-width": {
        "stops": [
          [
            8,
            1.5
          ],
          [
            20,
            13
          ]
        ]
      }
    }
  },
  {
    "id": "road_secondary",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "secondary",
        "tertiary"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(240, 240, 240, 1)",
      "line-width": {
        "stops": [
          [
            6.5,
            0
          ],
          [
            8,
            0.5
          ],
          [
            20,
            9
          ]
        ]
      }
    }
  },
  {
    "id": "road_trunk_case",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "primary",
        "trunk",
        "trunk_link",
        "motorway_link",
        "primary_link"
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "butt"
    },
    "paint": {
      "line-color": "rgba(129, 130, 124, 1)",
      "line-width": {
        "stops": [
          [
            5,
            0.4
          ],
          [
            6,
            0.7
          ],
          [
            7,
            1.5
          ],
          [
            10,
            2
          ],
          [
            20,
            14
          ]
        ]
      }
    }
  },
  {
    "id": "road_trunk",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "primary",
        "trunk",
        "trunk_link",
        "motorway_link",
        "primary_link"
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round"
    },
    "paint": {
      "line-color": "hsla(50, 81%, 54%, 1)",
      "line-width": {
        "stops": [
          [
            5,
            0
          ],
          [
            7,
            0.8
          ],
          [
            10,
            1.5
          ],
          [
            20,
            11
          ]
        ]
      }
    }
  },
  {
    "id": "roads_subways",
    "type": "line",
    "source-layer": "transport_lines",
    "minzoom": 14,
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "subway"
      ]
    ],
    "paint": {
      "line-color": "rgba(153, 153, 153, 1)",
      "line-width": {
        "stops": [
          [
            14,
            0.7
          ],
          [
            18,
            2
          ]
        ]
      }
    }
  },
  {
    "id": "road_motorway_case",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "motorway"
      ]
    ],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(73, 74, 69, 1)",
      "line-width": {
        "stops": [
          [
            6,
            0.7
          ],
          [
            7,
            1.75
          ],
          [
            10,
            2.5
          ],
          [
            20,
            18
          ]
        ]
      }
    }
  },
  {
    "id": "road_motorway",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "minzoom": 7,
    "filter": [
      "all",
      [
        "in",
        "type",
        "motorway"
      ]
    ],
    "paint": {
      "line-color": "hsla(30, 88%, 64%, 1)",
      "line-width": {
        "stops": [
          [
            7,
            1
          ],
          [
            10,
            1.7
          ],
          [
            20,
            14
          ]
        ]
      }
    }
  },
  {
    "id": "roads_motorway_z4_minzoom",
    "type": "line",
    "source-layer": "transport_lines",
    "metadata": {
      "group": "transport"
    },
    "minzoom": 4,
    "maxzoom": 8,
    "filter": [
      "all",
      [
        ">",
        "min_zoom",
        5
      ]
    ],
    "paint": {
      "line-color": "rgba(149, 150, 143, 1)",
      "line-width": {
        "stops": [
          [
            4,
            0.5
          ],
          [
            8,
            1
          ]
        ]
      }
    }
  },
  {
    "id": "road_motorway_z4",
    "type": "line",
    "source-layer": "transport_lines",
    "minzoom": 4,
    "maxzoom": 8,
    "metadata": {
      "group": "transport"
    },
    "filter": [
      "all",
      [
        "<=",
        "min_zoom",
        5
      ]
    ],
    "paint": {
      "line-color": "rgba(73, 74, 69, 1)",
      "line-width": {
        "stops": [
          [
            4,
            0.5
          ],
          [
            8,
            1
          ]
        ]
      }
    }
  },
  {
    "id": "label_road_name",
    "type": "symbol",
    "source-layer": "transport_lines",
    "minzoom": 14,
    "maxzoom": 24,
    "filter": [
      "!=",
      "type",
      "subway"
    ],
    "metadata": {
      "group": "transport"
    },
    "layout": {
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            " "
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ],
      "text-font": [
        "Noto Sans Regular"
      ],
      "symbol-placement": "line",
      "text-size": {
        "stops": [
          [
            14,
            8
          ],
          [
            15,
            14
          ]
        ]
      },
      "icon-allow-overlap": true,
      "icon-optional": false,
      "text-line-height": 1.5,
      "text-ignore-placement": false
    },
    "paint": {
      "text-halo-color": "rgba(98, 117, 98, 1)",
      "text-halo-width": 0,
      "text-color": "rgba(30, 30, 32, 1)"
    }
  },
  {
    "id": "poi",
    "type": "symbol",
    "source-layer": "amenity_points",
    "minzoom": 14.5,
    "metadata": {
      "group": "poi"
    },
    "filter": [
      "any",
      [
        "==",
        "type",
        "school"
      ],
      [
        "==",
        "type",
        "college"
      ],
      [
        "==",
        "type",
        "place_of_worship"
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        4,
        10,
        10,
        16,
        12
      ],
      "icon-offset": [
        0,
        0
      ],
      "icon-image": "{type}_11",
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-offset": [
        0,
        0.7
      ],
      "icon-size": 1,
      "text-anchor": "top",
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ]
    },
    "paint": {
      "text-color": "rgba(92, 63, 8, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "university",
    "type": "symbol",
    "source-layer": "amenity_points",
    "minzoom": 14.5,
    "metadata": {
      "group": "poi"
    },
    "filter": [
      "==",
      "type",
      "university"
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        4,
        10,
        10,
        16,
        12
      ],
      "icon-offset": [
        0,
        0
      ],
      "icon-image": "college_11",
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-offset": [
        0,
        0.7
      ],
      "icon-size": 1,
      "text-anchor": "top",
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ]
    },
    "paint": {
      "text-color": "rgba(92, 63, 8, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "cinema",
    "type": "symbol",
    "source-layer": "amenity_points",
    "minzoom": 14.5,
    "metadata": {
      "group": "poi"
    },
    "filter": [
      "==",
      "type",
      "cinema"
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        4,
        10,
        10,
        16,
        12
      ],
      "icon-offset": [
        0,
        0
      ],
      "icon-image": "cinema_11",
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-offset": [
        0,
        0.7
      ],
      "icon-size": 1,
      "text-anchor": "top",
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ]
    },
    "paint": {
      "text-color": "rgba(21, 43, 110, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "hospital",
    "type": "symbol",
    "source-layer": "amenity_points",
    "minzoom": 14.5,
    "metadata": {
      "group": "poi"
    },
    "filter": [
      "==",
      "type",
      "hospital"
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        4,
        10,
        10,
        16,
        12
      ],
      "icon-offset": [
        0,
        0
      ],
      "icon-image": "hospital_11",
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-offset": [
        0,
        0.7
      ],
      "icon-size": 1,
      "text-anchor": "top",
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ]
    },
    "paint": {
      "text-color": "rgba(107, 27, 13, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "mountain",
    "type": "symbol",
    "source-layer": "landuse_points",
    "minzoom": 12,
    "metadata": {
      "group": "poi"
    },
    "filter": [
      "==",
      "type",
      "peak"
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        4,
        10,
        10,
        16,
        12
      ],
      "icon-offset": [
        0,
        0
      ],
      "icon-image": "mountain_11",
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-offset": [
        0,
        0.7
      ],
      "icon-size": 1,
      "text-anchor": "top",
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ]
    },
    "paint": {
      "text-color": "rgba(63, 107, 13, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "county_labels_z11",
    "type": "symbol",
    "source-layer": "place_points",
    "minzoom": 8,
    "maxzoom": 20,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "county"
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ],
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        5,
        10,
        11,
        16,
        13
      ],
      "text-transform": "uppercase",
      "symbol-spacing": 250,
      "text-letter-spacing": 0
    },
    "paint": {
      "text-color": "rgba(128, 128, 128, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "city_labels_other_z11",
    "type": "symbol",
    "source-layer": "place_points",
    "minzoom": 11,
    "maxzoom": 20,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "village",
        "suburb",
        "locality",
        "hamlet",
        "islet",
        "neighborhood"
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ],
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        4,
        10,
        10,
        16,
        12
      ]
    },
    "paint": {
      "text-color": "rgba(34, 34, 34, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "city_labels_town_z8",
    "type": "symbol",
    "source-layer": "place_points",
    "minzoom": 8,
    "maxzoom": 20,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "town"
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ],
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        7,
        10,
        12,
        16,
        14
      ]
    },
    "paint": {
      "text-color": "rgba(34, 34, 34, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "city_labels_z11",
    "type": "symbol",
    "source-layer": "place_points",
    "minzoom": 11,
    "maxzoom": 20,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "city"
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ],
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        8,
        10,
        15,
        16,
        16
      ]
    },
    "paint": {
      "text-color": "rgba(34, 34, 34, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "city_capital_labels_z6",
    "type": "symbol",
    "source-layer": "place_points",
    "minzoom": 6,
    "maxzoom": 11,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "city"
      ],
      [
        "==",
        "capital",
        "yes"
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        12,
        10,
        15
      ],
      "icon-offset": [
        0,
        0
      ],
      "icon-image": "dot_11",
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-offset": [
        0,
        0
      ],
      "icon-size": 1,
      "text-anchor": "top",
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ]
    },
    "paint": {
      "text-color": "rgba(34, 34, 34, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "city_labels_z6",
    "type": "symbol",
    "source-layer": "place_points",
    "minzoom": 6,
    "maxzoom": 11,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "city"
      ],
      [
        "!=",
        "capital",
        "yes"
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        6,
        12,
        10,
        15
      ],
      "icon-offset": [
        0,
        0
      ],
      "icon-image": "dot_9",
      "text-font": [
        "Noto Sans Regular"
      ],
      "text-offset": [
        0,
        0
      ],
      "icon-size": 1,
      "text-anchor": "top",
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ]
    },
    "paint": {
      "text-color": "rgba(34, 34, 34, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-blur": 2,
      "text-halo-width": 1
    }
  },
  {
    "id": "state_points_labels_centroids",
    "type": "symbol",
    "source-layer": "land_ohm_centroids",
    "minzoom": 3,
    "maxzoom": 20,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "administrative"
      ],
      [
        "==",
        "admin_level",
        4
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        3,
        9,
        6,
        15,
        10,
        18
      ],
      "symbol-avoid-edges": true,
      "text-transform": "uppercase",
      "symbol-spacing": 25,
      "text-font": [
        "Noto Sans Regular"
      ],
      "symbol-placement": "point",
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ]
    },
    "paint": {
      "text-color": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        0,
        "rgba(32, 45, 32, 1)",
        4,
        "rgba(87, 105, 87, 1)",
        7,
        "rgba(143, 149, 143, 1)"
      ],
      "text-halo-width": 1.5,
      "text-halo-blur": 2,
      "text-halo-color": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        0,
        "rgba(252, 255, 254, 0.75)",
        3,
        "rgba(240, 244, 216, 1)",
        5,
        "rgba(246,247,227, 1)",
        7,
        "rgba(255, 255, 255, 1)"
      ],
      "text-translate-anchor": "map",
      "icon-translate-anchor": "map"
    }
  },
  {
    "id": "state_points_labels",
    "type": "symbol",
    "source-layer": "place_points",
    "minzoom": 3,
    "maxzoom": 20,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "in",
        "type",
        "state",
        "territory"
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        3,
        9,
        6,
        15,
        10,
        18
      ],
      "symbol-avoid-edges": true,
      "text-transform": "uppercase",
      "symbol-spacing": 25,
      "text-font": [
        "Noto Sans Regular"
      ],
      "symbol-placement": "point",
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ]
    },
    "paint": {
      "text-color": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        0,
        "rgba(32, 45, 32, 1)",
        4,
        "rgba(87, 105, 87, 1)",
        7,
        "rgba(143, 149, 143, 1)"
      ],
      "text-halo-width": 1.5,
      "text-halo-blur": 2,
      "text-halo-color": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        0,
        "rgba(252, 255, 254, 0.75)",
        3,
        "rgba(240, 244, 216, 1)",
        5,
        "rgba(246,247,227, 1)",
        7,
        "rgba(255,255,255, 1)"
      ],
      "text-translate-anchor": "map",
      "icon-translate-anchor": "map"
    }
  },
  {
    "id": "statecapital_labels_z10",
    "type": "symbol",
    "source-layer": "populated_places",
    "minzoom": 10,
    "maxzoom": 20,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "==",
        "featurecla",
        "Admin-1 capital"
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ],
      "text-font": [
        "Noto Sans Bold"
      ],
      "text-size": 10,
      "text-transform": "uppercase"
    },
    "paint": {
      "text-color": "rgba(68, 51, 85, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": 1,
      "text-halo-blur": 1
    }
  },
  {
    "id": "country_points_labels-cen",
    "type": "symbol",
    "source-layer": "land_ohm_centroids",
    "maxzoom": 12,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "administrative"
      ],
      [
        "==",
        "admin_level",
        2
      ]
    ],
    "layout": {
      "text-line-height": 1.5,
      "text-size": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        0,
        8,
        3,
        12,
        6,
        20,
        10,
        22
      ],
      "symbol-avoid-edges": false,
      "text-font": [
        "Noto Sans Bold"
      ],
      "symbol-placement": "point",
      "text-justify": "center",
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ],
      "text-max-width": 7
    },
    "paint": {
      "text-color": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        0,
        "#495049",
        5,
        "#6d786d"
      ],
      "text-halo-width": 1.5,
      "text-halo-color": [
        "interpolate",
        [
          "linear"
        ],
        [
          "zoom"
        ],
        0,
        "rgba(252, 255, 254, 0.75)",
        3,
        "rgba(240, 244, 216, 1)",
        5,
        "rgba(246,247,227, 1)",
        7,
        "rgba(255, 255, 255, 1)"
      ],
      "text-halo-blur": 1,
      "text-opacity": 1,
      "text-translate-anchor": "map"
    }
  },
  {
    "id": "icon_helipad",
    "type": "symbol",
    "source-layer": "transport_points",
    "minzoom": 16,
    "maxzoom": 24,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "helipad"
      ]
    ],
    "layout": {
      "icon-image": "heliport_15",
      "icon-size": 1,
      "icon-optional": false
    },
    "paint": {
      "icon-color": "rgba(0, 0, 0, 1)"
    }
  },
  {
    "id": "icon_airport",
    "type": "symbol",
    "source-layer": "transport_areas",
    "minzoom": 12,
    "maxzoom": 24,
    "metadata": {
      "group": "place"
    },
    "filter": [
      "all",
      [
        "==",
        "type",
        "aerodrome"
      ]
    ],
    "layout": {
      "icon-image": "airport_15",
      "icon-size": 1,
      "icon-optional": false,
      "text-field": [
        "concat",
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_ar"
            ]
          ],
          [
            "concat",
            [
              "get",
              "name_ar"
            ],
            "\n"
          ],
          ""
        ],
        [
          "case",
          [
            "boolean",
            [
              "has",
              "name_en"
            ]
          ],
          [
            "get",
            "name_en"
          ],
          [
            "get",
            "name"
          ]
        ]
      ],
      "text-font": [
        "Noto Sans Bold"
      ],
      "text-size": 10,
      "text-offset": [
        0,
        2
      ]
    },
    "paint": {
      "icon-color": "rgba(0, 0, 0, 1)",
      "text-color": "rgba(34, 34, 34, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": 0.5
    }
  }
];