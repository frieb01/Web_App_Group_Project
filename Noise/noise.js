/*Noise js for Poverty and Environment webapp

by Ian Mac Moore

See urlNoise link for source data.
*/

var urlNoise = 'https://maps.bts.dot.gov/services/rest/services/Noise/CONUS_ROAD_AND_AVIATION_NOISE_IS_Apr_2018/ImageServer';

// var renderRule = {
//     rasterFunction : "Colormap", 
//     rasterFunctionArguments : {
//         ColorrampName : "Blue Bright"
//     },
//     variableName : "Raster"
// };

var noiseLayer = L.esri.imageMapLayer({
    url: urlNoise,
    opacity: 0.75,
    // style: {
    //   opacity: 0.75,
    //   fillColor: "purple"
    // },
    // "mosaicRule" : {
    //   "mosaicMethod" : "esriMosaicNone",
    //   //"lockRasterIds": [0],
    //   "itemRenderingRule" : {
    //     "rasterFunction" : "Colormap", 
    //     "rasterFunctionArguments" : {
    //       "ColorrampName" : "Blue Bright"
    //     }
    //   }
    // },
    // renderingRule : {
    //     rasterFunction : "Colormap", 
    //     rasterFunctionArguments : {
    //       ColorrampName : "Blue Bright"
    //     },
    //     variableName : "Raster"
    //   },
    // only necessary for old versions of ArcGIS Server
    //f : 'jsapi',
    //format : 'png',
    //renderingRule : renderRule,
    useCors: false
    //getBandIds().setRenderingRule(renderRule).
});

console.log(noiseLayer);



//Use Google palette to get range of rgb colors
var colorRange = palette('sol-base',8);
//console.log(colorRange);

function createNoiseLegend(map) {
    /*Legend specific*/
    var legend = L.control({ position: "bottomleft" });

    legend.onAdd = function(map) {
        var div = L.DomUtil.create("div", "legendNoise");
        div.innerHTML += "<h4>Noise Magnitude</h4>";
        div.innerHTML += `<i style="background: #${colorRange[0]}"></i><span>30dB</span><br>`;
        div.innerHTML += `<i style="background: #${colorRange[4]}"></i><span>80dB</span><br>`;
        div.innerHTML += `<i style="background: #${colorRange[7]}"></i><span>120dB</span><br>`;
        
        return div;
    };

    legend.addTo(map);
}
