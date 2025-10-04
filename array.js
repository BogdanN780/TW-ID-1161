/*const arr = [1,2,3,4,5];
console.log(arr.length);
console.log(arr.pop());
console.log(arr);


console.log(arr.slice(1,3));

for(let i = 0; i<arr.length;i++)
{
    console.log(arr[i]);
}
const forEach = arr.forEach((el, index) =>
{
    console.log(el);

    return el;
})
console.log(forEach);
//map
for (const el in arr){
    console.log(el);
}*/

const arr = ['mihai','adrian'];
const concatenare = (arr) => (arr.join(''));
console.log(sentence(arr));
string1 = "test";
string2 = "b";

const diffChar=(str1,str2)=> {
    if(str1.length!==str2.length)
    {
        return -1 ;
    }
    let count = 0;
    for(let i = 0;i<str1.length;i++)
    {
        if(str1[i]==str2[i])
            count++;
    }
    return count;
}
console.log(diffChar(string1,string2));
