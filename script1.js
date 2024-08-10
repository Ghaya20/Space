const job = document.getElementById("job")
const crew = document.getElementById("crew")
const nam= document.getElementById("name")
const pic = document.getElementById("photo")
const fl = document.getElementById("fl")
const com = document.getElementById("com")
const pi = document.getElementById("pi")
const sp = document.getElementById("sp")
const flight = document.getElementById("flight")
const command = document.getElementById("command")
const pilot = document.getElementById("pilot")
const special = document.getElementById("specialist")

command.addEventListener("click",()=>{
    job.textContent = " COMMANDER";
    crew.textContent = "DOUGLAS HURLEY";
    nam.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    pic.src="https://ik.imagekit.io/gaia/Space/image-douglas-hurley1.png?updatedAt=1723038969130";
})
com.addEventListener("click",()=>{
    job.textContent = " COMMANDER";
    crew.textContent = "DOUGLAS HURLEY";
    nam.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    pic.src="https://ik.imagekit.io/gaia/Space/image-douglas-hurley1.png?updatedAt=1723038969130" ;
})
flight.addEventListener("click",()=>{
    job.textContent = "FLIGHT ENGINEER";
    crew.textContent = "ANOUSHEH ANSARI";
    nam.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    pic.src="https://ik.imagekit.io/gaia/Space/image-anousheh-ansari.png?updatedAt=1722765995477" ;
})
fl.addEventListener("click",()=>{
    job.textContent = "FLIGHT ENGINEER";
    crew.textContent = "ANOUSHEH ANSARI";
    nam.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    pic.src="https://ik.imagekit.io/gaia/Space/image-anousheh-ansari.png?updatedAt=1722765995477" ;
})
pilot.addEventListener("click",()=>{
    job.textContent = "PILOT";
    crew.textContent = "VICTOR GLOVER";
    nam.textContent = "Victor Glover was on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    pic.src="https://ik.imagekit.io/gaia/Space/image-victor-glover1.png?updatedAt=1723038968796" ;
})
pi.addEventListener("click",()=>{
    job.textContent = "PILOT";
    crew.textContent = "VICTOR GLOVER";
    nam.textContent = "Victor Glover was on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    pic.src="https://ik.imagekit.io/gaia/Space/image-victor-glover1.png?updatedAt=1723038968796";
})
special.addEventListener("click",()=>{
    job.textContent = "MISSION SPECIALIST";
    crew.textContent = "MARK SHUTTLEWORTH";
    nam.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    pic.src="https://ik.imagekit.io/gaia/Space/image-mark-shuttleworth1.png?updatedAt=1723038968630" ;
})
sp.addEventListener("click",()=>{
    job.textContent = "MISSION SPECIALIST";
    crew.textContent = "MARK SHUTTLEWORTH";
    nam.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    pic.src="https://ik.imagekit.io/gaia/Space/image-mark-shuttleworth1.png?updatedAt=1723038968630" ;
})

