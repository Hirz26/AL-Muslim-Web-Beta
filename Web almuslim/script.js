//slider function
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0; 
    } else if (index < 0) {
        currentSlide = slides.length - 1; 
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

showSlide(currentSlide);

//date function
const lastModifiedDate = new Date('2024-10-29T11:14'); 
    document.getElementById('last-modified').innerText = 
        'Last Modified: ' + lastModifiedDate.toLocaleString();

// search data
const data = [
    { name: "Naiknya Rektor Baru", url: "#", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { name: "Mahasiswa Jepang Mendarat ke Al-Muslim", url: "#", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { name: "Mahasiswa Jepang Pertama Kali Coba Sate Matang!!!", url: "#", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { name: "Menu Kantin Almuslim Kampus Timur", url: "#", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { name: "Tim Debat Al-Muslim Lulus ke National", url: "#", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { name: "Pelepasan Mahasiswa Jepang Tahun Ajaran 2023", url: "#", summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { name: "Website KUI Resmi Launching", url: "home.html", summary: "link ke beranda" }
];

// search function
function performSearch() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; 

    if (query.trim() === '') {
        return; 
    }

    const results = data.filter(item => item.name.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(item => {
        const resultItem = document.createElement('div');
        const link = document.createElement('a');
        link.textContent = item.name; 
        link.href = item.url; 
        link.target = "_self"; 
        resultItem.classList.add('result-item'); 
        resultItem.appendChild(link); 
            
            // Create and append the summary
        const summary = document.createElement('div');
        summary.textContent = item.summary;
        summary.classList.add('summary');
        resultItem.appendChild(summary); 
            
        resultsContainer.appendChild(resultItem); 
        });
    } else {
        resultsContainer.textContent = 'No results found';
    }
}

document.getElementById('searchQuery').addEventListener('input', performSearch);

//pop up function
function openPopup() {
    document.getElementById('creditCardPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('creditCardPopup').style.display = 'none';
}

// alert function
document.getElementById('creditCardForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Credit card information submitted!');
    closePopup();
}

//accordian function
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', function() {

        this.classList.toggle('active');

        const content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});  

// FAQ funtion
const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const answer = faq.querySelector('.faq-answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });                 