document.querySelectorAll('.btn').forEach((item) => 
{
    item.addEventListener('click', ()=>{
        alert('Error 404')
    })
})

//console.log('hello!!');
//document.write('Hello!!');
document.body.style.backgroundColor='orange';
document.body.style.color='white';
document.getElementById('btn').style.backgroundColor='aqua';

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
 tag2[0].style.color='black';   //only single element(nullet+text).

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
