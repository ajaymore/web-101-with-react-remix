import type { LinksFunction } from 'remix';

import stylesUrl from '~/styles/layout.css';

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

function Layout() {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item item1">1</div>
        <div className="grid-item item2">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        {/* <div className="grid-item">5</div> */}
      </div>
    </div>
  );
  //   return (
  //     <div>
  //       <div className="flex-container">
  //         <div className="flex-item"></div>
  //         <div className="flex-item"></div>
  //         <div className="flex-item"></div>
  //         <div className="flex-item"></div>
  //       </div>
  //     </div>
  //   );
}

export default Layout;
