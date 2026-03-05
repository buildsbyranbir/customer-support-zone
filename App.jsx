
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import TicketCard from './components/TicketCard.jsx';
import TaskStatus from './components/TaskStatus.jsx';
import ResolvedTasks from './components/ResolvedTasks.jsx';
import Footer from './components/Footer.jsx';
import { ticketsData } from './data/tickets.js';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleSelectTicket = (ticketToAdd) => {
    if (inProgressTickets.find(t => t.id === ticketToAdd.id)) {
      toast.warn('Ticket is already in progress!');
      return;
    }
    if (resolvedTickets.find(t => t.id === ticketToAdd.id)) {
        toast.error('This ticket has already been resolved!');
        return;
    }
    setInProgressTickets([...inProgressTickets, ticketToAdd]);
    toast.success(`Ticket #${ticketToAdd.id} added to Task Status!`);
  };

  const handleCompleteTicket = (ticketToComplete) => {
    // For remove from in-progress
    setInProgressTickets(inProgressTickets.filter(t => t.id !== ticketToComplete.id));

    // Add to resolved
    setResolvedTickets([...resolvedTickets, ticketToComplete]);

    // Remove from main ticket list
    setTickets(tickets.filter(t => t.id !== ticketToComplete.id));

    toast.info(`Ticket #${ticketToComplete.id} marked as resolved!`);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Banner inProgressCount={inProgressTickets.length} resolvedCount={resolvedTickets.length} />
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Tickets</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tickets Grid */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tickets.map(ticket => (
                  <TicketCard key={ticket.id} ticket={ticket} onSelect={handleSelectTicket} />
                ))}
              </div>
            </div>

            {/* Status Section */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
                <TaskStatus tasks={inProgressTickets} onComplete={handleCompleteTicket} />
                <ResolvedTasks tasks={resolvedTickets} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
