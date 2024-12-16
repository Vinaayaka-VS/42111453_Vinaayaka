let imgposition = 1;
const image = document.getElementById("sliding-panel");
const text = document.getElementById("fg-text");
const smalltext = document.getElementById("fg-s-text");
const signup2btn = document.getElementById("signup2-btn");

function next(){
    switch(imgposition){
        case 1:
            imgposition++;
            image.style.backgroundImage = "url('Images/background-2.jpg')";
            text.innerHTML = "Sell just about<br> anywhere in the world.";
            smalltext.innerHTML = "Whether you have an online shop or need<br> to accept payments remotely, we can help <br> you get paid fast";
            signup2btn.style.visibility = 'visible';
            break;
        case 2:
            imgposition--;
            image.style.backgroundImage = "url('Images/background-1.jpg')";
            text.innerHTML = "Secure Payments.<br> Smooth Shopping.";
            smalltext.innerHTML = "More ways to pay and more places to <br>shop. Send money quickly and easily <br> around the globe."
            signup2btn.style.visibility = 'hidden';
;
            break;
    }
}
