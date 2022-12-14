const maaButton = document.getElementById('MAA-Button');
const maaImage = document.getElementById('singleMAAUnit')

let isImageVisible = false;

function toggleImage() {
    isImageVisible = !isImageVisible;
    if (isImageVisible){
        maaImage.style.display = 'block'
    } else {
        maaImage.style.display = 'none'
    }
}



maaButton.addEventListener('click',toggleImage);
