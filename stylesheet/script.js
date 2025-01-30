document.querySelectorAll('.grid img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.5)'; // Adjust the scale value as needed
        img.style.zIndex = '10'; // Ensure the hovered image is on top
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)'; // Reset the scale
        img.style.zIndex = '1'; // Reset the z-index
    });
});
