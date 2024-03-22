import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';

const localizer = momentLocalizer(moment);

const Mettings = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Fetch meetings from your backend API
    // Replace this with actual API calls
    const fakeMeetings = [
      {
        id: 1,
        title: 'Meeting 1',
        start: new Date(2023, 9, 15, 10, 0),//Month day time min
        end: new Date(2023, 9, 15, 11, 0),//month day time min
      },
      // Add more meetings
    ];

    setEvents(fakeMeetings);
  }, []);

  // Function to handle meeting selection
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    // You can trigger notification logic here
    // Send a notification to participants, update database, etc.
  };

  return (
    <div>
      <h2>Meeting Calendar</h2>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectEvent={handleSelectEvent}
        />
      </div>
      {selectedEvent && (
        <div>
          <h3>Selected Meeting: {selectedEvent.title}</h3>
          <p>Starts: {moment(selectedEvent.start).format('MMMM D, YYYY, h:mm A')}</p>
          <p>Ends: {moment(selectedEvent.end).format('MMMM D, YYYY, h:mm A')}</p>
        </div>
      )}
    </div>
  );
};

export default Mettings;
