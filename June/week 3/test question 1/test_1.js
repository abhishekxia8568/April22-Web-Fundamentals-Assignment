function sumOfPositiveIntegerInArray()
{
    let sum=0
    const input = [ 1, -5, 2, 10, -30, 29, 50];
    for(let i=0;i<input.length;i++)
    {
        if(input[i]>0)
        {
            sum=sum+input[i]
        }
    }
    console.log('sum of all positive integer is '+sum);
}
sumOfPositiveIntegerInArray()