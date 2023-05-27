import resume from "../utils/images/resume.jpg";

export default function Resume () {
    return (
        <main className="flex h-full place-content-center">

            <img 
            className="m-3 shadow-xl rounded-md hover:scale-125 transition-all duration-500 cursor-pointer"
            src={resume}
            alt="William Asbury's resume"/>
        </main>
    )
}