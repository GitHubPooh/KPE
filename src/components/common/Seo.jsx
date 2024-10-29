import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        Supplier Master
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;
