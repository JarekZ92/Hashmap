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
}