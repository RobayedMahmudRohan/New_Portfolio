function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>&copy; {year} Robayed Mahmud Rohan. All rights reserved.</p>
    </footer>
  )
}

export default Footer
