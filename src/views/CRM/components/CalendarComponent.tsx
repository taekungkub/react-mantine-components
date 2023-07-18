import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import ModalEvent from "./ModalEvent";
import { useDisclosure } from "@mantine/hooks";

type Props = {};

export default function CalendarComponent({}: Props) {
  const [opened, { open, close }] = useDisclosure(false);

  function handleDateClick(arg: any) {
    open();
  }
  return (
    <div>
      <ModalEvent open={open} opened={opened} close={close} />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2023-07-01" },
          { title: "event 2", date: "2023-07-02" },
          { title: "event 3", date: "2023-07-02" },

          { title: "Meeting", allDay: true, date: "2023-07-09", color: "#34C28F" },
          {
            title: "Hey!",
            allDay: true,
            start: new Date(),
            color: "#F1B34C",
          },
        ]}
        dateClick={handleDateClick}
      />
    </div>
  );
}
