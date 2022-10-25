//alert('The page is linked to main.js')
var states = {skills:"skills", about:""}
var state = "about"
function switchState(next_state){
    state = next_state;
    window.history.pushState({},'', `/${states[next_state]}`);
}