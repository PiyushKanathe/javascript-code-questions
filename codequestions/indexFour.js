// Create a C character-shaped element using HTML and CSS(Refer to SS).
// 1. Implement vanilla JavaScript to handle tile clicks.
// 2. Utilize CSS animations to transition the tile colors.
// 3. When a tile is clicked, it should smoothly transition to green,
//     and upon subsequent clicks, toggle between green and white.
// 4. If all tiles are clicked, they should smoothly transition to
//     white in a sequential order from the first to the last.
//     For example, if tile 2 is clicked first, followed by tile 3,
//     tile 5, and finally tile 4,
//     the sequence should be 4, 5, 3, 2 during the color transition.

document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".column");
    let clickedTiles = []
  
    tiles.forEach((tile) => {
      tile.addEventListener("click", function () {
        this.classList.toggle("green");
        if(!clickedTiles.includes(this)){
          clickedTiles.push(this)
        } else {
          const removeIndex = clickedTiles.indexOf(this)
          clickedTiles.splice(removeIndex)
        }
  
        if(clickedTiles.length === tiles.length){
          setTimeout(()=>{
              clickedTiles.reverse().forEach((clickedTile, index) => {
                  setTimeout(() => {
                    clickedTile.classList.remove('green');
                    // Reset the clickedTiles array and transition flag after the last timeout
                    if (index === clickedTiles.length - 1) {
                      clickedTiles = [];
                    }
                  }, index * 500); // reverse order timeout
                });
          }, 1000)
        }
      });
    });
  });
