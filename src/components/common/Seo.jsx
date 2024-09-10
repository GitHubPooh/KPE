import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        KP-Engineering-Services
        kpenggs.com
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;
