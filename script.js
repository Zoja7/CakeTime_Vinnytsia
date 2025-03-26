// Product data for modal
const products = {
  "classic-cake": {
    title: "Класичний торт",
    description:
      "Традиційний торт з ніжною бісквітною основою та кремом. Ідеальний для будь-якого випадку.",
    price: "від 800 грн",
    layers: "3 шари",
    weight: "1.5 кг",
  },
  "fruit-cake": {
    title: "Фруктовий торт",
    description:
      "Свіжий торт з сезонними фруктами та легким кремом. Натуральний смак та аромат.",
    price: "від 1000 грн",
    layers: "4 шари",
    weight: "2 кг",
  },
  "caramel-cake": {
    title: "Карамельний торт",
    description:
      "Солодкий торт з карамельним кремом та хрумкою карамеллю. Справжній десертний шедевр.",
    price: "від 1200 грн",
    layers: "3 шари",
    weight: "1.8 кг",
  },
  "branded-cake-for-cafes": {
    title: "Брендовий торт для кафе",
    description:
      "Ексклюзивний торт з логотипом вашого закладу. Ідеальний для кафе та ресторанів.",
    price: "від 1500 грн",
    layers: "4 шари",
    weight: "2.5 кг",
  },
  "holiday-baking": {
    title: "Святкова випічка",
    description:
      "Спеціальна випічка для святкових заходів. Включає різноманітні десерти та тістечка.",
    price: "від 2000 грн",
    layers: "3-4 шари",
    weight: "3 кг",
  },
  "craft-cakes": {
    title: "Крафтові тістечка",
    description:
      "Авторські тістечка ручної роботи. Унікальний дизайн та неповторний смак.",
    price: "від 500 грн",
    layers: "2-3 шари",
    weight: "1 кг",
  },
};

// Modal functionality
const modal = document.getElementById("productModal");
const modalBody = modal.querySelector(".modal-body");
const closeModal = document.querySelector(".close-modal");

// Add click event to all detail buttons
document.querySelectorAll(".details-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    const image = card.querySelector("img");
    const productId = image.src.split("/").pop().split(".")[0];
    const product = products[productId];

    if (product) {
      modalBody.innerHTML = `
                <h2>${product.title}</h2>
                <img src="${image.src}" alt="${product.title}" style="width: 100%; max-height: 300px; object-fit: cover; margin: 1rem 0;">
                <p>${product.description}</p>
                <div style="margin-top: 1rem;">
                    <p><strong>Ціна:</strong> ${product.price}</p>
                    <p><strong>Шари:</strong> ${product.layers}</p>
                    <p><strong>Вага:</strong> ${product.weight}</p>
                </div>
            `;
      modal.style.display = "block";
    }
  });
});

// Close modal when clicking the close button
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Form validation
const form = document.getElementById("cakeOrderForm");
const phoneInput = document.getElementById("phone");
const dateInput = document.getElementById("date");

// Phone number validation
phoneInput.addEventListener("input", (e) => {
  const phone = e.target.value.replace(/\D/g, "");
  if (phone.length > 0) {
    e.target.value = phone.replace(
      /(\d{2})(\d{3})(\d{2})(\d{2})/,
      "+380 $1 $2 $3 $4"
    );
  }
});

// Date validation (minimum date is today)
const today = new Date().toISOString().split("T")[0];
dateInput.min = today;

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Basic validation
  const name = document.getElementById("name").value.trim();
  const phone = phoneInput.value.trim();
  const date = dateInput.value;

  if (!name || !phone || !date) {
    alert("Будь ласка, заповніть всі поля");
    return;
  }

  // Phone format validation
  const phoneRegex = /^\+380 \d{2} \d{3} \d{2} \d{2}$/;
  if (!phoneRegex.test(phone)) {
    alert("Будь ласка, введіть коректний номер телефону");
    return;
  }

  // Here you would typically send the form data to a server
  alert("Дякуємо за замовлення! Ми зв'яжемося з вами найближчим часом.");
  form.reset();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
