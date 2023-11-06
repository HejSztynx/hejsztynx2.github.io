// You could easily add more colors to this array.
var colors = ['#ffffff', '#3e6d9d', '#548a42', '#96302f', '#dac17a', '#c08768'];
var cube_elements = document.querySelectorAll(".cube-element");
var no_squares = 9;

function scramble() {
    for (i = 0; i < no_squares; i++) {
        cube_elements[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }
}