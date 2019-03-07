({
	navigate : function(component, event, helper) {
       var urlEvent = $A.get("e.force:navigateToURL");
        var myUrl = '/' + component.get("v.recordId");
        urlEvent.setParams({
          "url": myUrl
        });
        urlEvent.fire();
    }
})