const API_BASE_URL = 'http://localhost:3000/api';
const IMAGE_BASE_URL = 'http://localhost:3000';

function getImageUrl(imagePath) {
    if (!imagePath) return null;
    

    if (imagePath.startsWith('http')) {
        return imagePath;
    }
    

    if (imagePath.startsWith('/')) {
        return `${IMAGE_BASE_URL}${imagePath}`;
    }
    

    return `${IMAGE_BASE_URL}/${imagePath}`;
}


async function callAPI(endpoint, options = {}) {
    try {
        console.log(`Calling API: ${API_BASE_URL}${endpoint}`);
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || `API error: ${response.status}`);
        }

        if (data.success === false) {
            throw new Error(data.message || 'API request failed');
        }

        return data.data || data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}



function setupModal() {
    const modal = document.getElementById('registerModal');
    const closeBtn = modal.querySelector('.close');
    const okBtn = document.getElementById('modalOk');

    function closeModal() {
        modal.style.display = 'none';
    }

    window.showRegisterModal = function() {
        modal.style.display = 'block';
    };

    closeBtn.onclick = closeModal;
    okBtn.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}


document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('registerModal')) {
        setupModal();
    }
});


function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-AU', options);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    }).format(amount);
}