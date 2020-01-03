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
         list[i].style.display = '';
         console.log(list[i]);
      }

      else {
         list[i].style.display = 'none';
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
   div.className = 'pagination';
   let link = document.createElement('ul');
   let pageParent = document.querySelector('.page');
   let pageList = document.querySelector('.page-header');
   let numberButtons = Math.ceil(list.length / itemsPerPage);

   for (let i = 0; i < numberButtons; i++){
   let lineItem = document.createElement('li');
   lineItem.innerHTML = '<a href=#>' + i + '</a>';
   //* Each LI element should contain an A element with an href attribute of #, and text set to the page number each link will show. First link is 1. Second link is 2. And so on.*/
      
   //* Add the active class name to the first pagination link initially.*/

   //* Add a “click” event listener to each A element. A loop can be helpful here.*/

   link.appendChild(lineItem);

   let links = lineItem.children;

   for (let i = 0; i < links.length; i++){
   links[i].addEventListener('click', (e) => {
      console.log('link clicked');
   });
   };
  

   };

   div.appendChild(link);
   pageParent.insertBefore(div, pageList);

   console.log(list);

}
appendPageLinks(studentList);



// Remember to delete the comments that came with this file, and replace them with your own code comments.