import css from './ModalConfirm.module.css';

export default function ModalConfirm({ contact, onConfirm, onCancel }) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <p>Delete <strong>{contact.name}</strong>?</p>
        <div className={css.actions}>
          <button className={css.button} onClick={onConfirm}>Yes</button>
          <button className={css.button} onClick={onCancel}>Cancel</button>
        </div>
      </div>
 </div>
);
}