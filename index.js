var urls = {
  "blogpost": "https://github.com/Aut520", 
  "crittercreator": "https://github.com/Aut520",
  "voxeljscom": "https://github.com/Aut520",
  "copy": "https://github.com/Aut520",
  "modulearticle": "https://github.com/Aut520",
  "blockplot": "https://github.com/Aut520",
  "voxelcreator": "https://github.com/Aut520",
  "three": "https://github.com/Aut520",
  "npm": "https://github.com/Aut520",
  "node": "https://github.com/Aut520",
  "browserify": "https://github.com/Aut520",
  "beefy": "https://github.com/Aut520",
  "gifblocks": "https://github.com/Aut520m",
  "drone": "https://github.com/Aut520",
  "craft": "https://github.com/Aut520",
  "skin": "https://github.com/Aut520",
  "archiveroom": "https://github.com/Aut520",
  "nyc": "https://github.com/Aut520",
  "floodfill": "https://github.com/Aut520"
}

var slides = Object.keys(urls)

var game = require('voxel-hello-world')({
  texturePath: "./images/",
  playerSkin: "./images/player.png",
  materials: ["yellow"].concat(slides),
  generateVoxelChunks: false,
  chunkDistance: 1
})

var z = -5
var y = 3
slides.map(function(slide) {
  game.setBlock([0, y, z], slide)
  z += 2
  if (z > 5) {
    z = -5
    y += 2
  }
})

game.on('setBlock', function(pos, val, old) {
  if (old === 1 || val === 1) return
  var url = urls[slides[old - 2]]
  var win = window.open(url)
})

game.interact.on('release', function() { game.paused = true })
game.interact.on('attain', function() { game.paused = false })

window.game = game
