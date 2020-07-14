
export const filter = (objectData, obj, search, i) =>{
    for(let [key, value] of Object.entries(objectData)){
        if(key === search[i]){              
            if(`${value}` === 'null'){
                return obj[search[i]] = (`N/A`);
            }if(key === 'date'){
                let format = `${value}`.substring(4, 6)+ "-" +
                `${value}`.substring(6, 8)+"-"+`${value}`.substring(0, 4); 
                return obj[search[i]] = format;
            } else{
                return obj[search[i]] = (`${value}`);
            }   
           
        }
    }
}



export const setData = (data, ...search) =>{
    let obj = {}
    if(search.length === 1){
        for(let [key, value] of Object.entries(data)){
            if(key === search[0]){
                if(key === 'date'){
                    let format = `${value}`.substring(4, 6)+ "-" +
                    `${value}`.substring(6, 8)+"-"+`${value}`.substring(0, 4); 
                    return(format);
                }else{
                    return(`${value}`);
                }
            }
        }
    }if(search.length >= 2){
        
        for (let index = 0; index < search.length; index++) {
            filter(data, obj, search, index);
        }
        return obj;
    }
}


export const stateNames = (data, ...name) =>{
        let array = []
        data.forEach(e => {
            let obj =    setData(e,  name[0], name[1]); 
            array.push(obj) 
        })
        return(array)
}

export const pushState = (data, state, type)=>{
    data.forEach(obj => {
        for(let [key, value] of Object.entries(obj)){
            if(`${key}` === type){
                return state.push(value)
            }
        }
    })
}

export const statesCase = (data, ...name) =>{
    let array = []
    data.forEach(e => {   
        let obj =    setData(e,  name[0], name[1], name[2],
                                name[3], name[4], name[5]); 
        array.push(obj) 
    })
    return(array)
    
}

export const concatenateObject = (array1, array2) =>{
    let array= []

    if(array1.length === array2.length){
      for (let index = 0; index < array1.length; index++) {
          let obj1 =array1[index]
          let obj2  =array2[index]
           array.push(Object.assign(obj1, obj2))
          
      }
      
    }
    return array
}



