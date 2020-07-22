import PageContainer from './page-container';
import Header from './header';
import {useState} from "react";

export default function Page({title, description, sticky, formState, isOldDocs, children}) {
    // const [showModal, toggleModal] = useState(false);
    // const formPageState = {showModal, toggleModal}
    return (
        <PageContainer id="full-page" title={title} description={description} formState={formState}>
            <Header sticky={sticky} isOldDocs={isOldDocs} formState={formState}/>
            {children}
        </PageContainer>
    );
}
