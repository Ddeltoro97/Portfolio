import {useState, useEffect} from 'react';

import {Document, Page} from 'react-pdf';


import styles from './Pdf.module.css'

export default function Pdf({file}){
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);


    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return(
        <div className ={styles.document}>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                .map((x, i) => i + 1)
                .map((page) => {
                    return(
                        <Page
                        pageNumber={page}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        scale={0.2}
                        />
                    )
                })}
            </Document>
            <p>
            </p>    
        </div>
    )
}