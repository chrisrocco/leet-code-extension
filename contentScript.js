
var limit = 1000;
$.get("https://leetcode.com/api/submissions/?offset=0&limit="+limit+"&lastkey=")
    .then(function(res){
        var submissions = res.submissions_dump;

        var tableData = submissions.map(function( obj ){
            obj.url = '<a href="'+obj.url+'" target="_blank">'+obj.url+'</a>';
            return obj;
        });

        console.log(submissions);

        var appContainer = $("#submission-list-app");
        appContainer.empty();
        appContainer.append("<table id='datatable' class='table table-striped table-bordered'></table>");

        $("#datatable").DataTable({
            columns: [
                { "title": "Pending?", "data": "is_pending" },
                { "title": "Language", "data": "lang" },
                { "title": "Runtime", "data": "runtime" },
                { "title": "Status", "data": "status_display" },
                { "title": "Time", "data": "time" },
                { "title": "Title", "data": "title" },
                { "title": "URL", "data": "url" }
            ],
            data: tableData
        })
    });
