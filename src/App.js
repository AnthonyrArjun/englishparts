import './App.css';
import './index.css'
import Head from './components/Head';
import H1TextHeader from './components/H1TextHeader';
import BreadcrumbContainer from './components/BreadcrumbContainer.js'
import UtilityBar from './components/UtilityBar';
import ContentWrapper from './components/ContentWrapper';
import VinControl from './components/VinControl';
import Footer from './components/Footer';
import HeaderNavigationContainer from './components/HeaderNavigationContainer';
import ServerName from './components/ServerName';
import ProductExtras from './components/ProductExtras';



function App() {
  return (
    <>
      <Head />
      <body class="Default dealer default ">
        <form method="post" action>
          <a href="#" tabIndex={0} className="skip" target="_self">Skip to Content</a>
          <H1TextHeader />
          <div id="ContentPlaceHolderContainer" className="content en">
            <HeaderNavigationContainer />
            <UtilityBar />
            <BreadcrumbContainer />
            <ContentWrapper />
            <VinControl />
            <Footer />
            <div class="cf"></div>
            <ServerName />
          </div>
          <input type="hidden" name="hdnSearchBtnFitmentQueryString" id="hdnSearchBtnFitmentQueryString"></input>
        </form>
        <ProductExtras />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
      </body>
    </>
  );
}

export default App;
