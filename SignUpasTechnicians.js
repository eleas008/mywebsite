const mainAreaDropdown = document.getElementById('mainArea');
const subAreaDropdown = document.getElementById('subArea');
const subAreas = {
        Dhaka: [
            "Mirpur", "Uttara", "Gulshan", "Mohammadpur", "Dhanmondi",
            "Banani", "Baridhara", "Motijheel", "Puran Dhaka", "Khilgaon",
            "Tejgaon", "Badda", "Malibagh", "Farmgate", "Lalbagh", "Moghbazar",
            "Shyamoli", "Gulistan", "Kamrangirchar", "Ramna", "Shahbag",
            "Jatrabari", "Pallabi", "Rampura", "Demra", "Uttar Khan", "Savar",
            "Nawabganj", "Keraniganj", "Dohar", "Ashulia", "Kadamtali",
            "Bimanbandar", "Kotwali", "Cantonment", "Turag", "Bangshal",
            "Darus Salam", "Dakkhinkhan", "Wari", "Hazaribagh", "Sutrapur",
            "Kafrul", "Tikatuli", "Paltan", "Shah Ali", "Tejgaon Industrial Area",
            "Bashundhara R/A","Kallyanpur","Abdullahpur","Gabtoli","Adabar"
        ],
        Narsingdi: [
                "Narsingdi Sadar", "Belabo", "Monohardi", "Palash", "Raipura", 
                "Shibpur", "Bhairab", "Shimrail", "Rupganj", "Ghorashal", 
                "Madhabdi", "Tarabo", "Ghorashal Upazila", "Shibpur Upazila", 
                "Palash Upazila", "Raipura Upazila", "Belabo Upazila", "Monohardi Upazila",
                "Bhanga", "Paratali", "Karimpur", "Panchdona", "Lohajang", 
                "Narayanpur", "Tengarchar", "Chanderkandi", "Charmandalia", 
                "Achutia", "Baghaba", "Chakradharpur", "Char Chandia", 
                "Chinishpur", "Dulalpur", "Dulalpur College", "Gauripur", 
                "Kanchikata", "Kashimnagar", "Katkata", "Laskardia", 
                "Maktaghat", "Mathura", "Mojumdar Nagar", "Narsingdi", 
                "Narsingdi Govt. Girls' High School", "Narsingdi Govt. Victoria College",
                "Narsingdi Press Club", "Narsingdi Stadium", "Narsingdi Town", 
                "Rajanagar", "Saheednagar", "Sholakuri", "Sonakhara", 
                "Sonarampur", "Subil", "Uttar Char Ailchara", "Char Shakhria", 
                "Kalabari", "Kuliarchar", "Narayanpur","Narayanpur", 
                "Pakundia", "Shibpur"
            ],
            Gazipur: [
                "Gazipur Sadar", "Tongi", "Kaliakair", "Kaliganj", "Kapasia",
                "Sreepur", "Bhairab", "Gazipur City Corporation", "Joydebpur",
                "Pubail", "Tongi Industrial Area", "Nishatnagar", "Konabari",
                "Chandna", "National University", "Amin Bazar", "Boalia",
                "Bou Bazar", "Kashimpur", "Nobinagar", "Gazipur Bazar",
                "Gazipur Chowrasta", "Tongi Govt College", "Gazipur Govt Technical School",
                "Mirzapur", "Jongra", "Safipur"
            ]
        
    
};
function populateSubAreas() {
    const selectedMainArea = mainAreaDropdown.value;
    subAreaDropdown.innerHTML = '';
    subAreas[selectedMainArea].forEach(subArea => {
        const option = document.createElement('option');
        option.textContent = subArea;
        option.value = subArea;
        subAreaDropdown.appendChild(option);
    });
}
mainAreaDropdown.addEventListener('change', populateSubAreas);

populateSubAreas();

function goToPage() {
    window.location.href = "frontpage.html";
}