//Variables
let userPetName = prompt("Please name your pet: ") || "Your pet";
let userActionCount = 0;
let petEnergy = 0;
let petHappiness= 0;

//Loop
while (userActionCount < 6) {
    let userAnswer = prompt("Would you like to feed, pet or walk your pet?").toLowerCase();
    userActionCount++;  
        if (userAnswer === 'feed') {
            petEnergy += 2;
        } else if (userAnswer === 'pet') {
            petHappiness += 1;
        } else if (userAnswer === 'walk') {
            if (petEnergy === 0) {
                alert('Not enough energy to enjoy a walk!')
            } else {
                petEnergy--;
                petHappiness += 2;
            }  
        } else {
            alert('please make a vaild entry');
        }
}; 

//Results
console.log(`${userPetName}'s energy level is ${petEnergy} and their happiness level is ${petHappiness}!`);
