let currentSection = 1;
const totalSections = 9;
function nextSection() {
  const currentSectionElement = document.getElementById('section' + currentSection);
   const inputs1 = currentSectionElement.querySelectorAll('input');
   for (let i = 0; i < inputs1.length; i++) {
     if (inputs1[i].value.trim() === '') {
       alert('Please fill in all Qusetion fields before proceeding.');
       return; 
     }
   }

 
  currentSectionElement.style.display = 'none';
  currentSection++;

  const nextSectionElement = document.getElementById('section' + currentSection);
  
  if (nextSectionElement) {
    nextSectionElement.style.display = 'block';
  } else {
    collectResponses();
  }
  updateProgressBar();
  
}

function previousSection() {
  if (currentSection > 1) {
    const currentSectionElement = document.getElementById('section' + currentSection);
    currentSectionElement.style.display = 'none';
    currentSection--;

    const previousSectionElement = document.getElementById('section' + currentSection);
    previousSectionElement.style.display = 'block';

    // Update progress bar
    updateProgressBar();
  }
}

function collectResponses() {
 
    const responses = {};
    const currentSectionElement = document.getElementById('section' + currentSection);
    currentSectionElement.style.display = 'none';
    const responseElement = document.getElementById('responseContainer');
    responseElement.style.display='block'; 
    const progressbarElement = document.getElementById('progress')
    progressbarElement.style.display='none'
    for (let i = 1; i <= currentSection; i++) {
      const sectionElement = document.getElementById('section' + i);
      const inputs = sectionElement.querySelectorAll('input');
      
      inputs.forEach(input => {
        responses[input.id] = input.value;
      });
    }

    const jsonResponse = JSON.stringify(responses);
    const responseContainer = document.getElementById('responseContainer');
    responseContainer.textContent = jsonResponse;
    console.log(jsonResponse);
  }


// Hide all sections except the first one initially
document.querySelectorAll('.section').forEach((section, index) => {
  if (index !== 0) {
    section.style.display = 'none';
  }
});

function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  let curr=currentSection-1;
  const progress = (curr / totalSections) * 100;
  progressBar.style.width = progress + '%';
}