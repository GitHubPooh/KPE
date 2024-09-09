import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        Nullsafe - Software Development Consultants and labs
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;
