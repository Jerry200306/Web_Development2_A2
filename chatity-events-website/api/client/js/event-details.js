document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    if (eventId) {
        loadEventDetails(eventId);
    } else {
        showError('No event ID provided.');
    }
});

async function loadEventDetails(eventId) {
    try {
  
        let event;
        try {
            event = await callAPI(`/events/${eventId}`);
        } catch (error) {
    
            console.log('Trying alternative method to get event details');
            const allEvents = await callAPI('/');
            event = (allEvents.data || allEvents).find(e => e.id == eventId);
            if (!event) {
                throw new Error('Event not found');
            }
        }
        displayEventDetails(event);
    } catch (error) {
        showError('Failed to load event details. Please try again.');
    }
}

function displayEventDetails(event) {
    const loadingElement = document.getElementById('loading');
    const detailsElement = document.getElementById('eventDetails');
    
    loadingElement.style.display = 'none';
    
    const progressPercentage = event.goal_amount ? 
        Math.min((event.current_amount / event.goal_amount) * 100, 100) : 0;
    
    detailsElement.innerHTML = `
        <div class="event-detail-card">
            <div class="event-header">
                <div>
                    <span class="event-category">${event.category_name || 'General'}</span>
                    <h1>${event.name}</h1>
                    <p class="event-description">${event.description}</p>
                </div>
                <div class="event-image-large">
                    ${getImageUrl(event.image_url) ? 
                        `<img src="${getImageUrl(event.image_url)}" alt="${event.name}" 
                             onerror="this.src='images/placeholder.jpg'; this.alt='Image not available'"
                             style="width:100%;height:100%;object-fit:cover;border-radius:8px;">` : 
                        '<div class="image-placeholder-large">Event Image</div>'
                    }
                </div>
            </div>
            
            <div class="event-info-sidebar">
                <h3>Event Information</h3>
                <p><strong>Date:</strong> ${formatDate(event.date)}</p>
                <p><strong>Time:</strong> ${event.time || 'TBA'}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Ticket Price:</strong> ${event.ticket_price ? formatCurrency(event.ticket_price) : 'Free'}</p>
                <p><strong>Organizer:</strong> ${event.organization_name || 'HopeConnect'}</p>
                
                <button onclick="showRegisterModal()" class="btn-primary" style="width:100%;margin-top:1rem;">
                    Register for Event
                </button>
            </div>
            
            ${event.goal_amount ? `
            <div class="progress-container">
                <h3>Fundraising Progress</h3>
                <p>Goal: ${formatCurrency(event.goal_amount)}</p>
                <p>Raised: ${formatCurrency(event.current_amount || 0)}</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                </div>
                <p>${progressPercentage.toFixed(1)}% of goal reached</p>
            </div>
            ` : ''}
            
            <div class="event-full-description">
                <h3>About This Event</h3>
                <p>${event.full_description || event.description || 'More details coming soon.'}</p>
            </div>
        </div>
    `;
    
    detailsElement.style.display = 'block';
}
