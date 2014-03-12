
function send_view(options, userId) {
    options.userId=userId;
    easyrec_sendAction("view", options);
    document.getElementById("alsoViewed").innerHTML = "(fetching recommendations)";
    easyrec_otherUsersAlsoViewed( { userId:userId, itemId:options.itemId, drawingCallback:"recommendationCallbackAlsoViewed" } )
}

function send_rating(options, userId, ratingValue) {
    options.userId=userId;
    options.ratingValue=ratingValue;
    easyrec_sendAction("rate", options);
    if (ratingValue >= 4) {
        document.getElementById("alsoGood").innerHTML = "(fetching recommendations)";
        easyrec_itemsRatedGoodByOtherUsers( { userId:userId, itemId:options.itemId, drawingCallback:"recommendationCallbackAlsoGood" } )
    }
}

function send_buy(options, userId) {
    options.userId=userId;
    easyrec_sendAction("buy", options);
    document.getElementById("alsoBought").innerHTML = "(fetching recommendations)";
    easyrec_otherUsersAlsoBought( { userId:userId, itemId:options.itemId, drawingCallback:"recommendationCallbackAlsoBought" } )
}

function recommendationsForUser(userId, itemId) {
    easyrec_recommendationsForUser( { userId:userId, drawingCallback:"recommendationCallbackUser" } )
}

function relatedItems(userId, itemId) {
    easyrec_relatedItems( { userId:userId, drawingCallback:"recommendationCallbackUser" } )
}

function recommendationCallbackAlsoViewed(json) {
    drawRecommendationListToDivCustom(json, "alsoViewed");
}

function recommendationCallbackAlsoBought(json) {
    drawRecommendationListToDivCustom(json, "alsoBought");
}

function recommendationCallbackAlsoGood(json) {
    drawRecommendationListToDivCustom(json, "alsoGood");
}

function recommendationCallbackUser(json) {
    drawRecommendationListToDivCustom(json, "recsForUser");
}

function drawRecommendationListToDivCustom(json, recommenderDiv) {

    if ("undefined" == typeof(json.error)) { // if no error show recommendations

        if (!json.recommendeditems) {
            document.getElementById(recommenderDiv).innerHTML = "(recommendation list empty)";
            return;
        }

        try {
            var items = json.recommendeditems.item;
        } catch(e) {
            return;
        }

        /* when the object is already in array format, this block will not execute */
        if ("undefined" == typeof(items.length)) {
            items = new Array(items);
        }

        // display recommendations in the DIV layer 'recommendation'
        if (items.length > 0) {
            listString = "<ul>";

            for (x = 0; x < items.length; x++) {
                listString +=
                    "<li><a href=\"" + items[x].url + "\">"
                        + items[x].description +
                        "</a>" +
                        "</li>";
            }
            document.getElementById(recommenderDiv).innerHTML = listString + "</ul>";
        } else {
            document.getElementById(recommenderDiv).innerHTML = "(recommendation list empty...)";
        }
    }
}