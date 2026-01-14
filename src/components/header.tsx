function Header() {
  return (
    <>
      <header className="flex flex-col items-center">
        <div className="min-h-30 m-5 flex flex-col justify-center items-center">
          <div className="text-7xl">BC</div>
          <div>Beauty Charm</div>
          <div>Makeup Artist</div>
        </div>
        <nav className="">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
