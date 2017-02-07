// Scripts to help in the functionality
// of Pokefinder
$(document).ready(function () {
    $("#cityCheck").click(function () {
        $("#pokemonIDCheck").prop('checked', false);
        $("#pokemonNameCheck").prop('checked', false);
    });
    $("#pokemonIDCheck").click(function () {
        $("#cityCheck").prop('checked', false);
        $("#pokemonNameCheck").prop('checked', false);
    });
    $("#pokemonNameCheck").click(function () {
        $("#pokemonIDCheck").prop('checked', false);
        $("#cityCheck").prop('checked', false);
    });
    $("#searchButton").click(function () {
        if (document.getElementById('cityCheck').checked) {
            $("#cityResults").animate({ height: "show" }, "slow");
            $("#iDResults").animate({ height: "hide" }, "slow");
            $("#nameResults").animate({ height: "hide" }, "slow");
        }
        if (document.getElementById('pokemonIDCheck').checked) {
            $("#iDResults").animate({ height: "show" }, "slow");
            $("#cityResults").animate({ height: "hide" }, "slow");
            $("#nameResults").animate({ height: "hide" }, "slow");
        }
        if (document.getElementById('pokemonNameCheck').checked) {
            $("#nameResults").animate({ height: "show" }, "slow");
            $("#iDResults").animate({ height: "hide" }, "slow");
            $("#cityResults").animate({ height: "hide" }, "slow");
        }
        });
    });
