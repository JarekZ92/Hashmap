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
    this.returValuesInMap = function() {
        let score = new Array()
        for(let key of Object.keys(this.inisdeMap)){
            score.push(this.inisdeMap[key])
        }
        return(score.length > 0) ? score : null
    }
    this.clearItemsFromMap = function(){
        this.inisdeMap = {}
        this.numberOfItems = 0
    }
}

let map = new hashMap()

map.addToMap('country', 1)
map.addToMap('city', 20)
map.addToMap('district', 5)
map.addToMap('buildings', 50)

console.log(map.getTheValue('city'))
console.log(map.mapSize())
console.log(map.returValuesInMap())

