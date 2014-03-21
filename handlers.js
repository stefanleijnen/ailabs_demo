
function changeUser(user) {
    userId = user;
    recommendationsForUser(userId);
    log ("User changed to " + userId);
}