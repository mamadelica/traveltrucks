"use client";
import "react-datepicker/dist/react-datepicker.css";

import css from "./BookingForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleAction = () => {
    toast.success("Success!");
  };

  return (
    <form className={css.bookingForm} action={handleAction}>
      <div className={css.headerBlock}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <div className={css.fieldsBlock}>
        <label className={css.label}>
          <input
            type="text"
            name="name"
            required
            className={css.input}
            placeholder="Name*"
          />
        </label>

        <label className={css.label}>
          <input
            type="email"
            name="email"
            required
            className={css.input}
            placeholder="Email*"
          />
        </label>

        {/* calendar */}
        <div className={css.field}>
          <div className={css.calendarWrapper}>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Booking date*"
              className={css.input}
              dateFormat="dd.MM.yyyy"
              calendarClassName="customCalendar"
            />
          </div>
        </div>

        <label className={css.label}>
          <textarea
            name="comment"
            className={css.textarea}
            rows={4}
            placeholder="Comment"
          ></textarea>
        </label>
      </div>
      <button type="submit" className={css.sendBtn}>
        Send
      </button>
    </form>
  );
}
