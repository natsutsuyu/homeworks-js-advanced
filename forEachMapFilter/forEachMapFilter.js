//6. Вывести все элементы массива. - [1, 2, 3, 4, 5];

// const arr=[1, 2, 3, 4, 5];

// arr.forEach(function (element){
//     console.log(element);
// })

//7.Посчитать сумму элементов массива. [1, 2, 3, 4, 5];
// const arr=[1, 2, 3, 4, 5];
// res=0;
// arr.forEach(function(element){
//     res+=element;
// })
// console.log(res);

//8.Найти наименьшее число в массиве. [5, 2, 8, 1, 9];

// const arr=[5, 2, 8, 1, 9];
// let minElementInArray=arr[0];

// arr.forEach(function(element){
//     return element<minElementInArray? minElementInArray=element:0;
// })
// console.log(minElementInArray);

//9. Посчитать количество четных чисел в массиве. const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let count=0;
// arr.forEach(function(element){
//     return element%2===0? count++:0;
// })
// console.log(count);

//10. Вывести все элементы массива в обратном порядке. [1, 2, 3, 4, 5];
// const arr=[1, 2, 3, 4, 99, 5, 100];
// const newArray=(arr)=>{
//     return arr.map((item, index)=>{
//         return arr[arr.length-1-index];
//     })
// }

// console.log(newArray(arr));

//11. Посчитать факториал четных чисел массива
// const factorial=(a)=>{
//     return a<1? 1: a*factorial(a-1);
// }
// const arr=[1, 2, 3, 4, 99, 5, 6, 10];
// const newArray=arr.filter((element)=>{
//     return element%2===0?true:false;
// }).map((element)=>{
//     return factorial(element);
// })

// console.log(newArray);

//12. Проверить, есть ли в массиве число 10. Итог- console.log(found ? 'Число 10 найдено' : 'Число 10 не найдено');
// const arr=[1, 2, 3, 4, 99, 5, 6, 10, 10];
// let found=arr.includes(10);

// console.log(found? "Array includes 10!":"Array doesn`t include 10!");

//13.Посчитать количество отрицательных чисел в массиве.
// const arr=[-3, 2, -5, 7, -8, 10];
// count=arr.filter((element)=>{
//     return element<0?true:false;
// }).length;

// console.log(count);


// 14. Найти среднее арифметическое всех элементов массива.
// const arr=[10, 20, 30, 40, 50];

// let average=0;
// arr.forEach(element => {
//    average+=element;
// });
// console.log(average/arr.length);

//25. Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает новый массив, содержащий только строки, длина которых больше 5 символов. Используйте (str.length)

// const arr=["KUKUK", "KUKU", "KU", "KUKUKU"];
// let filteredArray=arr.filter((element)=>{
//     return element.length>5?true:false;
// })

// console.log(filteredArray);

//27. Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые делятся на 3 без остатка.
// const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
// let filteredArray=arr.filter((element)=>{
//     return element%3===0?true:false;
// })


// console.log(filteredArray);

//28. Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий квадраты каждого числа из исходного массива.
// const arr=[1, 2, 3, 4, 99, 5, 6, 10];
// const newArray=arr.map((element)=>{
//     return element*element;
// })

// console.log(newArray);


// 29. Задача: Создать функцию, которая принимает массив студентов в формате
//     [ { name: 'John', age: 20, scores: [90, 80, 70] }, ... ]
//     и возвращает новый массив, содержащий объекты студентов с добавленным свойством averageScore, представляющим средний балл каждого студента.
//     const students = [
//     { name: 'John', age: 20, scores: [90, 80, 70] },
//     { name: 'Jane', age: 22, scores: [85, 75, 95] },
//     { name: 'Mike', age: 21, scores: [80, 90, 85] }
//     ];

// const students = [
//     { name: 'John', age: 20, scores: [90, 80, 70] },
//     { name: 'Jane', age: 22, scores: [85, 75, 95] },
//     { name: 'Mike', age: 21, scores: [80, 90, 85] }
//     ];

// const studentsWithAverageScores=(students)=>{
//     students.map((obj)=>{
//         let res=0;
//         obj.scores.map((element)=>{
//             res+=element;
//         });
//         obj.average=res/obj.scores.length;
//     })
//     return students;
// }

// console.log(studentsWithAverageScores(students));

// 30. Посчитать общее количество товаров в корзине.
//     const cart = [
//     { name: 'Товар 1', quantity: 2 },
//     { name: 'Товар 2', quantity: 3 },
//     { name: 'Товар 3', quantity: 1 }
//     ];

