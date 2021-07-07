import React, {Component , useState} from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import env from "react-dotenv";

const headerToolbarOptions = {
  left: "title",
  center: "",
  right: "prev,next today"
};

const footerToolbarOptions = {
  left: "",
  center: "dayGridMonth,dayGridWeek,dayGridDay",
  right: ""
};

const events = {
  googleCalendarId: env.GOOGLE_CALENDAR_ID
};


class Calendar extends Component {
  render() {
    return <div className="calendar">
    <FullCalendar
    plugins={[ googleCalendarPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
    googleCalendarApiKey={env.GOOGLE_CALENDAR_API_KEY}
    events={events}
    headerToolbar={headerToolbarOptions}
    footerToolbar={footerToolbarOptions}
    initialView="dayGridMonth"
    contentHeight="auto"
    editable={true}
    fixedWeekCount={false}
    showNonCurrentDates={false}
    height="550px"
    navLinks={true}
    // eventDrop={this.handleEventDrop}
    // eventClick={this.handleEventClick}
    // events={this.formatEvents}
    />
  </div>
}
};

export default Calendar;
