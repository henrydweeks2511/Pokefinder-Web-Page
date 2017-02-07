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
        var get = $("#searchBar").val();
        if (document.getElementById('cityCheck').checked) {
            if (get == "Chicago") {
                $("#chicagoResults").animate({ height: "show" }, "slow");
                $("#laResults").animate({ height: "hide" }, "slow");
                $("#nyResults").animate({ height: "hide" }, "slow");
                $("#pidgeyResults").animate({ height: "hide" }, "slow");
                $("#weedleResults").animate({ height: "hide" }, "slow");
                $("#ratattaResults").animate({ height: "hide" }, "slow");
            }
            else if (get == "New York") {
                $("#nyResults").animate({ height: "show" }, "slow");
                $("#laResults").animate({ height: "hide" }, "slow");
                $("#chicagoResults").animate({ height: "hide" }, "slow");
                $("#pidgeyResults").animate({ height: "hide" }, "slow");
                $("#weedleResults").animate({ height: "hide" }, "slow");
                $("#ratattaResults").animate({ height: "hide" }, "slow");
            }
            else if (get == "Los Angeles") {
                $("#laResults").animate({ height: "show" }, "slow");
                $("#nyResults").animate({ height: "hide" }, "slow");
                $("#chicagoResults").animate({ height: "hide" }, "slow");
                $("#pidgeyResults").animate({ height: "hide" }, "slow");
                $("#weedleResults").animate({ height: "hide" }, "slow");
                $("#ratattaResults").animate({ height: "hide" }, "slow");
            }
            else alert("Oops! I didn't recognize that search.")
        }
        if (document.getElementById('pokemonNameCheck').checked) {
            if (get == "Pidgey") {
                $("#pidgeyResults").animate({ height: "show" }, "slow");
                $("#weedleResults").animate({ height: "hide" }, "slow");
                $("#ratattaResults").animate({ height: "hide" }, "slow");
                $("#chicagoResults").animate({ height: "hide" }, "slow");
                $("#nyResults").animate({ height: "hide" }, "slow");
                $("#laResults").animate({ height: "hide" }, "slow");
            }
            else if (get == "Weedle") {
                $("#weedleResults").animate({ height: "show" }, "slow");
                $("#pidgeyResults").animate({ height: "hide" }, "slow");
                $("#ratattaResults").animate({ height: "hide" }, "slow");
                $("#chicagoResults").animate({ height: "hide" }, "slow");
                $("#nyResults").animate({ height: "hide" }, "slow");
                $("#laResults").animate({ height: "hide" }, "slow");
            }
            else if (get == "Ratatta") {
                $("#ratattaResults").animate({ height: "show" }, "slow");
                $("#pidgeyResults").animate({ height: "hide" }, "slow");
                $("#weedleResults").animate({ height: "hide" }, "slow");
                $("#chicagoResults").animate({ height: "hide" }, "slow");
                $("#nyResults").animate({ height: "hide" }, "slow");
                $("#laResults").animate({ height: "hide" }, "slow");
            }
            else alert("Oops! I didn't recognize that search.")
        }
        });
    });
