# MemeCoin
[View the website](doge.oliverlouis.com)
## About
Back near the end of January, after the first spike in value of DOGE, I bought 20,000 DogeCoin at about $1,300 Australian Dollars. At the time, I didn't have much faith in the crypto-currency, I went in completely for the memes, expecting just to lose my money, and to get a funny story out of this. Everyone around me agreed that this was a horrible idea, and that I was basically just burning money. Nonetheless, I still hung in there, and as of May, I've nearly octupled my investment.

This isn't me telling you to invest in DOGE. I agree with everyone around me that it was a horrible idea, and DOGE isn't anything close to stable. However, as the currency has been going up, I've started paying more attention to my investment. A few weeks ago, I originally wrote the "memecoin.py" script, which is a simple CLI version of this website; printing how much I've made out of a meme. But... I figured that I've got enough resources to make this a website, so I've decided to make this website to laugh at everyone who doubted me.

This website is very much in the works, and in fact was more of a learning experience for me; getting more used to JavaScript, and web-design.

### How does the website work?
The website pulls API information from the SoChain API using XMLHttpRequest. From this price-per-coin, it then calculates how much I could sell my DOGE for at current market prices, then calculates the profit by accounting for the original investment cost.

I was originally going to write this website using Flask or React, and using Bulma for CSS. Don't get me wrong, I love these frameworks and use them all the time, but given the simplicity of this website, I opted towards writing it normally; with no additional frameworks, in order to make the website as light-weight as possible.

## Contributing
As a quick look at the source code might tell you, this code isn't anywhere near optimized. If you were wishing to contribute, please submit a pull request, and I will be sure to look over it.

### Future Features
Originally, I planned on also listing the peak profit of my investment (that is, the highest price I could have sold for), however, I was unable to find an API to find the peak AUD price; in order to perform the calculation client side. 
I will still be implementing this feature, just at a delayed pace, as I have to sort out my own solution for finding (and updating) the peak price.
In addition, I would like to make the website more reactive, adding graphs and all that shit.

As much as I doubt anyone would want to host their own version of this, I would still like to implement an easier setup; with a single config file, where a user can set up this website for themselves within minutes (without having to browse through all the source code).


