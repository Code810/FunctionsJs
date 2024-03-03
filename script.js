//----------------task--------------
// let company1={name:"nadir",adress:"Baki",creatDate:"2005",endDate:"2021"}
// let company2={name:"amid",adress:"yasamal", creatDate:"2011", endDate:"2016"}
// let company3={name:"alim",adress:"xirdalan", creatDate:"2015", endDate:"2019"}
// let company4={name:"nesib", adress:"bineqedi",creatDate:"2016",endDate:"2019"}
// let companys=[company1,company2,company3,company4]
// let newarr= companys.filter(company=>company.name.startsWith("a")&&company.creatDate>2014&&company.endDate<2020)
// console.log(newarr);

//--------------task2------------

// function caculatesum(arr) {
//     let sum=0;
// arr.forEach(element => {
//     if (element%2==0) {
//         sum=sum+(element*element);
//     }
// });
// return sum;
// }
// let numbers=[5,2,4,3,6];
// console.log(caculatesum(numbers));

//--------------task3------------

function monthFinder(months){
let newmonths=months.map(element => {
    switch (element) {
        case "yanvar": element+=" "+"-1"
            break;
            case "fevral": element+=" "+"-2"
            break;
            case "mart": element+=" "+"-3"
            break;
            case "aprel": element+=" "+"-4"
            break;
            case "may": element+=" "+"-5"
            break;
            case "iyun": element+=" "+"-6"
            break;
            case "iyul": element+=" "+"-7"
            break;
            case "avqust": element+=" "+"-8"
            break;
            case "sentyabr": element+=" "+"-9"
            break;
            case "oktyabr": element+=" "+"-10"
            break;
            case "noyabr": element+=" "+"-11"
            break;
            case "dekabr": element+=" "+"-12"
            break;
        default: element+=" "+"adli ay yoxdur"
            break;
    }
    return element;
});
return newmonths
}
let count=prompt("Daxil edeceyiniz aylarin sayini qeyd edin");
let start=1;
let array=[];
while (start<=count) {
    let month=prompt(`${start}-c ayi daxil edin`);
array.push(month.toLowerCase());
start++;
}

console.log(monthFinder(array));