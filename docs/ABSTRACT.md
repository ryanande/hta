# It is about the "/"

To start, my initial developer experience started on the Microsoft stack. Back before VB6 dropped, with VB5, and then classic Active Server Pages (ASP). Developers who's root started elsewhere, Java or C for example, for sure have a different perception on this than I did.

In the late 90's and early 00's I began my developer journey. Early on in the process I discovered the concept of Continuous Integration. My start began on the Microsoft stack. There was a gap on the MS side addressing this concept. Microsoft was too caught up in "RAD", I joke. This concept was no stranger to seasoned developers and other tech stacks, it was fresh to me.

The first one that crossed my brain was CruiseControl.NET (CCNet). It was the .NET adaptation of the original CruiseControl tool (created in 2001). The Java based continuous integration tool built by [ThoughtWorks](https://www.thoughtworks.com/), aka [Martin Fowler](https://martinfowler.com/).

The concepts Mr.Fowler spoke to were fresh to all the talent infused into the industry at the time. The initial roots of Continuous Integration had been around. Introduced in 1991 by [Grady Booch](https://en.wikipedia.org/wiki/Grady_Booch). They were further pushed into thought by [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck). It became a cornerstone of [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming).

Working with CCNet was somewhat daunting for me. Piles of options, working with [NAnt](https://en.wikipedia.org/wiki/NAnt) scripts, tedious work. This was however alleviated by a gentlemen named [Jay Flowers](https://www.linkedin.com/in/jfl0wers/) with CIFactory. [Scott Hanselman](https://www.hanselman.com/blog/continuous-integration-screencast-jay-flowers-and-i-on-dnrtv) of course picked up its power and benefits and actually did a "screencast" with him on the solution. This toolset really opened the doors to developers leveraging the .NET stack, and ushered CI into a first class citizen in that space. It saved you countless hours in its template based automation approach to set up.

Just a quick history fact here. [make](https://en.wikipedia.org/wiki/Make_(software)), a classic Unix build tool used ubiquitously today, was first intorduced in 1976 (*alomst* before I was born). Just for perspective.

Continuous Integration was a no brainer. Why wouldn't you want to automate? Why wouldn't you want automated testing and validation? That concept grew and expanded with another "duh" concept, Continuous Delivery/ Deployment. Yea, automate all the things!

Fast forward 20 years. Those two concepts have spawned a new dedicated field in software development teams and IT. DevOps. When it comes to CI/ CD, there is one minor detail that tends to be overlooked... The "/" or some times "&". The slash, as minor at is seems is under appreciated in its importance. Integration and Deployment are two separate concepts. Often managed by two separate groups of folks within an organization. Yes, testing is important. It is always has been and always will be. At this point, development and testing should be synonymous, one and the same.

I am a firm believer in what ever the build server does, a developer should be able to do on their local machine. The reality is, developers do not deploy to production from their local machine. No, not these days. That said, a developer should be able to mimic it, test it, and vet it on their local machine. This is one of the powers of containers.

When it comes to deployments, all bets are off when looking at it through a lens of tens years ago. Things have changed drastically in that period. We have gotten better, evolved, and continue to align to a better development community as a whole. By separating these two concepts out it allows us great flexibility. Greater levels of automation. Allows us to keep things clean and organized to increase success of our efforts.

With that evolution sometimes comes complexity. More things to learn, more things to *know*. Our current life is tackling the cloud. With its many benefits, costs and environmental benefits lead my charge. Not to discount the myriad of other benefits for example flexibility, scalability, elasticity. It has also brought new challenges and new solutions to the plate to enable us to push forward.

This repository represents 20+ years of frolicking in the world of software development to our current place in time. It walks through some newer corners of the space and provides a researched approach to learning and leveraging the latest goods allowing you and those around you to have a better quality of life... Possibly.
