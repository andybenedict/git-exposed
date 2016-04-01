index = -1;

lock = false;
timer = true;

toggletimer = function(){
    timer = timer ? false : true;
}

fontplus = function(){
    $("body").css('font-size', parseInt($("body").css('font-size')) + 1 + "px");
}

fontminus = function(){
    $("body").css('font-size', parseInt($("body").css('font-size')) - 1 + "px");
}

keyadvance = function(){
        if (!lock){
                advance();
        }
}

keyreverse = function(){
        if (!lock){
                reverse();
        }
}

advance = function(){
        console.log('Advancing');
        console.log('Locking');
        lock = true;
        index++;
        console.log(index);
        console.log(states[index]);
        if (index >= states.length || typeof states[index].pause != "undefined"){
            if (index > states.length){
                    index = states.length;
            }
            console.log('Unlocking');
            lock = false;
            return;
        }else if (typeof states[index].timer != "undefined"){
            timer = timer ? false : true;
            console.log('Timer = ' + timer);
            advance();
            return;
        }
        
        if (timer){
            setTimeout(function(){
                $(states[index].object).toggleClass(states[index].toggle);
                advance();
            }, states[index].time);
        }else{
            $(states[index].object).toggleClass(states[index].toggle);
            advance();
        }
};

reverse = function(){
        console.log('Reversing');
        console.log('Locking');
        lock = true;
        index--;
        console.log(index);
        if (index < 0 || typeof states[index].pause != "undefined"){
            if (index < 0){
                    index = -1;
            }			
            console.log('Unlocking');
            lock = false;
            return;
        }else if (typeof states[index].timer != "undefined"){
            timer = timer ? false : true;
            console.log('Timer = ' + timer);
            reverse();
            return;
        }
        $(states[index].object).toggleClass(states[index].toggle);
        reverse();
};

$(document).ready(function(){
        $(document).keydown(function(e) {
                switch(e.which) {
                        case 37: // left
                        keyreverse();
                        break;

                        case 38: // up
                        break;

                        case 39: // right
                        keyadvance();
                        break;

                        case 40: // down
                        break;

                        case 88: // timer
                        toggletimer();
                        break;

                        case 61: // plus
                        fontplus();
                        break;

                        case 173: // minus
                        fontminus();
                        break;
                        
                        default: return; // exit this handler for other keys
                }
                e.preventDefault(); // prevent the default action (scroll / move caret)
        });
})
