function makeGrid()
{
  event.preventDefault();
//  var height=document.getElementById('inputHeight').value;
//  var width=document.getElementById('inputWidth').value;
  var tableData=document.getElementById('pixelCanvas');
  var string='';
  for (var i=1;i<=document.getElementById('inputHeight').value;i++)
  {
    string=string+'<tr>';
    for(var j=1;j<=document.getElementById('inputWidth').value;j++)
    {
      string=string+"<td id='cell'></td>";
    }
    string=string+'</tr>';
  }
  tableData.innerHTML = string;
  colorCells();
}

function colorCells()
{
  var color=document.getElementById('colorPicker').value;
  var cellColor=document.getElementById('cell');
  for(var k=1;k<=cellColor.length;k++)
  {
    cellColor[k].addEventListener('click',function(event)
    {
      alert('Cell Clicked')
      var clickedCell=event.target;
      clickedCell.style.backgroundColor = color.value;
    })
  }
}
document.addEventListener('DOMContentLoaded',function(){
makeGrid();
})
document.getElementById('sizePicker').onsubmit = function () {
makeGrid();
}
