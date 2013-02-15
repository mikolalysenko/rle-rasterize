`rle-rasterize`
==============
Converts meshes into solid objects represented by narrowband level sets  This library is part of the [`rle-*`](https://github.com/mikolalysenko/rle-csg) collection of libraries for working with multiphase narrowband level sets.

Installation/Usage
==================
First, install the package using npm:

    npm install rle-rasterize
    
Once that's done, you can use it to turn any mesh into a narrowband level set.  For example, here is how you can make a narrowband level set representation of the Stanford bunny:

    var bunny = require("bunny");
    var bunny_rle = require("rle-rasterize")(bunny.cells, bunny.positions);

`require("rle-rasterize")(cells, positions[, faceNormals])`
--------------------------------
Rasterizes a mesh into a voxel grid.  The mesh is rasterized at the resolution of one voxel/unit.  If you want to use a different resolution, you need to transform the mesh first.  Mesh must have at least the following properties:

* `cells`: an array of convex polygons represented by their clockwise oriented indices.
* `positions`: An array of length 3 arrays representing the positions of the mesh vertices.
* `faceNormals`: (Optional) An array of the per-face normals.  If you don't specify this, it will be computed when the function gets called.

Note that the mesh must be a closed oriented manifold for this process to work.  (Otherwise, it would not be a solid obviously).

Returns:  A solid narrowband level set representing the mesh.

Credits
=======
(c) 2013 Mikola Lysenko. BSD
