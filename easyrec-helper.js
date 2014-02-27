
function send_view(options, userId) {
    options.userId=userId;
    easyrec_sendAction("view", options);
}

function send_rating(options, userId, ratingValue) {
    options.userId=userId;
    options.ratingValue=ratingValue;
    easyrec_sendAction("rate", options);
}

function send_buy(options, userId) {
    options.userId=userId;
    easyrec_sendAction("buy", options);
}

