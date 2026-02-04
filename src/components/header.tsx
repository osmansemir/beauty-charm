function Header() {
  return (
    <>
      <header className="flex flex-col items-center">
        <div className="size-50 ">
          <img src="bc-logo.svg" />
        </div>
        <nav className=" font-serif pb-3">
          <ul className="flex gap-6">
            <li>
              <a href="#" className="cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="cursor-pointer">
                About
              </a>
            </li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
