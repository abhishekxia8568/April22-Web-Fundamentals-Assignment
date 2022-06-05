var m= 1000005;
function primeNthTerm(primes)
{
    
    var IsPrime = Array(m).fill(true);
     
    var p,i;
    for (p = 2; p * p < m;p++)
    {
        
        if (IsPrime[p] == true)
        {
           
            for(i = p * p; i < m; i += p)
                IsPrime[i] = false;
        }
    }
 
   
    for (p = 2; p < m; p++)
        if (IsPrime[p])
            primes.push(p);
}
 

    var primes = [];
 
  
    primeNthTerm(primes);

    var n=parseInt(prompt('enter the nth term'))
    console.log(primes[n-1]);

 
