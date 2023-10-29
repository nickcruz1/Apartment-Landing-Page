// Call Intro.js Library (Interactive Walkthrough)
function startWalkthrough() {
  introJs().start();
}

// Available Units Section

// Functions for the "Yes" Buttons Modals
checkout = () => {
  console.log("You've successfully purchased this unit");
};

// Functions for the "No" Buttons. Modals and close buttons
unit1 = () => {
  let unit1btn = document.querySelector(".unit1btn");
  alert("This unit has been reserved. Please contact our office number at 123-456-7890 for more details on how to submit your rental application")

  unit1btn.innerHTML = "RESERVED"
  unit1btn.style.backgroundColor = "red";
  unit1btn.style.Color = "white";
};

unit2 = () => {
  let unit2btn = document.querySelector(".unit2btn");
  alert("This unit has been reserved. Please contact our office number at 123-456-7890 for more details on how to submit your rental application")

  unit2btn.innerHTML = "RESERVED"
  unit2btn.style.backgroundColor = "red";
  unit2btn.style.Color = "white";
};

unit3 = () => {
  let unit3btn = document.querySelector(".unit3btn");
  alert("This unit has been reserved. Please contact our office number at 123-456-7890 for more details on how to submit your rental application")

  unit3btn.innerHTML = "RESERVED"
  unit3btn.style.backgroundColor = "red";
  unit3btn.style.Color = "white";
};

closeUnit3 = () => {
  let unit3 = document.querySelector(".unit3Modal");

  unit3.style.display = "none";
};


// Form Validation

var forms = document.querySelectorAll(".needs-validation");
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});

// Chart Section //

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [{
      label: "Price Over Time",
      data: [1080, 1220, 1170, 1140, 1050, 920],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(75, 192, 192, 1)"
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [{
      label: "Price Over Time",
      data: [980, 1040, 1140, 1270, 1380, 1520],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 99, 132, 1)"
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});