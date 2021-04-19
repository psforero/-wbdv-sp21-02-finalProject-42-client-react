const UserProfile = (function() {
    let firstName = "";
    let username = "";

    const getName = function() {
        return firstName;
    };

    const getLast = function() {
        return firstName;
    };

    const setName = function(name) {
        firstName = name;
    };

    return {
        getName: getName,
        setName: setName
    }

})();

export default UserProfile;