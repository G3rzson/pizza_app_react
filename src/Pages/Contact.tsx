import ContactForm from "../Components/ContactForm";
import Opening from "../Components/Opening";
import Questions from "../Components/Questions";

export default function Contact() {
  return (
    <div className="container">
      <Opening />
      <ContactForm />
      <Questions />
    </div>
  );
}
