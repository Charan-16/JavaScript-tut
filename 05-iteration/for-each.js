// const coding = ["js", "ruby", "jeeva" ,"python", "cpp"]

// coding.forEach((names) => {
//     console.log(`names of prog ${names}`)
// } )// it will take callback function

// we can create function and we  can give referance to inside foreach loop


 const myCoding = [
    {
        language : "Javascript",
        languageNmae : "js"
    },
    {
        language : "Python",
        languageNmae : "py"
    },
    {
        language : "Typescript",
        languageNmae : "Ts"
    }
 ]
  myCoding.forEach((item)=> {
    console.log(`${item.language} :- ${item.languageNmae}`);
  
  })