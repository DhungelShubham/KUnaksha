var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside",
      "name": "OUTSIDE",
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
          "yaw": 0.10937184076002282,
          "pitch": 0.3393128390836857,
          "rotation": 0,
          "target": "1-inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-inside",
      "name": "INSIDE",
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
        "yaw": 0.5481751593240425,
        "pitch": -0.08639839864684795,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": -3.0841069029540105,
          "pitch": 0.0400959262731746,
          "rotation": 0,
          "target": "0-outside"
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
