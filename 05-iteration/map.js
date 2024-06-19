const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.push(11, 12,13)
// console.log(myNums)

const newNums = myNums.map((num) => {
   return(num * 10) 
})
            .map((num)=>{
                return (num + 2)
            })
            .filter((num)=>{
                return (
                    num >= 42
                )
            })
            console.log(newNums)