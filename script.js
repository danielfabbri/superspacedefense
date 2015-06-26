$(document).ready( function userArrive() {
    $("#p1").css({'margin-top': '270px'});
    $("#p1").animate({'margin-left': '-130px'}, 1);
    $("#p1").animate({'margin-left': '20px'}, 500);
});

$(document).ready( function enemyArrive() {
    $("#e1").css({'margin-top': '270px'});
    $("#e1").animate({'margin-right': '-130px'}, 1);
    $("#e1").animate({'margin-right': '20px'}, 1000 ?enemyMove:function(){});

    function enemyMove() {
    var random = Math.random();
        if (random <= 0.3) {
            $("#e1").animate({'margin-top': '20px'}, 2000 ?enemyMove:function(){});
        } else if (random <= 0.6) {
            $("#e1").animate({'margin-top': '270px'}, 2000 ?enemyMove:function(){});
        } else if (random <= 1) {
            $("#e1").animate({'margin-top': '540px'}, 2000 ?enemyMove:function(){});
        }
    }
});

$(document).keydown(function(e) {
var pPosition = $("#p1").css('margin-top');
var ePosition = $("#e1").css('margin-top');

    switch(e.which) {
        case 37: // left
        prompt('Deseja sair? (YES) (NO)');
        break;

        case 38: // up
        $("#p1").animate({'margin-top': '-=270px'});
        break;

        case 39: // right
        $("#shot").animate({'margin-left': '1520px'});
        $("#shot").animate({'margin-left': '11px'}, 1);
        var ballTop = $("#shot").offset().top;
        var enemyTop = $("#e1").offset().top;
        var ballSide = $("#shot").offset().left;
        var enemySide = $("#e1").offset().left;
            if (ballTop > enemyTop && ballTop < enemyTop + 90) {
                setTimeout( function() {
                    $("#e1").css({'background-image': 'url(\'images/nave3.png\')'})
                    .animate({'margin-right': '-200px'}, 2000);
                });
            }
        break;

        case 40: // down
        $("#p1").animate({'margin-top': '+=270px'});
        
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});