// const cart = [
// { name: 'Товар 1', quantity: 2 },
// { name: 'Товар 2', quantity: 3 },
// { name: 'Товар 3', quantity: 1 }
// ];
// const summaryQuantity=(cart)=>{
//     let res=0;
//     cart.forEach(element => {
//         res+=element.quantity;
//     })
//     return res;
// }
// console.log(summaryQuantity(cart));
// 31. Найти товар с максимальной ценой в корзине.
// const products = [
//     { name: 'Товар 1', price: 100 },
//     { name: 'Товар 2', price: 150 },
//     { name: 'Товар 3', price: 200 },
//     { name: 'Товар 4', price: 80 },
//     { name: 'Товар 5', price: 120 },
//     { name: 'Товар 6', price: 200 },
//     ];
// const MaxPrice=(products)=>{
//     let max=products[0].price;
//     products.forEach(element => {
//         if(element.price>=max){
//             max=element.price;
//         }
//     });
//     const maxPriceElement=products.filter((element)=>{
//         return max===element.price? true:false;
//     })
//     return maxPriceElement;
// }
// console.log(MaxPrice(products));
// 32. Посчитать общую стоимость товаров в корзине.
// const products = [
//         { name: 'Товар 1', price: 100 },
//         { name: 'Товар 2', price: 150 },
//         { name: 'Товар 3', price: 200 },
//         { name: 'Товар 4', price: 80 },
//         { name: 'Товар 5', price: 120 },
//         { name: 'Товар 6', price: 200 },
//         ];

//     const SummPrice=(products)=>{
//         let summ=0;
//         products.forEach(element => {
//             summ+=element.price;
//         });
//         return summ;
//     }

//     console.log(SummPrice(products));
// 33. Проверить, есть ли в корзине товар с заданным именем.
// const cart = [
// { name: 'Товар 1', price: 100 },
// { name: 'Товар 2', price: 200 },
// { name: 'Товар 3', price: 150 }
// ];
// const targetName = (cart, name)=>{
//     const IsExist=cart.filter((element)=>{
//                 return name===element.name? true:false;
//             })
//     return IsExist.length===0?`There is NO card with the name: "${name}"`:`There is card with the name: "${name}"`;
// };
// console.log(targetName(cart, "Товар 2"));
// 34. Создать новый массив, содержащий только имена всех товаров в корзине.
// const cart = [
// { name: 'Товар 1', price: 100 },
// { name: 'Товар 2', price: 200 },
// { name: 'Товар 3', price: 150 }
// ];
// const NamesArray=(cart)=>{
//     let names=[];
//     cart.forEach(element => {
//         names.push(element.name);
//     });
//     return names;
// }
// console.log(NamesArray(cart));
// 35. Найти среднюю цену товаров в корзине.
// const products = [
//             { name: 'Товар 1', price: 100 },
//             { name: 'Товар 2', price: 150 },
//             { name: 'Товар 3', price: 200 },
//             { name: 'Товар 4', price: 80 },
//             { name: 'Товар 5', price: 120 },
//             { name: 'Товар 6', price: 200 },
//             ];

//         const AveragePrice=(products)=>{
//             let summ=0;
//             products.forEach(element => {
//                 summ+=element.price;
//             });
//             return Math.floor(summ/products.length);
//         }

//         console.log(AveragePrice(products));


//36. Найти самый дорогой товар в магазине.(то же самое что и 31 задача???)

// 37. Посчитать общее количество товаров разных типов в корзине.
// const cart = [
//     { name: 'Товар 1', type: 'фрукты', quantity: 2 },
//     { name: 'Товар 2', type: 'овощи', quantity: 3 },
//     { name: 'Товар 3', type: 'фрукты', quantity: 1 },
//     { name: 'Товар 4', type: 'мясо', quantity: 2 }
// ];

// function countItemsByType(cart) {
//     const itemsByType = {};
//     cart.forEach(item => {
//         if (itemsByType[item.type]) {
//             itemsByType[item.type] += item.quantity;
//         } else {
//             itemsByType[item.type] = item.quantity;
//         }
//     });
//     return itemsByType;
// }

// const itemsByType = countItemsByType(cart);
// console.log(itemsByType);


// 38. Найти средний рейтинг всех продуктов.
// const products = [
// { name: 'Товар 1', rating: 4 },
// { name: 'Товар 2', rating: 5 },
// { name: 'Товар 3', rating: 3 }
// ];
// const AverageRating=(products)=>{
//     let summ=0;
//     products.forEach(element => {
//         summ+=element.rating;
//     });
//     return Math.floor(summ/products.length);
// }

// console.log(AverageRating(products));


// 39. Задача: Напишите функцию, которая принимает массив объектов, представляющих заказы, и возвращает объект, содержащий общее количество продуктов во всех заказах и общую сумму заказов.
// const orders = [
// { id: 1, products: [{ name: 'Товар 1', price: 100 }, { name: 'Товар 2', price: 150 }] },
// { id: 2, products: [{ name: 'Товар 3', price: 200 }, { name: 'Товар 4', price: 80 }] },
// { id: 3, products: [{ name: 'Товар 5', price: 120 }, { name: 'Товар 6', price: 90 }] }
// ];

