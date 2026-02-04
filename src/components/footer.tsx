function Footer() {
  return (
    <footer
      role="contentinfo"
      className="flex h-24 bg-primary mt-10 shrink-0 items-center justify-center border-t"
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Beauty Charm. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
