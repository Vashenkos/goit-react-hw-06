import { FaPhone, FaUser } from "react-icons/fa6";
import { deleteContact } from "../redux/contactsSlice";
import { useDispatch } from "react-redux";
import s from "./Contact.module.css"


function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className ={s.list}>
      <div className ={s.contdiv}>
        <p className>
          <FaUser className={s.icon}/>    
              {contact.name}
        </p>
        <p className>
          <FaPhone className={s.icon} />
             {contact.number}
        </p>
      </div>

      <button className={s.buttonlist}
        onClick={() =>dispatch(deleteContact(contact.id)
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;