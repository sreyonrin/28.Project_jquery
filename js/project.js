$(document).ready(function () {
    selectRecipe();
    $('#chooseRecipe').on('change',function () {
        var recipe = $('#chooseRecipe').val();
        getRecipe(recipe);
    })
    $('#minus').on('click', function () {
        decrease();
        var guest = $('#member').val();
        var recipe = $('#chooseRecipe').val();
         updateRecipe(recipe,guest);
    });
    $('#add').on('click', function () {
        increase();
        var guest = $('#member').val();
        var recipe = $('#chooseRecipe').val();
         updateRecipe(recipe,guest);
    });
})
function url() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
function selectRecipe(data) { 
    $.ajax({
        dataType: 'json',
        url: url(),
        success: (data) => chooseRecipe(data.recipes), 
        error: () => console.log("Cannot get data"),
    })
}
var apiData = [];
function chooseRecipe(datas) {
    

    apiData = datas;
    var put = "";
    apiData.forEach(element => {
        put += `
            <option value="${element.id}">${element.name}</option> 
       `;  
    });
    $('#chooseRecipe').append(put);

}


$('#sreyorn').hide();
var nbDefault = 1;
function getRecipe(recipeId) {
    apiData.forEach(element => {
        if (element.id == recipeId) {
            eachStep(element.instructions);
            eachRecipe(element.name,element.iconUrl);
            eachIngredient(element.ingredients);
             $('#member').val(element.nbGuests);
            $('#sreyorn').show();
            guestDefault = $('#member').val();
        }
    })
}
function updateRecipe(recipeId,guest){
    apiData.forEach(element => {
        if (element.id == recipeId) {
            eachRecipe(element.name,element.iconUrl);
            updateIngredient(element.ingredients, guest);
            eachIngredient(element.ingredients);
            $('#member').val(guest);
        }
    })
}
function eachStep(step){
    
    var steps = step.split('<step>');
    var listStep = "";
    for (let i = 1; i < steps.length; i++) {
        listStep += `
        <li class = "list-group-item" style = "border:none">
        <strong class = "text-primary">Step: ${i}</strong>
        <br>
        &nbsp;&nbsp;
        ${steps[i]}
        </li>
     `
    }
    $('#step').html(listStep);
}

// countule
function increase() {
    var member = $('#member').val();
    var rin = parseInt(member) + 1;
    if (rin <= 15) {
        $('#member').val(rin);
    }
}

function decrease() {
    var member = $('#member').val();
    var rin = parseInt(member) - 1;
    if (rin >= 1) {
        $('#member').val(rin);
    }
}

function eachRecipe(name,image){
    var recipes ="";
    recipes += `
        <strong>${name}</strong>
        <img src = "${image}" width = "80">
    `;
    $('#recipes').html(recipes);
}
function eachIngredient(ing) {
    var ingredient = "";
    ing.forEach(element => {
        ingredient += `
        <tr>
            <td><img src = "${element.iconUrl}" width = "40"></td>
            <td>${element.name}</td>
            <td>${element.quantity}</td>
            <td>${element.unit[0]}</td>
        </tr>
      `
    })
    $('#ingredient').html(ingredient);
}
function getMember(){
    
}
var updateIngredient = (ing,) => {
    var ingredient = "";
    ing.forEach(element => {
       
      console.log(add)
       ingredient += `
       <tr>
           <td><img src = "${element.iconUrl}" width = "50"></td>
           <td>${element.name}</td>
           <td>${ add }</td>
           <td>${element.unit[0]}</td>
       </tr>
     `
    })
    $('#ingredient').html(ingredient);
} 



