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
   Function to conditionally display students on page based on student index and total students in the list.
***/

const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   let p = document.createElement('p');
   p.textContent = "No results";
   p.id = 'noResults';
   let ul = document.querySelector('.student-list');
   let div = ul.parentNode;
   let checkForP = document.getElementById('noResults');

   for (i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex){
         list[i].style.display = '';
         console.log(startIndex, endIndex);
      }
      else {
         list[i].style.display = 'none';
      }
   }

   if (list.length == 0 && checkForP == null){
      div.insertBefore(p, ul);
   } else if (checkForP && list.length >= 0 ){
         checkForP.remove();
   }; 

};

showPage(studentList,1);

/*** 
   Function to append the pagination links at the top of the student list and add click event listeners to trigger 'showPage' function and set or remote a class of 'action'. 
***/

const appendPageLinks = (list) => {
   let numberOfLinks = list.length / itemsPerPage + 1;
   let div = document.createElement('div');
   div.className = 'pagination';
   let unorderedList = document.createElement('ul');
   div.appendChild(unorderedList);
   let pageParent = document.querySelector('.page');
   let pageHeader = document.querySelector('.page-header');

   /** Creates line items and inserts anchor tags inside ul. */
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
   
   /** Add the “click” event listener to each anchor tag. */
   div.addEventListener('click', (event) => {
      if(event.target.tagName = 'A'){

         for(let i = 0; i < links.length; i++){
            links[i].classList.remove('active');
            };

            event.target.classList.add('active');
            let pageNum = event.target.textContent;

            showPage(studentList, pageNum);
      };
   }); 
   
   /** Inserts dic into the element with the class of '.page-header'. */
   pageParent.insertBefore(div, pageHeader);   

}

appendPageLinks(studentList);

/*** Function to remove pagination */
const removePageLinks = () => {
let removePagination = document.querySelector('.pagination');
removePagination.remove();
};


/*** 
  Creates search input and search button then appends elements to the element with the class of '.page-header';
***/

let searchDiv = document.createElement('div');
searchDiv.className = 'student-search';
let input = document.createElement('input');
input.placeholder = 'Type to search here...';
let button = document.createElement('button');
button.textContent = 'Search';
let pageHeader = document.querySelector('.page-header');
searchDiv.appendChild(input);
searchDiv.appendChild(button);
pageHeader.appendChild(searchDiv);


/***
   2. Function to run a simple search.
      -Add function to run search. Include parameters for existing array and input text.
         - Loop over student array
            - remove any students that have a class for 'match'
            - add if statement that checks: 
                  - if the input (lowercase) includes the text content of the student list index (lowercase) 
                  - AND the input length is not zero.
               - Store results in a new array
               - Add a class of 'match' to new items in results array 
         - create result array - get all elements with class of 'match'
         - return results array.
  ***/         
 
const simpleSearch = (list, input) => {
   let results = [];

   for(let i = 0; i < list.length; i++){
      list[i].classList.remove('match');

      if(input.length !== 0 && list[i].textContent.toLowerCase().includes(input.toLowerCase())){
         list[i].classList.add('match');
         results.push(list[i]);
      } else {
         list[i].style.display = 'none';
      };
      };

      console.log(results.length);
      return(results);
      
}

  /***
   3. Add 'submit' event listener to button.
      - Store current input text value in variable  
      - Call the simple search function in #2
      - Inlude the student list and current input text variable.
      - Find the number pages needed for search results by dividing results array by 10.
      - Call the 'showPage' function with the search results array and number of pages needed.
   ***/


/** Event listerner actions */
const eventActions = () => {
   let inputValue = input.value; 
      let searchResults = simpleSearch(studentList, inputValue);
      let searchResultPages = Math.ceil(searchResults.length / itemsPerPage);

      showPage(searchResults, searchResultPages);
      removePageLinks();
      appendPageLinks(searchResults);
};

/** Adds event listener for 'click' to button */
  searchDiv.addEventListener('click', (event) => {
   if(event.target.tagName == 'BUTTON'){
      eventActions(event);
   };
}); 

/** Adds event listener for 'keyup' to input */
   searchDiv.addEventListener('keyup', (event) => {
      if(event.target.tagName == 'INPUT'){
         eventActions(event);
      };
   }); 
 /***        
   4. Update showPage function: If no records are returned show "No results" on page.
         - if results array equals zero
         - Hide ul with class of '.student-list'
         - Create new p element 
         - Give p element text content of "No results"
         - Append p element to parent of ul with class of '.student-list'
***/



