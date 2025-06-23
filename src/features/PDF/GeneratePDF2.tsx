import html2pdf from "html2pdf.js";
import ReactDOM from "react-dom/client";
import {InvoiceDTO} from "../../shared/backendTypes/InvoiceTypes.ts";
import {Mode} from "../invoice/createInvoiceFeature/InvoiceUtil.ts";
import {InvoiceTemplate} from "../../components/invoiceTemplate/InvoiceTemplate.tsx";

function timeout(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GeneratePDF2(invoiceDTO: InvoiceDTO) {
  const opt = {
    margin: 1,
    filename: invoiceDTO.invoiceInfo.invoiceId +" "+ invoiceDTO.invoiceInfo.invoiceDate + ".pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  const element = document.createElement("div");
  const root = ReactDOM.createRoot(element);
  root.render(<InvoiceTemplate
            mode={Mode.printMode}
            invoiceDetails={invoiceDTO.invoiceDetails}
            handleUpdateProduct={()=>{}}
            handleCreateRow={()=>{}}
            handleDeleteRow={()=>{}}
            handleUpdateInvoiceInfo={()=>{}}
            invoiceInfoData={invoiceDTO.invoiceInfo}
            invoiceName={invoiceDTO.invoiceInfo.invoiceSaleName}/>
  );
  await timeout(200)
  await html2pdf().set(opt).from(element).save();

}
