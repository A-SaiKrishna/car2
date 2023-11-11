//we can use reduce and filter here i used filter
export function problem5(inev,yearArray){
   yearArray = yearArray.filter(year=>{
    if(year>2000)
    return year;
   });
   return yearArray.length;

}