// JavaScript File

// These variables contain the html's elements and important arrays that I will use later on in my functions //
var firstText = document.getElementById("introtext");
var nextButton = document.getElementById("nextbutton");
var backButton = document.getElementById("backbutton");
var image = document.getElementById("image");
var heading = document.getElementById("heading");
var info = document.getElementById("info");
var imageArray = ["pictures/ships/japanese/hakuryu.png" , "pictures/ships/japanese/yamato.png","pictures/ships/japanese/zao.png","pictures/ships/japanese/shimakaze.png","pictures/ships/usa/midway.png","pictures/ships/usa/montana.png","pictures/ships/usa/desmoines.png","pictures/ships/usa/gearing.png","pictures/ships/ussr/moskva.png","pictures/ships/ussr/khabarovsk.png","pictures/ships/german/hindenburg.png"];
var headingsArray = ["Japan - CV - Hakuryu" , "Japan - BB - Yamato","Japan - CA - Zao" , "Japan - DD - Shimakaze","USA - CV - Midway","USA - BB - Montana","USA - CA - Des Moines","USA - DD - Gearing","USSR - CA - Moskva","USSR - DD - Khabarovsk","Germany - CA - Hindenburg"];
var infoArray = ["Credit Cost: 21,800,000<br><br>An aircraft carrier designed to be an enlarged and enhanced version of the Taiho class. Hakuryu was superior to her predecessor in size, armor and artillery power. Owing to an increased hangar, she could carry the largest air group among all Japanese aircraft carriers.<br><br>Max Speed: 34.5kt<br><br>Deck Armor: 13mm-95mm<br>Citadel Armor: 44mm-130mm<br>Casemate Armor: 16mm-25mm<br>Extremities Armor: 21mm-21mm<br>Total Amor Range: 13mm-130mm"
,"Credit Cost: 20,600,000<br><br>The biggest warship of World War II and the world’s largest battleship. Yamato was designed around the idea that an individual ship could have superiority over any battleship of a potential enemy. Her main guns had overwhelming firepower. The ship maintained a very high level of survivability due to reliable armor and robust torpedo protection. Yamato’s AA capabilities were highly efficient due to carrying numerous AA artillery guns.<br><br>Max Speed: 27.0kt<br><br>Deck Armor: 18mm-200mm<br>Citadel Armor: 80mm-410mm<br>Casemate Armor: 25mm-25mm<br>Extremities Armor: 32mm-32mm<br>Total Amor Range: 18mm-410mm"
,"Credit Cost: 20,000,000<br><br>A very powerful cruiser in all respects. Compared with the preceding classes of heavy cruisers, Zao had a greater number of main battery and AA guns, thick armor and a reinforced torpedo armament.<br><br>Max Speed: 34.5kt<br><br>Deck Armor: 30mm-55mm<br>Citadel Armor: 65mm-152mm<br>Casemate Armor: 30mm-30mm<br>Extremities Armor: 25mm-25mm<br>Total Amor Range: 25mm-152mm"
,"Credit Cost: 19,300,000<br><br>An experimental cruiser type destroyer with increased displacement. The ship was equipped with very powerful propulsion, making Shimakaze faster than the majority of her contemporary ships of the same type. Shimakaze was second to none in terms of torpedo armament. The first and only destroyer of the Imperial Japanese Navy to be equipped with quintuple torpedo tubes.<br><br>Max Speed: 39.0kt<br><br>Deck Armor: 18mm-18mm<br>Citadel Armor: 0mm-0mm<br>Casemate Armor: 12mm-16mm<br>Extremities Armor: 19mm-19mm<br>Total Amor Range: 12mm-19mm"
,"Credit Cost: 21,000,000<br><br>The largest U.S. Navy warship laid down during World War II. The huge size of this aircraft carrier allowed her to carry the largest air group, compared to her contemporary counterparts. Excellent torpedo protection, well-armored flight deck and powerful AA defenses made Midway-class ships virtually invulnerable to attacks from enemy aircraft.<br><br>Max Speed: 33.0kt<br><br>Deck Armor: 50mm-87mm<br>Citadel Armor: 74mm-193mm<br>Casemate Armor: 19mm-19mm<br>Extremities Armor: 21mm-21mm<br>Total Amor Range: 19mm-193mm"
,"Credit Cost: 20,800,000<br><br>One of the largest battleships in the world. She was slightly inferior to Iowa-class ships in terms of speed, but had more main guns and significantly stronger torpedo protection. Montana’s armor was conventionally arranged and considerably reinforced.<br><br>Max Speed: 28.0kt<br><br>Deck Armor: 19mm-150mm<br>Citadel Armor: 110mm-409mm<br>Casemate Armor: 38mm-38mm<br>Extremities Armor: 32mm-32mm<br>Total Amor Range: 19mm-409mm"
,"Credit Cost: 19,800,000<br><br>One of the best heavy cruisers in the world. The ship was designed using the experience gained in World War II, resulting in excellent protection and very powerful AA armament. The key distinctive feature of cruisers of this type was auto-loading main guns that had a very high rate of fire.<br><br>Max Speed: 33.0kt<br><br>Deck Armor: 25mm-90mm<br>Citadel Armor: 25mm-152mm<br>Casemate Armor: 25mm-25mm<br>Extremities Armor: 25mm-25mm<br>Total Amor Range: 25mm-152mm"
,"Credit Cost: 19,500,000<br><br>Developed from the Fletcher class, Gearing was the largest destroyer in the U.S. Navy during World War II. The ship was superior in firepower to all foreign counterparts, owing to new dual-purpose twin mounts with a very high rate of fire. Numerous automatic AA guns ensured a respective level of efficiency for her AA defenses.<br><br>Max Speed: 36.0kt<br><br>Deck Armor: 19mm-19mm<br>Citadel Armor: 0mm-0mm<br>Casemate Armor: 6mm-21mm<br>Extremities Armor: 19mm-19mm<br>Total Amor Range: 6mm-21mm"
,"Credit Cost: 19,500,000<br><br>A ship designed and intended to destroy light enemy cruisers and fight against heavy cruisers (Project 66). Unlike her foreign counterparts, she boasted bigger dimensions and better armor protection. The cruiser’s main battery surpassed foreign guns in maximum range and destructive power but had a lower rate of fire.<br><br>Max Speed: 34.5kt<br><br>Deck Armor: 20mm-90mm<br>Citadel Armor: 40mm-170mm<br>Casemate Armor: 50mm-50mm<br>Extremities Armor: 25mm-25mm<br>Total Amor Range: 20mm-170mm"
,"Credit Cost: 19,500,000<br><br>The ship was designed as a destroyer flotilla leader. No destroyer in the world could rival her in terms of speed, while her armor and the power of her artillery were comparable to those of light cruisers. Dual-purpose main guns and a battery of automatic AA guns ensured a strong AA defense.<br><br>Max Speed: 43.0kt<br><br>Deck Armor: 19mm-25mm<br>Citadel Armor: 0mm-0mm<br>Casemate Armor: 16mm-50mm<br>Extremities Armor: 19mm-19mm<br>Total Amor Range: 16mm-50mm"
,"Credit Cost: 19,600,000<br><br>The ship was developed from a series of German heavy cruisers. Unlike ships of preceding classes, she boasted an increased displacement and more powerful main battery guns.<br><br>Max Speed: 31.5kt<br><br>Deck Armor: 30mm-60mm<br>Citadel Armor: 40mm-110mm<br>Casemate Armor: 30mm-40mm<br>Extremities Armor: 25mm-90mm<br>Total Amor Range: 25mm-110mm"];

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






