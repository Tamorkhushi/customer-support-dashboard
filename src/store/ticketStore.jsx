import { create } from 'zustand';

// Helper functions to generate deterministic UI fields from generic API IDs
const determinePriority = (id) => ['Low', 'Medium', 'High'][id % 3];
const determineStatus = (id) => ['Open', 'In Progress', 'Resolved'][(id + 1) % 3];
const generateDate = (id) => {
  const date = new Date();
  date.setDate(date.getDate() - (id % 10)); // Distribute dates over the last 10 days
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export const useTicketStore = create((set) => ({
  tickets: [],
  isLoading: false,
  error: null,
  
  fetchTickets: async () => {
    set({ isLoading: true, error: null });
    try {
      // 1. Fetch from a real public REST API instead of hardcoded data
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=15');
      
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
      
      const apiData = await response.json();
      
      // 2. Normalize the generic API data into our specific Ticket format
      const normalizedTickets = apiData.map((item) => ({
        id: `TKT-${item.id}`,
        customerName: item.email.split('@')[0].replace(/_/g, ' '), // Extract name from email
        subject: item.name.charAt(0).toUpperCase() + item.name.slice(1, 35) + '...', 
        priority: determinePriority(item.id),
        status: determineStatus(item.id),
        date: generateDate(item.id),
        messages: [item.body] // Map the comment body to the initial message
      }));
      
      set({ tickets: normalizedTickets, isLoading: false });
    } catch (err) {
      set({ error: 'Failed to connect to the support API. Please try again.', isLoading: false });
    }
  },
  
  updateStatus: (id, status) => set((state) => ({
    tickets: state.tickets.map(t => t.id === id ? { ...t, status } : t)
  }))
}));