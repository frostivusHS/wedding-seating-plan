// seating.js

// Seating data based on the guest list provided
const seatingData = [
    // VIP Table
    { name: "Lee De Rui", table: "VIP" },
    { name: "Jamie Kok", table: "VIP" },
    { name: "Dr Kok Wei Chang", table: "VIP" },
    { name: "Dr Wendy Tan", table: "VIP" },
    { name: "Lee Jim Heng", table: "VIP" },
    { name: "Khoo Sock Know", table: "VIP" },
    { name: "Lee De Hong", table: "VIP" },
    { name: "Wayne Ho", table: "VIP" },
    { name: "Amanda Lee", table: "VIP" },
    
    // Table 1 (Kok Family 1)
    { name: "Alan Kok", table: "1" },
    { name: "Yap Lin Lin", table: "1" },
    { name: "Jason Kok", table: "1" },
    { name: "Kookkai Naruporn", table: "1" },
    { name: "Lucas Kok", table: "1" },
    { name: "Jaycus Kok", table: "1" },
    { name: "Marcus Kok", table: "1" },
    { name: "Gaik Wong", table: "1" },
    { name: "Wong Heng Wooi", table: "1" },
    
    // Table 2 (BBGS 1)
    { name: "Soh Fern", table: "2" },
    { name: "Lim Kit Wan", table: "2" },
    { name: "Wei Lee", table: "2" },
    { name: "Kum Yee", table: "2" },
    { name: "Mei Koon", table: "2" },
    { name: "Ee Hwa", table: "2" },
    { name: "June Ng", table: "2" },
    { name: "Sher Ling", table: "2" },
    { name: "Dato Hashimah", table: "2" },
    { name: "Dr Norela", table: "2" },
    
    // Table 3 (BBGS 2)
    { name: "Mazlina", table: "3" },
    { name: "Marializa", table: "3" },
    { name: "Roza", table: "3" },
    { name: "Mawa", table: "3" },
    { name: "Rashidah", table: "3" },
    { name: "Veronica Choong", table: "3" },
    { name: "Izrin", table: "3" },
    { name: "Faridah Hanim", table: "3" },
    { name: "Rosmimi", table: "3" },
    { name: "Khayr", table: "3" },

    // Table 5 (Tan Family 1)
    { name: "Richard Tan", table: "5" },
    { name: "Fang Mei Ling", table: "5" },
    { name: "Ethan", table: "5" },
    { name: "En Ci", table: "5" },
    { name: "Shaun Lew", table: "5" },
    { name: "Yeoh Kean Hin", table: "5" },
    { name: "Ling Khim", table: "5" },
    { name: "Bernard Lee", table: "5" },

    // Table 6 (Kok Family 2)
    { name: "Gan Yew Tuan", table: "6" },
    { name: "Gan Wee Loon", table: "6" },
    { name: "Gan Wee Ting", table: "6" },
    { name: "Uncle Steven", table: "6" },
    { name: "Marcela", table: "6" },
    { name: "Phoebe", table: "6" },
    { name: "Rosemary", table: "6" },
    { name: "Krystal", table: "6" },
    { name: "Li Ai", table: "6" },
    { name: "Connie", table: "6" },

    // Table 7 (Doctors 1)
    { name: "Dr CC Ong", table: "7" },
    { name: "Martina", table: "7" },
    { name: "Dr Chai Leng", table: "7" },
    { name: "Dr Shu Nam", table: "7" },
    { name: "Dr Siew Leng", table: "7" },
    { name: "Elsie", table: "7" },
    { name: "Dr Ong Shong Meng", table: "7" },
    { name: "Dr Suren", table: "7" },
    { name: "Christine", table: "7" },
    { name: "Dr Khoo Phaik Choo", table: "7" },

    // Table 8 (Kok Family 3 - US)
    { name: "Dr Jonathan Kok", table: "8" },
    { name: "Dr Jared Kok", table: "8" },
    { name: "Mimi", table: "8" },
    { name: "Tet Chong", table: "8" },
    { name: "Dr Kok Boon Cheng", table: "8" },
    { name: "Dr Alan Harris Sr", table: "8" },
    { name: "Bernard Kok", table: "8" },
    { name: "Be Chim", table: "8" },
    { name: "Ah Boon", table: "8" },
    { name: "Ah Boon son", table: "8" },

    // Table 9 (Tan Family 2)
    { name: "Alison Tan", table: "9" },
    { name: "Chris", table: "9" },
    { name: "Ah Choy", table: "9" },
    { name: "Nicolas", table: "9" },
    { name: "Belinda", table: "9" },
    { name: "Aunty (Ah Chim)", table: "9" },
    { name: "Lee Chen", table: "9" },
    { name: "Elsa Wu", table: "9" },

    // Table 10 (Doctors 2)
    { name: "Dr Wong Yoke Lin", table: "10" },
    { name: "Dr Teh Eng Seng", table: "10" },
    { name: "Dr Goh Kay Chee", table: "10" },
    { name: "Susan", table: "10" },
    { name: "Yew Bu Hua", table: "10" },
    { name: "Elaine Yew", table: "10" },
    { name: "Dr Margaret Leow", table: "10" },

    { name: "Datin Lee Sieng Shuen", table: "10" },
    { name: "Dato Lee Chee Leong", table: "10" },

    // Table 11 (Connecto)
    { name: "Kenny Yee", table: "11" },
    { name: "Lili", table: "11" },
    { name: "Carol", table: "11" },
    { name: "Philip", table: "11" },
    { name: "Katherine", table: "11" },
    { name: "Angela", table: "11" },
    { name: "Gabriel", table: "11" },
    { name: "Josephine", table: "11" },
    { name: "Paul", table: "11" },
    { name: "Becky", table: "11" },

    // Table 12 (Uni Friends 1)
    { name: "Dr Rachel George", table: "12" },
    { name: "Dr Nicole Lau", table: "12" },
    { name: "Florence Ong", table: "12" },
    { name: "Dr Ryan Tan", table: "12" },
    { name: "Dr Isaac Kuan", table: "12" },
    { name: "Mah Jun Jian", table: "12" },
    { name: "Brian Ong", table: "12" },
    { name: "Yedija Markus", table: "12" },
    { name: "Dr Kan Sheng Yuan", table: "12" },
    { name: "Satitporn Moonsri", table: "12" },

    // Table 13 (Makan Friends)
    { name: "Joyce", table: "13" },
    { name: "Jeffrey Raymond", table: "13" },
    { name: "Jenny Cheam", table: "13" },
    { name: "Cynthia", table: "13" },
    { name: "Bianca", table: "13" },
    { name: "Kenny Wong", table: "13" },
    { name: "Christine", table: "13" },
    { name: "Freddie", table: "13" },
    { name: "Freddie's wife", table: "13" },

    // Table 15 (CDPC 1)
    { name: "Pastor Meng", table: "15" },
    { name: "Connie", table: "15" },
    { name: "George Tan", table: "15" },
    { name: "Kwok Huey", table: "15" },
    { name: "Yap Hoong Huat", table: "15" },
    { name: "Sarah", table: "15" },
    { name: "Kok Ghim Hock", table: "15" },
    { name: "Lee Peng", table: "15" },
    { name: "Veron Ch’ng", table: "15" },
    { name: "Irene Fan", table: "15" },

    // Table 16 (London)
    { name: "Dr Hannah Li", table: "16" },
    { name: "Lee Kin Onn", table: "16" },
    { name: "Bess Kun", table: "16" },
    { name: "Tey Jia Sheng", table: "16" },
    { name: "Nikki Chuah", table: "16" },
    { name: "Winston Ciputra", table: "16" },
    { name: "Dr Chong Yu Shen", table: "16" },
    { name: "Rachel Tan", table: "16" },
    { name: "Dr Iverene Tung", table: "16" },
    { name: "Dr Craig Yip", table: "16" },

    // Table 17 (Cempaka 1)
    { name: "Wong Shi Jinn", table: "17" },
    { name: "Chang Chin Ter", table: "17" },
    { name: "Lexter Lee", table: "17" },
    { name: "Chloe Lim", table: "17" },
    { name: "Megan Ong", table: "17" },
    { name: "Aisya Abu Bakar", table: "17" },
    { name: "Ram Rengasamy Pillai", table: "17" },
    { name: "Wong Sher Lynn", table: "17" },
    { name: "Cassandra Law", table: "17" },
    { name: "Karyna Yoong", table: "17" },

    // Table 18 (CDPC 2)
    { name: "Maggie", table: "18" },
    { name: "Thea", table: "18" },
    { name: "Mark", table: "18" },
    { name: "Jackie", table: "18" },
    { name: "CK", table: "18" },
    { name: "See See", table: "18" },
    { name: "Andy", table: "18" },
    { name: "Leanne", table: "18" },
    { name: "Baby Logan Lim", table: "18" },
    { name: "Anne See", table: "18" },
    { name: "Uncle See", table: "18" },

    // Table 19 (Medical School)
    { name: "Dr Tommy Le", table: "19" },
    { name: "Iwona", table: "19" },
    { name: "Dr Nathan Ng", table: "19" },
    { name: "Dr Yap Ngee Jin", table: "19" },
    { name: "Dr Alex Shen", table: "19" },
    { name: "Dr Iman Ainuddin", table: "19" },
    { name: "Dr Jen Tsui", table: "19" },
    { name: "Dr Sabrina So", table: "19" },
    { name: "Dr Tony Yu", table: "19" },
    { name: "Dr Kate Johnson", table: "19" },

    // Table 20 (Cempaka 2)
    { name: "William Ang", table: "20" },
    { name: "Christopher Lim", table: "20" },
    { name: "Cheng Yen", table: "20" },
    { name: "Shariffah Dayana", table: "20" },
    { name: "Kelly Chong", table: "20" },
    { name: "Pang Huey Lynn", table: "20" },
    { name: "Brian Teo", table: "20" },

    // Table 21 (KC2)
    { name: "Chung Jun Kai", table: "21" },
    { name: "Yew Jia Yee", table: "21" },
    { name: "Donovan Arellano", table: "21" },
    { name: "Dr Kwan Shu Huan", table: "21" },
    { name: "Wayne Yip", table: "21" },
    { name: "Natalie Ng", table: "21" },
    { name: "Brian Ee", table: "21" },
    { name: "Lee Yu Ming", table: "21" },

    // Table 22 (TCSH)
    { name: "Tommy Lim Ruey Bing", table: "22" },
    { name: "Goh Sin Yee", table: "22" },
    { name: "Dr Teh Kok Leong", table: "22" },
    { name: "Dr Tham Su Ming", table: "22" },
    { name: "Yes Sook Teng", table: "22" },
    { name: "Hong Yee Ting", table: "22" },
    { name: "Dr Liow Kong You", table: "22" },
    
    // Table 23 (CDPC 3)
    { name: "Elisa Yee", table: "23" },
    { name: "Justin Yee", table: "23" },
    { name: "Eliza Ch’ng", table: "23" },
    { name: "Ch’ng Wee Lee", table: "23" },
    { name: "Tabitha Yap", table: "23" },
    { name: "Sabrina Yap", table: "23" },
    { name: "Darren Yap", table: "23" },
    { name: "Kok Su Ean", table: "23" },
    { name: "Amber Estad", table: "23" },
    { name: "Kok Kean Shern", table: "23" }
];

