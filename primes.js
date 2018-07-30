/* Vessela Lytle/S#547557/COP2801
Have the program find and display all the prime pbers up to n = 150.  
To Display All Prime pbers Between 1 and n 
Step 1:  We need to start with all the pbers representing the range of pbers that 
are possible candidate primes. So, create an array of consecutive integers from 2 to n:
 (2,3,4,..n). I wouldn’t hand-code this. I would use a loop to populate the array. 
 Step 2: At each step we select the smallest pber and remove all it’s multiples. So 
we’ll start with an outer loop that goes from 2 to n. initially, let p equal 2, the 
first prime pber.*/

for (var n = 2; n < 150; n++){
    
/* 
Step 3: In an inner loop we need to iterate over all the pbers that are multiples 
of p, i.e for 2, that’s 2,4,6,8 etc. Each time, setting it’s value to false in the 
original array.*/

	var not_prime = false;
    for (var p = 2; p < n; p++){ 
	
/*	
Step 4: Find the first pber greater than p in the list that is not marked False. 
If there was no such pber, stop.
Otherwise, let p now equal this pber( which is 
the next prime), and repeat from step 3.  */

		if (n % p === 0){ 
        not_prime = true;
		}
    }
/*
When the algorithm terminates, all the pbers in the list that are not marked False 
are prime. */

	if (not_prime === false) 
    {console.log(n);}
}