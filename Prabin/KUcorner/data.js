var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "entry",
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
        "yaw": 0.07927854660168343,
        "pitch": -0.5493987277299333,
        "fov": 1.234166450747243
      },
      "linkHotspots": [
        {
          "yaw": -0.048648165731194126,
          "pitch": 0.002416831887492421,
          "rotation": 0,
          "target": "1-enterance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-enterance",
      "name": "enterance",
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
          "yaw": 1.0811218787328016,
          "pitch": 0.0067912414390498554,
          "rotation": 0,
          "target": "8-right-entry"
        },
        {
          "yaw": -1.3929053572357226,
          "pitch": 0.058590063976321716,
          "rotation": 0,
          "target": "2-left-entry-1"
        },
        {
          "yaw": 2.945357792282037,
          "pitch": 0.0632644681616874,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-left-entry-1",
      "name": "left entry 1",
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
        "yaw": 1.3185037963431032,
        "pitch": -0.4041121644220542,
        "fov": 1.3335580255368609
      },
      "linkHotspots": [
        {
          "yaw": -2.7962394149300707,
          "pitch": 0.12200739350921452,
          "rotation": 0,
          "target": "1-enterance"
        },
        {
          "yaw": 1.5971310993154821,
          "pitch": 0.04404321872641148,
          "rotation": 0,
          "target": "12-left-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5082113191322488,
          "pitch": -0.866900076424276,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-butterfly-wall",
      "name": "butterfly wall",
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
        "yaw": 2.8978159609485417,
        "pitch": 0.4403725070972815,
        "fov": 1.234166450747243
      },
      "linkHotspots": [
        {
          "yaw": 2.7955450565429967,
          "pitch": 0.268117169640286,
          "rotation": 0,
          "target": "4-butterflyroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-butterflyroom",
      "name": "butterflyroom",
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
        "yaw": 1.9939865798220504,
        "pitch": -0.023141759425243436,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": 0.48072086639821876,
          "pitch": 0.015556843790756503,
          "rotation": 0,
          "target": "5-back"
        },
        {
          "yaw": 2.4492409735470453,
          "pitch": 0.09821312415639127,
          "rotation": 0,
          "target": "3-butterfly-wall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.508551750769165,
          "pitch": -0.11913177573890543,
          "title": "butterflies",
          "text": "butterflies are pinned and stored in cases to preserve"
        }
      ]
    },
    {
      "id": "5-back",
      "name": "back",
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
          "yaw": -1.225961179540878,
          "pitch": -0.09832396608901917,
          "rotation": 0,
          "target": "11-replica-room"
        },
        {
          "yaw": -2.2865147012703595,
          "pitch": 0.0948492495109523,
          "rotation": 0,
          "target": "17-left-7"
        },
        {
          "yaw": 2.669220139708081,
          "pitch": -0.00928977323627933,
          "rotation": 0,
          "target": "10-middle"
        },
        {
          "yaw": 0.7677885550792372,
          "pitch": -0.07257073113990842,
          "rotation": 0,
          "target": "4-butterflyroom"
        },
        {
          "yaw": 1.50614848192121,
          "pitch": -0.036025137208726576,
          "rotation": 0,
          "target": "6-bikeroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bikeroom",
      "name": "bikeroom",
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
        "yaw": -2.054495585493381,
        "pitch": 0.34040838909793436,
        "fov": 1.3318868404527977
      },
      "linkHotspots": [
        {
          "yaw": -0.9734914099198821,
          "pitch": 0.07760773793106779,
          "rotation": 0,
          "target": "5-back"
        },
        {
          "yaw": -3.007824646552372,
          "pitch": 0.18574053622985964,
          "rotation": 0,
          "target": "7-bikeroom2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5075026633267985,
          "pitch": -0.3986769592465844,
          "title": "Trophies",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "7-bikeroom2",
      "name": "bikeroom2",
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
          "yaw": 1.4404175861841555,
          "pitch": 0.16547703302892813,
          "rotation": 0,
          "target": "6-bikeroom"
        },
        {
          "yaw": -0.58438362417143,
          "pitch": 0.07650385088752998,
          "rotation": 0,
          "target": "8-right-entry"
        },
        {
          "yaw": 0.129203550481515,
          "pitch": -0.003657179716736181,
          "rotation": 0,
          "target": "10-middle"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0173571664835936,
          "pitch": -0.34355022939158,
          "title": "Old bike&nbsp;",
          "text": "model of old motor bike"
        }
      ]
    },
    {
      "id": "8-right-entry",
      "name": "right entry",
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
          "yaw": -0.187373706285765,
          "pitch": 0.16382412503146426,
          "rotation": 0,
          "target": "1-enterance"
        },
        {
          "yaw": -3.0807553075403895,
          "pitch": 0.25553520886713343,
          "rotation": 0,
          "target": "7-bikeroom2"
        },
        {
          "yaw": 0.8533063400269931,
          "pitch": 0.19796884132608739,
          "rotation": 0,
          "target": "9-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-front",
      "name": "front",
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
          "yaw": 1.755672781484451,
          "pitch": -0.036664689819939866,
          "rotation": 0,
          "target": "10-middle"
        },
        {
          "yaw": -0.06323203387365517,
          "pitch": 0.09673508457478164,
          "rotation": 0,
          "target": "13-left-3"
        },
        {
          "yaw": -2.87014707926712,
          "pitch": 0.02547402275576971,
          "rotation": 0,
          "target": "8-right-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7050545920692421,
          "pitch": -0.46630079634955024,
          "title": "Trophies",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "10-middle",
      "name": "middle",
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
          "yaw": -0.6177608851938814,
          "pitch": -0.013632273135282702,
          "rotation": 0,
          "target": "5-back"
        },
        {
          "yaw": 2.519074950743665,
          "pitch": 0.05861991651537224,
          "rotation": 0,
          "target": "9-front"
        },
        {
          "yaw": -2.2074387955250625,
          "pitch": 0.18042995611025248,
          "rotation": 0,
          "target": "14-left-4"
        },
        {
          "yaw": 0.9639535345860697,
          "pitch": -0.13303142122313183,
          "rotation": 0,
          "target": "7-bikeroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-replica-room",
      "name": "replica room",
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
          "yaw": -0.9648204833499356,
          "pitch": 0.23121918371168348,
          "rotation": 0,
          "target": "5-back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1281558809027512,
          "pitch": -0.02524857645468437,
          "title": "Typewriter",
          "text": "<br>"
        },
        {
          "yaw": 3.0106965508724546,
          "pitch": -0.24836938522944507,
          "title": "Portrait",
          "text": "photo of founding&nbsp;vice chancellor"
        }
      ]
    },
    {
      "id": "12-left-2",
      "name": "left 2",
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
        "yaw": 0.9080997156191852,
        "pitch": -0.21772974858652816,
        "fov": 1.234166450747243
      },
      "linkHotspots": [
        {
          "yaw": 1.9056602654603987,
          "pitch": 0.08444156688291748,
          "rotation": 0,
          "target": "13-left-3"
        },
        {
          "yaw": -1.4683692486192879,
          "pitch": 0.13532107302416385,
          "rotation": 0,
          "target": "2-left-entry-1"
        },
        {
          "yaw": -2.359440484706912,
          "pitch": 0.12435919820715746,
          "rotation": 0,
          "target": "1-enterance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.357165577446656,
          "pitch": -0.8071862939954819,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "13-left-3",
      "name": "left 3",
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
        "yaw": -0.2720695576558043,
        "pitch": -0.521150118907979,
        "fov": 1.234166450747243
      },
      "linkHotspots": [
        {
          "yaw": -2.1754148050960467,
          "pitch": 0.10912064266710075,
          "rotation": 0,
          "target": "12-left-2"
        },
        {
          "yaw": -3.11158887180736,
          "pitch": 0.08582500428430073,
          "rotation": 0,
          "target": "9-front"
        },
        {
          "yaw": 2.5373772122224043,
          "pitch": -0.018282882834775194,
          "rotation": 0,
          "target": "10-middle"
        },
        {
          "yaw": 1.5128368266196937,
          "pitch": 0.033552797913255716,
          "rotation": 0,
          "target": "14-left-4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2981989383151742,
          "pitch": -0.8107631246251294,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "14-left-4",
      "name": "left 4",
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
          "yaw": 1.666921750394689,
          "pitch": 0.08754804679227846,
          "rotation": 0,
          "target": "15-left-5"
        },
        {
          "yaw": 2.852134979479552,
          "pitch": 0.024538526436323593,
          "rotation": 0,
          "target": "10-middle"
        },
        {
          "yaw": -2.758838227397705,
          "pitch": 0.03614092792288304,
          "rotation": 0,
          "target": "9-front"
        },
        {
          "yaw": -1.8221902383661224,
          "pitch": 0.08457224298334864,
          "rotation": 0,
          "target": "13-left-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.14719757314516002,
          "pitch": -0.7916761061325399,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "15-left-5",
      "name": "left 5",
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
          "yaw": 1.7685391079601729,
          "pitch": 0.16726589950536308,
          "rotation": 0,
          "target": "16-left-6"
        },
        {
          "yaw": 2.9912118523041347,
          "pitch": 0.07612986744638839,
          "rotation": 0,
          "target": "10-middle"
        },
        {
          "yaw": -1.9322403008577531,
          "pitch": 0.3106750112241752,
          "rotation": 0,
          "target": "14-left-4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.05653176881615707,
          "pitch": -0.7186227423100995,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "16-left-6",
      "name": "left 6",
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
          "yaw": 1.7368610265400823,
          "pitch": 0.15732269510712804,
          "rotation": 0,
          "target": "17-left-7"
        },
        {
          "yaw": -3.135515144340019,
          "pitch": -0.010423823301110247,
          "rotation": 0,
          "target": "10-middle"
        },
        {
          "yaw": -1.858662118753367,
          "pitch": 0.1875896654054401,
          "rotation": 0,
          "target": "15-left-5"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5877042259246839,
          "pitch": -0.7037823738108955,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "17-left-7",
      "name": "left 7",
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
        "yaw": 1.056132759213643,
        "pitch": -0.23687494356688177,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": 2.544791165182067,
          "pitch": 0.16379752984270546,
          "rotation": 0,
          "target": "5-back"
        },
        {
          "yaw": -1.8953799192011207,
          "pitch": 0.23923512205364084,
          "rotation": 0,
          "target": "16-left-6"
        },
        {
          "yaw": -2.81640788439832,
          "pitch": 0.01428784758633661,
          "rotation": 0,
          "target": "10-middle"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5475314732777505,
          "pitch": -0.7104877307328259,
          "title": "Title",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
