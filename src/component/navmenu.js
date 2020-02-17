import React from "react";
import "./navmenu.css";

export default function Navmenu(props) {
  console.log(props);
  return (
    <div>
      <ul className="list">
        {props.navmenu.map(el => (
          <li className="dropdown">
            {el.tag}
            {el.subMenu ? (
              <ul className="dropdown-content">
                {el.subMenu.map(el => (
                  <li>{el}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default function Navmenu(props) {
//   console.log(props);
//   return (
//     <div>
//       <ul>
//         {props.navmenu.map(el => (
//           <li>
//             {el.tag}
//             {el.subMenu ? (
//               <ul>
//                 {el.subMenu.map(el => (
//                   <li>{el}</li>
//                 ))}
//               </ul>
//             ) : null}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
