function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>&copy; {year} Robayed Mahmud Rohan</p>
    </footer>
  )
}

export default Footer
