export const dropdown = () => {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  const toggleDropdown = (menu) => {
    menu.classList.toggle("visible");
  };

  dropdownToggle.addEventListener("click", () => {
    toggleDropdown(dropdownMenu);
  });
};
