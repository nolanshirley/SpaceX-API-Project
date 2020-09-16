const baseURL = "https://api.spacexdata.com/v4/rockets"; 


let getEndpoint = async function theFetch() {
    await fetch(baseURL)
    .then(response => response.json())
    .then(data => displayResults(data)) 
}

getEndpoint(); 

let firstColumn = document.querySelector('#firstColumn');
let secondColumn = document.querySelector('#secondColumn');
let thirdColumn = document.querySelector('#thirdColumn'); 
let fourthColumn = document.querySelector('#fourthColumn'); 



function displayResults(data){
    console.log(data);
/*
EVERYTHING IN THE FIRST COLUMN
*/
    let headlineFalcon9 = 'Description of the falcon 9 rocket'; 
    let falcDesc9 = data[1].description; 

    let para1 = document.createElement('p')
    para1.innerText = headlineFalcon9
    firstColumn.appendChild(para1); 

    let listItem1 = document.createElement('ul')//create an ul within the p tag 

    let listRocket9 = document.createElement('li')
    listRocket9.innerText = falcDesc9;
    firstColumn.appendChild(para1); 
    firstColumn.appendChild(listItem1); 
    listItem1.appendChild(listRocket9); //lists the description of falcon 9 within the li 

    listRocket9.style = 'color: #6b0db8;'//text color within list items 

//add another list item showing the cost of the rocket falcon 9 
    let listCostOf9 = document.createElement('li')
    let falcon9Cost = data[1].cost_per_launch
    listCostOf9.innerText = `It costs $${falcon9Cost} per launch, what a deal!`

    listItem1.appendChild(listCostOf9); 
    listCostOf9.className = 'costSentence'
//adding image
    let falcon9ImageTag = document.createElement('img')

    let falcon9ImgURL = data[1].flickr_images[0]

    falcon9ImageTag.src = falcon9ImgURL 
    listItem1.appendChild(falcon9ImageTag)
    falcon9ImageTag.className = 'image'

/*
EVERYTHING IN THE SECOND COLUMN
*/
    let headlineHeavy = 'What is the Falcon Heavy Rocket all about?';
    let heavyDesc = data[2].description;

    let para2 = document.createElement('p');
    para2.innerText = headlineHeavy;
    secondColumn.appendChild(para2); 

    let listItem2 = document.createElement('ul')
    let listHeavy = document.createElement('li')

    listHeavy.innerText = heavyDesc; 
    secondColumn.appendChild(para2); 
    secondColumn.appendChild(listItem2); 
    listItem2.appendChild(listHeavy); 

    listHeavy.style = 'color: #6b0db8;'//text color within list items 
//add another list item to the second column
    let listCostOfHeavy = document.createElement('li'); 
    let costOfHeavy = data[2].cost_per_launch
    listCostOfHeavy.innerText = `It costs exactly $${costOfHeavy} to launch this rocket!`

    listItem2.appendChild(listCostOfHeavy); 
    listCostOfHeavy.className = 'costSentence2'
//add the image of the falcon heavy 
    let falconHeavyImageTag = document.createElement('img')
    let falconHeavyImageURL = data[2].flickr_images[4]

    falconHeavyImageTag.src = falcon9ImgURL
    listItem2.appendChild(falconHeavyImageTag)
    falconHeavyImageTag.className = 'image'
/*
EVERYTHING IN THE THIRD COLUMN
*/
    let headlineFalcon1 = 'What happened to the Falcon 1 Rocket?';
    let falcon1Desc = data[0].description;

    let para3 = document.createElement('p');
    para3.innerText = headlineFalcon1;
    thirdColumn.appendChild(para3);

    listItem3 = document.createElement('ul');
    listFalcon1 = document.createElement('li');

    listFalcon1.innerText = falcon1Desc;
    thirdColumn.appendChild(listItem3); 
    listItem3.appendChild(listFalcon1); 
//add another list item to the third column
    let listCostOfFalcon1 = document.createElement('li'); 
    let costOfFalcon1 = data[0].cost_per_launch;
    listCostOfFalcon1.innerText = `Back in prehistoric times, it would have costed $${costOfFalcon1} dollars per launch... that's chump change!`

    listItem3.appendChild(listCostOfFalcon1); 
    listCostOfFalcon1.className = 'costSentence3'; 
//add the image for Falcon 1 
    let falcon1ImageTag = document.createElement('img'); 
    let falcon1ImageURL = data[0].flickr_images[0]; 

    falcon1ImageTag.src = falcon1ImageURL; 
    listItem3.appendChild(falcon1ImageTag); 
    falcon1ImageTag.className = 'image'; 



    
}








