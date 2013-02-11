var $         = require("jquery-browserify")
  , rle       = require("rle-core")
  , numeric   = require("numeric");

$(document).ready(function() {

  //Create viewer
  var viewer = require("gl-shells").makeViewer();
  
  var bunny = require("bunny");
  var volume = require("../index.js")(
    bunny.cells,
    bunny.positions
  );
  viewer.updateMesh(require("rle-mesh")(volume));
  
});