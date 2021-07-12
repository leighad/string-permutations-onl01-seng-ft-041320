function findAllPermutations(string)  {
    let perms = []

    // for (i = 0; i < string.length; i++) {
    // }

    if (string.length < 2) {
        return string 
    } else {
        perms.push(string)
        perms.push(string.reverse())

        split_string = string.split()
        split_string.forEach((element, index) => {
            index.forEach((char => char))
        }) 

        
    }
    return perms 

}