spit = document.getElementById("spit");
var drop = newSpit();

draw = function(drop) {
    spit.style.left = drop.xpos;
    spit.style.top = drop.ypos + 'px';
};

update = function() {
    updateSpit(drop);
    draw(drop);
};

setInterval(update, 50);
