document.getElementById("nomenclatureForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    
    document.getElementById("nomenclatureForm").style.display = "none";
    document.getElementById("successMessage").classList.remove("hidden");
  });
  