function findSeat() {
    const guestName = document.getElementById("guest-name").value.trim().toLowerCase();
    const resultDiv = document.getElementById("seating-result");
    const arrow = document.getElementById("arrow");
    const guestOptionsDiv = document.getElementById("guest-options"); // Show options div
    guestOptionsDiv.innerHTML = ""; // Clear previous options
    guestOptionsDiv.style.display = "none"; // Hide options initially

    // Use filter to find guests that partially match the input
    const matchingGuests = seatingData.filter(g => g.name.toLowerCase().includes(guestName));

    // Hide the arrow initially
    arrow.style.display = "none";

    if (matchingGuests.length > 0) {
        if (matchingGuests.length === 1) {
            showGuestInfo(matchingGuests[0]);
        } else {
            resultDiv.innerHTML = "Multiple matches found. Please select your name:";
            matchingGuests.forEach(guest => {
                const option = document.createElement("div");
                option.className = "guest-option";
                option.textContent = guest.name;
                option.onclick = () => showGuestInfo(guest); // Set click event
                guestOptionsDiv.appendChild(option);
            });
            guestOptionsDiv.style.display = "block"; // Show options
        }
    } else {
        resultDiv.innerHTML = "Sorry, we couldn't find your name. Please ask for assistance.";
    }
}

