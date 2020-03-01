//////////////////////////////////////////////////////////////////////////////
//   I MAKE A TEST FUNCTION WHICH WILL DELETE ALL THE DUPLICATE VALUES      //
//////////////////////////////////////////////////////////////////////////////

let stor = 0
function test(arr) {
    let deleteDuplicateArray=[]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++){
            if(arr[j]==arr[i]){
                let z ='('+ arr[i]+','+arr[i]+') '
                arr.splice(j,1)
                j--
                if (deleteDuplicateArray.indexOf(z)== -1) {
                    deleteDuplicateArray.push(z)
                    stor=stor + 1
                }
            }
            
        }

    }
    return deleteDuplicateArray
}

//////////////////////////////////////////////////////////////////////////////
//                      PUT ALL THE PAIRS ON AN ARRAY                       //
//////////////////////////////////////////////////////////////////////////////

function pairs(arr){
    let pairsArray=[]
    let finalArray=test(arr) 
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            pairsArray.push('('+ arr[i]+','+arr[j]+') ')
        }
        stor=stor + i
    }
    document.write (pairsArray.concat(finalArray))
    return stor
}

document.write('<br>The number of sorted pairs formed : '+pairs([2,5,6,2,2,2,2,2])+ '<br>')