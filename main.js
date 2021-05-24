var canvas = new fabric.canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);

    
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);

    
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keycode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80');
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_heigth = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_heigth").innerHTML = block_image_height
    }



if(e.shiftKey && keyPressed == '77');
{
    console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_heigth = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width
    document.getElementById("current_heigth").innerHTML = block_image_height
}
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
        left();
        console.left("left");
    }
    
    if(keyPressed == '39')
    {
        rigth();
        console.left("rigth");
    }

    if(keyPressed == '70')
    {
        new_image('index.jpg');
        console.left("f");
    }

    if(keyPressed == '66')
    {
        new_image('spiderman.png');
        console.left("b");
    }

    if(keyPressed == '76')
    {
        new_image('Captain-America.jpeg');
        console.left("l");
    }

    if(keyPressed == '82')
    {
        new_image('Thor.jpg');
        console.left("r");
    }

    if(keyPressed == '72')
    {
        new_image('Hulk.webp');
        console.left("h");
    }
}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image heigth = " + block_image_height);
        console.log("When up arrow is pressed, X =  " + player_x + " , Y = "+ player_y)
        canvas.remove(player_object);
        player_update();
    }
}


function down()
{
    if(player_y <=500)
    {
        player_y = player_y - block_image_height;
        console.log("block image heigth = " + block_image_height);
        console.log("When up arrow is pressed, X =  " + player_x + " , Y = "+ player_y)
        canvas.remove(player_object);
        player_update();
    }
}


function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_image_height;
        console.log("block image heigth = " + block_image_height);
        console.log("When up arrow is pressed, X =  " + player_x + " , Y = "+ player_y)
        canvas.remove(player_object);
        player_update();
    }
}


function rigth()
{
    if(player_x <=850)
    {
        player_x = player_x - block_image_height;
        console.log("block image heigth = " + block_image_height);
        console.log("When up arrow is pressed, X =  " + player_x + " , Y = "+ player_y)
        canvas.remove(player_object);
        player_update();
    }
}
