# HTML & CSS

---

---

# HTML 

## Tags

- meta : used to define information about HTML file
- heading tag : <h></h>
    
    1→6 decreasing size
    
- paragraph : <p></p>
- bold : <b></b>
- italic : <i></i>
- break : </br>
    
    newline
    
- horizontal line : </hr>
- big : <big></big>
- small : <small></small>
- subscript : <sub></sub>
- superscript : <sup></sup>
- header : <header></header>
    
    → for header
    
- main : <main></main>
    
    → for content
    
- footer : <footer></footer>
    
    → for footer 
    
- navigation : <nav></nav>
    
    → for navigation links 
    
    → goes inside the header
    
- article : <article></article> || section : <section></section>
    
    → for main page ; to control the layout
    
- anchor tag : <a href=“some random link”>text to represent the link</a>
- images : <img src=“source link for the image” alt=“the text to be displayed if img doesn’t load ”/>
- video : <video src=“source link for the video” controls > </video>
    - for thumbnail : poster = “img”
    - for autoplay : autoplay
    - for looping the video : loop
- iframe : <iframe src=“source link to the video”>txt</iframe>
    
    → embeding the video 
    
- un-odered list : <ul></ul>
    
    → <ul>
    
    <li> ….. </li>
    
    :
    
    <li> ….. </li>
    
    <li> ….. </li>
    
    </ul>
    
- odered list : <ol></ol>
    
    → use type = “ ” to change markers 
    
- description list : <dl></dl>
    
    →  <dt> apples </dt>
    
    <dd> they are red </dd>
    
- tables : <table></table>
    
    → <tr></tr> for rows 
    
    → <td></td> for columns
    
    → <th></th> to give header for columns
    
    → <caption></caption> to give header to the whole table 
    
    - tables are responsive
    - use property **colspan** to make 1 element take multiple columns
- div : <div></div>
    
    → block element
    
- span : <span></span>
    
    → inline element 
    
- input tags : <input type=“ ”/>
    
          Types are :
    
    - text
    - password
    - date
    - email
    - range
    - file
    - checkbox
    - radiobutton
- forms : <form></form>

# CSS

- padding :
    
    adding space inside element 
    
- margin :
    
    adding space between two elements 
    
- position :
    - absolute :
        
        makes the element hover (lifts it up)
        
    - relative :
        
        same as absolute but confined in a container 
        
- flexbox :
    - vertical axis → align item (cross axis)
    - horizontal axis → justify content (main axis) :
        
        center , start , end  
        
    - flex direction :
        
        row : →
        
        column : downward 
        
        row-reverse : ←
        
        column-reverse : upwards 
        
    - flex-wrap : responsive