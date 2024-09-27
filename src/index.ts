// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     dnd: false,
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

// interface IPizza {
//     size: 'small' | 'medium' | 'large',
//     toppings: string[], // додає скільки завгодно додатків
//     logSize: () => void,
//     getSize: () => string,
//     addTopping: (topping: string) => void
//   }
  
//   const pizza: IPizza = {
//     size: 'large',
//     toppings: ['souse', 'mushrooms', 'cheese'],
//     logSize() {
//         console.log(this.size);
//     },
//     getSize() {
//         return this.size
//     },
//     addTopping(topping) {
//         this.toppings.push(topping)
//     }
//   }