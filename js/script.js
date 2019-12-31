/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

let studentList = document.getElementsByClassName('student-item');
let itemsPerPage = 10;
console.log(studentList);


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage (list, page) {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   for (i = 0; i < list.length; i++){
      if (i >= startIndex && i <= endIndex){
         // show list items 
         console.log(list[i]);
      }

      else {
         // hide list itmes
      }
   }
}

showPage(studentList,1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks (list) {
   let div = document.createElement('div');
   let link = document.createElement('ul');
   
   let pageParent = document.querySelector('.page');
   let pageList = document.querySelector('.page-header');
   let numberButtons = Math.ceil(list.length / itemsPerPage);
   //append button links inside of div

   for (let i = 0; i < numberButtons; i++){
   let lineItem = document.createElement('li');
   lineItem.innerHTML = '<button>Button</button>';
   link.appendChild(lineItem);
   };

   div.appendChild(link);
   pageParent.insertBefore(div, pageList);

   console.log(list);

}

appendPageLinks(studentList);



// Remember to delete the comments that came with this file, and replace them with your own code comments.