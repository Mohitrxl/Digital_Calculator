let  current_display='';
document.querySelector('#display').value = current_display;
// DEL button handler to remove the last character
document.querySelector('#del').addEventListener('click', function() {
    // Remove the last character from the current_display string
    current_display = current_display.slice(0, -1);
    
    // Update the display after deletion
    document.querySelector('#display').value = current_display;
  });

  
  