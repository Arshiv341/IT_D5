const arr = [1,2,3,4,5,6,7,8];
//map
const mapArr = arr.map((ele)=>{return ele*4});
console.log(mapArr);
//reduce
const sum = arr.reduce((acc,ele) => acc += ele, 0);
console.log(sum);
//filter
const filterData = arr.filter((ele) => ele%4==0);
console.log(filterData);

const data = [
    {
        productID : 1,
        productName : "A",
        price : 499,
        manufactureData : "25-SEPT-2025",
        color : ['R', 'B','Black', 'W']
    },
    {
        productID : 2,
        productName : "B",
        price : 489,
        manufactureData : "24-SEPT-2025",
        color : ['R', 'B','Black', 'W']
    },
    {
        productID : 3,
        productName : "C",
        price : 479,
        manufactureData : "20-SEPT-2025",
        color : ['R', 'W']
    },{
        productID : 4,
        productName : "D",
        price : 690,
        manufactureData : "2-SEPT-2020",
        color : ['R', 'B', 'W']
    }
]

const mapData = data.map((ele)=>ele.productName);
console.log(mapData);

const filterOnprice = data.filter((product) => product.price <= 600);
console.log(filterOnprice);

const filterOncolor = data.filter((product) => product.color.filter((color) => color === 'R')
);
console.log(filterOnPrice);