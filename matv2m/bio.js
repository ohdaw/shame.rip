// © 2023 H8.LOL | All rights reserved.

window.addEventListener('load', () => {
    const bios = ["a winner is a loser who tried one more time" , "top #1"];
    const bioContainer = document.querySelector('#bio');
    let currentBioIndex = 0;
  
    function typeBio(bio) {
      let i = 0;
      const intervalId = setInterval(() => {
        bioContainer.innerHTML = bio.substring(0, i).split('').map(c => `<span>${c}</span>`).join('') + '<span class="cursor">|</span>';
        i++;
        if (i > bio.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            deleteBio(bio);
          }, 1000);
        }
      }, 100);
    }
  
    function deleteBio(bio) {
      let i = bio.length;
      const intervalId = setInterval(() => {
        bioContainer.innerHTML = bio.substring(0, i).split('').map(c => `<span>${c}</span>`).join('') + '<span class="cursor">|</span>';
        i--;
        if (i < 0) {
          clearInterval(intervalId);
          currentBioIndex++;
          if (currentBioIndex >= bios.length) {
            currentBioIndex = 0;
          }
          setTimeout(() => {
            typeBio(bios[currentBioIndex]);
          }, 1000);
        }
      }, 100);
    }
  
    typeBio(bios[currentBioIndex]);
  });