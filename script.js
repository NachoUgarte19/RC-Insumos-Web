// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80 // Ajuste para navbar fija
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Navbar activa según scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active")
    }
  })
})

// Formulario de contacto
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  const nombre = document.getElementById("nombre").value
  const email = document.getElementById("email").value
  const mensaje = document.getElementById("mensaje").value

  // Crear mensaje para WhatsApp
  const whatsappMessage = `Hola! Mi nombre es ${nombre}.
    
Email: ${email}

Mensaje: ${mensaje}`

  const whatsappURL = `https://wa.me/5491123456789?text=${encodeURIComponent(whatsappMessage)}`

  // Abrir WhatsApp
  window.open(whatsappURL, "_blank")

  // Limpiar formulario
  this.reset()

  // Mostrar mensaje de confirmación
  alert("¡Gracias por tu mensaje! Te redirigimos a WhatsApp para continuar la conversación.")
})

// Animaciones al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
    }
  })
}, observerOptions)

// Observar elementos para animaciones
document.querySelectorAll(".value-card, .product-card, .process-step, .testimonial-card").forEach((el) => {
  observer.observe(el)
})

// Auto-play del carousel de testimonios
const testimonialCarouselEl = document.getElementById("testimonialCarousel")
if (testimonialCarouselEl && window.bootstrap) {
  const testimonialCarousel = new window.bootstrap.Carousel(testimonialCarouselEl, {
    interval: 5000,
    wrap: true,
  })
}

function toggleProductos() {
  const productosAdiciones = document.querySelectorAll(".producto-adicional")
  const btn = document.getElementById("verMasBtn")

  productosAdiciones.forEach((producto) => {
    if (producto.style.display === "none") {
      producto.style.display = "block"
      btn.textContent = "Ver menos productos"
    } else {
      producto.style.display = "none"
      btn.textContent = "Ver más productos"
    }
  })
}

function openZoom(imageSrc, imageAlt) {
  const modal = document.getElementById("zoomModal")
  const zoomImage = document.getElementById("zoomImage")
  const zoomAlt = document.getElementById("zoomAlt")

  zoomImage.src = imageSrc
  zoomAlt.textContent = imageAlt
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeZoom(event) {
  const modal = document.getElementById("zoomModal")

  if (event && event.target !== modal) {
    return
  }

  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeZoom()
  }
})

// Inicializar Scrollspy manualmente (opcional, pero recomendado)
var spyContent = document.body;
var navElement = document.querySelector('#navbarNav');

if (navElement) {
    new bootstrap.ScrollSpy(spyContent, {
        target: '#navbarNav',
        offset: 110 // Ajustá este número según el alto de tu navbar
    });
}