function showGuestInfo(guest) {
    const resultDiv = document.getElementById("seating-result");
    const guestOptionsDiv = document.getElementById("guest-options");
    const tableNumber = guest.table;
    const guestsAtTable = seatingData.filter(g => g.table === tableNumber);

    // Display table information and options to check in others
    resultDiv.innerHTML = `Hello ${guest.name},<br>
        <span style="font-size: 2em; display: block; margin-top: 10px;">You are seated at Table ${tableNumber}.</span><br>
        Travelling as a group? Check in the others at this table!<br><br>`;

    guestOptionsDiv.innerHTML = ""; // Clear previous content

    guestsAtTable.forEach(g => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = g.name;
        checkbox.checked = g.name === guest.name; // Auto-select the guest's name

        const label = document.createElement("label");
        label.textContent = g.name;
        label.style.display = "block";

        label.prepend(checkbox);
        guestOptionsDiv.appendChild(label);
    });

    // Add Confirm and Cancel buttons
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    confirmButton.onclick = () => confirmRegistration(guestsAtTable);

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.onclick = () => guestOptionsDiv.style.display = "none";

    guestOptionsDiv.appendChild(confirmButton);
    guestOptionsDiv.appendChild(cancelButton);

    guestOptionsDiv.style.display = "block"; // Show the options

    // Position the arrow based on the table number
    positionArrow(tableNumber);
}

