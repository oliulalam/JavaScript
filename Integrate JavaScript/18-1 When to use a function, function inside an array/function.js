// array ke 2 dara gun kora
// nums =[34, 56, 3, 5, 6, 7, 8, 9];
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     console.log(num*2);
// }

//array list er majhe odd even ke alada kora 
// nums = [34, 56, 3, 5, 6, 7, 8, 9];
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num % 2 == 0) {
//         console.log(num, ': is even number');
//     }
//     else {
//         console.log(num * 2, ": is odd number");
//     }

// }

// friend der age odd even ber korte. 
friend_age = [23, 18, 19, 22, 33, 44,];
for (let i = 0; i < friend_age.length; i++) {
    const age = friend_age[i];
    evenify(age)

}

function evenify(num)
{
    if (num % 2 == 0) {
        console.log(num, ': is even number');
    }
    else {
        console.log(num * 2, ": is odd number");
    }
}

var nums = [34, 44, 23, 22, 12, 9, 3];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num)
    
}