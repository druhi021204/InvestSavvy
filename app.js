/* document.querySelectorAll('.btn').forEach((item) => 
{
    item.addEventListener('click', ()=>{
        alert('Error 404')
    })
}) */

//console.log('hello!!');
//document.write('Hello!!');
document.body.style.backgroundColor='orange';
document.body.style.color='white';
//document.getElementById('btn').style.backgroundColor='aqua';

//const element = document.getElementById('element');

// document.querySelector('element');

// //const btn = document.getElementById('btn');
// //const name = btn.nodeName
// //const css = btn.style;

// //getElementByTagName('tagname');
// //node-list=array-like object
// //index,length property but not array methods


// const h = document.getElementById('title');
// h.style.color='white';

 const tag = document.getElementsByTagName('h2');
 tag[1].style.color='white';

 const tag1 = document.getElementsByTagName('ul')
 tag1[0].style.color='black';  //all bullet+text

 const tag2 = document.getElementsByTagName('li');
 tag2[0].style.color='black';   //only single element(bullet+text).

// //in class and tag, nodelist is formed, so with the properties of arrays, we can make the changes. 

// // for querySelector and querySelectorAll(for both of these any css can be passed)
// //. for class ans # for id

 const res = document.querySelector('#result');
 res.style.backgroundColor='green';

 const res1 = document.querySelector('.study');
 res1.style.color='pink';

// //const res2 = document.querySelectorAll('li:last-child');
// //res2.style.color = 'pink';

 const list = document.querySelectorAll('.study');
 list.forEach(function(res1){
     res1.style.color = 'pink';
 })

// //select one or group of elements
// //decide the effect to be applied
// //childnodes- return all childNodes including whitespace whic is treated as text node

// //children, first child, second child

 /*const res=document.querySelector('#result');
// //const allChildren  = result.childNodes; //conatins white spaces also

 const children = result.children; //considers only text;*/

/*const heading = document.querySelector('h3');
 const parent=heading.parentElement;
 parent.style.color='red';*/

 const first=document.querySelector('.study');
 //const second=(first.nextSibling.nextSibling.style.color='blue');
 first.nextElementSibling.style.color='blue';


const last = document.querySelector('#res');
const third=(last.previousSibling.previousSibling.style.color='yellow');

/*const item=document.getElementById('title');
const value=item.firstChild.nodeValue;
const easyValue=item.textContent;*/

/*const first=document.querySelector('.study');
const classValue=first.getAttribute('class');     //returns the name of theat class or id
//console.log(classValue);  */     

//const link=document.getElementById('link');
//const Showlink=link.getAttribute('href');
//console.log(Showlink);

const last1 = first.nextElementSibling;
last1.setAttribute('class', 'first');
last1.textContent="Practice makes a man perfect";       //dynamically adding second class.

const s1 = document.getElementById('title1');
const s2 = document.getElementById('title2');
const s3 = document.getElementById('title3');

//const classValue=s1.className;

s2.className='colors';
s2.className='text'; //overwrites the previous one.
//to use both
s2.className='colors text';

//s3.classList.add('colors');
//s3.classList.add('text');
s3.classList.add('text', 'colors');
s3.classList.remove('text');
let ressult=s3.classList.contains('colors');
if(ressult)
{
   console.log("hi");
}
else 
{
    console.log('bye');
}

const classValue = s3.classList;

const res11=document.querySelector('#result1');
//create empty element
const bodyDiv = document.createElement('div');
//create text node
const text=document.createTextNode("a simple div created");
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);


//const head=document.getElementsByTagName('h2');


const small = document.createElement('h6');
const smallText = document.createTextNode("Adding heading 6");
small.classList.add('red');
small.appendChild(smallText);
document.body.replaceChild(small,bodyDiv);
//console.log(result1.children);

const res2 = document.querySelector('#result1');
//console.log(res2);
const haeding=document.querySelector('h3');
//console.log(haeding);
res2.removeChild(haeding);
console.log(haeding);

const list1 = document.getElementById('result');
const list2 = document.getElementById('result1');
const item1 = document.querySelector('.study');

//console.log(list2.textContent);
//console.log(list1.innerHTML);

const name="coding addict";
const ul = document.createElement('ul');
ul.innerHTML=`<li class ="red">Learning JS with ${name} </li>`;
document.body.appendChild(ul);
 
//ul.textContent="siddhi"; //simply adds the text

//CSS

const random = document.querySelector('.random');
random.classList.add('design');

//hover 
const heade = document.querySelector('h2');
const btnn=document.querySelector('.btn');


/* btnn.addEventListener('click',function()
{
   heade.classList.add('red');
}) */

//click-fires after full action occurs
//mousedown- button is pressed
//mouseup - button is released
//mouseenter-moved onto an element
//mouseleave - moved out of an element

/* heade.addEventListener('mouseenter', function()
{
    heade.classList.add('design');
})
 */

/* heade.addEventListener('mouseleave', function()
{
    heade.classList.remove('design');
})
 */
 const namee = document.getElementById('name');
/*namee.addEventListener('keypress',function()               //only for keys with character values, function task is peformed.
{
    console.log("you pressed a key");
} ); */

/* namee.addEventListener('keydown',function()        //whichever key on the keyboard is pressed, it will peform task of the function
{
    console.log("you pressed a key");
} ); */


/* namee.addEventListener('keyup',function()               //whatever is typed in the input, is displayed on console
{
    console.log(namee.value);
} );
 */

heade.addEventListener('click', function(event)
{
   event.currentTarget.classList.add('design');
})

//preventDefault() - prevents default behaviour
//

//currentTarget - always refers to the element to which the event handler has been attached to
//target - identifies the element on which the event occured

const btns = document.querySelectorAll('.btn');
btns.forEach(function(btn)
{
   btn.addEventListener('mouseenter', function(e)
   {
    //e.currentTarget.style.color='yellow';
    //e.currentTarget.classList.add('design');
    e.target.style.color='blue';
   })

   btn.addEventListener('mouseleave', function(e)
   {
    e.currentTarget.classList.remove('design');
   })
})

/* const container = document.querySelector('.container');
const listl=document.querySelector('.list-items');

function showBubbling(e)
{
    console.log('current target', e.currentTarget);
    console.log('target', e.target);
    if(e.target.classList.contains('link'))
    {
        console.log("it is a link");
    }
}

listl.addEventListener('click', showBubbling);
//container.addEventListener('click', showBubbling); */

const form = document.getElementById('form');
const name1=document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function(e)
{
    //e.preventDefault();                           //so that on doing refresh, console is not cleared.
    console.log('form submitted');     
    console.log(name1.value);
    console.log(password.value);  
})

/* localStorage.setItem('name', 'siddhi');
const name2 = document.localStorage.getItem('name');
console.log(name2);
 */