jQuery('#strConcatBtn').on("click", evaluate);
    function evaluate(str1, str2) {
        jQuery.ajax({
            url: `FirstExercise/StringsConcat?str1=${jQuery('#input1').val()}&str2=${jQuery('#input2').val()}`,
            type: "GET",
            success: function (response) {
                jQuery("#concatResult").text(response);
            },
            error: function () {
                alert("error");
            }
        });
}

jQuery("#sumBtn").on("click", evaluateSum);
function evaluateSum(a, b) {
    jQuery.ajax({
        url: `FirstExercise/Sum?a=${jQuery('#input3').val()}&b=${jQuery('#input4').val()}`,
        type: "GET",
        success: function (response) {
            jQuery("#sumResult").html(response);
        },
        error: function () {
            alert("error");
        }
    });
}

jQuery("#floatBtn").on("click", evaluateFloatSum);
function evaluateFloatSum(a, b) {
    jQuery.ajax({
        url: `FirstExercise/Sum?a=${jQuery('#input5').val()}&b=${jQuery('#input6').val()}`,
        type: "GET",
        success: function (response) {
            jQuery("#floatResult").html(response);
        },
        error: function () {
            alert("error");
        }
    });
}

jQuery("#doubleBtn").on("click", evaluateDSum);
function evaluateDSum(a, b) {
    jQuery.ajax({
        url: `FirstExercise/Sum?a=${jQuery('#input7').val()}&b=${jQuery('#input8').val()}`,
        type: "GET",
        success: function (response) {
            jQuery("#doubleResult").html(response);
        },
        error: function () {
            alert("error");
        }
    });
}

jQuery("#toListBtn").on("click", ArrayToList);

function ArrayToList() {
    let inputValue = jQuery('#input9').val().split(",");
    jQuery.ajax({
        url: "FirstExercise/ArrayToList",
        type: "POST",
        data: jQuery.param({ arrayForList: inputValue}),
        success: function (response) {
            console.log(jQuery("#toListResult"))
            console.log(response)
            console.log(inputValue)
            jQuery("#toListResult").html(response);
        },
        error: function () {
            alert("error");
        }
    });
}

jQuery("#toArrayBtn").on("click", ListToArray);
function ListToArray() {
    let inputValue = ["test", "JS", "C#", "AJAX"];
    jQuery.ajax({
        url: "FirstExercise/ListToArray",
        type: "POST",
        data: jQuery.param({ listForArray: inputValue}),
        success: function (response) {
            console.log(response)
            console.log(inputValue)
            jQuery("#toArrayResult").html(response);
        },
        error: function () {
            alert("error");
        }
    })
}

jQuery("#boolBtn").on("click", Bool);
function Bool() {
    jQuery.ajax({
        url: `FirstExercise/Bool?a=${jQuery('#input11').val()}`,
        type: "GET",
        success: function (response) {
            jQuery("#boolResult").text(response);
        },
        error: function () {
            alert("error");
        }
    });
}