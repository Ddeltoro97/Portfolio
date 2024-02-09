import Pdf from '../../components/pdf/Pdf.jsx'
import henry from './Henry Diploma.pdf';
import { useTranslation } from 'react-i18next';

export default function Certificates(){
    const [t, i18n] = useTranslation("certificates")
    return(
        <div>
            <h1>{t("header.message")}</h1>
            <hr />
            <Pdf file={henry}/>
        </div>
    )
}