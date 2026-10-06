//Город и температура
function getTemperature(city, temperature) {
    console.log(`Сеичас в городе ${city} температура по цельсию - ${temperature} ℃`)
    return temperature `Сеичас в городе ${city} температура по цельсию - ${temperature} ℃`
}
getTemperature(Казань, 13)
//Скорость света
 const LIGHT_SPEED = 299792458;
function checkSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        return "Сверхсветовая скорость"
    }
    else if (speed < LIGHT_SPEED) {
        return "Досветовая скорость"
    }

    else {
        return "Скорость света"
    }
}
console.log(checkSpeed(299792458))
//Продукт и сумма
const PRODUCT_PRICE = 170000
function purchaseProduct(name,price,currentBudget) {
    if (currentBudget >= PRODUCT_PRICE){
       return `${name} приобретён. Спасибо за покупку!`
    }
     else if (currentBudget < PRODUCT_PRICE)   
     return `Вам не хватает X$, пополните баланс`
        }
console.log(purchaseProduct(`Iphone 17 pro max`, PRODUCT_PRICE, 180000))

//Возраст для прохода в сайт
const AGE = 18
function ageRequirementToAccessTheSite(myAge) {
    if(myAge >= AGE){
        return "Вам разрешен доступ в сайт!"
}
    return "Извините, но доступ лицам меньше 18 лет запрещен."{
}
console.log(AgeRequirementToAccessTheSite(20))
// Три переменные
//1
let myName = 'Islam';
let myAge = 15;
console.log(myName,myAge)
//2
function myStage(stage,minimumStage) {
    if(stage >= minimumStage)
        return"Вы нам подходите!"
}
        return"Извините, но у вас маленький стаж,вы нам не подходите."
}
console.log(myStage(5,4))
//3
const THE_MAX_WEIGHT = 100
function  fishingСontrol(name,fishWeight) {
    if(fishWeight >= THE_MAX_WEIGHT)
        return`${name}Вам полагается штраф за не выпускание рыбы больше положенного веса`
}
{
        return`${name} , Вы можете оставить рыбу себе`
}
console.log(fishingСontrol(`Вася`,90, THE_MAXIMUM_WEIGHT))
