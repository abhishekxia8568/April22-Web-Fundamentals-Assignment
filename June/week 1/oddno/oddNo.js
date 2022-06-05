let n=parseInt(prompt('Enter the number of terms'))
function oddNo(n)
{   
    sum=0
    for(let i=1;i<=2*n;i++)
    {
        if(i%2!=0)
        {
            console.log(i);
            sum=sum+i
        }
    }
    console.log('sum of above odd nos is ' + sum);
}
oddNo(n)