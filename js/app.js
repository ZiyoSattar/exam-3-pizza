let elForm = document.querySelector(".body__form");
let elResultDivCol = document.querySelector(".body__col-div");
let elResultDivColSub = document.querySelector(".extra__div");
let elList1 = document.querySelector(".list1");
let elList1Content = document.querySelector(".list-div");
let elListContent = document.querySelector(".list-div-2");
let elList3 = document.querySelector(".list-div-3");
let elList4 = document.querySelector(".list-div-4");


/* pizza qalinligi */


let elRadioLabel = document.querySelector(".radio-label1");
let elRadioLabel2 = document.querySelector(".radio-label2");
let elRadioLabel3 = document.querySelector(".radio-label3");

let elRadioDiv = document.querySelector(".form__radio-div");
let elRadio = document.createElement("input");
let elRadio2 = document.createElement("input")
let elRadio3 = document.createElement("input")

elRadio.setAttribute("required", "required")
elRadio2.setAttribute("required", "required")
elRadio3.setAttribute("required", "required")
elRadioLabel.setAttribute("class", "d-block ")
elRadioLabel2.setAttribute("class", "d-block ")
elRadioLabel3.setAttribute("class", "d-block ")
elRadio.setAttribute("class", "form-check-input form__radio-div-radio ms-3");
elRadio2.setAttribute("class", "form-check-input form__radio-div-radio ms-3");
elRadio3.setAttribute("class", "form-check-input form__radio-div-radio ms-3");
elRadio.setAttribute("id", "id1radio");
elRadio2.setAttribute("id", "id2radio");
elRadio3.setAttribute("id", "id3radio");
elRadio.setAttribute("value", "25");
elRadio2.setAttribute("value", "30");
elRadio3.setAttribute("value", "35");
elRadio.setAttribute("type", "radio");
elRadio2.setAttribute("type", "radio");
elRadio3.setAttribute("type", "radio");
elRadio.setAttribute("name", "qalinligi");
elRadio2.setAttribute("name", "qalinligi");
elRadio3.setAttribute("name", "qalinligi");

elRadioLabel.appendChild(elRadio);
elRadioLabel2.appendChild(elRadio2);
elRadioLabel3.appendChild(elRadio3);


/* end */



/* what to add to pizza */


let arr = ["Pomidor", "Kurka goshti", " Zaytun", "Tuzlangan Bodring", "Qoziqorin", "Qazi"];
for (let i = 0; i < arr.length; i++) {

  let elFormCheck = document.createElement("label");
  let elFormInput = document.createElement("input");

  elFormInput.setAttribute("class", "form-check-input me-2 input-check");
  elFormInput.setAttribute("type", "checkbox");
  elFormInput.setAttribute("name", "Pizzani nima solinganligi");
  elFormInput.value = arr[i];
  elFormCheck.textContent = arr[i];
  elList1.appendChild(elFormCheck);
  elFormCheck.prepend(elFormInput);
}
/* end*/


/* extra souces */


let elLabelExtraCheck1 = document.querySelector(".form__check-extra-div-label-1")
let elLabelExtraCheck2 = document.querySelector(".form__check-extra-div-label-2")

let elCheckboxExtra1 = document.createElement("input")
let elCheckboxExtra2 = document.createElement("input")

elCheckboxExtra1.setAttribute("class", " form__check-extra-div-checkbox ms-4 form-check-input");
elCheckboxExtra2.setAttribute("class", " form__check-extra-div-checkbox ms-4 form-check-input");
elCheckboxExtra1.setAttribute("type", "checkbox");
elCheckboxExtra2.setAttribute("type", "checkbox");
elCheckboxExtra1.setAttribute("value", "Achchiq");
elCheckboxExtra2.setAttribute("value", "Sosiskali");
elCheckboxExtra1.setAttribute("id", "extracheckbox1");
elCheckboxExtra2.setAttribute("id", "extracheckbox2");
elCheckboxExtra1.setAttribute("name", "Pizzaga qoshimcha");
elCheckboxExtra2.setAttribute("name", "Pizzaga qoshimcha");

elLabelExtraCheck1.appendChild(elCheckboxExtra1)
elLabelExtraCheck2.appendChild(elCheckboxExtra2)


/* end */



/* pizza selection */


elSelect = document.querySelector(".form__select-div-select");
let elSelectOption1 = document.createElement("option");
elSelect.setAttribute("required", "required")
elSelectOption1.setAttribute("class", "select__option")
elSelectOption1.setAttribute("hidden", "hidden")
elSelectOption1.setAttribute("selected", "selected")
elSelectOption1.textContent = "Non turi"
elSelect.appendChild(elSelectOption1);


/* end*/


///arrays start


let selectArr = ["Yupqa", "Qalin", "O'rta", "Extra qalin"];
for(let i = 0; i < selectArr.length; i++) {
    let elOption = document.createElement("option");
    elOption.textContent= selectArr[i];
    elOption.value = (selectArr[i]);
    elSelect.appendChild(elOption);
}


elSelect.addEventListener("change", function () {
  elList4[0].textContent = elOption.value;    
})

let formRadios = document.querySelectorAll(".form__radio-div-radio");
let newExtraRadioArr = [];
newExtraRadioArr.innerHtml = ""
for (let elK = 0; elK < formRadios.length; elK++) {
  let list3Item = document.createElement("span");
  list3Item.setAttribute("class", " me-3 mb-1  ")

  formRadios[elK].addEventListener("change", function () {

    if (formRadios[elK].checked) {
      newExtraRadioArr.push(formRadios[elK].value)

      for (let j = 0; j < newExtraRadioArr.length; j++) {
        list3Item.textContent = newExtraRadioArr[j];
        elList3.appendChild(list3Item);
      }
    } else {
      elList3.removeChild(list3Item);
    }
  })

}




let formInputes = document.querySelectorAll(".input-check");
let newArr = [];
newArr.innerHtml = ""
for (let el = 0; el < formInputes.length; el++) {
  let elList1Item = document.createElement("span");
  elList1Item.setAttribute("class", "d-inline-block me-3 mb-1 h-0 ")

  formInputes[el].addEventListener("change", function () {

    if (formInputes[el].checked) {
      newArr.push(formInputes[el].value)

      for (let i = 0; i < newArr.length; i++) {
        elList1Item.textContent = newArr[i];
        elList1Content.appendChild(elList1Item)
      }
    } else {
      elList1Content.removeChild(elList1Item)
    }
  })

}



let elFormExtra = document.querySelectorAll(".form__check-extra-div-checkbox");
let newExtraArr = [];
newExtraArr.innerHtml = ""
for (let elI = 0; elI < elFormExtra.length; elI++) {
  let list2Item = document.createElement("span");
  list2Item.setAttribute("class", "d-inline-block me-3 mb-1  ")

  elFormExtra[elI].addEventListener("change", function () {

    if (elFormExtra[elI].checked) {
      newExtraArr.push(elFormExtra[elI].value)

      for (let k = 0; k < newExtraArr.length; k++) {
        list2Item.textContent = newExtraArr[k];
        elListContent.appendChild(list2Item)
      }
    } else {
      elListContent.removeChild(list2Item)
    }
  })

}
//arrays end