const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(buddy=>displayBuddy(buddy));
}

const displayBuddy = buddy => {
    const buddies = buddy.results;
    const buddyDiv = document.getElementById("buddy-div");
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerHTML=`G : ${buddy.gender} | 
        N : ${buddy.name.title}.${buddy.name.first} ${buddy.name.last} |
        E : ${buddy.email} | 
        P : ${buddy.cell} 
        `
        p.classList.add("friend");
        buddyDiv.appendChild(p);
    }
}

