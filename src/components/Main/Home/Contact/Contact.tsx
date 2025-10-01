import TestMap from '../../../_Test/TestMap';
import HeaderGenerator from '../HeaderGenerator';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div>
      <HeaderGenerator children={'Contact'} />
      <div>
        <TestMap />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
