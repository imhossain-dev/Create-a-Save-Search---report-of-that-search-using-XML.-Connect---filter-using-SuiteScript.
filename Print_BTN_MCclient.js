/**
 * @NApiVersion 2.0
 * @NScriptType ClientScript
 * @NModuleScope Public
 */
// define(['N/url', 'N/currentRecord', 'N/redirect','N/search'], function(url, currentRecord, redirect,search) {
//     function pageInit(context) {}
//     function redirectToSavedSearch() {
//         var record = currentRecord.get();

//         // Example: Assume the dynamic filter is based on a field value from the current record
//         var recordId = record.id; 
//         var recordType = record.type; 
//         var dynamicFilterValue = record.getValue({ fieldId: 'tranid' }); // Use your field here

//         // Construct the URL for the saved search with a dynamic filter
//         var savedSearchUrl = url.resolveTaskLink({
//             id: 'customsearch664',
//             params: {
//                 searchtype: 'Transaction', // Replace with your saved search ID
//                 'custrecord_as_iffno': dynamicFilterValue // Add dynamic filter here
//             }
//         });

//         // Redirect the user to the saved search page
//         redirect.redirect({
//             url: savedSearchUrl
//         });
//     }

//     return {
//         pageInit:pageInit,
//         redirectToSavedSearch: redirectToSavedSearch
//     };
define(['N/search','N/currentRecord'], function (search,currentRecord) {
    /**
     * @NApiVersion 2.x
     * @NScriptType ClientScript
     */
    
    var exports = {};
    function pageInit(context) {
        // TODO
    }
      
    function myButton(context){   
        var record = currentRecord.get();

                // Example: Assume the dynamic filter is based on a field value from the current record
                // var dynamicFilterValue = record.getValue({ fieldId: 'tranid' });
        window.open('https://8176422-sb1.app.netsuite.com/app/common/search/searchresults.nl?rectype=574&searchtype=Custom&CUSTRECORD_AS_IFFNO='+ record.id +'&CUSTRECORD66=%40ALL%40&CUSTRECORD_AS_PROFORMA=%40ALL%40&style=NORMAL&report=&grid=&searchid=664&dle=T&sortcol=Custom_NAME_raw&sortdir=ASC&csv=HTML&OfficeXML=F&pdf=&size=50&_csrf=NeXpltzbo-UH2vN-_2oBy7DlgeDXncrNsc-Rl26B3_XBw8_EyjrZ6FzDaOaMQ3DG-AFb8D8WIcRaod91P4CHwgh2Vg8x_L3A-VOKlQ821azbak-rcMuRD4upO6MNSwjfq_5BwlR-We04IIVF458lezExAxGe_OwKTrev9bJJarQ%3D&twbx=F');
    }
    exports.myButton = myButton;
    exports.pageInit = pageInit;
    return exports;
});
