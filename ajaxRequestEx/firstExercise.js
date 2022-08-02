

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
        url: 'FirstExercise/ArrayToList',
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

////jQuery.ajax({
////    url: `FirstExerciseController/SumPost?a=${input1.val()}&b=${input2.val()}`,
////    type: 'POST',
////    data: jQuery.param({ num1: 1, num2: 2 }),
////    succes: function (response) {
////        console.log(response);
////        jQuery("#test").html(response);
////    },
////    error: function () {
////        alert("error");
////    }
////});

//jQuery(document).ready(function () {
//    jQuery('#strConcatBtn').on("click", function () {
//        console.log("test")
//        jQuery.ajax({
//            url: `FirstExerciseController/StringsConcat?str1=${jQuery('#input1').val()}&str2=${jQuery('#input2').val()}`,
//            //url: `FirstExerciseController/SumInt?a=${jQuery('#input1').val()}&b=${jQuery('#input2').val()}`,
//            type: "GET",
//            succes: function (response) {
//                console.log(response);
//                jQuery("#concatResult").val(response);
//            },
//            error: function () {
//                alert("error");
//            }
//        });

//    })
//});
   





