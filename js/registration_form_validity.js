function attachEventListener(elementId, event, handler) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener(event, handler);
  }
}

// RegisterHandlers and eventHandlers - when to pass the validation functions
function registerHandlers() {
  const eventHandlers = [
    { id: "first_name", event: "input", handler: fn_Validate },
    { id: "last_name", event: "input", handler: ln_Validate },
    { id: "email", event: "input", handler: EmailValidate },
    { id: "password", event: "input", handler: fPass_V },
    { id: "confirm_password", event: "input", handler: PassValidate },
    // { id: "password", event: "onkeypress", handler: PassValidate},
  ];

  // Attach event listeners to elements
  eventHandlers.forEach(({ id, event, handler }) => {
    attachEventListener(id, event, handler);
  });
}

// Validates the first name input
function fn_Validate() {
  const fn_Input = document.getElementById("first_name");
  const first_name = fn_Input.value;
  const fn_Err = document.getElementById("fn_Err");

  // Check if first name is not empty and within length limit
  if (first_name === "" || first_name.length > 50) {
    if (fn_Err) {
      fn_Err.classList.remove("hide");
      fn_Err.classList.add("show");
      fn_Err.style.color = "darkred";
    }
    fn_Input.style.borderRadius = "10px";
    fn_Input.style.borderColor = "orangered";
    return false;
  } else {
    if (fn_Err) {
      fn_Err.classList.add("hide");
      fn_Err.classList.remove("show");
    }
    fn_Input.style.borderRadius = "10px";
    fn_Input.style.borderColor = "lawngreen";
    return true;
  }
}

// Validates the last name input
function ln_Validate() {
  const ln_Input = document.getElementById("last_name");
  const last_name = ln_Input.value;
  const ln_Err = document.getElementById("ln_Err");

  // Check if last name is not empty and within length limit
  if (last_name === "" || last_name.length > 50) {
    if (ln_Err) {
      ln_Err.classList.remove("hide");
      ln_Err.classList.add("show");
      ln_Err.style.color = "darkred";
    }
    ln_Input.style.borderRadius = "10px";
    ln_Input.style.borderColor = "orangered";
    return false;
  } else {
    if (ln_Err) {
      ln_Err.classList.add("hide");
      ln_Err.classList.remove("show");
    }
    ln_Input.style.borderRadius = "10px";
    ln_Input.style.borderColor = "lawngreen";
    return true;
  }
}

// Validates the email input
function EmailValidate() {
  const email_Input = document.getElementById("email");
  const email = email_Input.value;
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const email_Err = document.getElementById("email_Err");

  // Validate the email format
  if (!emailPattern.test(email)) {
    if (email_Err) {
      email_Err.classList.remove("hide");
      email_Err.classList.add("show");
      email_Err.style.color = "darkred";
    }
    email_Input.style.borderRadius = "10px";
    email_Input.style.borderInlineWidth = "5px";
    email_Input.style.borderColor = "orangered";
    return false;
  } else {
    if (email_Err) {
      email_Err.classList.add("hide");
      email_Err.classList.remove("show");
    }
    email_Input.style.borderRadius = "10px";
    email_Input.style.borderInlineWidth = "1px";
    email_Input.style.borderColor = "lawngreen";
    return true;
  }
}

