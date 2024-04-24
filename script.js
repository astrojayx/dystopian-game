// Initial game state
let balance = 1000;
let reputation = 50;
let corruptionLevel = 0;

// Function to play a turn based on the given action
function PlayTurn(action) {
    let output = "";  // To store messages for this turn

    switch (action) {
        case "invest":
            let investment = Math.floor(Math.random() * 500) + 100;  // Random investment
            balance -= investment;  // Decrease balance
            output += `You invested $${investment}.\n`;
            break;

        case "lobby":
            let lobbyCost = Math.floor(Math.random() * 200) + 100;  // Random lobbying cost
            balance -= lobbyCost;  // Decrease balance
            let influenceGain = Math.floor(Math.random() * 20) + 10;  // Random reputation gain
            reputation += influenceGain;
            output += `You spent $${lobbyCost} on lobbying and gained ${influenceGain} reputation.\n`;
            break;

        case "embezzle":
            let embezzleAmount = Math.floor(Math.random() * 300) + 100;  // Random embezzlement amount
            balance += embezzleAmount;  // Increase balance
            corruptionLevel += 10;  // Increase corruption
            output += `You embezzled $${embezzleAmount}.\n`;
            break;

        case "audit":
            let auditChance = Math.random();  // Random chance of audit success/failure
            if (auditChance < 0.3) {  // 30% chance of getting caught
                let auditFine = Math.floor(Math.random() * 300) + 100;  // Random fine amount
                balance -= auditFine;  // Decrease balance
                reputation -= 20;  // Decrease reputation
                output += `You were audited and fined $${auditFine}. Reputation decreased by 20.\n`;
            } else {
                output += "You passed the audit without any issues.\n";  // No audit fine
            }
            break;

        case "MoneyLaundering":
            let moneyluan = Math.random(); 
            if (moneyluan < 0.3) {
                let moneyfine = Math.floor(Math.random() * 100) + 100;
                balance += moneyfine;
                reputation -= 30;
                output += "You did something illegal mf! but gained $${moneylaun}. Reputaion decreased by 30.\n";
            
            break;
            
            }

        default:
            output += "Invalid action.\n";  // Handle invalid actions
            break;    
        }



    // Check for high corruption levels
    if (corruptionLevel >= 80) {
        balance -= 500;  // Penalty for high corruption
        output += "Your corruption has been exposed. You lost $500.\n";
    }

    if (balance < 2000) {
        output += "You Loose";
    }


    // Update the UI with new game state
    document.getElementById("balance").textContent = balance;
    document.getElementById("reputation").textContent = reputation;
    document.getElementById("corruption-level").textContent = corruptionLevel;

    // Display the output message
    const outputContainer = document.getElementById("output-container");
    outputContainer.textContent = output;  // Show the message in the output container
}

