var $         = require("jquery-browserify")
  , rle       = require("rle-core");

$(document).ready(function() {

  //Create viewer
  var viewer = require("gl-shells").makeViewer();
  var volume = require("../index.js")(require("bunny"));
  viewer.updateMesh(require("rle-mesh")(volume));
  
});