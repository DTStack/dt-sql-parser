
class Cache extends Map {
    constructor(options){
        super(...arguments)
    }
    set(key,value){
        super.set(key,value);
    }
}


module.exports=Cache;