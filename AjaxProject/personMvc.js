
Slices.PersonMvc = {

    init: function () {
        //debugger;
        let me = this;
        console.log("TEST");
        me.getSelectedRow();
        me.submitSaveForm();
        me.deleteData();
    },


    getSelectedRow: function () {
        let me = this;
        let selectedRow = "";
        jQuery("tbody").on("click", function (e) {
            selectedRow = e.target.closest("tr");
            let idEdit = jQuery("#Id_Edit");
            idEdit = selectedRow.children[0].children[0].value;

            const firstNameEdit = jQuery("#First_Name_Edit").val(selectedRow.children[1].textContent.trim(" "));
            const lastNameEdit = jQuery("#Last_Name_Edit").val(selectedRow.children[2].textContent.trim(" "));
            const fullNameEdit = jQuery("#Full_Name_Edit").val(selectedRow.children[3].textContent.trim(" "));
            const ageEdit = jQuery("#Age_Edit").val(selectedRow.children[4].textContent.trim(" "));
            me.editData(idEdit, firstNameEdit, lastNameEdit, fullNameEdit, ageEdit, selectedRow);
            me.deleteData(idEdit, firstNameEdit, lastNameEdit, fullNameEdit, ageEdit, selectedRow);
        })

    },

    editData: function (idEdit, firstNameEdit, lastNameEdit, fullNameEdit, ageEdit, selectedRow) {
       
        jQuery("#submitEditBtn").click(function (e) {
            let obj = {
                Id: idEdit,
                FirstName: firstNameEdit.val(),
                LastName: lastNameEdit.val(),
                FullName: fullNameEdit.val(),
                Age: ageEdit.val()
            }

            // EDIT 
            jQuery.ajax({
                url: "MVCTutorial/Edited",
                type: "POST",
                data: obj,
                success: function (response) {
                    log(selectedRow);
                    selectedRow.children[1].innerText = response.FirstName;
                    selectedRow.children[2].innerText = response.LastName;
                    selectedRow.children[3].innerText = response.FullName;
                    selectedRow.children[4].innerText = response.Age;

                },


            });
            e.preventDefault();
        })
    },



    submitSaveForm: function () {
       
        jQuery("#submitSaveBtn").on("click", function (e) {
            e.preventDefault(e);
            let formData = {
                FirstName: jQuery("#First_Name_Save").val(),
                LastName: jQuery("#Last_Name_Save").val(),
                FullName: jQuery("#Full_Name_Save").val(),
                Age: jQuery("#Age_Save").val(),
            };

            //ADD
            jQuery.ajax({
                url: "MVCTutorial/Add",
                type: "POST",
                data: formData,
                success: function (response) {
                    let tBody = jQuery("tbody");
                    let txt = `
                        <tr>
                           
                            <td></td>
                            <td>${response.FirstName}</td>
                            <td>${response.LastName}</td>
                            <td>${response.FullName}</td>
                            <td>${response.Age}</td>
                        </tr>
                    `;

                    tBody.last().append(txt);

                }
            })

        })
    },

    deleteData: function (idEdit, firstNameEdit, lastNameEdit, fullNameEdit, ageEdit, selectedRow) {
       
        jQuery("#deleteBtn").on("click", function (e) {
            e.preventDefault();
            
            let obj = {
                Id: idEdit,
                FirstName: firstNameEdit.val(),
                LastName: lastNameEdit.val(),
                FullName: fullNameEdit.val(),
                Age: ageEdit.val()
            }

            jQuery.ajax({
                url: "MVCTutorial/Delete",
                type: "DELETE",
                data: obj,
                success: function (response) {
                    selectedRow.remove();
                }
            })
        })
    }


};