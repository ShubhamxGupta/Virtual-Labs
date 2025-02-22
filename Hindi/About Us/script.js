document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.content p, .content ul, .content .ital, .detail-info');

    paragraphs.forEach(paragraph => {
        paragraph.style.opacity = 0; 
        paragraph.style.transform = 'translateY(20px)'; 
        paragraph.style.transition = 'opacity 0.8s ease, transform 0.8s ease'; 
    });

    setTimeout(() => {  
        paragraphs.forEach((paragraph, index) => {
            setTimeout(() => { 
                paragraph.style.opacity = 1;
                paragraph.style.transform = 'translateY(0)';
            }, index * 300); 
        });
    }, 900); 

});