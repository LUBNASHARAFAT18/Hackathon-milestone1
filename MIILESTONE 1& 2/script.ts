// Select the toggle button and the skills section

 const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
 const skillsDiv = document.getElementById('skills') as HTMLDivElement


 
  toggleButton.addEventListener('click', () => {
     if(skills.style.display === 'none'){
        skills.style.display = 'block'
     } else {
        skills.style.display = 'none'
     }
  });
 



