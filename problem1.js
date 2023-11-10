export function problem1(inev,ids){
    const id33 = inev.filter(car=>{
        return car["id"]===ids;
    });
    return id33;
}