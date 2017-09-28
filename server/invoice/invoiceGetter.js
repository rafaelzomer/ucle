function getInvoiceTable(page, tableNum) {
  return page.evaluate((tableNum) => {
    var myTableArray = [];
    $("#content > div:nth-child("+tableNum+") > table > tbody > tr").each(function() {
      var arrayOfThisRow = [];
      var tableData = $(this).find('td');
      if (tableData.length > 0) {
        tableData.each(function() { arrayOfThisRow.push($(this).text()); });
        myTableArray.push(arrayOfThisRow);
      }
    });
    return myTableArray;
  }, tableNum);
}

async function invoiceGetter(page) {    
  await page.goto('https://minha.unesc.net/financial/invoices');
  let invoices = await getInvoiceTable(page, 3);
  let otherInvoices = await getInvoiceTable(page, 5);
  invoices = [...otherInvoices, ...invoices];
  return invoices;
}
export default invoiceGetter;