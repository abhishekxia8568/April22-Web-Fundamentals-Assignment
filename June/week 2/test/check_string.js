//For question 1

function checkString()
{
    var list = ['geek', 'geekster', 'geeky']
    for(let i=0;i<list.length;i++)
    {   
        if(list[i]==='geekster')
        {
            list.splice(i,1)
        }
        console.log(list[i]);
    }
    
}    
checkString()


//question 2 &3 are written in excel sheet
//for question 4

function indexPosition()
{
    var arr= ['a','b','c','d'];
    for(let j=0;j<arr.length;j++)
    {
        if(arr[j]==='e')
        {
            console.log(j);
        }
    }

}
indexPosition()

//question 5 is written in excel sheet
//for question 6
function largestElementInSortedArray()
{
    let sortedArray=[0,1,2,3,4,5,6,7,8]
    let l=sortedArray.length-1
    console.log(sortedArray[l]);
}
largestElementInSortedArray()