// // let arr = [65,454,546,55,65,46,56,75,45,565]

// let newArr = arr.filter((item) => {
//     return item > 100
// }) 

// // console.log(arr)



// let names = ['ali', 'hoshim','jumanazar', 'xasan', 'zihir', 'otkir', 'xurshid', 'bexruz']
// // let newNames = names.filter((item) => {
// //     return item.includes('a')
// // })
// // console.log(newNames);




// let box = document.querySelector('.box')

// names.forEach((item) => {
//     let text = document.createElement('h3')

//     if (item.length > 5) {
//         text.innerHTML = item + 'bek'
//         text.classList.add('blue')
//     } else {
//         text.innerHTML = item
//         text.classList.add('yellow')
//     }
//     box.appendChild(text)
// })







let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];


let box = document.querySelector('.box')

data.forEach((item) => {
    let text = document.createElement('h3')

    if (item > 50) {
        text.innerHTML = item 
        text.classList.add('blue')
    } else {
        text.innerHTML = item
        text.classList.add('yellow')
    }
    box.appendChild(text)
})