// const ProductCountAndAveragePrice=(orders)=>{
//     const newObj=orders.map(element => {
//         const newElement={};
//         let summPrices=0;
//         newElement.id=element.id;
//         newElement.products=element.products.length;
//         element.products.forEach((item)=>{
//             summPrices+=item.price;
//         })
//         newElement.price=summPrices;
//         return newElement;
//     });
//     return newObj;
// }
// console.log(ProductCountAndAveragePrice(orders));






// 40. Задача: Напишите функцию, которая принимает массив объектов, представляющих студентов, и возвращает объект со средним возрастом студентов по каждому курсу.
// const students = [
//     { name: 'John', age: 20, course: 1 },
//     { name: 'Jane', age: 22, course: 2 },
//     { name: 'Mike', age: 21, course: 1 },
//     { name: 'Alice', age: 23, course: 2 }
// ];

// const averageAgeByCourse=(students)=> {
//     const ageByCourse = {};
//     const countByCourse = {};

//     students.forEach(student => {
//         if (ageByCourse[student.course]) {
//             ageByCourse[student.course] += student.age;
//             countByCourse[student.course]++;
//         } else {
//             ageByCourse[student.course] = student.age;
//             countByCourse[student.course] = 1;
//         }
//     });

//     const averageAge = {};
//     for (const course in ageByCourse) {
//         averageAge[course] = ageByCourse[course] / countByCourse[course];
//     }

//     return averageAge;
// }

// const averageAge = averageAgeByCourse(students);
// console.log(averageAge);



// 41. Задача: Напишите функцию, которая принимает массив объектов, представляющих книги в библиотеке, и возвращает объект, содержащий информацию о количестве книг каждого жанра.
// const books = [
//     { title: 'Book 1', genre: 'Fantasy' },
//     { title: 'Book 2', genre: 'Fantasy' },
//     { title: 'Book 3', genre: 'Mystery' },
//     { title: 'Book 4', genre: 'Thriller' },
//     { title: 'Book 5', genre: 'Mystery' },
//     { title: 'Book 6', genre: 'Fantasy' },
//     { title: 'Book 7', genre: 'Thriller' },
//     { title: 'Book 8', genre: 'Sci-Fi' }
// ];

// const GenresInfo = (books) => {
//     const Genres = {};
//     books.forEach((element) => {
//         if(Genres[element.genre]){
//             Genres[element.genre]++;
//         }
//         else{
//             Genres[element.genre]=1;
//         }
//     })
//     return Genres;
// }

// console.log(GenresInfo(books));




// 42. Напишите функцию, которая принимает массив объектов, представляющих товары в магазине, и возвращает общую стоимость всех товаров.
//     const products = [
//     { name: 'Товар 1', price: 100, quantity: 2 },
//     { name: 'Товар 2', price: 200, quantity: 1 },
//     { name: 'Товар 3', price: 150, quantity: 3 }
//     ]; (то же самое что и  32 задача.)




// 44. Напишите функцию, которая принимает массив объектов с информацией о книгах и возвращает массив имен (названий) всех книг.
    // const books = [
    // { name: 'Book 1', author: 'Author 1' },
    // { name: 'Book 2', author: 'Author 2' },
    // { name: 'Book 3', author: 'Author 3' }
    // ];


    // const BookNames=(books)=>{
    //     const names=[];
    //     books.forEach((element) => {
    //         names.push(element.name);
    //     });
    //     return names;
    // }

    // console.log(BookNames(books));

// 45. Напишите функцию, которая принимает массив объектов товаров и строку с категорией товара. Функция должна вернуть новый массив, содержащий только товары с указанной категорией.
    // const products = [
    // { name: 'Товар 1', category: 'Электроника' },
    // { name: 'Товар 2', category: 'Книги' },
    // { name: 'Товар 3', category: 'Электроника' },
    // { name: 'Товар 4', category: 'Одежда' },
    // { name: 'Товар 5', category: 'Книги' }
    // ];


    // const filterProductsByCategory=(produts, name)=>{
    //     const filteredProducts=products.filter((element)=>{
    //         return element.category===name?true:false;
    //     })
    //     return filteredProducts;
    // }

    // console.log(filterProductsByCategory(products, 'Книги'));

//46 функция принимает массив объектов товаров и еще один параметр, который представляет собой минимальную цену товара. Функция должна вернуть новый массив, содержащий только товары, цена которых не ниже указанного значения.
// const products = [
// { name: 'Товар 1', price: 100 },
// { name: 'Товар 2', price: 150 },
// { name: 'Товар 3', price: 200 },
// { name: 'Товар 4', price: 80 },
// { name: 'Товар 5', price: 120 }
// ];


// const filterProductsByPrice=(obj, number)=>{
//     let newArr=products.filter((obj)=>{
//         if(obj.price>number){
//             return true;
//         }
//     })
//     return newArr;
// }

// console.log(filterProductsByPrice(products, 150));







