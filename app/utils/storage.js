define(function() {
    var get = function(key, jsonParse) {
            var getVar = localStorage.getItem(key);
            if (jsonParse && jsonParse === true) {
                try {
                    getVar = JSON.parse(getVar);
                } catch(e) {
                    console.log('Problem parsing JSON: ' + getVar);
                }

            }
            return getVar;
        },
        set = function(key, data) {
            if (typeof data === 'object') {
                data = JSON.stringify(data);
            }
            localStorage.setItem(key, data);
        },
        remove = function(key) {
            localStorage.removeItem(key);
        },
        clear = function() {
            localStorage.clear();
        };
    return {
        get: get,
        set: set,
        remove: remove,
        clear: clear
    }
});