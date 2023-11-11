export function problem6(inev){
const ans = inev.filter(obj=>{
    if(obj["car_make"].trim().toLowerCase()==="bmw" || obj["car_make"].trim().toLowerCase()==="audi")
      return obj;
});
return ans;
}