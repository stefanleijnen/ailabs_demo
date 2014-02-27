
function send_view(options, userId) {
    options.userId=userId;
    easyrec_sendAction("view", options);
    otherUsersAlsoViewed(userId, options.itemId);
}

function send_rating(options, userId, ratingValue) {
    options.userId=userId;
    options.ratingValue=ratingValue;
    easyrec_sendAction("rate", options);
}

function send_buy(options, userId) {
    options.userId=userId;
    easyrec_sendAction("buy", options);
    otherUsersAlsoBought(userId, options.itemId);
}

function otherUsersAlsoViewed(userId, itemId) {
    easyrec_otherUsersAlsoViewed( { userId:userId, itemId:itemId, drawingCallback:"recommendationCallbackAlsoViewed" } )
}

function otherUsersAlsoBought(userId, itemId) {
    easyrec_otherUsersAlsoBought( { userId:userId, itemId:itemId, drawingCallback:"recommendationCallbackAlsoBought" } )
}

function itemsRatedGoodByOtherUsers(userId, itemId) {
    easyrec_itemsRatedGoodByOtherUsers( { userId:userId, itemId:itemId, drawingCallback:"recommendationCallbackAlsoGood" } )
}

function recommendationsForUser(userId, itemId) {
    easyrec_recommendationsForUser( { userId:userId, drawingCallback:"recommendationCallbackUser" } )
}

function relatedItems(userId, itemId) {
    easyrec_relatedItems( { userId:userId, drawingCallback:"recommendationCallbackUser" } )
}

easyrec_relatedItems


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
            document.getElementById(recommenderDiv).innerHTML += listString + "</ul>";
        } else {
            document.getElementById(recommenderDiv).innerHTML = "(recommendation list empty...)";
        }
    }
}