//alert('The page is linked to main.js')
var states = {skills:"skills" , about:""}
var stateFuncs = {skills: fetchSkills, about: ()=>{}}
var stateImg = {skills: "/assets/skills.png", about:"/assets/pic.jpg"}
var statTabs = {skills: "skills-tab", about: "about-tab"}
var state = "about"
async function switchState(nextState, event){
    let currentTab = document.querySelector(`#${statTabs[state]}`);
    let nextTab = document.querySelector(`#${statTabs[nextState]}`);
    let leftImg = document.querySelector("#left-img");
    let image =  stateImg[nextState]
    state = nextState;
    window.history.pushState({},'', `/${states[nextState]}`);
    let navbar = document.querySelector("#navbar");
    
    let a_list = navbar.childNodes;
    a_list.forEach(element => {
        element.classList = [];
    });
    let func = stateFuncs[state];
    console.log(await func());
    console.log(currentTab, nextTab);
    event.target.classList = ["active"];
    currentTab.style.display = "none";
    nextTab.style.display = "flex";
    leftImg.setAttribute("src", image);
    
    
    // console.log(a_list)

}

async function fetchSkills(){
    let rawSkills = await fetch("/fakeapi/skills.json");
    let skills = await rawSkills.json()
    return skills
}