'use client';
import css from "./BookingForm.module.css";

export default function BookingForm() {
  return <form className={css.bookingForm}>
    <div className={css.headerBlock}>
  <h3 className={css.title}>Book your campervan now</h3>
  <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>
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

  <label className={css.label}>
    <input
      type="date"
      name="date"
      required
      className={css.input}
      placeholder="Booking date*"
    />
  </label>

  <label className={css.label}>
    <textarea
      name="comment"
      className={css.textarea}
      rows={4}
      placeholder="Comment"
    ></textarea>
  </label>

</div>
  <button type="submit" className={css.sendBtn}>Send</button>
</form>

}
