function About() {
  return (
    <section id="About" className="flex flex-col items-center">
      <div className="text-2xl font-stylish py-10">
        <span className="font-serif text-3xl">MUA</span> based in Dubai
      </div>
      <div className="bg-secondary py-10 w-full min-h-80 gap-5 grid grid-cols-2 items-center">
        <div className="col-span-1 ml-auto w-80">
          <p className="text-6xl mb-5 font-serif">Hi, I am Meryem</p>
          <p className="italic font-serif text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
        <div className="col-span-1">
          <div className="w-60 border-15 border-white mx-auto">
            <img src="https://images.unsplash.com/photo-1617655345937-95fafc9013f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
