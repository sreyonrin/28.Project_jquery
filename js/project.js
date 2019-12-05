$(document).ready( () => {
    $('#recipe').on('change', () => {
        var fruit = $('#recipe').val();
        choose(fruit);
    });
});

var choose = (data) => {
    switch(parseInt(data)) {
        case 1:
                getApple();
            break;
        case 2: 
        getBanana();
            break;
        case 3: 
        getCoconut();
            break;

    }
}

//get apple

var getApple = () => {
    var Apple = "I love Apple";
    printOut(Apple);
}
//get banana
var getBanana = () => {
    var Banana = "I love Banana";
    printOut(Banana)
}
// get Coconut
var getCoconut = () => {
    var Coconut = "I love Coconut";
    printOut(Coconut);
}

// print out to HTML 
var printOut = (out) => {
    $('#done').html(out);
}

$(document).ready(function () {
    requesAPI();
    });
    //requesAPI
    var requesAPI = () => {
    $.ajax({
    dataType: 'json',
    url: getUrl(),
    success: (data) => getRecipe(data),
    error: () => getError(),
    
    });
    }
    //getUrl
    var getUrl = () => {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
    }
    //getData
    var getRecipe = (myData) => {
    // console.log(myData);
    myData.recipes.forEach(item => {
    //recipe : item.name
    //get ingredient
    getIngredient(item.ingredients);
    });
    }
    //getError
    var getError = (myError) => {
    console.log(myError);
    
    }
    //get ingredient
    var getIngredient = (ing) => {
    ing.forEach(item => {
    computeHTML(item);
    });
    }
    //compute html
    var computeHTML =(element)=>{
    var result = "";
    result += `
    <tr>
    <td><img src ="${element.iconUrl}" width = "100"</td>
    <td>${element.name}</td>
    <td>${element.quantity}</td>
    <td>${element.unit}</td>
    </tr>
    
    `;
    prinOut(result);
    }
    //print out to HTML
    var prinOut =(out) =>{
    $('#ingrediant').append(out);
    }
    