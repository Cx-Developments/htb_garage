# A better vehicle garage system for FiveM RP by Harry The Bastard

**Motivation**

We started our Role Play server with a basic garage system which worked nicely but had many issues. The ESX default menu used was limited and once you start acquiring many vehicles there was no sorting or filtering possible. We investigated other options including commercial resources which were mostly disappointing. One company in particular whose garage we purchased had some brilliant features and was visually exactly what I wanted to use, but past experiences with their support team on other of their products was disappointing and given I was having trouble integrating their garage and their system was obfuscated the thought of having to deal with them for support was frustrating enough to decide that writing my own system from the ground up was the only option. I have included features that I've seen in other garages and also implemented some of my own unique ideas. The only code that isn't original is the garage configuration which I lifted from jb eden garage as the configuration was pretty solid and locations were all there and ready to go. I've also integrated some code from ESX for spawning and despawning vehicles so that the resource can run fully stand alone. One interesting metric...in the city we run my character has 248 owned vehicles. When we isntalled a paid garage it took in excess of 5 seconds to list the vehicles and the whole game would lock up during the fetch time. htb_garage on the exact same dataset takes under 1 second and nothing freezes.

**Goals**

I've been developing for FiveM for almost 12 months now. I had never worked with LUA so there was alot of leaning on existing examples to try to learn the syntax and general coding practices for the base language but there's also how to cater for the architecture that FiveM mandates. Using ESX 1.2 Final provided us with a fairly solid starting point but that framework has such a fundamentally flawed architecture that we spent alot of time re-writing many of the supporting addon resources to get a stable system. My key goal with this first public resource is to build something that can be re-used by anyone and integrate with any framework, be clearly written and easy to adapt over time. I am trying to use clean code to demonstrate how people could approach coding to produce better quality work. I would like to think that what I do here triggers clearer thinking, particularly for new developers for whom FiveM is their first coding experience. I have included some original ideas and re-used standard patterns, for example I've included a clean way for people to configure the identifier they wish to use, eg steam, identifier, discord, etc as well as a neat way to configure the framework in use and be able to cleanly switch between them. For sorting a list rather than looping and coming up with the slowest possible pattern in LUA I've used a Binary Tree to add potentially random data into a list sorting efficiently at the time of insert and being able to traverse it efficiently for display. I hope my work can help show a different way of thinking about coding for FiveM.

 **Features**
 
 * Every parking garage has a set number of spawn locations. If the first position is occupied by a vehicle or ped then the next spawn location is checked, looping through until one is free or the player is notified that there a no positions available.
 * Vehicle menu can filter the vehicle list as you type. The text compares the internal model name of the vehicle as well as plate, display and nickname.
 * Set a nickname for the vehicle.
 * If a vehicle is out in the world you can pay for a retrieve.
 * If you prefer not to pay for a retrieve a GPS waypoint can be added to the minimap.
 * If the vehicle is marked as impounded you won't be able to spawn it.
 * Transfer ownership to another player.
 * All players occupying seats of a boat will be spawned on the dock rather than dropped in the water where the boat was prior to despawn.
 * Event handlers provided to allow vehicles instances to be tracked to avoid vehicle duplication. eg, esx_vehicle shop adds an owned_vehicle record but if you don't put the vehicle away first you can get the vehicle out and have a duplicate, at least with some garages. So you can Trigger these events passing the vehicle instance and plate to allow tracking. This could also be useful if using an external vehicle impound system where you want to mark a vehicle as disposed when impounded or to track it again once released from impound.

**Future Direction**

The design isn't perfect as this is only a first rough cut. I intend apply some more design patterns such as Factories and Strategy to provide more pluggable versions of the code to cater for the different frameworks I'd like this to support out of the box. As an example the spawning process currently only handles the ESX 'vehicle' column from owned_vehicles. If a framework provides a different definition then this system needs to customised by the server developers and I'll porobably never see a pull request to back integrate...plus it's likely to be a bandaid hack, so I'd rather provide a clean and modular way to provide support for different Role Play frameworks out of the box as well as accomodate custom frameworks allowing the server developers to put their custom code into a dedicated source file without needing to modify the core system.

I plan to be actively maintaining this project and I'm open to suggestions and pull requests to merge back any fixes to issues that people with to contribute.

If you need any assistance feel free to reach out at https://discord.gg/Ngg75byBbB
