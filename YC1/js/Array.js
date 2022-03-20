const num =[1,2,3,4,5,5,7,7];

console.log(num.length);

console.log(num[0]);

console.log(num[(num.length)/2]);

console.log(num[num.length-1]);

const mixedDataTypes=[1,2,3,4,5,6,7];
console.log(mixedDataTypes.length);


var itCompanies = [ 'Google', 'Facebook','Microsoft','Apple','IBM','Oracle'];
console.log(itCompanies);

console.log('Số lượng công ty trong mảng;'   + itCompanies.length);

console.log('Công ty đầu tiên trong mảng;'  + itCompanies[(itCompanies.length)/2]);

console.log('Công ty trong mảng;'   +  itCompanies[itCompanies.length -1]);

for(var i=0; i<itCompanies.length; i++){
    console.log(itCompanies[i]);
   
}

     console.log(
         itCompanies[0] + ',',

         itCompanies[1]  +',',

         itCompanies[2]  + ',',

         itCompanies[3] +  ',',

         itCompanies[4] + ',',
        
         itCompanies[5] + ' là những công ty CNTT lớn.');

var test ='zalo';
for(var i=0; i<itCompanies.length;i++){
    if(test != itCompanies[i]){
        console.log(i+1 + ' không phải');
    }
}
itCompanies.splice(0,3);
console.log(itCompanies);

itCompanies.splice(3,3);
console.log(itCompanies);

itCompanies.shift();
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

var tong = itCompanies.length;
itCompanies.splice(0, tong );
console.log(itCompanies);