// This code select ID
$(document).ready(function () {
    selectRecipe();
    $('#chooseRecipe').on('change',function () {
        var recipe = $('#chooseRecipe').val();
        getRecipe(recipe);
    });
// This code click button add
    $('#add').on('click', function () {
        var add = $('#member').val();
        up(add); 
    });
// This code click button minus
    $('#minus').on('click', function () {
        var minus = $('#member').val();
        donw(minus); 
    });

});
// This code 
function up(adds){
    var getUp = parseInt(adds) + 1;
    if(getUp <= 15){
        $('#member').val(getUp);
        guests($("#member").val());
    }
}

function donw(minus){
    var getDonw = parseInt(minus) - 1;
    if(getDonw >= 1){
        $('#member').val(getDonw);
        guests($("#member").val());
    }
}
// this sum the number of the person
function guests(guestNew) {
    var result;
    var newQuanlity;
    var outPut = "";
    loopQuan.ingredients.forEach(element => {
        var {quantity, iconUrl, name, unit} = element;
        result = quantity / getOldGuest;
        newQuanlity = result * guestNew;
        outPut += `
        <tr>
        <td><img src = "${iconUrl}" width = "70"></td>
        <td>${newQuanlity}</td>
        <td>${unit[0]}</td>
        <td>${name}</td>
    </tr>
    `;
    });
    
     $("#ingredient").html(outPut);
     
}

//get URL form api
function url() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
// get data form any api
function selectRecipe(data) { 
    $.ajax({
        dataType: 'json',
        url: url(),
        success: (data) => chooseRecipe(data.recipes), 
        error: () => console.log("Cannot get data"),
    })
}
// select option
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
    $('#step').hide();
    
    
}
$('#rulers').hide();
$('#sreyorn').hide();
$('#Ingredients').hide();


var nbDefault = 1;
function getRecipe(recipeId) {
    apiData.forEach(element => {
        if (element.id == recipeId) {
            loopQuan = element;
            getOldGuest = element.nbGuests;
            eachStep(element.instructions);
            eachRecipe(element.name,element.iconUrl);
            eachIngredient(element.ingredients);
            $('#member').val(element.nbGuests);
            guestDefault = $('#member').val();
        }
    })
    $('#sreyorn').show();
    $('#rulers').show();
}
// code form step
function eachStep(step){
    var steps = step.split('<step>');
    var listStep = "";
          
          listStep +=`
          <h3 class="text-center">Inctruction</h3>
          `;
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
  
    $('#Ingredients').show();
    $('#step').show();
}

// code form name and image
function eachRecipe(name,image){
    var recipes ="";
    recipes += `
    <div class="row" style="margin-left:32%; width:100%; higth:150%"> 
    <div class="card-body" style=" "> 
    <div class="col-4"><h4 class ="text-center text-white"><strong>${name}</strong></h4></div>
    <div class="col-4"><img src = "${image}" height ="100" class="img-thumbnail"></div>
    <div class="col-4"> </div> 
    </div>   
    </div>   
    `;   
    $('#recipes').html(recipes); 
}


function eachIngredient(ing) {
    
    var ingredient = "";
    ingredient+=   `
    <h3 class="text-center">Ingredients</h3>
    `;
    ing.forEach(element => {
        ingredient += `  
        <tr>
            <td><img src = "${element.iconUrl}" width = "70"></td>
            <td>${element.quantity}</td>
            <td>${element.unit[0]}</td>
            <td>${element.name}</td>        
        </tr>
      `;
     
    })
   
    $('#ingredient').html(ingredient);
    
}
function getMember(){   
}
var updateIngredient = (ing,) => {
    var ingredient = "";
    ing.forEach(element => {
       ingredient += `
       <tr>
           <td><img src = "${element.iconUrl}" width = "70"></td>
           <td>${element.name}"</td>
           <td>${ add }</td>
           <td>${element.unit[0]}</td>
       </tr>
     `
    })
    $('#ingredient').html(ingredient);
} 



