export var problem2 =(inev)=>{
    const idLast = inev.filter(car=>{
        return car["id"]=== inev.length;
    });
    return idLast;
}
//module.exports=problem2;