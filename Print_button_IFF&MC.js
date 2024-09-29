/**
 * @NApiVersion 2.0
 * @NScriptType UserEventScript
 */
define(['N/ui/serverWidget','N/record'], function(serverWidget,record) {
    function beforeLoad(context) {
        if (context.type === context.UserEventType.VIEW) {
            var form = context.form;
            var currentRecord = context.newRecord;
            var status = currentRecord.getValue({
                fieldId: 'shipstatus'
                   });
                   if(status=='B' && status=='C'){
            form.addButton({
                id: 'custpage_view_search',
                label: 'Print MC',
                functionName: 'myButton'
            });
            form.clientScriptModulePath = 'SuiteScripts/Print_BTN_MCclient.js'; // Path to your Client Script
        }
        else{
            return;
        }
    }
}


    return {
        beforeLoad: beforeLoad
    };
});