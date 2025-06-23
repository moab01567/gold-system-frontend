import {Mode} from "./InvoiceUtil.ts";
import {InvoiceTemplate} from "../../../components/invoiceTemplate/InvoiceTemplate.tsx";
import {useState} from "react";
import css from "./InvoiceFeature.module.css";
import {GeneratePDF2} from "../../PDF/GeneratePDF2.tsx";
import {CreateInvoicePostAPI} from "./InvoiceService.ts";
import {
  InvoiceDetailsDTO,
  InvoiceDTO,
  InvoiceInfoDTO,
  TransactionType,
} from "../../../shared/backendTypes/InvoiceTypes.ts";
import {useNavigate} from "react-router-dom";
import {staticPageData} from "../../../pages/StaticPageData.ts";
import {SessionStorageKey, SetSessionStorage} from "../../../shared/storage/SessionStorage.ts";
import {Loading} from "../../../components/loading/loading/Loading.tsx";

interface InvoiceFeatureProps {
  invoiceName: string;
}

export function InvoiceFeature({ invoiceName }: InvoiceFeatureProps) {
  const [mode, setMode] = useState<Mode>(Mode.editMode);
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [invoiceDetails, setInvoiceDetails] = useState<InvoiceDetailsDTO[]>([]);
  const [invoiceInfoData, setInvoiceInfoData] = useState<InvoiceInfoDTO>({
    invoiceId: 0,
    invoiceSaleName: "",
    invoiceDate: "",
    customerName: "",
    customerAddress: "",
    customerPhone: "",
  });
  const handleUpdateInvoiceInfo = (invoiceInfo: InvoiceInfoDTO) => {
    setInvoiceInfoData(invoiceInfo);
  };
  const handleCreateRow = (transactionType: TransactionType) => {
    setInvoiceDetails([
      ...invoiceDetails,
      {
        invoiceDetailsId: Math.random(),
        transactionType: transactionType,
        pricePerGm: 0,
        weightMg: 0,
        weightGm: 0,
        wagePerGm: 0,
        goldKarat: 0,
        description: "",
      },
    ]);
  };
  const handleDeleteRow = (id: number) => {
    setInvoiceDetails(
      invoiceDetails.filter((product) => product.invoiceDetailsId != id),
    );
  };
  const handleChangeMode = () => {
    if (mode == Mode.editMode) setMode(Mode.printMode);
    else setMode(Mode.editMode);
  };
  const handleUpdateProduct = (newProduct: InvoiceDetailsDTO) => {
    const newProductList: InvoiceDetailsDTO[] = invoiceDetails.map(
      (product): InvoiceDetailsDTO => {
        return product == newProduct ? newProduct : product;
      },
    );
    setInvoiceDetails(newProductList);
  };
  const handleGenerate = async () => {
    try{
      setLoading(true)
      const invoiceDTO: InvoiceDTO = await CreateInvoicePostAPI(
          invoiceInfoData,
          invoiceDetails,
      );

      setInvoiceInfoData(invoiceDTO.invoiceInfo);
      setInvoiceDetails(invoiceDTO.invoiceDetails);

      await GeneratePDF2(invoiceDTO);
      SetSessionStorage(SessionStorageKey.INVOICE_ID_KEY, invoiceDTO.invoiceInfo.invoiceId.toString())
      navigate(staticPageData.searchInvoice.path)
    }catch (e){
      console.error(e)
      setLoading(false);
    }

  };
  return (
    <>
      <div className={css.InvoiceFeatureDiv}>
        <div className={css.InvoiceFeatureButtonDiv}>
          <button className={css.button} onClick={handleChangeMode}>
            Change Mode / تغيير الوضع
          </button>
          {mode == Mode.editMode ? (
            <></>
          ) : (
            <button className={css.button} onClick={handleGenerate}>
              {!loading?"Create Invoice / إنشاء الفاتورة":<Loading/>}
            </button>
          )}
        </div>
        <InvoiceTemplate
          invoiceName={invoiceName}
          invoiceInfoData={invoiceInfoData}
          handleUpdateInvoiceInfo={handleUpdateInvoiceInfo}
          handleDeleteRow={handleDeleteRow}
          handleCreateRow={handleCreateRow}
          handleUpdateProduct={handleUpdateProduct}
          mode={mode}
          invoiceDetails={invoiceDetails}
        />
      </div>
    </>
  );
}
