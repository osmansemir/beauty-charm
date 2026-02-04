import { Button } from "./ui/button";

function Contact() {
  return (
    <section className="w-full p-5 bg">
      <div className="border-white bg-secondary p-5">
        <div className="text-center border-white border-15 h-50 p-5">
          <h3 className="text-2xl font-serif mb-2">Contact</h3>
          <p>hello@beautycharm.com</p>
          <p>+971 00 000 0000</p>
          <Button className="mt-3">Whatsapp</Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
