document.addEventListener("DOMContentLoaded", () => {
  const socialIcons = document.querySelectorAll(".social-icons a")

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.style.transform = "scale(1.2)"
    })

    icon.addEventListener("mouseout", () => {
      icon.style.transform = "scale(1)"
    })
  })

  // Add active class to the current nav item
  const currentLocation = location.href
  const menuItems = document.querySelectorAll("nav ul li a")
  menuItems.forEach((item) => {
    if (item.href === currentLocation) {
      item.classList.add("active")
    }
  })

  // Smooth scrolling for table of contents
  const tocLinks = document.querySelectorAll(".table-of-contents a")
  tocLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  })

  // Typing effect
  const typingText = document.getElementById("typing-text");
  const textToType = "Hello 👋, I'm Eliza!";
  let i = 0;

  function typeWriter() {
    if (i < textToType.length) {
      typingText.innerHTML += textToType.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  if (typingText) {
    typeWriter();
  }
})
