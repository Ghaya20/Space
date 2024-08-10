const op = document.getElementById("op")
const cl = document.getElementById("close")
const cont=document.getElementById("nav")
const hom = document.getElementById("home");
const km = document.getElementById("km")
const sec = document.getElementById("sec")
// destination
const moon = document.getElementById("moon")
const mars= document.getElementById("mars")
const euro= document.getElementById("euro")
const titan = document.getElementById("titan")
const title = document.getElementById("title")
const des = document.getElementById("des")
const dist = document.getElementById("dist")
const time = document.getElementById("time")
const planet = document.getElementById("planet")
const distance = document.getElementById("distance")
const traveltime = document.getElementById("traveltime")
// crew


op.addEventListener("click",()=>{
    cl.classList.toggle("hidden");
    cont.classList.toggle("hidden");
    op.classList.toggle("hidden");
})
cl.addEventListener("click",()=>{
    op.classList.toggle("hidden");
    cl.classList.toggle("hidden");
    cont.classList.toggle("hidden");
})
hom.addEventListener("click",()=>{
    op.classList.toggle("hidden");
    cl.classList.toggle("hidden");
    cont.classList.toggle("hidden");
})
mars.addEventListener("click",()=>{
    title.textContent = "MARS";
    des.textContent = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    dist.textContent = "225 MIL ";
    time.textContent=" 9 MONTHS";
    planet.src="https://ik.imagekit.io/gaia/Space/image-mars.png?updatedAt=1722696086618";
})
euro.addEventListener("click",()=>{
    title.textContent = "EUROPA";
    des.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    dist.textContent = "628 MIL. KM EST";
    time.textContent= "3 YEARS";
    planet.src="https://ik.imagekit.io/gaia/Space/image-europa.png?updatedAt=1722662189477";
})
titan.addEventListener("click",()=>{
    title.textContent = "TITAN";
    des.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. ";
    dist.textContent = "1.6 BIL. KM EST";
    time.textContent= "7 YEARS";
    planet.src="https://ik.imagekit.io/gaia/Space/image-titan.png?updatedAt=1722696086603";
})
moon.addEventListener("click",()=>{
    title.textContent = "MOON";
    des.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites";
    dist.textContent = "384,400 KM EST";
    time.textContent= "3 DAYS";
    planet.src="https://ik.imagekit.io/gaia/Space/image-moon.png?updatedAt=1722694789891";
})

 