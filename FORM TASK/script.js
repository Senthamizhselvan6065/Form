let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data_all = document.querySelector(".user_data_all table");
  let row_data = document.createElement("tr");

  let FN = document.createElement("td");
  let FN_data = document.querySelector('[placeholder="First Name"]');
  FN.innerText = FN_data.value;
  row_data.append(FN);
  FN_data.value = "";

  let LN = document.createElement("td");
  let LN_data = document.querySelector('[placeholder="Last Name"]');
  LN.innerText = LN_data.value;
  row_data.append(LN);
  LN_data.value = "";

  let GN = document.createElement("td");
  let GN_data = document.querySelector("#gender");
  GN.innerText = GN_data.value;
  row_data.append(GN);
  GN_data.value = "None";

  let FD = document.createElement("td");
  let food_data = document.querySelector("#food");
  FD.innerText = food_data.value;
  row_data.append(FD);
  food_data.value = "None";

  let CD = document.createElement("td");
  let country_data = document.querySelector('[placeholder="Country"]');
  CD.innerText = country_data.value;
  row_data.append(CD);
  country_data.value = "";

  let SD = document.createElement("td");
  let state_data = document.querySelector('[placeholder="State"]');
  SD.innerText = state_data.value;
  row_data.append(SD);
  state_data.value = "";

  let PD = document.createElement("td");
  let pin_data = document.querySelector('[placeholder="Pincode"]');
  PD.innerText = pin_data.value;
  row_data.append(PD);
  pin_data.value = "";

  let AD = document.createElement("td");
  let address_data = document.querySelector('[placeholder="Address"]');
  AD.innerText = address_data.value;
  row_data.append(AD);
  address_data.value = "";

  data_all.append(row_data);
});