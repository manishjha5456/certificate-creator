document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name-input");
  const generateBtn = document.getElementById("generate-btn");
  const downloadBtn = document.getElementById("download-btn");
  const resetBtn = document.getElementById("reset-btn");
  const certificateName = document.getElementById("certificate-name");
  const certificate = document.getElementById("certificate");

  // Generate certificate with entered name
  generateBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    if (name) {
      certificateName.textContent = name;
    } else {
      alert("Please enter a name for the certificate");
      nameInput.focus();
    }
  });

  // Download as PDF functionality
  downloadBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    if (!name) {
      alert("Please enter a name and generate the certificate first");
      nameInput.focus();
      return;
    }
    // Configure PDF options
    const options = {
      margin: 2,
      filename: `Certificate_${name.replace(/\s+/g, "_")}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a3", orientation: "portrait" },
    };

    // Generate and download PDF
    html2pdf().set(options).from(certificate).save();
  });

  // Reset functionality
  resetBtn.addEventListener("click", function () {
    nameInput.value = "";
    certificateName.textContent = "Participant Name";
    nameInput.focus();
  });

  // Allow Enter key to generate certificate
  nameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      generateBtn.click();
    }
  });
  // Focus on input when page loads
  nameInput.focus();
});
