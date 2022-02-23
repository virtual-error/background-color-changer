document.getElementById("colorPicker").onchange = changeBackground;
function changeBackground(e)
{
  console.log(e.target);
  document.querySelector("body").style.background = e.target.value;
}