const eventsData = [
  {
    id: 1,
    title: "Board Game Night",
    category: "Gaming",
    date: "Today",
    time: "7:30 PM",
    location: "Game Hub Cafe",
    capacity: "6/12",
    host: "Mike T.",
    description: "Join us for an evening of strategy and fun."
  },
  {
    id: 2,
    title: "Street Food Tour",
    category: "Food & Drinks",
    date: "Today",
    time: "12:00 PM",
    location: "Main St.",
    capacity: "6/7",
    host: "David L.",
    description: "Exploring the best local food trucks on Main St."
  },
  {
    id: 3,
    title: "Coffee & Code",
    category: "Learning",
    date: "Tomorrow, Jan 19",
    time: "10:00 AM",
    location: "Brew Cafe Downtown",
    capacity: "5/8",
    host: "Sarah K.",
    description: "Bring your laptop and work on projects together."
  },
  {
    id: 4,
    title: "Pickleball",
    category: "Sports",
    date: "Today",
    time: "12:00 PM",
    location: "Bryant Park",
    capacity: "2/4",
    host: "Alex Wilson",
    description: "Casual games of pickleball. All skill levels are welcome!"
  },
  {
    id: 5,
    title: "Park Yoga Session",
    category: "Outdoor",
    date: "Saturday, Jan 21",
    time: "8:00 AM",
    location: "West Entrance",
    capacity: "10/20",
    host: "Emma R.",
    description: "Morning vinyasa flow in the park."
  }
];
function renderEvents(events) {
    const container = document.getElementById('events-container');   
    if (!container) return;   
    container.innerHTML = ''; 
    events.forEach(event => {
        const cardHTML = `
            <div class="event-card">
                <span class="event-tag">${event.category}</span>
                <h3>${event.title}</h3>
                <div class="event-details">
                    <p>🕒 ${event.date} • ${event.time}</p>
                    <p>📍 ${event.location}</p>
                    <p>👥 ${event.capacity} joined</p>
                    <p style="margin-top: 8px; font-weight: 500;">Host: ${event.host}</p>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    renderEvents(eventsData);
});