function confirmRegistration() {
    const checkboxes = document.querySelectorAll('#guest-options input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        const guestName = checkbox.value;

        // Register each selected guest in Google Sheets
        google.script.run.withSuccessHandler(() => {
            alert(`${guestName} has been registered.`);
        }).registerGuest(guestName); // Call the Google Apps Script function here
    });

    document.getElementById("guest-options").style.display = "none"; // Hide the options after registration
}


function positionArrow(tableNumber) {
    const arrow = document.getElementById("arrow");

    // Define positions for each table (adjust these values)
    const positions = {
        'VIP': { left: '50%', top: '50%' },
        '1': { left: '482px', top: '170px' },
        '2': { left: '482px', top: '220px' },
        '3': { left: '482px', top: '280px' },
        '5': { left: '542px', top: '180px' },
        '6': { left: '542px', top: '245px' },
        '7': { left: '542px', top: '315px' },
        '8': { left: '592px', top: '200px' },
        '9': { left: '592px', top: '245px' },
        '10': { left: '592px', top: '245px' }
    };

    if (positions[tableNumber]) {
        arrow.style.left = positions[tableNumber].left;
        arrow.style.top = positions[tableNumber].top;
        arrow.style.display = "block"; // Show the arrow
    } else {
        arrow.style.display = "none"; // Hide if no table position defined
    }
}

