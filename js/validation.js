
document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('createEventForm');

    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            let isValid = true;  
            const titleInput = document.getElementById('eventTitle');
            const titleError = document.getElementById('titleError');
            
            if (titleInput.value.trim() === '') {
                titleError.style.display = 'block'; 
                titleInput.style.borderColor = '#ef4444'; 
                isValid = false;
            } else {
                titleError.style.display = 'none';
                titleInput.style.borderColor = 'var(--border-light)';
            }
            const categorySelect = document.getElementById('eventCategory');
            const categoryError = document.getElementById('categoryError');
            
            if (categorySelect.value === '') {
                categoryError.style.display = 'block';
                categorySelect.style.borderColor = '#ef4444';
                isValid = false;
            } else {
                categoryError.style.display = 'none';
                categorySelect.style.borderColor = 'var(--border-light)';
            }
            const descInput = document.getElementById('eventDescription');
            const descError = document.getElementById('descError');
            
            if (descInput.value.trim().length < 10) {
                descError.style.display = 'block';
                descInput.style.borderColor = '#ef4444';
                isValid = false;
            } else {
                descError.style.display = 'none';
                descInput.style.borderColor = 'var(--border-light)';
            }
            if (isValid) {
                
                alert('Event created successfully!'); 
                form.reset(); 
                window.location.href = 'index.html'; 
            }
        });
    }
});