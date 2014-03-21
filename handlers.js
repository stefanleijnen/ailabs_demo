
function changeUser(user) {
    userId = user;
    writeWelcome();
    recommendationsForUser(userId);
    log ("User changed to " + userId);
}