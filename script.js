const modalBtn = document.getElementById("modal-ac");
const modal = document.querySelector(".modal");
const modalKapat = document.getElementById("modal-kapat");
const form = document.querySelector('form');
const liste = document.querySelector("#liste");

modalBtn.addEventListener("click", () =>{
    modal.style.display="flex";
});

modalKapat.addEventListener("click", () =>{
    modal.style.display="none";
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let urun = document.getElementById("urun").value;
  let marka = document.getElementById("marka").value;
  let adet = document.getElementById("adet").value;
  let tur = document.getElementById("tur").value;
  let durum = document.getElementById("durum").value;
  let stok = document.getElementById("stok").value;
  
  if (!urun || !marka || !adet || !tur || !durum || !stok) {
      alert("Bütün alanları gerekli şekilde doldurun!")
      return;
  }

  let newRow = document.createElement("tr");

  let newUrun = document.createElement("td");
  newUrun.innerHTML = urun;
  let newMarka = document.createElement("td");
  newMarka.innerHTML = marka;
  let newAdet = document.createElement("td");
  newAdet.innerHTML = adet;
  let newTur = document.createElement("td");
  newTur.innerHTML = tur;
  let newDurum = document.createElement("td");
  newDurum.innerHTML = durum;
  let newStok = document.createElement("td");
  newStok.innerHTML = stok;
  let newOptions = document.createElement("td");
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("btn-delete");
  newOptions.appendChild(deleteBtn);

  let updateBtn = document.createElement("button");
  updateBtn.innerHTML = "Update";
  updateBtn.classList.add("btn-update");
  newOptions.appendChild(updateBtn);

 

updateBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  let row = event.target.parentElement.parentElement;
  let cells = row.querySelectorAll("td");
  // fill the form inputs with the current values
  document.getElementById("urun").value = cells[0].innerHTML;
  document.getElementById("marka").value = cells[1].innerHTML;
  document.getElementById("adet").value = cells[2].innerHTML;
  document.getElementById("tur").value = cells[3].innerHTML;
  document.getElementById("durum").value = cells[4].innerHTML;
  document.getElementById("stok").value = cells[5].innerHTML;
});


  newRow.appendChild(newUrun);
  newRow.appendChild(newMarka);
  newRow.appendChild(newAdet);
  newRow.appendChild(newTur);
  newRow.appendChild(newDurum);
  newRow.appendChild(newStok);
  newRow.appendChild(newOptions);

  liste.appendChild(newRow);

  modal.style.display = "none";

  form.reset();
});

liste.addEventListener('click', (event) => {
  if (event.target.classList.contains("btn-delete")) {
      let row = event.target.parentElement.parentElement;
      row.remove();
  }
});





















