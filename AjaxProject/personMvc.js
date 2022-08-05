﻿Slices.PersonMvc = {
    
    init: function () {
        let me = this;
        //jQuery.post(Main.fixPath("/MVCTutorial/Convert"),
        //    { id: 1 },
        //  function (result) {
        //       log(result);
        //   }        )

        me.getSelectedRow();
       
    },


    getSelectedRow: function () {
        let me = this;
        let selectedRow = "";
        jQuery("tbody").on("click", function (e) {
            selectedRow = e.target.closest("tr");
            me.getDataFromSelectedRow(selectedRow);
        })
        
        
    },

    getDataFromSelectedRow: function (selectedRow) {
        let me = this;
        let idEdit = jQuery("#Id_Edit");
        idEdit = selectedRow.children[0].children[0].value;
       
        const firstNameEdit = jQuery("#First_Name_Edit").val(selectedRow.children[1].textContent.trim(" "));
        const lastNameEdit = jQuery("#Last_Name_Edit").val(selectedRow.children[2].textContent.trim(" "));
        const fullNameEdit = jQuery("#Full_Name_Edit").val(selectedRow.children[3].textContent.trim(" "));
        const ageEdit = jQuery("#Age_Edit").val(selectedRow.children[4].textContent.trim(" "));
        me.editData(idEdit, firstNameEdit, lastNameEdit, fullNameEdit, ageEdit, selectedRow);
    },

    editData: function (idEdit, firstNameEdit, lastNameEdit, fullNameEdit, ageEdit, selectedRow) {
        let me = this;
        jQuery("#submitEditBtn").click(function (e) {
            let obj = {
                Id: idEdit,
                FirstName: firstNameEdit.val(),
                LastName: lastNameEdit.val(),
                //FullName: firstNameEdit.val() + " " + lastNameEdit.val(),
                FullName: fullNameEdit.val(),
                Age: ageEdit.val()

            }


            jQuery.ajax({
                url: "MVCTutorial/Edited/",
                type: "POST",
                //data: jQuery.param({personModel: obj }),
                data: obj,
                success: function (response) {

                    log(response);
                },

            });
            e.preventDefault();
        })
       
    },   
};