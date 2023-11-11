export function problem3(inev){

 //we are using map to achieve functionality of for loop
 const ans=inev.map((num)=>{
    //finding the first element of sorted list using reduce
    const minValue = inev.reduce((acc,pas)=>{
        if(acc["car_model"].trim().toLowerCase()>pas["car_model"].trim().toLowerCase())
          acc=pas;
        return acc;
    });
    // we got min value for next we will get same obj if it in list so remove object using filter
    inev=inev.filter(um=>{
        if(um["id"]!==minValue["id"])
        return um;
    });
    return minValue;
 });
 console.log(ans);
}