In my password generator I came in with the idea that I want to Alert the user on password criteria, was the user is aware they will be put onto a page that lets them set their password length, choose uppercase, include numbers, and include special characters.

I started out by creating selectors in the HTML file all locatated in a <Form> tag that included "Password length, Uppcase letters, Numbers from 0-9, and special characters". 
creating the Password length I wanted to make sure the user was not able to choose anything less then 8 characters and nothing more than 128 by setting the min and max to their respective numbers.
After that I made check boxes for each of the remaining criteria boxes.

<img src=https://github.com/Ryebread5555/module-3-dec-12-2022/Develop/assets/Criteria-Selectors.jpg>


I also changed a couple of things in the HTML like changing the <button> tag into a <input> tag with a type="sumbit" for the btn. This was just easier for me to work with when I was working on my Javascript.


last was adding an alert to prompt the user on the criteria before they create a password. 


My HTML is complete and now its time to move to the JavaScript.
Starting my JS I created a bunch of "Var" to properaly select my ID's from my HTML while also making "const" that would include an Array of numbers, characters, and special characters.



Next I wanted to create a function that would contain a "For loop" to generate a random lowercase letter, number, uppercase, and special character. When creating my "for loop I ran into a problem where it wasn't giving me enoug characters when I asked it to give me 8. So I set the local var to be 128, that way it will always generate a password that is 128 characters but if the user choose 8 characters they will only get 8 characters from that 128 character password. 





I also ended up building a "helper function" to test my randomCharacter and make sure it was working correctly. After I built that it was as simple as plugging in the function to my for loop and making sure I would get randomCharacter for all of my variables.


While I was doing all of this I would make console.logs to make sure my code was working and checking the debugger to make sure all was good.
Another issue I ran into was when I made my "eventlisterner" I had put in all of my "const" but I marked them instead of ".checked" I said ".value" which caused my criteria checkers to be true all of the time and was not allowing me to corretly generate a code. After checking the debugger and making a break to see were the code was not working I found out the I should change my "const" to ".checked" instead of ".value".




This assignment was quite difficult as I didn't know were to start and I found writing down what I wanted to accomplish helped on deciding on how I would want to complete this.
