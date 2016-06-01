// JavaScript File

// These variables contain the html's elements and important arrays that I will use later on in my functions //
var firstText = document.getElementById("first_text");
var nextButton = document.getElementById("nextbutton");
var backButton = document.getElementById("backbutton");
var image = document.getElementById("image");
var heading = document.getElementById("heading");
var info = document.getElementById("info");
var imageArray = ["pictures/ships/japanese/hakuryu.png" , "pictures/ships/japanese/yamato.png","pictures/ships/japanese/zao.png","pictures/ships/japanese/shimakaze.png","pictures/ships/usa/midway.png","pictures/ships/usa/montana.png","pictures/ships/usa/desmoines.png","pictures/ships/usa/gearing.png","pictures/ships/ussr/moskva.png","pictures/ships/ussr/khabarovsk.png"];
var headingsArray = ["Japan - CV - Hakaryu" , "Japan - BB - Yamato","Japan - CA - Zao" , "Japan - DD - Shimakaze","USA - CV - Midway","USA - BB - Montana","USA - CA - Des Moines","USA - DD - Gearing","USSR - CA - Moskva","USSR - DD - Khabarovsk"];
var infoArray = ["An aircraft carrier designed to be an enlarged and enhanced version of the Taiho class. Hakuryu was superior to her predecessor in size, armor and artillery power. Owing to an increased hangar, she could carry the largest air group among all Japanese aircraft carriers.","The biggest warship of World War II and the world’s largest battleship. Yamato was designed around the idea that an individual ship could have superiority over any battleship of a potential enemy. Her main guns had overwhelming firepower. The ship maintained a very high level of survivability due to reliable armor and robust torpedo protection. Yamato’s AA capabilities were highly efficient due to carrying numerous AA artillery guns.","A very powerful cruiser in all respects. Compared with the preceding classes of heavy cruisers, Zao had a greater number of main battery and AA guns, thick armor and a reinforced torpedo armament.","An experimental cruiser type destroyer with increased displacement. The ship was equipped with very powerful propulsion, making Shimakaze faster than the majority of her contemporary ships of the same type. Shimakaze was second to none in terms of torpedo armament. The first and only destroyer of the Imperial Japanese Navy to be equipped with quintuple torpedo tubes.","The largest U.S. Navy warship laid down during World War II. The huge size of this aircraft carrier allowed her to carry the largest air group, compared to her contemporary counterparts. Excellent torpedo protection, well-armored flight deck and powerful AA defenses made Midway-class ships virtually invulnerable to attacks from enemy aircraft.","One of the largest battleships in the world. She was slightly inferior to Iowa-class ships in terms of speed, but had more main guns and significantly stronger torpedo protection. Montana’s armor was conventionally arranged and considerably reinforced.","One of the best heavy cruisers in the world. The ship was designed using the experience gained in World War II, resulting in excellent protection and very powerful AA armament. The key distinctive feature of cruisers of this type was auto-loading main guns that had a very high rate of fire.","Developed from the Fletcher class, Gearing was the largest destroyer in the U.S. Navy during World War II. The ship was superior in firepower to all foreign counterparts, owing to new dual-purpose twin mounts with a very high rate of fire. Numerous automatic AA guns ensured a respective level of efficiency for her AA defenses.","A ship designed and intended to destroy light enemy cruisers and fight against heavy cruisers (Project 66). Unlike her foreign counterparts, she boasted bigger dimensions and better armor protection. The cruiser’s main battery surpassed foreign guns in maximum range and destructive power but had a lower rate of fire.","The ship was designed as a destroyer flotilla leader. No destroyer in the world could rival her in terms of speed, while her armor and the power of her artillery were comparable to those of light cruisers. Dual-purpose main guns and a battery of automatic AA guns ensured a strong AA defense."];

// These variables contain the index of the current ship so they can be increased or decreased with the functions later on. //
var currentImageIndex = -1;
var currentHeadingsIndex = -1;
var currentInfoIndex = -1;

nextButton.addEventListener("click" , next);

// This function makes it so when the next button is clicked, the next ship, info, and heading appear. //
function next() {
  
    if (currentImageIndex < imageArray.length-1 && currentHeadingsIndex < headingsArray.length-1 && currentInfoIndex < infoArray.length-1) {
        
        currentImageIndex++;
        currentHeadingsIndex++;
        currentInfoIndex++;
        
    image.src = imageArray[currentImageIndex];
    heading.innerHTML = headingsArray[currentHeadingsIndex];
    info.innerHTML = infoArray[currentInfoIndex];
    
    }
    
    firstText.innerHTML = "";
    
}

backButton.addEventListener("click" , previous);

// This function makes it so when the previous button is clicked, the previous ship, info, and heading appear. //
function previous() {
    
    if (currentImageIndex >= 1 && currentHeadingsIndex >= 1 && currentInfoIndex >= 1) {
        
    currentImageIndex--;
    currentHeadingsIndex--;
    currentInfoIndex--;

    image.src = imageArray[currentImageIndex];
    heading.innerHTML = headingsArray[currentHeadingsIndex];
    info.innerHTML = infoArray[currentInfoIndex];
    
    }
    
}






