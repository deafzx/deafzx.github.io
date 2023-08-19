import showDates from "./show-dates";
import getRecipies from "./fetch-api";
import handleAddMeal from "./add-meal";
import deleteBtnClicked from "./delete-meal";
import ValidateForm from "./form-validation";
const subFolderContent = document.getElementById("sub-folder-content");

// Fetch the content from the sub-folder's index.html
fetch("cal.calc/index.html")
  .then(response => response.text())
  .then(html => {
    // Inject the HTML content into the placeholder
    subFolderContent.innerHTML = html;
  })
  .catch(error => {
    console.error("Error fetching sub-folder content:", error);
  });


showDates();
getRecipies();
handleAddMeal();
deleteBtnClicked();


const emailForm = document.querySelector(".letsPlan__form");
const messages = {
  valueMissing: "Oh noes, this field cannot be empty!",
  typeMismatch: "It doesn't look like email address...",
  patternMismatch: "It doesn't look like email address...",
  check: "",
};

new ValidateForm(emailForm, ".validate", ".form__errorMsg", messages);
