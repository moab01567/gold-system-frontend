import {ChangeUrlPath} from "../../shared/util/URLChanger.ts";
import {staticPageData} from "../StaticPageData.ts";
import {PageLayout} from "../pageLayout/PageLayout.tsx";
import css from "./StorePage.module.css"
import {StoreInfoFeature} from "../../features/store/storeInfoFeature/StoreInfoFeature.tsx";

export function StorePage(){
    ChangeUrlPath(staticPageData.storePage.path)

    return <>
        <PageLayout
            pageContent={
            <div className={css.storePageGrid}>
                <StoreInfoFeature/>
            </div>}
            currentPage={staticPageData.storePage}/>
    </>
}