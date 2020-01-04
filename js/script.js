/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Dani Kellogg 2020
******************************************/

/*** 
   Global Variables
***/

let studentList = document.getElementsByClassName('student-item');
let itemsPerPage = 10;

/*** 
   Function to conditionally display students on page
***/

const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   for (i = 0; i < list.length; i++){
      if (i >= startIndex && i <= endIndex){
         list[i].style.display = '';
      }
      else {
         list[i].style.display = 'none';
      }
   }
}

showPage(studentList,1);

/*** 
   Function to append the pagination links at the top of the student list
***/

const appendPageLinks = (list) => {
   let numberOfLinks = Math.ceil(list.length / itemsPerPage);
   let div = document.createElement('div');
   div.className = 'pagination';
   let unorderedList = document.createElement('ul');
   div.appendChild(unorderedList);
   let pageParent = document.querySelector('.page');
   let pageHeader = document.querySelector('.page-header');

   /** Create line items and insert anchor tags inside ul. */
   for (let i = 1; i < numberOfLinks; i++){
      let lineItem = document.createElement('li');
      lineItem.innerHTML = '<a href=#>' + i + '</a>';
      unorderedList.appendChild(lineItem);

      /** Sets first a tag to active */
      if (i === 1){
         lineItem.children[0].className = 'active';
      };
   };

   let links = document.getElementsByTagName('A');
   
   //* Add a “click” event listener to each anchor tag. */
   div.addEventListener('click', (event) => {
      if(event.target.tagName = 'A'){

         for(let i = 0; i < links.length; i++){
            links[i].classList.remove('active');
            };

            event.target.classList.add('active');
      };
   }); 
   
   pageParent.insertBefore(div, pageHeader);

}

appendPageLinks(studentList);
