import HeaderGenerator from '../HeaderGenerator';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div>
      <HeaderGenerator children={'Contact'} />
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
