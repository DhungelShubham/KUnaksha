var APP_DATA = {
  "scenes": [
    {
      "id": "0-ground-floor",
      "name": "Ground Floor",
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
          "yaw": -0.25769345051431714,
          "pitch": 0.2914044525187247,
          "rotation": 0,
          "target": "1-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stairs",
      "name": "Stairs",
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
          "yaw": 0.14465708638458707,
          "pitch": 0.006393091843905907,
          "rotation": 0,
          "target": "0-ground-floor"
        },
        {
          "yaw": -1.1304314269640532,
          "pitch": -0.42055848232690174,
          "rotation": 0,
          "target": "2-2nd-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-2nd-floor",
      "name": "2nd Floor",
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
          "yaw": -2.5368606703083465,
          "pitch": 0.23469333293481753,
          "rotation": 0,
          "target": "1-stairs"
        },
        {
          "yaw": 2.931787489916009,
          "pitch": 0.11940833141787621,
          "rotation": 0,
          "target": "3-top-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-top-floor",
      "name": "Top Floor",
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
          "yaw": 1.4837657525160557,
          "pitch": 0.036450422287597206,
          "rotation": 0,
          "target": "2-2nd-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
