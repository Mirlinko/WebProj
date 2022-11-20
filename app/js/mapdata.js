var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "250", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
    //State defaults
    state_description: "<img style=\"float:left; margin-right: 20px;\" src=\"/static/img/finch.png\" width=\"64\" height=\"64\" /><ul style=\"width: 175px\"; float: left;><li>Add images</li><li>Use <code>&lt;html&gt;</code></li><li style=\"color: #d13c12\">Change color</li><li style=\"font-family: Monospace\">Change Font</li></ul>",
    state_color: "rgb(240, 240, 240)",
    state_hover_color: "#d13c12",
    state_image_color: "#ffffff",
    state_url: "",
    state_image_url: "",
    state_image_position: "",
    all_states_inactive: "no",
    all_states_zoomable: "",
    border_size: 1.5,
    border_color: "#ffffff",
    
    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: "0.8",
    location_size: "20",
    location_type: "circle",
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#silver",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      hide: "yes",
      inactive: "yes"
    },
    AK: {
      name: "Alaska",
      hide: "yes",
      inactive: "yes",
      color: "white"
    },
    FL: {
      name: "Florida",
      inactive: "no",
      hide: "no"
    },
    NH: {
      name: "New Hampshire",
      hide: "no",
      inactive: "no"
    },
    VT: {
      name: "Vermont",
      hide: "no",
      inactive: "no"
    },
    ME: {
      name: "Maine",
      hide: "no",
      inactive: "no"
    },
    RI: {
      name: "Rhode Island",
      hide: "no",
      inactive: "no"
    },
    NY: {
      name: "New York",
      hide: "no",
      inactive: "no"
    },
    PA: {
      name: "Pennsylvania",
      hide: "no",
      inactive: "no"
    },
    NJ: {
      name: "New Jersey",
      hide: "no",
      inactive: "no"
    },
    DE: {
      name: "Delaware",
      hide: "no",
      inactive: "no"
    },
    MD: {
      name: "Maryland",
      hide: "no",
      inactive: "no"
    },
    VA: {
      name: "Virginia",
      hide: "no",
      inactive: "no"
    },
    WV: {
      name: "West Virginia",
      hide: "no",
      inactive: "no"
    },
    OH: {
      name: "Ohio",
      hide: "no",
      inactive: "no"
    },
    IN: {
      name: "Indiana",
      hide: "no",
      inactive: "no"
    },
    IL: {
      name: "Illinois",
      hide: "no",
      inactive: "no"
    },
    CT: {
      name: "Connecticut",
      hide: "no",
      inactive: "no"
    },
    WI: {
      name: "Wisconsin",
      hide: "no",
      inactive: "no"
    },
    NC: {
      name: "North Carolina",
      hide: "no",
      inactive: "no"
    },
    DC: {
      name: "District of Columbia",
      hide: "no",
      inactive: "no"
    },
    MA: {
      name: "Massachusetts",
      hide: "no",
      inactive: "no"
    },
    TN: {
      name: "Tennessee",
      hide: "no",
      inactive: "no"
    },
    AR: {
      name: "Arkansas",
      hide: "no",
      inactive: "no"
    },
    MO: {
      name: "Missouri",
      hide: "no",
      inactive: "no"
    },
    GA: {
      name: "Georgia",
      hide: "no",
      inactive: "no"
    },
    SC: {
      name: "South Carolina",
      hide: "no",
      inactive: "no"
    },
    KY: {
      name: "Kentucky",
      hide: "no",
      inactive: "no"
    },
    AL: {
      name: "Alabama",
      hide: "no",
      inactive: "no"
    },
    LA: {
      name: "Louisiana",
      hide: "no",
      inactive: "no"
    },
    MS: {
      name: "Mississippi",
      hide: "no",
      inactive: "no"
    },
    IA: {
      name: "Iowa",
      hide: "no",
      inactive: "no"
    },
    MN: {
      name: "Minnesota",
      hide: "no",
      inactive: "no"
    },
    OK: {
      name: "Oklahoma",
      hide: "no",
      inactive: "no"
    },
    TX: {
      name: "Texas",
      hide: "no",
      inactive: "no"
    },
    NM: {
      name: "New Mexico",
      hide: "no",
      inactive: "no"
    },
    KS: {
      name: "Kansas",
      hide: "no",
      inactive: "no"
    },
    NE: {
      name: "Nebraska",
      hide: "no",
      inactive: "no"
    },
    SD: {
      name: "South Dakota",
      hide: "no",
      inactive: "no"
    },
    ND: {
      name: "North Dakota",
      hide: "no",
      inactive: "no"
    },
    WY: {
      name: "Wyoming",
      hide: "no",
      inactive: "no"
    },
    MT: {
      name: "Montana",
      border_hover_color: "#d13c12",
      image_size: 0.5,
      hide: "no",
      inactive: "no"
    },
    CO: {
      name: "Colorado",
      hide: "no",
      inactive: "no"
    },
    UT: {
      name: "Utah",
      hide: "no",
      inactive: "no"
    },
    AZ: {
      name: "Arizona",
      hide: "no",
      inactive: "no"
    },
    NV: {
      name: "Nevada",
      hide: "no",
      inactive: "no"
    },
    OR: {
      name: "Oregon",
      hide: "no",
      inactive: "no"
    },
    WA: {
      name: "Washington",
      hide: "no",
      inactive: "no"
    },
    CA: {
      name: "California",
      hide: "no",
      inactive: "no"
    },
    MI: {
      name: "Michigan",
      hide: "no",
      inactive: "no"
    },
    ID: {
      name: "Idaho",
      hide: "no",
      inactive: "no"
    },
    GU: {
      name: "Guam",
      hide: "yes",
      inactive: "no"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes",
      inactive: "no"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes",
      inactive: "no"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes",
      inactive: "no"
    }
  },
  locations: {},
  regions: {},
  labels: {},
  legend: {
    entries: []
  }
};