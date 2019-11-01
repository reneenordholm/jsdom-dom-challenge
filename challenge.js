// script operates once page has fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // increment timer by second
    let counter = document.getElementById("counter");
    let seconds = 0;

    function incrementCounter() {
        seconds += 1;
        counter.innerText = seconds;
    };

    setInterval(incrementCounter, 1000);

    // manually increment and decrement the counter using the plus and minus buttons
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");

    function manuallyIncrementCounter(e) {
        counter.innerText = seconds + 1;
    };

    function manuallyDecrementCounter(e) {
        counter.innerText = seconds - 1;
    };

    plus.addEventListener('click', manuallyIncrementCounter);  
    minus.addEventListener('click', manuallyDecrementCounter);  

    // can 'like' an individual number of the counter
    let heart = document.getElementById("heart");

    function addLike(e) {
        let likesList = document.querySelectorAll('ul.likes')[0]
        let li = document.createElement('li');
        let likeCount = 0;

        // should see count of the number of 'likes' associated with that number
        // if li exists in bulleted list add count to existing li {
        //     li.innerText = `${seconds} has been liked ${likeCount += 1} time`;
        // } else {
            li.innerText = `${seconds} has been liked ${likeCount += 1} time`;
            likesList.appendChild(li);
        // }


    };

    heart.addEventListener('click', addLike);

    function pauseTimer(e) {
        let newSeconds = parseInt(counter.innerText);
            
        function incrementPausedCounter() {
            newSeconds += 1;
            counter.innerText = newSeconds;
        };
    
        setInterval(incrementPausedCounter, 1000);
    };

    pause.addEventListener('click', pauseTimer);
    
});