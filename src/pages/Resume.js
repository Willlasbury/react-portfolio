// import resume from "../utils/images/Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

export default function Resume() {
  return (
    <main className="flex h-full place-content-center">
        <article className="shadow-2xl">

      <Document file="resume.pdf">
        <Page pageNumber={1} renderTextLayer={false}/>
      </Document>
        </article>
    </main>
  );
}
