var batchPaths = function() {
    var _prefix = '';
    var _suffix = '';

    // _all (Array)
    // Populated by calling batchPaths.add(Array).
    var _all = [];

    // Method: prefix
    // Args: toPrefix (String)
    // Sets internal value that will be preixed onto each string of Array
    //   passed to batchPaths.add() before being stored in batchPaths.files
    function prefix (toPrefix) {
        _prefix = toPrefix;
        return this;
    };
    
    // Method: suffix
    // Args: _suffix (String)
    // Sets internal value that will be suffixed onto each string of Array 
    //   passed to batchPaths.add() before being stored in batchPaths.files
    function suffix (toSuffix) {
        _suffix = toSuffix
        return this
    };
    
    // Method: add
    // Args: items (Array of strings)
    // Appends each array item to batchPaths._all after being prefixed and suffixed with 
    //   most recently declared batchPaths.prefix and batchPaths.suffix, respectively. 
    function add (items) {
        for (var i = 0; i < items.length; i++) {
            _all.push(_prefix + items[i] + _suffix)
        }
        return this        
    };

    // Method: all
    // Args: none
    // Returns Array comprised of all strings that have been stored in current batchPaths Object via method add()
    function all () {
        return _all;
    };

    return {
        prefix  : prefix,
        suffix  : suffix,
        add     : add,
        all     : all,
    }
}

module.exports = batchPaths();