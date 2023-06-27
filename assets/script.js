function calculate() {
  const weight = parseFloat(document.getElementById("weight").value);
  const weightUnit = document.querySelector(
    'input[name="weightUnit"]:checked'
  ).value;
  const length = parseFloat(document.getElementById("length").value);
  const lengthUnit = document.querySelector(
    'input[name="lengthUnit"]:checked'
  ).value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const resultWarn = document.getElementById("result-warn");
  const resultDiv = document.getElementById("result");
  const resultDiv2 = document.getElementById("result2");

  if (
    weight === "" ||
    length === "" ||
    isNaN(weight) ||
    isNaN(length) ||
    !gender
  ) {
    resultDiv.innerHTML = "";
    resultDiv2.innerHTML = "";
    resultWarn.innerText = "Please fill in all fields! - !يرجى ملء جميع الحقول";
    return;
  }

  let weightInKg = weight;
  if (weightUnit === "lbs") {
    weightInKg /= 2.205;
  }

  let lengthInCm = length;
  if (lengthUnit === "ft") {
    lengthInCm *= 30.48;
  }

  let idealWeight =
    gender === "male"
      ? lengthInCm - 100 - (lengthInCm - 150) / 4
      : lengthInCm - 100 - (lengthInCm - 150) / 2.5;

  console.log(idealWeight);

  resultWarn.innerText = "";

  resultDiv.innerHTML = idealWeight.toFixed(2) + "Kg";
  resultDiv2.innerHTML = `( ${(2.204 * idealWeight).toFixed(3)} lbs)`;

  // Show appropriate image
  const img1 = document.getElementById(gender === "male" ? "img1-1" : "img1-2");
  const img2 = document.getElementById(gender === "male" ? "img2-1" : "img2-2");
  const img3 = document.getElementById(gender === "male" ? "img3-1" : "img3-2");

  document.getElementById("img1-1").style.display = "none";
  document.getElementById("img1-2").style.display = "none";
  document.getElementById("img2-1").style.display = "none";
  document.getElementById("img2-2").style.display = "none";
  document.getElementById("img3-1").style.display = "none";
  document.getElementById("img3-2").style.display = "none";

  if (weightInKg < idealWeight) {
    if (gender === "male") {
      img1.src = "images/img1-1.png"; // Change the source to the appropriate male image
    } else {
      img1.src = "images/img1-2.png"; // Change the source to the appropriate female image
    }
    img1.style.display = "block";
  } else if (weightInKg === idealWeight || weightInKg <= idealWeight + 20) {
    if (gender === "male") {
      img2.src = "images/img2-1.png"; // Change the source to the appropriate male image
    } else {
      img2.src = "images/img2-2.png"; // Change the source to the appropriate female image
    }
    img2.style.display = "block";
  } else {
    if (gender === "male") {
      img3.src = "images/img3-1.png"; // Change the source to the appropriate male image
    } else {
      img3.src = "images/img3-2.png"; // Change the source to the appropriate female image
    }
    img3.style.display = "block";
  }
}

function changeLan(language) {
  if (language === "arabic") {
    document.getElementById("body").style.direction = "ltr";

    // Translate the content to Arabic
    document.getElementById("bigTitle").innerHTML = "حساب الوزن المثالي";
    document.getElementById("weightLabel").innerText = ":وزنك";
    document.getElementById("massW").innerText = "وحدة القياس";
    document.getElementById("lengthLabel").innerText = ":طولك";
    document.getElementById("massL").innerText = "وحدة القياس";
    document.getElementById("weightUnitLbs").innerText = "رطل";
    document.getElementById("weightUnitKg").innerText = "كجم";
    document.getElementById("lengthUnitFt").innerText = "قدم";
    document.getElementById("lengthUnitCm").innerText = "سم";
    document.getElementById("genre").innerText = ":الجنس";
    document.getElementById("maleLabel").innerText = "ذكر";
    document.getElementById("femaleLabel").innerText = "أنثى";
    document.getElementById("calculateBtn").innerText = "حساب";
    document.getElementById("resultText").innerText = "وزنك المثالي";
    document.getElementById("note").innerText =
      "ملاحظة! بغض النظر عن شكلك، أنت إنسان تستحق الاحترام والحب وجميع الأشياء الجميلة في العالم... خاصة إذا كنت مسلمًا ❤";
  } else {
    document.getElementById("body").style.direction = "ltr";

    // Translate the content back to English
    document.getElementById("bigTitle").innerHTML =
      "The Perfect Weight Calculator";
    document.getElementById("weightLabel").innerText = "Weight:";
    document.getElementById("massW").innerText = "Unit of weight:";
    document.getElementById("lengthLabel").innerText = "Height:";
    document.getElementById("massL").innerText = "Unit of lenght:";
    document.getElementById("weightUnitLbs").innerText = "lbs";
    document.getElementById("weightUnitKg").innerText = "kg";
    document.getElementById("lengthUnitFt").innerText = "ft";
    document.getElementById("lengthUnitCm").innerText = "cm";
    document.getElementById("genre").innerText = "Gender:";
    document.getElementById("maleLabel").innerText = "Male";
    document.getElementById("femaleLabel").innerText = "Female";
    document.getElementById("calculateBtn").innerText = "Calculate";
    document.getElementById("resultText").innerText = "Your Perfect Weight:";
    document.getElementById("note").innerText =
      "Perfect Weight is a formula of Lorntez But No matter how you look, you are a human being, you deserve RESPECT, LOVE and All other beautiful things in the world... espacially if you are a Muslim ❤";
  }
}

const signs = document.getElementById("bigTitle");
const randomIn = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const mixupInterval = (el) => {
  const ms = randomIn(2000, 4000);
  el.style.setProperty("--interval", `${ms}ms`);
};

signs.forEach((el) => {
  mixupInterval(el);
  el.addEventListener("webkitAnimationIteration", () => {
    mixupInterval(el);
  });
});
