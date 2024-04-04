import  { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const initialEvents = [
  {
    title: 'Meeting',
    start: new Date(2024, 3, 1, 10, 0),
    end: new Date(2024, 3, 1, 12, 0),
  },
  {
    title: 'Lunch',
    start: new Date(2022, 3, 2, 12, 0),
    end: new Date(2022, 3, 2, 13, 0),
  },
];

const MyCalendar = () => {
  const [events, setEvents] = useState(initialEvents);


  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ backgroundColor: 'white', color: 'black' }}
        />
      </div>
   
    </DndProvider>
  );
};

export default MyCalendar;
