
var apiKey      = "7261e136fa4f72fbbabe8057a904dba1";
var tenantId    = "AILABS_DEMO";
var userId      = "Diana";

function writeWelcome() {
    $("#welcomeDiv").html("<h4>Welcome " + userId + "!</h4>");
}

function log(text) {$("#log").prepend(text + "<br>");}
