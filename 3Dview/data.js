var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0.3105489134822541,
        "pitch": -0.13575197076012557,
        "fov": 1.2366429304760869
      },
      "linkHotspots": [
        {
          "yaw": 1.1046757975852728,
          "pitch": -0.03954254018608516,
          "rotation": 0,
          "target": "7-right-entry"
        },
        {
          "yaw": -0.6626608822261062,
          "pitch": -0.03827015004051759,
          "rotation": 0,
          "target": "1-left-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-left-",
      "name": "LEFT ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 2.8969637249173186,
        "pitch": 0.19979910686626567,
        "fov": 1.2366429304760869
      },
      "linkHotspots": [
        {
          "yaw": -0.39574833362107853,
          "pitch": -0.007868963769634973,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -2.6892408780354877,
          "pitch": -0.07164587092351482,
          "rotation": 0,
          "target": "8-centre"
        },
        {
          "yaw": 2.755996343014962,
          "pitch": 0.06114844620820037,
          "rotation": 0,
          "target": "4-left-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-butterfly-wall",
      "name": "BUTTERFLY WALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.842347512378012,
          "pitch": 0.18059583843084503,
          "rotation": 0,
          "target": "3-butterfly"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-butterfly",
      "name": "BUTTERFLY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 2.543339249509687,
        "pitch": -0.10482605245412913,
        "fov": 1.2366429304760869
      },
      "linkHotspots": [
        {
          "yaw": 2.443244263172689,
          "pitch": -0.21093010133203371,
          "rotation": 0,
          "target": "2-butterfly-wall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-left-back",
      "name": "LEFT BACK",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.221484910791208,
          "pitch": -0.16571254182200867,
          "rotation": 0,
          "target": "9-left-replica-room"
        },
        {
          "yaw": 0.9377514671472866,
          "pitch": -0.06844470182774742,
          "rotation": 0,
          "target": "3-butterfly"
        },
        {
          "yaw": 2.5546710168800555,
          "pitch": -0.04496373535024034,
          "rotation": 0,
          "target": "8-centre"
        },
        {
          "yaw": -2.906998986304897,
          "pitch": 0.22330141605488407,
          "rotation": 0,
          "target": "1-left-"
        },
        {
          "yaw": 1.4797058817241249,
          "pitch": -0.01964856472695864,
          "rotation": 0,
          "target": "5-right-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-right-room",
      "name": "RIGHT ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9806173992323792,
          "pitch": 0.09991606490360283,
          "rotation": 0,
          "target": "4-left-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-right-bike-room",
      "name": "RIGHT BIKE ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2523377693025175,
          "pitch": -0.01891752147202652,
          "rotation": 0,
          "target": "8-centre"
        },
        {
          "yaw": 0.9790755245708844,
          "pitch": -0.03277148725825896,
          "rotation": 0,
          "target": "4-left-back"
        },
        {
          "yaw": -0.6017723465360874,
          "pitch": 0.013856325536298897,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-right-entry",
      "name": "RIGHT ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-centre",
      "name": "CENTRE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -0.5294398117423711,
        "pitch": 0.09653568611983587,
        "fov": 1.2366429304760869
      },
      "linkHotspots": [
        {
          "yaw": -0.5983848780397985,
          "pitch": -0.09049368245243272,
          "rotation": 0,
          "target": "4-left-back"
        },
        {
          "yaw": 0.5000326052378057,
          "pitch": -0.17294068579601785,
          "rotation": 0,
          "target": "6-right-bike-room"
        },
        {
          "yaw": -2.209033816939737,
          "pitch": -0.031209567057107535,
          "rotation": 0,
          "target": "1-left-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-left-replica-room",
      "name": "LEFT REPLICA ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-entance-gate",
      "name": "ENTANCE GATE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
