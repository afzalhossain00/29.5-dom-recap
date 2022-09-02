const today = new Date()
console.log(today);

const date1 = new ('1997-09-05');
const date2 = new ('1997-12-25');

if (date1.getTime() > date2.getTime()) {
    console.log('march was before decembar')
}
else {

    console.log('march was not before decembar')
}