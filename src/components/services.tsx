function Services() {
  const urls = [
    {
      url: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Shooting",
    },
    {
      url: "https://images.unsplash.com/photo-1568918803912-933d961baa1a?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Bridal",
    },
    {
      url: "https://images.unsplash.com/photo-1611826585949-b0ccabd2c1a4?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Full Face with Lashes",
    },
    {
      url: "https://images.unsplash.com/photo-1596205521983-9c372fb3d4f1?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Special Events",
    },
  ];
  return (
    <section className="flex font-sans flex-col mb-10 items-center">
      <h2 className="text-xl py-7 font-serif">SERVICES</h2>
      <div className="grid grid-cols-4 gap-2">
        {urls.map((item) => (
          <div className="flex flex-col h-60 items-center">
            <div className="max-h-50 overflow-hidden w-9/10">
              <img className="object-cover" src={item.url} alt="" />
            </div>
            <p className="text-center py-2 h-10 bg-secondary w-full">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
