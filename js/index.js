let stor = 0
function pairs(arr){
    let b=test(arr) 
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            x='('+ arr[i]+','+arr[j]+') '
            document.write(x+ ' ')
            
        }
        stor=stor + i
    }
    document.write (b)
    return stor
}

document.write('<br>The number of sorted pairs formed : '+ pairs([5,2,3,1,1])+ '<br>')


function test(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if(arr[j]==arr[i]){
                     b='('+ arr[i]+','+arr[i]+') '
                    arr.splice(j,1)
                    stor=stor +1
                    
                } else {
                    b=''
                }
                
            }
            
        }
    return b
}