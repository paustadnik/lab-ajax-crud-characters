const charactersAPI = new APIHandler('http://localhost:8000');
const characterId = document.querySelector('.characterId')
const delCharacterId = document.querySelector('.delCharacterId')
const newName = document.querySelector('.newName')
const newOccupation = document.querySelector('.newOccupation')
const newWeapon = document.querySelector('.newWeapon')
const newCartoon = document.querySelector('.newCartoon')

const editCharId = document.querySelector('.editCharId')
const editName = document.querySelector('.editName')
const editOccupation = document.querySelector('.editOccupation')
const editWeapon = document.querySelector('.editWeapon')
const editCartoon = document.querySelector('.editCheckbox')

let checkedValue = false


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then((result) => console.log(result.data))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(characterId.value).then((result) => console.log(result.data))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(delCharacterId.value).then((result) => console.log(result))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    if (editCartoon.checked) {
      checkedValue = true
    }
    charactersAPI.updateOneRegister(editCharId.value, {
      name: editName.value, 
      occupation: editOccupation.value, 
      weapon: editWeapon.value, 
      cartoon: checkedValue, 
      id: editCharId.value
    })
    .then((result) => console.log(result.data))
    });
  

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    if (newCartoon.checked) {
      checkedValue = true
    }
    charactersAPI.createOneRegister({
      name: newName.value, 
      occupation: newOccupation.value, 
      weapon: newWeapon.value, 
      cartoon: checkedValue
    })
      .then((result) => console.log(result.data))
  });
});
