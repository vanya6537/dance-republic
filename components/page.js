import PageContainer from './page-container';
import Header from './header';

export default function Page({title, description, sticky, formState, isOldDocs, children}) {
    return (
        <PageContainer id="full-page" title={title} description={description} formState={formState}>
            <Header sticky={sticky} isOldDocs={isOldDocs} formState={formState}/>
            {children}
        </PageContainer>
    );
}
