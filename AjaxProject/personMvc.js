Slices.PersonMvc = {
    
    init: function () {
        var me = this;
        log("init");
        $.post(Main.fixPath("/MVCTutorial/Convert"),
            { id: 1 },
            function (result) {
                log(result);
            }        )

        //me.testFunction();
        me.selectedRowFunction();
        

    },

    //testFunction: function () {
    //    var me = this;
    //    me.testFunction2();
    //    log('testFunction')
    //},
    //testFunction2: function () {

    //},

    selectedRowFunction: function () {
        
        var me = this;
        $("tbody").click(function (e) {
            var selectedRow = e.target.closest("tr");
            console.log(selectedRow);
        });
    },
    


};