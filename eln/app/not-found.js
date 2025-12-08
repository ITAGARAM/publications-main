
import Footer from './footer';
export default function NotFound() {
  return (
    // <div>
    //   <h1>404 - Page Not Found</h1>
    //   <p>The page you are looking for does not exist.</p>
    // </div>
    <><div>
    <section className="error_page">
       
        <div className=" flex">
            <div className="error_contain text-center">
                <div className="b_text">
                    <h1 className="f_p  f_700">404</h1>
                </div>
                <h2 className="f_p f_400 f_size_40">Page Not Found</h2>
                <p className="f_400">
                    We’re sorry, the page you have looked for does not exist in our database!
                </p>
                <a href="https://www.logilabeln.com/" className="about_btn btn_hover mt_40 mb_40 ">
                    Go Back to Home Page
                </a>
            </div>
        </div>
    </section>


</div><Footer /></>
  );
}
