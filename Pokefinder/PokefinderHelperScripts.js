// Scripts to help in the functionality
// of Pokefinder
$(document).ready(function () {
    $("#cityCheck").click(function () {
        $("#pokemonNameCheck").prop('checked', false);
    });
    $("#pokemonNameCheck").click(function () {
        $("#cityCheck").prop('checked', false);
    });
    $("#searchButton").click(function () {
        if (document.getElementById('cityCheck').checked) {

            $("#cityResults").animate({ height: "show" }, "slow");
            $("#nameResults").animate({ height: "hide" }, "slow");
        }
        if (document.getElementById('pokemonNameCheck').checked) {
            $("#nameResults").animate({ height: "show" }, "slow");
            $("#cityResults").animate({ height: "hide" }, "slow");
        }
        });
    });
