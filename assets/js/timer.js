export default function timerHandler() {
    function createTimer() {
        
    }
    function refreshTimer() {

    }
    function startTimer() {
        createTimer();
        setInterval( refreshTimer, 1000 );
    }

    startTimer();
}