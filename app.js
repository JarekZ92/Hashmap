let hashMap = function() {
    this.inisdeMap = {}
    this.numberOfItems = 0
    this.mapSize = function() {
        return this.numberOfItems
    }
    this.addToMap = function(key, value) {
        this.inisdeMap[key] = value
        this.numberOfItems++
    }
    this.checkMapKey = function(key) {
        return (key in this.inisdeMap)
    }
    this.getTheValue = function(key){
        return (key in this.inisdeMap) ? this.inisdeMap[key] : null
    }
    this.removeItemInMap = function(key) {
        if(key in this.inisdeMap) {
            delete this.inisdeMap[key]
            this.numberOfItems--
        }
    }

}