// Validates the password input
function fPass_V() {
  const pswd_input = document.getElementById("password");
  const pswd = pswd_input.value;
  const pswd_pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const cap_pattern = /(?=.*[A-Z])/;
  const small_pattern = /(?=.*[a-z])/;
  const num_pattern = /(?=.*\d)/;
  const spec_pattern = /[@$!%*?&]/;
  const pswdErr = document.getElementById("passErr");
  const cap_Err = document.getElementById("cap_Err");
  const small_Err = document.getElementById("small_Err");
  const num_Err = document.getElementById("num_Err");
  const spec_Err = document.getElementById("spec_Err");
  const min_Err = document.getElementById("min_Err");

  // Check if password meets complexity requirements
  if (!pswd_pattern.test(pswd)) {
    if (pswdErr) {
      pswdErr.classList.remove("hide");
      pswdErr.classList.add("show");
      pswdErr.style.color = "darkred";
    }
    pswd_input.style.borderRadius = "10px";
    pswd_input.style.borderInlineWidth = "5px";
    pswd_input.style.borderColor = "orangered";

    // Check or uppercase letters
    if (!cap_pattern.test(pswd)) {
      if (cap_Err) {
        cap_Err.classList.remove("hide");
        cap_Err.classList.add("show");
        cap_Err.style.color = "darkred";
      }
    }
    if (cap_pattern.test(pswd)) {
      if (cap_Err) {
        cap_Err.classList.add("hide");
        cap_Err.classList.remove("show");
      }
    }

    // Check for lowercase letters
    if (!small_pattern.test(pswd)) {
      if (small_Err) {
        small_Err.classList.remove("hide");
        small_Err.classList.add("show");
        small_Err.style.color = "darkred";
      }
    }
    if (small_pattern.test(pswd)) {
      if (small_Err) {
        small_Err.classList.add("hide");
        small_Err.classList.remove("show");
      }
    }

    // Check for numbers
    if (!num_pattern.test(pswd)) {
      if (num_Err) {
        num_Err.classList.remove("hide");
        num_Err.classList.add("show");
        num_Err.style.color = "darkred";
      }
    }
    if (num_pattern.test(pswd)) {
      if (num_Err) {
        num_Err.classList.add("hide");
        num_Err.classList.remove("show");
      }
    }

    // Check for special characters
    if (!spec_pattern.test(pswd)) {
      if (spec_Err) {
        spec_Err.classList.remove("hide");
        spec_Err.classList.add("show");
        spec_Err.style.color = "darkred";
      }
    }
    if (spec_pattern.test(pswd)) {
      if (spec_Err) {
        spec_Err.classList.add("hide");
        spec_Err.classList.remove("show");
      }
    }

    // Check for miniumum length - 8
    if (pswd.length < 8) {
      if (min_Err) {
        min_Err.classList.remove("hide");
        min_Err.classList.add("show");
        min_Err.style.color = "darkred";
      }
    }
    if (pswd.length >= 10) {
      if (min_Err) {
        min_Err.classList.add("hide");
        min_Err.classList.remove("show");
      }
    }
  } else {
    // Checking if all requirements are met for the Password
    if (pswdErr) {
      pswdErr.classList.add("hide");
      pswdErr.classList.remove("show");
    }
    pswd_input.style.borderRadius = "10px";
    pswd_input.style.borderInlineWidth = "1px";
    pswd_input.style.borderColor = "lawngreen";

    // Hiding individual error messages if requirements are met
    if (cap_pattern.test(pswd)) {
      if (cap_Err) {
        cap_Err.classList.add("hide");
        cap_Err.classList.remove("show");
      }
    }
    if (small_pattern.test(pswd)) {
      if (small_Err) {
        small_Err.classList.add("hide");
        small_Err.classList.remove("show");
      }
    }
    if (num_pattern.test(pswd)) {
      if (num_Err) {
        num_Err.classList.add("hide");
        num_Err.classList.remove("show");
      }
    }
    if (spec_pattern.test(pswd)) {
      if (spec_Err) {
        spec_Err.classList.add("hide");
        spec_Err.classList.remove("show");
      }
    }
    if (pswd.length >= 10) {
      if (min_Err) {
        min_Err.classList.add("hide");
        min_Err.classList.remove("show");
      }
    }
  }
}

// Validates that the repeated password matches the original password
function PassValidate() {
  const pswd_input = document.getElementById("password");
  const r_pswd_input = document.getElementById("confirm_password");
  const pswd = pswd_input.value;
  const r_pswd = r_pswd_input.value;
  const pswdErr = document.getElementById("passErr");
  const r_Error = document.getElementById("r_passErr");

  // Check if repeated password matches the original
  if (r_pswd !== pswd || (r_pswd !== "" && pswd === "")) {
    if (r_Error) {
      r_Error.classList.remove("hide");
      r_Error.classList.add("show");
      r_Error.style.color = "darkred";
    }
    r_pswd_input.style.borderRadius = "10px";
    r_pswd_input.style.borderInlineWidth = "5px";
    r_pswd_input.style.borderColor = "orangered";
    return false;
  } else {
    if (r_Error) {
      r_Error.classList.add("hide");
      r_Error.classList.remove("show");
    }
    r_pswd_input.style.borderRadius = "10px";
    r_pswd_input.style.borderInlineWidth = "1px";
    r_pswd_input.style.borderColor = "lawngreen";
    if (pswdErr) {
      pswdErr.classList.add("hide");
      pswdErr.classList.remove("show");
    }
    pswd_input.style.borderRadius = "10px";
    pswd_input.style.borderColor = "lawngreen";
    return true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration_form");
  const messageDiv = document.getElementById("message");
  const loadingIndicator = document.getElementById("loading_indicator");
  const errorMessage = document.getElementById("error_message");

  form.addEventListener("submit", (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Show loading indicator
    loadingIndicator.style.display = "block";

    // if (!messageDiv || !loadingIndicator) {
    //     errorMessage.style.display = "none";
    // }

    // Perform validations
    const isFirstNameValid = fn_Validate();
    const isLastNameValid = ln_Validate();
    const isEmailValid = EmailValidate();
    const isPasswordValid = fPass_V();
    const isPasswordMatch = PassValidate();

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPasswordMatch
    ) {
      // Simulate successful form submission (replace with actual API call if needed)
      setTimeout(() => {
        loadingIndicator.style.display = "none";
        messageDiv.textContent = "Registration successful!";
        messageDiv.style.color = "lawngreen";
        form.reset(); // Clear form fields
      }, 1000);
    } else {
      loadingIndicator.style.display = "none";
      messageDiv.textContent = "Error Detected!";
      messageDiv.style.color = "orangered";
    }
  });
});

// Call registerHandlers when the window loads
window.onload = registerHandlers;