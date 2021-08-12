var canvas = new fabric.canvas("my_canvas");

blockimagewidth= 30;
blockimageheight=30;

player_x = 10;
player_y = 10;
 
var playerpbject = "";

function playerupdate(){
    fabric.Image.fromURL("player.png" , function(Img){
    player_object= img;

    player_object.scaleToWidth(150);
    player_object.scaleToheight(140);
    player_Object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);


    });
}
Fabric.Image.fromURL("player.png", function(Img)
{

 
    function new_image(get_image) { fabric.Image.fromURL(get_image, function(Img) { block_image_object = Img; block_image_object.scaleToWidth(block_image_width); block_image_object.scaleToHeight(block_image_height); block_image_object.set({ top:player_y, left:player_x }); canvas.add(block_image_object); });
}
    


    
    

window.addEventListener("keydown" mykeydown );

function mykeydown()
{

keyPressed= e.keyCode;
console.log (keyPressed)

if ( e.shiftKey==true && keyPressed=="80")
{

console.log(p&shiftKey)
blockimagewidth = blockimagewidth+10;
blockimageheight= blockimageheight+10;
document.getElementById("current_width").innerHTML = blockimagewidth;
document.getElementById("current_height").innerHTML = blockimageheight;

}

if ( e.shiftKey==true && keyPressed=="77")
{

console.log(m&shiftKey)
blockimagewidth = blockimagewidth-10;
blockimageheight= blockimageheight-10;
document.getElementById("current_width").innerHTML = blockimagewidth;
document.getElementById("current_height").innerHTML = blockimageheight;

}

if (keyPressed=="38")
{

up();
console.log("up");

}


if (keyPressed=="40")
{

down();
console.log("down");

}


if (keyPressed=="37")
{

left();
console.log("left");

}


if (keyPressed=="39")
{

right();
console.log("right");

}


if (keyPressed=="87")
{

new_image("wall.jpg")
console.log("w");

}

if (keyPressed=="87")
{

new_image("wall.jpg")
console.log("w");

}
}

function up() 
{

if (player_y>=0)
{

player_y= player_y-block_image_height;
console.log("block img height="+block_image_height);
console.log("when up arrow keys is pressed , X="+player_x+",y="+player_y);
canvas.remove(player_Object);
playerupdate();
}
}



function down() 
{

if (player_y<=600)
{

player_y= player_y+block_image_height;
console.log("block img height="+block_image_height);
console.log("when up arrow keys is pressed , X="+player_x+",y="+player_y);
canvas.remove(player_Object);
playerupdate();
}
}


function left() 
{

if (player_x>=0)
{

player_x= player_x-block_image_width;
console.log("block img width="+block_image_width);
console.log("when up arrow keys is pressed , X="+player_x+",y="+player_y);
canvas.remove(player_Object);
playerupdate();
}
}


function right() 
{

if (player_x<=1000)
{

player_x= player_x+block_image_height;
console.log("block img width="+block_image_width);
console.log("when up arrow keys is pressed , X="+player_x+",y="+player_y);
canvas.remove(player_Object);
playerupdate();
}
}