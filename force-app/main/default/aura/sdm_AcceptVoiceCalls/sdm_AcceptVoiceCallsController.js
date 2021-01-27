({
    onWorkAssigned : function(component, event, helper) {
        var omniAPI = component.find("omniToolkit");
        console.log("Work assigned.");
        var workItemId = event.getParam('workItemId');
        var workId = event.getParam('workId');
        console.log(workItemId);
        console.log(workId);
        if (workItemId.startsWith("0LQ")){
            
            omniAPI.acceptAgentWork({workId: workId}).then(function(res) {
                if (res) {
                    console.log("Accepted work successfully");
                } else {
                    console.log("Accept work failed");
                }
            }).catch(function(error) {
                console.log(error);
            });
        }
    }, 
})