console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie =async()=>{
    const promiseWifeBringingticks =new Promise((resolve, reject) => {
        setTimeout(()=>reject('ticket'),3000);
    });
const getPopcorn =new Promise((resolve,reject)=>resolve('popcorn'));
const getButter =new Promise((resolve, reject)=>resolve('butter'));
const getcolddrink =new Promise((resolve, reject)=>resolve('colddrink'));
let ticket ;
try{
    ticket = await promiseWifeBringingticks;

} catch(e){
    ticket='sad face';
}


  

let [popcorn, butter, colddrink] =await Promise.all([getPopcorn,getButter,getcolddrink]);
console.log(`${popcorn}, ${butter},${colddrink}`);
  



   return ticket;
}
preMovie().then((m)=>console.log(`person3 : shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
