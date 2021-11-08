const data = {
  title: "Colour Palette",
  palettes: [
    {
      title: "Primary Colours",
      colors: [
        { name: "Dark Blue", value: "#002544" },
        { name: "AFL", value: "#cf0a2c" },
      ],
    },
    {
      title: "Secondary Colours",
      colors: [
        { name: "Mid Blue", value: "#3082c0" },
        { name: "Light Blue", value: "#00c0f7" },
        { name: "Supercoach", value: "#399c07" },
      ],
    },
    {
      title: "Greys",
      colors: [
        { name: "Dark Grey", value: "#303030" },
        { name: "Storm", value: "#5e6d79" },
        { name: "Grey", value: "#9aa7b2" },
        { name: "Cloud", value: "#e7eaee" },
        { name: "Smoke", value: "#f2f3f4" },
      ],
    },
    {
      title: "Yellow through Blue Gradient",
      colors: [
        { name: "Yellow (960 < w)", value: "#ecdb60" },
        { name: "Light Green (768 < w <= 960)", value: "#a1cd73" },
        { name: "Mid Green (640 < w <= 768)", value: "#6fb37a" },
        { name: "Teal (530 < w <= 640)", value: "#3f9a82" },
        { name: "Dark Green (480 < w <= 530)", value: "#427676" },
        { name: "Dark Blue (w <= 480)", value: "#3b596a" },
      ],
    },
    {
      title: "AFL Team Colours",
      colors: [
        { name: "ADEL", value: "#fcdc01" },
        { name: "BL", value: "#8b1b3f" },
        { name: "CARL", value: "#1a3c68" },
        { name: "COLL", value: "#000" },
        { name: "ESS", value: "#d0112b" },
        { name: "FRE", value: "#542c89" },
        { name: "GEEL", value: "#00295d" },
        { name: "GCFC", value: "#ff4228" },
        { name: "GWS", value: "#ff8300" },
        { name: "HAW", value: "#682b13" },
        { name: "MELB", value: "#a41e34" },
        { name: "NMFC", value: "#002f87" },
        { name: "PORT", value: "#0099a8" },
        { name: "RICH", value: "#ffcc00" },
        { name: "STK", value: "#3c3c3c" },
        { name: "SYD", value: "#e31e30" },
        { name: "WCE", value: "#0d2240" },
        { name: "WB", value: "#003bb9" },
      ],
    },
    {
      title: "Smartline Colours",
      colors: [
        { name: "ReasonML Red", value: "#db4d3f" },
        { name: "Pale Yellow", value: "#f9ca5e" },
        { name: "Green", value: "#3cca5e" },
        { name: "Blue", value: "#056cc1" },
      ],
    },
    {
      title: "Atlassian",
      colors: [
        { name: "Green", value: "#36b37d" },
        { name: "Yellow", value: "#ffc400" },
        { name: "Orange", value: "#ff7453" },
        { name: "Purple", value: "#6453c0" },
        { name: "Petrol Blue", value: "#243857" },
      ],
    },
    {
      title: "Greens",
      colors: [
        { name: "Dark", value: "#1d6755" },
        { name: "Bright", value: "#11994c" },
        { name: "Medium", value: "#4ead77" },
        { name: "Pale", value: "#bad2c4" },
      ],
    },
  ],
};

new Vue({
  el: "#app",
  data,
});
