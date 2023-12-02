AFRAME.registerComponent("walls", {
    schema: {
      height: { type: "number", default: 3 },
      width: { type: "number", default: 5 },
      depth: { type: "number", default: 3 },
    },
    init: function () {
  
      //x position array
      px = [22.86, -17.35, -12.81, 0.44, -30.18,
        -25.89, 15.61, 29.68, 11.95, -15.40,
        -14.09, 34.76, 2.29, 21.77, 1.57,
        34.72, 12.04, -10.90, 6.48, 15.66];
  
      //z position array
      pz = [54.56, -4.71, 14.91, 56.74, 41.13,
        50.76, 57.84, 7.02, -5.24, -26.82,
        27.59, -35.78, 34.52, 31.32, -9.22,
        26.72, 48.90, 27.24, 9.94, 54.29 ];
  
      for (var i = 0; i < 25; i++) {
        var walls = document.createElement("a-entity");
  
        //Update the position variables values from the array values.
        posX = px[i]; 
        posY = 1.5;
        posZ = pz[i];
  
        position = { x: posX, y: posY, z: posZ };
  
        walls.setAttribute("id", "walls" + i);
        
        walls.setAttribute("position", position);
  
        walls.setAttribute("geometry", {
          primitive: "walls",
          height: this.data.height,
          width: this.data.width,
          depth: this.data.depth,
        });
  
        walls.setAttribute("material", {
          src: "wall-texture.jpg",
          repeat: "1 1 1",
        });
  
        walls.setAttribute("static-body", {});
  
        var sceneEl = document.querySelector("#scene");
        sceneEl.appendChild(walls);
      }
    },
  });
  