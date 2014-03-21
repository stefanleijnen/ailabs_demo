
var easyrecApiUrl = "http://188.226.152.179:8080/easyrec-web/api/1.0/json/"; //easyrec server: was (for testing purposes) "http://demo.easyrec.org:8080/api/1.0/json/";
var apiKey        = "d1c498179bc4e7fdce1e9a5ab09da73b"; //easyrec server: was (for testing purposes) 7261e136fa4f72fbbabe8057a904dba1";
var tenantId      = "AILABS"; //easyrec server: was (for testing purposes) "AILABS_DEMO";
var userId        = "Alice";

function writeWelcome() {
    $("#welcomeDiv").html("<h4>Welcome " + userId + "!</h4>");
}

function log(text) {$("#log").prepend(text + "<br>");}
