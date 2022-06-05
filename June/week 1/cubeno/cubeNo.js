let num=parseInt(prompt('enter the number'))
function cubeNoUptoN(num)
{
    for(let i=1;i<=num;i++)
    {
        let c=i*i*i
        console.log(c);
    }
}
cubeNoUptoN(num)