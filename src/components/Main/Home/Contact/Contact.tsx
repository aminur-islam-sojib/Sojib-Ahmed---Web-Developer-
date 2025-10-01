import HeaderGenerator from '../HeaderGenerator';
import ContactForm from './ContactForm';
import Map from './Map';

const Contact = () => {
  return (
    <div>
      <HeaderGenerator children={'Contact'} />
      <div>
        <Map />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
