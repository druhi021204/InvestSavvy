# NOTES: CSS

* make a file: style.css
* To link css to html file, go in html file:

  * after title write: <br>
  <>link rel = "stylesheet" href="style.css"

* Mandatory to be written at beginning of the css file:<br>

    astrick{<br>
    margin: 0;<br>
    padding:0;<br>
    box-sizing: border-box;<br>
}<br>
html, body<br>
{<br>
    width: 100%;<br>
    height: 100%;<br>
}<br>

* for margin: 20px 30px 40px 12px <br>
it is top, right, bottom and left margin.

* if margin : 20px 30px , then it means<br>
20 px for top and bottom and 30 px for right and left.

* background-color: (to give colour to your id).

* margin: space between two elements, like between page and box.<br>

* padding: imaginary border inside an element.

* To add a background image:<br>
background-image: url();<br>
background-size: cover;<br>
background position: bottom(this means to view the bottom of the image).

* ***Position absolute***: it raises that div and pushes the div behind that ahead.<br>
written as :<br> 
div<br>
{<br>
    position : absolute;<br>
    top=20%;(used to shift that div by 20% from top)<br>
}<br>

* ***Position relative*** is used to arrange one div w.r.t to another div. In the main div write position: relative;

* If the main div has sub div and we want to display that sub div horizontal then in the main div write:<br>
display: flex;
  * To move those sub div in left, right, centre, write in main div:<br>

  justify-content: start/end/centre;<br>

  justify-content: space-between /space around. (manage along the width).<br>

  align-items: centre;(manage along the height)


