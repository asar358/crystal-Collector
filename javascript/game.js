$(document).ready(function () {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }

    var losses = 0;
    var wins = 0;
    var accuNumber = 0;

    $('.greetings').text(greeting + ' Crystal Collector');

    var targetNumber = Math.floor(Math.random() * 102 + 19);
    var blue = Math.floor(Math.random() * 12 + 1);
    var purple = Math.floor(Math.random() * 12 + 1);
    var red = Math.floor(Math.random() * 12 + 1);
    var yellow = Math.floor(Math.random() * 12 + 1);

    function crytalReset() {
        var targetNumber = Math.floor(Math.random() * 102 + 19);
        var blue = Math.floor(Math.random() * 12 + 1);
        var purple = Math.floor(Math.random() * 12 + 1);
        var red = Math.floor(Math.random() * 12 + 1);
        var yellow = Math.floor(Math.random() * 12 + 1);
        accuNumber = 0;
    }

    $('#random-number').text(targetNumber);
    $('#win-counter').text(wins);
    $('#loss-counter').text(losses);

    function gameRules() {
        if (accuNumber === targetNumber) {
            wins++
            $('#win-counter').text( wins );
            crytalReset()
        } else if(accuNumber > targetNumber){
            losses++
            $('#win-counter').text( wins );
            crytalReset()
        }
    }

    $('#blueCrystal').on('click', function(){
        accuNumber = accuNumber + blue;
        $('#total-score').text(accuNumber); 
        gameRules()
    });
    
    $('#purpleCrystal').on('click', function(){
        accuNumber = accuNumber + purple;
        $('#total-score').text(accuNumber);
        gameRules()
    });

    $('#redCrystal').on('click', function(){
        accuNumber = accuNumber + red;
        $('#total-score').text(accuNumber);
        
        gameRules()
    });

    $('#yellowCrystal').on('click', function(){
        accuNumber = accuNumber + yellow;
        $('#total-score').text(accuNumber);
        
        gameRules()
    });
    crytalReset()
    
});
