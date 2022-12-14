// const maaButton = document.getElementById('MAA-Button');
// const childDiv2 = document.getElementById('MAA-text');
// const childDiv3= document.getElementById('singleMAAUnit');

// function divHider(){
//     if(childDiv2.style.display != 'none'){
//         childDiv2.style.display ='none';
//     }
//     else {
//         childDiv2.style.display = 'block'
//     }
// }

// function divHider2(){
//     if(childDiv3.style.display != 'none'){
//         childDiv3.style.display ='none';
//     }
//     else {
//         childDiv3.style.display = 'block'
//     }
// }
// maaButton.addEventListener('click', divHider);
// maaButton.addEventListener('click', divHider2);





const maaButton = document.getElementById('MAA-Button');
const maaText = document.getElementById('MAA-text');
const maaImage = document.getElementById('singleMAAUnit');

const landButton = document.getElementById('land-button');
const landText = document.getElementById('landknecht-text');
const landImage = document.getElementById('landknetcht-unit');

function divHider(dividerName) {
  if (dividerName.style.display != 'none') {
    dividerName.style.display = 'none';
  } else {
    dividerName.style.display = 'block';
  }
}

landButton.addEventListener('click', function(){divHider(landText)});
landButton.addEventListener('click', function(){divHider(landImage)});

maaButton.addEventListener('click', function() { divHider(maaText); });
maaButton.addEventListener('click', function() { divHider(maaImage); });

